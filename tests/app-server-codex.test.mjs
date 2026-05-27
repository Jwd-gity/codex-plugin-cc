import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";

import {
  parseStructuredOutput,
  buildPersistentTaskThreadName,
  TASK_THREAD_PREFIX,
  DEFAULT_CONTINUE_PROMPT
} from "../plugins/codex/scripts/lib/codex.mjs";
import { CodexAppServerClient, BROKER_ENDPOINT_ENV, BROKER_BUSY_RPC_CODE } from "../plugins/codex/scripts/lib/app-server.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// ---------------------------------------------------------------------------
// DEFAULT_CAPABILITIES shape guard (Finding 1)
// ---------------------------------------------------------------------------

test("app-server.mjs DEFAULT_CAPABILITIES has all InitializeCapabilities required fields", () => {
  const source = fs.readFileSync(
    path.join(ROOT, "plugins", "codex", "scripts", "lib", "app-server.mjs"),
    "utf8"
  );
  const capsMatch = source.match(/const DEFAULT_CAPABILITIES = \{([\s\S]*?)\};/);
  assert.ok(capsMatch, "DEFAULT_CAPABILITIES block not found in app-server.mjs");
  const capsBody = capsMatch[1];

  assert.ok(capsBody.includes("experimentalApi:"), "missing experimentalApi field");
  assert.ok(capsBody.includes("requestAttestation:"), "missing requestAttestation field");
  assert.ok(capsBody.includes("optOutNotificationMethods:"), "missing optOutNotificationMethods field");
});

test("app-server.mjs DEFAULT_CAPABILITIES requestAttestation defaults to false", () => {
  const source = fs.readFileSync(
    path.join(ROOT, "plugins", "codex", "scripts", "lib", "app-server.mjs"),
    "utf8"
  );
  assert.ok(
    source.includes("requestAttestation: false"),
    "requestAttestation should default to false"
  );
});

// ---------------------------------------------------------------------------
// buildThreadParams shape guard (Finding 2)
// ---------------------------------------------------------------------------

test("codex.mjs buildThreadParams returns all required ThreadStartParams fields", () => {
  const source = fs.readFileSync(
    path.join(ROOT, "plugins", "codex", "scripts", "lib", "codex.mjs"),
    "utf8"
  );
  const fnMatch = source.match(/function buildThreadParams\(cwd, options = \{\}\) \{([\s\S]*?)\n\}/);
  assert.ok(fnMatch, "buildThreadParams function not found in codex.mjs");
  const fnBody = fnMatch[1];

  assert.ok(fnBody.includes("cwd,"), "missing cwd field");
  assert.ok(fnBody.includes("model:"), "missing model field");
  assert.ok(fnBody.includes("approvalPolicy:"), "missing approvalPolicy field");
  assert.ok(fnBody.includes("sandbox:"), "missing sandbox field");
  assert.ok(fnBody.includes("serviceName:"), "missing serviceName field");
  assert.ok(fnBody.includes("ephemeral:"), "missing ephemeral field");
});

test("codex.mjs buildThreadParams does not contain removed experimentalRawEvents field", () => {
  const source = fs.readFileSync(
    path.join(ROOT, "plugins", "codex", "scripts", "lib", "codex.mjs"),
    "utf8"
  );
  const fnMatch = source.match(/function buildThreadParams\(cwd, options = \{\}\) \{([\s\S]*?)\n\}/);
  assert.ok(fnMatch, "buildThreadParams function not found");
  assert.ok(
    !fnMatch[1].includes("experimentalRawEvents"),
    "experimentalRawEvents should have been removed"
  );
});

// ---------------------------------------------------------------------------
// parseStructuredOutput
// ---------------------------------------------------------------------------

test("parseStructuredOutput parses valid JSON", () => {
  const result = parseStructuredOutput('{"key":"value"}');
  assert.deepEqual(result.parsed, { key: "value" });
  assert.equal(result.parseError, null);
  assert.equal(result.rawOutput, '{"key":"value"}');
});

test("parseStructuredOutput returns fallback on null input", () => {
  const result = parseStructuredOutput(null);
  assert.equal(result.parsed, null);
  assert.equal(result.parseError, "Codex did not return a final structured message.");
  assert.equal(result.rawOutput, "");
});

test("parseStructuredOutput returns fallback on empty string", () => {
  const result = parseStructuredOutput("");
  assert.equal(result.parsed, null);
  assert.ok(result.parseError);
});

test("parseStructuredOutput returns parse error on malformed JSON", () => {
  const result = parseStructuredOutput("{bad json");
  assert.equal(result.parsed, null);
  assert.ok(result.parseError);
  assert.equal(result.rawOutput, "{bad json");
});

test("parseStructuredOutput uses custom fallback message", () => {
  const result = parseStructuredOutput(null, { failureMessage: "custom msg" });
  assert.equal(result.parseError, "custom msg");
});

test("parseStructuredOutput passes through extra fallback fields", () => {
  const result = parseStructuredOutput('{"a":1}', { extra: 42 });
  assert.equal(result.extra, 42);
});

// ---------------------------------------------------------------------------
// buildPersistentTaskThreadName
// ---------------------------------------------------------------------------

test("buildPersistentTaskThreadName includes TASK_THREAD_PREFIX", () => {
  const name = buildPersistentTaskThreadName("fix the bug");
  assert.ok(name.startsWith(TASK_THREAD_PREFIX));
  assert.ok(name.includes("fix the bug"));
});

test("buildPersistentTaskThreadName truncates long prompts", () => {
  const longPrompt = "a".repeat(200);
  const name = buildPersistentTaskThreadName(longPrompt);
  assert.ok(name.length < 200, "long prompt should be truncated");
  assert.ok(name.includes("..."), "truncated prompt should contain ellipsis");
});

test("buildPersistentTaskThreadName handles empty prompt", () => {
  const name = buildPersistentTaskThreadName("");
  assert.equal(name, TASK_THREAD_PREFIX);
});

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

test("BROKER_ENDPOINT_ENV is exported", () => {
  assert.equal(typeof BROKER_ENDPOINT_ENV, "string");
  assert.ok(BROKER_ENDPOINT_ENV.length > 0);
});

test("BROKER_BUSY_RPC_CODE is a negative number", () => {
  assert.ok(typeof BROKER_BUSY_RPC_CODE === "number");
  assert.ok(BROKER_BUSY_RPC_CODE < 0);
});

test("DEFAULT_CONTINUE_PROMPT is a non-empty string", () => {
  assert.ok(typeof DEFAULT_CONTINUE_PROMPT === "string");
  assert.ok(DEFAULT_CONTINUE_PROMPT.length > 0);
});

test("TASK_THREAD_PREFIX is 'Codex Companion Task'", () => {
  assert.equal(TASK_THREAD_PREFIX, "Codex Companion Task");
});

// ---------------------------------------------------------------------------
// CodexAppServerClient.connect rejects when codex binary is missing
// ---------------------------------------------------------------------------

test("CodexAppServerClient.connect throws when codex binary is unavailable", async () => {
  const emptyDir = fs.mkdtempSync(path.join(import.meta.dirname ?? path.dirname(fileURLToPath(import.meta.url)), "no-codex-"));
  fs.writeFileSync(path.join(emptyDir, ".gitkeep"), "");
  const emptyEnv = { ...process.env, PATH: emptyDir };
  delete emptyEnv[BROKER_ENDPOINT_ENV];

  await assert.rejects(
    () => CodexAppServerClient.connect(emptyDir, { env: emptyEnv, disableBroker: true }),
    (err) => err instanceof Error
  );

  fs.rmSync(emptyDir, { recursive: true, force: true });
});

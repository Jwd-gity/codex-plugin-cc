import test from "node:test";
import assert from "node:assert/strict";

import { nowIso, shorten, looksLikeVerificationCommand } from "../plugins/codex/scripts/lib/utils.mjs";

test("nowIso returns an ISO 8601 string", () => {
  const result = nowIso();
  assert.match(result, /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
});

test("shorten returns empty string for falsy input", () => {
  assert.equal(shorten(null), "");
  assert.equal(shorten(undefined), "");
  assert.equal(shorten(""), "");
});

test("shorten returns trimmed text when within limit", () => {
  assert.equal(shorten("  hello  "), "hello");
  assert.equal(shorten("short", 10), "short");
});

test("shorten collapses whitespace", () => {
  assert.equal(shorten("hello   world"), "hello world");
});

test("shorten truncates with ellipsis when exceeding limit", () => {
  const result = shorten("a very long string that goes on", 10);
  assert.equal(result, "a very ...");
  assert.equal(result.length, 10);
});

test("shorten uses default limit of 72", () => {
  const short = "a".repeat(72);
  assert.equal(shorten(short), short);
  assert.equal(shorten(short + "x"), short.slice(0, 69) + "...");
});

test("looksLikeVerificationCommand returns true for test commands", () => {
  assert.equal(looksLikeVerificationCommand("npm test"), true);
  assert.equal(looksLikeVerificationCommand("cargo test"), true);
  assert.equal(looksLikeVerificationCommand("pytest"), true);
  assert.equal(looksLikeVerificationCommand("lint src/"), true);
  assert.equal(looksLikeVerificationCommand("make build"), true);
  assert.equal(looksLikeVerificationCommand("tsc --noEmit"), true);
  assert.equal(looksLikeVerificationCommand("eslint ."), true);
  assert.equal(looksLikeVerificationCommand("ruff check ."), true);
});

test("looksLikeVerificationCommand returns false for non-verification commands", () => {
  assert.equal(looksLikeVerificationCommand("git status"), false);
  assert.equal(looksLikeVerificationCommand("echo hello"), false);
  assert.equal(looksLikeVerificationCommand("ls -la"), false);
});

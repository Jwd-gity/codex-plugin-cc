import test from "node:test";
import assert from "node:assert/strict";

import {
  extractReasoningSections,
  mergeReasoningSections,
  normalizeReasoningText,
  extractThreadId,
  extractTurnId,
} from "../plugins/codex/scripts/lib/codex.mjs";

// --- normalizeReasoningText ---

test("normalizeReasoningText collapses whitespace", () => {
  assert.equal(normalizeReasoningText("  hello   world  "), "hello world");
});

test("normalizeReasoningText returns empty string for null/undefined", () => {
  assert.equal(normalizeReasoningText(null), "");
  assert.equal(normalizeReasoningText(undefined), "");
});

test("normalizeReasoningText coerces non-string input", () => {
  assert.equal(normalizeReasoningText(42), "42");
});

// --- extractReasoningSections ---

test("extractReasoningSections returns empty array for falsy input", () => {
  assert.deepEqual(extractReasoningSections(null), []);
  assert.deepEqual(extractReasoningSections(undefined), []);
  assert.deepEqual(extractReasoningSections(""), []);
  assert.deepEqual(extractReasoningSections(0), []);
});

test("extractReasoningSections normalizes and returns single string", () => {
  assert.deepEqual(extractReasoningSections("  hello  world  "), ["hello world"]);
});

test("extractReasoningSections recursively flattens arrays", () => {
  assert.deepEqual(extractReasoningSections(["a", ["b", "c"]]), ["a", "b", "c"]);
});

test("extractReasoningSections extracts from object with .text", () => {
  assert.deepEqual(extractReasoningSections({ text: "reasoning" }), ["reasoning"]);
});

test("extractReasoningSections extracts from object with .summary", () => {
  assert.deepEqual(extractReasoningSections({ summary: "note" }), ["note"]);
});

test("extractReasoningSections extracts from object with .content", () => {
  assert.deepEqual(extractReasoningSections({ content: "details" }), ["details"]);
});

test("extractReasoningSections extracts from object with .parts", () => {
  assert.deepEqual(extractReasoningSections({ parts: ["a", "b"] }), ["a", "b"]);
});

test("extractReasoningSections returns empty for non-matching object", () => {
  assert.deepEqual(extractReasoningSections({ unrelated: "field" }), []);
});

test("extractReasoningSections preserves duplicate strings (dedup is mergeReasoningSections' job)", () => {
  assert.deepEqual(extractReasoningSections(["same", "same"]), ["same", "same"]);
});

test("extractReasoningSections handles nested heterogeneous structures", () => {
  const input = [
    null,
    { text: " first " },
    " second ",
    [{ summary: "  third  " }],
  ];
  assert.deepEqual(extractReasoningSections(input), ["first", "second", "third"]);
});

// --- mergeReasoningSections ---

test("mergeReasoningSections merges non-overlapping sections", () => {
  assert.deepEqual(mergeReasoningSections(["a"], ["b"]), ["a", "b"]);
});

test("mergeReasoningSections deduplicates identical sections", () => {
  assert.deepEqual(mergeReasoningSections(["same"], ["same"]), ["same"]);
});

test("mergeReasoningSections deduplicates after normalization", () => {
  assert.deepEqual(mergeReasoningSections(["  hello  "], ["hello"]), ["hello"]);
});

test("mergeReasoningSections filters empty and whitespace-only sections", () => {
  assert.deepEqual(mergeReasoningSections([""], ["   "]), []);
});

test("mergeReasoningSections handles empty inputs", () => {
  assert.deepEqual(mergeReasoningSections([], []), []);
});

// --- extractThreadId ---

test("extractThreadId returns null for null/undefined input", () => {
  assert.equal(extractThreadId(null), null);
  assert.equal(extractThreadId(undefined), null);
});

test("extractThreadId returns null for message without params", () => {
  assert.equal(extractThreadId({}), null);
});

test("extractThreadId extracts threadId from params", () => {
  assert.equal(extractThreadId({ params: { threadId: "t-1" } }), "t-1");
});

// --- extractTurnId ---

test("extractTurnId returns null for null input", () => {
  assert.equal(extractTurnId(null), null);
  assert.equal(extractTurnId(undefined), null);
});

test("extractTurnId prefers params.turnId over params.turn.id", () => {
  const msg = { params: { turnId: "a", turn: { id: "b" } } };
  assert.equal(extractTurnId(msg), "a");
});

test("extractTurnId falls back to params.turn.id", () => {
  assert.equal(extractTurnId({ params: { turn: { id: "b" } } }), "b");
});

test("extractTurnId returns null for empty message", () => {
  assert.equal(extractTurnId({}), null);
});

import fs from "node:fs";

export function readHookInput() {
  try {
    const raw = fs.readFileSync(0, "utf8").trim();
    if (!raw) {
      return {};
    }
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export function emitDecision(payload) {
  process.stdout.write(`${JSON.stringify(payload)}\n`);
}

export function logNote(message) {
  if (!message) {
    return;
  }
  process.stderr.write(`${message}\n`);
}

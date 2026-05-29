# Session Memory Protocol (5-Layer Memory Orchestration + Auto-Memory Hooks)

## Auto-Memory Hooks (zero LLM cost)

Two hooks automate memory capture/injection without manual intervention:

| Hook | Trigger | Script | Behavior |
|------|---------|--------|----------|
| `auto-memory-start` | SessionStart | `~/.claude/scripts/auto-memory-start.js` | Reads last 3 session-memory files (7-day window), merges + deduplicates, injects ≤800 tokens into context |
| `auto-memory-stop` | Stop | `~/.claude/scripts/auto-memory-stop.js` | Extracts git log/diff + notepad, filters sensitive info (API keys, tokens), writes `~/.claude/session-data/{date}-memory.tmp` with SHA-256 dedup |

**Shared module:** `~/.claude/scripts/auto-memory-shared.js` — schema, sensitive patterns, TTL rules, dedup.

**Memory entry format:**
```
[session-memory]
date: 2026-05-30
branch: main
commits: feat: xxx, fix: yyy
files_changed: 12
key_decisions:
  - decision 1
sensitive_filtered: false
hash: a1b2c3d4e5f6g7h8
```

**Security:** Filters `sk-*`, `ghp_*`, `password=*`, `token=*`, `Bearer *`, private keys before persisting.

**TTL by commit type:** `feat/refactor` → 90d, `fix/perf/security` → 30d, others → 7d.

**Registration:** `~/.claude/settings.json` → `SessionStart` + `Stop` arrays, timeout 10s.

## Session Start

On every session start, immediately load cross-session memory:

1. **auto-memory-start** (hook): auto-injects recent session summaries (runs first)
2. **memorix** (L3): `memorix_search(query: "recent decisions", limit: 5)` — wakes lazy MCP, loads cross-agent shared memory
3. **claude-mem** (L5): `memory_search(projectId: "codex-plugin-cc", query: "project state", limit: 5)` — loads persistent observations

## Session End

On session end (Stop hook):
1. **auto-memory-stop** (hook): auto-captures git summary + notepad → `session-data/` (runs first)
2. **Manual (optional):** `memorix_store` / `observation_add` for cross-agent shared + persistent observations

| Layer | System | Purpose | Tool |
|-------|--------|---------|------|
| L1 | OMC project-memory | Project metadata (auto-injected) | Direct read |
| L2 | context-mode | Command output indexing | `ctx_search` / `ctx_execute` |
| L3 | memorix | Cross-agent shared memory | `memorix_search` / `memorix_store` |
| L4 | GitNexus | Code symbol graph | `gitnexus_context` / `gitnexus_impact` |
| L5 | claude-mem | Persistent observations | `memory_search` / `observation_add` |

# Session Memory Protocol (5-Layer Memory Orchestration)

On every session start, immediately load cross-session memory:

1. **memorix** (L3): `memorix_search(query: "recent decisions", limit: 5)` — wakes lazy MCP, loads cross-agent shared memory
2. **claude-mem** (L5): `memory_search(projectId: "codex-plugin-cc", query: "project state", limit: 5)` — loads persistent observations

On session end (Stop hook), write key decisions to:
- `memorix_store` — cross-agent shared (codex/cursor/CC all can read)
- `observation_add` — claude-mem persistent store

| Layer | System | Purpose | Tool |
|-------|--------|---------|------|
| L1 | OMC project-memory | Project metadata (auto-injected) | Direct read |
| L2 | context-mode | Command output indexing | `ctx_search` / `ctx_execute` |
| L3 | memorix | Cross-agent shared memory | `memorix_search` / `memorix_store` |
| L4 | GitNexus | Code symbol graph | `gitnexus_context` / `gitnexus_impact` |
| L5 | claude-mem | Persistent observations | `memory_search` / `observation_add` |

<!-- SPECKIT START -->
For additional context about technologies to be used, project structure,
shell commands, and other important information, read the current plan
<!-- SPECKIT END -->

## Project Rules

Rules are modularized in `.claude/rules/` (auto-loaded by Claude Code):

- **`gitnexus.md`** — Code intelligence: impact analysis, rename, detect changes, MCP resources
- **`mcp-protocol.md`** — MCP tool failure handling protocol
- **`memory-protocol.md`** — 5-layer memory orchestration (memorix, claude-mem, context-mode, GitNexus, OMC)

## Commit Protocol

Use `./scripts/committer` instead of raw `git commit` for all commits.

```bash
./scripts/committer "feat: description" file1.js file2.js
./scripts/committer --force "fix: description" lib/parser.js
```

**Why:** Prevents `git add .` accidents, blocks sensitive files (.env, *.key), validates conventional commit format, handles stale index.lock.

**Rules:**
- MUST list specific files (no `.` or `-A`)
- MUST use conventional commit format: `type: description`
- Types: feat, fix, refactor, docs, test, chore, perf, ci, style, build, revert
- Use `--force` when index.lock is stale
- Use `--no-verify` only for emergencies (skips all safety checks)

## Skill Management

```bash
./scripts/skill-audit --no-logs     # Audit skill budget & duplicates
./scripts/validate-skills           # Validate SKILL.md front matter
./scripts/aggregate-skills          # Symlink skills from .claude/ into skills/
```

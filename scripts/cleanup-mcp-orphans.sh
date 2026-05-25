#!/usr/bin/env bash
# cleanup-mcp-orphans.sh — Detect and kill orphaned MCP server processes
#
# Orphan MCP processes are child processes of a now-dead harshal-mcp-proxy
# that continue running on disconnected stdin/stdout, consuming 100% CPU.
#
# Usage:
#   ./cleanup-mcp-orphans.sh          # dry-run (show only)
#   ./cleanup-mcp-orphans.sh --kill   # actually kill orphans
#   ./cleanup-mcp-orphans.sh --force  # SIGKILL instead of SIGTERM

set -euo pipefail

MODE="dry-run"
[[ "${1:-}" == "--kill" ]] && MODE="kill"
[[ "${1:-}" == "--force" ]] && MODE="force"

# Known MCP server process patterns
MCP_PATTERNS=(
    "gitnexus mcp"
    "gitnexus.*mcp"
    "@modelcontextprotocol/server-"
    "@upstash/context7-mcp"
    "@playwright/mcp"
    "codebase-memory-mcp"
    "n8n-mcp"
    "claude-context-mcp"
    "sequential-thinking"
    "@skill-hub/mcp-server"
    "memorix.*serve"
    "open-design.*mcp"
)

# Build grep pattern
GREP_PATTERN=$(IFS='|'; echo "${MCP_PATTERNS[*]}")

# Find our own PID and the proxy PID to exclude
SELF_PID=$$
PROXY_PIDS=$(pgrep -f "harshal-mcp-proxy" 2>/dev/null || true)

# Find candidate orphan processes
ORPHANS=()

while IFS= read -r line; do
    [[ -z "$line" ]] && continue
    pid=$(echo "$line" | awk '{print $1}')
    ppid=$(echo "$line" | awk '{print $2}')
    cmd=$(echo "$line" | awk '{for(i=11;i<=NF;i++) printf "%s ", $i; print ""}')

    # Skip if parent is still alive (not orphaned)
    if kill -0 "$ppid" 2>/dev/null; then
        continue
    fi

    # Skip if parent PID is 1 (init) but proxy is running — that means
    # the proxy restarted and adopted a new set of children
    if [[ -n "$PROXY_PIDS" ]]; then
        # Check if this orphan is a known MCP pattern
        if echo "$cmd" | grep -qE "$GREP_PATTERN"; then
            ORPHANS+=("$pid")
        fi
    else
        # No proxy running at all — any MCP server process is potentially orphaned
        if echo "$cmd" | grep -qE "$GREP_PATTERN"; then
            ORPHANS+=("$pid")
        fi
    fi
done < <(ps -eo pid,ppid,comm,args --no-headers 2>/dev/null | grep -E "$GREP_PATTERN" | grep -v "grep" || true)

# Also find node processes that are children of init (PID 1) and look like MCP servers
while IFS= read -r line; do
    [[ -z "$line" ]] && continue
    pid=$(echo "$line" | awk '{print $1}')
    ppid=$(echo "$line" | awk '{print $2}')

    # Already in list?
    found=false
    for existing in "${ORPHANS[@]}"; do
        [[ "$existing" == "$pid" ]] && found=true && break
    done
    $found && continue

    # Parent is init and proxy is running → orphan from previous proxy instance
    if [[ "$ppid" == "1" ]] && [[ -n "$PROXY_PIDS" ]]; then
        ORPHANS+=("$pid")
    fi
done < <(ps -eo pid,ppid,comm,args --no-headers 2>/dev/null | grep -E "node.*(gitnexus|context7|playwright|mcp)" | grep -v "grep" || true)

# Deduplicate
UNIQUE_ORPHANS=($(printf '%s\n' "${ORPHANS[@]}" | sort -u))

if [[ ${#UNIQUE_ORPHANS[@]} -eq 0 ]]; then
    echo "No orphan MCP processes found."
    exit 0
fi

echo "Found ${#UNIQUE_ORPHANS[@]} orphan MCP process(es):"
echo ""

for pid in "${UNIQUE_ORPHANS[@]}"; do
    ps -p "$pid" -o pid,ppid,pcpu,rss,etime,comm,args --no-headers 2>/dev/null || continue
done

echo ""

case "$MODE" in
    dry-run)
        echo "[DRY-RUN] No processes killed. Use --kill to terminate or --force to SIGKILL."
        ;;
    kill)
        echo "Sending signals to ${#UNIQUE_ORPHANS[@]} process(es)..."
        for pid in "${UNIQUE_ORPHANS[@]}"; do
            # gitnexus MCP ignores SIGTERM (deadlock on disconnected stdin)
            # Go straight to SIGKILL for gitnexus, SIGTERM for others
            cmd=$(ps -p "$pid" -o comm= 2>/dev/null || true)
            if echo "$cmd" | grep -qi "gitnexus"; then
                kill -9 "$pid" 2>/dev/null && echo "  SIGKILL -> PID $pid (gitnexus ignores SIGTERM)" || echo "  Failed to kill PID $pid"
            else
                kill "$pid" 2>/dev/null && echo "  SIGTERM -> PID $pid" || echo "  Failed to kill PID $pid"
            fi
        done
        sleep 1
        # Check if any survived
        for pid in "${UNIQUE_ORPHANS[@]}"; do
            if kill -0 "$pid" 2>/dev/null; then
                echo "  PID $pid survived, sending SIGKILL..."
                kill -9 "$pid" 2>/dev/null || true
            fi
        done
        echo "Done."
        ;;
    force)
        echo "Sending SIGKILL to ${#UNIQUE_ORPHANS[@]} process(es)..."
        for pid in "${UNIQUE_ORPHANS[@]}"; do
            kill -9 "$pid" 2>/dev/null && echo "  SIGKILL -> PID $pid" || echo "  Failed to kill PID $pid"
        done
        echo "Done."
        ;;
esac

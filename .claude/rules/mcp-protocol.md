# MCP Tool Failure Protocol

When a `gateway.invoke` or MCP tool call fails:

1. **STOP.** Do not silently switch to an alternative approach.
2. **Report to user:** Which tool failed, error message, likely cause.
3. **Ask user:** "要修复工具还是用其他方法？"
4. **Only proceed** after user decides.

Forbidden: silently绕过失败的 MCP 工具、用 grep/Bash/WebSearch 替代、假装工具不存在。

Session start: 如果 `[proxy-health]` 注入显示 ISSUES，主动告知用户哪些 server 异常。

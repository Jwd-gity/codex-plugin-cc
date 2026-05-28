# Skill Audit Report (ECC)

generated: 2026-05-28T21:02:37.459Z
months: 3
skills: 439 discovered, 439 considered
description_chars: 71248
rendered_line_chars: 111948
log_files_scanned: 0

## Skill Budget

model: claude-sonnet-4-6
context_tokens: 200,000
context_source: model:claude-sonnet-4-6
2%_budget_tokens: 4,000
cost_rule: ceil(utf8_bytes / 4)
unbudgeted_full_tokens: 31,815
minimum_no_description_tokens: 2,125
budgeted_tokens_used: 998
used_of_2%_budget: 24.95%
unbudgeted_used_of_2%_budget: 795.38%
used_of_context: 0.50%
remaining_2%_budget_tokens: 3,002
included_skills_after_budget: 37
omitted_skills_after_budget: 402
truncated_description_chars: 70,308

## Description Candidates

- flox-environments
  path: /home/administrator/.claude/skills/flox-environments/SKILL.md
  chars: description=1214, rendered_line=1306
  current: Create reproducible, cross-platform development environments with Flox — a declarative environment manager built on Nix. ALWAYS use this skill when the user needs to: set up a project with system-level dependencies (compilers, databases, native libraries like openssl, libvips, BLAS, LAPACK); configure reproducible toolchains for Python, Node.js, Rust, Go, C/C++, Java, Ruby, Elixir, PHP, or any language; manage environments that must work identically across macOS and Linux; pin exact package versions for a team; run local services (PostgreSQL, Redis, Kafka) alongside development tools; onboard new developers with a single command; or solve 'works on my machine' problems. Especially valuable for AI-assisted and vibe coding — Flox lets agents install tools into a project-scoped environment without sudo, system pollution, or sandbox restrictions, and the resulting environment is committed to the repo so anyone can reproduce it instantly. Use this skill even if the user doesn't mention Flox — if they describe needing reproducible, declarative, cross-platform dev environments with system packages, this is the right tool. Also use when the user mentions .flox/, manifest.toml, flox activate, or FloxHub.
  suggested: Create reproducible, cross-platform development environments with Flox — a declarative environment manager...
- three-brain
  path: /home/administrator/.claude/skills/three-brain/SKILL.md
  chars: description=612, rendered_line=692
  current: Auto-routes work to Codex or Gemini when Claude alone isn't enough. MUST FIRE WHEN: - User asks to review/check Claude's own output → Codex review - "tear apart / sanity check" → Codex adversarial review - Claude failed same op 2x → Codex rescue - Edit risky paths (auth/billing/secrets/deploy) → forced Codex review - Video/audio/PDF/YouTube URL → Gemini multimodal - "scan whole repo" → Gemini 1M-context - "ask all three" → cross-architecture consensus DO NOT FIRE: explain/how, write/build on safe paths, user's content, casual chat Call: git diff | codex exec --skip-git-repo-check "Review this. Flag bugs."
  suggested: Auto-routes work to Codex or Gemini when Claude alone isn't enough. MUST...
- management-talk
  path: /home/administrator/.claude/skills/management-talk/SKILL.md
  chars: description=600, rendered_line=688
  current: Rewrite engineer-to-engineer content for engineering-org leadership (VPs, directors, PMs, release managers, execs in an engineering-savvy company) and shape it for the channel it is going to — JIRA comment, Slack post, async standup line, email, or meeting talking-points. Trigger when the user asks to write/rewrite for management / exec / VP / director / PM / release manager, asks for an "executive summary / leadership update / status update", says "make this less technical / less jargony", or asks for a slack / email / standup / meeting version of work originally written engineer-to-engineer.
  suggested: Rewrite engineer-to-engineer content for engineering-org leadership (VPs, directors, PMs, release managers, execs...
- videodb
  path: /home/administrator/.claude/skills/videodb/SKILL.md
  chars: description=583, rendered_line=655
  current: See, Understand, Act on video and audio. See- ingest from local files, URLs, RTSP/live feeds, or live record desktop; return realtime context and playable stream links. Understand- extract frames, build visual/semantic/temporal indexes, and search moments with timestamps and auto-clips. Act- transcode and normalize (codec, fps, resolution, aspect ratio), perform timeline edits (subtitles, text/image overlays, branding, audio overlays, dubbing, translation), generate media assets (image, audio, video), and create real time alerts for events from live streams or desktop capture.
  suggested: See, Understand, Act on video and audio. See- ingest from local files,...
- agent-browser-core
  path: /home/administrator/.claude/skills/agent-browser-core/SKILL.md
  chars: description=569, rendered_line=663
  current: Complete agent-browser usage guide with command reference, workflows, and troubleshooting. Covers the snapshot-and-ref workflow, navigating pages, interacting with elements (click, fill, type, select), extracting text and data, taking screenshots, managing tabs, handling forms and auth, waiting for content, running multiple browser sessions in parallel, and troubleshooting common failures. Use when the user asks to interact with a website, fill a form, click something, extract data, take a screenshot, log into a site, test a web app, or automate any browser task.
  suggested: Complete agent-browser usage guide with command reference, workflows, and troubleshooting. Covers the...
- lark-drive
  path: /home/administrator/.claude/skills/lark-drive/SKILL.md
  chars: description=561, rendered_line=639
  current: 飞书云空间（云盘/云存储）：管理云空间（云盘/云存储）中的文件和文件夹。上传和下载文件、创建文件夹、复制/移动/删除文件、查看文件元数据、管理文档评论、管理文档权限、订阅用户评论变更事件、修改文件标题（docx、sheet、bitable、file、folder、wiki）；也负责把本地 Word/Markdown/Excel/CSV/PPTX 以及 Base 快照（.base）导入为飞书在线云文档（docx、sheet、bitable、slides）。当用户需要上传或下载文件、整理云空间（云盘/云存储）目录、查看文件详情、管理评论、管理文档权限、修改文件标题、订阅用户评论变更事件，或要把本地文件导入成新版文档、电子表格、多维表格/Base/幻灯片 时使用。\"云空间\"、\"云盘\"和\"云存储\"是同一概念，用户说\"云盘\"、\"云存储\"、\"网盘\"、\"我的空间\"时均路由到本 skill。当用户给出 doubao.com 的云空间资源 URL/token，或明确提到豆包里的 file/folder/docx/sheet/bitable/wiki 资源时，也应直接使用本 skill，不要因为域名不是飞书而回退到 WebFetch；路由依据是资源类型、URL 路径模式和 token，而不是域名。
  suggested: 飞书云空间（云盘/云存储）：管理云空间（云盘/云存储）中的文件和文件夹。上传和下载文件、创建文件夹、复制/移动/删除文件、查看文件元数据、管理文档评论、管理文档权限、订阅用户评论变更事件、修改文件标题（docx、sheet、bitable、file、folder、wiki）；也负责把本地 Word/Markdown/Excel/CSV/PPTX 以及 Base 快照（.base）导入为飞书在线云文档（docx、sheet、bitable、slides）。当用户需要上传或下载文件、整理云空间（云盘/云存储）目录、查看文件详情、管理评论、管理文档权限、修改文件标题、订阅用户评论变更事件，或要把本地文件导入成新版文档、电子表格、多维表格/Base/幻灯片 时使用。\"云空间\"、\"云盘\"和\"云存储\"是同一概念，用户说\"云盘\"、\"云存储\"、\"网盘\"、\"我的空间\"时均路由到本 skill。当用户给出 doubao.com 的云空间资源 URL/token，或明确提到豆包里的 file/folder/docx/sheet/bitable/wiki 资源时，也应直接使用本...
- energy-procurement
  path: /home/administrator/.claude/skills/energy-procurement/SKILL.md
  chars: description=518, rendered_line=612
  current: Codified expertise for electricity and gas procurement, tariff optimization, demand charge management, renewable PPA evaluation, and multi-facility energy cost management. Informed by energy procurement managers with 15+ years experience at large commercial and industrial consumers. Includes market structure analysis, hedging strategies, load profiling, and sustainability reporting frameworks. Use when procuring energy, optimizing tariffs, managing demand charges, evaluating PPAs, or developing energy strategies.
  suggested: Codified expertise for electricity and gas procurement, tariff optimization, demand charge management,...
- quality-nonconformance
  path: /home/administrator/.claude/skills/quality-nonconformance/SKILL.md
  chars: description=516, rendered_line=618
  current: Codified expertise for quality control, non-conformance investigation, root cause analysis, corrective action, and supplier quality management in regulated manufacturing. Informed by quality engineers with 15+ years experience across FDA, IATF 16949, and AS9100 environments. Includes NCR lifecycle management, CAPA systems, SPC interpretation, and audit methodology. Use when investigating non-conformances, performing root cause analysis, managing CAPAs, interpreting SPC data, or handling supplier quality issues.
  suggested: Codified expertise for quality control, non-conformance investigation, root cause analysis, corrective action,...
- scrutinize
  path: /home/administrator/.claude/skills/scrutinize/SKILL.md
  chars: description=505, rendered_line=583
  current: Outsider-perspective end-to-end review of a plan, PR, or code change. First questions intent and whether a simpler/more elegant approach would achieve the same goal, then traces the actual code path (not just the diff) to verify the change does what it claims. Output is concise, actionable, and every call carries its rationale. Trigger on /scrutinize and proactively whenever the user asks to review, audit, sanity-check, or get a second opinion on a plan, PR, diff, design doc, or proposed code change.
  suggested: Outsider-perspective end-to-end review of a plan, PR, or code change. First questions...
- post-mortem
  path: /home/administrator/.claude/skills/post-mortem/SKILL.md
  chars: description=494, rendered_line=574
  current: Write the canonical engineering record of a fixed bug — root cause, mechanism, fix, validation, and how it slipped through. Engineer-audience, code identifiers welcome. Use after a debug session lands a fix, before closing the ticket. Trigger on /post-mortem, when the user says "write the post-mortem / postmortem / RCA / root cause analysis", "document this fix", "write up the root cause", "close out this bug with a writeup", or hands you a fixed-and-validated bug and asks for the writeup.
  suggested: Write the canonical engineering record of a fixed bug — root cause,...
- inventory-demand-planning
  path: /home/administrator/.claude/skills/inventory-demand-planning/SKILL.md
  chars: description=487, rendered_line=595
  current: Codified expertise for demand forecasting, safety stock optimization, replenishment planning, and promotional lift estimation at multi-location retailers. Informed by demand planners with 15+ years experience managing hundreds of SKUs. Includes forecasting method selection, ABC/XYZ analysis, seasonal transition management, and vendor negotiation frameworks. Use when forecasting demand, setting safety stock, planning replenishment, managing promotions, or optimizing inventory levels.
  suggested: Codified expertise for demand forecasting, safety stock optimization, replenishment planning, and promotional...
- production-scheduling
  path: /home/administrator/.claude/skills/production-scheduling/SKILL.md
  chars: description=483, rendered_line=583
  current: Codified expertise for production scheduling, job sequencing, line balancing, changeover optimization, and bottleneck resolution in discrete and batch manufacturing. Informed by production schedulers with 15+ years experience. Includes TOC/drum-buffer-rope, SMED, OEE analysis, disruption response frameworks, and ERP/MES interaction patterns. Use when scheduling production, resolving bottlenecks, optimizing changeovers, responding to disruptions, or balancing manufacturing lines.
  suggested: Codified expertise for production scheduling, job sequencing, line balancing, changeover optimization, and...
- debug-mantra
  path: /home/administrator/.claude/skills/debug-mantra/SKILL.md
  chars: description=472, rendered_line=554
  current: Four-mantra debugging discipline — reproduce, trace the fail path, falsify the hypothesis, cross-reference every breadcrumb. Recite the mantra block verbatim at the start of any debugging session, then apply the four steps in order before proposing any fix. Trigger on /debug-mantra and proactively whenever debugging starts — user reports a bug, says something is broken/throwing/failing, asks to debug/diagnose/investigate an issue, or pastes a stack trace or error log.
  suggested: Four-mantra debugging discipline — reproduce, trace the fail path, falsify the hypothesis,...
- lark-doc
  path: /home/administrator/.claude/skills/lark-doc/SKILL.md
  chars: description=469, rendered_line=543
  current: 飞书云文档 / Docx / 知识库 Wiki 文档（v2）：创建、打开、读取、获取、查看、总结、整理、改写、翻译、审阅和编辑飞书文档内容。当用户给出飞书文档 URL/token，或说查看/读取/打开某个文档、提取文档内容、总结文档、生成/创建文档、追加/替换/删除/移动内容、调整排版、插入或下载文档图片/附件/素材/画板缩略图时使用。文档内容中出现嵌入电子表格、多维表格、需要将重要信息可视化为画板（含 SVG 画板）、引用或同步块时，也先用本 skill 读取和提取 token，再切到对应 skill 下钻。使用本 skill 时，docs +create、docs +fetch、docs +update 必须携带 --api-version v2；默认使用 DocxXML，也支持 Markdown。当用户给出 doubao.com 的 /docx/ 或 /wiki/ URL/token 时，也应直接使用本 skill，不要因为域名不是飞书而回退到 WebFetch；路由依据是 URL 路径模式和 token，而不是域名。
  suggested: 飞书云文档 / Docx / 知识库 Wiki 文档（v2）：创建、打开、读取、获取、查看、总结、整理、改写、翻译、审阅和编辑飞书文档内容。当用户给出飞书文档 URL/token，或说查看/读取/打开某个文档、提取文档内容、总结文档、生成/创建文档、追加/替换/删除/移动内容、调整排版、插入或下载文档图片/附件/素材/画板缩略图时使用。文档内容中出现嵌入电子表格、多维表格、需要将重要信息可视化为画板（含 SVG 画板）、引用或同步块时，也先用本 skill 读取和提取...
- customs-trade-compliance
  path: /home/administrator/.claude/skills/customs-trade-compliance/SKILL.md
  chars: description=467, rendered_line=573
  current: Codified expertise for customs documentation, tariff classification, duty optimization, restricted party screening, and regulatory compliance across multiple jurisdictions. Informed by trade compliance specialists with 15+ years experience. Includes HS classification logic, Incoterms application, FTA utilization, and penalty mitigation. Use when handling customs clearance, tariff classification, trade compliance, import/export documentation, or duty optimization.
  suggested: Codified expertise for customs documentation, tariff classification, duty optimization, restricted party screening,...
- tinystruct-patterns
  path: /home/administrator/.claude/skills/tinystruct-patterns/SKILL.md
  chars: description=466, rendered_line=562
  current: Expert guidance for developing with the tinystruct Java framework. Use when working on the tinystruct codebase or any project built on tinystruct — including creating Application classes, @Action-mapped routes, unit tests, ActionRegistry, HTTP/CLI dual-mode handling, the built-in HTTP server, the event system, JSON with Builder/Builders, database persistence with AbstractData, POJO generation, Server-Sent Events (SSE), file uploads, and outbound HTTP networking.
  suggested: Expert guidance for developing with the tinystruct Java framework. Use when working...
- lark-event
  path: /home/administrator/.claude/skills/lark-event/SKILL.md
  chars: description=460, rendered_line=538
  current: Lark/Feishu real-time event listening / subscribing / consuming: stream events as NDJSON via `lark-cli event consume <EventKey>` (covers IM messages/reactions/chat changes, VC meeting ended, Minutes generated, etc.). Use for Lark bots, real-time message processing, long-running subscribers, streaming webhook/push handlers. Supports `--max-events` / `--timeout` bounded runs and a stderr ready-marker contract — designed for AI agents running as subprocesses.
  suggested: Lark/Feishu real-time event listening / subscribing / consuming: stream events as NDJSON...
- returns-reverse-logistics
  path: /home/administrator/.claude/skills/returns-reverse-logistics/SKILL.md
  chars: description=453, rendered_line=561
  current: Codified expertise for returns authorization, receipt and inspection, disposition decisions, refund processing, fraud detection, and warranty claims management. Informed by returns operations managers with 15+ years experience. Includes grading frameworks, disposition economics, fraud pattern recognition, and vendor recovery processes. Use when handling product returns, reverse logistics, refund decisions, return fraud detection, or warranty claims.
  suggested: Codified expertise for returns authorization, receipt and inspection, disposition decisions, refund processing,...
- carrier-relationship-management
  path: /home/administrator/.claude/skills/carrier-relationship-management/SKILL.md
  chars: description=445, rendered_line=565
  current: Codified expertise for managing carrier portfolios, negotiating freight rates, tracking carrier performance, allocating freight, and maintaining strategic carrier relationships. Informed by transportation managers with 15+ years experience. Includes scorecarding frameworks, RFP processes, market intelligence, and compliance vetting. Use when managing carriers, negotiating rates, evaluating carrier performance, or building freight strategies.
  suggested: Codified expertise for managing carrier portfolios, negotiating freight rates, tracking carrier performance,...
- setup-matt-pocock-skills
  path: /home/administrator/.claude/skills/setup-matt-pocock-skills/SKILL.md
  chars: description=438, rendered_line=544
  current: Sets up an `## Agent skills` block in AGENTS.md/CLAUDE.md and `docs/agents/` so the engineering skills know this repo's issue tracker (GitHub or local markdown), triage label vocabulary, and domain doc layout. Run before first use of `to-issues`, `to-prd`, `triage`, `diagnose`, `tdd`, `improve-codebase-architecture`, or `zoom-out` — or if those skills appear to be missing context about the issue tracker, triage labels, or domain docs.
  suggested: Sets up an `## Agent skills` block in AGENTS.md/CLAUDE.md and `docs/agents/` so...
- prototype
  path: /home/administrator/.claude/skills/prototype/SKILL.md
  chars: description=426, rendered_line=502
  current: Build a throwaway prototype to flesh out a design before committing to it. Routes between two branches — a runnable terminal app for state/business-logic questions, or several radically different UI variations toggleable from one route. Use when the user wants to prototype, sanity-check a data model or state machine, mock up a UI, explore design options, or says "prototype this", "let me play with it", "try a few designs".
  suggested: Build a throwaway prototype to flesh out a design before committing to...
- recsys-pipeline-architect
  path: /home/administrator/.claude/skills/recsys-pipeline-architect/SKILL.md
  chars: description=416, rendered_line=524
  current: Design composable recommendation, ranking, and feed pipelines using the six-stage Source→Hydrator→Filter→Scorer→Selector→SideEffect framework popularized by xAI's open-sourced For You algorithm. Use this skill whenever the user is building any system that picks "the top K items for a (user, context)" — social feeds, content CMSs, RAG rerankers, task prioritizers, notification triage, search reranking, ad ranking.
  suggested: Design composable recommendation, ranking, and feed pipelines using the six-stage Source→Hydrator→Filter→Scorer→Selector→SideEffect framework...
- data-scraper-agent
  path: /home/administrator/.claude/skills/data-scraper-agent/SKILL.md
  chars: description=393, rendered_line=487
  current: Build a fully automated AI-powered data collection agent for any public source — job boards, prices, news, GitHub, sports, anything. Scrapes on a schedule, enriches data with a free LLM (Gemini Flash), stores results in Notion/Sheets/Supabase, and learns from user feedback. Runs 100% free on GitHub Actions. Use when the user wants to monitor, collect, or track any public data automatically.
  suggested: Build a fully automated AI-powered data collection agent for any public source...
- lark-mail
  path: /home/administrator/.claude/skills/lark-mail/SKILL.md
  chars: description=386, rendered_line=462
  current: 飞书邮箱 — draft, compose, send, reply, forward, read, and search emails; manage drafts, folders, labels, contacts, attachments, and mail rules. Use when user mentions 起草邮件, 写一封邮件, 拟邮件, 草稿, 发通知邮件, 发送邮件, 发邮件, 回复邮件, 转发邮件, 查看邮件, 看邮件, 读邮件, 搜索邮件, 查邮件, 收件箱, 邮件会话, 编辑草稿, 管理草稿, 下载附件, 邮件文件夹, 邮件标签, 邮件联系人, 监听新邮件, 收信规则, 邮件规则, draft, compose, send email, reply, forward, inbox, mail thread, mail rules.
  suggested: 飞书邮箱 — draft, compose, send, reply, forward, read, and search emails; manage...
- logistics-exception-management
  path: /home/administrator/.claude/skills/logistics-exception-management/SKILL.md
  chars: description=378, rendered_line=496
  current: Codified expertise for handling freight exceptions, shipment delays, damages, losses, and carrier disputes. Informed by logistics professionals with 15+ years operational experience. Includes escalation protocols, carrier-specific behaviors, claims procedures, and judgment frameworks. Use when handling shipping exceptions, freight claims, delivery issues, or carrier disputes.
  suggested: Codified expertise for handling freight exceptions, shipment delays, damages, losses, and carrier...
- autonomous-agent-harness
  path: /home/administrator/.claude/skills/autonomous-agent-harness/SKILL.md
  chars: description=372, rendered_line=478
  current: Transform Claude Code into a fully autonomous agent system with persistent memory, scheduled operations, computer use, and task queuing. Replaces standalone agent frameworks (Hermes, AutoGPT) by leveraging Claude Code's native crons, dispatch, MCP tools, and memory. Use when the user wants continuous autonomous operation, scheduled tasks, or a self-directing agent loop.
  suggested: Transform Claude Code into a fully autonomous agent system with persistent memory,...
- click-path-audit
  path: /home/administrator/.claude/skills/click-path-audit/SKILL.md
  chars: description=359, rendered_line=449
  current: Trace every user-facing button/touchpoint through its full state change sequence to find bugs where functions individually work but cancel each other out, produce wrong final state, or leave the UI in an inconsistent state. Use when: systematic debugging found no bugs but users report broken buttons, or after any major refactor touching shared state stores.
  suggested: Trace every user-facing button/touchpoint through its full state change sequence to find...
- agent-architecture-audit
  path: /home/administrator/.claude/skills/agent-architecture-audit/SKILL.md
  chars: description=357, rendered_line=463
  current: Full-stack diagnostic for agent and LLM applications. Audits the 12-layer agent stack for wrapper regression, memory pollution, tool discipline failures, hidden repair loops, and rendering corruption. Produces severity-ranked findings with code-first fixes. Essential for developers building agent applications, autonomous loops, or any LLM-powered feature.
  suggested: Full-stack diagnostic for agent and LLM applications. Audits the 12-layer agent stack...
- lark-whiteboard
  path: /home/administrator/.claude/skills/lark-whiteboard/SKILL.md
  chars: description=352, rendered_line=440
  current: 飞书画板：查询和编辑飞书云文档中的画板。支持导出画板为预览图片、导出原始节点结构、使用 DSL（转成 OpenAPI 格式）、PlantUML/Mermaid 格式更新画板内容。 当用户需要查看画板内容、导出画板图片、编辑画板，或是需要可视化表达架构、流程、组织关系、时间线、因果、对比等结构化信息时使用此 skill，无论是否提及"画板"。 ⚠️ 原 `lark-whiteboard-cli` skill 已合并至本 skill，若 skill 列表中同时存在 `lark-whiteboard-cli`，请忽略它，统一使用本 skill（`lark-whiteboard`），并提示用户运行 `npx skills remove lark-whiteboard-cli -g` 删除旧 skill。
  suggested: 飞书画板：查询和编辑飞书云文档中的画板。支持导出画板为预览图片、导出原始节点结构、使用 DSL（转成 OpenAPI 格式）、PlantUML/Mermaid 格式更新画板内容。 当用户需要查看画板内容、导出画板图片、编辑画板，或是需要可视化表达架构、流程、组织关系、时间线、因果、对比等结构化信息时使用此 skill，无论是否提及"画板"。 ⚠️ 原 `lark-whiteboard-cli` skill 已合并至本...
- lark-vc
  path: /home/administrator/.claude/skills/lark-vc/SKILL.md
  chars: description=345, rendered_line=417
  current: 飞书视频会议：搜索历史会议、查询会议纪要产物（总结、待办、章节、逐字稿）、查询会议参会人快照。1. 查询已经结束的会议数量或详情时使用本技能（如历史日期｜昨天｜上周｜今天已经开过的会议等场景），查询未开始的会议日程使用 lark-calendar 技能。2. 支持通过关键词、时间范围、组织者、参与者、会议室等筛选条件搜索会议。3. 获取或整理会议纪要、逐字稿、录制产物时使用本技能。4. 查询“谁参加过某会议”“参会人列表”等参会人快照信息用 vc meeting get --with-participants（任意时点可查，含已结束会议）。注意：**Agent 真实入会/离会、感知正在进行中会议的实时事件**请使用 lark-vc-agent 技能，本技能不覆盖写操作和会中事件流。
  suggested: 飞书视频会议：搜索历史会议、查询会议纪要产物（总结、待办、章节、逐字稿）、查询会议参会人快照。1. 查询已经结束的会议数量或详情时使用本技能（如历史日期｜昨天｜上周｜今天已经开过的会议等场景），查询未开始的会议日程使用 lark-calendar 技能。2. 支持通过关键词、时间范围、组织者、参与者、会议室等筛选条件搜索会议。3. 获取或整理会议纪要、逐字稿、录制产物时使用本技能。4. 查询“谁参加过某会议”“参会人列表”等参会人快照信息用 vc meeting get --with-participants（任意时点可查，含已结束会议）。注意：**Agent 真实入会/离会、感知正在进行中会议的实时事件**请使用...

## Duplicates By Name

- gitnexus-debugging
  keep-default: user-skills: /home/administrator/.claude/skills/gitnexus-debugging/SKILL.md
  - user-skills: /home/administrator/.claude/skills/gitnexus-debugging/SKILL.md (body=100.0%, description=100.0%)
  - user-skills: /home/administrator/projects/codex-plugin-cc/.claude/skills/gitnexus/gitnexus-debugging/SKILL.md (body=100.0%, description=0.0%)
- gitnexus-guide
  keep-default: user-skills: /home/administrator/.claude/skills/gitnexus-guide/SKILL.md
  - user-skills: /home/administrator/.claude/skills/gitnexus-guide/SKILL.md (body=100.0%, description=100.0%)
  - user-skills: /home/administrator/projects/codex-plugin-cc/.claude/skills/gitnexus/gitnexus-guide/SKILL.md (body=100.0%, description=3.8%)

## Duplicate Delete Suggestions

- gitnexus-debugging
  keep: user-skills: /home/administrator/.claude/skills/gitnexus-debugging/SKILL.md
  delete: user-skills: /home/administrator/projects/codex-plugin-cc/.claude/skills/gitnexus/gitnexus-debugging/SKILL.md (similarity body=100.0%, description=0.0%)
- gitnexus-guide
  keep: user-skills: /home/administrator/.claude/skills/gitnexus-guide/SKILL.md
  delete: user-skills: /home/administrator/projects/codex-plugin-cc/.claude/skills/gitnexus/gitnexus-guide/SKILL.md (similarity body=100.0%, description=3.8%)

## Duplicates By Body Hash

- gitnexus-debugging, gitnexus-debugging
  - user-skills: /home/administrator/.claude/skills/gitnexus-debugging/SKILL.md
  - user-skills: /home/administrator/projects/codex-plugin-cc/.claude/skills/gitnexus/gitnexus-debugging/SKILL.md
- gitnexus-guide, gitnexus-guide
  - user-skills: /home/administrator/.claude/skills/gitnexus-guide/SKILL.md
  - user-skills: /home/administrator/projects/codex-plugin-cc/.claude/skills/gitnexus/gitnexus-guide/SKILL.md

## Unused Candidates

- ielts-dev: extra; usage=$0, reads=0, text=0; /home/administrator/projects/codex-plugin-cc/skills/ielts-dev/SKILL.md
- ielts-implement: extra; usage=$0, reads=0, text=0; /home/administrator/projects/codex-plugin-cc/skills/ielts-implement/SKILL.md
- ielts-research: extra; usage=$0, reads=0, text=0; /home/administrator/projects/codex-plugin-cc/skills/ielts-research/SKILL.md
- ielts-review: extra; usage=$0, reads=0, text=0; /home/administrator/projects/codex-plugin-cc/skills/ielts-review/SKILL.md
- ielts-spec: extra; usage=$0, reads=0, text=0; /home/administrator/projects/codex-plugin-cc/skills/ielts-spec/SKILL.md
- pipeline-generate: extra; usage=$0, reads=0, text=0; /home/administrator/projects/codex-plugin-cc/skills/pipeline-generate/SKILL.md
- pipeline-orchestrator: extra; usage=$0, reads=0, text=0; /home/administrator/projects/codex-plugin-cc/skills/pipeline-orchestrator/SKILL.md
- pipeline-research: extra; usage=$0, reads=0, text=0; /home/administrator/projects/codex-plugin-cc/skills/pipeline-research/SKILL.md
- pipeline-synthesize: extra; usage=$0, reads=0, text=0; /home/administrator/projects/codex-plugin-cc/skills/pipeline-synthesize/SKILL.md
- skill-cleaner: extra; usage=$0, reads=0, text=0; /home/administrator/projects/codex-plugin-cc/skills/skill-cleaner/SKILL.md
- codex-cli-runtime: plugin; usage=$0, reads=0, text=0; /home/administrator/projects/codex-plugin-cc/plugins/codex/skills/codex-cli-runtime/SKILL.md
- codex-result-handling: plugin; usage=$0, reads=0, text=0; /home/administrator/projects/codex-plugin-cc/plugins/codex/skills/codex-result-handling/SKILL.md
- gpt-5-4-prompting: plugin; usage=$0, reads=0, text=0; /home/administrator/projects/codex-plugin-cc/plugins/codex/skills/gpt-5-4-prompting/SKILL.md
- accessibility: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/accessibility/SKILL.md
- agent-architecture-audit: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/agent-architecture-audit/SKILL.md
- agent-browser-core: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/agent-browser-core/SKILL.md
- agent-eval: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/agent-eval/SKILL.md
- agent-harness-construction: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/agent-harness-construction/SKILL.md
- agent-introspection-debugging: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/agent-introspection-debugging/SKILL.md
- agent-payment-x402: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/agent-payment-x402/SKILL.md
- agent-playground-dev: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/agent-playground-dev/SKILL.md
- agent-playground-integration: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/agent-playground-integration/SKILL.md
- agent-playground-repair: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/agent-playground-repair/SKILL.md
- agent-return-protocol: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/agent-return-protocol/SKILL.md
- agent-skill-repository-integration: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/agent-skill-repository-integration/SKILL.md
- agent-skills-cli: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/agent-skills-cli/SKILL.md
- agent-sort: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/agent-sort/SKILL.md
- agentic-engineering: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/agentic-engineering/SKILL.md
- agentic-os: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/agentic-os/SKILL.md
- AI 工具链容器化管理: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/AI 工具链容器化管理/SKILL.md
- ai-content-pipeline: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/ai-content-pipeline/SKILL.md
- ai-first-engineering: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/ai-first-engineering/SKILL.md
- ai-regression-testing: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/ai-regression-testing/SKILL.md
- alphafold-database-fetch-and-analyze: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/alphafold-database-fetch-and-analyze/SKILL.md
- android-clean-architecture: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/android-clean-architecture/SKILL.md
- angular-developer: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/angular-developer/SKILL.md
- anti-ai-isms: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/anti-ai-isms/SKILL.md
- anysearch: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/anysearch/SKILL.md
- api-connector-builder: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/api-connector-builder/SKILL.md
- api-design: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/api-design/SKILL.md
- architecture-decision-records: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/architecture-decision-records/SKILL.md
- article-writing: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/article-writing/SKILL.md
- automation-audit-ops: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/automation-audit-ops/SKILL.md
- autonomous-agent-harness: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/autonomous-agent-harness/SKILL.md
- autonomous-loops: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/autonomous-loops/SKILL.md
- backend-patterns: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/backend-patterns/SKILL.md
- benchmark: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/benchmark/SKILL.md
- blackbox: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/blackbox/SKILL.md
- blender-motion-state-inspection: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/blender-motion-state-inspection/SKILL.md
- blueprint: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/blueprint/SKILL.md
- brainstorming: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/brainstorming/SKILL.md
- brand-guidelines: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/brand-guidelines/SKILL.md
- brand-voice: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/brand-voice/SKILL.md
- browser-qa: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/browser-qa/SKILL.md
- bun-runtime: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/bun-runtime/SKILL.md
- camoufox: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/camoufox/SKILL.md
- canary-watch: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/canary-watch/SKILL.md
- carrier-relationship-management: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/carrier-relationship-management/SKILL.md
- cavecrew: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/cavecrew/SKILL.md
- caveman-compress: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/caveman-compress/SKILL.md
- caveman-stats: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/caveman-stats/SKILL.md
- chainlink-ace-skill: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/chainlink-ace-skill/SKILL.md
- chainlink-ccip-skill: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/chainlink-ccip-skill/SKILL.md
- chainlink-cre-skill: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/chainlink-cre-skill/SKILL.md
- chainlink-data-feeds-skill: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/chainlink-data-feeds-skill/SKILL.md
- chainlink-data-streams-skill: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/chainlink-data-streams-skill/SKILL.md
- chainlink-vrf-skill: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/chainlink-vrf-skill/SKILL.md
- chatgpt-apps: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/chatgpt-apps/SKILL.md
- cisco-ios-patterns: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/cisco-ios-patterns/SKILL.md
- ck: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/ck/SKILL.md
- claude-api: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/claude-api/SKILL.md
- claude-code: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/claude-code/SKILL.md
- claude-design: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/claude-design/SKILL.md
- claude-devfleet: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/claude-devfleet/SKILL.md
- cli-creator: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/cli-creator/SKILL.md
- click-path-audit: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/click-path-audit/SKILL.md
- clickhouse-io: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/clickhouse-io/SKILL.md
- clinical-trials-database: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/clinical-trials-database/SKILL.md
- cloakbrowser: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/cloakbrowser/SKILL.md
- code-review: user-skills; usage=$0, reads=0, text=0; /home/administrator/.claude/skills/code-review/SKILL.md

## Root Summary

- /home/administrator/.claude/skills (406/406 enabled, scope=user-skills)
- /home/administrator/projects/codex-plugin-cc/.claude/skills (20/20 enabled, scope=user-skills)
- /home/administrator/projects/codex-plugin-cc/plugins/codex/skills (3/3 enabled, scope=plugin)
- /home/administrator/projects/codex-plugin-cc/skills (10/10 enabled, scope=extra)

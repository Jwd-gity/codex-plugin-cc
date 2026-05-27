---
name: pipeline-orchestrator
description: "编排 Skill — 串联研究→生成→整合，单命令触发完整工作流。示例模板，按需修改步骤。"
---

# Pipeline Orchestrator

## 描述

编排一条完整的"调研 → 生成 → 整合"流水线。每个子 Skill 在独立上下文中运行，数据通过文件传递。

触发关键词：`pipeline`、`orchestrator`、`workchain`

## 参数

- topic: string     # 主题/任务描述
- output_dir: string # 中间产物输出目录，默认 /tmp/pipeline-output

## 工具

通用代理模式，允许：Read, Write, Edit, Bash, Grep, Glob, Agent

## context work

## 步骤

### 阶段 1：调研
```
/pipeline-research --topic "{topic}" --output "{output_dir}/research.md"
```
- 全面搜索相关资料
- 将调研结果写入 `research.md`

### 阶段 2：生成
```
/pipeline-generate --input "{output_dir}/research.md" --output "{output_dir}/draft.md"
```
- 读取阶段 1 输出
- 基于调研数据生成内容草稿
- 写入 `draft.md`

### 阶段 3：整合
```
/pipeline-synthesize --inputs "{output_dir}/research.md,{output_dir}/draft.md" --output "{output_dir}/final.md"
```
- 读取阶段 1 + 阶段 2 输出
- 整合为最终文档
- 写入 `final.md`

## 输出

返回 `final.md` 路径及执行摘要。

## 数据流

```
topic
  ↓
[pipeline-research] → research.md
  ↓
[pipeline-generate] → draft.md  (读取 research.md)
  ↓
[pipeline-synthesize] → final.md  (读取 research.md + draft.md)
  ↓
完成 → 返回 final.md 路径
```

## 注意事项

- 每个子 Skill 必须是已注册的独立 Skill
- 步骤间的文件路径使用绝对路径，避免歧义
- 如需人工审核点，在步骤间插入确认提示

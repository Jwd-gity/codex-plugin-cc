---
name: pipeline-research
description: "原子 Skill — 围绕指定主题进行全面调研，输出结构化 Markdown。可独立使用，也可被编排 Skill 调用。"
---

# Pipeline Research

## 描述

围绕给定主题执行深度调研，收集关键事实、数据和洞察，输出结构化 Markdown 文件。

触发关键词：`research`、`调研`、`深度搜索`

## 参数

- topic: string     # 调研主题
- output: string    # 输出文件路径

## 工具

Bash, Read, Grep, Glob, Agent, WebSearch (如可用)

## 步骤

1. 分析主题，拆解为 3-5 个关键子问题
2. 搜索代码库中的相关实现和模式
3. 搜索外部文档/资料（WebSearch 或文档查询）
4. 汇总调研结果

## 输出格式

写入 `output` 路径的文件，结构如下：

```markdown
# 调研报告：{topic}

## 概述
[一段话总结核心发现]

## 关键发现
1. [发现 1] — 来源
2. [发现 2] — 来源
...

## 数据/代码示例
[相关代码片段或数据]

## 建议
[基于调研的下一步建议]
```

## 边界

- 不做决策，只提供事实和数据
- 输出必须为 Markdown
- 如无法获取外部资料，在输出中注明

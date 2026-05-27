---
name: pipeline-generate
description: "原子 Skill — 读取调研输出，生成内容草稿。可独立使用，也可被编排 Skill 调用。"
---

# Pipeline Generate

## 描述

基于调研阶段的输入，生成高质量的内容草稿。处理数据 → 转化为可读内容。

触发关键词：`generate`、`生成`、`起草`

## 参数

- input: string     # 调研输出文件路径（pipeline-research 产物）
- output: string    # 草稿输出文件路径
- style: string     # 风格指南（可选）：`technical` / `casual` / `formal`，默认 `technical`

## 工具

Read, Write, Edit, Grep, Glob

## 步骤

1. 读取 `input` 文件（调研输出）
2. 提取核心论点和数据
3. 按 `style` 风格组织内容
4. 生成结构化草稿
5. 写入 `output` 文件

## 输出格式

写入 `output` 路径的文件：

```markdown
# [标题]

## 引言
[背景和目的]

## 主体
[分段展开核心内容]

## 结论
[总结和行动建议]
```

## 边界

- 严格基于输入数据生成，不编造事实
- 保留输入中的数据引用和来源
- 生成失败时输出错误信息，不返回空文件

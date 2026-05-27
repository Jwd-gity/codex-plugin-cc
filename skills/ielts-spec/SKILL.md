---
name: ielts-spec
description: "IELTS 功能规格 — 基于研究结果编写功能规格文档，遵循项目 spec 格式"
---

# IELTS Spec

## 描述

将方法论研究结果转化为结构化的功能规格文档。遵循 IELTS Coach 项目已有的 spec 格式。

## 参数

- feature: string       # 功能描述
- research_file: string # 研究结果文件路径
- output: string        # 输出文件路径

## 工具

Read, Write, Grep, Glob

## 步骤

1. 读取研究结果
2. 参考现有 spec 格式（`specs/001-ielts-coach-v3-upgrade/spec.md`）
3. 编写功能规格，包含：背景和目标、用户故事、功能范围、API 契约、数据模型变更、UI 交互、LLM 提示词设计、非功能需求
4. 确保规格与项目现有架构兼容

## 输出格式

```markdown
# 功能规格：{feature}

## 背景
[为什么需要这个功能，基于研究结果]

## 目标
[功能完成后用户能做什么]

## 范围
### 包含
- [具体功能点]
### 不包含
- [明确排除的点]

## 用户故事
- 作为 [角色]，我想要 [功能]，以便 [价值]

## API 契约

### action: {action_name}
请求参数：
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|

响应格式：遵循 success_response / error_response

## 数据模型变更
[新增/修改的 dataclass 或 JSON schema]

## LLM 提示词设计
[如涉及 AI 评估，定义 system prompt 和输出格式]

## UI 交互
[如涉及 Web，定义页面/组件变更]

## 非功能需求
- 性能：
- 安全：
- 兼容性：

## 依赖
[依赖的现有模块/函数]

## 验收标准
- [ ] [具体可测试的验收条件]
```

## 边界

- 规格必须可执行，不写"等后续再定"的模糊描述
- API 契约必须与现有 success_response/error_response 格式一致
- 数据模型必须在 contracts.py 或 schemas.py 中定义

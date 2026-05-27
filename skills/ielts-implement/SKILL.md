---
name: ielts-implement
description: "IELTS 功能实现 — 按规格和任务列表编码，遵循项目架构约定"
---

# IELTS Implement

## 描述

按照功能规格和任务列表，逐个实现功能点。严格遵循 IELTS Coach 项目的架构约定。

## 参数

- spec_file: string     # 功能规格文件路径
- tasks_file: string    # 任务列表文件路径
- module: string        # 涉及的模块名（writing/reading/speaking/listening/vocab/diagnose/planner/dashboard）

## 工具

Read, Write, Edit, Grep, Glob, Bash

## 步骤

1. 读取 spec 和 tasks，理解完整需求
2. 扫描现有模块代码，理解调用模式
3. 按任务优先级逐个实现：
   - 数据模型变更 → `contracts.py` 或 `schemas.py`
   - 核心逻辑 → `modules/{module}.py`
   - 路由注册 → `router.py` 的 `ROUTES` 和 action 映射
   - LLM 提示词 → `prompts/{name}.md`
   - 存储层（如需）→ `storage.py`
4. 每个任务完成后做 smoke test（import + 基本调用不报错）

## 项目架构约定

```python
# 模块入口模式
def run_{module}(action, params):
    actions = {"action1": _handler1, "action2": _handler2}
    handler = actions.get(action)
    if not handler:
        return error_response(SKILL, "UNSUPPORTED_ACTION", ...)
    return handler(params)

# 响应格式
return success_response(SKILL, {"key": "value"}, saved_to=path)
return error_response(SKILL, "ERROR_CODE", "message")

# 存储模式
from ..storage import save_session, read_json, load_assessments
data = read_json("filename.json")

# LLM 调用模式
from .. import llm_provider
result = llm_provider.call(system_prompt, user_message, response_format="json")
```

## 输出

代码变更（直接写入项目文件）

## 边界

- 不修改不相关的现有代码
- 新函数必须有类型提示
- 错误处理使用项目已有的 error_response 模式
- 不引入新的外部依赖（除非 spec 明确要求）

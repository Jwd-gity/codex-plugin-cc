---
name: ielts-dev
description: "IELTS Coach 功能开发编排 — 研究方法论→写规格→实现→测试→审查，完整功能开发流水线"
---

# IELTS Dev

## 描述

为 IELTS Coach 项目开发新功能的完整流水线。从 IELTS 方法论研究到代码交付，确保功能既符合代码规范又符合 IELTS 评分标准。

触发关键词：`ielts 开发`、`开发 ielts 功能`、`ielts dev`

## 参数

- feature: string     # 功能描述（如"添加口语 Part 2 计时器"、"改进写作评分的 L1 干扰检测"）
- priority: string    # P0/P1/P2，默认 P1
- output_dir: string  # 中间产物目录，默认 /tmp/ielts-dev

## 工具

Read, Write, Edit, Bash, Grep, Glob, Agent

## context work

## 步骤

### 阶段 1：方法论研究
```
/ielts-research --feature "{feature}" --output "{output_dir}/research.md"
```
- 搜索 IELTS 官方评分标准和方法论
- 研究同类工具的实现方式
- 对比 IELTS Coach 现有能力，找差距
- 输出：`{output_dir}/research.md`

### 阶段 2：功能规格
```
/ielts-spec --feature "{feature}" --research_file "{output_dir}/research.md" --output "{output_dir}/spec.md"
```
- 读取研究结果
- 遵循项目 spec 格式（参考 specs/001-ielts-coach-v3-upgrade/）
- 定义 API 契约、数据模型、UI 交互
- 输出：`{output_dir}/spec.md`

### 阶段 3：任务分解
```
/ielts-tasks --spec_file "{output_dir}/spec.md" --output "{output_dir}/tasks.md"
```
- 将 spec 拆解为可执行任务
- 标注依赖关系和优先级
- 估算每个任务的复杂度
- 输出：`{output_dir}/tasks.md`

### 阶段 4：实现
```
/ielts-implement --spec_file "{output_dir}/spec.md" --tasks_file "{output_dir}/tasks.md"
```
- 按任务列表逐个实现
- 遵循项目架构（Flask + 文件存储 + LLM 调用模式）
- 每个任务完成后运行 smoke test
- 输出：代码变更

### 阶段 5：测试
```
/ielts-test --spec_file "{output_dir}/spec.md"
```
- 编写单元测试（对标 tests/ 目录现有模式）
- 运行 pytest，确保全部通过
- 检查测试覆盖率
- 输出：测试报告

### 阶段 6：双重审查
```
/ielts-review --spec_file "{output_dir}/spec.md"
```
- 代码审查：架构、安全、性能
- 领域审查：IELTS 评分标准准确性
- 输出：审查报告

## 输出

完整功能开发报告：
- 方法论研究摘要
- 功能规格文档
- 任务列表 + 完成状态
- 代码变更清单
- 测试报告
- 审查结论

## 使用示例

```
/ielts-dev --feature "添加口语 Part 2 图片描述评分"
```

```
/ielts-dev --feature "改进写作模块的 L1 中式英语检测准确率" --priority P0
```

## 数据流

```
feature 描述
  ↓
[ielts-research] → research.md
  ↓
[ielts-spec] → spec.md (读取 research.md，参考现有 specs/)
  ↓
[ielts-tasks] → tasks.md (读取 spec.md)
  ↓
[ielts-implement] → 代码变更 (读取 spec.md + tasks.md)
  ↓
[ielts-test] → 测试报告 (读取 spec.md)
  ↓
[ielts-review] → 审查报告 (读取 spec.md + 代码变更)
  ↓
完成 → 返回完整报告
```

## 项目约定（实现阶段遵循）

- 包结构：flat（所有代码在根目录，PYTHONPATH 必需）
- 模块入口：`modules/{name}.py`，导出 `run_{name}(action, params)`
- 路由注册：`router.py` 的 `ROUTES` 字典
- 存储：`~/.ielts/` 下 JSON 文件，通过 `storage.py` 操作
- LLM 调用：通过 `llm_provider.py`，支持 Claude API + OpenAI fallback
- 测试：`tests/` 目录，pytest，命名 `test_{module}.py`
- 契约：`contracts.py` 的 `IELTSFeedback`、`FourCriteriaResult` 等

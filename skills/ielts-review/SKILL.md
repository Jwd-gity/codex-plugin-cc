---
name: ielts-review
description: "IELTS 功能双重审查 — 代码质量审查 + IELTS 领域准确性审查"
---

# IELTS Review

## 描述

对新实现的功能进行双重审查：代码质量 + IELTS 领域准确性。确保功能既技术正确又符合 IELTS 评分标准。

## 参数

- spec_file: string    # 功能规格文件路径
- module: string       # 被审查的模块名

## 工具

Read, Grep, Glob

## 步骤

### 审查维度 1：代码质量
1. 读取变更的文件
2. 检查项：
   - 函数长度 < 50 行
   - 无深层嵌套（> 4 层）
   - 错误处理完整（使用 error_response）
   - 类型提示存在
   - 无硬编码密钥/路径
   - 存储操作通过 storage.py
   - LLM 调用通过 llm_provider.py
   - 响应格式符合 contracts.py 契约

### 审查维度 2：IELTS 领域准确性
1. 对照 spec 中的评分标准参考
2. 检查项：
   - 评分维度名称正确（TR/CC/LR/GRA 或 FL/PR/LR/GRA）
   - Band 分级标准符合 IELTS 官方定义
   - 评分逻辑无明显偏差
   - LLM 提示词中的评分指南准确
   - 中国学生常见错误类型覆盖完整
   - 反馈语言准确（不误导学习者）

### 审查维度 3：集成兼容性
1. 检查与现有模块的交互
2. 检查项：
   - 路由注册正确
   - IELTSFeedback 契约兼容
   - 存储路径不冲突
   - 不破坏现有功能

## 输出格式

```markdown
# 审查报告：{feature}

## 代码质量审查
| 检查项 | 状态 | 备注 |
|--------|------|------|
| 函数长度 | PASS/FAIL | ... |
| 错误处理 | PASS/FAIL | ... |
| 类型提示 | PASS/FAIL | ... |
| ... | ... | ... |

结论：PASS / NEEDS_FIX

## IELTS 领域审查
| 检查项 | 状态 | 备注 |
|--------|------|------|
| 评分维度正确 | PASS/FAIL | ... |
| Band 标准准确 | PASS/FAIL | ... |
| 评分逻辑合理 | PASS/FAIL | ... |
| LLM 提示词准确 | PASS/FAIL | ... |

结论：PASS / NEEDS_FIX

## 集成兼容性
| 检查项 | 状态 | 备注 |
|--------|------|------|
| 路由注册 | PASS/FAIL | ... |
| 契约兼容 | PASS/FAIL | ... |
| 存储兼容 | PASS/FAIL | ... |

结论：PASS / NEEDS_FIX

## 问题清单
1. [CRITICAL/HIGH/MEDIUM] {问题描述} — {修复建议}

## 总体结论
APPROVED / APPROVED_WITH_NOTES / NEEDS_FIX
```

## 边界

- 审查必须给出具体修复建议，不只说"有问题"
- 优先级排序：CRITICAL > HIGH > MEDIUM > LOW
- IELTS 领域审查需要对照官方标准，不凭主观判断

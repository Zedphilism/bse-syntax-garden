---
title: "Boolean Identities Provide Direct Shortcuts for Simplifying Logic Expressions"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# Boolean Identities Provide Direct Shortcuts for Simplifying Logic Expressions

Boolean algebra has a set of standard identities that allow terms or entire sub-expressions to be eliminated in one step, without needing to expand and re-derive from scratch.

## Explanation

These identities are proved once using truth tables, then applied freely as simplification shortcuts. They fall into groups based on what they reveal about a variable's interaction with constants, itself, or its complement.

The identity and null element rules show what happens when AND or OR is applied with a constant 0 or 1. The idempotent rules show that a variable OR or AND with itself reduces to just the variable. The complement rules are especially powerful: A + A' always equals 1, and A · A' always equals 0, making it possible to eliminate large sub-expressions.

The absorption rule A + AB = A (and its dual A·(A+B) = A) is particularly useful in practice and appears frequently in exam simplification problems.

## Key Points

| Identity | Rule |
|----------|------|
| A + 0 = A | OR with zero — identity |
| A + 1 = 1 | OR with one — null |
| A · 0 = 0 | AND with zero — null |
| A · 1 = A | AND with one — identity |
| A + A = A | Idempotent (OR) |
| A · A = A | Idempotent (AND) |
| A + A' = 1 | Complement (OR) |
| A · A' = 0 | Complement (AND) |
| (A')' = A  | Double negation |
| A + AB = A | Absorption |
| A(A+B) = A | Absorption (dual) |

## Example

Simplify: F = A + AB + AB'

Apply absorption: A + AB = A → F = A + AB'
Apply absorption again: A + AB' = A → **F = A**

The entire expression reduces to just A.

## See Also

- [[commutative-associative-and-distributive-laws-preserve-logic-equivalence|Boolean Laws]] — the structural laws these identities build on
- [[demorgans-theorems-transform-between-and-or-forms|DeMorgan's Theorems]] — advanced transformation rules beyond these identities
- [[boolean-algebra-simplifies-logic-expressions-without-changing-output|Boolean Algebra]] — motivation for using these shortcuts

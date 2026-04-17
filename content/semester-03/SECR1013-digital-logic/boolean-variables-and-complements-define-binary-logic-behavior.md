---
title: "Boolean Variables Are Binary and Appear as Literals or Complements"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# Boolean Variables Are Binary and Appear as Literals or Complements

In Boolean algebra, a variable represents a binary logic signal that is either 0 or 1, and it appears in expressions either in its true form (A) or its complement form (A').

## Explanation

A Boolean variable such as A, B, or C is a symbolic name for a logic signal. At any moment it holds exactly one of two values: 0 (false/LOW) or 1 (true/HIGH). A **literal** is a variable in either form — A is a literal, and A' is also a literal. Expressions are built by combining literals with AND, OR, and NOT operations.

The complement of a variable is obtained by applying NOT: if A = 1 then A' = 0, and vice versa. Double complementation cancels: (A')' = A.

This vocabulary matters because many simplification rules specifically exploit the relationship between a variable and its complement. For example, A + A' = 1 (any OR its complement is always true) and A · A' = 0 (any AND its complement is always false). These identities are used constantly in circuit simplification.

## Key Points

- Variable: binary (0 or 1), represents a logic signal
- Literal: a variable in its true form (A) or complement form (A')
- (A')' = A (double NOT cancels)
- A + A' = 1 (complementation law — OR)
- A · A' = 0 (complementation law — AND)

## Example

Given expression: F = A + B'
If A = 1, B = 1:
  B' = 0
  F = 1 + 0 = 1

If A = 0, B = 0:
  B' = 1
  F = 0 + 1 = 1

## See Also

- [[boolean-algebra-simplifies-logic-expressions-without-changing-output|Boolean Algebra]] — the system using these variables
- [[boolean-rules-provide-direct-simplification-shortcuts|Boolean Rules]] — identities derived from variable behavior

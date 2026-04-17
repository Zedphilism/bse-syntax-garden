---
title: "Truth Tables Enumerate Every Input Combination and Its Output"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# Truth Tables Enumerate Every Input Combination and Its Output

A truth table is a complete tabular specification of a logic function that lists every possible input combination alongside the corresponding output.

## Explanation

For a function with n inputs, there are 2ⁿ possible input combinations. A truth table has exactly 2ⁿ rows, one for each combination, and is conventionally written by listing inputs in binary counting order from 0 to 2ⁿ − 1. This exhaustive approach leaves no case ambiguous — the table is the definitive description of how a gate or circuit behaves.

Truth tables serve multiple purposes: they define gate behaviour, they allow engineers to verify whether two different expressions are logically equivalent (same truth table → same function), and they are the starting point for simplification methods like Karnaugh maps.

To derive the truth table for a multi-gate circuit, evaluate the Boolean expression row by row, computing intermediate column values gate by gate until the final output is determined.

## Key Points

- n inputs → 2ⁿ rows in the truth table
- Input columns listed in binary counting order (0 through 2ⁿ − 1)
- Output column determined by the gate's Boolean rule
- Two expressions are logically equivalent iff their truth tables are identical

## Example

3-input AND gate (2³ = 8 rows):

| A | B | C | F = A·B·C |
|---|---|---|-----------|
| 0 | 0 | 0 |     0     |
| 0 | 0 | 1 |     0     |
| 0 | 1 | 0 |     0     |
| 0 | 1 | 1 |     0     |
| 1 | 0 | 0 |     0     |
| 1 | 0 | 1 |     0     |
| 1 | 1 | 0 |     0     |
| 1 | 1 | 1 |     1     |

## See Also

- [[logic-gates-implement-boolean-operations-using-binary-inputs|Logic Gates]] — truth tables define each gate's behavior
- [[boolean-expression-to-truth-table-maps-all-inputs-to-output|Boolean Expression to Truth Table]] — how to derive a table from an expression

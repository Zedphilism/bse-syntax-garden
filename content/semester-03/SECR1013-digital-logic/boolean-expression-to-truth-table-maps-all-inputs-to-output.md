---
title: "Deriving a Truth Table from a Boolean Expression Evaluates Every Input Combination"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# Deriving a Truth Table from a Boolean Expression Evaluates Every Input Combination

To build a truth table from a Boolean expression, list all 2ⁿ input combinations in binary order, evaluate the expression for each row, and record the output.

## Explanation

A truth table is the canonical verification tool for Boolean expressions and logic circuits. For n input variables there are 2ⁿ rows. Listing inputs in ascending binary order (000, 001, 010, 011, … for 3 variables) guarantees no combination is missed.

For complex expressions, intermediate columns are useful: compute each sub-expression in its own column, then combine columns to get the final output. This step-by-step approach avoids errors and makes the derivation easy to check.

Two expressions are logically equivalent if and only if their truth tables are identical in every row. This is the definitive test for equivalence, and is used to verify that a simplified Boolean expression still matches the original.

## Key Points

- n variables → 2ⁿ rows
- List inputs in binary counting order (0 to 2ⁿ−1)
- Use intermediate columns for sub-expressions
- Identical truth tables → logically equivalent expressions

## Example

Expression: F = A·B + A'·C (3 variables → 8 rows)

| A | B | C | A·B | A' | A'·C | F = A·B + A'·C |
|---|---|---|-----|----|------|----------------|
| 0 | 0 | 0 |  0  |  1 |  0   |       0        |
| 0 | 0 | 1 |  0  |  1 |  1   |       1        |
| 0 | 1 | 0 |  0  |  1 |  0   |       0        |
| 0 | 1 | 1 |  0  |  1 |  1   |       1        |
| 1 | 0 | 0 |  0  |  0 |  0   |       0        |
| 1 | 0 | 1 |  0  |  0 |  0   |       0        |
| 1 | 1 | 0 |  1  |  0 |  0   |       1        |
| 1 | 1 | 1 |  1  |  0 |  0   |       1        |

## See Also

- [[truth-tables-enumerate-all-possible-input-output-combinations|Truth Tables]] — the general concept
- [[logic-circuits-implement-boolean-expressions-physically|Logic Circuits]] — circuits verified using this method
- [[boolean-algebra-simplifies-logic-expressions-without-changing-output|Boolean Algebra]] — simplification confirmed correct by comparing truth tables

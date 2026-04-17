---
title: "A Truth Table Lists Every Possible Input Combination and the Output Each Produces"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# A Truth Table Lists Every Possible Input Combination and the Output Each Produces

A truth table is the exhaustive, canonical specification of a Boolean function — a structured table with one row for each of the 2ⁿ possible combinations of n binary inputs, showing the output value for each.

## Explanation

Because every input is either 0 or 1, and there are n inputs, there are exactly 2ⁿ possible states. Listing them in ascending binary order (000, 001, 010, … for 3 inputs) guarantees completeness. The output column(s) record the function's value for each row.

Truth tables are used to define a logic function from scratch, to verify that a simplified Boolean expression is equivalent to the original, and to specify the expected behavior of a circuit before implementation. Two Boolean expressions are logically equivalent if and only if their truth tables are identical in every row — this is the gold standard for equivalence checking.

## Example

Truth table for F = A·B + A' (3 inputs would need 8 rows; 2 inputs needs 4):

| A | B | A' | A·B | F = A·B + A' |
|---|---|----|-----|--------------|
| 0 | 0 |  1 |  0  |      1       |
| 0 | 1 |  1 |  0  |      1       |
| 1 | 0 |  0 |  0  |      0       |
| 1 | 1 |  0 |  1  |      1       |

## See Also

- [[logic-gate|Logic Gate]] — truth tables define what each gate does
- [[boolean-algebra|Boolean Algebra]] — simplification verified by comparing truth tables
- [[semester-03/SECR1013-digital-logic/truth-tables-enumerate-all-possible-input-output-combinations|Truth Tables Enumerate Every Input Combination and Its Output]] — source note

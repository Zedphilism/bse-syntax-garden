---
title: "DeMorgan's Theorem Converts the Complement of AND or OR to an Equivalent Gate Form"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# DeMorgan's Theorem Converts the Complement of AND or OR to an Equivalent Gate Form

DeMorgan's theorems are two Boolean identities that allow the complement of an AND or OR expression to be rewritten using the opposite operation with complemented inputs, enabling circuit transformations between NAND/NOR forms and AND/OR/NOT forms.

## Explanation

The two theorems:
1. (A · B)' = A' + B' — "the complement of AND equals OR of complements"
2. (A + B)' = A' · B' — "the complement of OR equals AND of complements"

The mnemonic "break the bar, change the sign" captures both: when you distribute a complement (bar) over an expression, break the bar at each variable and flip the operator (AND↔OR).

DeMorgan's theorems are critical in circuit design because NAND and NOR gates are easier to implement in CMOS than AND or OR. Using DeMorgan's, any AND-OR circuit can be converted to an equivalent NAND-NAND circuit, and any OR-AND circuit to NOR-NOR, without changing the logic function.

## Example

Prove NAND = OR with inverted inputs:
(A · B)' = A' + B'   (DeMorgan's theorem 1)
So a NAND gate (A · B)' is equivalent to an OR gate with both inputs inverted.

Circuit transformation: instead of (NOT A) OR (NOT B), use one NAND gate directly.

## See Also

- [[boolean-algebra|Boolean Algebra]] — the broader system DeMorgan's theorems belong to
- [[nand-gate|NAND Gate]] — directly equivalent to (A · B)' = A' + B'
- [[nor-gate|NOR Gate]] — directly equivalent to (A + B)' = A' · B'
- [[semester-03/SECR1013-digital-logic/demorgans-theorems-transform-between-and-or-forms|DeMorgan's Theorems Convert Complement of AND/OR]] — source note

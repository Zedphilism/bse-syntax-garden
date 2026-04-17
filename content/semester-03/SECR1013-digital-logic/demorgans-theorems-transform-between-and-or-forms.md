---
title: "DeMorgan's Theorems Convert Complement of AND/OR to OR/AND of Complements"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# DeMorgan's Theorems Convert Complement of AND/OR to OR/AND of Complements

DeMorgan's theorems state that the complement of a product equals the sum of complements, and the complement of a sum equals the product of complements.

## Explanation

DeMorgan's theorems are the most powerful transformation tool in Boolean algebra. They allow any expression to be converted between AND-dominant and OR-dominant forms, which is essential when implementing circuits using only NAND gates or only NOR gates.

**First theorem:** (A·B)' = A' + B'
The complement of AND becomes OR of complements. In hardware terms, a NAND gate is equivalent to an OR gate with inverted inputs.

**Second theorem:** (A+B)' = A'·B'
The complement of OR becomes AND of complements. A NOR gate is equivalent to an AND gate with inverted inputs.

To apply DeMorgan to longer expressions, use the generalised rule: complement the entire expression by inverting every literal and swapping AND↔OR throughout. The visual shorthand is: "break the bar, change the operator."

## Key Points

- (A·B)' = A' + B' (NAND = OR with inverted inputs)
- (A+B)' = A'·B' (NOR = AND with inverted inputs)
- Generalised: complement all variables AND swap all operators
- Mnemonic: "break the bar, change the sign"

## Example

**Applying first theorem:**
F = (A·B·C)' = A' + B' + C'

**Applying second theorem:**
F = (A+B+C)' = A'·B'·C'

**Complex expression:**
F = (AB + C)'
Step 1: (AB)' + C' → wait, wrong — treat AB as one block:
F = (AB)' · C' = (A'+B') · C'

## See Also

- [[boolean-rules-provide-direct-simplification-shortcuts|Boolean Rules]] — identities used alongside DeMorgan
- [[nand-gate-is-a-universal-gate-built-from-and-and-not|NAND Gate]] — directly equivalent to DeMorgan's first theorem
- [[nor-gate-is-a-universal-gate-built-from-or-and-not|NOR Gate]] — directly equivalent to DeMorgan's second theorem

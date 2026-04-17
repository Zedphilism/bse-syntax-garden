---
title: "NAND Is a Universal Gate That Outputs LOW Only When All Inputs Are HIGH"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# NAND Is a Universal Gate That Outputs LOW Only When All Inputs Are HIGH

A NAND gate is the complement of AND: it outputs LOW only when every input is HIGH, and HIGH in all other cases. Because any Boolean function can be built from NAND gates alone, it is called a universal gate.

## Explanation

NAND is AND followed immediately by NOT. Its Boolean expression is F = (A·B)'. The inversion flips the AND truth table so that the only LOW output becomes the only HIGH output of AND, and vice versa.

NAND's "universal" property means that AND, OR, NOT, NOR, XOR, and XNOR can all be implemented using only NAND gates, without needing any other gate type. This matters in IC manufacturing: using a single gate type simplifies the fabrication process and reduces design complexity. Flash memory technology is built on NAND gates, which is why NAND flash memory is named after them.

In practice, NAND is often preferred over AND in transistor-level design because NAND is naturally faster and easier to implement in CMOS technology than AND.

## Key Points

- F = (A·B)' = NAND(A, B)
- Output = 0 only when ALL inputs = 1
- Output = 1 whenever ANY input = 0
- Universal gate: every logic function can be built from NAND alone
- Symbol: AND shape with an output bubble

## Example

2-input NAND truth table:

| A | B | F = (A·B)' |
|---|---|------------|
| 0 | 0 |     1      |
| 0 | 1 |     1      |
| 1 | 0 |     1      |
| 1 | 1 |     0      |

NOT from NAND: connect both inputs together → F = (A·A)' = A'

## See Also

- [[and-gate-outputs-high-only-when-all-inputs-are-high|AND Gate]] — NAND is AND inverted
- [[nor-gate-is-a-universal-gate-built-from-or-and-not|NOR Gate]] — the other universal gate
- [[demorgans-theorems-transform-between-and-or-forms|DeMorgan's Theorems]] — explains the NAND/NOR equivalences

---
title: "XNOR Gate Outputs HIGH Only When Its Inputs Are Equal"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# XNOR Gate Outputs HIGH Only When Its Inputs Are Equal

An XNOR (exclusive NOR) gate outputs 1 when both inputs have the same value, and 0 when they differ — it detects equality.

## Explanation

XNOR is the complement of XOR: wherever XOR outputs 1, XNOR outputs 0, and vice versa. The Boolean expression is F = (A⊕B)' = AB + A'B'. Because it produces a HIGH output when both inputs match, XNOR is directly used as a 1-bit equality comparator.

Multi-bit equality checkers are built by feeding each pair of corresponding bits through an XNOR gate and ANDing all results. If every pair matches, every XNOR outputs 1, and the final AND outputs 1, confirming equality.

XNOR also appears in error detection: if the transmitted bit and the received bit are fed into an XNOR, a HIGH output confirms the bits match; a LOW output signals a mismatch.

## Key Points

- F = (A⊕B)' = AB + A'B'
- Output = 1 when inputs are equal; output = 0 when inputs differ
- Used as a 1-bit equality comparator
- Symbol: XOR shape with an output bubble

## Example

2-input XNOR truth table:

| A | B | F = (A⊕B)' |
|---|---|------------|
| 0 | 0 |     1      |
| 0 | 1 |     0      |
| 1 | 0 |     0      |
| 1 | 1 |     1      |

4-bit equality check:
A = 1010, B = 1010
XNOR each bit: 1,1,1,1 → AND → 1 (equal)

A = 1010, B = 1011
XNOR: 1,1,1,0 → AND → 0 (not equal)

## See Also

- [[xor-gate-outputs-high-when-inputs-are-different|XOR Gate]] — XNOR is XOR inverted
- [[nand-gate-is-a-universal-gate-built-from-and-and-not|NAND Gate]] — another inverted gate form

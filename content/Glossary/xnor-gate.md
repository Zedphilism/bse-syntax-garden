---
title: "XNOR Gate Outputs HIGH Only When All Its Inputs Are Equal"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# XNOR Gate Outputs HIGH Only When All Its Inputs Are Equal

The XNOR (exclusive NOR) gate is the complement of XOR — it outputs 1 when its inputs are equal (both 0 or both 1) — making it the hardware implementation of a single-bit equality comparator.

## Explanation

F = (A ⊕ B)' = A XNOR B. For two inputs, XNOR is HIGH when A and B are the same value. This "equality detector" behavior makes XNOR the key element in magnitude comparators: to check if two multi-bit numbers are equal, XNOR each corresponding pair of bits — if all XNOR outputs are HIGH, the numbers are equal; a single LOW output means at least one bit pair differs.

XNOR is not a universal gate on its own, but it is commonly available in logic ICs and FPGA primitives because equality comparison is extremely common in digital design.

## Example

| A | B | F = (A⊕B)' |
|---|---|-----------|
| 0 | 0 |     1     |
| 0 | 1 |     0     |
| 1 | 0 |     0     |
| 1 | 1 |     1     |

4-bit equality: XNOR A[3:0] with B[3:0] bit by bit, then AND all four results. Output HIGH iff A = B.

## See Also

- [[xor-gate|XOR Gate]] — XNOR is XOR inverted
- [[truth-table|Truth Table]] — used to derive and verify XNOR behavior
- [[semester-03/SECR1013-digital-logic/xnor-gate-outputs-high-when-inputs-are-equal|XNOR Gate Outputs HIGH Only When Its Inputs Are Equal]] — source note

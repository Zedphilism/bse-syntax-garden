---
title: "XOR Gate Outputs HIGH Only When Its Inputs Are Different from Each Other"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# XOR Gate Outputs HIGH Only When Its Inputs Are Different from Each Other

The XOR (exclusive OR) gate outputs 1 when an odd number of its inputs are 1 — for a 2-input gate, this means the inputs must differ — making it the fundamental building block of binary adders and parity checkers.

## Explanation

F = A ⊕ B. For two inputs, XOR is HIGH when exactly one input is HIGH (inputs differ); it is LOW when both are equal (both 0 or both 1). This "inequality detector" property directly produces the sum bit in binary addition: 0+0=0, 0+1=1, 1+0=1, 1+1=0 (with carry) — exactly XOR's truth table.

For multiple inputs, XOR outputs 1 when an odd number of inputs are 1. This makes XOR chains useful for parity computation: XOR all bits together to get a 1-bit even parity check.

## Example

| A | B | F = A⊕B |
|---|---|---------|
| 0 | 0 |    0    |
| 0 | 1 |    1    |
| 1 | 0 |    1    |
| 1 | 1 |    0    |

Half adder: Sum = A ⊕ B, Carry = A · B. XOR handles the sum; AND handles the carry.

## See Also

- [[xnor-gate|XNOR Gate]] — complement of XOR; detects equality
- [[or-gate|OR Gate]] — inclusive OR (1+1=1); XOR is exclusive (1+1=0)
- [[semester-03/SECR1013-digital-logic/xor-gate-outputs-high-when-inputs-are-different|XOR Gate Outputs HIGH Only When Its Inputs Differ]] — source note

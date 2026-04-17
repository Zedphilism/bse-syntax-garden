---
title: "XOR Gate Outputs HIGH Only When Its Inputs Differ"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# XOR Gate Outputs HIGH Only When Its Inputs Differ

An XOR (exclusive OR) gate outputs 1 when its inputs have different values, and 0 when they are the same — it detects inequality.

## Explanation

XOR is often described as "OR but not both." The standard OR allows A=1, B=1 → 1, but XOR excludes that case. The Boolean expression is F = A⊕B = A'B + AB'.

XOR is particularly important in arithmetic and error detection:
- In binary addition, XOR computes the **sum bit** (without carry). A half adder is built from one XOR and one AND gate.
- In parity checking and CRC error detection, XOR accumulates bits to determine parity.
- In cryptography, XOR is a reversible operation used in stream ciphers and symmetric keys.

For more than two inputs, XOR outputs 1 when an **odd number** of inputs are 1. This property is directly exploited in parity generators and checkers.

## Key Points

- F = A⊕B = A'B + AB'
- Output = 1 when inputs differ; output = 0 when inputs are equal
- Multi-input XOR: output = 1 when an odd number of inputs = 1
- Used in adders, parity logic, and encryption

## Example

2-input XOR truth table:

| A | B | F = A⊕B |
|---|---|---------|
| 0 | 0 |    0    |
| 0 | 1 |    1    |
| 1 | 0 |    1    |
| 1 | 1 |    0    |

Half adder using XOR + AND:
Sum = A⊕B, Carry = A·B

## See Also

- [[xnor-gate-outputs-high-when-inputs-are-equal|XNOR Gate]] — XOR inverted; outputs HIGH when inputs are equal
- [[or-gate-outputs-high-when-any-input-is-high|OR Gate]] — XOR is OR minus the all-ones case
- [[parity-bit-detects-errors-using-even-or-odd-counts|Parity Bit]] — uses XOR to count 1s

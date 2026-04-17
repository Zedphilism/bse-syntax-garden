---
title: "Two's Complement Is the Standard Binary Encoding for Signed Integers in All Modern Hardware"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# Two's Complement Is the Standard Binary Encoding for Signed Integers in All Modern Hardware

Two's complement represents negative integers by inverting all bits of the positive value and adding 1, enabling the same addition hardware to handle both positive and negative numbers without special-casing the sign.

## Explanation

The defining advantage of two's complement is that subtraction becomes addition: to compute A − B, a CPU computes A + (−B), where −B is the two's complement of B. There is no need for a separate subtraction circuit. This is why every modern CPU, from microcontrollers to server processors, uses two's complement for signed integer arithmetic.

Two's complement also has exactly one representation of zero (all bits 0), unlike sign-magnitude and one's complement which have +0 and −0. For an n-bit two's complement number, the range is −2ⁿ⁻¹ to +2ⁿ⁻¹−1. The MSB acts as a sign bit: 0 = positive or zero, 1 = negative.

## Key Points

- Negate: invert all bits, then add 1
- Single zero representation
- Range: −2ⁿ⁻¹ to +2ⁿ⁻¹−1
- MSB = 1 → negative; MSB = 0 → positive or zero
- Carry-out from MSB during addition is discarded (not an error)

## Example

8-bit two's complement of +5 (00000101):
1. Invert: 11111010
2. Add 1: 11111011 = −5₁₀

Verify: 00000101 + 11111011 = 1 00000000 → discard carry → 00000000 = 0 ✓

## See Also

- [[overflow|Overflow]] — occurs when two's complement addition produces a wrong-sign result
- [[binary|Binary]] — the underlying representation
- [[semester-03/SECR1013-digital-logic/twos-complement-enables-subtraction-using-addition|Two's Complement Lets Hardware Subtract by Adding a Negative]] — source note

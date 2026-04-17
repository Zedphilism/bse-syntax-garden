---
title: "Two's Complement Lets Hardware Subtract by Adding a Negative"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic, supplemental, thomas-floyd]
---

# Two's Complement Lets Hardware Subtract by Adding a Negative

Two's complement is the standard signed integer representation in digital systems because it encodes negatives in a way that allows subtraction to be performed using ordinary addition circuits, with no extra correction step.

## Explanation

Two's complement of a number is formed by inverting all its bits (one's complement) and then adding 1. The genius of this is that adding any number to its two's complement always produces all-zeros with a carry out — the carry is simply discarded. This means the ALU needs only one addition circuit to handle both addition and subtraction.

Compared to sign-magnitude and one's complement, two's complement has a single representation for zero (all-zeros), which simplifies equality checks and avoids the end-around carry problem. The trade-off is an asymmetric range: for n bits, the range is −2ⁿ⁻¹ to +(2ⁿ⁻¹ − 1). The most negative number has no positive counterpart (e.g., −128 exists in 8 bits but +128 does not).

The MSB still serves as the sign indicator: 0 = positive, 1 = negative. To decode a negative two's complement number, apply the same process (invert all bits, add 1) to recover its magnitude.

## Key Points

- Negative = invert all bits + 1
- Single zero representation (0000…0)
- Range for n bits: −2ⁿ⁻¹ to +(2ⁿ⁻¹ − 1)
- Subtraction: A − B = A + (two's complement of B); discard carry out
- Every modern CPU uses this internally

## Example

Compute 7 − 3 in 4-bit two's complement:

7 = 0111
Two's complement of 3: 0011 → invert → 1100 → +1 → 1101

  0111
+ 1101
------
1 0100   ← discard the carry-out
= 0100 = 4 ✓

## See Also

- [[ones-complement-inverts-bits-to-represent-negative-values|One's Complement]] — the step before: same range problem, no correction needed here
- [[binary-overflow-occurs-when-results-exceed-bit-capacity|Binary Overflow]] — what happens when results exceed the bit-width range
- [[sign-magnitude-representation-separates-sign-and-value|Sign-Magnitude]] — conceptually simpler but hardware-expensive alternative

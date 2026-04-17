---
title: "Sign-Magnitude Representation Uses the MSB as a Sign Flag"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# Sign-Magnitude Representation Uses the MSB as a Sign Flag

Sign-magnitude encoding reserves the most significant bit as a sign indicator (0 = positive, 1 = negative) and uses the remaining bits for the absolute value.

## Explanation

Sign-magnitude is the most intuitive way to extend binary to negative numbers — it mirrors how we write numbers on paper by separating sign from magnitude. An n-bit sign-magnitude number has 1 sign bit and n−1 magnitude bits.

This approach has two significant drawbacks. First, there are two representations of zero: 0000 0000 (+0) and 1000 0000 (−0). This wastes one code point and complicates equality checks. Second, addition of positive and negative numbers cannot be done with a single simple rule — the hardware must examine the signs and choose between adding or subtracting magnitudes, then determine the correct sign for the result.

Because of these complications, sign-magnitude is not used internally by modern CPUs. It does appear in the mantissa of floating-point numbers (IEEE 754 uses a sign bit separate from the exponent and fraction fields).

## Key Points

- MSB = 0 → positive; MSB = 1 → negative
- Remaining n−1 bits = absolute value
- Two representations of zero exist (+0 and −0)
- Range for n bits: −(2ⁿ⁻¹ − 1) to +(2ⁿ⁻¹ − 1)

## Example

8-bit sign-magnitude:

| Value | Binary    |
|-------|-----------|
| +25   | 0001 1001 |
| −25   | 1001 1001 |
| +0    | 0000 0000 |
| −0    | 1000 0000 |

## See Also

- [[unsigned-binary-integers-represent-only-non-negative-values|Unsigned Binary]] — no sign bit, full range for positives
- [[ones-complement-inverts-bits-to-represent-negative-values|One's Complement]] — next step in signed representations
- [[twos-complement-enables-subtraction-using-addition|Two's Complement]] — the standard used in real hardware

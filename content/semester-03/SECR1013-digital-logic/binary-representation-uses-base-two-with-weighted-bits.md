---
title: "Binary Representation Uses Base Two with Weighted Bit Positions"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# Binary Representation Uses Base Two with Weighted Bit Positions

Binary numbers represent values using only the digits 0 and 1, where each bit position carries a weight that is a power of 2.

## Explanation

Binary (base-2) is the native language of digital hardware because transistors naturally model two stable states: on and off, which map directly to 1 and 0. Each bit contributes its face value (0 or 1) multiplied by 2 raised to its position index, counted from zero starting at the rightmost bit.

Positions to the left of the radix point carry positive powers (2⁰, 2¹, 2², …) while positions to the right carry negative powers (2⁻¹ = 0.5, 2⁻² = 0.25, …). This makes binary a complete positional system capable of representing any real number, not just integers.

Two notable patterns fall out directly from this structure: a power of 2 in binary is always a 1 followed by zeros; a number equal to 2ⁿ − 1 is always all ones. Even numbers always end in 0; odd numbers always end in 1.

## Key Points

| Power | Value | Binary |
|-------|-------|--------|
| 2⁰    | 1     | 1      |
| 2¹    | 2     | 10     |
| 2²    | 4     | 100    |
| 2³    | 8     | 1000   |
| 2⁴    | 16    | 10000  |
| 2⁵    | 32    | 100000 |

- Even binary number → LSB is 0
- Odd binary number → LSB is 1
- 2ⁿ − 1 in binary → n consecutive 1s

## Example

Convert 110100.011₂ to decimal:

(1×2⁵) + (1×2⁴) + (0×2³) + (1×2²) + (0×2¹) + (0×2⁰) + (0×2⁻¹) + (1×2⁻²) + (1×2⁻³)
= 32 + 16 + 0 + 4 + 0 + 0 + 0 + 0.25 + 0.125
= 52.375₁₀

## See Also

- [[positional-number-systems-assign-value-based-on-place|Positional Number Systems]] — general framework this builds on
- [[binary-to-hexadecimal-conversion-uses-grouping-of-four-bits|Binary to Hex Conversion Uses Grouping of Four Bits]] — compact notation for binary
- [[binary-to-octal-conversion-uses-grouping-of-three-bits|Binary to Octal Conversion Uses Grouping of Three Bits]] — alternative grouping shortcut

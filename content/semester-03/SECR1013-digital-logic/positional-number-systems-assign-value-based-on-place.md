---
title: "Positional Number Systems Assign Value Based on Digit Place"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# Positional Number Systems Assign Value Based on Digit Place

In a positional number system, the value of each digit depends on both the digit itself and its position relative to the radix point.

## Explanation

Any positive integer B greater than 1 can serve as the base (or radix) of a number system, using digits from 0 to B−1. The value of a number is found by multiplying each digit by the base raised to the power of its position, then summing the results. Positions to the left of the radix point carry positive exponents; positions to the right carry negative exponents.

This structure is called positional notation. It is why the digit "4" in 4839 means four-thousands while the same digit "4" in 0.04 means four-hundredths. The position, not just the digit, determines contribution. All number systems used in digital logic — binary, octal, decimal, hexadecimal — follow this same rule, just with different bases and digit sets.

Formally, a number N in base B is:

N = c₃×B³ + c₂×B² + c₁×B¹ + c₀×B⁰ + c₋₁×B⁻¹ + c₋₂×B⁻² + ...

where each coefficient cᵢ satisfies 0 ≤ cᵢ ≤ B−1.

## Key Points

| Base | Name        | Digits used              |
|------|-------------|--------------------------|
| 2    | Binary      | 0, 1                     |
| 8    | Octal       | 0–7                      |
| 10   | Decimal     | 0–9                      |
| 16   | Hexadecimal | 0–9, A–F                 |

- The leftmost digit (highest position) is the Most Significant Digit (MSD)
- The rightmost digit (lowest position) is the Least Significant Digit (LSD)

## Example

Express 4839.72₁₀ as a sum of positional values:

(4 × 10³) + (8 × 10²) + (3 × 10¹) + (9 × 10⁰) + (7 × 10⁻¹) + (2 × 10⁻²)
= 4000 + 800 + 30 + 9 + 0.7 + 0.02
= 4839.72

## See Also

- [[binary-representation-uses-base-two-with-weighted-bits|Binary Uses Base Two with Weighted Bits]] — applies positional concept to base 2
- [[number-system-conversion-uses-division-and-multiplication|Number System Conversion Uses Division and Multiplication]] — relies on positional weights

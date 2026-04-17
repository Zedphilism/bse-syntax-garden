---
title: "Radix Is the Number of Unique Digits in a Positional Number System"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# Radix Is the Number of Unique Digits in a Positional Number System

The radix (base) of a number system is the count of distinct digit symbols it uses; each digit position represents the radix raised to a power, and the position's value is that digit multiplied by its positional weight.

## Explanation

In a radix-r system, digits range from 0 to r−1. The rightmost position has weight r⁰ = 1; each position to the left multiplies the weight by r. The total value of a number is the sum of each digit multiplied by its positional weight.

The radix is the multiplying factor that connects adjacent digit positions. Moving one position left multiplies the weight by r; moving one position right divides it by r. This structure is why number system conversion between bases (e.g., decimal to binary) is performed by repeated division or multiplication by the target radix.

## Key Points

- Radix = base = number of digit symbols
- Digits: 0 to radix−1
- Position weight = radix^position (0-indexed from right)

## Example

| System      | Radix | Digits        |
|-------------|-------|---------------|
| Binary      | 2     | 0, 1          |
| Octal       | 8     | 0–7           |
| Decimal     | 10    | 0–9           |
| Hexadecimal | 16    | 0–9, A–F      |

The decimal number 245 = 2×10² + 4×10¹ + 5×10⁰.

## See Also

- [[binary|Binary]] — radix-2 number system
- [[hexadecimal|Hexadecimal]] — radix-16 number system
- [[octal|Octal]] — radix-8 number system
- [[semester-03/SECR1013-digital-logic/positional-number-systems-assign-value-based-on-place|Positional Number Systems Assign Value Based on Digit Place]] — source note

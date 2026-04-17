---
title: "Binary to Hexadecimal Conversion Uses Grouping of Four Bits"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# Binary to Hexadecimal Conversion Uses Grouping of Four Bits

Binary numbers convert to hexadecimal by grouping bits into sets of four, starting from the least significant bit, because 2⁴ = 16.

## Explanation

Because 16 = 2⁴, a single hexadecimal digit represents exactly four binary bits. This one-to-one relationship means conversion requires no arithmetic — just direct substitution. Group the binary digits in fours from the radix point outward (left for the integer, right for the fraction), pad incomplete groups with leading zeros, and map each group to its hex equivalent (0–9, A–F).

The reverse works the same way: replace each hex digit with its 4-bit binary equivalent, then remove any leading zeros from the MSB side.

Hexadecimal is the dominant notation for representing binary data in programming and hardware documentation because a 32-bit value fits in 8 hex digits instead of 32 binary digits, dramatically reducing reading errors.

## Key Points

- Group size = 4 bits (since 2⁴ = 16)
- Integer part: group left from radix point; pad leading zeros
- Fractional part: group right from radix point; pad trailing zeros
- Each group maps to 0–9 or A–F (A=10, B=11, C=12, D=13, E=14, F=15)
- Hex → binary: expand each digit to 4 bits; drop leading zeros from MSB

## Example

Convert 10011001110₂ to hexadecimal:

Binary: 0100 1100 1110
         4    C    E
Result: 4CE₁₆

Reverse — convert 124.AB7₁₆ to binary:

1=0001, 2=0010, 4=0100 . A=1010, B=1011, 7=0111
Result: 000100100100.101010110111₂

## See Also

- [[binary-representation-uses-base-two-with-weighted-bits|Binary Representation]] — base system
- [[binary-to-octal-conversion-uses-grouping-of-three-bits|Binary to Octal Conversion]] — same idea with 3-bit groups
- [[number-system-conversion-uses-division-and-multiplication|Decimal Conversion by Division/Multiplication]] — general method without grouping shortcut

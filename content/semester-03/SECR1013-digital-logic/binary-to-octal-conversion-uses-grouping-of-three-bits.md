---
title: "Binary to Octal Conversion Uses Grouping of Three Bits"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# Binary to Octal Conversion Uses Grouping of Three Bits

Binary numbers convert to octal by grouping bits into sets of three, starting from the radix point outward, because 2³ = 8.

## Explanation

Since 8 = 2³, exactly three binary bits correspond to one octal digit (0–7). Grouping in threes replaces arithmetic with direct substitution, making this a fast and error-resistant method. For the integer part, group from the radix point moving left; for the fractional part, group from the radix point moving right. Add leading or trailing zeros to complete incomplete groups.

The reverse is equally simple: expand each octal digit to its 3-bit binary equivalent.

When converting between octal and hexadecimal, it is easiest to go through binary as an intermediate step — there is no direct 3-to-4 bit shortcut.

## Key Points

- Group size = 3 bits (since 2³ = 8)
- Integer part: group left from radix point; pad leading zeros
- Fractional part: group right from radix point; pad trailing zeros
- Octal digits: 0–7 only (digit 8 or 9 is invalid in octal)
- Octal → binary: expand each digit to 3 bits; drop leading zeros from MSB

## Example

Convert 10001101.1101001₂ to octal:

Integer part (group left from dot):
010 001 101 → 2 1 5

Fractional part (group right from dot):
110 100 100 → 6 4 4

Result: 215.644₈

Reverse — convert 623.53₈ to binary:

6=110, 2=010, 3=011 . 5=101, 3=011
Result: 110010011.101011₂

## See Also

- [[binary-representation-uses-base-two-with-weighted-bits|Binary Representation]] — base system
- [[binary-to-hexadecimal-conversion-uses-grouping-of-four-bits|Binary to Hex Conversion]] — same principle with 4-bit groups
- [[number-system-conversion-uses-division-and-multiplication|Decimal Conversion by Division/Multiplication]] — general method

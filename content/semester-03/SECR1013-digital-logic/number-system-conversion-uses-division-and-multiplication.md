---
title: "Decimal to Any Base Conversion Uses Division and Multiplication"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# Decimal to Any Base Conversion Uses Division and Multiplication

Converting a decimal number to another base requires successive division for the integer part and successive multiplication for the fractional part, with the results read in opposite directions.

## Explanation

The integer and fractional parts of a number must be converted separately because they behave differently under positional notation.

**Integer part — successive division:** Repeatedly divide the integer by the target base. Each division yields a quotient and a remainder. The remainders, read from last to first (bottom to top), form the digits of the converted number. Stop when the quotient reaches 0.

**Fractional part — successive multiplication:** Repeatedly multiply the fraction by the target base. Each multiplication yields a whole-number part and a new fraction. The whole-number parts, read from first to last (top to bottom), form the fractional digits. Stop when the product's fraction becomes 0, or when enough precision has been reached.

For numbers with both parts, convert each independently and rejoin at the radix point.

## Key Points

- Integer → successive division by target base; read remainders bottom-to-top
- Fraction → successive multiplication by target base; read whole parts top-to-bottom
- Fractional conversion may not terminate — stop at desired precision

## Example

Convert 1447.18359₁₀ to hexadecimal (base 16):

**Integer part:**
1447 ÷ 16 = 90 remainder **7**
90 ÷ 16 = 5  remainder **A** (10)
5 ÷ 16 = 0   remainder **5**
Read bottom-to-top → 5A7₁₆

**Fractional part:**
0.18359 × 16 = **2**.93744 → 2
0.93744 × 16 = **E** (14).99904 → E
0.99904 × 16 = **F** (15).98464 → F
Read top-to-bottom → .2EF₁₆

Result: 1447.18359₁₀ = 5A7.2EF₁₆

## See Also

- [[positional-number-systems-assign-value-based-on-place|Positional Number Systems]] — the basis for why this method works
- [[binary-to-hexadecimal-conversion-uses-grouping-of-four-bits|Binary to Hex Conversion]] — faster shortcut when source is already binary
- [[binary-to-octal-conversion-uses-grouping-of-three-bits|Binary to Octal Conversion]] — faster shortcut for octal

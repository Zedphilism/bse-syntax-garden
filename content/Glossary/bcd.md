---
title: "BCD Encodes Each Decimal Digit as a Separate 4-Bit Binary Group"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# BCD Encodes Each Decimal Digit as a Separate 4-Bit Binary Group

Binary Coded Decimal (BCD) is a numeric encoding that represents each decimal digit (0–9) individually as a 4-bit binary code, allowing decimal numbers to be stored and processed without conversion to pure binary.

## Explanation

In pure binary, the decimal number 99 becomes 1100011. In BCD, 99 is stored as 1001 1001 — the digits 9 and 9 encoded separately. Each group of four bits always corresponds to exactly one decimal digit, making the conversion trivial for display purposes (no complex division needed to extract digits).

The cost of BCD is efficiency: only 10 of the 16 possible 4-bit patterns (0000–1001) are valid; patterns 1010–1111 are illegal and must never appear. BCD requires more bits than pure binary for the same value. It is used in financial calculations (to avoid floating-point rounding), seven-segment displays, digital clocks, and calculators where decimal accuracy and easy display output matter more than storage efficiency.

## Key Points

- 4 bits per decimal digit; valid codes: 0000 (0) to 1001 (9)
- Invalid codes 1010–1111 must not appear
- Less storage-efficient than binary but trivially maps to decimal displays

## Example

Decimal 472 in BCD: 0100 0111 0010
4 = 0100, 7 = 0111, 2 = 0010

Contrast pure binary: 472₁₀ = 111011000₂ — only 9 bits vs. 12 bits for BCD.

## See Also

- [[binary|Binary]] — pure binary is more compact but harder to display as decimal
- [[semester-03/SECR1013-digital-logic/binary-coded-decimal-represents-digits-separately-in-binary|BCD Encodes Each Decimal Digit Separately as Four Binary Bits]] — source note

---
title: "BCD Encodes Each Decimal Digit Separately as Four Binary Bits"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# BCD Encodes Each Decimal Digit Separately as Four Binary Bits

Binary Coded Decimal (BCD) stores each decimal digit independently using its 4-bit binary equivalent, rather than converting the whole number to binary.

## Explanation

Pure binary and BCD are fundamentally different. Pure binary converts the entire number into its binary equivalent, minimising bit usage but making the individual decimal digits unrecognisable in the stored form. BCD preserves each decimal digit: the number 59 becomes 0101 1001 (5 → 0101, 9 → 1001) rather than its pure binary form 111011.

This encoding requires four bits per digit because decimal has 10 symbols (0–9) and 2³ = 8 < 10 < 16 = 2⁴. As a result, the bit patterns 1010 through 1111 (10–15 in decimal) are invalid in BCD and should never appear.

BCD is less storage-efficient than pure binary, but it shines in systems that display or process decimal output directly — calculators, digital clocks, financial registers — because conversion back to human-readable form requires no arithmetic, just digit-by-digit substitution.

## Key Points

- 4 bits per decimal digit
- Valid range: 0000 (0) to 1001 (9)
- Invalid patterns: 1010–1111 (these represent no BCD digit)
- Does not convert the whole number — each digit is independent

## Example

Convert 294₁₀ to BCD:

2 → 0010
9 → 1001
4 → 0100

BCD result: 0010 1001 0100

Note: 0010 1001 0100 in pure binary equals 660₁₀ — a completely different number.

## See Also

- [[binary-representation-uses-base-two-with-weighted-bits|Binary Representation]] — contrasts with pure binary encoding
- [[ascii-encodes-characters-as-binary-values|ASCII Encoding]] — another character/digit encoding scheme
- [[gray-code-ensures-only-one-bit-changes-between-values|Gray Code]] — alternative binary encoding with different goals

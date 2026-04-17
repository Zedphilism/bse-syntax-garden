---
title: "ASCII Assigns a Unique 7-Bit Binary Code to Each Printable Character"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# ASCII Assigns a Unique 7-Bit Binary Code to Each Printable Character

ASCII (American Standard Code for Information Interchange) maps each letter, digit, punctuation mark, and control character to a unique 7-bit binary number, allowing computers to store and transmit text in a standard format.

## Explanation

Without a shared encoding standard, two computers would have no way to agree on what a stored bit pattern means as text. ASCII solves this by assigning numbers 0–127 to 128 characters: 33 non-printable control characters (0–31, 127), 10 digits (48–57), 26 uppercase letters (65–90), 26 lowercase letters (97–122), and various punctuation marks.

A useful pattern: uppercase letters start at 65 (A = 0100 0001), and lowercase letters start at 97 (a = 0110 0001). The only difference is bit 5 — toggling bit 5 converts between cases. This regularity makes case conversion trivial in hardware.

Extended ASCII uses 8 bits, adding another 128 code points (128–255) for accented characters and symbols. Modern systems use Unicode/UTF-8, which is a superset of ASCII — the first 128 code points are identical.

## Key Points

- 7-bit standard (0–127), 128 characters total
- Digits: 48–57 (i.e., '0' = 48 = 0011 0000)
- Uppercase A–Z: 65–90
- Lowercase a–z: 97–122
- Bit 5 distinguishes upper/lowercase (0 = upper, 1 = lower)

## Example

Character 'm':
- Decimal: 109
- Binary: 0110 1101
- Hex: 6D

Character 'M':
- Decimal: 77
- Binary: 0100 1101
- Hex: 4D

'm' vs 'M': only bit 5 differs (1 vs 0) — all other bits identical.

## See Also

- [[binary-coded-decimal-represents-digits-separately-in-binary|BCD Encoding]] — digit-only alternative encoding
- [[parity-bit-detects-errors-using-even-or-odd-counts|Parity Bit]] — historically added to ASCII transmissions for error detection

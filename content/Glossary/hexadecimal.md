---
title: "Hexadecimal Is a Base-16 Number System Used as Compact Shorthand for Binary"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# Hexadecimal Is a Base-16 Number System Used as Compact Shorthand for Binary

Hexadecimal (hex) is a positional number system with radix 16, using digits 0–9 and letters A–F, where each hex digit represents exactly four binary bits, making it the standard compact notation for binary data in computing.

## Explanation

The reason hex is ubiquitous in computing is the perfect power-of-2 relationship between base 16 and binary: 16 = 2⁴. One hex digit maps bijectively to a 4-bit binary group (nibble). This means you can convert between hex and binary digit-by-digit without arithmetic — just substitute each hex digit for its 4-bit equivalent and vice versa.

Hex is used everywhere binary values appear: memory addresses, color codes (#FF5733), machine instructions, file headers (magic bytes), and network MAC addresses. It reduces the cognitive load of reading binary by a factor of four without losing any information.

## Key Points

- Radix 16; digits: 0–9, A(10), B(11), C(12), D(13), E(14), F(15)
- 1 hex digit = 4 binary bits (1 nibble)
- 2 hex digits = 8 bits = 1 byte
- Notations: 0x prefix (C/assembly), h suffix (Intel ASM), # prefix (HTML colors)

## Example

Binary 1010 1111 0011 = AF3₁₆
A = 1010, F = 1111, 3 = 0011 — each group of four bits maps to one hex digit.

## See Also

- [[binary|Binary]] — hex is shorthand for binary
- [[octal|Octal]] — base-8, used in Unix permissions
- [[semester-03/SECR1013-digital-logic/binary-to-hexadecimal-conversion-uses-grouping-of-four-bits|Binary to Hexadecimal Conversion Uses Grouping of Four Bits]] — source note

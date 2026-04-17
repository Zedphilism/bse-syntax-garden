---
title: "Octal Is a Base-8 Number System Where Each Digit Represents Three Binary Bits"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# Octal Is a Base-8 Number System Where Each Digit Represents Three Binary Bits

Octal is a positional number system with radix 8, using digits 0–7, where each digit maps exactly to a 3-bit binary group, making it a compact shorthand that was widely used in early computing and remains standard in Unix file permissions.

## Explanation

Like hexadecimal, octal's utility in computing comes from its power-of-2 relationship with binary: 8 = 2³. One octal digit maps bijectively to a 3-bit binary group, so conversion between octal and binary requires no arithmetic — group the bits in threes from the radix point outward, and substitute each group for its octal digit.

Octal was the dominant shorthand in the 1960s–1970s on machines with word sizes divisible by 3 (12-, 18-, 36-bit minicomputers). Today it persists primarily in Unix/Linux file permission notation: chmod 755 means rwxr-xr-x, where each digit encodes a 3-bit permission triplet (read/write/execute).

## Example

Binary 101 111 010 = 572₈
5 = 101, 7 = 111, 2 = 010 — each group of three bits maps to one octal digit.

Unix: `chmod 644` sets permissions 110 100 100 → rw-r--r--

## See Also

- [[binary|Binary]] — octal is shorthand for binary
- [[hexadecimal|Hexadecimal]] — base-16, now the dominant binary shorthand
- [[semester-03/SECR1013-digital-logic/binary-to-octal-conversion-uses-grouping-of-three-bits|Binary to Octal Conversion Uses Grouping of Three Bits]] — source note

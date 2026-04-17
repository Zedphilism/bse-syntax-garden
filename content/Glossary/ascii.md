---
title: "ASCII Is a 7-Bit Standard That Assigns a Unique Binary Code to Each Printable Character"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# ASCII Is a 7-Bit Standard That Assigns a Unique Binary Code to Each Printable Character

ASCII (American Standard Code for Information Interchange) is a character encoding that maps each of 128 symbols — digits, letters, punctuation, and control codes — to a unique 7-bit binary value, forming the foundation of all modern text encoding.

## Explanation

Published in 1963 and standardised in 1968, ASCII was designed for teletype communication. Its 7 bits encode values 0–127: codes 0–31 and 127 are non-printable control characters (newline, tab, escape, etc.); codes 32–126 are printable characters.

Key landmark values: digits start at 48 (0x30), so the ASCII code for any digit '0'–'9' equals the digit value plus 48. Uppercase 'A' = 65 (0x41); lowercase 'a' = 97 (0x61). The difference of 32 (bit 5) between corresponding upper and lower case letters allows case conversion by toggling a single bit.

ASCII is the core of all wider encodings: UTF-8 is backwards-compatible with ASCII for codes 0–127, meaning any ASCII file is a valid UTF-8 file.

## Key Points

- 7-bit standard; 128 characters
- Digits '0'–'9': codes 48–57
- Uppercase 'A'–'Z': codes 65–90
- Lowercase 'a'–'z': codes 97–122
- Case toggle: XOR with 0b00100000 (bit 5)

## Example

The string "Hi!" in ASCII binary: H=72=1001000, i=105=1101001, !=33=0100001

## See Also

- [[bit|Bit]] — ASCII uses 7 bits per character
- [[parity-bit|Parity Bit]] — early systems transmitted ASCII with an 8th parity bit
- [[semester-03/SECR1013-digital-logic/ascii-encodes-characters-as-binary-values|ASCII Assigns a Unique 7-Bit Binary Code to Each Printable Character]] — source note

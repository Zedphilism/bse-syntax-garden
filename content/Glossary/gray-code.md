---
title: "Gray Code Is a Binary Encoding Where Consecutive Values Differ by Exactly One Bit"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# Gray Code Is a Binary Encoding Where Consecutive Values Differ by Exactly One Bit

Gray code (reflected binary code) is a sequence of binary numbers arranged so that adjacent values differ in exactly one bit position, eliminating the transient errors that occur in standard binary when multiple bits change simultaneously during counting.

## Explanation

In standard binary, incrementing from 0111 to 1000 requires all four bits to change at once. In real hardware, bits do not change at exactly the same instant, so the encoder passes through intermediate states (e.g., 0111 → 1111 → 1000) that represent wrong values. For position encoders or mechanical switches, these glitches can cause catastrophic misreadings.

Gray code solves this by ensuring only one bit ever changes between consecutive values. The conversion from binary to Gray code is: keep the MSB, and for each subsequent bit, XOR the current binary bit with the previous one. Decoding is the reverse XOR chain from MSB to LSB.

## Example

| Decimal | Binary | Gray Code |
|---------|--------|-----------|
| 0       | 0000   | 0000      |
| 1       | 0001   | 0001      |
| 2       | 0010   | 0011      |
| 3       | 0011   | 0010      |
| 4       | 0100   | 0110      |

Stepping from 3 (0011) to 4 (0110): only bit 2 changes (0011 → 0110). In binary, three bits change (0011 → 0100).

## See Also

- [[binary|Binary]] — the standard encoding Gray code improves upon for sequential use
- [[semester-03/SECR1013-digital-logic/gray-code-ensures-only-one-bit-changes-between-values|Gray Code Ensures Only One Bit Changes Between Consecutive Values]] — source note

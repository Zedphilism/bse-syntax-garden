---
title: "Complement (1's and 2's)"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# Complement (1's and 2's)

In the context of networking, the **1's complement** of a binary number is obtained by flipping every bit (0→1, 1→0); the Internet checksum algorithm uses 1's complement addition to detect transmission errors, because adding a value to its 1's complement gives all 1s.

## Explanation

**1's complement of a number:** flip every bit. Example: 1's complement of `1011 0101` = `0100 1010`.

**1's complement arithmetic:** when two numbers are added and there is a carry out of the most significant bit, that carry is wrapped around and added back to the least significant bit (end-around carry). This is different from normal binary addition (2's complement), where a carry out is simply discarded.

**Why 1's complement for the Internet checksum:**
- The property `X + ~X = 1111...1111` (all 1s) is the key. The checksum is the 1's complement of the sum of all data words. When the receiver adds all data words and the checksum, the result is all 1s if no errors occurred.
- 1's complement addition is byte-order independent — the same checksum is produced whether the data is processed big-endian or little-endian, making it universal across different CPU architectures.

**2's complement** (used in signed integer arithmetic on CPUs) is different: the 2's complement of X is `~X + 1`. It handles negative numbers in CPU arithmetic and is not used in Internet checksums.

**In exam context:** "take the complement" or "1's complement" in checksum questions means flip all bits. The sum + complement should = 0xFFFF (all 1s). If any bit is 0 in this result, the data is corrupted.

## Key Points

- 1's complement: flip every bit of the number (0↔1)
- Property: X + ~X = 0xFFFF (all 1s) in 1's complement arithmetic
- End-around carry: carry out of MSB wraps back to LSB
- Internet checksum uses 1's complement sum + complement of that sum
- 2's complement: used in CPU integer arithmetic; = ~X + 1; different from 1's complement
- Byte-order independence: why 1's complement is chosen for the Internet checksum

## Example

1's complement of `1101 0110 1001 1010` (16-bit):
Flip every bit: `0010 1001 0110 0101`

Verify: add original + complement using 1's complement arithmetic:
```
  1101 0110 1001 1010
+ 0010 1001 0110 0101
= 1111 1111 1111 1111  ✓ (all 1s — correct)
```

> [!recall] In 1's complement arithmetic, what is the end-around carry rule, and why does it matter for the Internet checksum?

## See Also

- [[checksum-process|Checksum Process]]
- [[checksum-exam-style|Checksum: Exam-Style Worked Example]]
- [[rfc-768|RFC 768 — UDP Specification]]

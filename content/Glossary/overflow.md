---
title: "Overflow Occurs When an Arithmetic Result Exceeds the Range of the Fixed Bit Width"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# Overflow Occurs When an Arithmetic Result Exceeds the Range of the Fixed Bit Width

Arithmetic overflow is the error condition in which the true result of an addition or subtraction cannot be represented in the available number of bits, producing a silently wrong value rather than an error signal in most hardware.

## Explanation

Fixed-width integer arithmetic wraps around modulo 2ⁿ. For unsigned n-bit numbers, overflow happens when the result exceeds 2ⁿ−1 and the carry-out of the MSB is lost. For signed two's complement numbers, overflow happens when adding two positives yields a negative result, or adding two negatives yields a positive — detectable by checking whether the carry into the MSB differs from the carry out of the MSB.

Overflow is silent in most CPUs: the result register holds the wrapped value with no exception. Programs must explicitly check the overflow flag in the status register (or use language-level overflow detection). Unchecked overflow has caused notable real-world failures — the Ariane 5 rocket explosion in 1996 was caused by a 16-bit signed integer overflow.

## Key Points

- Unsigned overflow: carry-out from MSB = 1
- Signed overflow: carry-in to MSB ≠ carry-out from MSB
- Hardware sets the overflow (V) and carry (C) status flags
- Overflow ≠ carry; they are independent conditions for signed vs. unsigned

## Example

Signed 4-bit addition: +7 + +1
0111 + 0001 = 1000 = −8₁₀ (overflow — two positives produced a negative)

## See Also

- [[twos-complement|Two's Complement]] — the signed encoding in which overflow is most commonly discussed
- [[semester-03/SECR1013-digital-logic/binary-overflow-occurs-when-results-exceed-bit-capacity|Binary Overflow Occurs When a Result Exceeds the Fixed Bit-Width Range]] — source note

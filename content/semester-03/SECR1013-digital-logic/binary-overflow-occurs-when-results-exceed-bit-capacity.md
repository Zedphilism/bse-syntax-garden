---
title: "Binary Overflow Occurs When a Result Exceeds the Fixed Bit-Width Range"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic, supplemental, thomas-floyd]
---

# Binary Overflow Occurs When a Result Exceeds the Fixed Bit-Width Range

Overflow is a silent error that occurs when an arithmetic operation produces a result that cannot be represented in the fixed number of bits available, causing the stored value to be wrong.

## Explanation

Every fixed-width integer type has a bounded range. When an operation exceeds that range, the hardware wraps the value around rather than reporting an error (unless overflow detection is explicitly implemented). The result stored is mathematically incorrect even though no exception is raised.

For **unsigned** arithmetic, overflow is indicated by a carry out of the most significant bit. The result wraps from the maximum value back to zero.

For **signed** two's complement arithmetic, the rule is different: overflow occurs when the true mathematical result has a different sign than what the bit-width allows. The reliable detection rule is: overflow occurs if and only if both operands have the same sign but the result has the opposite sign. Equivalently, a carry into the sign bit that differs from the carry out of the sign bit signals overflow.

Overflow is a critical concern in embedded systems, cryptographic code, and any application with tight resource constraints, because no exception is thrown — the wrong answer silently propagates.

## Key Points

- Unsigned overflow: carry out of MSB; result wraps to zero
- Signed overflow: two positives → negative result, or two negatives → positive result
- Detection: carry-into-MSB ≠ carry-out-of-MSB
- Hardware CPU flags: Carry flag (unsigned), Overflow flag (signed)

## Example

8-bit signed overflow:

127 + 1:
  0111 1111
+ 0000 0001
-----------
  1000 0000 = −128 (not +128 — overflow!)

Two large negatives:
−128 + (−1):
  1000 0000
+ 1111 1111
-----------
1 0111 1111 = +127 (not −129 — overflow!)

## See Also

- [[twos-complement-enables-subtraction-using-addition|Two's Complement Arithmetic]] — the context in which signed overflow arises
- [[unsigned-binary-integers-represent-only-non-negative-values|Unsigned Binary]] — simpler overflow (carry-out only)

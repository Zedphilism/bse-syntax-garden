---
title: "One's Complement Negates a Number by Inverting Every Bit"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# One's Complement Negates a Number by Inverting Every Bit

In one's complement representation, a negative number is obtained by flipping every bit of the corresponding positive value.

## Explanation

One's complement improves on sign-magnitude because the sign and magnitude are no longer stored separately — the MSB still acts as a sign indicator (0 = positive, 1 = negative), but the entire bit pattern changes rather than just one bit. Addition of a positive and its one's complement always yields all-ones, which is one reason for the name.

Unfortunately, one's complement still suffers from two representations of zero: all-zeros (+0) and all-ones (−0). This means arithmetic can produce −0 as a result, which requires end-around carry correction to normalise: after the main addition, any carry out of the MSB is added back into the LSB.

This extra step makes hardware more complex and is the main reason one's complement was superseded by two's complement, which has only one zero and needs no correction step.

## Key Points

- Negative = bitwise NOT (invert every bit)
- MSB = 0 → positive; MSB = 1 → negative
- Two zeros still exist (+0 = 0000…0, −0 = 1111…1)
- Range for n bits: −(2ⁿ⁻¹ − 1) to +(2ⁿ⁻¹ − 1)
- Addition requires end-around carry correction

## Example

8-bit one's complement:

+25 = 0001 1001
−25 = 1110 0110 (every bit flipped)

Check: 0001 1001 + 1110 0110 = 1111 1111 = −0 ✓

End-around carry example:
+5 + (−3):
0000 0101 + 1111 1100 = 1 0000 0001
Carry out → add 1 to result: 0000 0001 + 1 = 0000 0010 = 2 ✓

## See Also

- [[sign-magnitude-representation-separates-sign-and-value|Sign-Magnitude]] — predecessor with different negative encoding
- [[twos-complement-enables-subtraction-using-addition|Two's Complement]] — eliminates the double-zero problem

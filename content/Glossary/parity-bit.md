---
title: "A Parity Bit Is an Extra Bit Added to a Data Word to Enable Single-Bit Error Detection"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# A Parity Bit Is an Extra Bit Added to a Data Word to Enable Single-Bit Error Detection

A parity bit is an additional bit appended to a group of data bits to make the total count of 1s either even (even parity) or odd (odd parity), allowing a receiver to detect when a single bit has been flipped during transmission or storage.

## Explanation

The transmitter counts the 1s in the data word. Under even parity, it sets the parity bit so the total count of 1s (data + parity) is even; under odd parity, the total is made odd. The receiver counts the 1s in the received word including the parity bit. If the parity is wrong, at least one bit has been corrupted.

Parity can detect any odd number of errors (1, 3, 5 flipped bits) but cannot detect two simultaneous flips — two errors cancel out and parity appears correct. It also cannot identify which bit was corrupted, so it can detect but not correct errors. For correction, more sophisticated schemes (Hamming codes, CRC, Reed-Solomon) are needed.

## Example

Data: 1011001 (four 1s — even count)
Even parity bit: 0 (total 1s = 4, already even)
Transmitted: 1011001 **0**

Received: 1011**1**01 0 (bit 4 flipped → five 1s + parity 0 = five 1s total → odd → error detected)

## See Also

- [[ascii|ASCII]] — originally transmitted with a parity bit as the 8th bit
- [[semester-03/SECR1013-digital-logic/parity-bit-detects-errors-using-even-or-odd-counts|Parity Bit Detects Single-Bit Errors by Enforcing an Even or Odd Count]] — source note

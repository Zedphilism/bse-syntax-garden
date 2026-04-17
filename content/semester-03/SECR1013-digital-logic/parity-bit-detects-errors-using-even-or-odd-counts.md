---
title: "Parity Bit Detects Single-Bit Errors by Enforcing an Even or Odd Count"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# Parity Bit Detects Single-Bit Errors by Enforcing an Even or Odd Count

A parity bit is an extra bit appended to binary data to make the total count of 1s either always even (even parity) or always odd (odd parity), allowing single-bit transmission errors to be detected.

## Explanation

When data is transmitted or stored, individual bits can flip due to noise. Parity checking provides a low-cost sanity check. Before sending, the transmitter counts the number of 1s in the data and appends a parity bit that makes the total conform to the agreed rule (even or odd). On receipt, the receiver counts the 1s again. A mismatch signals that at least one bit changed.

The limitation is that parity can only detect an odd number of flipped bits. Two simultaneous flips cancel each other out and go undetected. Parity also cannot locate which bit is wrong — it can only flag that something changed.

Despite its limitations, parity is widely used in RAM modules and simple serial protocols (UART) because the overhead is minimal (one bit per byte) and single-bit errors are by far the most common failure mode.

## Key Points

- Even parity: parity bit makes total 1s even
- Odd parity: parity bit makes total 1s odd
- Detects odd-count bit errors; cannot detect even-count errors
- Cannot identify which bit is wrong (detection only, not correction)

## Example

Data: 1010011 (contains four 1s)

Even parity: four 1s is already even → parity bit = **0** → transmitted: 0**1010011**
Odd parity: four 1s is even, need odd → parity bit = **1** → transmitted: 1**1010011**

Receiver gets 11010111 (one bit flipped):
Count 1s = 5 (odd). Expected even → error detected.

## See Also

- [[gray-code-ensures-only-one-bit-changes-between-values|Gray Code]] — prevents errors rather than detecting them
- [[ascii-encodes-characters-as-binary-values|ASCII Encoding]] — historically transmitted with a parity bit

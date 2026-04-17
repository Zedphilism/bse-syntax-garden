---
title: "NOR Is a Universal Gate That Outputs HIGH Only When All Inputs Are LOW"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# NOR Is a Universal Gate That Outputs HIGH Only When All Inputs Are LOW

A NOR gate is the complement of OR: it outputs HIGH only when every input is LOW. Like NAND, NOR is a universal gate — any logic function can be constructed from NOR gates alone.

## Explanation

NOR is OR followed by NOT. Its expression is F = (A+B)'. The inversion collapses the OR table so that the only row that was 0 (all inputs 0) becomes the only row that is 1, and all other rows become 0.

NOR's universality gives designers the same flexibility as NAND: a complete digital system can be implemented with a single gate type, reducing parts count and simplifying manufacture. NOR-based designs appear in older microprocessors and in CMOS standard-cell libraries.

Control systems often exploit NOR's behavior for "all clear" detection — the output goes HIGH only when no input signal is active, signalling that all monitored conditions are inactive.

## Key Points

- F = (A+B)' = NOR(A, B)
- Output = 1 only when ALL inputs = 0
- Output = 0 whenever ANY input = 1
- Universal gate: every logic function can be built from NOR alone
- Symbol: OR shape with an output bubble

## Example

2-input NOR truth table:

| A | B | F = (A+B)' |
|---|---|------------|
| 0 | 0 |     1      |
| 0 | 1 |     0      |
| 1 | 0 |     0      |
| 1 | 1 |     0      |

NOT from NOR: connect both inputs together → F = (A+A)' = A'

## See Also

- [[or-gate-outputs-high-when-any-input-is-high|OR Gate]] — NOR is OR inverted
- [[nand-gate-is-a-universal-gate-built-from-and-and-not|NAND Gate]] — the other universal gate
- [[demorgans-theorems-transform-between-and-or-forms|DeMorgan's Theorems]] — (A+B)' = A'·B' links NOR to NAND

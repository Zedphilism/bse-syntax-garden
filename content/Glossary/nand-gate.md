---
title: "NAND Gate Is a Universal Gate That Outputs LOW Only When All Inputs Are HIGH"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# NAND Gate Is a Universal Gate That Outputs LOW Only When All Inputs Are HIGH

The NAND gate computes the complement of AND — its output is 1 for every input combination except all-1s — and is functionally complete, meaning any Boolean function can be implemented using only NAND gates.

## Explanation

F = (A · B)'. The only case where NAND outputs LOW (0) is when every input is simultaneously HIGH. For all other combinations, output is HIGH. This is the complement of AND's truth table.

NAND is called a universal gate because it alone can implement NOT, AND, OR, and therefore any logic circuit. A single NAND with both inputs tied together acts as a NOT. NAND-NAND combinations implement AND and OR. This is not merely theoretical: NAND gates are the dominant primitive in CMOS fabrication because the CMOS NAND cell is smaller and faster than other gate types. The "NAND flash" memory technology is named after its NAND gate string architecture.

## Example

| A | B | F = (A·B)' |
|---|---|-----------|
| 0 | 0 |     1     |
| 0 | 1 |     1     |
| 1 | 0 |     1     |
| 1 | 1 |     0     |

NOT using NAND: connect A to both inputs → F = (A·A)' = A'

## See Also

- [[and-gate|AND Gate]] — NAND is AND inverted
- [[nor-gate|NOR Gate]] — the other universal gate (NOR-based)
- [[demorgans-theorem|DeMorgan's Theorem]] — connects NAND to NOR logic
- [[semester-03/SECR1013-digital-logic/nand-gate-is-a-universal-gate-built-from-and-and-not|NAND Is a Universal Gate]] — source note

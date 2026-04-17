---
title: "NOR Gate Is a Universal Gate That Outputs HIGH Only When All Inputs Are LOW"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# NOR Gate Is a Universal Gate That Outputs HIGH Only When All Inputs Are LOW

The NOR gate computes the complement of OR — its output is 1 only when every input is 0 — and is functionally complete, meaning any Boolean function can be built entirely from NOR gates.

## Explanation

F = (A + B)'. The only case where NOR outputs HIGH is when all inputs are simultaneously LOW. Any HIGH input forces the output LOW. Like NAND, NOR is universal: a NOR with both inputs tied together acts as a NOT; NOR-NOR combinations implement OR and AND.

NOR gate arrays were the dominant logic technology in the 1960s (early NASA guidance computers used NOR-only designs). Today, NOR flash memory uses NOR-based cell arrays for fast random-access reads, in contrast to NAND flash which optimises for sequential access.

## Example

| A | B | F = (A+B)' |
|---|---|-----------|
| 0 | 0 |     1     |
| 0 | 1 |     0     |
| 1 | 0 |     0     |
| 1 | 1 |     0     |

All-clear detector: a NOR gate outputs HIGH only when all n input lines are LOW — useful for detecting that all error flags are cleared.

## See Also

- [[or-gate|OR Gate]] — NOR is OR inverted
- [[nand-gate|NAND Gate]] — the other universal gate
- [[demorgans-theorem|DeMorgan's Theorem]] — links NOR and NAND equivalences
- [[semester-03/SECR1013-digital-logic/nor-gate-is-a-universal-gate-built-from-or-and-not|NOR Is a Universal Gate]] — source note

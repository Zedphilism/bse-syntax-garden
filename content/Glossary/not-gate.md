---
title: "NOT Gate Inverts Its Single Binary Input to the Opposite Logic Level"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# NOT Gate Inverts Its Single Binary Input to the Opposite Logic Level

The NOT gate (inverter) is the simplest logic gate — a single-input, single-output device that outputs the logical complement of its input: LOW becomes HIGH and HIGH becomes LOW.

## Explanation

F = A'. If A = 0, F = 1. If A = 1, F = 0. Applying NOT twice returns the original value: (A')' = A. This double-complement cancellation is used in simplifying logic expressions.

The NOT gate is drawn with a triangle (amplifier symbol) followed by a bubble (inversion circle) at the output. The bubble convention carries over to other gates: a bubble on an input or output of any gate symbol indicates logical inversion at that point. In CMOS, the NOT gate (inverter) is the single most fundamental cell — two transistors — and is used inside every other gate type.

## Example

| A | F = A' |
|---|--------|
| 0 |   1    |
| 1 |   0    |

Converting between active-high and active-low: connect an active-high output through a NOT gate to produce an active-low signal for a downstream component that expects active-low.

## See Also

- [[logic-gate|Logic Gate]] — general concept
- [[nand-gate|NAND Gate]] — AND + NOT
- [[boolean-algebra|Boolean Algebra]] — NOT is the complement operator (')
- [[semester-03/SECR1013-digital-logic/not-gate-inverts-the-input-logic-level|NOT Gate Inverts Its Single Input to the Opposite Logic Level]] — source note

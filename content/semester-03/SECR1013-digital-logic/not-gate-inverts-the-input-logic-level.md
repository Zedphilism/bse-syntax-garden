---
title: "NOT Gate Inverts Its Single Input to the Opposite Logic Level"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# NOT Gate Inverts Its Single Input to the Opposite Logic Level

A NOT gate (inverter) produces the logical complement of its input: a HIGH input yields a LOW output, and a LOW input yields a HIGH output.

## Explanation

The NOT gate is the simplest logic gate — one input, one output, and a single rule: flip it. In Boolean notation the complement of A is written A' (or Ā or ¬A). The NOT operation is fundamental because many logic functions require both a variable and its complement.

Inverters appear everywhere in circuit design: inside NAND and NOR gates (which are AND/OR followed by NOT), in flip-flop feedback paths, and as explicit inverters when a signal needs to be active-low. Without NOT, it would be impossible to implement many Boolean expressions.

The symbol for a NOT gate is a triangle (buffer shape) with a small bubble on the output. The bubble symbol means "inversion" and appears on many other gate symbols (NAND, NOR, XNOR) wherever complementing occurs.

## Key Points

- Single input, single output
- F = A' (complement of A)
- Output is always opposite to input
- Symbol: triangle + output bubble

## Example

Truth table:

| A | F = A' |
|---|--------|
| 0 |    1   |
| 1 |    0   |

Double inversion cancels: (A')' = A

## See Also

- [[nand-gate-is-a-universal-gate-built-from-and-and-not|NAND Gate]] — AND + NOT combined
- [[nor-gate-is-a-universal-gate-built-from-or-and-not|NOR Gate]] — OR + NOT combined
- [[active-high-vs-active-low|Active-High vs Active-Low]] — inversion is key to active-low signaling

---
title: "Logic Gates Are the Hardware Implementation of Boolean Operations"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# Logic Gates Are the Hardware Implementation of Boolean Operations

A logic gate is an electronic circuit that takes one or more binary inputs and produces a single binary output determined by a Boolean operation.

## Explanation

Logic gates are the fundamental building blocks of all digital systems. Each gate implements exactly one Boolean function — AND, OR, NOT, NAND, NOR, XOR, or XNOR — and its output is fully determined by its current inputs. There is no memory or history involved.

Every gate is described by three equivalent representations that must be understood together:
1. **Symbol** — the standardised graphical shape used in circuit diagrams
2. **Boolean expression** — the algebraic formula (e.g. F = A · B for AND)
3. **Truth table** — the complete input/output mapping for all possible input combinations

These representations are interchangeable. Given any one, the other two can be derived. This interchangeability is what makes logic design predictable and verifiable.

Physical gates operate on voltage levels: LOW (~0 V) maps to logic 0 and HIGH (~Vcc) maps to logic 1. Complex digital systems — from multiplexers to entire CPUs — are built by connecting gates in larger networks.

## Key Points

- Inputs and outputs are binary (0 = LOW, 1 = HIGH)
- Each gate implements exactly one Boolean function
- Three equivalent representations: symbol, Boolean expression, truth table
- Output depends only on current inputs (no memory)

## Example

2-input AND gate:

| A | B | F = A·B |
|---|---|---------|
| 0 | 0 |    0    |
| 0 | 1 |    0    |
| 1 | 0 |    0    |
| 1 | 1 |    1    |

Symbol: D-shaped body with a flat left edge; inputs on left, output on right.

## See Also

- [[truth-tables-enumerate-all-possible-input-output-combinations|Truth Tables]] — full behavioral specification of any gate
- [[and-gate-outputs-high-only-when-all-inputs-are-high|AND Gate]] — first specific gate
- [[binary-digits-and-logic-levels|Binary Digits Map to Voltage Levels]] — physical basis of 0 and 1

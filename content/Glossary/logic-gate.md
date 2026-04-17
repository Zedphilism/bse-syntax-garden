---
title: "A Logic Gate Is a Circuit That Implements a Single Boolean Operation on Binary Inputs"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# A Logic Gate Is a Circuit That Implements a Single Boolean Operation on Binary Inputs

A logic gate is the fundamental hardware building block of digital circuits — a physical device, typically built from CMOS transistors, that takes one or more binary inputs and produces a single binary output according to a fixed Boolean function.

## Explanation

Every computation that a digital system performs is ultimately reducible to the operations of a small set of gate types: AND, OR, NOT, NAND, NOR, XOR, and XNOR. Gates are combined into larger circuits to implement arithmetic, memory, control logic, and communication protocols.

A gate is described by three equivalent representations: its circuit symbol (a standard shape with inputs on the left and output on the right), its Boolean expression (e.g., F = A·B for AND), and its truth table (an exhaustive list of every input combination and the resulting output). All three representations carry the same information.

## Example

AND gate: output is HIGH only when all inputs are HIGH.
2-input AND: F = A · B
| A | B | F |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

## See Also

- [[truth-table|Truth Table]] — the universal tool for specifying gate behavior
- [[boolean-algebra|Boolean Algebra]] — the math that governs gate combinations
- [[nand-gate|NAND Gate]] — the universal gate from which any circuit can be built
- [[semester-03/SECR1013-digital-logic/logic-gates-implement-boolean-operations-using-binary-inputs|Logic Gates Are the Hardware Implementation of Boolean Operations]] — source note

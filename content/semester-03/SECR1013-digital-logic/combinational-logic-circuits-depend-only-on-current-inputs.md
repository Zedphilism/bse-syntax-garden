---
title: "Combinational Logic Output Depends Solely on Current Inputs"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# Combinational Logic Output Depends Solely on Current Inputs

A combinational logic circuit produces an output that is fully determined by its present inputs, with no memory of past states.

## Explanation

In combinational logic, there is a direct, time-independent mapping from inputs to outputs. The same input combination always produces the same output. There is no internal state, no clock, and no feedback — the circuit is purely reactive.

This behavior is described entirely by a Boolean expression or, equivalently, a truth table. Any time inputs change, the output immediately updates to the new value (after propagation delay). Because there is no storage, these circuits cannot count, hold data, or remember previous values.

Combinational circuits include: adders, subtractors, multiplexers, decoders, encoders, and comparators. They are the "logic engine" of digital systems. Sequential circuits — flip-flops, counters, registers — add memory on top of combinational logic.

Understanding the combinational/sequential boundary is fundamental to digital design: a circuit that needs to remember something needs sequential logic; a circuit that just transforms inputs needs only combinational logic.

## Key Points

- Output depends only on current inputs, not history
- No clock, no memory, no feedback paths
- Described by a Boolean expression or truth table
- Examples: adders, multiplexers, decoders, comparators

## Example

Circuit: F = A·(B+C)

If A=1, B=0, C=1 → F = 1·(0+1) = 1·1 = 1
If A=0, B=1, C=1 → F = 0·(1+1) = 0·1 = 0

Change A back to 1 → output immediately returns to 1. No previous state retained.

## See Also

- [[logic-circuits-implement-boolean-expressions-physically|Logic Circuits Implement Boolean Expressions]] — how to build combinational circuits from gates
- [[boolean-expression-to-truth-table-maps-all-inputs-to-output|Boolean Expression to Truth Table]] — how to fully specify combinational behavior
- [[propagation-delay-limits-digital-circuit-speed|Propagation Delay]] — the only timing consideration in combinational circuits

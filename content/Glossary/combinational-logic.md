---
title: "Combinational Logic Produces Outputs That Depend Only on the Current Input Values"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# Combinational Logic Produces Outputs That Depend Only on the Current Input Values

Combinational logic is a class of digital circuit in which the output at any moment is a direct function of the inputs at that same moment — there is no memory, no clock, and no feedback path that would make the output depend on past states.

## Explanation

A combinational circuit is fully described by its Boolean expression or truth table. Given a set of inputs, the output is immediately determined (after propagation delay). Change the inputs, and the output updates accordingly with no "memory" of what the inputs were before.

This contrasts with sequential logic, where flip-flops store state and outputs depend on both current inputs and the stored history. Adders, multiplexers, decoders, encoders, comparators, and priority encoders are all combinational circuits. Registers, counters, and state machines are sequential.

The absence of feedback is the defining structural feature: in a combinational circuit, no gate output feeds — directly or indirectly — back to its own input. Feedback creates memory and, if combinational, causes race conditions and unstable oscillation.

## Example

A 2-to-1 multiplexer: output Y = A·S' + B·S
- When S = 0: Y = A (select input A)
- When S = 1: Y = B (select input B)
No clock. No stored state. Output is purely a function of current A, B, S values.

## See Also

- [[logic-gate|Logic Gate]] — the building block of combinational circuits
- [[propagation-delay|Propagation Delay]] — the time delay inherent in combinational paths
- [[boolean-algebra|Boolean Algebra]] — the tool for designing and simplifying combinational logic
- [[semester-03/SECR1013-digital-logic/combinational-logic-circuits-depend-only-on-current-inputs|Combinational Logic Output Depends Solely on Current Inputs]] — source note

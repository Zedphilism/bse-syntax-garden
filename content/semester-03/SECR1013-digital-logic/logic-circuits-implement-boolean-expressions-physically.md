---
title: "Logic Circuits Implement Boolean Expressions as Interconnected Gates"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# Logic Circuits Implement Boolean Expressions as Interconnected Gates

A logic circuit is the physical realisation of a Boolean expression, where each operation in the expression corresponds to one or more gates connected in sequence.

## Explanation

Moving between a Boolean expression and a logic circuit is a bidirectional process. **Expression → circuit:** parse the expression from inputs outward, placing a gate for each operation and feeding the results forward until the final output is reached. **Circuit → expression:** trace inputs through each gate from left to right, writing the intermediate expression at each gate's output until the final wire gives the complete expression.

The structure of the expression directly dictates the structure of the circuit. Parentheses in the expression correspond to gates that must be resolved before their output can be used as an input to the next gate. Factored forms (fewer terms, more levels) map to deeper but narrower circuits; sum-of-products forms map to two-level (AND then OR) circuits.

This relationship is why Boolean simplification matters: a simpler expression always translates to a cheaper circuit, and the method of simplification (algebraic or Karnaugh map) is a direct tool for hardware cost reduction.

## Key Points

- Each Boolean operation → one gate in the circuit
- Parentheses → gates whose output feeds the next gate
- Circuit → expression: read gate outputs left-to-right
- Simplified expression → fewer gates in silicon

## Example

Expression: Z = A·(B + C·D)

Step 1: C·D → AND gate on C, D → call output X
Step 2: B + X → OR gate on B, X → call output Y
Step 3: A·Y → AND gate on A, Y → output Z

Circuit: 2 AND gates + 1 OR gate, 3 levels deep.

## See Also

- [[boolean-algebra-simplifies-logic-expressions-without-changing-output|Boolean Algebra]] — simplifies the expression before building the circuit
- [[boolean-expression-to-truth-table-maps-all-inputs-to-output|Boolean Expression to Truth Table]] — verifies circuit correctness
- [[combinational-logic-circuits-depend-only-on-current-inputs|Combinational Logic]] — the class of circuits this applies to

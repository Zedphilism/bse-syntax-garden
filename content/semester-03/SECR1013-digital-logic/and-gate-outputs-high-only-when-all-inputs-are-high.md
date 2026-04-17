---
title: "AND Gate Outputs HIGH Only When Every Input Is HIGH"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# AND Gate Outputs HIGH Only When Every Input Is HIGH

An AND gate performs logical multiplication and outputs 1 only when all of its inputs are 1 simultaneously.

## Explanation

The AND gate implements the Boolean AND operation (written A·B or AB). It models the "all conditions must be true" requirement. A single LOW input is enough to force the output LOW, regardless of all other inputs. Only when every input is HIGH does the output become HIGH.

This behavior makes AND gates natural for enabling signals: a common circuit pattern connects a data signal to one input and a control signal to another. The output passes the data only when the control is HIGH, otherwise it is blocked.

AND gates generalise to any number of inputs. A 3-input AND requires all three to be 1; an n-input AND requires all n to be 1. The Boolean expression scales as F = A·B·C·…·N.

## Key Points

- Boolean expression: F = A·B (also written A AND B or A∩B)
- Output = 1 only if ALL inputs = 1
- Output = 0 if ANY input = 0
- Symbol: D-shape with flat left side

## Example

2-input AND truth table:

| A | B | F = A·B |
|---|---|---------|
| 0 | 0 |    0    |
| 0 | 1 |    0    |
| 1 | 0 |    0    |
| 1 | 1 |    1    |

## See Also

- [[or-gate-outputs-high-when-any-input-is-high|OR Gate]] — any input being HIGH suffices
- [[nand-gate-is-a-universal-gate-built-from-and-and-not|NAND Gate]] — AND followed by NOT; a universal gate
- [[logic-gates-implement-boolean-operations-using-binary-inputs|Logic Gates Overview]] — context for all gates

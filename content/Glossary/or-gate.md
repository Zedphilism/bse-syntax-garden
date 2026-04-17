---
title: "OR Gate Outputs HIGH When at Least One of Its Inputs Is HIGH"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# OR Gate Outputs HIGH When at Least One of Its Inputs Is HIGH

The OR gate is a logic gate that implements Boolean addition: its output is 1 if any one or more of its inputs is 1, making it the hardware equivalent of logical disjunction ("at least one must be true").

## Explanation

For a 2-input OR gate, F = A + B. The output is LOW only when all inputs are simultaneously LOW. A single HIGH input is sufficient to drive the output HIGH. Note that in Boolean logic, 1 + 1 = 1 (not 2) — the OR gate saturates at 1.

OR gates appear in address decoding, interrupt logic (if any interrupt source fires, assert the CPU interrupt line), and flag aggregation (if any error flag is set, assert the error output).

## Example

| A | B | F = A+B |
|---|---|---------|
| 0 | 0 |    0    |
| 0 | 1 |    1    |
| 1 | 0 |    1    |
| 1 | 1 |    1    |

## See Also

- [[logic-gate|Logic Gate]] — general concept
- [[nor-gate|NOR Gate]] — OR followed by NOT; a universal gate
- [[xor-gate|XOR Gate]] — exclusive OR: HIGH when inputs differ
- [[semester-03/SECR1013-digital-logic/or-gate-outputs-high-when-any-input-is-high|OR Gate Outputs HIGH When At Least One Input Is HIGH]] — source note

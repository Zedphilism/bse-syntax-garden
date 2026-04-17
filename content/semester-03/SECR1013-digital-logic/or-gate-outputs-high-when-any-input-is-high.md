---
title: "OR Gate Outputs HIGH When At Least One Input Is HIGH"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# OR Gate Outputs HIGH When At Least One Input Is HIGH

An OR gate performs logical addition and outputs 1 whenever one or more of its inputs is 1; the only way to get a 0 output is if every input is 0.

## Explanation

The OR gate implements the Boolean OR operation (written A+B). It models the "any condition is sufficient" requirement — in contrast to AND's "all conditions required." Because only one input needs to be HIGH, OR is often used in alarm and trigger circuits where multiple independent sources can activate the same response.

In Boolean algebra, 1+1=1 (not 2), because the result is still just "true." This is a key difference from arithmetic addition and often trips up beginners.

Like AND, OR generalises to any number of inputs. A 3-input OR outputs 1 if A=1, or B=1, or C=1 (or any combination); it outputs 0 only when A=B=C=0.

## Key Points

- Boolean expression: F = A+B (also written A OR B or A∪B)
- Output = 0 only if ALL inputs = 0
- Output = 1 if ANY input = 1
- Symbol: curved body pointing right, curved back on the input side

## Example

2-input OR truth table:

| A | B | F = A+B |
|---|---|---------|
| 0 | 0 |    0    |
| 0 | 1 |    1    |
| 1 | 0 |    1    |
| 1 | 1 |    1    |

## See Also

- [[and-gate-outputs-high-only-when-all-inputs-are-high|AND Gate]] — requires all inputs HIGH
- [[nor-gate-is-a-universal-gate-built-from-or-and-not|NOR Gate]] — OR followed by NOT; a universal gate
- [[xor-gate-outputs-high-when-inputs-are-different|XOR Gate]] — OR that excludes the all-ones case

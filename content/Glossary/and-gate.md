---
title: "AND Gate Outputs HIGH Only When Every One of Its Inputs Is HIGH"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# AND Gate Outputs HIGH Only When Every One of Its Inputs Is HIGH

The AND gate is a logic gate that implements Boolean multiplication: its output is 1 if and only if all inputs are simultaneously 1, making it the hardware equivalent of logical conjunction ("all must be true").

## Explanation

For a 2-input AND gate, F = A · B. The output is HIGH only when both A and B are HIGH. A single LOW input forces the output LOW regardless of all other inputs. This "all must agree" behavior makes AND gates natural enable controls and address decoders in digital circuits.

In CMOS, an AND gate is typically implemented as a NAND gate followed by a NOT gate. NAND is the primitive because it requires fewer transistors per gate than AND in CMOS technology.

## Example

| A | B | F = A·B |
|---|---|---------|
| 0 | 0 |    0    |
| 0 | 1 |    0    |
| 1 | 0 |    0    |
| 1 | 1 |    1    |

Use case: a 2-input AND gates a data signal (A) through only when a chip-select enable (B) is HIGH.

## See Also

- [[logic-gate|Logic Gate]] — general concept
- [[nand-gate|NAND Gate]] — AND followed by NOT; the CMOS primitive
- [[boolean-algebra|Boolean Algebra]] — AND is the multiplication operator (·)
- [[semester-03/SECR1013-digital-logic/and-gate-outputs-high-only-when-all-inputs-are-high|AND Gate Outputs HIGH Only When Every Input Is HIGH]] — source note

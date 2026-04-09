---
title: "Binary Digits Map to Physical Voltage Levels in Digital Circuits"
date: 2026-04-09
tags: [semester-3, secr1013, digital-logic]
---

# Binary Digits Map to Physical Voltage Levels in Digital Circuits

A bit (binary digit) is the fundamental unit of digital information, and it exists physically as a voltage that the circuit classifies as either HIGH (logic 1) or LOW (logic 0).

## Explanation

Binary digits are abstract symbols — 0 and 1. In real hardware they are implemented as voltage ranges. A 3.3 V CMOS system might define anything above 2.0 V as HIGH and anything below 0.8 V as LOW. The gap between those thresholds is the **invalid region**: a voltage in this range is undefined and indicates a transitioning signal or a fault. No circuit should sample a signal while it sits in the invalid region, as the result will be unpredictable.

The distinction between a logic level and a numeric value is important. HIGH and LOW represent a *state*, not the integer 1 or 0 in an arithmetic sense. A single bit cannot be added or subtracted on its own — groups of bits are combined to form numbers. At the hardware level, HIGH simply means "this condition is true" and LOW means "this condition is false."

This voltage-to-logic mapping is the foundational agreement that makes the entire digital stack possible. Transistors, gates, CPUs, and software all depend on this shared definition of what each voltage range means.

## Key Points

- HIGH voltage → logic 1 (asserted / true)
- LOW voltage → logic 0 (deasserted / false)
- Invalid region: voltages between the LOW ceiling and HIGH floor — undefined, must not be sampled
- Thresholds differ by logic family: 5 V TTL, 3.3 V CMOS, 1.8 V CMOS

## Example

For a 5 V TTL logic family:

```
Voltage range       Logic level
──────────────────────────────────
≥ 2.0 V             HIGH (logic 1)
0.8 V – 2.0 V       INVALID
≤ 0.8 V             LOW  (logic 0)
```

A GPIO pin reading 4.2 V is logic 1. A pin reading 0.3 V is logic 0. A pin reading 1.2 V during a transition must not be sampled — doing so introduces an unpredictable error into the circuit.

## See Also

- [[analog-vs-digital|Analog vs Digital Signals]] — explains why discrete voltage levels are used rather than a continuous range
- [[active-high-vs-active-low|Active-High and Active-Low Logic Polarity]] — defines which voltage level counts as the asserted (true) state for a given signal

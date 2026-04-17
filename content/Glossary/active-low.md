---
title: "Active-Low Means a Signal Performs Its Function When at Logic 0 (LOW)"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# Active-Low Means a Signal Performs Its Function When at Logic 0 (LOW)

Active-low is a signal polarity convention in which the signal is "asserted" when its voltage is at logic LOW (0); the device or function it controls is inactive when the signal is HIGH.

## Explanation

Choosing active-low for a signal means the circuit only activates when the wire is explicitly driven to 0. If the wire breaks or floats (which typically pulls toward the supply voltage, i.e., HIGH), the signal reads as de-asserted — the safe, inactive state. This fail-safe property makes active-low the standard for reset, chip-select, interrupt, and enable pins on ICs.

Active-low signals are identified by a bar over the name (RESET̄), a leading slash (/RESET or /CS), or a bubble on the gate pin in schematic symbols. They are also more resistant to capacitive noise injection, which tends to inject spurious HIGH levels rather than pulling signals to LOW.

## Example

A processor's /RESET pin: pulling the pin to LOW resets the CPU. When the system boots normally, /RESET is held HIGH by a pull-up resistor, keeping the CPU running. A power glitch might cause the pin to briefly float, but the pull-up ensures it stays HIGH (safe). Only an intentional LOW resets the chip.

## See Also

- [[active-high|Active-High]] — the opposite convention
- [[semester-03/SECR1013-digital-logic/active-low-signals-provide-fail-safe-behavior|Active-Low Signals Provide Fail-Safe Behavior]] — source note

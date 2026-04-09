---
title: "Active-High and Active-Low Define the Polarity of a Logic Signal"
date: 2026-04-09
tags: [semester-3, secr1013, digital-logic]
---

# Active-High and Active-Low Define the Polarity of a Logic Signal

Active-high and active-low are two conventions that determine which voltage level a digital system treats as logically asserted (true or ON).

## Explanation

In an active-high system, a HIGH voltage — typically 3.3 V or 5 V — means the signal is asserted, while LOW (0 V) means it is inactive. This is the intuitive default: higher voltage equals "on". In an active-low system the polarity is inverted: a LOW voltage asserts the signal as true, and HIGH means the signal is inactive. Recognising which convention a circuit uses is essential when reading datasheets and connecting components, because mismatching the two produces silent logic errors that are extremely hard to trace.

Active-low convention is deliberately chosen for safety-critical and control signals. Its key advantage is fail-safe behaviour: if the wire carrying an active-low signal is cut or disconnected, the line floats HIGH, which the system reads as "inactive" — it does not falsely trigger. This is why chip-select, reset, and emergency-stop lines almost always use active-low logic. The convention is indicated in schematics by an overbar on the signal name (e.g., CS̄, RESET̄) or a leading tilde (~CS, ~RESET).

Understanding the distinction matters beyond just reading schematics. When writing firmware, toggling a GPIO LOW to turn something ON (active-low LED or peripheral) is a common source of confusion for beginners who assume HIGH always means ON.

## Key Points

- Active-High: HIGH = asserted (ON / TRUE), LOW = deasserted (OFF / FALSE)
- Active-Low: LOW = asserted (ON / TRUE), HIGH = deasserted (OFF / FALSE)
- Active-low signals are denoted with an overbar (RESET̄) or tilde (~RESET)
- Typical active-low pins: chip-select (CS̄), output-enable (OĒ), write-enable (WĒ), reset (RESET̄)

## Example

**Chip-select pin (active-low):**

```
CS̄ = 0 V (LOW)   → chip is selected and responding to the bus
CS̄ = 3.3 V (HIGH) → chip is deselected and ignores all bus traffic
```

**LED on a GPIO pin (active-high vs active-low wiring):**

```
Active-High (LED anode → GPIO, cathode → GND):
  GPIO = HIGH (3.3 V) → current flows → LED ON
  GPIO = LOW  (0 V)   → no current   → LED OFF

Active-Low (LED anode → VCC, cathode → GPIO):
  GPIO = LOW  (0 V)   → current flows → LED ON
  GPIO = HIGH (3.3 V) → no current   → LED OFF
```

The wiring determines the polarity, not the software alone — which is why you must check the schematic before writing the firmware.

## See Also

- [[binary-digits-and-logic-levels|Binary Digits and Logic Levels]] — establishes the voltage thresholds that produce a valid HIGH or LOW reading
- [[analog-vs-digital|Analog vs Digital Signals]] — explains why discrete voltage levels are used at all, rather than a continuous range

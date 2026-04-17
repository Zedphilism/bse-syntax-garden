---
title: "Active-High and Active-Low Define the Polarity of a Logic Signal"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# Active-High and Active-Low Define the Polarity of a Logic Signal

Active-high and active-low describe whether a signal is asserted (true/enabled) when its voltage is HIGH or when it is LOW — the same physical voltage can carry the opposite logical meaning depending on polarity convention.

## Explanation

In an active-high signal, a HIGH voltage means the signal is asserted: the condition is true, the device is enabled, the action is triggered. This matches the intuitive convention where HIGH equals ON. Many enable and clock pins on basic logic chips operate this way.

In an active-low signal, a LOW voltage means the signal is asserted. When the pin is driven to 0 V the device activates; when it is HIGH the device is idle. Active-low signals are marked with an overline in schematics (e.g., EN with a bar, or ~EN in text) to indicate that the logic is inverted relative to voltage.

Active-low designs are preferred in safety-critical and industrial systems because they are inherently fail-safe. If a wire breaks or a connection is lost, a pull-up resistor holds the input HIGH, keeping the device inactive. In an active-high design a broken wire could leave a pin floating and accidentally trigger the device. Active-low signals are also more noise-immune because pulling a line to ground is electrically more stable than driving it to supply voltage.

## Key Points

- Active-high: HIGH voltage = asserted (ON / enabled / true)
- Active-low: LOW voltage = asserted (ON / enabled / true)
- Active-low notation: overline or tilde prefix (~EN, ~RESET, ~CS)
- Active-low is preferred for fail-safe behavior, noise immunity, and default-off on power-up

## Example

An LED connected to a microcontroller output pin:

```
Active-HIGH wiring:
  MCU pin --[R]--[LED]-- GND
  Pin = HIGH (5V) -> current flows -> LED ON
  Pin = LOW  (0V) -> no current   -> LED OFF
  Wire breaks: pin floats -> LED may flicker (unsafe)

Active-LOW wiring:
  VCC --[R]--[LED]--[MCU pin]
  Pin = LOW  (0V) -> current flows -> LED ON
  Pin = HIGH (5V) -> no current   -> LED OFF
  Wire breaks: pull-up holds HIGH -> LED stays OFF (safe)
```

## See Also

- [[binary-digits-and-logic-levels|Binary Digits Map to Physical Voltage Levels in Digital Circuits]] — the voltage levels that HIGH and LOW refer to

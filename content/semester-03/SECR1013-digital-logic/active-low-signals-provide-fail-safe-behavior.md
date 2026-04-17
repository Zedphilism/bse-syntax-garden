---
title: "Active-Low Signals Provide Fail-Safe Behavior Because Faults Default to Safe State"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic, supplemental, thomas-floyd]
---

# Active-Low Signals Provide Fail-Safe Behavior Because Faults Default to Safe State

Active-low signaling designates LOW voltage (logic 0) as the "active" or "asserted" state, which causes circuits to default to a safe condition when a wire breaks or a fault occurs.

## Explanation

In digital circuits, a signal is either active-high (does its job when HIGH) or active-low (does its job when LOW). The choice matters for reliability.

When a signal wire is disconnected or damaged, it tends to float or be pulled to the supply voltage (HIGH). In an active-high system, a broken wire fakes a "signal present" condition — a dangerous fault. In an active-low system, a broken wire fakes a "signal absent" condition — the safer default.

Additionally, LOW signals are less susceptible to noise. Capacitive coupling and electromagnetic interference are more likely to inject spurious HIGH states than spurious LOW states (it is harder to pull a signal below ground than to inject noise above the threshold). This means active-low circuits are more robust in noisy industrial environments.

Active-low signals are identified by a bar over the signal name (e.g., /RESET, ENABLE) or by a bubble on the gate pin in circuit diagrams.

## Key Points

- Active-low: signal is "asserted" when LOW (logic 0)
- Fault default: broken wire → floats HIGH → signal de-asserted (safe)
- More noise-immune than active-high in practice
- Notation: overbar (RESET̄), forward slash (/RESET), or bubble on gate symbol

## Example

Emergency stop circuit (active-low):

Normal operation: /STOP = HIGH → machine runs
Button pressed: /STOP = LOW → machine halts
Wire cut: /STOP floats HIGH → machine continues (but design forces HIGH → machine keeps running)

A better design using active-low: system starts only when /ENABLE = LOW (button held). Wire cut → /ENABLE = HIGH → system de-asserts → stops. Machine stops on failure. ✓

## See Also

- [[active-high-vs-active-low|Active-High vs Active-Low Polarity]] — overview of both conventions
- [[not-gate-inverts-the-input-logic-level|NOT Gate]] — used to convert between active-high and active-low signals

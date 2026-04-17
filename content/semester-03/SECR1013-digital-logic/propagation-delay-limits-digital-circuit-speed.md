---
title: "Propagation Delay Is the Time a Signal Takes to Travel Through a Gate"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic, supplemental, thomas-floyd]
---

# Propagation Delay Is the Time a Signal Takes to Travel Through a Gate

Propagation delay is the time elapsed between a change in a logic gate's input and the corresponding change appearing at its output; it limits how fast a digital circuit can operate.

## Explanation

No physical gate switches instantaneously. When an input transitions, the output takes a small but real amount of time — typically 1 to 50 nanoseconds for common logic families — to settle to its new stable value. This delay is called propagation delay (tpd).

In a combinational circuit, signals must pass through multiple gate levels. The delays accumulate along each signal path. The **critical path** is the longest delay path from any input to any output. The circuit cannot produce a valid output until the critical path has settled, so the critical path delay sets the minimum clock period and thus the maximum operating frequency.

This matters in processor design: every architectural choice that reduces critical path length directly enables a faster clock rate. Techniques like pipelining break long paths into shorter stages, each fitting within one clock cycle.

Two versions of propagation delay are specified: tpLH (low-to-high transition) and tpHL (high-to-low transition). They are often unequal due to asymmetric transistor switching speeds.

## Key Points

- tpd = time from input change to stable output
- Measured in nanoseconds (ns) or picoseconds (ps)
- Delays accumulate through series gates
- Critical path = longest delay path = minimum clock period limit
- Maximum frequency = 1 / (critical path delay)

## Example

Circuit: Input → Gate A → Gate B → Gate C → Output

tpd(A) = 5 ns, tpd(B) = 7 ns, tpd(C) = 3 ns
Critical path delay = 5 + 7 + 3 = 15 ns
Maximum frequency = 1 / 15 ns ≈ 66.7 MHz

## See Also

- [[combinational-logic-circuits-depend-only-on-current-inputs|Combinational Logic]] — the circuit type where propagation delay accumulates
- [[digital-waveforms-and-signal-behavior|Digital Waveforms]] — timing diagrams visualise propagation delay effects

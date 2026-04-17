---
title: "Propagation Delay Is the Time a Signal Takes to Pass Through a Logic Gate"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# Propagation Delay Is the Time a Signal Takes to Pass Through a Logic Gate

Propagation delay (tpd) is the elapsed time between a change at a logic gate's input and the corresponding stable change appearing at its output, and it limits the maximum operating frequency of any digital circuit.

## Explanation

No physical gate switches instantaneously. Transistors take time to charge and discharge capacitive loads, so every gate introduces a small but real delay — typically 1 to 50 nanoseconds depending on the logic family, supply voltage, temperature, and load capacitance.

In a circuit where signals pass through multiple gate levels in sequence, delays accumulate. The critical path is the longest delay path from any primary input to any primary output. The minimum allowable clock period equals the critical path delay, so the maximum clock frequency equals 1 / (critical path delay). Reducing the critical path length is the primary goal of digital timing optimization.

Two propagation delay values are specified: tpLH (input changes from LOW to HIGH → output transition) and tpHL (input changes HIGH to LOW → output transition). They are often unequal due to asymmetric PMOS and NMOS transistor speeds in CMOS.

## Key Points

- tpd measured from 50% point of input transition to 50% point of output transition
- Delays accumulate in series; parallel paths don't add
- Critical path = longest cumulative delay path
- Max frequency = 1 / critical path delay

## Example

Input → Gate A (5 ns) → Gate B (7 ns) → Gate C (3 ns) → Output
Critical path = 15 ns → max frequency = 66.7 MHz

## See Also

- [[combinational-logic|Combinational Logic]] — the circuit type where propagation delay is the key timing constraint
- [[timing-diagram|Timing Diagram]] — visualises propagation delay as offset between signal traces
- [[semester-03/SECR1013-digital-logic/propagation-delay-limits-digital-circuit-speed|Propagation Delay Is the Time a Signal Takes to Travel Through a Gate]] — source note

---
title: "A Timing Diagram Shows How Multiple Digital Signals Change State Over Time"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# A Timing Diagram Shows How Multiple Digital Signals Change State Over Time

A timing diagram is a graphical representation that plots the HIGH/LOW state of one or more digital signals on a shared time axis, making it possible to see the exact relationships between signal transitions.

## Explanation

Each signal is drawn as a horizontal trace with vertical transitions (rising edge from LOW to HIGH, falling edge from HIGH to LOW). Multiple signals are stacked vertically with a shared time axis, so the reader can see which transition on one signal causes or follows a transition on another.

Timing diagrams are the primary tool for verifying circuit behavior, debugging race conditions, and specifying the required setup and hold times around clock edges. In digital design, they are as fundamental as waveform plots are in analog design. Logic analyzers capture real timing diagrams from hardware; simulation tools generate them from HDL models.

## Example

A clock (CLK) and a flip-flop output (Q): CLK toggles every 10 ns; Q transitions on the rising edge of CLK with a propagation delay of 3 ns. The timing diagram shows CLK rising, then Q rising 3 ns later — the delay is directly visible as a horizontal offset between the two traces.

## See Also

- [[duty-cycle|Duty Cycle]] — a parameter readable from a timing diagram
- [[propagation-delay|Propagation Delay]] — visualised as offset between signals in a diagram
- [[semester-03/SECR1013-digital-logic/timing-diagrams|Timing Diagrams Visualize How Multiple Signals Change Together]] — source note

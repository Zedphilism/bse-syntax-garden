---
title: "Digital Waveforms Describe Signal Transitions Between HIGH and LOW Over Time"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# Digital Waveforms Describe Signal Transitions Between HIGH and LOW Over Time

A digital waveform is the graphical representation of a binary signal over time, showing when it is HIGH, when it is LOW, and the edges where transitions between those states occur.

## Explanation

Unlike an analog waveform that varies smoothly, a digital waveform consists of flat segments at HIGH or LOW voltage connected by near-instantaneous transitions called edges. A rising edge marks the transition from LOW to HIGH; a falling edge marks the transition from HIGH to LOW. In real circuits edges are not perfectly vertical — they have a finite rise time and fall time — but in logic analysis they are treated as instantaneous.

Digital waveforms are classified as periodic or non-periodic. A periodic waveform repeats the same pattern indefinitely with a fixed cycle time called the period (T). The frequency (f) of the waveform is the number of complete cycles per second, measured in hertz, and is the reciprocal of the period: f = 1/T. Clock signals in digital systems are always periodic, providing a regular heartbeat that synchronizes all operations.

Non-periodic waveforms have no fixed repeating pattern. Data lines, address buses, and control signals are typically non-periodic — their HIGH/LOW pattern depends on the values being transmitted at any given moment.

## Key Points

- Rising edge: LOW to HIGH transition
- Falling edge: HIGH to LOW transition
- Period (T): time for one complete HIGH-LOW cycle, measured in seconds
- Frequency (f): cycles per second, f = 1/T, measured in hertz (Hz)
- Periodic waveform: repeating pattern (e.g., clock signals)
- Non-periodic waveform: irregular pattern (e.g., data lines)

## Example

A clock signal running at 1 kHz:

```
f = 1,000 Hz  ->  T = 1/1,000 = 0.001 s = 1 ms

HIGH --|  |  |  |  |  |  |
       |  |  |  |  |  |  |
LOW  --|  |  |  |  |  |  |
       0  1  2  3  4  5  6  (ms)

Each cycle: 1 ms total
Rising edges at: 0 ms, 2 ms, 4 ms ...
Falling edges at: 1 ms, 3 ms, 5 ms ...
```

A processor running at 3 GHz has T = 1 / 3,000,000,000 = 0.333 nanoseconds per clock cycle.

## See Also

- [[duty-cycle-concept|Duty Cycle Measures Signal ON Time as a Fraction of Its Period]] — describes the balance between HIGH and LOW time within one period
- [[timing-diagrams|Timing Diagrams Visualize How Multiple Signals Change Together Over Time]] — how waveforms for multiple signals are drawn together for analysis

---
title: "Digital Waveforms Describe Signal Transitions Between HIGH and LOW Over Time"
date: 2026-04-09
tags: [semester-3, secr1013, digital-logic]
---

# Digital Waveforms Describe Signal Transitions Between HIGH and LOW Over Time

A digital waveform is a graphical or mathematical representation of a single binary signal showing when it is HIGH, when it is LOW, and exactly when it transitions between those states.

## Explanation

Because digital circuits depend on timing — not just logic levels — engineers need a way to represent a signal as it changes over time. The digital waveform is that representation: a horizontal time axis with a signal that snaps between two voltage levels, producing a characteristic rectangular pulse shape.

Two key events define every waveform: the **rising edge**, where the signal transitions from LOW to HIGH, and the **falling edge**, where it transitions from HIGH to LOW. Much of digital circuit behavior is triggered by these edges rather than by the level itself — a flip-flop clocked on a rising edge, for example, only captures data at that precise moment.

Waveforms can be **periodic** (repeating at a fixed interval) or **non-periodic** (irregular). Clock signals are the most important periodic waveforms in digital systems — they synchronise all operations. A clock's **period (T)** is the time for one complete HIGH–LOW cycle, and its **frequency (f = 1/T)** describes how many cycles occur per second, measured in hertz. A 1 GHz processor clock completes one cycle every 1 nanosecond.

## Key Points

- Rising edge: LOW → HIGH transition
- Falling edge: HIGH → LOW transition
- Period (T): time for one complete cycle (seconds)
- Frequency (f): cycles per second; f = 1/T (hertz)
- Periodic waveform: repeats — e.g., clock signals
- Non-periodic waveform: irregular — e.g., data bus activity

## Example

A clock signal running at 100 Hz:

```
T = 1/100 = 10 ms per cycle

  HIGH |‾‾‾|   |‾‾‾|   |‾‾‾|
       |   |   |   |   |   |
  LOW  |   |___|   |___|   |___> time (ms)
       0   5   10  15  20
       ↑           ↑
    rising       rising
     edge         edge
```

Each rising edge occurs every 10 ms. A circuit clocked at this frequency can perform at most 100 operations per second.

## See Also

- [[duty-cycle-concept|Duty Cycle Measures Signal ON Time as a Fraction of Its Period]] — quantifies how long a waveform stays HIGH relative to its full period
- [[timing-diagrams|Timing Diagrams Visualize How Multiple Signals Change Together]] — uses waveforms for multiple signals simultaneously to show circuit interaction

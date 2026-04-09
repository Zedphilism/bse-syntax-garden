---
title: "Digital Signals Use Discrete Voltage Levels While Analog Signals Are Continuous"
date: 2026-04-09
tags: [semester-3, secr1013, digital-logic]
---

# Digital Signals Use Discrete Voltage Levels While Analog Signals Are Continuous

Analog and digital are two fundamentally different ways of representing information: analog encodes values as a continuous, infinitely variable quantity, while digital encodes them as one of a fixed set of discrete states.

## Explanation

An analog signal mirrors the real-world quantity it represents with no gaps — a temperature sensor produces a voltage that varies smoothly as temperature rises or falls, and any value within the range is valid. Sound waves, light intensity, and the output of a microphone are all analog by nature.

A digital signal is intentionally constrained to a small set of permitted voltage levels — in binary systems, just two: HIGH and LOW. Any voltage outside a valid band is treated as noise or a transition error. This discretisation makes digital signals far more resistant to noise: a signal that drifts slightly still registers as a clean HIGH or LOW, whereas an analog signal degrades the moment any interference is introduced.

The practical consequence is that digital data can be stored, copied, and transmitted without accumulating errors. Every copy of a digital value is identical to the original; every copy of an analog signal is slightly degraded. This is why audio, video, and communications infrastructure migrated from analog to digital over the course of the 20th century, and why computers process everything in binary rather than in continuous voltages.

## Key Points

- Analog: continuous range of values; any intermediate value is valid
- Digital: discrete levels only (HIGH = 1, LOW = 0 in binary systems)
- Digital is noise-resistant because small deviations are corrected back to the nearest valid level
- All real-world physical quantities are analog — conversion is required before digital processing

## Example

A microphone converts sound pressure into an analog voltage that varies continuously between 0 V and 5 V — any fractional value is meaningful. The same audio stored on a computer is digital: each sample is one of 65,536 possible values (16-bit audio), and voltages between those levels simply do not exist in the stored representation.

```
Analog waveform (smooth):
5V |   /\      /\
   |  /  \    /  \
   | /    \  /    \
0V |/      \/      \──> time

Digital approximation (stepped/quantised):
5V |  ████  ████
   | █    ██    ██
0V |              ──> time
```

The stepped digital version loses some fine detail, but it can be copied infinitely without any further degradation.

## See Also

- [[binary-digits-and-logic-levels|Binary Digits and Logic Levels]] — explains how HIGH and LOW are implemented as physical voltage thresholds
- [[analog-digital-conversion|ADC and DAC Convert Between Analog and Digital Domains]] — the process of moving between these two representations

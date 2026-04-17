---
title: "ADC Converts a Continuous Analog Signal to a Sequence of Digital Values"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# ADC Converts a Continuous Analog Signal to a Sequence of Digital Values

An Analog-to-Digital Converter (ADC) samples an analog voltage at regular intervals and converts each sample to a binary number, enabling analog real-world signals to be stored, processed, and transmitted by digital systems.

## Explanation

Conversion involves two steps. First, sampling: the continuous input is measured at discrete time intervals defined by the sampling rate (in Hz). Second, quantisation: each measured voltage is rounded to the nearest value that can be represented in n bits, producing a digital code from 0 to 2ⁿ−1. The Nyquist theorem governs the minimum sampling rate required to avoid aliasing.

Resolution is determined by bit depth. An 8-bit ADC divides the input range into 256 levels; a 16-bit ADC divides it into 65,536 levels. Higher bit depth reduces quantisation error (the difference between the true analog value and the nearest representable value).

## Key Points

- Sampling rate must be ≥ 2× signal bandwidth (Nyquist)
- Resolution = 1 / 2ⁿ of the full-scale range per bit of depth
- Quantisation error = difference between actual and nearest representable value

## Example

A microphone ADC at 44,100 Hz with 16-bit depth: samples the audio 44,100 times per second, quantising each to one of 65,536 voltage levels. This meets the Nyquist criterion for audio up to 22,050 Hz — beyond human hearing.

## See Also

- [[dac|DAC]] — the reverse process
- [[nyquist-theorem|Nyquist Theorem]] — governs ADC sampling rate
- [[semester-03/SECR1013-digital-logic/analog-digital-conversion|ADC and DAC Convert Signals Between Analog and Digital Domains]] — source note

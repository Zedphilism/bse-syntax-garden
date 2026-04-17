---
title: "DAC Converts a Sequence of Digital Values Back into a Continuous Analog Signal"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# DAC Converts a Sequence of Digital Values Back into a Continuous Analog Signal

A Digital-to-Analog Converter (DAC) takes a stream of binary numbers and produces a corresponding continuous voltage output, reconstructing the analog signal that was originally sampled and encoded by an ADC.

## Explanation

A DAC is the output side of the analog-digital conversion pipeline. For each binary input code, the DAC produces a voltage proportional to that code relative to a reference voltage. A low-pass reconstruction filter is typically applied after the DAC to smooth out the step-like output into a smooth waveform.

DAC resolution also depends on bit depth. An n-bit DAC produces 2ⁿ discrete output levels. The more bits, the finer the voltage steps, and the closer the reconstructed waveform matches the original analog signal.

## Example

Audio playback: a music file stores PCM samples (16-bit integers at 44,100 Hz). The DAC in a sound card or headphone amplifier converts each integer to a voltage, which drives a speaker. The reconstruction filter removes the staircase discontinuities between samples, producing a smooth audio waveform.

## See Also

- [[adc|ADC]] — the reverse process
- [[semester-03/SECR1013-digital-logic/analog-digital-conversion|ADC and DAC Convert Signals Between Analog and Digital Domains]] — source note

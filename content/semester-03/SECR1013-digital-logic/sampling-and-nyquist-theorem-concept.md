---
title: "Nyquist Theorem Sets the Minimum Sampling Rate to Avoid Aliasing"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# Nyquist Theorem Sets the Minimum Sampling Rate to Avoid Aliasing

The Nyquist theorem states that an analog signal can only be perfectly reconstructed from its digital samples if the sampling frequency is at least twice the highest frequency present in the original signal.

## Explanation

Sampling is the process of measuring an analog signal at discrete, evenly-spaced points in time to produce a sequence of numbers that an ADC can encode. The question of how often to sample is not arbitrary — sample too infrequently and the digital representation will be a distorted misrepresentation of the original.

The Nyquist theorem formalizes the minimum required rate: f_sample must be greater than or equal to 2 x f_max, where f_max is the highest frequency component in the signal. This minimum rate is called the Nyquist rate. The reasoning is geometric: to faithfully capture a sine wave, you need at least two samples per cycle — one near the peak and one near the trough. With fewer than two samples per cycle, the reconstructed waveform will appear to oscillate at a lower, incorrect frequency — a phenomenon called aliasing.

Aliasing is a form of distortion that cannot be corrected after the fact; it is permanently baked into the digital data. This is why audio systems always use an anti-aliasing low-pass filter before the ADC to remove any frequency components above the Nyquist limit before sampling occurs.

## Key Points

- Nyquist theorem: f_sample >= 2 x f_max
- Nyquist rate = 2 x f_max (the minimum acceptable sampling frequency)
- Aliasing: the distortion that occurs when sampling below the Nyquist rate — high frequencies appear as false lower frequencies
- Anti-aliasing filter: a low-pass filter applied before the ADC to remove frequencies above f_sample / 2
- Violating the Nyquist rate produces errors that cannot be recovered from the sampled data

## Example

Human hearing ranges from approximately 20 Hz to 20,000 Hz (20 kHz).

Applying the Nyquist theorem:

```
f_max    = 20,000 Hz
f_sample >= 2 x 20,000 = 40,000 Hz (40 kHz minimum)

CD audio standard: 44,100 Hz (44.1 kHz)
  -> 44,100 >= 40,000  -> satisfies Nyquist
  -> extra margin accounts for the anti-aliasing filter's roll-off

DVD audio: 48,000 Hz (48 kHz)
  -> larger margin for professional use
```

Aliasing example: if a 15 kHz tone is sampled at only 20 kHz (below the Nyquist rate of 30 kHz), the reconstructed signal will contain a false tone at 20,000 - 15,000 = 5 kHz — a completely incorrect frequency that was never in the original recording.

## See Also

- [[analog-digital-conversion|ADC and DAC Convert Signals Between Analog and Digital Domains]] — the sampling step where the Nyquist theorem applies
- [[analog-vs-digital|Digital Signals Use Discrete Voltage Levels While Analog Signals Are Continuous]] — why the original continuous signal needs to be sampled at all

---
title: "Nyquist Theorem States That Sampling Rate Must Be at Least Twice the Signal Bandwidth"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# Nyquist Theorem States That Sampling Rate Must Be at Least Twice the Signal Bandwidth

The Nyquist-Shannon sampling theorem proves that a band-limited analog signal can be perfectly reconstructed from its digital samples if and only if the sampling rate is greater than twice the highest frequency component in the signal.

## Explanation

If a signal contains frequencies up to f_max Hz, it must be sampled at a rate f_s > 2·f_max. This threshold — twice the signal bandwidth — is called the Nyquist rate. Sampling below the Nyquist rate causes aliasing: high-frequency components fold back and appear as false low-frequency components in the digital representation, corrupting the signal irreparably.

Before an ADC samples a signal, an anti-aliasing low-pass filter is applied to remove all frequency content above f_s / 2 (the Nyquist frequency). This is not optional — without it, out-of-band frequencies will be misrepresented as in-band content.

## Example

Audio CDs sample at 44,100 Hz. Human hearing extends to approximately 20,000 Hz. The Nyquist criterion requires f_s > 2 × 20,000 = 40,000 Hz. At 44,100 Hz, the margin is intentional: an anti-aliasing filter is applied at ~22,050 Hz before sampling to prevent aliasing.

## See Also

- [[adc|ADC]] — applies Nyquist theorem at the sampling stage
- [[semester-03/SECR1013-digital-logic/sampling-and-nyquist-theorem-concept|Nyquist Theorem Sets the Minimum Sampling Rate to Avoid Aliasing]] — source note

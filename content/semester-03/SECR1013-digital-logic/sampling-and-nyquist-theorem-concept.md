---
title: "Nyquist Theorem Sets the Minimum Sampling Rate to Avoid Aliasing"
date: 2026-04-09
tags: [semester-3, secr1013, digital-logic]
---

# Nyquist Theorem Sets the Minimum Sampling Rate to Avoid Aliasing

The Nyquist-Shannon sampling theorem states that an analog signal can be perfectly reconstructed from its digital samples only if the sampling frequency is at least twice the highest frequency present in the signal.

## Explanation

When an ADC samples an analog signal it takes discrete snapshots at regular intervals. If those snapshots are taken too infrequently, the samples no longer contain enough information to reconstruct the original signal — instead, the reconstructed waveform appears to be a different, lower-frequency signal. This distortion is called **aliasing**.

The theorem provides the exact boundary: the sampling frequency f_s must satisfy f_s ≥ 2 × f_max, where f_max is the highest frequency component in the signal. The value 2 × f_max is called the **Nyquist rate**. Sampling below this rate causes aliasing; sampling at or above it guarantees accurate reconstruction (assuming infinite resolution, which is an approximation in practice).

In real systems, a **low-pass anti-aliasing filter** is applied to the analog signal before it enters the ADC. This filter removes any frequency components above f_s / 2 (the Nyquist frequency) so the ADC never encounters frequencies that would alias. Without this filter, any high-frequency content that sneaks in would fold back into the digital representation and corrupt the signal.

## Key Points

- Nyquist theorem: f_s ≥ 2 × f_max (sampling rate must be at least twice the signal's highest frequency)
- Violating this causes aliasing — a false lower-frequency artefact in the output
- Nyquist frequency = f_s / 2 — the highest frequency the system can represent accurately
- Anti-aliasing filter removes components above the Nyquist frequency before sampling

## Example

Human hearing extends to approximately 20,000 Hz. To digitise audio without aliasing:

```
f_max = 20,000 Hz
Minimum sampling rate = 2 × 20,000 = 40,000 Hz

CD audio uses 44,100 Hz — safely above the Nyquist rate, with headroom for the anti-aliasing filter roll-off.
```

Aliasing example: a 1,500 Hz signal sampled at only 1,000 Hz (below Nyquist):

```
f_s = 1,000 Hz → Nyquist frequency = 500 Hz
Alias frequency = |1,500 − 1,000| = 500 Hz

The ADC produces a 500 Hz output even though the input was 1,500 Hz.
The original signal is unrecoverable from those samples.
```

## See Also

- [[analog-digital-conversion|ADC and DAC Convert Between Analog and Digital Domains]] — the conversion pipeline in which sampling is one step

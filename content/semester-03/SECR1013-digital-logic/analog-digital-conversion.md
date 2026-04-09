---
title: "ADC and DAC Convert Signals Between Analog and Digital Domains"
date: 2026-04-09
tags: [semester-3, secr1013, digital-logic]
---

# ADC and DAC Convert Signals Between Analog and Digital Domains

An Analog-to-Digital Converter (ADC) translates a continuous real-world signal into a sequence of binary numbers, and a Digital-to-Analog Converter (DAC) performs the reverse — turning binary data back into a continuous signal.

## Explanation

The physical world is analog: temperature, pressure, sound, and light all vary continuously. Digital processors cannot work with continuous values — they need discrete numbers. The ADC bridges this gap through three sequential steps: **sampling** (measuring the analog signal at regular intervals), **quantisation** (rounding each measurement to the nearest representable level), and **encoding** (expressing that level as a binary number). Each step introduces a small, unavoidable loss of accuracy. Quantisation error — the rounding that occurs when a continuous value is mapped to the nearest discrete level — is the most significant source of this loss.

The DAC performs the inverse: it takes a stream of binary values and produces a stepped analog output, which is then smoothed by a low-pass filter to reconstruct a continuous waveform. The quality of the reconstruction depends on the resolution (how many bits are used per sample) and the sampling rate (how frequently samples are taken — governed by the Nyquist theorem).

ADC and DAC circuits are everywhere: a microphone → ADC chain captures speech for a voice call; a DAC → speaker chain plays it back. Medical sensors (ECG, pulse oximeter), motor control systems, and digital radios all depend on this conversion pipeline.

## Key Points

- ADC steps: Sampling → Quantisation → Encoding
- DAC steps: Decoding → Reconstruction (stepped output) → Filtering (smooth output)
- Resolution: number of bits per sample — more bits = finer steps = less quantisation error
- 8-bit ADC: 256 levels; 12-bit ADC: 4,096 levels; 16-bit ADC: 65,536 levels

## Example

A CD audio system:

```
Recording side (ADC):
  Microphone → analog voltage (continuous)
      ↓ sampled at 44,100 times/second
      ↓ quantised to 16 bits (65,536 levels)
      ↓ stored as binary on disc

Playback side (DAC):
  Binary data from disc
      ↓ converted to stepped voltage
      ↓ low-pass filter smooths the steps
      ↓ amplifier → speaker → sound
```

The 44,100 Hz sampling rate satisfies the Nyquist requirement for audio up to 22,050 Hz — above human hearing range — so the reconstructed sound is perceptually perfect.

## See Also

- [[analog-vs-digital|Analog vs Digital Signals]] — explains why conversion is necessary in the first place
- [[sampling-and-nyquist-theorem-concept|Nyquist Theorem Sets the Minimum Sampling Rate]] — defines the minimum sampling frequency required to avoid aliasing during ADC

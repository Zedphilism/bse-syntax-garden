---
title: "ADC and DAC Convert Signals Between Analog and Digital Domains"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# ADC and DAC Convert Signals Between Analog and Digital Domains

An Analog-to-Digital Converter (ADC) translates a continuous real-world signal into discrete binary values a processor can work with; a Digital-to-Analog Converter (DAC) performs the reverse, reconstructing an analog output from stored digital data.

## Explanation

The physical world produces analog signals — sound, light, temperature, pressure — that vary continuously. Digital processors cannot operate directly on these signals; they require discrete numeric values. The ADC bridges this gap through three sequential steps: sampling (measuring the signal at regular time intervals), quantization (rounding each measurement to the nearest representable digital level), and encoding (expressing that level as a binary number).

Quantization introduces an unavoidable error called quantization noise. The more bits an ADC uses to represent each sample — its resolution — the smaller each quantization step and the more accurate the digital representation. An 8-bit ADC divides its input range into 256 levels; a 16-bit ADC divides it into 65,536 levels. Choosing resolution is always a trade-off between accuracy and the storage and processing cost of larger numbers.

The DAC performs the inverse process. Given a stream of binary values, it produces a voltage proportional to each value. The output is a staircase approximation of the original analog signal, which is then smoothed by a low-pass filter to reconstruct a continuous waveform. Without a DAC, audio stored as digital data could never drive a speaker, and a digitally processed control signal could never actuate a motor.

## Key Points

- ADC steps in order: Sampling -> Quantization -> Encoding
- DAC steps: binary input -> proportional voltage -> low-pass filter smoothing
- Resolution (bit depth): n bits = 2^n quantization levels
- Quantization noise = rounding error inherent in representing a continuous value with finite bits
- Higher bit depth = finer steps = more faithful reproduction, at the cost of more data

## Example

Recording and playing back voice on a phone:

```
[Microphone]
  continuous analog voltage waveform
        |
        v
[ADC] -- 8,000 samples/sec, 16-bit resolution
        |  data rate = 8,000 x 16 = 128,000 bits/sec
        v
[Storage] -- .wav file on device
        |
        v
[DAC] -- each 16-bit value converted to proportional voltage
        |
        v
[Speaker]
  reconstructed analog waveform
```

A 16-bit ADC has 2^16 = 65,536 quantization levels. Each step covers (V_max - V_min) / 65,536 of the input range. Any voltage between two steps is rounded to the nearest one, which is the source of quantization noise.

## See Also

- [[analog-vs-digital|Digital Signals Use Discrete Voltage Levels While Analog Signals Are Continuous]] — why conversion between domains is necessary
- [[sampling-and-nyquist-theorem-concept|Nyquist Theorem Sets the Minimum Sampling Rate to Avoid Aliasing]] — how to choose the correct sampling rate for the ADC

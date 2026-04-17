---
title: "Digital Signal Represents Information Using Only Two Discrete Voltage Levels"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# Digital Signal Represents Information Using Only Two Discrete Voltage Levels

A digital signal is an electrical signal constrained to two valid states — HIGH and LOW — corresponding to logic 1 and logic 0, making it immune to moderate noise because any voltage within the valid range is snapped to the nearest defined level.

## Explanation

Instead of tracking every tiny voltage variation, a digital circuit defines two voltage bands: values above the HIGH threshold are read as logic 1; values below the LOW threshold are read as logic 0. Any noise that does not push a signal across a threshold has no effect on the received value. This noise immunity is the fundamental reason digital systems are preferred for computation and communication.

The trade-off is resolution. A digital signal carries only one bit of information per sample. To represent analog information digitally, it must be sampled and quantised — a process that introduces quantisation error, but one that can be made arbitrarily small by increasing bit depth.

## Key Points

- Two valid states: HIGH (logic 1) and LOW (logic 0)
- Noise that stays within valid margins is ignored
- Resolution is determined by bit depth, not signal continuity

## Example

USB audio uses 16- or 24-bit samples at 44,100 or 96,000 Hz. Each sample is a digital value; the DAC reconstructs the analog waveform at playback. Unlike analog tape, copying a digital file is lossless because only 0s and 1s are transferred.

## See Also

- [[analog-signal|Analog Signal]] — the continuous counterpart
- [[bit|Bit]] — the unit of digital information
- [[dac|DAC]] — converts digital values back to analog
- [[semester-03/SECR1013-digital-logic/analog-vs-digital|Digital Signals Use Discrete Voltage Levels]] — source note

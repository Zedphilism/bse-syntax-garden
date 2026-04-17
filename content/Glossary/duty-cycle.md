---
title: "Duty Cycle Is the Fraction of a Period During Which a Signal Is in Its Active State"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# Duty Cycle Is the Fraction of a Period During Which a Signal Is in Its Active State

Duty cycle is the ratio of the time a periodic digital signal is HIGH to its total period, expressed as a percentage; it describes how "on" a signal is relative to its repetition rate.

## Explanation

For a repeating digital waveform with period T, if the signal is HIGH for time t_HIGH, then duty cycle = (t_HIGH / T) × 100%. A 50% duty cycle means the signal is HIGH for exactly half the period — a perfect square wave. A 25% duty cycle means the signal is on for one quarter of each cycle.

Duty cycle is a critical parameter in pulse-width modulation (PWM), where a fixed-frequency signal's duty cycle is varied to control average power delivered to a load — motor speed, LED brightness, speaker volume — without converting between analog and digital domains.

## Example

A PWM signal controlling an LED at 1 kHz:
- 100% duty cycle → always HIGH → LED fully on
- 50% duty cycle → HIGH for 0.5 ms, LOW for 0.5 ms → LED at half brightness (visually)
- 10% duty cycle → HIGH for 0.1 ms → LED at 10% brightness

## See Also

- [[timing-diagram|Timing Diagram]] — diagrams where duty cycle is visible
- [[semester-03/SECR1013-digital-logic/duty-cycle-concept|Duty Cycle Measures Signal ON Time as a Fraction of Its Period]] — source note

---
title: "Duty Cycle Measures Signal ON Time as a Fraction of Its Period"
date: 2026-04-09
tags: [semester-3, secr1013, digital-logic]
---

# Duty Cycle Measures Signal ON Time as a Fraction of Its Period

The duty cycle of a periodic digital signal is the percentage of each cycle that the signal spends in the HIGH (ON) state.

## Explanation

Every periodic waveform has a total cycle time called its period. Within that period, the signal is HIGH for some portion and LOW for the remainder. The duty cycle captures this ratio as a percentage: a signal that is HIGH for exactly half its period has a 50% duty cycle; one that is HIGH for three-quarters has a 75% duty cycle.

Duty cycle matters because in many applications the proportion of time a signal is asserted — not merely its frequency — determines the physical effect. In Pulse Width Modulation (PWM), a technique used to control power delivery, the duty cycle directly determines how much energy reaches the load. Increasing the duty cycle of a PWM signal to a motor increases its average voltage and therefore its speed, without changing the clock frequency. The same principle applies to LED dimming, switching power supplies, and servo motor control.

A 50% duty cycle is called a **square wave** and is the standard ideal for clock signals, where equal HIGH and LOW times are assumed unless otherwise specified.

## Key Points

- Formula: Duty Cycle (%) = (t_ON / T) × 100
- t_ON = time signal spends HIGH in one cycle
- T = total period of the signal
- 50% duty cycle → equal ON and OFF time (square wave)
- High duty cycle → mostly ON; low duty cycle → mostly OFF

## Example

A PWM signal with a period of T = 20 ms is used to control an LED's brightness.

```
Duty cycle = 25%:
t_ON = 0.25 × 20 ms = 5 ms
t_OFF = 15 ms

  HIGH |‾‾|              |‾‾|
  LOW  |  |______________|  |________> time
       0  5              20 25 ms
       ↑↑
    ON  OFF

Duty cycle = 75%:
t_ON = 0.75 × 20 ms = 15 ms
t_OFF = 5 ms

  HIGH |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|    |‾‾‾‾‾‾
  LOW  |               |____|
       0               15   20 ms
```

At 25% duty cycle the LED appears dim (25% of maximum brightness on average). At 75% it appears much brighter, even though the voltage and frequency are unchanged.

## See Also

- [[digital-waveforms-and-signal-behavior|Digital Waveforms and Signal Behavior]] — defines period, frequency, and the rising/falling edges that duty cycle is calculated from

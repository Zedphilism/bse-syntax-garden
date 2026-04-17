---
title: "Duty Cycle Measures Signal ON Time as a Fraction of Its Period"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# Duty Cycle Measures Signal ON Time as a Fraction of Its Period

Duty cycle is the ratio of the time a digital signal spends in the HIGH (ON) state to the total period of one cycle, expressed as a percentage.

## Explanation

For any periodic digital signal, the period T is divided into ON time (t_on, when the signal is HIGH) and OFF time (t_off, when the signal is LOW). The duty cycle quantifies what fraction of each cycle the signal is active. A 50% duty cycle means the signal is HIGH for exactly half the period and LOW for the other half — a perfectly balanced square wave. A 25% duty cycle means the signal is HIGH for only one quarter of each cycle.

Duty cycle is a critical parameter in Pulse Width Modulation (PWM), a technique used to control the average power delivered to a load without changing the voltage or frequency. A motor driven by a PWM signal at 25% duty cycle receives, on average, only 25% of the supply voltage — allowing precise speed control by simply adjusting the duty cycle. The same principle controls LED brightness, heater elements, and switching power supplies.

It is important to note that duty cycle describes the shape of the waveform, not its frequency. Two signals can share the same frequency but have completely different duty cycles, and vice versa.

## Key Points

- Formula: Duty Cycle (%) = (t_on / T) x 100
- t_on = HIGH time, T = total period, t_off = T - t_on
- 50% duty cycle = equal HIGH and LOW time (square wave)
- Duty cycle controls average power in PWM applications without changing frequency
- Duty cycle and frequency are independent parameters of a waveform

## Example

A PWM signal with period T = 1,000 ms and a 25% duty cycle:

```
t_on  = 25% of 1,000 ms = 250 ms
t_off = 75% of 1,000 ms = 750 ms

HIGH --|____      |____
       |    |     |    |
LOW  --|    |_____|    |_____
       0   250   1000  1250   (ms)
```

Comparing duty cycles at the same frequency (T = 1,000 ms):

| Duty Cycle | t_on  | t_off | Typical use         |
|------------|-------|-------|---------------------|
| 25%        | 250ms | 750ms | Low power / dim LED |
| 50%        | 500ms | 500ms | Half power / medium |
| 75%        | 750ms | 250ms | High power / bright |

## See Also

- [[digital-waveforms-and-signal-behavior|Digital Waveforms Describe Signal Transitions Between HIGH and LOW Over Time]] — the waveform properties that duty cycle describes

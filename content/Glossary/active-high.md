---
title: "Active-High Means a Signal Performs Its Function When at Logic 1 (HIGH)"
date: 2026-04-18
tags: [glossary, digital-logic]
---

# Active-High Means a Signal Performs Its Function When at Logic 1 (HIGH)

Active-high is a signal polarity convention in which the signal is considered "asserted" or "enabled" when its voltage is at logic HIGH (1); the device or function it controls is inactive when the signal is LOW.

## Explanation

Signal polarity is a design choice. An active-high ENABLE pin, for instance, enables the circuit when driven HIGH and disables it when driven LOW. This is intuitive — 1 means "on" — but active-high systems have a reliability drawback: a broken wire that floats HIGH unintentionally asserts the signal, potentially enabling a circuit that should be off.

Active-high is the more common convention for data and control signals in microcontroller GPIO, where the logic matches programmer intuition (writing `1` to a pin turns it on). It contrasts with active-low, which is preferred for safety-critical controls.

## Example

An LED connected to a microcontroller GPIO pin with active-high logic: writing `1` to the register asserts the pin HIGH → current flows → LED illuminates. Writing `0` de-asserts the pin → LED off.

## See Also

- [[active-low|Active-Low]] — the opposite convention, used for safety-critical signals
- [[semester-03/SECR1013-digital-logic/active-high-vs-active-low|Active-High and Active-Low Define Signal Polarity]] — source note

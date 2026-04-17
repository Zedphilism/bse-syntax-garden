---
title: "Glossary"
date: 2026-04-18
tags: [hub, glossary]
---

# Glossary

Universal definitions that span all semesters and subjects.

> Add entries as atomic notes: one term per file, linked back here.

## Signals and Encoding

- [[analog-signal|Analog Signal]] — continuously varying physical quantity with infinite possible values
- [[digital-signal|Digital Signal]] — information represented using only two discrete voltage levels
- [[bit|Bit]] — smallest unit of digital information; one binary choice (0 or 1)
- [[active-high|Active-High]] — signal asserted when at logic HIGH (1)
- [[active-low|Active-Low]] — signal asserted when at logic LOW (0); fail-safe on open-circuit faults
- [[duty-cycle|Duty Cycle]] — fraction of a period during which a signal is in its active state
- [[timing-diagram|Timing Diagram]] — shows how multiple digital signals change state over time
- [[adc|ADC]] — converts a continuous analog signal to a sequence of digital values
- [[dac|DAC]] — converts a sequence of digital values back into a continuous analog signal
- [[nyquist-theorem|Nyquist Theorem]] — sampling rate must be at least twice the signal bandwidth

## Number Systems

- [[radix|Radix]] — number of unique digits in a positional number system (the base)
- [[binary|Binary]] — base-2 number system used natively by all digital hardware
- [[hexadecimal|Hexadecimal]] — base-16; compact shorthand for binary using groups of 4 bits
- [[octal|Octal]] — base-8; compact shorthand for binary using groups of 3 bits

## Data Codes

- [[bcd|BCD]] — encodes each decimal digit as a separate 4-bit binary group
- [[gray-code|Gray Code]] — binary encoding where consecutive values differ by exactly one bit
- [[parity-bit|Parity Bit]] — extra bit added to enable single-bit error detection
- [[ascii|ASCII]] — 7-bit standard assigning a unique binary code to each printable character

## Signed Arithmetic

- [[twos-complement|Two's Complement]] — standard binary encoding for signed integers in all modern hardware
- [[overflow|Overflow]] — arithmetic result exceeds the range of the fixed bit width

## Logic Gates

- [[logic-gate|Logic Gate]] — circuit implementing a single Boolean operation on binary inputs
- [[truth-table|Truth Table]] — lists every possible input combination and the output each produces
- [[and-gate|AND Gate]] — outputs HIGH only when every input is HIGH
- [[or-gate|OR Gate]] — outputs HIGH when at least one input is HIGH
- [[not-gate|NOT Gate]] — inverts its single input to the opposite logic level
- [[nand-gate|NAND Gate]] — universal gate; LOW only when all inputs are HIGH
- [[nor-gate|NOR Gate]] — universal gate; HIGH only when all inputs are LOW
- [[xor-gate|XOR Gate]] — outputs HIGH only when inputs differ
- [[xnor-gate|XNOR Gate]] — outputs HIGH only when inputs are equal

## Boolean Logic and Circuit Analysis

- [[boolean-algebra|Boolean Algebra]] — mathematical framework for analyzing and simplifying logic circuits
- [[demorgans-theorem|DeMorgan's Theorem]] — converts complement of AND/OR to equivalent gate form
- [[combinational-logic|Combinational Logic]] — outputs depend only on current inputs; no memory or clock
- [[propagation-delay|Propagation Delay]] — time a signal takes to pass through a logic gate
- [[critical-path|Critical Path]] — longest propagation delay path; sets maximum operating frequency

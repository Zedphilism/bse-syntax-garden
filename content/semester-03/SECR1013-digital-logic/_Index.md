---
title: "SECR1013 — Digital Logic"
date: 2026-04-18
tags: [hub, semester-3, digital-logic, secr1013]
---

# SECR1013 — Digital Logic

Topics: Number systems, data codes, arithmetic, logic gates, Boolean algebra, combinational circuits, sequential circuits, Verilog HDL.

## Notes

### Signals and Representation
- [[analog-vs-digital|Digital Signals Use Discrete Voltage Levels While Analog Signals Are Continuous]]
- [[binary-digits-and-logic-levels|Binary Digits Map to Physical Voltage Levels in Digital Circuits]]
- [[active-high-vs-active-low|Active-High and Active-Low Define the Polarity of a Logic Signal]]

### Waveforms and Timing
- [[digital-waveforms-and-signal-behavior|Digital Waveforms Describe Signal Transitions Between HIGH and LOW Over Time]]
- [[duty-cycle-concept|Duty Cycle Measures Signal ON Time as a Fraction of Its Period]]
- [[timing-diagrams|Timing Diagrams Visualize How Multiple Signals Change Together Over Time]]

### Conversion
- [[analog-digital-conversion|ADC and DAC Convert Signals Between Analog and Digital Domains]]
- [[sampling-and-nyquist-theorem-concept|Nyquist Theorem Sets the Minimum Sampling Rate to Avoid Aliasing]]

### Number Systems (Module 2a)
- [[positional-number-systems-assign-value-based-on-place|Positional Number Systems Assign Value Based on Digit Place]]
- [[binary-representation-uses-base-two-with-weighted-bits|Binary Representation Uses Base Two with Weighted Bit Positions]]
- [[number-system-conversion-uses-division-and-multiplication|Decimal to Any Base Conversion Uses Division and Multiplication]]
- [[binary-to-hexadecimal-conversion-uses-grouping-of-four-bits|Binary to Hexadecimal Conversion Uses Grouping of Four Bits]]
- [[binary-to-octal-conversion-uses-grouping-of-three-bits|Binary to Octal Conversion Uses Grouping of Three Bits]]

### Data Codes (Module 2b)
- [[binary-coded-decimal-represents-digits-separately-in-binary|BCD Encodes Each Decimal Digit Separately as Four Binary Bits]]
- [[gray-code-ensures-only-one-bit-changes-between-values|Gray Code Ensures Only One Bit Changes Between Consecutive Values]]
- [[parity-bit-detects-errors-using-even-or-odd-counts|Parity Bit Detects Single-Bit Errors by Enforcing an Even or Odd Count]]
- [[ascii-encodes-characters-as-binary-values|ASCII Assigns a Unique 7-Bit Binary Code to Each Printable Character]]

### Arithmetic and Signed Numbers (Module 2c)
- [[unsigned-binary-integers-represent-only-non-negative-values|Unsigned Binary Uses All Bits for Magnitude with No Sign]]
- [[sign-magnitude-representation-separates-sign-and-value|Sign-Magnitude Representation Uses the MSB as a Sign Flag]]
- [[ones-complement-inverts-bits-to-represent-negative-values|One's Complement Negates a Number by Inverting Every Bit]]
- [[twos-complement-enables-subtraction-using-addition|Two's Complement Lets Hardware Subtract by Adding a Negative]]
- [[binary-overflow-occurs-when-results-exceed-bit-capacity|Binary Overflow Occurs When a Result Exceeds the Fixed Bit-Width Range]]

### Logic Gates (Module 3)
- [[logic-gates-implement-boolean-operations-using-binary-inputs|Logic Gates Are the Hardware Implementation of Boolean Operations]]
- [[truth-tables-enumerate-all-possible-input-output-combinations|Truth Tables Enumerate Every Input Combination and Its Output]]
- [[and-gate-outputs-high-only-when-all-inputs-are-high|AND Gate Outputs HIGH Only When Every Input Is HIGH]]
- [[or-gate-outputs-high-when-any-input-is-high|OR Gate Outputs HIGH When At Least One Input Is HIGH]]
- [[not-gate-inverts-the-input-logic-level|NOT Gate Inverts Its Single Input to the Opposite Logic Level]]
- [[nand-gate-is-a-universal-gate-built-from-and-and-not|NAND Is a Universal Gate That Outputs LOW Only When All Inputs Are HIGH]]
- [[nor-gate-is-a-universal-gate-built-from-or-and-not|NOR Is a Universal Gate That Outputs HIGH Only When All Inputs Are LOW]]
- [[xor-gate-outputs-high-when-inputs-are-different|XOR Gate Outputs HIGH Only When Its Inputs Differ]]
- [[xnor-gate-outputs-high-when-inputs-are-equal|XNOR Gate Outputs HIGH Only When Its Inputs Are Equal]]

### Boolean Algebra (Module 4a)
- [[boolean-algebra-simplifies-logic-expressions-without-changing-output|Boolean Algebra Reduces Logic Expressions While Preserving Output]]
- [[boolean-variables-and-complements-define-binary-logic-behavior|Boolean Variables Are Binary and Appear as Literals or Complements]]
- [[commutative-associative-and-distributive-laws-preserve-logic-equivalence|Commutative, Associative, and Distributive Laws Hold in Boolean Algebra]]
- [[boolean-rules-provide-direct-simplification-shortcuts|Boolean Identities Provide Direct Shortcuts for Simplifying Logic Expressions]]
- [[demorgans-theorems-transform-between-and-or-forms|DeMorgan's Theorems Convert Complement of AND/OR to OR/AND of Complements]]
- [[combinational-logic-circuits-depend-only-on-current-inputs|Combinational Logic Output Depends Solely on Current Inputs]]
- [[logic-circuits-implement-boolean-expressions-physically|Logic Circuits Implement Boolean Expressions as Interconnected Gates]]
- [[boolean-expression-to-truth-table-maps-all-inputs-to-output|Deriving a Truth Table from a Boolean Expression]]

### Supplemental (Thomas Floyd)
- [[active-low-signals-provide-fail-safe-behavior|Active-Low Signals Provide Fail-Safe Behavior on Faults]]
- [[propagation-delay-limits-digital-circuit-speed|Propagation Delay Is the Time a Signal Takes to Travel Through a Gate]]

## See Also

- [[Glossary/_Index|Glossary]]
- [[semester-03/SECI1113-computational-mathematic/_Index|Computational Mathematics]] — Boolean algebra is shared ground
- [[semester-03/SCSR2213-network-communication/_Index|Network Communication]] — hardware layer → protocol layer

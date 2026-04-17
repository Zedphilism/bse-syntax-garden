---
title: "Gray Code Ensures Only One Bit Changes Between Consecutive Values"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# Gray Code Ensures Only One Bit Changes Between Consecutive Values

Gray code is a binary encoding where any two consecutive values differ in exactly one bit position, eliminating multi-bit transition errors.

## Explanation

In standard binary counting, transitioning from 3 (011) to 4 (100) flips three bits simultaneously. If those bits change at slightly different times due to physical delays, the circuit momentarily reads an invalid intermediate value like 010 or 110. This causes spurious glitches.

Gray code is designed so that no transition ever flips more than one bit. Moving from one value to the next changes exactly one bit, so there is no ambiguous intermediate state. The cost is that Gray code values are not directly usable for arithmetic — they require conversion back to standard binary first.

To convert binary to Gray code: keep the MSB the same; each subsequent Gray bit is the XOR of the current and previous binary bits. To convert Gray code back to binary: keep the MSB; each subsequent binary bit is the XOR of the previous binary bit and the current Gray bit.

Gray code is heavily used in rotary encoders, position sensors, and any system where mechanical transitions between states must be read reliably.

## Key Points

- Only one bit changes between consecutive values
- Prevents erroneous intermediate readings during transitions
- Not usable for arithmetic directly — must convert to binary first
- Conversion formula (binary → Gray): G_MSB = B_MSB; Gᵢ = Bᵢ XOR Bᵢ₊₁

## Example

Convert binary 1001 to Gray code:

| Binary | Gray  |
|--------|-------|
| 1      | 1     |
| 0      | 1⊕0=1 |
| 0      | 0⊕0=0 |
| 1      | 0⊕1=1 |

Result: 1101 (Gray)

Standard binary 0 through 4 vs Gray:

| Decimal | Binary | Gray |
|---------|--------|------|
| 0       | 000    | 000  |
| 1       | 001    | 001  |
| 2       | 010    | 011  |
| 3       | 011    | 010  |
| 4       | 100    | 110  |

## See Also

- [[binary-representation-uses-base-two-with-weighted-bits|Binary Representation]] — the base encoding Gray code converts from
- [[parity-bit-detects-errors-using-even-or-odd-counts|Parity Bit]] — another error-reduction technique

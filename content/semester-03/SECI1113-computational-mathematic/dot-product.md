---
title: "The Dot Product Quantifies Alignment Between Two Vectors and Reveals Their Angle"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# The Dot Product Quantifies Alignment Between Two Vectors and Reveals Their Angle

The **dot product** (or scalar product) of two vectors **u** and **v** is a single real number that encodes how aligned the vectors are. When the angle between them is known, it equals ‖**u**‖‖**v**‖cosθ; when the angle is unknown, it equals the sum of component-wise products.

## Explanation

**When angle θ is known (geometric definition, R² or R³):**
**u** · **v** = ‖**u**‖ · ‖**v**‖ · cos θ

**When angle is unknown (algebraic definition, Rⁿ):**
**u** · **v** = u₁v₁ + u₂v₂ + … + uₙvₙ

These two definitions are equivalent. The algebraic form works in any dimension; the geometric form requires physical space (R² or R³).

**Finding the angle between vectors:**
cos θ = (**u** · **v**) / (‖**u**‖ · ‖**v**‖)
θ = arccos((**u** · **v**) / (‖**u**‖ · ‖**v**‖))

**Key geometric insights:**
- If **u** · **v** > 0: angle < 90° (vectors point in similar directions)
- If **u** · **v** = 0: angle = 90° → vectors are **orthogonal** (perpendicular)
- If **u** · **v** < 0: angle > 90° (vectors point in opposite directions)
- **v** · **v** = ‖**v**‖² (dot product of a vector with itself equals its squared norm)

## Key Points

- Two forms: geometric (**u**·**v** = ‖**u**‖‖**v**‖cosθ) and algebraic (**u**·**v** = Σuᵢvᵢ)
- Result is a scalar (not a vector)
- **u** · **v** = 0 ↔ vectors are orthogonal
- Angle formula: θ = arccos(**u**·**v** / (‖**u**‖‖**v**‖))
- Commutative: **u**·**v** = **v**·**u**; distributive: **u**·(**v**+**w**) = **u**·**v** + **u**·**w**

## Example

Find **u** · **v** for **u** = (0, 0, 3), **v** = (2, 0, 2), θ = 45°.

Using geometric form:
‖**u**‖ = 3, ‖**v**‖ = √(4+0+4) = 2√2
**u** · **v** = 3 · 2√2 · cos(45°) = 3 · 2√2 · (√2/2) = 3 · 2 = **6**

Verify with algebraic form: (0)(2) + (0)(0) + (3)(2) = 6 ✓

## See Also

- [[euclidean-norm|Euclidean Norm]] — ‖**v**‖² = **v**·**v**
- [[cross-product|Cross Product in R3]] — produces a vector (not a scalar), unique to 3D
- [[linear-independence-and-dependence|Linear Independence and Dependence]] — orthogonal sets are always linearly independent

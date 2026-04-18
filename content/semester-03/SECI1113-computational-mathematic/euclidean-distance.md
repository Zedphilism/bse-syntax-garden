---
title: "Euclidean Distance Measures the Straight-Line Separation Between Two Vectors"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# Euclidean Distance Measures the Straight-Line Separation Between Two Vectors

The **Euclidean distance** between two vectors **u** and **v** in Rⁿ is the norm of their difference: d(**u**, **v**) = ‖**u** − **v**‖. It is the n-dimensional generalisation of the straight-line distance formula from coordinate geometry.

## Explanation

For **u** = (u₁, u₂, …, uₙ) and **v** = (v₁, v₂, …, vₙ):

d(**u**, **v**) = ‖**u** − **v**‖ = √((u₁−v₁)² + (u₂−v₂)² + … + (uₙ−vₙ)²)

In R²: d = √((u₁−v₁)² + (u₂−v₂)²) — the familiar Pythagorean distance formula.
In R³: d = √((u₁−v₁)² + (u₂−v₂)² + (u₃−v₃)²).

Key properties:
- d(**u**, **v**) ≥ 0 (non-negative)
- d(**u**, **v**) = 0 iff **u** = **v**
- d(**u**, **v**) = d(**v**, **u**) (symmetric)
- Triangle inequality: d(**u**, **w**) ≤ d(**u**, **v**) + d(**v**, **w**)

The Euclidean distance differs from the **norm** in that norm measures distance from the origin (a single vector to the origin), while Euclidean distance measures separation between two arbitrary vectors/points.

## Key Points

- Formula: d(**u**, **v**) = √(Σᵢ (uᵢ − vᵢ)²)
- This is the norm of the difference vector **u** − **v**
- Non-negative, symmetric, zero only when u = v
- Obeys the triangle inequality

## Example

Let **u** = (1, −2, 4, 1) and **v** = (3, 1, −5, 0) in R⁴.

**u** − **v** = (1−3, −2−1, 4−(−5), 1−0) = (−2, −3, 9, 1)

d(**u**, **v**) = √(4 + 9 + 81 + 1) = √95 ≈ 9.747

## See Also

- [[euclidean-norm|Euclidean Norm]] — distance from origin to a single vector
- [[vector-arithmetic|Vector Arithmetic]] — subtraction used to compute the difference
- [[dot-product|Dot Product in Rn]] — alternative angle/distance relationship

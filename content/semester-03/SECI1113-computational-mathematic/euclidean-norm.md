---
title: "The Euclidean Norm Is the Length of a Vector Computed as the Root-Sum-of-Squares"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# The Euclidean Norm Is the Length of a Vector Computed as the Root-Sum-of-Squares

The **Euclidean norm** (or **length**) of a vector **v** in Rⁿ, denoted ‖**v**‖, is the square root of the sum of the squares of its components. It generalises the Pythagorean theorem to n dimensions.

## Explanation

For a vector **v** = (v₁, v₂, …, vₙ) in Rⁿ, the norm is:

‖**v**‖ = √(v₁² + v₂² + … + vₙ²)

In R²: ‖**v**‖ = √(v₁² + v₂²) — this is just the distance from the origin to the point (v₁, v₂) by the Pythagorean theorem.

In R³: ‖**v**‖ = √(v₁² + v₂² + v₃²).

A vector with norm 1 is called a **unit vector**. Any nonzero vector can be normalised by dividing by its norm: **û** = **v**/‖**v**‖.

The norm is always non-negative (‖**v**‖ ≥ 0), and ‖**v**‖ = 0 only for the zero vector.

## Key Points

- Formula: ‖**v**‖ = √(Σᵢ vᵢ²)
- Always non-negative; zero only for the zero vector
- Unit vector: ‖**u**‖ = 1; normalise with **û** = **v**/‖**v**‖
- ‖c**v**‖ = |c|·‖**v**‖ (scaling scales the norm)
- Related to Euclidean distance: dist(**u**, **v**) = ‖**u** − **v**‖

## Example

Let **u** = (1, −2, 4, 1) in R⁴.

‖**u**‖ = √(1² + (−2)² + 4² + 1²) = √(1 + 4 + 16 + 1) = √22 ≈ 4.690

Let **v** = (3, 1, −5, 0):
‖**v**‖ = √(9 + 1 + 25 + 0) = √35 ≈ 5.916

## See Also

- [[euclidean-distance|Euclidean Distance]] — norm of the difference vector
- [[dot-product|Dot Product in Rn]] — the dot product connects to the norm: **v**·**v** = ‖**v**‖²
- [[vector-arithmetic|Vector Arithmetic]] — operations that produce vectors whose norms can be computed

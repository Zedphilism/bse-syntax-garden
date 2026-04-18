---
title: "The Cross Product Produces a Vector Perpendicular to Two Vectors in R3"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# The Cross Product Produces a Vector Perpendicular to Two Vectors in R3

The **cross product** of two vectors **u** and **v** in R³ produces a new vector **u** × **v** that is perpendicular (orthogonal) to both **u** and **v**. Unlike the dot product, the cross product only applies in 3-dimensional space.

## Explanation

For **u** = (u₁, u₂, u₃) and **v** = (v₁, v₂, v₃) in R³:

**u** × **v** = (u₂v₃ − u₃v₂, u₃v₁ − u₁v₃, u₁v₂ − u₂v₁)

The determinant notation expresses this cleanly using the standard unit vectors **i** = (1,0,0), **j** = (0,1,0), **k** = (0,0,1):

```
u × v = det | i   j   k  |
            | u₁  u₂  u₃ |
            | v₁  v₂  v₃ |
```

Expanding along the first row: **i**(u₂v₃ − u₃v₂) − **j**(u₁v₃ − u₃v₁) + **k**(u₁v₂ − u₂v₁).

Key properties:
- **u** × **v** is perpendicular to both **u** and **v**
- Anti-commutative: **u** × **v** = −(**v** × **u**)
- ‖**u** × **v**‖ = ‖**u**‖‖**v**‖sin θ (magnitude equals the area of the parallelogram spanned by **u** and **v**)
- **u** × **v** = **0** when **u** and **v** are parallel (θ = 0° or 180°)

The cross product is fundamentally different from the dot product: dot product gives a scalar and measures alignment; cross product gives a vector and measures perpendicularity.

## Key Points

- Only defined in R³ (not in R² or Rⁿ for n > 3 in the same way)
- Result is a vector perpendicular to both input vectors
- Anti-commutative: **u** × **v** = −(**v** × **u**)
- Magnitude = ‖**u**‖‖**v**‖sinθ = area of the parallelogram spanned by **u** and **v**
- Zero when vectors are parallel; maximum magnitude when perpendicular

## Example

Find **a** × **b** for **a** = (2, −1, 3) and **b** = (−1, 2, 4).

```
a × b = det | i   j   k |
            | 2  -1   3 |
            |-1   2   4 |
```

**i**-component: (−1)(4) − (3)(2) = −4 − 6 = −10
**j**-component: −[(2)(4) − (3)(−1)] = −[8 + 3] = −11
**k**-component: (2)(2) − (−1)(−1) = 4 − 1 = 3

**a** × **b** = (−10, −11, 3)

Verify perpendicularity: **a** · (**a**×**b**) = 2(−10)+(−1)(−11)+3(3) = −20+11+9 = 0 ✓

## See Also

- [[dot-product|Dot Product in Rn]] — scalar result, measures alignment, works in any dimension
- [[euclidean-norm|Euclidean Norm]] — ‖**u** × **v**‖ = ‖**u**‖‖**v**‖sinθ
- [[vector-definition-rn-space|Vector Definition and Rn Space]] — R³ context

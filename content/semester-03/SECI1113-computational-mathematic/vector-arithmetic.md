---
title: "Vector Arithmetic Combines Vectors Component-Wise and Obeys Eight Algebraic Laws"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# Vector Arithmetic Combines Vectors Component-Wise and Obeys Eight Algebraic Laws

Vector addition, subtraction, and scalar multiplication in Rⁿ are performed entry-by-entry. These operations satisfy eight algebraic properties that mirror the familiar laws of ordinary arithmetic.

## Explanation

**Addition:** u + v = (u₁+v₁, u₂+v₂, …, uₙ+vₙ). Geometrically, vectors are placed head-to-tail (triangle rule) or with a shared initial point forming a parallelogram (parallelogram rule).

**Subtraction:** u − v = u + (−v), where −v reverses the direction of v.

**Scalar multiplication:** c·u = (cu₁, cu₂, …, cuₙ). Scales the length by |c|; reverses direction if c < 0.

**Eight properties (hold for all u, v, w in Rⁿ and scalars c, k):**
1. Commutative: u + v = v + u
2. Associative: (u + v) + w = u + (v + w)
3. Additive identity: 0 + u = u + 0 = u
4. Additive inverse: u + (−u) = 0
5. 1·u = u
6. c(ku) = (ck)u
7. (c + k)u = cu + ku
8. c(u + v) = cu + cv

These properties are exactly what makes Rⁿ a valid **vector space**.

## Key Points

- Add/subtract vectors of the same dimension only; component-wise
- Scalar multiplication scales every component individually
- Negative of a vector: same length, reversed direction
- Zero vector is the additive identity; −u is the additive inverse
- All 8 properties must hold for a valid vector space

## Example

Let **u** = (1, 4, 5, −3) and **v** = (8, 1, −2, −1) in R⁴.

1. **u + v** = (1+8, 4+1, 5+(−2), −3+(−1)) = **(9, 5, 3, −4)**
2. **2u** = (2, 8, 10, −6)
3. **2u − 3v** = 2(1,4,5,−3) − 3(8,1,−2,−1) = (2,8,10,−6) − (24,3,−6,−3) = **(−22, 5, 16, −3)**

## See Also

- [[vector-definition-rn-space|Vector Definition and Rn Space]] — what vectors are
- [[euclidean-norm|Euclidean Norm]] — length of a vector, derived from components
- [[vector-space-axioms|Vector Space Axioms]] — formal generalisation of these 8 properties

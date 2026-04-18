---
title: "A Vector in Rn Is an Ordered n-Tuple That Encodes Both Magnitude and Direction"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# A Vector in Rn Is an Ordered n-Tuple That Encodes Both Magnitude and Direction

A **vector** is a quantity possessing both magnitude and direction, represented geometrically as a directed line segment from an initial point to a terminal point. Algebraically, a vector in n-space is an ordered n-tuple of real numbers (a₁, a₂, …, aₙ), written as a row or column.

## Explanation

The set of all ordered n-tuples of real numbers is called **n-space**, denoted **Rⁿ**. Common spaces are:
- R² (2D plane): vectors like v = (v₁, v₂)
- R³ (3D space): vectors like v = (v₁, v₂, v₃)
- Rⁿ: any finite-dimensional space

Vectors are typically denoted by bold lowercase letters (**v**, **u**, **w**) or with an arrow overhead.

When placed with the initial point at the origin, the **components** of a vector are the coordinates of its terminal point. For example, v = (1, 2) starts at (0,0) and ends at (1,2).

Two vectors are **equivalent** if they have the same magnitude AND the same direction — regardless of where they start. Equal vectors can have different initial points.

Vectors can be written as **row vectors** [v₁  v₂  … vₙ] or **column vectors** (a column matrix). The orientation matters for matrix multiplication compatibility.

## Key Points

- Vector = ordered n-tuple in Rⁿ; has magnitude and direction
- R² → 2 components; R³ → 3 components; Rⁿ → n components
- Two vectors are equal iff same magnitude AND direction
- Row vector: 1×n matrix; Column vector: n×1 matrix
- Zero vector **0** has zero length; negative −**v** has same length, opposite direction

## Example

In R²: **v** = (1, 2) — initial point at origin, terminal point at (1, 2).

In R³: **v** = (1, 3, 4) — a 3-component column vector.

In R⁴: **u** = (1, 4, 5, −3) — 4-component vector; **v** = (8, 1, −2, −1).

These vectors live in 4-dimensional space and cannot be visualised, but all arithmetic operations still apply normally.

## See Also

- [[vector-arithmetic|Vector Arithmetic — Addition, Subtraction, Scalar Multiplication]] — operations on vectors
- [[euclidean-norm|Euclidean Norm]] — computing the length/magnitude of a vector
- [[dot-product|Dot Product in Rn]] — angle-related operation between two vectors

---
title: "Vectors Are Linearly Independent When No Vector in the Set Is a Combination of the Others"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# Vectors Are Linearly Independent When No Vector in the Set Is a Combination of the Others

A set of vectors {v₁, v₂, …, vₙ} is **linearly independent** if the only scalars c₁, c₂, …, cₙ satisfying c₁v₁ + c₂v₂ + … + cₙvₙ = **0** are all zero. If any non-trivial (non-all-zero) solution exists, the set is **linearly dependent**.

## Explanation

The formal test: write the vector equation c₁v₁ + c₂v₂ + … + cₙvₙ = **0** and form the augmented matrix [v₁|v₂|…|vₙ|**0**]. Row-reduce. Two outcomes:

- **Only the trivial solution** (all cᵢ = 0): the set is **linearly independent** — no vector can be written as a combination of the others.
- **Non-trivial solution exists** (some cᵢ ≠ 0): the set is **linearly dependent** — at least one vector is a linear combination of the rest.

**Geometric intuition:** In R², two vectors are linearly independent if they point in different directions (not parallel). Three vectors in R² are always dependent (you can't have 3 independent directions in 2D space). A set of n+1 or more vectors in Rⁿ is always linearly dependent.

**Standard basis vectors:** The set {**i**, **j**, **k**} = {(1,0,0), (0,1,0), (0,0,1)} is the canonical linearly independent set in R³. c₁**i** + c₂**j** + c₃**k** = **0** forces c₁ = c₂ = c₃ = 0.

## Key Points

- Independent: only solution to Σcᵢvᵢ = **0** is all cᵢ = 0
- Dependent: some non-trivial solution exists (at least one cᵢ ≠ 0)
- Test: row-reduce [v₁|…|vₙ|**0**]; check for free variables
- Free variable → dependent; unique solution (all zeros) → independent
- n+1 or more vectors in Rⁿ → always dependent

## Example

Test **v₁** = (1,−2,3,−4), **v₂** = (−1,3,4,2), **v₃** = (1,1,−2,−2) in R⁴.

Set c₁**v₁** + c₂**v₂** + c₃**v₃** = **0** → row-reduce the 4×3 matrix [v₁|v₂|v₃].

If the only solution is c₁ = c₂ = c₃ = 0 (no free variables), the set is **linearly independent**.

Standard basis example: **i** = (1,0,0), **j** = (0,1,0), **k** = (0,0,1).
c₁(1,0,0) + c₂(0,1,0) + c₃(0,0,1) = (c₁, c₂, c₃) = (0,0,0) → c₁=c₂=c₃=0 → **linearly independent**.

## See Also

- [[linear-combination-of-vectors|Linear Combination of Vectors]] — dependence is equivalent to one vector being a linear combination of others
- [[vector-space-axioms|Vector Space Axioms]] — independence is fundamental to defining a basis
- [[gaussian-elimination|Gaussian Elimination]] — the row reduction tool used to test independence

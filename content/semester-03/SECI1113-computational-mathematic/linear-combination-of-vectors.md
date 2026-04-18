---
title: "A Linear Combination Scales and Sums a Set of Vectors with Scalar Weights"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# A Linear Combination Scales and Sums a Set of Vectors with Scalar Weights

A **linear combination** of vectors v₁, v₂, …, vₙ is any expression of the form c₁v₁ + c₂v₂ + … + cₙvₙ, where c₁, c₂, …, cₙ are real-number scalars. The question of whether a given vector can be expressed as a linear combination of a set reveals important structural information about that set.

## Explanation

Given vectors v₁, v₂, …, vₙ (all of the same length m), and scalars c₁, c₂, …, cₙ, the vector **w** = c₁v₁ + c₂v₂ + … + cₙvₙ is called a linear combination of the set.

To check whether a target vector **w** is a linear combination of {v₁, …, vₙ}, set up the equation c₁v₁ + … + cₙvₙ = **w** and solve for the scalars. This produces a linear system — write it as an augmented matrix and apply Gaussian elimination. Three outcomes:
- Unique solution → **w** is a linear combination (one way)
- Infinite solutions → **w** is a linear combination (many ways)
- Inconsistent → **w** is **not** a linear combination of the set

Linear combinations work for any objects that satisfy the vector space axioms — not just tuples of numbers. For example, matrices can be expressed as linear combinations of other matrices.

## Key Points

- w = c₁v₁ + c₂v₂ + … + cₙvₙ with scalars cᵢ ∈ R
- Test: set up [v₁|v₂|…|vₙ|**w**] as augmented matrix and row-reduce
- Consistent solution → **w** is in the span of {v₁, …, vₙ}
- Inconsistent → **w** is outside the span
- Applies equally to matrix sets, polynomial sets, etc.

## Example

Can **u** = (7, 2, 9) be expressed as a linear combination of **v₁** = (1, 2, 4) and **v₂** = (2, 4, 6)?

Set c₁(1,2,4) + c₂(2,4,6) = (7,2,9) → augmented system:
```
[1  2 | 7]
[2  4 | 2]
[4  6 | 9]
```
R2 − 2R1 → [0, 0, −12] → 0 = −12, inconsistent.
Therefore **u** is **not** a linear combination of **v₁** and **v₂**.

For **w** = (−14, 7, 2) (from the lecture), the system is consistent with c₁ = −3, c₂ = 2, confirming **w** = −3**v₁** + 2**v₂**.

## See Also

- [[linear-independence-and-dependence|Linear Independence and Dependence]] — related: a set is dependent if one vector is a linear combination of others
- [[gaussian-elimination|Gaussian Elimination]] — solves the system set up to test linear combinations
- [[vector-space-axioms|Vector Space Axioms]] — the span of a set is the set of all linear combinations

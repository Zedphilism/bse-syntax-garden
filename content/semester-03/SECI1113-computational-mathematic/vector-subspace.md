---
title: "A Vector Subspace Is a Subset of a Vector Space That Is Itself a Vector Space"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# A Vector Subspace Is a Subset of a Vector Space That Is Itself a Vector Space

A **subspace** W of a vector space V is a non-empty subset of V that is itself a vector space under V's operations. Rather than checking all ten axioms, only two properties need to be verified: closure under addition and closure under scalar multiplication.

## Explanation

The two-condition subspace test: W ⊆ V is a subspace if and only if:
1. **Closed under addition:** For any u, v ∈ W, u + v ∈ W
2. **Closed under scalar multiplication:** For any u ∈ W and scalar c, cu ∈ W

If both conditions hold, W automatically inherits all other vector space properties from V (since the operations are the same). The zero vector must be in W (follows from condition 2 with c = 0), and additive inverses must be in W (follows from condition 2 with c = −1).

Common subspace examples:
- A line through the origin in R² is a subspace of R²
- A plane through the origin in R³ is a subspace of R³
- The set of all 2×2 matrices with trace 0 is a subspace of M₂ₓ₂

**Non-example:** A subset with a third component always equal to 1 (e.g., {(a, b, 1)}) is NOT a subspace because the sum of two such vectors has third component 2, not 1 — closure under addition fails.

## Key Points

- Two conditions only: closed under addition AND closed under scalar multiplication
- Both must hold; failing one disqualifies the subset
- Zero vector must be in any subspace
- A line/plane/hyperplane is a subspace only if it passes through the origin
- Inherits all 10 axioms from the parent space V

## Example

Let V = R², and let W = {(a, 0) : a ∈ R} (the x-axis).

Closure under addition: (a, 0) + (b, 0) = (a+b, 0) ∈ W ✓
Closure under scalar multiplication: c·(a, 0) = (ca, 0) ∈ W ✓
→ W is a subspace of R².

Non-example: Let W = {(a, b, 1) : a, b ∈ R} ⊆ R³.
(a₁, b₁, 1) + (a₂, b₂, 1) = (a₁+a₂, b₁+b₂, 2) ∉ W (third component is 2, not 1).
→ W is **not** a subspace of R³.

## See Also

- [[vector-space-axioms|Vector Space Axioms]] — the full set W must ultimately satisfy
- [[linear-independence-and-dependence|Linear Independence and Dependence]] — basis and dimension concepts build on subspaces
- [[linear-combination-of-vectors|Linear Combination of Vectors]] — the span of any set of vectors is always a subspace

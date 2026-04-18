---
title: "The Power Method Iteratively Finds the Dominant Eigenvalue of a Matrix"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# The Power Method Iteratively Finds the Dominant Eigenvalue of a Matrix

The **power method** is an iterative algorithm that approximates the **dominant eigenvalue** (the eigenvalue with the largest absolute value) and its corresponding eigenvector. It avoids computing the characteristic polynomial, making it practical for large matrices.

## Explanation

**Prerequisites:** A must be diagonalisable with n linearly independent eigenvectors, and must have exactly one eigenvalue of largest magnitude (the dominant eigenvalue λ₁ with |λ₁| > |λ₂| ≥ … ≥ |λₙ|).

**Algorithm:**
1. Start with an arbitrary nonzero vector **v⁽⁰⁾**.
2. Compute **u⁽¹⁾** = A**v⁽⁰⁾**.
3. Let m₁ = component of **u⁽¹⁾** with largest absolute magnitude (the scale factor).
4. Normalise: **v⁽¹⁾** = (1/m₁) **u⁽¹⁾**.
5. Repeat: **u⁽ᵏ⁺¹⁾** = A**v⁽ᵏ⁾**; mₖ₊₁ = largest magnitude component; **v⁽ᵏ⁺¹⁾** = **u⁽ᵏ⁺¹⁾**/mₖ₊₁.
6. Stop when |**v⁽ᵏ⁺¹⁾** − **v⁽ᵏ⁾**| < ε (or when mₖ₊₁ − mₖ converges).

As k → ∞: mₖ → λ₁ (dominant eigenvalue), **v⁽ᵏ⁾** → corresponding eigenvector.

The normalisation step (dividing by the largest component) prevents numerical overflow and also extracts the eigenvalue estimate.

## Key Points

- Finds only the dominant eigenvalue (largest |λ|) and its eigenvector
- Requires: diagonalisable A and unique largest eigenvalue
- Iterates: **v⁽ᵏ⁺¹⁾** = (1/mₖ₊₁) A**v⁽ᵏ⁾**
- mₖ converges to the dominant eigenvalue; **v⁽ᵏ⁾** converges to the dominant eigenvector
- Stop when |**v⁽ᵏ⁺¹⁾** − **v⁽ᵏ⁾**| < ε

## Example

For A = [[1, 2, −1], [1, 0, 1], [4, −4, 5]] and **v⁽⁰⁾** = (0, 0, 1)ᵀ, ε = 0.001:

Iteration 1: **u⁽¹⁾** = A**v⁽⁰⁾** = (−1, 1, 5). Largest component: m₁ = 5.
**v⁽¹⁾** = (−0.2, 0.2, 1.0). |**v⁽¹⁾** − **v⁽⁰⁾**| = |(−0.2, 0.2, 0)| > 0.001 → continue.

Iterate until convergence. The scale factors mₖ converge to the dominant eigenvalue.

## See Also

- [[eigenvalue-eigenvector-definition|Eigenvalue and Eigenvector Definition]] — defines what the power method is approximating
- [[characteristic-polynomial|Characteristic Polynomial]] — exact method for small matrices; power method is for large ones
- [[convergence-criteria|Convergence Criteria]] — stopping condition ε applied to iterate differences

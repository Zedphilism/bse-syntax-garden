---
title: "Eigenvalues and Eigenvectors Reveal Directions a Matrix Transformation Merely Scales"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# Eigenvalues and Eigenvectors Reveal Directions a Matrix Transformation Merely Scales

For an n×n matrix A, an **eigenvalue** λ is a scalar such that there exists a nonzero vector **v** satisfying A**v** = λ**v**. The vector **v** is the corresponding **eigenvector**. Instead of rotating **v**, A simply scales it by λ — these directions are the "natural axes" of the transformation.

## Explanation

The defining equation A**v** = λ**v** means: multiplying **v** by A gives the same result as multiplying **v** by a scalar λ. The transformation T(**v**) = A**v** maps **v** to a parallel vector.

Rewriting: A**v** − λI**v** = 0 → **(A − λI)v = 0**.

This homogeneous system has a nontrivial solution (v ≠ **0**) if and only if the matrix (A − λI) is **singular**, meaning:

**det(A − λI) = 0**

This equation, when expanded, is a polynomial of degree n in λ called the **characteristic polynomial** p(λ). Its roots are the n eigenvalues λ₁, λ₂, …, λₙ.

For each eigenvalue λᵢ, the eigenvectors are found by substituting λᵢ back into **(A − λᵢI)v = 0** and solving the homogeneous system (Gaussian elimination). The nonzero solutions form the **eigenspace** of λᵢ.

Together, (λ, **v**) is called an **eigenpair** of A.

## Key Points

- Equation: A**v** = λ**v** with **v** ≠ **0**
- Equivalent form: (A − λI)**v** = **0**
- Eigenvalues: roots of det(A − λI) = 0 (characteristic polynomial)
- Eigenvectors: nonzero solutions of (A − λI)**v** = **0** for each λ
- Geometric meaning: eigenvectors are directions that A only stretches/compresses

## Example

Let A = [[3, 6], [1, 4]].

Characteristic polynomial: det(A − λI) = det([[3−λ, 6], [1, 4−λ]]) = (3−λ)(4−λ) − 6 = λ² − 7λ + 6 = (λ−6)(λ−1).

Eigenvalues: **λ₁ = 6** and **λ₂ = 1**.

For λ₁ = 6: (A − 6I)**v** = **0** → [[-3, 6], [1, -2]]**v** = **0** → **v** = (2, 1) (or any scalar multiple).
For λ₂ = 1: (A − I)**v** = **0** → **v** = (−3, 1) (or any scalar multiple).

## See Also

- [[characteristic-polynomial|Characteristic Polynomial]] — the equation det(A − λI) = 0
- [[power-method|Power Method]] — numerical algorithm to find the dominant eigenvalue
- [[matrix-determinant|Matrix Determinant]] — required to set up the characteristic equation

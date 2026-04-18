---
title: "The Characteristic Polynomial Is Solved to Find All Eigenvalues of a Matrix"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# The Characteristic Polynomial Is Solved to Find All Eigenvalues of a Matrix

The **characteristic polynomial** of an n×n matrix A is p(λ) = det(A − λI). Setting p(λ) = 0 produces the **characteristic equation**, whose roots are the eigenvalues of A. This polynomial is always degree n, so an n×n matrix has exactly n eigenvalues (counting multiplicity, possibly complex).

## Explanation

**Derivation:** The eigenvalue equation A**v** = λ**v** rearranges to (A − λI)**v** = **0**. For a nonzero **v** to satisfy this, the matrix (A − λI) must be singular — its determinant must be zero. This gives the characteristic equation:

det(A − λI) = 0

Expanding this determinant in λ produces a polynomial of degree n. For a 2×2 matrix, it is quadratic; for a 3×3 matrix, cubic; and so on.

**Gerschgorin's Circle Theorem:** For large matrices where computing det(A−λI) is expensive, Gerschgorin's theorem provides bounds. For each row i, define a disk Bᵢ centred at the diagonal entry aᵢᵢ with radius rᵢ = Σⱼ≠ᵢ |aᵢⱼ| (sum of absolute values of off-diagonal entries in row i). All eigenvalues of A lie within the union of these disks.

This gives an approximate region where eigenvalues live without computing the polynomial explicitly.

## Key Points

- p(λ) = det(A − λI); set = 0 to find eigenvalues
- Degree n polynomial → n eigenvalues (may be complex or repeated)
- Once λ is found, substitute into (A−λI)**v** = **0** to find eigenvectors
- Gerschgorin disk: centre aᵢᵢ, radius rᵢ = Σⱼ≠ᵢ |aᵢⱼ|
- All eigenvalues lie in the union of Gerschgorin disks

## Example

For A = [[−1, 6, −12], [0, −13, 30], [0, −9, 20]]:

p(λ) = det(A − λI) = (−1−λ)(−13−λ)(20−λ) − …
= λ³ − 6λ² + 3λ + 10 = (λ+1)(λ−5)(λ−2)

Eigenvalues: **λ₁ = −1**, **λ₂ = 5**, **λ₃ = 2**.

**Gerschgorin estimate for A = [[3, −2, 1], [−1, 3, 1], [1, −2, −4]]:**
- Row 1: centre 3, radius |−2|+|1| = 3 → disk B₁: [0, 6]
- Row 2: centre 3, radius |−1|+|1| = 2 → disk B₂: [1, 5]
- Row 3: centre −4, radius |1|+|−2| = 3 → disk B₃: [−7, −1]

All eigenvalues lie in [−7, −1] ∪ [0, 6].

## See Also

- [[eigenvalue-eigenvector-definition|Eigenvalue and Eigenvector Definition]] — the equation that leads to p(λ)
- [[matrix-determinant|Matrix Determinant]] — used to expand the characteristic polynomial
- [[power-method|Power Method]] — numerical alternative to finding eigenvalues without the polynomial

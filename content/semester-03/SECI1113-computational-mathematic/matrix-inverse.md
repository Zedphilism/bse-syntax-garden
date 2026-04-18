---
title: "The Matrix Inverse Exists Only When the Determinant Is Nonzero"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# The Matrix Inverse Exists Only When the Determinant Is Nonzero

The **inverse** of a square matrix A, denoted A⁻¹, is the unique matrix satisfying A·A⁻¹ = A⁻¹·A = I. It exists if and only if det(A) ≠ 0. A matrix with no inverse is called **singular**.

## Explanation

**2×2 inverse formula:** For A = [[a, b], [c, d]] with det(A) = ad−bc ≠ 0:

A⁻¹ = (1/det(A)) · [[d, −b], [−c, a]]

Simply swap the main diagonal entries, negate the off-diagonal entries, and divide everything by the determinant.

**3×3 inverse using cofactor/adjoint method (5 steps):**
1. Compute det(A) — if zero, stop; inverse does not exist.
2. Compute all 9 minors: each minor Aᵢⱼ is the determinant of the 2×2 submatrix formed by deleting row i and column j.
3. Form the matrix of cofactors: Cᵢⱼ = (−1)ⁱ⁺ʲ · Aᵢⱼ.
4. Compute the adjoint (adjA) = transpose of the cofactor matrix.
5. A⁻¹ = (1/det(A)) · adjA.

The adjoint method works for any n×n matrix. In practice, for larger systems Gaussian elimination on [A|I] to produce [I|A⁻¹] is computationally more efficient.

## Key Points

- A⁻¹ exists ⟺ det(A) ≠ 0
- 2×2 formula: swap diagonal, negate off-diagonal, divide by det
- 3×3: cofactor matrix → transpose → divide by det
- A·A⁻¹ = I (verify this to check correctness)
- Singular matrix = det = 0 = no inverse

## Example

For A = [[2, 1], [1, 4]]: det = (2)(4)−(1)(1) = 7.

A⁻¹ = (1/7)·[[4, −1], [−1, 2]] = [[4/7, −1/7], [−1/7, 2/7]]

Verify: A · A⁻¹ = [[2·4/7 + 1·(−1/7), …], …] = [[1, 0], [0, 1]] = I ✓

## See Also

- [[matrix-determinant|Matrix Determinant]] — prerequisite; must be nonzero
- [[matrix-operations|Matrix Operations]] — matrix multiplication context
- [[gauss-jordan-elimination|Gauss-Jordan Elimination]] — alternative method via row reduction on [A|I]

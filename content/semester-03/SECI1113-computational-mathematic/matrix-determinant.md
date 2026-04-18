---
title: "The Determinant Is a Scalar That Encodes Whether a Square Matrix Is Invertible"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# The Determinant Is a Scalar That Encodes Whether a Square Matrix Is Invertible

The **determinant** (det A or |A|) is a single real number computed from a square matrix. Its most critical use is invertibility: a square matrix A has an inverse if and only if det(A) ≠ 0.

## Explanation

**2×2 matrix:** For A = [[a, b], [c, d]], det(A) = ad − bc. Cross-multiply and subtract.

**Cofactor expansion (n×n):** For larger matrices, expand along any row or column. Expanding across row i:
det(A) = Σⱼ aᵢⱼ · Cᵢⱼ
where Cᵢⱼ = (−1)ⁱ⁺ʲ · det(Aᵢⱼ) is the **cofactor**, and Aᵢⱼ is the **submatrix** formed by deleting row i and column j.

The sign pattern for cofactors alternates like a checkerboard:
```
+ − + − …
− + − + …
+ − + − …
```

**Practical tip:** Choose the row or column with the most zeros — it eliminates terms immediately and reduces calculation.

**3×3 expansion along row 1:**
det(A) = a₁₁(a₂₂a₃₃ − a₂₃a₃₂) − a₁₂(a₂₁a₃₃ − a₂₃a₃₁) + a₁₃(a₂₁a₃₂ − a₂₂a₃₁)

## Key Points

- 2×2: det = ad − bc
- Cofactor Cᵢⱼ = (−1)ⁱ⁺ʲ · det(submatrix Aᵢⱼ)
- Expand across any row or column (result is always the same)
- det(A) ≠ 0 ↔ A is invertible (non-singular)
- det(A) = 0 ↔ A is singular; no inverse exists
- Choose row/column with most zeros to minimise work

## Example

For the 2×2 matrix A = [[2, 4], [1, 5]]:
det(A) = (2)(5) − (4)(1) = 10 − 4 = **6** (≠ 0, so A is invertible)

For a 3×3 matrix, expand across row 3 if row 3 contains zeros to reduce computation steps. Each 2×2 submatrix determinant is computed with the cross-multiply rule, then combined with the appropriate cofactor signs.

## See Also

- [[matrix-types-and-notation|Matrix Types and Notation]] — square matrix requirement
- [[matrix-inverse|Matrix Inverse]] — requires det(A) ≠ 0
- [[matrix-operations|Matrix Operations]] — multiplication context

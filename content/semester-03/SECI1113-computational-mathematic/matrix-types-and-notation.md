---
title: "A Matrix Is a Rectangular Array of Numbers Classified by Its Shape"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# A Matrix Is a Rectangular Array of Numbers Classified by Its Shape

A **matrix** is a rectangular arrangement of real numbers organised into m rows and n columns, called an m × n matrix. Individual entries are referenced by their row-column position: aᵢⱼ denotes the entry in row i, column j.

## Explanation

Matrices are denoted by uppercase letters (A, B, C). The **size** or **dimension** is always stated as rows × columns. Several special shapes appear frequently:

A **row matrix** (1 × n) is a single row: C = [−1  5  2].

A **column matrix** (m × 1) is a single column.

A **square matrix** has equal numbers of rows and columns (m = n). The entries a₁₁, a₂₂, a₃₃, … form the **main diagonal**.

A **diagonal matrix** is a square matrix whose off-diagonal entries are all zero.

The **identity matrix** Iₙ is the n × n diagonal matrix with 1s on the main diagonal and 0s elsewhere. It is the matrix equivalent of the number 1.

The **zero matrix** is any m × n matrix with all entries equal to 0. It plays the role of 0 in matrix arithmetic.

Two matrices are **equal** (A = B) only if they have the same dimensions and every corresponding pair of entries is equal.

## Key Points

- Dimension notation: m rows × n columns (rows first, always)
- Entry aᵢⱼ: row i, column j
- Square matrix: m = n; main diagonal = a₁₁, a₂₂, …, aₙₙ
- Diagonal matrix: square with all non-diagonal entries = 0
- Identity matrix Iₙ: diagonal matrix with 1s on the main diagonal
- Zero matrix 0: all entries are 0; acts as additive identity

## Example

```
A = [2  0  -4]   (2×3 matrix)
    [3  1   7]

B = [5  2  8]    (3×3 square matrix)
    [7  4  3]
    [3  9  6]
```

For A: a₁₂ = 0 (row 1, column 2); a₂₃ = 7 (row 2, column 3).

The 3×3 identity matrix:
```
I₃ = [1 0 0]
     [0 1 0]
     [0 0 1]
```

## See Also

- [[matrix-operations|Matrix Operations — Addition, Subtraction, Multiplication, Transpose]] — what you can do with matrices
- [[matrix-determinant|Matrix Determinant]] — a scalar value computed from square matrices
- [[matrix-inverse|Matrix Inverse]] — only defined for square matrices with nonzero determinant

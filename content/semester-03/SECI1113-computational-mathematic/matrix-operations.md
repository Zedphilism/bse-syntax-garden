---
title: "Matrix Operations Follow Component-Wise Rules Except Multiplication"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# Matrix Operations Follow Component-Wise Rules Except Multiplication

The four main operations on matrices are addition, subtraction, scalar multiplication, and matrix multiplication. The first three are straightforward entry-by-entry operations; multiplication is more complex and not commutative.

## Explanation

**Addition / Subtraction:** Defined only for matrices of the same size. Add or subtract corresponding entries: (A ± B)ᵢⱼ = aᵢⱼ ± bᵢⱼ. Properties: commutative (A+B = B+A), associative, zero matrix is additive identity, −A is additive inverse.

**Scalar multiplication:** Multiplying a matrix A by a scalar c scales every entry: (cA)ᵢⱼ = c·aᵢⱼ. Distributes over addition: c(A+B) = cA+cB, (c+d)A = cA+dA, c(dA) = (cd)A.

**Matrix multiplication (AB):** Requires A to be m×n and B to be n×p — the inner dimensions must match. The product is m×p. Entry (AB)ᵢⱼ = Σ aᵢₖ bₖⱼ (dot product of row i of A with column j of B). This is **not** commutative: AB ≠ BA in general.

**Transpose (Aᵀ):** Flips A over its main diagonal — rows become columns. If A is m×n, Aᵀ is n×m. Properties: (Aᵀ)ᵀ = A, (A+B)ᵀ = Aᵀ+Bᵀ, (AB)ᵀ = BᵀAᵀ (note the reversal).

## Key Points

- Addition/subtraction: same dimensions required; entry-wise
- Scalar multiplication: multiply every entry by c
- Matrix multiplication: inner dimensions must match; AB is m×p when A is m×n, B is n×p
- AB ≠ BA — multiplication is not commutative
- Transpose: (AB)ᵀ = BᵀAᵀ (order reverses)

## Example

```
A = [3  2  0]    B = [1  4  2]
    [5  1 -4]        [7 -5  3]

A + B = [4   6   2]       2A = [ 6  4  0]
        [12 -4  -1]            [10  2 -8]

3B - 2A = [3-6   12-4   6-0 ]  = [-3   8   6]
          [21-10 -15-2   9+8]  = [11  -17  17]
```

For multiplication (2×3 times 3×1):
```
[3  2  0] [x]   [3x + 2y + 0z]
[5  1 -4] [y] = [5x + y  - 4z]
           [z]
```

## See Also

- [[matrix-types-and-notation|Matrix Types and Notation]] — dimensions, special matrices
- [[matrix-determinant|Matrix Determinant]] — computed from square matrices
- [[matrix-inverse|Matrix Inverse]] — uses transpose and determinant

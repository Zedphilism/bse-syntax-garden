---
title: "The Augmented Matrix Encodes a Linear System as a Single Compact Array"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# The Augmented Matrix Encodes a Linear System as a Single Compact Array

An **augmented matrix** [A|b] combines the coefficient matrix A and the constant vector b into a single matrix, allowing row operations to be performed directly on the system without re-writing the equations at every step.

## Explanation

Any system of m linear equations in n unknowns AX = b can be represented as:

- **A**: the m×n matrix of coefficients
- **X**: the n×1 column vector of unknowns
- **b**: the m×1 column vector of constants

The augmented matrix is written [A|b] — A with b appended as an extra column, separated by a vertical bar:

```
[a₁₁  a₁₂  … a₁ₙ | b₁]
[a₂₁  a₂₂  … a₂ₙ | b₂]
[ …    …       …  |  … ]
[aₘ₁  aₘ₂  … aₘₙ | bₘ]
```

The motivation is efficiency: when applying elementary row operations (EROs), only the numbers matter — not the variable names. Writing [A|b] removes redundancy. Row operations performed on [A|b] correspond exactly to legal algebraic manipulations of the original system.

The augmented matrix is the starting point for both Gaussian elimination and Gauss-Jordan elimination.

## Key Points

- [A|b] has m rows and n+1 columns
- Column n+1 holds the constants from the right-hand side
- Row operations on [A|b] = legal algebraic steps on the system
- A row of [0  0  …  0 | c] with c ≠ 0 means the system is inconsistent (no solution)
- A row of [0  0  …  0 | 0] indicates a redundant equation (may lead to infinite solutions)

## Example

For the system:
```
 x₁ +  x₂ + 5x₃ =  5
3x₁ − 2x₂ +  x₃ = 10
2x₁ − 4x₂ +  x₃ =  8
```

The augmented matrix is:
```
[1   1   5 |  5]
[3  -2   1 | 10]
[2  -4   1 |  8]
```

This is now ready for Gaussian elimination row operations.

## See Also

- [[system-of-linear-equations-solution-types|System of Linear Equations — Solution Types]] — what the solutions look like
- [[elementary-row-operations|Elementary Row Operations]] — operations applied to augmented matrices
- [[gaussian-elimination|Gaussian Elimination]] — uses augmented matrix as its workspace

---
title: "Gaussian Elimination Reduces a Linear System to Triangular Form for Back-Substitution"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# Gaussian Elimination Reduces a Linear System to Triangular Form for Back-Substitution

**Gaussian elimination** solves a system of linear equations by applying elementary row operations to the augmented matrix to reach row echelon form (REF), then solving for each variable through **back-substitution** from the bottom row upward.

## Explanation

The algorithm proceeds in two phases:

**Phase 1 — Forward elimination (to REF):**
Work column by column from left to right. For each column, pick the current row as the "pivot row" and use the row addition ERO (Rᵢ ← Rᵢ − mᵢⱼ·Rⱼ) to zero out every entry below the pivot. The multiplier is mᵢⱼ = aᵢⱼ/aⱼⱼ. After processing all columns, the matrix is in REF — an upper triangular shape.

**Phase 2 — Back-substitution:**
Start at the bottom row. The last pivot equation has one unknown — solve it. Substitute up to the next row, which now has one unknown, and solve again. Repeat until all variables are determined.

If the system has infinitely many solutions, one or more rows will be all zeros after elimination. The non-leading (free) variables are assigned parameter names (s, t, etc.) and leading variables are expressed in terms of them.

If the system is inconsistent, a row of the form [0 0 … 0 | c] with c ≠ 0 appears — this equation "0 = c" has no solution, and the process stops.

## Key Points

- Convert system to augmented matrix [A|b]
- Apply EROs to reach REF (upper triangular)
- Multiplier: mᵢⱼ = aᵢⱼ/aⱼⱼ (entry to eliminate ÷ current pivot)
- Back-substitute from the last pivot equation upward
- All-zero row → free variable (infinite solutions)
- Row [0…0|c≠0] → inconsistent (no solution)

## Example

Solve: 2x₁ − x₂ + x₃ = 7, 3x₁ + 2x₂ − x₃ = 4, x₁ − 4x₂ + 2x₃ = 1

**Augmented matrix:**
```
[2 -1  1 | 7]
[3  2 -1 | 4]
[1 -4  2 | 1]
```

**R1↔R3, then eliminate below pivot 1:**
After full forward elimination:
```
[1 -4  2 |  1]
[0  2 -1 |  1]
[0  0  3/2 | 9/2]
```

**Back-substitution:**
- From row 3: x₃ = 3
- From row 2: 2x₂ − 3 = 1 → x₂ = 2
- From row 1: x₁ − 4(2) + 2(3) = 1 → x₁ = 1

Solution: x₁ = 1, x₂ = 2, x₃ = 3.

## See Also

- [[augmented-matrix|Augmented Matrix]] — starting representation
- [[elementary-row-operations|Elementary Row Operations]] — the steps applied
- [[row-echelon-form|Row Echelon Form]] — the target of forward elimination
- [[gauss-jordan-elimination|Gauss-Jordan Elimination]] — extends to RREF, avoiding back-substitution

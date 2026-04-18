---
title: "Gauss-Jordan Elimination Produces Reduced Row Echelon Form Without Back-Substitution"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# Gauss-Jordan Elimination Produces Reduced Row Echelon Form Without Back-Substitution

**Gauss-Jordan elimination** extends Gaussian elimination by also zeroing out entries *above* each pivot, in addition to entries below it. The result is the **reduced row echelon form (RREF)** — an identity matrix on the left side of the augmented matrix, with the solution appearing directly on the right.

## Explanation

Gaussian elimination stops at REF (upper triangular) and then uses back-substitution. Gauss-Jordan continues eliminating entries *above* each pivot as well, transforming the coefficient side into the identity matrix I. The solution is then read directly from the last column.

Procedure:
1. Apply forward elimination (same as Gaussian) to reach REF.
2. Scale each pivot row so the pivot equals 1.
3. For each pivot column, also zero out all entries *above* the pivot (not just below).

After step 3, the augmented matrix looks like [I | solution], and the solution vector is immediately readable: x₁ = e₁, x₂ = e₂, …

This is particularly useful for finding **matrix inverses**: apply Gauss-Jordan to [A|I]. If A is invertible, the process transforms [A|I] → [I|A⁻¹].

Compared to Gaussian elimination:
- Gaussian: reaches upper triangular → back-substitute
- Gauss-Jordan: reaches identity → read solution directly
- Gauss-Jordan does more work per step but eliminates the back-substitution phase

## Key Points

- Target: RREF — identity matrix on the coefficient side
- Eliminate entries *above* and *below* each pivot
- Scale pivot rows to make each pivot = 1
- Solution is read directly from the augmented column
- [A|I] → [I|A⁻¹] for computing matrix inverses

## Example

Same system as Gaussian example (after reaching REF):
```
[1 -4  2 |  1]
[0  2 -1 |  1]
[0  0  3/2 | 9/2]
```

Scale row 3: R3 ← (2/3)R3:
```
[0  0  1 | 3]
```
Eliminate above pivot in column 3: R2 ← R2 + R3, R1 ← R1 − 2R3:
```
[1 -4  0 | -5]
[0  2  0 |  4]
[0  0  1 |  3]
```
Scale and eliminate column 2: x₂ = 2 → eliminate above: R1 ← R1 + 4·(R2/2):
```
[1  0  0 | 1]
[0  1  0 | 2]
[0  0  1 | 3]
```
Solution directly: x₁=1, x₂=2, x₃=3.

## See Also

- [[gaussian-elimination|Gaussian Elimination]] — the first phase of this method
- [[row-echelon-form|Row Echelon Form]] — intermediate target (REF), then extended to RREF
- [[matrix-inverse|Matrix Inverse]] — can be computed via [A|I] → [I|A⁻¹]

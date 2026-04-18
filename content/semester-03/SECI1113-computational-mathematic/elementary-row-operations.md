---
title: "Elementary Row Operations Legally Transform a Matrix Without Changing Its Solution"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# Elementary Row Operations Legally Transform a Matrix Without Changing Its Solution

The three **elementary row operations (EROs)** are reversible transformations on the rows of a matrix that preserve the solution set of the corresponding linear system. They are the building blocks of Gaussian and Gauss-Jordan elimination.

## Explanation

The three operations are:

1. **Row swap — Rᵢ ↔ Rⱼ:** Exchange the positions of two rows. Useful for placing a suitable pivot at the top.

2. **Scalar multiplication — c·Rᵢ:** Multiply every entry in row i by a nonzero scalar c. Used to create a pivot of 1 (e.g., divide a row by its leading entry).

3. **Row addition — Rᵢ + c·Rⱼ:** Add c times row j to row i (row j stays unchanged). This is the core elimination step: choosing c = −aᵢⱼ/aⱼⱼ zeros out the entry in position (i, j).

Each operation corresponds to a legitimate algebraic step:
- Swapping equations changes nothing about the system.
- Multiplying an equation by a nonzero scalar is allowed.
- Adding a multiple of one equation to another preserves truth.

Notation conventions used in class: R1↔R2 (swap), 2R1 (scale), R2 + (−3)R1 (add-and-replace).

The **multiplier** for zeroing entry (i,j) is mᵢⱼ = aᵢⱼ/aⱼⱼ (where aⱼⱼ is the current pivot). The update rule is: Rᵢ ← Rᵢ − mᵢⱼ·Rⱼ.

## Key Points

- Three EROs: swap, scale by nonzero constant, add multiple of one row to another
- All three are reversible — they can be undone
- Scale must be **nonzero** (multiplying by 0 destroys information)
- Used to drive entries below (and above, in Gauss-Jordan) each pivot to zero
- Applied to the augmented matrix [A|b], not just A alone

## Example

Starting matrix:
```
[2  1  1 | 7]
[3  2 -1 | 4]
[1 -4  2 | 1]
```

Step 1: R1 ↔ R3 (bring the simplest leading entry to row 1):
```
[1 -4  2 | 1]
[3  2 -1 | 4]
[2  1  1 | 7]
```

Step 2: R2 ← R2 − 3R1 (zero out position (2,1)):
```
[1 -4   2 |  1]
[0  14  -7 |  1]
[2  1   1 |  7]
```

Step 3: R3 ← R3 − 2R1 (zero out position (3,1)):
```
[1 -4  2 |  1]
[0  14 -7 |  1]
[0   9 -3 |  5]
```

Continue until row echelon form is achieved.

## See Also

- [[augmented-matrix|Augmented Matrix]] — the workspace where EROs are applied
- [[row-echelon-form|Row Echelon Form]] — the goal state of applying EROs
- [[gaussian-elimination|Gaussian Elimination]] — systematic ERO application to reach REF

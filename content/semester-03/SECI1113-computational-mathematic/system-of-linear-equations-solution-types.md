---
title: "A System of Linear Equations Has Exactly One, Infinitely Many, or No Solutions"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# A System of Linear Equations Has Exactly One, Infinitely Many, or No Solutions

A finite collection of linear equations sharing the same variables is called a **system of linear equations (SLE)**. Every SLE falls into exactly one of three categories: a unique solution, infinitely many solutions, or no solution. There is no fourth case.

## Explanation

Geometrically (in 2D), each linear equation represents a line. The solution to a system is the intersection of all those lines. Three outcomes follow naturally:

**Unique solution (consistent, independent):** The lines cross at exactly one point. The values at that intersection are the unique solution. Example: x = 3.6, y = 0.4 satisfying both equations simultaneously.

**Infinitely many solutions (consistent, dependent/redundant):** One equation is a multiple of another — the two lines are identical. Every point on the line satisfies both equations, yielding infinitely many solutions.

**No solution (inconsistent):** The lines are parallel and never intersect. No ordered pair satisfies all equations simultaneously. This situation is called inconsistent.

In higher dimensions (3 variables → planes, n variables → hyperplanes) the same three outcomes hold — but now the geometry involves intersections of planes or hyperplanes.

Identifying the solution type before committing to an algorithm matters: Gaussian elimination reveals it automatically through the row-echelon form of the augmented matrix.

## Key Points

- Unique: consistent and independent; one intersection point
- Infinite: consistent and dependent; equations are redundant
- None: inconsistent; no common intersection exists
- The augmented matrix reveals the type: a row `[0 0 0 | c]` with c ≠ 0 means no solution; all-zero rows mean infinitely many solutions

## Example

System 1 (unique): y = 3x − 2 and y = −x − 6 cross at (−1, −5). Verify: 3(−1) − 2 = −5 ✓ and −(−1) − 6 = −5 ✓.

System 2 (infinite): x + y = 3 and 2x + 2y = 6 — the second is 2× the first; any (t, 3−t) is a solution.

System 3 (none): x + y = 3 and x + y = 5 — parallel lines; impossible to satisfy both.

## See Also

- [[linear-equation-definition|Linear Equation Definition]] — what constitutes a single linear equation
- [[augmented-matrix|Augmented Matrix for Systems of Linear Equations]] — how to represent a system in matrix form
- [[gaussian-elimination|Gaussian Elimination]] — the standard algorithm that reveals the solution type

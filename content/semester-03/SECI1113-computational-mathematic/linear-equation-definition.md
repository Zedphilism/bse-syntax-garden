---
title: "A Linear Equation Is a First-Degree Polynomial Relation Between Variables"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# A Linear Equation Is a First-Degree Polynomial Relation Between Variables

A linear equation in variables x₁, x₂, …, xₙ is any equation of the form a₁x₁ + a₂x₂ + … + aₙxₙ = b, where a₁…aₙ are real-number coefficients and b is a constant. Every term involves exactly one variable raised to the first power — no products of variables, no squares.

## Explanation

The word "linear" reflects the geometry: in two variables (ax + by = c), the solution set is a straight line. In three variables, it is a plane. This geometric intuition scales: in n variables the solution set is called a hyperplane.

A **solution** to the equation is an ordered n-tuple (s₁, s₂, …, sₙ) such that substituting sᵢ for each xᵢ makes the equation true. To verify a proposed solution, substitute each value and confirm both sides are equal.

The key restriction is linearity: the coefficients aᵢ are constants (not functions of xᵢ), and no variable appears with an exponent other than 1, inside a function, or multiplied by another variable. This restriction is what makes systems of linear equations tractable via matrix algebra.

## Key Points

- Form: a₁x₁ + a₂x₂ + … + aₙxₙ = b
- Coefficients (aᵢ) and constant (b) are real numbers
- Each variable appears with exponent 1 only — no x², sin(x), x·y, etc.
- A solution must satisfy the equation when substituted in

## Example

Given the equation 2x₁ − 3x₂ = 8:

- Test (1, −2): 2(1) − 3(−2) = 2 + 6 = 8 ✓ → this **is** a solution
- Test (1, 1): 2(1) − 3(1) = 2 − 3 = −1 ≠ 8 → this **is not** a solution

## See Also

- [[system-of-linear-equations-solution-types|System of Linear Equations — Solution Types]] — how multiple equations relate
- [[matrix-types-and-notation|Matrix Types and Notation]] — the matrix form of linear systems
- [[augmented-matrix|Augmented Matrix for Systems of Linear Equations]] — compact representation used for solving

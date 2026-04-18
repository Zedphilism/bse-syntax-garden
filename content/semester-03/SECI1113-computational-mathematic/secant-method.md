---
title: "The Secant Method Approximates the Derivative Using Two Previous Iterates"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# The Secant Method Approximates the Derivative Using Two Previous Iterates

The **secant method** is a root-finding algorithm that approximates Newton's method without requiring the derivative f′(x). It uses a secant line through the two most recent iterates to predict the next approximation. Unlike bisection, it does not require a bracket, but it can diverge.

## Explanation

The iteration formula is derived by drawing a straight line (secant) through the points (xₙ₋₁, f(xₙ₋₁)) and (xₙ, f(xₙ)) and finding where this line crosses the x-axis:

xₙ₊₁ = xₙ − f(xₙ) · (xₙ − xₙ₋₁) / (f(xₙ) − f(xₙ₋₁))

**Algorithm:**
1. Choose two initial guesses x₀ and x₁ (do NOT need opposite-sign function values).
2. Compute xₙ₊₁ using the formula above.
3. Discard the oldest value (xₙ₋₁) and repeat with (xₙ, xₙ₊₁).
4. Stop when |xₙ₊₁ − xₙ| < ε.

**Convergence vs. divergence:** The method may diverge if the initial guesses are poor or if the function has certain shapes (see the graphical "divergence" case). Swapping the two initial guesses sometimes changes the behaviour from divergent to convergent.

The secant method is faster than bisection but slower than Newton's. It requires two function evaluations per iteration (Newton's requires one f and one f′).

## Key Points

- Formula: xₙ₊₁ = xₙ − f(xₙ)·(xₙ − xₙ₋₁) / (f(xₙ) − f(xₙ₋₁))
- Two initial guesses required; no sign-change condition
- Uses finite difference to approximate the derivative
- Can diverge — no convergence guarantee unlike bisection
- Swapping initial guesses may fix divergence
- Stop when |xₙ₊₁ − xₙ| < ε

## Example

Solve f(x) = sin(x) + 3x − eˣ with x₀ = 1, x₁ = 0 (3 decimal places).

Iteration 1:
x₂ = x₁ − f(x₁)·(x₁−x₀)/(f(x₁)−f(x₀))

Continue iterating until |xₙ₊₁ − xₙ| < 0.0005.

For f(x) = eˣ − x², x₀ = −1, x₁ = 0, ε = 0.0005: root ≈ −0.704.

## See Also

- [[newton-raphson-method|Newton-Raphson Method]] — requires f′(x) but converges faster
- [[bisection-method|Bisection Method]] — slower but guaranteed to converge
- [[convergence-criteria|Convergence Criteria]] — stopping rules applied to both methods
- [[intermediate-value-theorem|Intermediate Value Theorem]] — NOT required for secant method

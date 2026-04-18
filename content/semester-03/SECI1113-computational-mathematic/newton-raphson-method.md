---
title: "Newton-Raphson Uses the Tangent Line at Each Iterate to Quickly Find Function Roots"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# Newton-Raphson Uses the Tangent Line at Each Iterate to Quickly Find Function Roots

The **Newton-Raphson method** (Newton's method) finds roots of f(x) = 0 by repeatedly following the tangent line to the curve at the current estimate until it intersects the x-axis. It converges faster than bisection or secant methods but requires f′(x) and can diverge with poor initial guesses.

## Explanation

**Iteration formula:**
xₙ₊₁ = xₙ − f(xₙ) / f′(xₙ),   n = 0, 1, 2, …

Starting from an initial estimate x₀ near the root, draw the tangent at (x₀, f(x₀)). The tangent crosses the x-axis at x₁ — use this as the next estimate. Repeat until |xₙ₊₁ − xₙ| < ε.

**Why it works:** The tangent line at xₙ is: y − f(xₙ) = f′(xₙ)(x − xₙ). Setting y = 0 gives xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ).

**Limitations:**
- If f′(xₙ) = 0 (flat tangent): the formula divides by zero — method fails at that point.
- If the initial guess is far from the root, the method may diverge.
- Complex functions may have f′ that is difficult to derive analytically.

**Special use — finding square roots:** To find √c, solve x² − c = 0. f(x) = x² − c, f′(x) = 2x. Newton's formula becomes xₙ₊₁ = xₙ − (xₙ² − c)/(2xₙ) = (xₙ + c/xₙ)/2. This is the Babylonian method.

## Key Points

- Formula: xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)
- Requires derivative f′(x)
- Quadratic convergence near the root (fastest among common methods)
- Can diverge if x₀ is far from root or if f′(xₙ) ≈ 0
- Special case: √c via f(x) = x² − c → xₙ₊₁ = (xₙ + c/xₙ)/2

## Example

Solve f(x) = x³ − 2x² − 5, x₀ = 2, ε = 0.0005 (hint: root ≈ 2.691).

f′(x) = 3x² − 4x

Iteration 1: f(2) = 8−8−5 = −5; f′(2) = 12−8 = 4
x₁ = 2 − (−5)/4 = 2 + 1.25 = **3.25**

Iteration 2: f(3.25) ≈ 34.33−21.125−5 = 8.205; f′(3.25) ≈ 31.6875−13 = 18.6875
x₂ = 3.25 − 8.205/18.69 ≈ **2.811**

Continue until |xₙ₊₁ − xₙ| < 0.0005. Root converges to ≈ 2.691.

## See Also

- [[secant-method|Secant Method]] — avoids needing f′ by approximating it
- [[bisection-method|Bisection Method]] — no derivative needed; guaranteed convergence
- [[convergence-criteria|Convergence Criteria]] — stopping rules
- [[intermediate-value-theorem|Intermediate Value Theorem]] — useful for choosing x₀ near the root

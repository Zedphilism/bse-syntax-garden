---
title: "Convergence Criteria Define When an Iterative Method Is Close Enough to the True Root"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# Convergence Criteria Define When an Iterative Method Is Close Enough to the True Root

A **convergence criterion** is a stopping rule for iterative root-finding methods. Since these methods generate successive approximations rather than exact answers, a criterion specifies when the approximation is "good enough" — usually when the function value or the change between successive iterates falls below a tolerance ε.

## Explanation

There are two common stopping conditions:

**Criterion 1 — Function value:** Stop when |f(xₖ)| < ε. The iterate xₖ makes the function close enough to zero.

**Criterion 2 — Successive difference:** Stop when |xₖ − xₖ₊₁| < ε. Two consecutive approximations are close enough to each other.

For the **bisection method** specifically, the number of iterations required to achieve accuracy ε can be calculated in advance:
(b − a) / 2ⁿ ≤ ε → n ≥ log₂((b − a)/ε)

This formula determines the minimum number of iterations needed before the interval is small enough. This criterion can also detect divergence: if no root exists in the interval, the method will never converge, and the iteration count bound prevents infinite looping.

Choosing ε too loosely gives an inaccurate root; choosing it too tight increases computation. Common choices: ε = 0.001 for 3 d.p., ε = 0.0001 for 4 d.p.

For methods without a guaranteed bracket (Newton's, secant), convergence is not guaranteed — divergence can occur with poor initial guesses, and convergence criteria help detect this by monitoring whether successive changes are decreasing.

## Key Points

- Two criteria: |f(xₖ)| < ε (function value) or |xₖ − xₖ₊₁| < ε (successive difference)
- Bisection iteration count: n ≥ log₂((b−a)/ε)
- ε must match desired decimal accuracy: ε = 0.5 × 10⁻ᵈ for d decimal places
- Convergence criteria also detect methods that are not converging
- Without convergence guarantee (Newton/secant), monitor whether errors are shrinking

## Example

For bisection on [0, 1] to 2 decimal places: ε = 0.5 × 10⁻² = 0.005.

Required iterations: (1−0)/2ⁿ ≤ 0.005 → 2ⁿ ≥ 200 → n ≥ 7.64 → **at least 8 iterations**.

For Newton's method on f(x) = x³ − 2x² − 5 with ε = 0.0005:
Stop when |xₖ₊₁ − xₖ| < 0.0005. From x₀ = 2, typically converges in 4–5 iterations.

## See Also

- [[bisection-method|Bisection Method]] — guaranteed convergence; uses the iteration-count formula
- [[newton-raphson-method|Newton-Raphson Method]] — fast but no convergence guarantee
- [[secant-method|Secant Method]] — no bracket required; uses successive-difference criterion

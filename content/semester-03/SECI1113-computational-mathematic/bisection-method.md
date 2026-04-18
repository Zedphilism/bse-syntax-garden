---
title: "The Bisection Method Finds a Root by Halving a Bracketed Interval Repeatedly"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# The Bisection Method Finds a Root by Halving a Bracketed Interval Repeatedly

The **bisection method** is a bracketing algorithm for finding roots of nonlinear equations. Given an interval [a, b] containing a root (verified by the Intermediate Value Theorem), it repeatedly halves the interval by computing the midpoint c = (a+b)/2 and replacing the endpoint that has the same sign as f(c).

## Explanation

**Algorithm:**
1. Verify: f(a)·f(b) < 0 (IVT satisfied — root exists in [a,b]).
2. Compute midpoint: c = (a + b) / 2.
3. If f(c) = 0 (or |f(c)| < ε): c is the root — stop.
4. Otherwise:
   - If f(a)·f(c) < 0: root is in [a, c] → set b = c.
   - If f(b)·f(c) < 0: root is in [c, b] → set a = c.
5. Repeat steps 2–4 until the convergence criterion is met.

Each iteration halves the interval, so the method is guaranteed to converge. After n iterations, the root is known to within (b−a)/2ⁿ.

**Determining number of iterations:** To reach accuracy ε, solve (b−a)/2ⁿ ≤ ε, giving n ≥ log₂((b−a)/ε). Equivalently, the formula b−a ≤ ε·2ⁿ can be used.

The bisection method is robust and always converges, but it is slower than Newton's or secant methods. It requires f(a) and f(b) to have opposite signs — it cannot find roots where the function merely touches zero (tangential roots).

## Key Points

- Prerequisite: IVT must hold (f(a)·f(b) < 0)
- Midpoint formula: c = (a + b) / 2
- New interval: whichever half bracket contains the root
- Error after n steps: (b−a)/2ⁿ
- Required iterations for accuracy ε: n ≥ log₂((b−a)/ε)
- Always converges but slower than Newton/secant methods

## Example

Find root of f(x) = x³ − 3x² + 8x − 5 in [0, 1] to 2 decimal places (ε = 0.005).

IVT: f(0) = −5, f(1) = 1+8−3−5 = 1 → f(0)·f(1) = −5 < 0 ✓

Minimum iterations: (1−0)/2ⁿ ≤ 0.005 → 2ⁿ ≥ 200 → n ≥ 8.

Step 1: c = 0.5. f(0.5) = 0.125−0.75+4−5 = −1.625 < 0 → root in [0.5, 1].
Step 2: c = 0.75. f(0.75) < 0 → root in [0.75, 1].
Continue halving until |b−a| ≤ 0.005.

## See Also

- [[intermediate-value-theorem|Intermediate Value Theorem]] — prerequisite that must hold
- [[convergence-criteria|Convergence Criteria for Iterative Methods]] — stopping conditions
- [[secant-method|Secant Method]] — faster alternative that does not require a bracket
- [[newton-raphson-method|Newton-Raphson Method]] — fastest convergence when derivative is available

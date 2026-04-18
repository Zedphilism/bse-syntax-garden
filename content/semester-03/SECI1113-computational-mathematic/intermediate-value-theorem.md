---
title: "The Intermediate Value Theorem Guarantees a Root Exists When a Function Changes Sign"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# The Intermediate Value Theorem Guarantees a Root Exists When a Function Changes Sign

The **Intermediate Value Theorem (IVT)** states that if f(x) is continuous on [a, b] and f(a) and f(b) have opposite signs, then at least one root (value of x where f(x) = 0) exists in the open interval (a, b). This is the prerequisite check before applying bracketing root-finding methods.

## Explanation

Formally: if f is continuous on [a, b] and f(a)·f(b) < 0 (opposite signs), then there exists at least one c ∈ (a, b) such that f(c) = 0.

The condition f(a)·f(b) < 0 is the sign-change test — multiply the function values at the endpoints. If the product is negative, they have opposite signs, and the theorem guarantees a root.

If f(a)·f(b) > 0 (same sign), the IVT gives no guarantee — there may be zero roots, two roots, or an even number of roots in [a, b]. You cannot conclude there is no root just because both values are the same sign; you can only conclude you cannot guarantee a root using IVT alone.

If f(a)·f(b) = 0, one of the endpoints is itself a root — you're done.

The theorem is an *existence* theorem: it says a root exists but does not tell you its location or how many roots there are. Numerical methods (bisection, secant, Newton's) then find the actual value.

## Key Points

- f must be continuous on [a, b]
- f(a)·f(b) < 0 → at least one root exists in (a, b)
- f(a)·f(b) > 0 → cannot conclude from IVT alone (may or may not have roots)
- f(a)·f(b) = 0 → endpoint is already a root
- IVT only guarantees existence — use a numerical method to locate the root

## Example

For f(x) = x² + 2x − 1, check for roots:

Interval [−1, 0]: f(−1) = 1 − 2 − 1 = −2; f(0) = −1. Both negative → f(−1)·f(0) = 2 > 0 → **no IVT guarantee** (no sign change).

Interval [0, 1]: f(0) = −1; f(1) = 1+2−1 = 2. Opposite signs → f(0)·f(1) = −2 < 0 → **at least one root exists** in (0, 1).

Interval [1, 2]: f(1) = 2; f(2) = 4+4−1 = 7. Both positive → f(1)·f(2) = 14 > 0 → **no IVT guarantee**.

## See Also

- [[bisection-method|Bisection Method]] — bracketing method that requires IVT to be satisfied first
- [[convergence-criteria|Convergence Criteria for Iterative Methods]] — stopping rule for bisection
- [[numerical-error-types|Numerical Error Types]] — error in the located root value

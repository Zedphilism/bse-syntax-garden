---
title: "The Trapezoidal Rule Approximates a Definite Integral by Summing Trapezoid Areas"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# The Trapezoidal Rule Approximates a Definite Integral by Summing Trapezoid Areas

The **trapezoidal rule** approximates ∫ₐᵇ f(x) dx by dividing the interval [a, b] into N equally spaced subintervals, approximating f(x) on each subinterval by a straight line, and summing the areas of the resulting trapezoids.

## Explanation

**Setup:** Divide [a, b] into N segments with step size h = (b−a)/N. Nodes: x₀ = a, x₁ = a+h, …, xₙ = b.

On each subinterval [xₖ, xₖ₊₁], approximate the area under f(x) by a trapezoid with parallel sides f(xₖ) and f(xₖ₊₁):
Area of one trapezoid = (h/2)[f(xₖ) + f(xₖ₊₁)]

Sum all N trapezoids and simplify. Interior points are counted twice (once for the right side of one trapezoid and once for the left side of the next):

∫ₐᵇ f(x) dx ≈ (h/2)[f(x₀) + 2f(x₁) + 2f(x₂) + … + 2f(xₙ₋₁) + f(xₙ)]

Equivalently: (h/2)[f₀ + fₙ + 2·Σₖ₌₁ᴺ⁻¹ fₖ]

**Accuracy:** The trapezoidal rule has O(h²) error per subinterval — reducing h (using more subintervals) improves accuracy. The global error is O(h²), i.e., halving h reduces error by a factor of 4.

**Why numerical integration?** Some integrals have no closed-form anti-derivative (e.g., ∫e^(−x²) dx). Others are defined only at discrete experimental points, making analytic integration impossible.

## Key Points

- Formula: ∫ₐᵇ f(x) dx ≈ (h/2)[f₀ + fₙ + 2(f₁ + f₂ + … + fₙ₋₁)]
- h = (b−a)/N; N+1 equally spaced nodes
- Error order: O(h²) per step; decreasing h improves accuracy
- Interior nodes weighted by 2; endpoints weighted by 1
- Works even when f(x) is only known at discrete points (no formula needed)

## Example

Approximate ∫₁⁴ x/(x−4) dx with h = 0.5.

Step 1: N = (4−1)/0.5 = 6. Nodes: 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0. Compute f(xᵢ) = xᵢ/(xᵢ−4) at each node.

Step 2: Apply trapezoidal formula:
≈ (0.5/2)[f(1) + f(4) + 2(f(1.5)+f(2)+f(2.5)+f(3)+f(3.5))]

With h = 0.25 (N = 12), the answer ≈ **2.8918** (vs. exact value 2.8925 — more accurate with smaller h).

## See Also

- [[numerical-error-types|Numerical Error Types]] — truncation error in the trapezoidal rule
- [[simpsons-rule|Simpson's Rule]] — higher-accuracy alternative using parabolas instead of lines
- [[numerical-differentiation-finite-differences|Finite Difference Formulas]] — complementary operation to integration

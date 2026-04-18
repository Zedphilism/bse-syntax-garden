---
title: "Simpson's Rule Achieves Higher Integration Accuracy by Fitting Parabolas to Data Subsets"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# Simpson's Rule Achieves Higher Integration Accuracy by Fitting Parabolas to Data Subsets

**Simpson's Rule** (also called Simpson's 1/3 Rule) approximates ∫ₐᵇ f(x) dx by fitting a parabola through every three consecutive equally-spaced points and integrating the parabola exactly. It achieves O(h⁴) accuracy — much better than the trapezoidal rule's O(h²).

## Explanation

**Setup:** Divide [a, b] into N subintervals (N must be **even**) with step h = (b−a)/N. Nodes: x₀ = a, x₁, x₂, …, xₙ = b.

On each pair of subintervals [xₖ, xₖ₊₂], fit a parabola through (xₖ, fₖ), (xₖ₊₁, fₖ₊₁), (xₖ₊₂, fₖ₊₂) and integrate exactly:

(h/3)[fₖ + 4fₖ₊₁ + fₖ₊₂]

Sum all N/2 pairs to get the composite Simpson's rule:

∫ₐᵇ f(x) dx ≈ (h/3)[f₀ + 4f₁ + 2f₂ + 4f₃ + 2f₄ + … + 4fₙ₋₁ + fₙ]

Pattern: first and last coefficients are 1, interior coefficients alternate 4, 2, 4, 2, …, 4.

**Compared to trapezoidal rule:** The trapezoidal rule uses straight lines (O(h²) error); Simpson's rule uses parabolas (O(h⁴) error). Halving h reduces Simpson's error by a factor of 16 vs. factor of 4 for trapezoidal.

**N must be even:** Simpson's rule processes subintervals in pairs, so the number of subintervals must be even (equivalently, the number of nodes N+1 must be odd).

## Key Points

- Formula: (h/3)[f₀ + 4f₁ + 2f₂ + 4f₃ + … + 4fₙ₋₁ + fₙ]
- Coefficients: 1, 4, 2, 4, 2, …, 4, 1 (interior alternates 4, 2)
- N must be even; uses parabolic fit over each pair of subintervals
- Error order: O(h⁴) — significantly more accurate than trapezoidal O(h²)
- Sum of all coefficients = 1·(N/3) rule-check

## Example

Approximate ∫₀¹ eˣ dx with N = 4 (h = 0.25). Nodes: 0, 0.25, 0.5, 0.75, 1.

f values: f₀ = e⁰ = 1, f₁ = e⁰·²⁵ ≈ 1.2840, f₂ = e⁰·⁵ ≈ 1.6487, f₃ = e⁰·⁷⁵ ≈ 2.1170, f₄ = e¹ ≈ 2.7183.

Simpson's ≈ (0.25/3)[1 + 4(1.2840) + 2(1.6487) + 4(2.1170) + 2.7183]
= (1/12)[1 + 5.1360 + 3.2974 + 8.4680 + 2.7183]
= (1/12)[20.6197] ≈ **1.7183**

Exact value: e¹ − e⁰ = e − 1 ≈ 1.7183 ✓ (extremely accurate even with just 4 subintervals).

## See Also

- [[trapezoidal-rule|Trapezoidal Rule]] — simpler but less accurate integration formula
- [[numerical-error-types|Numerical Error Types]] — O(h⁴) error context
- [[interpolation-definition|Interpolation]] — Simpson's rule fits a degree-2 interpolating polynomial over each triple of points

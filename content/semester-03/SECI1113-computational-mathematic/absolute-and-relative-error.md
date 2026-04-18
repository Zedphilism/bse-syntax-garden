---
title: "Relative Error Is a More Reliable Accuracy Measure Than Absolute Error Alone"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# Relative Error Is a More Reliable Accuracy Measure Than Absolute Error Alone

Given a true (exact) value N and an approximation n, the **absolute error** is |N − n| and the **relative error** is |N − n|/|N|. While absolute error measures the raw gap, relative error contextualises it against the magnitude of the true value — making it a better indicator of approximation quality.

## Explanation

**Error (signed):** ε = N − n. The sign is rarely important, so the **absolute (modulus) error** |e| = |N − n| is preferred — it is always non-negative.

**Relative error:**
eᵣₑₗ = |N − n| / |N| = |e| / |N|

When the exact value N is unknown (common in practice), the denominator is replaced by the approximate value n:
eᵣₑₗ ≈ |N − n| / |n|

**Why relative error matters:** A raw error of 4 is small if the quantity is 1,000,000 (relative error 0.000004 = 0.0004%) but large if the quantity is 0.000012 (relative error 0.25 = 25%). Absolute error alone is misleading when the magnitude of the true value is very large or very small.

**Maximum rounding error:** If a number is rounded to n decimal places, the absolute error satisfies |e| ≤ 1/(2 × 10ⁿ) and the relative error satisfies eᵣₑₗ ≤ 1/(2 × 10ⁿ).

## Key Points

- Absolute error: |e| = |N − n|; always non-negative
- Relative error: eᵣₑₗ = |N − n| / |N|; scale-independent
- Rounding to n decimal places: |e| ≤ 0.5 × 10⁻ⁿ
- When |N| is far from 1 (very large or small), relative error is far more informative
- Percentage relative error = eᵣₑₗ × 100%

## Example

True value of π ≈ 3.1415926535898, approximation = 3.14:

Absolute error: |3.1415926… − 3.14| = **0.0015927**

Relative error: 0.0015927 / 3.1415927 ≈ **0.000507** (about 0.05%)

Contrast: N = 1,000,000, n = 999,996 → |e| = 4 but eᵣₑₗ = 4/1,000,000 = 0.000004 (very good).
N = 0.000012, n = 0.000009 → |e| = 0.000003 (tiny!) but eᵣₑₗ = 0.25 = **25%** (terrible).

## See Also

- [[numerical-error-types|Numerical Error Types]] — where errors originate
- [[rounding-error-propagation|Rounding Error Propagation in Arithmetic]] — how errors combine in operations
- [[convergence-criteria|Convergence Criteria for Iterative Methods]] — relative error used as stopping criterion

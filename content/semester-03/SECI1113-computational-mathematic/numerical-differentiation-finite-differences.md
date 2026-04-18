---
title: "Finite Difference Formulas Approximate Derivatives Using Nearby Function Values"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# Finite Difference Formulas Approximate Derivatives Using Nearby Function Values

**Numerical differentiation** estimates derivatives of f(x) at a point using values of f at nearby discrete points — without requiring a symbolic formula for f′. These **finite difference formulas** are derived from Taylor series expansions and differ in accuracy and direction.

## Explanation

All formulas are derived from the Taylor expansion of f(xᵢ ± h):

f(xᵢ + h) = f(xᵢ) + hf′(xᵢ) + (h²/2!)f″(xᵢ) + …

Rearranging to isolate f′(xᵢ) and truncating gives different formulas with different orders of accuracy (error proportional to h or h²).

**2-point formulas (O(h) accuracy):**

Forward difference:
f′(xᵢ) ≈ [f(xᵢ + h) − f(xᵢ)] / h = [f(xᵢ₊₁) − f(xᵢ)] / h

Backward difference:
f′(xᵢ) ≈ [f(xᵢ) − f(xᵢ − h)] / h = [f(xᵢ) − f(xᵢ₋₁)] / h

**3-point formulas (O(h²) accuracy — more accurate):**

Forward 3-point:
f′(xᵢ) ≈ [−3f(xᵢ) + 4f(xᵢ+h) − f(xᵢ+2h)] / (2h)

Backward 3-point:
f′(xᵢ) ≈ [f(xᵢ−2h) − 4f(xᵢ−h) + 3f(xᵢ)] / (2h)

Central 3-point (most accurate per formula):
f′(xᵢ) ≈ [f(xᵢ+h) − f(xᵢ−h)] / (2h)

**5-point formulas (O(h⁴) accuracy):** Available for even higher precision; use 5 data points.

The central difference formula is generally preferred when data on both sides of xᵢ is available, as it has O(h²) accuracy vs. O(h) for one-sided formulas. However, at the boundaries of the data, only forward or backward formulas can be used.

## Key Points

- All formulas derived from Taylor series by rearrangement and truncation
- Forward: uses f(xᵢ) and f(xᵢ+h) — for left boundary points
- Backward: uses f(xᵢ) and f(xᵢ−h) — for right boundary points
- Central: uses f(xᵢ+h) and f(xᵢ−h) — most accurate, for interior points
- 3-point formulas are O(h²); 2-point are O(h); 5-point are O(h⁴)
- Errors are amplified by differentiation — use data carefully

## Example

Data: x ∈ {1.00, 1.05, 1.10, 1.15, 1.20}, h = 0.05. Estimate f′(1.05).

2-point forward: f′(1.05) ≈ (f(1.10) − f(1.05)) / 0.05 = (1.04881 − 1.02470)/0.05 = **0.4822**

2-point backward: f′(1.05) ≈ (f(1.05) − f(1.00)) / 0.05 = (1.02470 − 1.00000)/0.05 = **0.4940**

(Actual value: f(x) = √x, f′(1.05) = 1/(2√1.05) ≈ 0.4879 — central formula would be closer.)

## See Also

- [[numerical-error-types|Numerical Error Types]] — truncation error dominates finite difference accuracy
- [[trapezoidal-rule|Trapezoidal Rule]] — numerical integration, the complement to differentiation
- [[interpolation-definition|Interpolation]] — difference tables used in both interpolation and differentiation

---
title: "Newton Backward-Difference Formula Interpolates Using Differences Anchored at the Table End"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# Newton Backward-Difference Formula Interpolates Using Differences Anchored at the Table End

The **Newton Backward-Difference Formula** constructs an interpolating polynomial using backward differences anchored at the last row of an equally-spaced data table. It is most accurate when estimating values near the end of the table.

## Explanation

For equally spaced data with step h, the backward difference operator ∇ is defined as:
- ∇⁰yₖ = yₖ
- ∇¹yₖ = yₖ − yₖ₋₁
- ∇²yₖ = ∇¹yₖ − ∇¹yₖ₋₁ = yₖ − 2yₖ₋₁ + yₖ₋₂
- ∇ʲyₖ = ∇ʲ⁻¹yₖ − ∇ʲ⁻¹yₖ₋₁

Build the **backward-difference table** — differences for the last row are ∇yₙ, ∇²yₙ, …, ∇ⁿyₙ.

**Formula (for x near the end):**
Let r = (x − xₙ)/h (r will be negative or small when x is near xₙ). Then:

pₙ(x) = yₙ + r·∇yₙ + [r(r+1)/2!]·∇²yₙ + [r(r+1)(r+2)/3!]·∇³yₙ + …

**Key difference from forward formula:** The reference point is xₙ (last data point), and the sign of the binomial coefficients differs: the forward formula uses r(r−1), the backward uses r(r+1).

Use backward difference when the target x is near the **end** of the data table. The forward formula would require differences far from the reference row, reducing accuracy.

## Key Points

- Requires equally spaced x-values; reference point is xₙ (last point)
- Backward difference: ∇yₖ = yₖ − yₖ₋₁ (subtract previous from current)
- r = (x − xₙ) / h (typically negative when x is between xₙ₋₁ and xₙ)
- Formula uses the bottom row of the difference table: yₙ, ∇yₙ, ∇²yₙ, …
- Best for x near the **end** of the table

## Example

Same data: x ∈ {1.0, 1.2, 1.4, 1.6, 1.8, 2.0}, h = 0.2. Estimate y(1.9).

Reference point: xₙ = x₅ = 2.0, yₙ = 0.3333.

r = (1.9 − 2.0)/0.2 = **−0.5**

Bottom row of backward-difference table: ∇y₅ = −0.0238, ∇²y₅ = 0.0037, ∇³y₅ = −0.0009, …

p₅(1.9) = 0.3333 + (−0.5)(−0.0238) + [(−0.5)(0.5)/2](0.0037) + …
= 0.3333 + 0.0119 − 0.000463 + …
≈ **0.3571**

## See Also

- [[newton-forward-difference-interpolation|Newton Forward-Difference Interpolation]] — for values near the beginning of the table
- [[interpolation-definition|Interpolation Definition]] — choosing which formula to use
- [[absolute-and-relative-error|Absolute and Relative Error]] — comparing interpolated vs. true values

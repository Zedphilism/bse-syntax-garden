---
title: "Newton Forward-Difference Formula Interpolates Using Cumulative Differences From the Table Start"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# Newton Forward-Difference Formula Interpolates Using Cumulative Differences From the Table Start

The **Newton Forward-Difference Formula** constructs an interpolating polynomial using forward differences built from the first entry of an equally-spaced data table. It is most accurate when estimating values near the beginning or middle of the table.

## Explanation

**Equally spaced data** means xₖ₊₁ − xₖ = h (constant step size h) for all k.

**Forward difference notation:** Each level Δʲyₖ is defined recursively:
- Δ⁰yₖ = yₖ
- Δ¹yₖ = yₖ₊₁ − yₖ
- Δ²yₖ = Δ¹yₖ₊₁ − Δ¹yₖ
- Δʲyₖ = Δʲ⁻¹yₖ₊₁ − Δʲ⁻¹yₖ

Build a **forward-difference table** by computing all these differences column by column.

**Formula (for x near the start):**
Let r = (x − x₀)/h. Then:

pₙ(x) = y₀ + r·Δy₀ + [r(r−1)/2!]·Δ²y₀ + [r(r−1)(r−2)/3!]·Δ³y₀ + …

**Reference point x₀:** Choose the xₖ with the highest-order difference available (typically the first row when estimating near the beginning). Compute r = (x − x₀)/h.

The more difference levels included (up to Δⁿy₀), the more accurate the polynomial.

## Key Points

- Requires equally spaced x-values with step h
- Build forward-difference table: Δyₖ = yₖ₊₁ − yₖ; Δ²yₖ = Δyₖ₊₁ − Δyₖ; etc.
- Reference point: choose x₀ with the most available differences (first data point for forward formula)
- r = (x − x₀) / h
- Formula uses row 0 of the difference table: y₀, Δy₀, Δ²y₀, …
- Best for x near the **beginning** (or middle) of the table

## Example

Data: x ∈ {1.0, 1.2, 1.4, 1.6, 1.8, 2.0}, h = 0.2. Estimate y(1.1).

Forward-difference table (first row): y₀ = 0.5000, Δy₀ = −0.0455, Δ²y₀ = 0.0077, Δ³y₀ = −0.0020, Δ⁴y₀ = 0.0009, Δ⁵y₀ = −0.0007.

r = (1.1 − 1.0)/0.2 = **0.5**

p₅(1.1) = 0.5000 + (0.5)(−0.0455) + [(0.5)(−0.5)/2](0.0077) + [(0.5)(−0.5)(−1.5)/6](−0.0020) + …
= 0.5000 − 0.02275 − 0.0009625 − 0.000125 − 0.0000352 − 0.0000191
≈ **0.4761**

## See Also

- [[interpolation-definition|Interpolation Definition]] — what interpolation is and when to use it
- [[newton-backward-difference-interpolation|Newton Backward-Difference Interpolation]] — used near the end of the table
- [[absolute-and-relative-error|Absolute and Relative Error]] — comparing p(x) to the actual function value

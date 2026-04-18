---
title: "Interpolation Constructs a Function That Passes Exactly Through Known Data Points"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# Interpolation Constructs a Function That Passes Exactly Through Known Data Points

**Interpolation** is the process of finding a polynomial p(x) that passes exactly through a given set of data points {(x₀, y₀), (x₁, y₁), …, (xₙ, yₙ)}. This polynomial is then used to estimate function values at intermediate points not in the original data.

## Explanation

In many applications, a function is known only at a finite set of discrete points — from measurements, experiments, or other numerical methods. Interpolation fills the gaps by fitting a polynomial of degree at most n through n+1 points.

**The polynomial interpolation problem:** Given n+1 data pairs (xₖ, yₖ) for k = 0, 1, …, n (with all xₖ distinct), find a polynomial pₙ(x) of degree ≤ n such that pₙ(xₖ) = yₖ for all k. This polynomial is unique.

**Why interpolate?**
- Estimate y(1.1) when you only have data at 1.0, 1.2, 1.4, …
- Approximate a function between experimental data points
- Build a smooth curve through tabulated values

**Methods covered in SECI1113:**
- Newton Forward-Difference Formula — best for estimating near the beginning/centre of the data
- Newton Backward-Difference Formula — best for estimating near the end of the data
- Newton Divided-Difference Formula — works for non-equally spaced data
- Lagrange Interpolation — compact formula, no difference table needed
- Least-Squares Approximation — does NOT pass through every point; minimises total error

## Key Points

- Interpolation: polynomial passes EXACTLY through all data points
- Approximation (least squares): minimises error but does NOT pass through all points
- n+1 data points → unique polynomial of degree ≤ n
- x-values must be distinct; uniform spacing required for Newton forward/backward formulas
- Use forward-difference for points near the start, backward-difference for points near the end

## Example

Given data:
| k | xₖ  | yₖ     |
|---|-----|--------|
| 0 | 1.0 | 0.5000 |
| 1 | 1.2 | 0.4545 |
| 2 | 1.4 | 0.4167 |
| 3 | 1.6 | 0.3846 |
| 4 | 1.8 | 0.3571 |
| 5 | 2.0 | 0.3333 |

Estimate y(1.1): x = 1.1 is near the beginning of the table → use Newton Forward-Difference formula starting from x₀ = 1.0.

Estimate y(1.9): x = 1.9 is near the end → use Newton Backward-Difference formula starting from x₅ = 2.0.

## See Also

- [[newton-forward-difference-interpolation|Newton Forward-Difference Interpolation]] — formula for data near the table start
- [[newton-backward-difference-interpolation|Newton Backward-Difference Interpolation]] — formula for data near the table end
- [[absolute-and-relative-error|Absolute and Relative Error]] — measuring interpolation accuracy against known values

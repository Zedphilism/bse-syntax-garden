---
title: "Numerical Errors Arise from Data Limitations, Truncation, and Floating-Point Rounding"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# Numerical Errors Arise from Data Limitations, Truncation, and Floating-Point Rounding

In computational mathematics, the answer computed by a numerical method differs from the true mathematical answer. This gap is called **error** and arises from three distinct sources: data imprecision, truncation of infinite series, and floating-point rounding.

## Explanation

**Mistake vs. Error:** A *mistake* is a human blunder or machine malfunction — avoidable and correctable. An *error* is an inherent approximation introduced by the calculation method itself — it cannot be fully eliminated but can be controlled.

**Three types of error:**

**Data error:** The input values themselves are approximations — measured quantities rounded to a certain number of decimal places. Every measurement carries this limitation.

**Truncation error (method error):** Numerical methods often derive from infinite series (like Taylor series). Only a finite number of terms can be used in computation; the discarded remainder is the truncation error. This is sometimes called *method error*.

**Rounding error:** Computers represent numbers with finite precision. When an infinite or long decimal is stored at limited precision, the difference between the stored value and the true value is rounding error. Example: 1.6777…7 rounded to 4 decimal places becomes 1.6778.

These errors can accumulate and interact. A method is considered **stable** if small input changes lead to proportionally small output changes; **convergent** if repeated iterations approach the true answer.

## Key Points

- Mistake: human or machine blunder; avoidable
- Data error: input values are only approximations (measurement precision)
- Truncation/method error: using finite terms from an infinite mathematical series
- Rounding error: floating-point storage truncates infinite decimals
- Stability: small perturbations produce small errors; convergence: iterations approach truth

## Example

Integration of a polynomial like ∫ 2x³ dx is exact (analytical). But ∫ dx/(1 + sin²(x)) has no closed-form anti-derivative — a numerical method must be used, and every such method introduces truncation error by approximating the integral.

For rounding: 3.141592 rounded to 2 decimal places gives 3.14. The rounding error is 3.141592 − 3.14 = 0.001592.

## See Also

- [[absolute-and-relative-error|Absolute and Relative Error]] — quantifying how large the error is
- [[rounding-error-propagation|Rounding Error Propagation in Arithmetic]] — how errors add up in calculations
- [[convergence-criteria|Convergence Criteria for Iterative Methods]] — stopping rules that bound the error

---
title: "Rounding Errors in Addition and Subtraction Accumulate as the Sum of Individual Errors"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# Rounding Errors in Addition and Subtraction Accumulate as the Sum of Individual Errors

When approximate numbers n₁ and n₂ (with errors e₁ and e₂) are added or subtracted, the error in the result is at most |e₁| + |e₂|. This means errors from all operands contribute to the final error — and the contribution grows with the number of operations.

## Explanation

Let N₁ and N₂ be exact values with approximations n₁ and n₂, where e₁ = N₁ − n₁ and e₂ = N₂ − n₂.

For addition: N₃ = N₁ + N₂, n₃ = n₁ + n₂.
Error in result: e₃ = N₃ − n₃ = (N₁+N₂) − (n₁+n₂) = e₁ + e₂

Modulus error: |e₃| ≤ |e₁| + |e₂| (triangle inequality)

For subtraction: e₃ = e₁ − e₂, but |e₃| ≤ |e₁| + |e₂| still bounds the error.

**General rule:** The modulus error of a sum or difference of values is at most the sum of the individual modulus errors.

**Best approximate value:** When combining numbers rounded to different decimal places, find the total error bound |e|total = Σ|eᵢ|. The result is precise only to the decimal place where both the sum and the sum ± error_bound agree.

## Key Points

- e_result = e₁ ± e₂ (exact relationship, depends on + or −)
- |e_result| ≤ |e₁| + |e₂| (conservative bound)
- Errors from all terms add up — more terms → more accumulated error
- The final answer should be rounded to reflect actual precision (not the calculated decimal places)
- Maximum rounding error for n decimal places: 0.5 × 10⁻ⁿ per term

## Example

Compute 3.69 + 5.432 − 2.37 − 3.5214.

Exact result: 3.69 + 5.432 − 2.37 − 3.5214 = 3.2306

Maximum absolute error:
- 3.69 (2 d.p.): |e₁| ≤ 0.005
- 5.432 (3 d.p.): |e₂| ≤ 0.0005
- 2.37 (2 d.p.): |e₃| ≤ 0.005
- 3.5214 (4 d.p.): |e₄| ≤ 0.00005

Total: |e| ≤ 0.005 + 0.0005 + 0.005 + 0.00005 = **0.01055**

Result range: 3.2306 ± 0.01055 → between 3.22005 and 3.24115

Both bounds round to **3.2** (1 d.p.) → best approximate value is **3.2**.

## See Also

- [[absolute-and-relative-error|Absolute and Relative Error]] — measuring individual errors
- [[numerical-error-types|Numerical Error Types]] — sources of error including rounding
- [[numerical-integration-overview|Numerical Integration]] — practical example of accumulated error

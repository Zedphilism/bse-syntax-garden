---
title: "Commutative, Associative, and Distributive Laws Hold in Boolean Algebra"
date: 2026-04-18
tags: [semester-3, secr1013, digital-logic]
---

# Commutative, Associative, and Distributive Laws Hold in Boolean Algebra

The commutative, associative, and distributive laws allow Boolean expressions to be reordered, regrouped, and factored without changing their logical meaning.

## Explanation

**Commutative law** states that the order of operands does not matter for AND or OR. A·B = B·A and A+B = B+A. This allows rearranging terms freely, which can expose opportunities for other simplifications.

**Associative law** states that grouping among three or more operands is irrelevant. A+(B+C) = (A+B)+C and A·(B·C) = (A·B)·C. This allows parentheses to be moved, which can simplify expression structure.

**Distributive law** connects AND and OR, enabling factoring and expansion — the same way brackets work in ordinary algebra. A·(B+C) = A·B + A·C is the standard form, but there is also a dual form unique to Boolean algebra: A+(B·C) = (A+B)·(A+C). This dual has no equivalent in regular arithmetic.

These three laws are the foundation of most Boolean simplification steps. They are applied automatically when using higher-level simplification tools like Karnaugh maps.

## Key Points

- **Commutative:** A+B = B+A; A·B = B·A
- **Associative:** A+(B+C) = (A+B)+C; A·(B·C) = (A·B)·C
- **Distributive:** A·(B+C) = A·B + A·C
- **Distributive (dual):** A+(B·C) = (A+B)·(A+C)

## Example

Simplify: F = A·B + A·C
Factor using distributive law:
F = A·(B+C)

This replaces two AND gates and one OR gate with one OR gate and one AND gate — same output, potentially fewer components depending on context.

## See Also

- [[boolean-algebra-simplifies-logic-expressions-without-changing-output|Boolean Algebra]] — the system these laws belong to
- [[boolean-rules-provide-direct-simplification-shortcuts|Boolean Rules]] — specific identities built on these laws

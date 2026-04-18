---
title: "A Vector Space Is Any Set That Satisfies Ten Axioms for Addition and Scalar Multiplication"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# A Vector Space Is Any Set That Satisfies Ten Axioms for Addition and Scalar Multiplication

A **vector space** over the real numbers is a set V together with two operations — addition and scalar multiplication — that jointly satisfy ten axioms. Any set satisfying all ten is a vector space; failing even one disqualifies it.

## Explanation

Let u, v, w be arbitrary elements (vectors) of V, and let c, d be real scalars. The ten axioms are:

**Closure axioms (must hold first):**
1. Closure under addition: u + v ∈ V
6. Closure under scalar multiplication: cu ∈ V

**Addition axioms:**
2. Commutative: u + v = v + u
3. Associative: u + (v + w) = (u + v) + w
4. Additive identity: ∃ zero vector **0** ∈ V such that **0** + u = u
5. Additive inverse: ∀ u ∈ V, ∃ −u ∈ V such that u + (−u) = **0**

**Scalar multiplication axioms:**
7. Distributive over vector addition: c(u + v) = cu + cv
8. Distributive over scalar addition: (c + d)u = cu + du
9. Associative with scalars: c(du) = (cd)u
10. Identity scalar: 1·u = u

To prove a set is NOT a vector space, find one axiom that fails and provide a counterexample. To prove it IS a vector space, verify all ten. In practice, axioms 1 and 6 (the closure axioms) are the first to check, since they are the most commonly violated.

Important examples:
- Rⁿ with standard component-wise operations is always a vector space.
- The set of all m×n matrices Mₘₓₙ with standard addition and scalar multiplication is a vector space.

## Key Points

- 10 axioms must all hold — failing one means it is NOT a vector space
- Axioms 1 and 6 (closure) are checked first
- The zero vector is unique; the additive inverse is unique for each vector
- Rⁿ and Mₘₓₙ are the canonical examples
- An unusual addition/scalar multiplication definition can break associativity or distributivity

## Example

Let V = R with a + b := 2a + 2b (unusual addition) and ka := ka (normal scaling).

Commutative: a + b = 2a+2b = 2b+2a = b + a ✓

Associative: (a+b)+c = 2(2a+2b)+2c = 4a+4b+2c; a+(b+c) = 2a+2(2b+2c) = 2a+4b+4c. These differ → **Axiom 3 fails** → V is **not** a vector space.

## See Also

- [[vector-arithmetic|Vector Arithmetic]] — the concrete example of all 8/10 properties in Rⁿ
- [[vector-subspace|Vector Subspace]] — a subset that is itself a vector space
- [[linear-independence-and-dependence|Linear Independence and Dependence]] — key concept enabled by the vector space structure

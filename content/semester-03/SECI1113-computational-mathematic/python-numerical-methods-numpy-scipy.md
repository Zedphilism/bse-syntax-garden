---
title: "NumPy and SciPy Implement Numerical Methods Concisely in Python"
date: 2026-04-18
tags: [semester-3, seci1113, discrete-math]
---

# NumPy and SciPy Implement Numerical Methods Concisely in Python

Python's **NumPy** and **SciPy** libraries provide ready-made implementations for all major numerical methods covered in SECI1113: linear system solving, root finding, eigenvalues, interpolation, differentiation, and integration. Using these libraries reduces hundreds of lines of manual code to a handful of function calls.

## Explanation

**NumPy (Numerical Python):** Core library for numerical computing. Provides n-dimensional arrays (`ndarray`), matrix operations, linear algebra (`numpy.linalg`), and mathematical functions. All matrix operations from CH01–CH03 are available.

**SciPy (Scientific Python):** Built on NumPy; adds higher-level algorithms for optimisation, integration, interpolation, signal processing, and more.

**Running Python:** Options include Google Colab (browser-based, no install needed), Jupyter Notebook (local), or IDEs like PyCharm, VS Code, Spyder.

**Key function mappings:**

| Topic | Python function |
|-------|----------------|
| Solve AX = b | `numpy.linalg.solve(A, b)` |
| Matrix inverse | `numpy.linalg.inv(A)` |
| Determinant | `numpy.linalg.det(A)` |
| Eigenvalues/vectors | `numpy.linalg.eig(A)` |
| Bisection (manual) | Custom function using `while` loop |
| Secant (manual) | Custom function using `while` loop |
| Numerical integration | `scipy.integrate.quad(f, a, b)` |
| Interpolation | `scipy.interpolate.interp1d(x, y)` |

## Key Points

- `numpy.linalg.solve(A, b)` is the fastest way to solve AX = b (uses LU decomposition internally)
- Bisection and secant methods are typically implemented manually to match textbook iterations
- `numpy.linalg.eig(A)` returns both eigenvalues and eigenvectors simultaneously
- `scipy.integrate.quad` uses adaptive Gaussian quadrature — far more accurate than trapezoidal rule
- Always import: `import numpy as np` then use `np.array(...)` to define matrices/vectors

## Example

**Solve the system** 2x₁+x₂+x₃=7, 3x₁+2x₂−x₃=4, x₁−4x₂+2x₃=−1:

```python
import numpy as np
A = np.array([[2, 1, 1], [3, 2, -1], [1, -4, 2]])
b = np.array([7, 4, -1])
x = np.linalg.solve(A, b)
print("x1 =", round(x[0], 2), "; x2 =", round(x[1], 2), "; x3 =", round(x[2], 2))
# Output: x1 = 1.0 ; x2 = 2.0 ; x3 = 3.0
```

**Bisection method** for f(x) = x³ − 3x² + 8x − 5 on [0, 1], ε = 0.001:

```python
def f(x):
    return x**3 - 3*x**2 + 8*x - 5

def bisection(x0, x1, e):
    while abs(f((x0+x1)/2)) > e:
        x2 = (x0 + x1) / 2
        if f(x0) * f(x2) < 0:
            x1 = x2
        else:
            x0 = x2
    return (x0 + x1) / 2

print(bisection(0, 1, 0.001))
```

## See Also

- [[gaussian-elimination|Gaussian Elimination]] — the manual method that `numpy.linalg.solve` replaces
- [[bisection-method|Bisection Method]] — the algorithm being coded
- [[eigenvalue-eigenvector-definition|Eigenvalue and Eigenvector Definition]] — `np.linalg.eig(A)` computes these
- [[trapezoidal-rule|Trapezoidal Rule]] — `scipy.integrate.quad` is a more accurate alternative

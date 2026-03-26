---
topicId: limits-continuity
title: Analisis de Limites y Continuidad
description: Tecnicas de limites, continuidad y comportamiento asintotico de funciones.
icon: tabler:chart-dots
---

## Calculo de limites

### Resolucion de indeterminaciones

Cuando aparece una forma indeterminada como $\frac{0}{0}$ o $\frac{\infty}{\infty}$, primero simplifica algebraicamente:

- factoriza numerador y denominador
- racionaliza cuando haya raices
- separa terminos dominantes cuando $x \to \infty$

Tambien pueden aparecer otras formas como $1^{\infty}$ y $\infty - \infty$.

### Limites notables

Dos resultados que aparecen con mucha frecuencia son:

$$
\lim_{x \to 0} \frac{\sin x}{x} = 1
$$

$$
\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e
$$

## Continuidad y asintotas

### Criterio de continuidad en un punto

Una funcion $f$ es continua en $x=a$ si se cumplen simultaneamente:

1. $f(a)$ existe
2. $\lim_{x \to a} f(x)$ existe
3. $\lim_{x \to a} f(x) = f(a)$

### Clasificacion de discontinuidades

| Tipo | Idea central | Ejemplo tipico |
| --- | --- | --- |
| Evitable | El limite existe pero el valor no coincide | "agujero" en la grafica |
| Esencial | El limite no existe | salto o comportamiento oscilante |

### Analisis asintotico

Para detectar asintotas:

- verticales: estudiar limites cuando $x$ se aproxima a puntos criticos del dominio
- horizontales: evaluar $\lim_{x \to \pm\infty} f(x)$
- oblicuas: cuando no hay horizontal y la funcion se aproxima a una recta $y = mx + b$

## Teoremas de valor

### Bolzano y valor intermedio

Si $f$ es continua en $[a,b]$ y $f(a)\cdot f(b)<0$, entonces existe al menos una raiz en $(a,b)$.

El Teorema del Valor Intermedio garantiza que toda imagen intermedia entre $f(a)$ y $f(b)$ es alcanzada por la funcion en algun punto del intervalo.

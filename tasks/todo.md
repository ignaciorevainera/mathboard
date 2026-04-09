# Tarea: TOC adaptativo por topic (cantidad de atajos variable)
Fecha: 2026-04-08

## Descripcion
Optimizar la sección En esta pagina en cada ruta de topic para que no muestre siempre el mismo nivel de headings. Debe variar por topic y aprovechar mejor el espacio lateral, incluyendo subtemas cuando un topic tenga pocas secciones principales.

## Riesgos identificados
- Mostrar demasiados atajos puede saturar el TOC y dificultar escaneo.
- Cambiar la lógica del TOC puede romper el comportamiento de hash si no se conserva el selector y anclaje existente.
- Si no se define una regla por topic, el TOC puede quedar inconsistente entre páginas.
- Agregar h3 en topics muy largos puede generar paneles excesivos si no hay límite de capacidad.

## Matriz de capacidad recomendada
- analytic-geometry-lines-points.mdx: 14 atajos
- asymptotes.mdx: 12 atajos
- conic-sections.mdx: 14 atajos
- continuity.mdx: 10 atajos
- derivative-advanced-analysis.mdx: 12 atajos
- derivative-applications.mdx: 14 atajos
- differential-calculus-function-analysis.mdx: 12 atajos
- factoring-algebraic-expressions.mdx: 14 atajos
- geometry-trigonometry.mdx: 14 atajos
- integral-calculus.mdx: 12 atajos
- inverse-functions.mdx: 12 atajos
- limits-continuity.mdx: 12 atajos
- logarithms-exponentials.mdx: 14 atajos
- sequences-series.mdx: 12 atajos

## Plan de ejecucion

[x] Paso 1 — fullstack: definir algoritmo de selección de atajos por topic
    Criterio de exito: existe regla determinística para mezclar h2 y h3 según capacidad por topic, priorizando h2 y completando con h3 relevantes.

[x] Paso 2 — fullstack: implementar TOC adaptativo en TopicMarkdownContentSection
    Criterio de exito: la sección En esta pagina deja de filtrar solo h2 y aplica la matriz de capacidad por topic con orden semántico estable.

[x] Paso 3 — ui-designer: ajustar presentación visual de niveles en TOC
    Criterio de exito: h2 y h3 se distinguen visualmente sin perder legibilidad; el panel aprovecha espacio disponible sin saturación.

[x] Paso 4 — fullstack: validar cobertura de atajos en topics clave
    Criterio de exito: topics con pocas secciones principales como factoring muestran más atajos útiles de métodos y no solo 2 o 3 entradas.

[x] Paso 5 — qa-reviewer: validar hash, scroll y consistencia entre topics
    Criterio de exito: click en atajos mantiene hash correcto y scroll preciso en múltiples topics con distintas capacidades.

[x] Paso 6 — qa-reviewer: ejecutar verificación técnica final
    Criterio de exito: astro check, smoke de hash-navigation y build en verde tras la lógica adaptativa.

[x] Paso 7 — qa-reviewer: verificar resultado completo y hacer commit
    Criterio de exito: cambios agrupados en commit lógico de TOC adaptativo y documentación actualizada.

## Agentes involucrados
- fullstack
- ui-designer
- qa-reviewer

## Criterio de exito global
Cada topic muestra una cantidad de atajos acorde a su estructura real, maximizando utilidad del TOC lateral sin romper navegación ni claridad visual.

## Estado de validacion
- TOC adaptativo implementado con mezcla de `h2`/`h3` y prioridad de `h2`, con capacidad por `topicId`.
- Validacion tecnica en verde: `astro check`, smoke hash-navigation (2/2), `build` (15 paginas).
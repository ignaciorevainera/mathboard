# Lessons Learned

- [Kickstart] Archivo creado para registrar lecciones durante QA y revisiones finales.

### 2026-03-29 — TOC hash + estado activo + accesibilidad
Problema: el TOC podia desincronizarse tras click en anclas (hash cambiaba pero se resaltaba otro item) y se marcaban multiples enlaces con aria-current.
Solucion: priorizar el heading del hash cuando esta visible, decodificar hash inicial y dejar aria-current solo en el enlace activo directo.
Archivos afectados: src/components/sections/TopicMarkdownContentSection.astro

### 2026-03-29 — Normalizacion KaTeX en MDX y scripts externos en Astro
Problema: en contenido matematico habia notacion mezclada (fracciones tipo (a)/(b) y desigualdades con < >) que reducia consistencia, y Astro mostraba hints por scripts externos con defer.
Solucion: unificar formulas intervenidas con notacion LaTeX compatible (\frac, \lt, \gt) y marcar scripts externos de KaTeX con is:inline en layout base.
Archivos afectados: src/content/topics/analytic-geometry-lines-points.mdx; src/content/topics/conic-sections.mdx; src/content/topics/derivative-applications.mdx; src/content/topics/geometry-trigonometry.mdx; src/layouts/BaseLayout.astro

### 2026-03-29 — Entidades HTML escapadas rompen render KaTeX
Problema: expresiones con `\&#123;...\&#125;` dentro de formulas se mostraban literal en pantalla en lugar de renderizarse como conjuntos.
Solucion: reemplazar secuencias escapadas por llaves LaTeX reales (`\{...\}`) en formulas afectadas.
Archivos afectados: src/content/topics/sequences-series.mdx; src/content/topics/continuity.mdx; src/content/topics/inverse-functions.mdx

### 2026-03-29 — Warning KaTeX por apostrofe tipografico en formulas
Problema: KaTeX emite warnings `unknownSymbol` cuando encuentra el caracter Unicode `’` dentro de contenido matematico.
Solucion: normalizar apostrofes tipograficos a `'` ASCII en fragmentos de formula para evitar ruido de consola.
Archivos afectados: src/content/topics/*.mdx

### 2026-03-30 — Overflow mobile en contenido de topics con formulas y tablas
Problema: varias rutas `topic/*` presentaban scroll horizontal en mobile por combinacion de grid item sin `min-w-0`, formulas largas y tablas densas.
Solucion: agregar `min-w-0` al contenedor de contenido del topic y reglas responsive en CSS para contener formulas largas y fijar layout de tablas en pantallas chicas.
Archivos afectados: src/components/sections/TopicMarkdownContentSection.astro; src/styles/global.css

### 2026-03-30 — PageSpeed: evitar aria-label redundante y reducir JS global
Problema: Lighthouse marcaba `label-content-name-mismatch` por enlaces con texto visible y `aria-label` diferente, y el script global de theme-change agregaba JS inline innecesario.
Solucion: quitar `aria-label` en enlaces con texto suficiente y reemplazar theme-change por un toggle inline minimo; ademas mover `meta charset` al inicio del `head` y acotar el render matematico a nodos de contenido.
Archivos afectados: src/components/ui/TopicCard.astro; src/components/sections/ImportantResourcesSection.astro; src/layouts/BaseLayout.astro; src/components/sections/TopicMarkdownContentSection.astro

### 2026-04-08 — Normalizacion de headings incompleta en pipeline remark de topics
Problema: la transformacion de `remark-topic-subsection-cards` no normaliza todos los headings profundos cuando quedan dentro de bloques de contenido recolectados (p. ej. `h4`), dejando jerarquia heterogenea entre topics.
Solucion: aplicar normalizacion de profundidad tambien sobre los nodos de contenido internos (no solo sobre el heading actual del loop) o un recorrido previo global sobre todos los nodos heading del arbol.
Archivos afectados: src/lib/remark-topic-subsection-cards.js; src/content/topics/*.mdx

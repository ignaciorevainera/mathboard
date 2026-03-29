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

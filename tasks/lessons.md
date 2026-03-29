# Lessons Learned

- [Kickstart] Archivo creado para registrar lecciones durante QA y revisiones finales.

### 2026-03-29 — TOC hash + estado activo + accesibilidad
Problema: el TOC podia desincronizarse tras click en anclas (hash cambiaba pero se resaltaba otro item) y se marcaban multiples enlaces con aria-current.
Solucion: priorizar el heading del hash cuando esta visible, decodificar hash inicial y dejar aria-current solo en el enlace activo directo.
Archivos afectados: src/components/sections/TopicMarkdownContentSection.astro

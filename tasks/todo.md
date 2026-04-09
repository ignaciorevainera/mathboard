# Tarea: Migrar topics a MDX con componentes Astro (sin plugin remark)
Fecha: 2026-04-08

## Descripcion
Eliminar la dependencia del archivo [src/lib/remark-topic-subsection-cards.js](src/lib/remark-topic-subsection-cards.js) para el formateo estructural de topics y pasar a una arquitectura declarativa en MDX usando componentes Astro reutilizables (contenedores de informacion, bloques de subseccion, espaciados y divisores), manteniendo hashes/TOC y compatibilidad con KaTeX.

## Riesgos identificados
- La migracion implica editar muchos archivos MDX; existe riesgo de inconsistencias de estilo entre topics si no se aplica una plantilla unica.
- Si se cambian textos de headings durante la migracion, pueden romperse slugs de anclas y shortcuts existentes.
- El plugin actual normaliza niveles de heading automaticamente; al retirarlo, la jerarquia dependera del contenido MDX y puede quedar heterogenea.
- Hay un working tree muy cargado con cambios pendientes; aumenta el riesgo de mezclar alcances y generar conflictos.
- La sintaxis matematica en MDX tiene historial de errores con llaves/entidades; una migracion agresiva puede romper render si no se valida por lotes.

## Plan de ejecucion

[x] Paso 1 — fullstack: diseñar contrato de componentes MDX para topics
	Criterio de exito: existe un set minimo de componentes reutilizables en [src/components/ui](src/components/ui) (Section, Subsection, ContentCard, Divider o equivalentes) con API clara para reemplazar lo que hoy hace el plugin.

[x] Paso 2 — ui-designer: definir reglas visuales unificadas por componente y breakpoint
	Criterio de exito: los componentes reflejan un sistema consistente de espaciado, contenedores y contraste (mobile/tablet/desktop) alineado al diseño actual del proyecto.

[x] Paso 3 — fullstack: integrar componentes MDX y habilitar su uso global en contenido
	Criterio de exito: los MDX de topics pueden usar componentes Astro sin JS embebido extra y sin necesidad del wrapping automatico por remark.

[x] Paso 4 — fullstack: migrar progresivamente los topics al nuevo esquema declarativo
	Criterio de exito: cada archivo en [src/content/topics](src/content/topics) usa los componentes de forma consistente para secciones/subsecciones/contenido, preservando headings y anchors existentes.

[x] Paso 5 — fullstack: retirar plugin remark y limpiar configuracion relacionada
	Criterio de exito: [astro.config.mjs](astro.config.mjs) deja de registrar [src/lib/remark-topic-subsection-cards.js](src/lib/remark-topic-subsection-cards.js), y el archivo puede eliminarse sin regresiones funcionales.

[x] Paso 6 — qa-reviewer: validar topics completos, hashes y math render
	Criterio de exito: revision en multiples routes de /topic confirma consistencia visual, TOC/hash funcionando, formulas renderizando bien y sin overflow nuevo.

[x] Paso 7 — qa-reviewer: verificar resultado completo y hacer commit
	Criterio de exito: `astro check`, build y smoke hash-navigation pasan en verde; cambios listos para commit atomico con mensaje claro.

## Agentes involucrados
- fullstack
- ui-designer
- qa-reviewer

## Criterio de exito global
El proyecto deja de depender del plugin JS para estructurar topics y pasa a un sistema limpio basado en MDX + componentes Astro reutilizables, con diseño uniforme por dispositivo, anclas estables y mantenimiento mas simple.

## Estado de validacion
- `npm run -s astro check` en verde.
- `npm run -s test:smoke -- tests/smoke/topic-hash-navigation.spec.ts` en verde (2/2).
- `npm run -s build` en verde (15 paginas generadas).
# Tarea: Migrar Topics a Astro Content Collections (MDX)
Fecha: 2026-03-26

## Descripcion
Migrar la fuente de datos de temas desde `src/lib/topics.ts` a una coleccion nativa de Astro en `src/content/topics/` usando archivos `.mdx`, manteniendo rutas, navegacion de atajos, TOC y renderizado matematico, y eliminando el fallback legacy al finalizar.

## Riesgos identificados
- Desalineacion entre `topicId`, nombre de archivo (slug) y rutas existentes (`/topic/[id]`).
- Pérdida de anclas usadas por shortcuts al convertir listas anidadas del `.ts` a headings MDX.
- Errores de parseo en MDX por expresiones matematicas con llaves/escapes.
- Divergencia de contenido mientras conviven source legacy (`topics.ts`) y source nuevo (`content collection`).
- Regresiones visuales en TOC y layout de detalle al cambiar la fuente del contenido.

## Plan de ejecucion

[x] Paso 1 — fullstack: auditar y fijar contrato final de datos para topics en coleccion
	Criterio de exito: existe un mapeo definitivo de campos (`topicId`, `title`, `description`, `icon`, metadatos opcionales) y reglas editoriales de MDX para headings/anclas compatibles con shortcuts.

[x] Paso 2 — fullstack: consolidar schema y capa de datos tipada sobre `astro:content`
	Criterio de exito: `src/content.config.ts` y helpers de `src/lib/` exponen funciones tipadas para listado y detalle sin depender de `topics.ts`.

[x] Paso 3 — fullstack: migrar todos los temas de `topics.ts` a archivos `src/content/topics/*.mdx`
	Criterio de exito: hay 1 archivo MDX por tema actual, con frontmatter valido y contenido completo (subtitulos, listas, tablas, formulas) preservando semantica y anchors.

[x] Paso 4 — fullstack: refactorizar paginas y componentes para usar solo CollectionEntry
	Criterio de exito: `/topic/[id]` y componentes relacionados renderizan via `render(entry)` y/o `entry.data`, sin fallback al arreglo estatico.

[x] Paso 5 — fullstack: limpieza de legacy y referencias residuales
	Criterio de exito: `src/lib/topics.ts` queda eliminado o fuera de uso, y no hay imports/residuos en `src/pages/` ni `src/components/` que dependan del modelo anterior.

[ ] Paso 6 — qa-reviewer: verificar resultado completo y hacer commit
	Criterio de exito: `npx astro sync`, `npx astro check` y `npm run build` pasan; se validan rutas de topics y TOC en QA visual; commit final documenta la migracion completa.

## Agentes involucrados
- fullstack
- qa-reviewer

## Criterio de exito global
Todo el contenido de topics se gestiona exclusivamente desde `src/content/topics/*.mdx` mediante Astro Content Collections, con tipado valido, build limpio, rutas estables y sin dependencias funcionales en `src/lib/topics.ts`.

# Tarea: Reorganizar cards del index por bloques y secuencia pedagogica
Fecha: 2026-03-29

## Descripcion
Reestructurar la seccion de temario en la home para agrupar las cards bajo subtitulos tematicos (sin fusionar cards), y ordenar los topics en una progresion habitual de estudio escolar. Debe cumplirse explicitamente que factoreo aparezca antes que derivadas y derivadas antes que integrales.

## Riesgos identificados
- Desalinear el orden visual con la navegacion actual si solo se cambia UI sin ajustar la capa de datos del home.
- Introducir grupos ambiguos que mezclen niveles y reduzcan claridad de escaneo en la grilla.
- Romper consistencia del componente `SyllabusSection` si se mantiene la interfaz de props plana y no se adapta al nuevo modelo agrupado.
- Generar regresion responsive (especialmente en desktop) al introducir subtitulos + multiples grids.

## Plan de ejecucion

[x] Paso 1 — fullstack: definir esquema de agrupacion y secuencia pedagogica para el home
	Criterio de exito: existe una estructura clara de bloques tematicos y un orden lineal validado contra criterio escolar (incluyendo factoreo antes de derivadas y derivadas antes de integrales).

[x] Paso 2 — fullstack: implementar en la capa de datos del home un resultado agrupado y ordenado
	Criterio de exito: `src/lib/topic-content.ts` expone una funcion para home agrupada por bloque con topics ya ordenados segun la secuencia definida.

[x] Paso 3 — ui-designer: actualizar `SyllabusSection` para renderizar subtitulos de bloque y su grilla de cards
	Criterio de exito: la seccion muestra subtitulos visibles por bloque y cada bloque contiene varias cards, manteniendo accesibilidad y layout responsive.

[x] Paso 4 — fullstack: conectar `src/pages/index.astro` al nuevo modelo agrupado
	Criterio de exito: la home consume la nueva funcion agrupada sin romper `ShortcutsSection` ni `ImportantResourcesSection`.

[x] Paso 5 — qa-reviewer: validar UX de organizacion, orden final y estabilidad tecnica
	Criterio de exito: `npx astro check` y `npm run build` pasan; visualmente los temas quedan mas faciles de ubicar por bloques y en progresion pedagogica.

[x] Paso 6 — qa-reviewer: verificar resultado completo y hacer commit
	Criterio de exito: cambios aprobados, commit convencional creado y `tasks/todo.md` limpio al cerrar.

## Agentes involucrados
- fullstack
- ui-designer
- qa-reviewer

## Criterio de exito global
El index presenta el temario en bloques con subtitulos claros, cada bloque conserva cards independientes, y el orden general sigue una progresion de aprendizaje coherente de menor a mayor complejidad sin exponer etiquetas de dificultad.

## Resultado de revision — 2026-03-29

### Aprobado
- Se verifico en diff que la home renderiza cards agrupadas por subtitulos de bloque.
- El bloque de calculo diferencial mantiene cards separadas para analisis, aplicaciones y avanzado.
- El orden pedagogico cumple: factoreo antes de derivadas y derivadas antes de integrales.
- Validaciones tecnicas aprobadas: `npx astro check` y `npm run build`.

### Requiere correccion
- Ninguna.

### Bloqueantes para completar la tarea
- Ninguno.

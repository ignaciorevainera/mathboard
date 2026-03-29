# Tarea: Simplificar TOC a indice basico con minimo JavaScript
Fecha: 2026-03-29

## Descripcion
Reducir la complejidad de la TOC de topics eliminando el seguimiento activo por scroll y la mayor parte del JavaScript. El indice debe quedar simple: mostrar contenidos (h2 y h3), mantener layout flotante sticky y navegar por anclas al hacer click.

## Riesgos identificados
- Desalinear IDs/enlaces si la fuente de headings no coincide con los anchors renderizados en el contenido MDX.
- Perder jerarquia visual entre h2 y h3 al pasar de construccion dinamica a render declarativo.
- Romper el comportamiento sticky/overflow al simplificar estructura y clases.
- Introducir regresiones en rutas de topic si no se pasan correctamente los headings desde la pagina al componente.

## Plan de ejecucion

[x] Paso 1 — ui-designer: usar headings de Astro como fuente del TOC en la pagina de topic
    Criterio de exito: [src/pages/topic/[id].astro](src/pages/topic/[id].astro#L1) pasa al componente una lista de headings ya parseada por Astro, evitando lectura del DOM para construir el indice.

[x] Paso 2 — ui-designer: refactorizar `TopicMarkdownContentSection` para render declarativo del indice
    Criterio de exito: [src/components/sections/TopicMarkdownContentSection.astro](src/components/sections/TopicMarkdownContentSection.astro#L1) renderiza h2/h3 en template Astro, sin IntersectionObserver ni logica de item activo por scroll.

[x] Paso 3 — ui-designer: conservar estilo flotante, sticky y navegacion por anclas
    Criterio de exito: el TOC queda sin fondo anidado, mantiene `lg:top-24` + scroll interno, y cada enlace lleva correctamente a su seccion.

[x] Paso 4 — qa-reviewer: verificar resultado completo
    Criterio de exito: `npx astro check` y `npm run build` pasan, el indice es simple/legible y funciona solo como navegacion por anclas sin resaltado dinamico.

## Agentes involucrados
- ui-designer
- qa-reviewer

## Criterio de exito global
Cada topic muestra una TOC minimalista y estable, con logica simplificada al minimo, navegacion por anclas confiable y sticky flotante mantenido.

## Resultado de revision — 2026-03-29

### Aprobado
- TOC simplificada a indice declarativo usando headings de Astro (h2/h3) sin logica de resaltado activo por scroll.
- Navegacion por anclas validada en navegador: click en TOC actualiza hash y posiciona la seccion objetivo.
- Sticky lateral y overflow interno presentes en desktop (`top-24` + `overflow-y-auto`).
- Jerarquia visual h2/h3 clara por tipografia/indentacion, sin caja anidada ni fondo doble en el bloque TOC.
- Validacion tecnica completada: `npx astro check` sin errores y `npm run build` exitoso.

### Requiere correccion
- Ninguna.

### Bloqueantes para completar la tarea
- Ninguno.

# Tarea: Rediseñar Recursos Importantes con descargas directas
Fecha: 2026-03-28

## Descripcion
Renombrar la seccion "Documentos importantes" a "Recursos importantes" y reemplazar el CTA a pagina por una grilla de pills descargables en un clic (PDF), manteniendo las convenciones de diseño del proyecto y la experiencia responsive.

## Riesgos identificados
- Romper la descarga directa si las rutas de `filePath` no coinciden con archivos en `public/documents/`.
- Generar pills con contraste o estados hover fuera de tokens DaisyUI/Tailwind del sistema visual.
- Desbalance visual en mobile si las pills no respetan estructura flexible y espaciado del layout.
- Dejar referencias huérfanas hacia `/documents` si no se actualizan todos los enlaces de navegación.
- Inconsistencia de naming entre "recursos" y "documentos" en distintos puntos del sitio.

## Plan de ejecucion

[x] Paso 1 — fullstack: definir contrato de recursos para pills descargables
    Criterio de exito: `src/lib/documents.ts` expone datos suficientes para renderizar pills (titulo, archivo, estado PDF y variante visual si aplica) sin hardcodear en el componente.

[x] Paso 2 — ui-designer: refactorizar `ImportantDocumentsSection` a `Recursos importantes`
    Criterio de exito: la seccion muestra pills de descarga en un clic con icono, titulo y badge "PDF", siguiendo convenciones de Tailwind + DaisyUI y accesibilidad.

[x] Paso 3 — fullstack: eliminar dependencia del CTA a pagina y actualizar referencias de ruta
    Criterio de exito: desde home ya no se navega a `/documents` para descargar; todas las descargas ocurren directamente desde la seccion de recursos.

[x] Paso 4 — ui-designer: ajustar responsive y densidad visual de pills
    Criterio de exito: layout consistente en mobile, tablet y desktop sin overflow ni espacios vacios notables.

[ ] Paso 5 — qa-reviewer: verificar resultado completo y hacer commit
    Criterio de exito: links descargan PDF con un clic, `npx astro check` y `npm run build` pasan, y la nomenclatura visible del sitio queda unificada como "Recursos importantes".

## Agentes involucrados
- fullstack
- ui-designer
- qa-reviewer

## Criterio de exito global
La home muestra "Recursos importantes" con pills descargables en un clic, sin navegación intermedia obligatoria, con estilo consistente al sistema de diseño y sin regressiones de build o responsive.

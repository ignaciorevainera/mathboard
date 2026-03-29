# Tarea: Optimizar JS en UI y limpiar codigo no utilizado
Fecha: 2026-03-29

## Descripcion
Reducir el uso de JavaScript en interacciones que pueden resolverse con CSS (especialmente comportamiento responsive y formato visual), sin degradar estetica ni romper funciones clave que si requieren JS/TS (tema persistente, render de matematica y navegacion con estado cuando aporte valor). Ademas, eliminar archivos/codigo/dependencias no utilizados.

## Riesgos identificados
- Eliminar scripts sin clasificar su criticidad puede romper funciones globales (ejemplo: tema y KaTeX).
- Sustituir JS por CSS sin validar accesibilidad puede degradar UX en teclado o lectores de pantalla.
- Borrar archivos potencialmente huérfanos sin verificacion cruzada puede afectar flujos no evidentes.
- Limpiar dependencias de fuentes sin actualizar lockfile puede dejar inconsistencias en CI/build.

## Plan de ejecucion

[x] Paso 1 — fullstack: auditar el JS actual y clasificarlo por criticidad (mantener/reemplazar/eliminar)
	Criterio de exito: existe una matriz por archivo con decision explicita; se confirma como "mantener" el JS de tema y KaTeX, y se listan candidatos reales de reemplazo por CSS.

[x] Paso 2 — ui-designer: mover a CSS puro todo comportamiento visual-responsive que hoy dependa de JS
	Criterio de exito: tamaño, espaciado y formato de topic cards/mobile quedan resueltos solo con clases/utilidades CSS, sin perdida visual frente al baseline actual.

[x] Paso 3 — fullstack: reducir JS no esencial en home (filtros/estado visual) con estrategia no intrusiva
	Criterio de exito: se minimiza el script de filtros o se reemplaza por alternativa declarativa/CSS cuando sea viable, manteniendo la funcion clave de navegacion y estado compartible si aplica.

[x] Paso 4 — fullstack: aislar scripts globales para que solo carguen donde aportan valor
	Criterio de exito: scripts de matematica no bloquean paginas que no los necesitan; tema persistente se conserva estable y sin flash visual.

[x] Paso 5 — fullstack: eliminar codigo y ficheros no utilizados con verificacion previa
	Criterio de exito: se eliminan candidatos validados (por ejemplo componente legacy no referenciado) y no quedan imports rotos tras la limpieza.

[x] Paso 6 — fullstack: limpiar dependencias obsoletas relacionadas al cambio tipografico
	Criterio de exito: se remueven paquetes de fuentes antiguas no usadas y se actualizan manifests/lockfile sin romper build.

[x] Paso 7 — qa-reviewer: validar UX/funcionalidad/performance y cerrar con commit
	Criterio de exito: `npx astro check` y `npm run build` pasan; la UI mantiene calidad visual; el JS total disminuye en secciones objetivo; commit convencional creado.

## Agentes involucrados
- fullstack
- ui-designer
- qa-reviewer

## Criterio de exito global
El sitio conserva su identidad visual y funciones clave, pero reduce JS en UI no esencial mediante CSS/declarativo, y elimina codigo/dependencias sin uso, dejando una base mas simple y mantenible.

## Avances implementados (pasos 1-6)

- Auditoria JS aplicada:
	- Mantener: script de tema (`theme-change`) en layout.
	- Reemplazar/simplificar: script de filtros en Home (`SyllabusSection`) con delegacion de eventos y menos listeners.
	- Aislar: KaTeX ya no es global; solo se carga en paginas de topic.
	- Eliminar: componente legacy sin referencias (`TopicContentSection`).
- `TopicCard` simplificada para variacion visual responsive solo con clases CSS (sin bifurcacion de layout por prop).
- Dependencias de fuentes legacy identificadas para eliminacion en `package.json` y `package-lock.json`.

## Resultado de revision — 2026-03-29

### Aprobado
- `npx astro check` sin errores, warnings ni hints.
- `npm run build` exitoso para todas las rutas estaticas.
- Persistencia de tema claro/oscuro validada (cambio y recarga conservan `data-theme`).
- Render matematico activo en rutas de tema y aislado fuera de Home/Resources.
- Filtro del temario funcional con JS minimo (delegacion de eventos + sync por query param).
- Revision visual en Home y Topic en mobile/tablet/desktop sin quiebres de layout detectados.

### Requiere correccion
- Warning no bloqueante de KaTeX en topics por caracter Unicode tipografico (`’`) en algunas expresiones; conviene normalizar a apostrofe ASCII dentro de bloques matematicos para eliminar ruido en consola.

### Bloqueantes para completar la tarea
- Ninguno.

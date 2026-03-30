# Tarea: Smoke test del theme toggle
Fecha: 2026-03-29

## Descripcion
Agregar una verificacion automatizada minima para asegurar que el toggle de tema
del navbar mantiene su contrato funcional: atributos esperados, persistencia
por clave dedicada y presencia de iconografia contextual.

## Riesgos identificados
- El proyecto no tiene una base de testing consolidada y puede requerir setup previo.
- Un smoke test demasiado acoplado al markup exacto puede romperse con cambios visuales menores.
- Hay cambios pendientes en el working tree; se debe evitar mezclar este alcance con otros edits.

## Plan de ejecucion

[x] Paso 1 — fullstack: evaluar e incorporar skill de apoyo para smoke testing
	Criterio de exito: se valida si `cursor/plugins@run-smoke-tests` aplica al proyecto y se define (o descarta justificadamente) su uso antes de implementar tests.

[x] Paso 2 — fullstack: definir estrategia de smoke test y stack de ejecucion
	Criterio de exito: queda decidido un enfoque concreto (Playwright o equivalente) con comando reproducible para correr el smoke test localmente.

[x] Paso 3 — fullstack: implementar smoke test del theme toggle en home
	Criterio de exito: el test verifica presencia de `data-toggle-theme="light,night"`, `data-key="mathboard-theme"` y los iconos moon/sun del toggle sin depender de estilos fragiles.

[x] Paso 4 — fullstack: ejecutar test y documentar comando de verificacion
	Criterio de exito: evidencia de ejecucion exitosa del smoke test y referencia en documentacion tecnica del proyecto.

[x] Paso 5 — qa-reviewer: verificar resultado completo y hacer commit
	Criterio de exito: QA confirma cobertura minima, ausencia de regresiones en build y commit con mensaje claro.

## Agentes involucrados
- fullstack
- qa-reviewer

## Criterio de exito global
Existe un smoke test automatizado que detecta regresiones basicas del theme toggle,
se ejecuta con un comando claro en el proyecto y pasa junto con el build actual.

## Auditoria de seguridad — 2026-03-29

### Sin vulnerabilidades
- Autenticacion y sesiones: no aplica para este proyecto estatico; no hay login, cookies de sesion ni endpoints de auth.
- Endpoints de API: no existen rutas de API ni handlers de mutacion en `src/pages`.
- Inputs y formularios: no hay formularios `POST`; no se detectaron sinks peligrosos (`set:html`, `innerHTML`, `dangerouslySetInnerHTML`).
- Secretos y entorno: no se detectaron claves privadas expuestas con prefijo `PUBLIC_`; `.env` y `.env.production` estan en `.gitignore`.
- Dependencias runtime: `npm audit --omit=dev` finalizo en `0 vulnerabilities`.

### Vulnerabilidades encontradas y corregidas
- Severidad media: faltaban headers de seguridad HTTP en deploy. Se agrego `vercel.json` con `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin` y `Permissions-Policy`.
	Archivo: `vercel.json`.
- Severidad media: recursos KaTeX remotos cargados sin verificacion de integridad (riesgo de tampering en CDN). Se agregaron atributos `integrity` SHA-384 y `crossorigin="anonymous"` para CSS/JS de KaTeX.
	Archivo: `src/layouts/BaseLayout.astro`.
- Severidad media: una dependencia de tooling (`@astrojs/check`) estaba en `dependencies` y arrastraba una cadena vulnerable en auditoria de runtime. Se movio a `devDependencies` y se regenero lockfile.
	Archivos: `package.json`, `package-lock.json`.

### Requiere decision del usuario
- Definir si quieren una politica CSP estricta en Vercel. Implementarla bien requiere refactorizar scripts inline (`theme` y `renderMathInElement`) para evitar romper funcionalidad.
- Definir si desean eliminar dependencia de CDN para KaTeX y servir assets locales (mas aislamiento, mas mantenimiento de assets).
- Resolver vulnerabilidades moderadas de toolchain detectadas por `npm audit` completo en la cadena `@astrojs/check` -> `@astrojs/language-server` -> `yaml`. El fix automatico propuesto es potencialmente breaking (`npm audit fix --force`) y requiere decision de versionado.

### Recomendaciones adicionales
- Agregar chequeo de seguridad en CI con `npm audit --omit=dev` y `npm run build` por pull request.
- Mantener actualizacion periodica de dependencias (especialmente cadena Astro language tools) para evitar reintroduccion de CVEs moderadas.

## Reporte de testing — 2026-03-29

### Tests de unidad (Vitest)
[9 tests pasando / 0 tests fallando]
Cobertura: [getDocuments, getTopicIconToneClasses, getTopicHaloToneClasses, getTopicEntries, getTopicIds, getTopicDetailById, getTopicCardsForHome, getTopicGroupsForHome, getTopicShortcutsForHome]
Sin cobertura: [ninguna funcion publica de src/lib detectada]

### Tests e2e (Playwright)
[3 tests pasando / 0 tests fallando]
Flujos cubiertos: [contrato del theme toggle, navegacion home -> topic -> home, controles globales en viewport mobile]
Flujos sin cobertura: [no aplica auth ni rutas protegidas en este proyecto estatico; formularios POST no presentes]

### Problemas encontrados
[Vitest intentaba ejecutar tests de Playwright por falta de config dedicada; se corrigio agregando vitest.config.ts con include en tests/unit y scripts separados en package.json.]

### Deuda tecnica de testing
[Agregar test e2e para navegacion por hash en pagina de topic y validar sincronizacion con secciones h2/h3 en casos de contenido largo.]
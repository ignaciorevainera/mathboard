# DESIGN SYSTEM — Mathboard
Generado el 2026-03-24. Actualizar ante cualquier cambio de diseño.

## Stack

| Tecnología | Versión |
| --- | --- |
| Astro | 6.x |
| Tailwind CSS | 4.x |
| DaisyUI | 5.x |

## Tema activo

Nombre: light
Modo por defecto: claro
Modo alternativo: night

Configuración en src/styles/global.css:

```css
@plugin "daisyui" {
  themes: light --default, night --prefersdark;
}
```

El toggle en src/components/global/Navbar.astro persiste la preferencia en localStorage con la clave mathboard-theme.

## Tokens de color en uso

- base-100, base-200, base-300, base-content para estructura principal
- primary, secondary, accent para acciones y acentos visuales
- neutral para superficies utilitarias
- success, warning, error, info reservados para estados de feedback

Regla: todos los colores deben venir de tokens DaisyUI.

## Tipografía

| Rol | Fuente | Paquete Fontsource |
| --- | --- | --- |
| Display | Playfair Display Variable | @fontsource-variable/playfair-display |
| Body | Inter Variable | @fontsource-variable/inter |

Configuración en src/styles/global.css:

```css
@theme {
  --font-display: 'Playfair Display Variable', serif;
  --font-sans: 'Inter Variable', sans-serif;
}
```

Uso:

- font-display para h1 y títulos principales
- font-sans para cuerpo, navegación y contenido de lectura

## Escala tipográfica usada

- text-sm, text-base para contenido de lectura
- text-lg para destacados
- text-xl y text-2xl para títulos de card y bloques
- text-3xl y text-4xl para encabezados de sección
- text-5xl y text-6xl para titulares de página/hero

## Espaciado y layout

- Contenedor principal: max-w-6xl mx-auto px-4
- Secciones: py-16 md:py-24
- Grid principal: gap-6 y gap-8
- Navbar sticky con borde semitransparente y backdrop blur
- Fondo global con gradiente suave en la parte superior para profundidad

## Componentes catalogados

Globales:

- src/layouts/BaseLayout.astro
- src/components/global/Navbar.astro
- src/components/global/Footer.astro

UI atómicos:

- src/components/ui/SectionWrapper.astro
- src/components/ui/TopicCard.astro

UI atómicos legacy (no usados en Home actual):

- src/components/ui/ShortcutPill.astro

Secciones:

- src/components/sections/HomeHero.astro
- src/components/sections/ImportantResourcesSection.astro
- src/components/sections/SyllabusSection.astro
- src/components/sections/StudyFlowSection.astro
- src/components/sections/TopicContentSection.astro
- src/components/sections/TopicMarkdownContentSection.astro

Secciones legacy (no usadas en Home actual):

- src/components/sections/ShortcutsSection.astro

Páginas:

- src/pages/index.astro
- src/pages/tema/[id].astro

## Convenciones de nomenclatura

- Componentes: PascalCase.astro
- Props: camelCase
- Tipos: src/types en archivos .ts
- Capa de datos: src/lib en archivos .ts
- Rutas: convenciones nativas de Astro con segmentos dinámicos cuando aplica

## Patrones prohibidos

- Valores arbitrarios de Tailwind
- Inline styles
- Colores hardcodeados hex/rgb
- Emojis como iconos de interfaz
- Saltos de jerarquía de headings

## Decisiones documentadas

- 2026-03-24: Tema light + night para combinar lectura prolongada con contraste opcional
- 2026-03-24: Pair tipográfico Red Hat Display + Public Sans para tono académico moderno
- 2026-03-24: Arquitectura de componentes separada en global/ui/sections desde la maqueta inicial
- 2026-03-24: Home simplificado inicialmente a catálogo con Atajos Rápidos y Temario Completo (patrón luego retirado)
- 2026-03-26: TOC de tema con superficie elevada (base-200) y jerarquía visual por nivel de heading para mejorar escaneabilidad
- 2026-03-29: TOC lateral minimalista con título "En esta pagina", navegación h2/h3 anidada, sticky lateral y navegación por anclas sin resaltado activo por scroll.
- 2026-03-29: Pair tipográfico actualizado a Inter + Playfair Display para mejorar legibilidad en cuerpo y contraste editorial en títulos.
- 2026-03-29: TOC de tema oculto en mobile (visible desde lg) y navegación por hash reforzada para enlaces internos.
- 2026-04-08: TOC de tema simplificado para mostrar solo headings h2 (sin h3) y evitar saturación/overflow cuando un tema tiene muchas subsecciones.
- 2026-04-09: TOC de topics actualizado a estilo arbol minimalista con jerarquia visual h2/h3, superficie clara (base-100) y separadores sutiles para mejorar legibilidad frente a superficies oscuras.
- 2026-04-08: Estilo editorial unificado para todos los contenidos MDX de topics: jerarquía normalizada a h2/h3 en build, separación vertical amplia, h2 con separador inferior y subsecciones en tarjetas con indentación responsive.
- 2026-04-09: En topics de metodos, el titulo del metodo se mantiene en `h3` y subtitulos de detalle (`Procedimiento`, `Ejemplo`, `Formula`) se modelan como `h4` con una marca visual sutil para expresar subjerarquia.
- 2026-04-08: Contenido informativo de cada sección (bajo h2 y h3) envuelto en contenedores tipo card con tinte suave `info` y borde delicado para reforzar contraste entre títulos y bloques de estudio.
- 2026-04-09: Home (Temario Completo) sin contenedores tipo caja por bloque; los títulos de sección, bloque y cards usan `font-display` (Playfair) con escala tipográfica mayor para mejorar visibilidad.
- 2026-03-29: Pills de Atajos Rápidos con mayor legibilidad (texto base-content, peso semibold, foco visible y punto de color por variante) como patrón histórico posteriormente retirado del home.
- 2026-03-29: Migración de iconografía a Hugeicons con `astro-icon`, reemplazando Tabler para ampliar disponibilidad de símbolos matemáticos.
- 2026-03-29: Curaduría de iconos de temas priorizando variantes Hugeicons sin marcos geométricos (sin circle/square/triangle) para mantener un lenguaje visual más limpio.
- 2026-03-29: Coherencia de iconos por bloque del temario: algebra (math/function), geometria-trigonometria (ruler/compass/sine), analisis (inequality/chart/arrow-left-right), calculo diferencial (function-of-x + chart-line-data), calculo integral y series (summation).
- 2026-03-29: Home reorganizada sin sección de Atajos Rápidos; Temario Completo primero y Recursos Importantes al final para cerrar el recorrido de navegación.
- 2026-03-29: Footer global ampliado con bloque editorial y CTA principal "Ir al inicio" apuntando a /.
- 2026-03-29: Theme changer reforzado con clave dedicada `mathboard-theme`, inicializacion inmediata con `themeChange(false)` y estado visual activo del toggle con `btn-active`.
- 2026-03-29: Toggle de tema con iconografia contextual (luna en light, sol en night) usando clases `dark:*` para reforzar el estado activo sin JS adicional.

## Pendientes

- Reemplazar placeholders de texto por contenido editorial final
- Reemplazar placeholders de imagen por capturas reales del producto
- Conectar búsqueda del navbar a una fuente de contenido real
- Evaluar tema personalizado post-MVP si se necesita identidad visual propia

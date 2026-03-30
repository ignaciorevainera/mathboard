# PROJECT_CONTEXT

## Nombre del proyecto
Mathboard

## Descripcion
Plataforma integral para estudiar matemáticas, desde aritmética hasta cálculo avanzado. Permite consultar un catálogo de temas y navegar subtemas con soporte para fórmulas.

## Publico objetivo
Estudiantes de secundaria, universitarios y autodidactas de matemáticas. Nivel técnico básico-medio, familiarizados con herramientas de estudio digitales como Notion.

---

## BRIEFING DE ESTRUCTURA

### Paginas del sitio
- / (Home - Dashboard principal con Temario Completo y Recursos Importantes al final)
- /topic/[id] (Visor de contenido del tema con soporte para navegación por anclas)

### Secciones obligatorias por pagina
Home:
  - Sección de "Temario Completo" con un grid de tarjetas (cards) por cada tema principal. Cada tarjeta incluye icono, título, descripción, cantidad de subtemas y efecto hover.
  - Sección de "Recursos Importantes" ubicada al final del home para cerrar el recorrido de navegación y descarga.

Topic (/topic/[id]):
  - Botón de "Volver al temario".
  - Header del tema con icono grande, título, descripción y un efecto visual de resplandor (blur) de fondo.
  - Contenedor principal de contenido dividido en Subtemas (H2) y Secciones (H3).
  - Navegación suave (smooth scroll) hacia las anclas (hashes) de cada subtema.

### Componentes globales
- **Layout**: Contenedor principal que envuelve la aplicación, definiendo el fondo y el color de texto según el tema.
- **Navbar**: Cabecera sticky (fija al hacer scroll) que incluye:
  - Botón/Logo de inicio.
  - Barra de búsqueda central con icono.
  - Botón para alternar el tema (Claro/Oscuro).
- **Footer**: Pie de página minimalista con información del proyecto.

---

## BRIEFING VISUAL

### Tono estetico
Simple, limpio y enfocado en el contenido, similar a la experiencia de lectura en Notion. Moderno y tech, diseñado para que no distraiga y facilite la concentración en fórmulas complejas.

### Referencias visuales
- https://notion.so (por la limpieza, tipografía y estructura de documentos)
- https://linear.app (por el contraste elegante y la interfaz rápida)

### Preferencia de modo
Ambos (claro por defecto, oscuro disponible y ya implementado)

### Restricciones visuales
- Sin colores muy saturados que cansen la vista durante largas sesiones de estudio
- Sin animaciones excesivas o innecesarias
- Sin estilos corporativos aburridos

---

## BRIEFING FUNCIONAL

### Funcionalidades que el proyecto necesita
- Renderizado dinámico y estilizado de archivos .md y .mdx
- Soporte avanzado para renderizar sintaxis matemática (LaTeX/KaTeX) dentro del Markdown
- Navegación fluida (SPA) entre diferentes documentos y categorías

### Base de datos
Por definir (Inicialmente el contenido puede ser estático basado en los archivos .mdx exportados, pero escalable a una base de datos si se requiere guardar progreso o perfiles).

### Autenticacion
No.

---

## ESTADO ACTUAL
Proyecto funcional con catálogo de temas en home, visor de temas por anclas e iconografía Hugeicons.

## Proximos pasos
- Refinar copy editorial final en páginas y secciones.
- Auditar componentes no usados para limpieza técnica.

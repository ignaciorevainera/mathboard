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
- / (Home - Main dashboard con temario y atajos)
- /tema/[id] (Visor de contenido del tema con soporte para navegación por anclas)
- Pendiente: /resources (Herramientas extra)

### Secciones obligatorias por pagina
Home:
  - Sección de "Atajos Rápidos" (Shortcuts) con botones tipo píldora para acceso directo a subtemas específicos.
    ```
    <a
      href={link}
      class={cn(
        "px-4 py-2 rounded-full text-sm font-medium transition-all border shadow-sm hover:shadow",
        color
      )}
    >
      {title}
    </a>
    ```
  - Sección de "Temario Completo" con un grid de tarjetas (cards) por cada tema principal. Cada tarjeta incluye icono, título, descripción, cantidad de subtemas y efecto hover.
    ```
    <div 
      class="animate-fade-in-up" 
      style={{ animationDelay }}
    >
      <a 
        href={`/tema/${topic.id}`}
        class="group block h-full rounded-2xl border p-6 shadow-sm hover:shadow-md  transition-all relative overflow-hidden"
      >
        <div class="flex items-start justify-between mb-4">
          <div class={cn("p-3 rounded-xl shadow-sm", topic.color)}>
            <Icon class="w-6 h-6" />
          </div>
        </div>
        
        <h3 class="text-xl font-bold mb-2 transition-colors">
          {topic.title}
        </h3>
        
        <p class="text-sm mb-6 line-clamp-2">
          {topic.description}
        </p>

        <div class="flex items-center justify-between mt-auto pt-4 border-t">
          <span class="text-xs font-medium">
            {topic.subtopics.reduce((acc, curr) => acc + curr.items.length, 0)} temas
          </span>
          <div class="flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
            Ingresar <ChevronRight class="w-4 h-4 ml-1" />
          </div>
        </div>
      </a>
    </div>
    ```

Topic (/tema/[id]):
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
Proyecto recien iniciado. Pendiente sesion de diseno con agente kickstart.

## Proximos pasos
- Completar STACK.md
- Sesion de diseno con agente kickstart

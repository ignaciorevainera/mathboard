import type { Topic } from '../types/topic'

const topics: Topic[] = [
  {
    id: 'factoring-algebraic-expressions',
    title: 'Factoreo y Expresiones Algebraicas',
    description: 'Unidad orientada a la factorización de expresiones y al análisis avanzado de polinomios.',
    icon: 'tabler:math-function',
    colorVariant: 'primary',
    shortcuts: [
      { href: '/topic/factoring-algebraic-expressions#methods-of-factorization', title: 'Métodos de Factorización', variant: 'primary' },
      { href: '/topic/factoring-algebraic-expressions#advanced-polynomials', title: 'Polinomios Avanzados', variant: 'secondary' }
    ],
    sections: [
      {
        id: 'methods-of-factorization',
        title: 'Métodos de Factorización',
        summary: 'Técnicas esenciales para simplificar y descomponer expresiones polinómicas.',
        items: [
          'Factor Común: Identificación y extracción de factores constantes o variables presentes en todos los términos de una expresión.',
          'Factor Común por Grupos: Aplicación en polinomios donde la extracción parcial en conjuntos de términos permite una segunda factorización general.',
          'Diferencia de Cuadrados: Factorización de expresiones de la forma $a^2 - b^2 = (a-b)(a+b)$.',
          'Trinomio Cuadrado Perfecto: Reconocimiento y simplificación de la estructura polinómica resultante de un binomio al cuadrado $(a \\pm b)^2$.'
        ]
      },
      {
        id: 'advanced-polynomials',
        title: 'Polinomios Avanzados',
        summary: 'Herramientas para encontrar raíces, dividir polinomios y verificar resultados.',
        items: [
          'Cuatrinomio Cubo Perfecto: Reconocimiento de la estructura polinómica resultante de un binomio al cubo $(a \\pm b)^3$.',
          'Teorema de Gauss: Determinación de posibles raíces racionales mediante el cociente entre los divisores del término independiente y los del coeficiente principal.',
          'Regla de Ruffini: Algoritmo eficiente para la división de polinomios cuando el divisor es un binomio del tipo $(x \\pm r)$.',
          'Teorema del Resto: Cálculo del residuo de una división para verificar si un valor es raíz de un polinomio sin realizar la operación completa.'
        ]
      }
    ]
  },
  {
    id: 'logarithms-exponentials',
    title: 'Logaritmos y Exponenciales',
    description: 'Estudio de funciones exponenciales, teoría logarítmica y resolución de ecuaciones asociadas.',
    icon: 'tabler:chart-line',
    colorVariant: 'secondary',
    shortcuts: [
      { href: '/topic/logarithms-exponentials#exponential-functions', title: 'Funciones Exponenciales', variant: 'secondary' },
      { href: '/topic/logarithms-exponentials#logarithm-theory', title: 'Teoría de Logaritmos', variant: 'primary' },
      { href: '/topic/logarithms-exponentials#logarithmic-exponential-equations', title: 'Ecuaciones Logarítmicas y Exponenciales', variant: 'accent' }
    ],
    sections: [
      {
        id: 'exponential-functions',
        title: 'Funciones Exponenciales',
        summary: 'Comportamiento analítico y gráfico de funciones de la forma $f(x)=a^x$.',
        items: [
          'Análisis de la Función: Estudio de la forma $f(x)=a^x$ (con $a > 0$ y $a \\neq 1$), su dominio en todos los reales e imagen en los reales positivos.',
          'Comportamiento Gráfico: Determinación de crecimiento o decrecimiento según el valor de la base y ubicación de la asíntota horizontal.'
        ]
      },
      {
        id: 'logarithm-theory',
        title: 'Teoría de Logaritmos',
        summary: 'Definiciones y propiedades algebraicas para operar expresiones logarítmicas.',
        items: [
          'Definición y Propiedades: Relación fundamental $\\log_a(b)=c \\iff a^c=b$ junto a las leyes de logaritmo de un producto, cociente y potencia.',
          'Cambio de Base: Uso de fórmulas para la conversión de bases y manejo de logaritmos naturales (base e) y decimales.'
        ]
      },
      {
        id: 'logarithmic-exponential-equations',
        title: 'Ecuaciones Logarítmicas y Exponenciales',
        summary: 'Estrategias para despejar incógnitas en ecuaciones con exponentes y logaritmos.',
        items: [
          'Estrategias de Resolución: Métodos para despejar incógnitas mediante la igualación de bases, cambio de variable o aplicación de logaritmos en ambos miembros.'
        ]
      }
    ]
  },
  {
    id: 'inverse-functions',
    title: 'Funciones Inversas',
    description: 'Requisitos, procedimiento y propiedades para construir funciones inversas.',
    icon: 'tabler:arrows-left-right',
    colorVariant: 'accent',
    shortcuts: [
      { href: '/topic/inverse-functions#function-classification', title: 'Clasificación de Funciones', variant: 'accent' },
      { href: '/topic/inverse-functions#inverse-function-calculation', title: 'Cálculo de la Función Inversa', variant: 'secondary' },
      { href: '/topic/inverse-functions#properties-and-graph', title: 'Propiedades y Gráfica', variant: 'primary' }
    ],
    sections: [
      {
        id: 'function-classification',
        title: 'Clasificación de Funciones',
        summary: 'Criterios para determinar si una función es invertible.',
        items: [
          'Análisis de Biyectividad: Verificación de las condiciones de inyectividad y sobreyectividad como requisito indispensable para la existencia de una función inversa.'
        ]
      },
      {
        id: 'inverse-function-calculation',
        title: 'Cálculo de la Función Inversa',
        summary: 'Procedimiento algebraico para obtener $f^{-1}(x)$ y validaciones de dominio.',
        items: [
          'Procedimiento Analítico: Técnica de intercambio de variables $(x \\leftrightarrow y)$ y despeje de la nueva variable dependiente para obtener $f^{-1}(x)$.',
          'Restricción de Dominio: Ajustes en el dominio de funciones que no son biyectivas en todo su recorrido para permitir la inversión de una rama específica.'
        ]
      },
      {
        id: 'properties-and-graph',
        title: 'Propiedades y Gráfica',
        summary: 'Relación entre composición, identidad y simetría gráfica.',
        items: [
          'Composición y Simetría: Verificación de la identidad mediante $f(f^{-1}(x))=x$ y representación gráfica como una reflexión simétrica respecto a la recta $y=x$.'
        ]
      }
    ]
  },
  {
    id: 'geometry-trigonometry',
    title: 'Geometría y Trigonometría',
    description: 'Aplicación de geometría métrica, cónicas y herramientas trigonométricas avanzadas.',
    icon: 'tabler:triangle',
    colorVariant: 'primary',
    shortcuts: [
      { href: '/topic/geometry-trigonometry#geometry-and-conics', title: 'Geometría y Cónicas', variant: 'primary' },
      { href: '/topic/geometry-trigonometry#advanced-trigonometry', title: 'Trigonometría Avanzada', variant: 'accent' }
    ],
    sections: [
      {
        id: 'geometry-and-conics',
        title: 'Geometría y Cónicas',
        summary: 'Modelado geométrico en $2\\text{D}/3\\text{D}$ y análisis de curvas cónicas.',
        items: [
          'Geometría Métrica: Fórmulas y procedimientos para el cálculo de perímetros, áreas planas y volúmenes de cuerpos geométricos complejos.',
          'Secciones Cónicas: Estudio analítico y representación de la Circunferencia, Parábola, Elipse e Hipérbola, incluyendo sus elementos característicos (focos, vértices y asíntotas).'
        ]
      },
      {
        id: 'advanced-trigonometry',
        title: 'Trigonometría Avanzada',
        summary: 'Uso del círculo unitario e identidades para simplificación y resolución.',
        items: [
          'Ángulos Notables: Valores exactos de las funciones trigonométricas en el círculo unitario para $0^\\circ$, $30^\\circ$, $45^\\circ$, $60^\\circ$ y $90^\\circ$.',
          'Identidades Trigonométricas: Uso de relaciones pitagóricas, recíprocas y aplicación de fórmulas de ángulos compuestos, ángulo doble y ángulo medio.'
        ]
      }
    ]
  },
  {
    id: 'limits-continuity',
    title: 'Análisis de Límites y Continuidad',
    description: 'Técnicas de límites, análisis de continuidad y comportamiento asintótico de funciones.',
    icon: 'tabler:chart-dots',
    colorVariant: 'secondary',
    shortcuts: [
      { href: '/topic/limits-continuity#limit-calculation', title: 'Cálculo de Límites', variant: 'secondary' },
      { href: '/topic/limits-continuity#continuity-asymptotes', title: 'Continuidad y Asíntotas', variant: 'primary' }
    ],
    sections: [
      {
        id: 'limit-calculation',
        title: 'Cálculo de Límites',
        summary: 'Resolución de indeterminaciones y uso de límites notables.',
        items: [
          'Resolución de Indeterminaciones: Técnicas para salvar los casos críticos $\\frac{0}{0}$, $\\frac{\\infty}{\\infty}$, $1^{\\infty}$ y $\\infty-\\infty$.',
          'Límites Especiales: Aplicación del límite fundamental trigonométrico y resolución de límites que conducen al número $e$.'
        ]
      },
      {
        id: 'continuity-asymptotes',
        title: 'Continuidad y Asíntotas',
        summary: 'Estudio local y global de funciones con teoremas de valor.',
        items: [
          'Estudio de Continuidad: Evaluación de la existencia de límite e imagen en un punto y clasificación de discontinuidades (evitable y esencial).',
          'Análisis Asintótico: Localización y cálculo de límites para determinar la existencia de asíntotas verticales, horizontales y oblicuas.',
          'Teoremas de Valor: Aplicación práctica del Teorema de Bolzano para la detección de raíces y el Teorema del Valor Intermedio.'
        ]
      }
    ]
  },
  {
    id: 'differential-calculus-function-analysis',
    title: 'Cálculo Diferencial y Estudio de Funciones',
    description: 'Derivación y análisis completo de funciones para modelar variación y optimización.',
    icon: 'tabler:math-function',
    colorVariant: 'accent',
    shortcuts: [
      { href: '/topic/differential-calculus-function-analysis#derivative', title: 'La Derivada', variant: 'accent' },
      { href: '/topic/differential-calculus-function-analysis#complete-function-analysis', title: 'Estudio Completo de una Función', variant: 'primary' }
    ],
    sections: [
      {
        id: 'derivative',
        title: 'La Derivada',
        summary: 'Fundamentos de derivación y aplicaciones en límites especiales.',
        items: [
          'Concepto y Mecánica: Definición mediante el límite del cociente incremental, reglas de derivación, regla de la cadena y derivación implícita.',
          "Regla de L'Hôpital: Empleo de la derivada como herramienta para resolver límites con indeterminaciones de tipo cociente."
        ]
      },
      {
        id: 'complete-function-analysis',
        title: 'Estudio Completo de una Función',
        summary: 'Uso de derivadas para crecimiento, concavidad y problemas de optimización.',
        items: [
          'Análisis de Primera Derivada: Identificación de puntos críticos para determinar intervalos de crecimiento, decrecimiento y extremos relativos (máximos y mínimos).',
          'Análisis de Segunda Derivada: Evaluación de la concavidad (hacia arriba o hacia abajo) y localización precisa de puntos de inflexión.',
          'Optimización: Modelado matemático y resolución de problemas que requieren hallar valores máximos o mínimos en contextos prácticos.'
        ]
      }
    ]
  },
  {
    id: 'integral-calculus',
    title: 'Cálculo Integral',
    description: 'Métodos de integración e interpretación geométrica de la integral definida.',
    icon: 'tabler:math-function',
    colorVariant: 'primary',
    shortcuts: [
      { href: '/topic/integral-calculus#integration-methods', title: 'Métodos de Integración', variant: 'primary' },
      { href: '/topic/integral-calculus#definite-integral-applications', title: 'Integral Definida y Aplicaciones', variant: 'secondary' }
    ],
    sections: [
      {
        id: 'integration-methods',
        title: 'Métodos de Integración',
        summary: 'Selección y aplicación de técnicas según la estructura de la función.',
        items: [
          'Técnicas de Integración: Aplicación de los métodos de sustitución, integración por partes y descomposición en fracciones simples para funciones racionales.'
        ]
      },
      {
        id: 'definite-integral-applications',
        title: 'Integral Definida y Aplicaciones',
        summary: 'Cálculo de integrales definidas y áreas entre curvas.',
        items: [
          'Regla de Barrow: Procedimiento fundamental para el cálculo de integrales definidas en intervalos cerrados y estudio de sus propiedades.',
          'Cálculo de Áreas: Determinación de superficies planas delimitadas por una función y el eje de abscisas, o áreas encerradas entre dos o más curvas.'
        ]
      }
    ]
  },
  {
    id: 'sequences-series',
    title: 'Sucesiones y Series',
    description: 'Convergencia de sucesiones y series, y aproximación funcional con series de potencias.',
    icon: 'tabler:list-numbers',
    colorVariant: 'secondary',
    shortcuts: [
      { href: '/topic/sequences-series#sequences-convergence', title: 'Sucesiones y Convergencia', variant: 'secondary' },
      { href: '/topic/sequences-series#series-approximation', title: 'Series y Aproximación', variant: 'accent' }
    ],
    sections: [
      {
        id: 'sequences-convergence',
        title: 'Sucesiones y Convergencia',
        summary: 'Análisis del término general y comportamiento al infinito.',
        items: [
          'Progresiones: Estudio del término general en progresiones aritméticas y geométricas, junto al análisis de su comportamiento y límite al infinito.'
        ]
      },
      {
        id: 'series-approximation',
        title: 'Series y Aproximación',
        summary: 'Criterios de convergencia y aproximación mediante desarrollos polinómicos.',
        items: [
          'Convergencia de Series: Empleo de criterios numéricos para establecer si una serie infinita posee una suma finita.',
          'Polinomios de Taylor y MacLaurin: Construcción de series de potencias para aproximar funciones trascendentes mediante polinomios en la vecindad de un punto.'
        ]
      }
    ]
  }
]

export function getTopics(): Topic[] {
  return topics
}

export function getTopicById(id: string): Topic | undefined {
  return topics.find((topic) => topic.id === id)
}

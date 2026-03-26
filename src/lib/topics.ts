import type { Topic } from '../types/topic'

const topics: Topic[] = [
  {
    id: 'arithmetic',
    title: 'Aritmética',
    description: '[Descripción del bloque de operaciones fundamentales y proporcionalidad]',
    icon: 'tabler:calculator',
    colorVariant: 'primary',
    shortcuts: [
      { href: '/topic/arithmetic#integers', title: 'Números enteros', variant: 'primary' },
      { href: '/topic/arithmetic#fractions', title: 'Fracciones', variant: 'secondary' },
      { href: '/topic/arithmetic#percentages', title: 'Porcentajes', variant: 'accent' }
    ],
    sections: [
      {
        id: 'integers',
        title: 'Números enteros',
        summary: '[Resumen de reglas operativas con enteros y signos]',
        items: [
          '[Contenido esperado — reglas de suma y resta con signos opuestos y ejercicios guiados]',
          '[Contenido esperado — multiplicación y división de enteros con patrones de signos]'
        ]
      },
      {
        id: 'fractions',
        title: 'Fracciones',
        summary: '[Resumen de equivalencias, simplificación y operaciones combinadas]',
        items: [
          '[Contenido esperado — simplificación y ampliación de fracciones con ejemplos]',
          '[Contenido esperado — suma, resta y producto de fracciones con denominadores distintos]'
        ]
      },
      {
        id: 'percentages',
        title: 'Porcentajes',
        summary: '[Resumen de aplicaciones en variaciones, descuentos e incrementos]',
        items: [
          '[Contenido esperado — porcentaje de una cantidad y porcentaje inverso]',
          '[Contenido esperado — problemas de aumento y descuento en contextos cotidianos]'
        ]
      }
    ]
  },
  {
    id: 'algebra',
    title: 'Álgebra',
    description: '[Descripción del bloque de expresiones, ecuaciones y factorización]',
    icon: 'tabler:math-function',
    colorVariant: 'secondary',
    shortcuts: [
      { href: '/topic/algebra#expressions', title: 'Expresiones', variant: 'secondary' },
      { href: '/topic/algebra#equations', title: 'Ecuaciones', variant: 'primary' },
      { href: '/topic/algebra#factoring', title: 'Factorización', variant: 'accent' }
    ],
    sections: [
      {
        id: 'expressions',
        title: 'Expresiones algebraicas',
        summary: '[Resumen de términos, polinomios y operaciones elementales]',
        items: [
          '[Contenido esperado — reducción de términos semejantes paso a paso]',
          '[Contenido esperado — producto y división de monomios y polinomios simples]'
        ]
      },
      {
        id: 'equations',
        title: 'Ecuaciones lineales',
        summary: '[Resumen de métodos de resolución y verificación de soluciones]',
        items: [
          '[Contenido esperado — despeje de incógnitas en una variable]',
          '[Contenido esperado — traducción de enunciados a ecuaciones lineales]'
        ]
      },
      {
        id: 'factoring',
        title: 'Factorización',
        summary: '[Resumen de técnicas de factorización más frecuentes]',
        items: [
          '[Contenido esperado — factor común y diferencia de cuadrados]',
          '[Contenido esperado — trinomio cuadrado perfecto y práctica guiada]'
        ]
      }
    ]
  },
  {
    id: 'calculus',
    title: 'Cálculo',
    description: '[Descripción del bloque de límites, derivadas e integrales introductorias]',
    icon: 'tabler:chart-line',
    colorVariant: 'accent',
    shortcuts: [
      { href: '/topic/calculus#limits', title: 'Límites', variant: 'accent' },
      { href: '/topic/calculus#derivatives', title: 'Derivadas', variant: 'secondary' },
      { href: '/topic/calculus#integrals', title: 'Integrales', variant: 'primary' }
    ],
    sections: [
      {
        id: 'limits',
        title: 'Límites',
        summary: '[Resumen de aproximación, continuidad y límites laterales]',
        items: [
          '[Contenido esperado — interpretación gráfica de límites con tablas y curvas]',
          '[Contenido esperado — indeterminaciones básicas y simplificación algebraica]'
        ]
      },
      {
        id: 'derivatives',
        title: 'Derivadas',
        summary: '[Resumen de tasa de cambio y reglas de derivación]',
        items: [
          '[Contenido esperado — regla de la potencia, suma y producto]',
          '[Contenido esperado — aplicaciones a recta tangente y optimización básica]'
        ]
      },
      {
        id: 'integrals',
        title: 'Integrales',
        summary: '[Resumen de antiderivadas y área bajo la curva]',
        items: [
          '[Contenido esperado — integrales inmediatas y constantes de integración]',
          '[Contenido esperado — interpretación geométrica y ejercicios introductorios]'
        ]
      }
    ]
  },
  {
    id: 'geometry',
    title: 'Geometría',
    description: '[Descripción del bloque de figuras planas, cuerpos y relaciones métricas]',
    icon: 'tabler:calculator',
    colorVariant: 'primary',
    shortcuts: [
      { href: '/topic/geometry#triangles', title: 'Triángulos', variant: 'primary' },
      { href: '/topic/geometry#circles', title: 'Circunferencias', variant: 'secondary' },
      { href: '/topic/geometry#areas-volumes', title: 'Áreas y volúmenes', variant: 'accent' }
    ],
    sections: [
      {
        id: 'triangles',
        title: 'Triángulos',
        summary: '[Resumen de clasificación, propiedades y teoremas básicos]',
        items: [
          '[Contenido esperado — clasificación por lados y ángulos con ejercicios visuales]',
          '[Contenido esperado — aplicaciones del teorema de Pitágoras en problemas prácticos]'
        ]
      },
      {
        id: 'circles',
        title: 'Circunferencias',
        summary: '[Resumen de elementos de la circunferencia y longitud de arco]',
        items: [
          '[Contenido esperado — radio, diámetro, cuerda y ángulo central]',
          '[Contenido esperado — cálculo de perímetro y área de círculos]'
        ]
      },
      {
        id: 'areas-volumes',
        title: 'Áreas y volúmenes',
        summary: '[Resumen de fórmulas para figuras planas y cuerpos tridimensionales]',
        items: [
          '[Contenido esperado — áreas de polígonos y figuras compuestas]',
          '[Contenido esperado — volumen de prismas, cilindros y conos]'
        ]
      }
    ]
  },
  {
    id: 'trigonometry',
    title: 'Trigonometría',
    description: '[Descripción del bloque de razones trigonométricas e identidades fundamentales]',
    icon: 'tabler:math-function',
    colorVariant: 'secondary',
    shortcuts: [
      { href: '/topic/trigonometry#ratios', title: 'Razones', variant: 'secondary' },
      { href: '/topic/trigonometry#identities', title: 'Identidades', variant: 'primary' },
      { href: '/topic/trigonometry#equations', title: 'Ecuaciones trigonométricas', variant: 'accent' }
    ],
    sections: [
      {
        id: 'ratios',
        title: 'Razones trigonométricas',
        summary: '[Resumen de seno, coseno y tangente en triángulos rectángulos]',
        items: [
          '[Contenido esperado — interpretación geométrica de las razones trigonométricas]',
          '[Contenido esperado — resolución de triángulos con datos parciales]'
        ]
      },
      {
        id: 'identities',
        title: 'Identidades fundamentales',
        summary: '[Resumen de identidades básicas y su uso en simplificaciones]',
        items: [
          '[Contenido esperado — relaciones pitagóricas y cocientes trigonométricos]',
          '[Contenido esperado — simplificación de expresiones paso a paso]'
        ]
      },
      {
        id: 'equations',
        title: 'Ecuaciones trigonométricas',
        summary: '[Resumen de estrategias de resolución en intervalos y soluciones generales]',
        items: [
          '[Contenido esperado — ecuaciones básicas con funciones seno y coseno]',
          '[Contenido esperado — uso del círculo trigonométrico para validar soluciones]'
        ]
      }
    ]
  },
  {
    id: 'statistics',
    title: 'Estadística',
    description: '[Descripción del bloque de organización de datos, medidas descriptivas y gráficos]',
    icon: 'tabler:chart-line',
    colorVariant: 'accent',
    shortcuts: [
      { href: '/topic/statistics#data-tables', title: 'Tablas de datos', variant: 'accent' },
      { href: '/topic/statistics#central-tendency', title: 'Tendencia central', variant: 'secondary' },
      { href: '/topic/statistics#dispersion', title: 'Dispersión', variant: 'primary' }
    ],
    sections: [
      {
        id: 'data-tables',
        title: 'Tablas y frecuencia',
        summary: '[Resumen de construcción de tablas de frecuencia y lectura de datos]',
        items: [
          '[Contenido esperado — clasificación de datos cualitativos y cuantitativos]',
          '[Contenido esperado — tablas de frecuencia absoluta, relativa y acumulada]'
        ]
      },
      {
        id: 'central-tendency',
        title: 'Medidas de tendencia central',
        summary: '[Resumen de media, mediana y moda con interpretación]',
        items: [
          '[Contenido esperado — cálculo manual y comparación de medidas]',
          '[Contenido esperado — selección de la medida adecuada según el contexto]'
        ]
      },
      {
        id: 'dispersion',
        title: 'Medidas de dispersión',
        summary: '[Resumen de rango, varianza y desviación estándar]',
        items: [
          '[Contenido esperado — interpretación de la variabilidad en conjuntos de datos]',
          '[Contenido esperado — cálculo básico de desviación estándar]'
        ]
      }
    ]
  },
  {
    id: 'probability',
    title: 'Probabilidad',
    description: '[Descripción del bloque de eventos, conteo y modelos probabilísticos básicos]',
    icon: 'tabler:math-function',
    colorVariant: 'secondary',
    shortcuts: [
      { href: '/topic/probability#events', title: 'Eventos', variant: 'secondary' },
      { href: '/topic/probability#counting', title: 'Conteo', variant: 'primary' },
      { href: '/topic/probability#distributions', title: 'Distribuciones', variant: 'accent' }
    ],
    sections: [
      {
        id: 'events',
        title: 'Eventos y espacio muestral',
        summary: '[Resumen de tipos de eventos y operaciones entre conjuntos]',
        items: [
          '[Contenido esperado — unión, intersección y complemento de eventos]',
          '[Contenido esperado — probabilidad clásica en experimentos simples]'
        ]
      },
      {
        id: 'counting',
        title: 'Técnicas de conteo',
        summary: '[Resumen de principio multiplicativo, permutaciones y combinaciones]',
        items: [
          '[Contenido esperado — conteo ordenado y no ordenado con ejemplos]',
          '[Contenido esperado — aplicación de combinatoria a problemas de selección]'
        ]
      },
      {
        id: 'distributions',
        title: 'Distribuciones básicas',
        summary: '[Resumen de variables aleatorias y distribución binomial inicial]',
        items: [
          '[Contenido esperado — concepto de variable aleatoria discreta]',
          '[Contenido esperado — modelado de escenarios simples con distribución binomial]'
        ]
      }
    ]
  },
  {
    id: 'linear-algebra',
    title: 'Álgebra lineal',
    description: '[Descripción del bloque de vectores, matrices y sistemas de ecuaciones lineales]',
    icon: 'tabler:calculator',
    colorVariant: 'primary',
    shortcuts: [
      { href: '/topic/linear-algebra#vectors', title: 'Vectores', variant: 'primary' },
      { href: '/topic/linear-algebra#matrices', title: 'Matrices', variant: 'secondary' },
      { href: '/topic/linear-algebra#linear-systems', title: 'Sistemas lineales', variant: 'accent' }
    ],
    sections: [
      {
        id: 'vectors',
        title: 'Vectores',
        summary: '[Resumen de representación, operaciones y producto escalar]',
        items: [
          '[Contenido esperado — suma, resta y multiplicación por escalar]',
          '[Contenido esperado — interpretación geométrica en el plano y el espacio]'
        ]
      },
      {
        id: 'matrices',
        title: 'Matrices',
        summary: '[Resumen de operaciones matriciales y determinantes]',
        items: [
          '[Contenido esperado — suma, producto y transpuesta de matrices]',
          '[Contenido esperado — cálculo de determinantes en matrices pequeñas]'
        ]
      },
      {
        id: 'linear-systems',
        title: 'Sistemas de ecuaciones lineales',
        summary: '[Resumen de métodos de sustitución, igualación y eliminación]',
        items: [
          '[Contenido esperado — clasificación de sistemas compatibles e incompatibles]',
          '[Contenido esperado — resolución por eliminación gaussiana básica]'
        ]
      }
    ]
  },
  {
    id: 'discrete-math',
    title: 'Matemática discreta',
    description: '[Descripción del bloque de lógica, conjuntos y estructuras discretas básicas]',
    icon: 'tabler:math-function',
    colorVariant: 'secondary',
    shortcuts: [
      { href: '/topic/discrete-math#logic', title: 'Lógica', variant: 'secondary' },
      { href: '/topic/discrete-math#sets', title: 'Conjuntos', variant: 'primary' },
      { href: '/topic/discrete-math#graphs', title: 'Grafos', variant: 'accent' }
    ],
    sections: [
      {
        id: 'logic',
        title: 'Lógica proposicional',
        summary: '[Resumen de proposiciones, conectores y tablas de verdad]',
        items: [
          '[Contenido esperado — equivalencias lógicas y simplificación de expresiones]',
          '[Contenido esperado — validez de argumentos y reglas de inferencia]'
        ]
      },
      {
        id: 'sets',
        title: 'Teoría de conjuntos',
        summary: '[Resumen de operaciones entre conjuntos y cardinalidad]',
        items: [
          '[Contenido esperado — unión, intersección, diferencia y complemento]',
          '[Contenido esperado — diagramas de Venn para modelar problemas]'
        ]
      },
      {
        id: 'graphs',
        title: 'Introducción a grafos',
        summary: '[Resumen de vértices, aristas y recorridos elementales]',
        items: [
          '[Contenido esperado — tipos de grafos y representación en matrices]',
          '[Contenido esperado — caminos mínimos en ejemplos introductorios]'
        ]
      }
    ]
  },
  {
    id: 'analytic-geometry',
    title: 'Geometría analítica',
    description: '[Descripción del bloque de rectas, cónicas y coordenadas en el plano]',
    icon: 'tabler:chart-line',
    colorVariant: 'accent',
    shortcuts: [
      { href: '/topic/analytic-geometry#lines', title: 'Rectas', variant: 'accent' },
      { href: '/topic/analytic-geometry#conics', title: 'Cónicas', variant: 'secondary' },
      { href: '/topic/analytic-geometry#distance-midpoint', title: 'Distancia y punto medio', variant: 'primary' }
    ],
    sections: [
      {
        id: 'lines',
        title: 'Rectas en el plano',
        summary: '[Resumen de pendiente, ecuaciones y análisis de paralelismo]',
        items: [
          '[Contenido esperado — forma pendiente-intersección y forma general]',
          '[Contenido esperado — rectas paralelas y perpendiculares con ejercicios]'
        ]
      },
      {
        id: 'conics',
        title: 'Cónicas',
        summary: '[Resumen de circunferencia, parábola, elipse e hipérbola]',
        items: [
          '[Contenido esperado — identificación de cónicas por su ecuación]',
          '[Contenido esperado — elementos notables y representación gráfica]'
        ]
      },
      {
        id: 'distance-midpoint',
        title: 'Distancia y punto medio',
        summary: '[Resumen de fórmulas métricas entre dos puntos]',
        items: [
          '[Contenido esperado — cálculo de distancia en coordenadas cartesianas]',
          '[Contenido esperado — aplicaciones del punto medio en segmentos]'
        ]
      }
    ]
  },
  {
    id: 'financial-math',
    title: 'Matemática financiera',
    description: '[Descripción del bloque de interés, tasas y proyecciones de inversión]',
    icon: 'tabler:calculator',
    colorVariant: 'primary',
    shortcuts: [
      { href: '/topic/financial-math#simple-interest', title: 'Interés simple', variant: 'primary' },
      { href: '/topic/financial-math#compound-interest', title: 'Interés compuesto', variant: 'secondary' },
      { href: '/topic/financial-math#annuities', title: 'Rentas', variant: 'accent' }
    ],
    sections: [
      {
        id: 'simple-interest',
        title: 'Interés simple',
        summary: '[Resumen de capital, tasa y tiempo en operaciones básicas]',
        items: [
          '[Contenido esperado — cálculo de monto e interés simple]',
          '[Contenido esperado — despeje de variables en fórmulas financieras]'
        ]
      },
      {
        id: 'compound-interest',
        title: 'Interés compuesto',
        summary: '[Resumen de capitalización periódica y crecimiento exponencial]',
        items: [
          '[Contenido esperado — cálculo de valor futuro y valor presente]',
          '[Contenido esperado — comparación entre tasas nominales y efectivas]'
        ]
      },
      {
        id: 'annuities',
        title: 'Rentas y anualidades',
        summary: '[Resumen de pagos periódicos y valoración de flujos]',
        items: [
          '[Contenido esperado — anualidades vencidas y anticipadas]',
          '[Contenido esperado — aplicaciones en créditos y ahorro programado]'
        ]
      }
    ]
  },
  {
    id: 'numerical-methods',
    title: 'Métodos numéricos',
    description: '[Descripción del bloque de aproximaciones computacionales para resolver problemas matemáticos]',
    icon: 'tabler:chart-line',
    colorVariant: 'accent',
    shortcuts: [
      { href: '/topic/numerical-methods#roots', title: 'Búsqueda de raíces', variant: 'accent' },
      { href: '/topic/numerical-methods#interpolation', title: 'Interpolación', variant: 'secondary' },
      { href: '/topic/numerical-methods#numerical-integration', title: 'Integración numérica', variant: 'primary' }
    ],
    sections: [
      {
        id: 'roots',
        title: 'Métodos de raíces',
        summary: '[Resumen de bisección, secante y Newton-Raphson]',
        items: [
          '[Contenido esperado — criterios de convergencia y error absoluto]',
          '[Contenido esperado — implementación guiada con iteraciones]'
        ]
      },
      {
        id: 'interpolation',
        title: 'Interpolación polinómica',
        summary: '[Resumen de métodos de Lagrange y diferencias finitas]',
        items: [
          '[Contenido esperado — construcción de polinomios interpolantes]',
          '[Contenido esperado — estimación de valores intermedios con tablas]'
        ]
      },
      {
        id: 'numerical-integration',
        title: 'Integración numérica',
        summary: '[Resumen de reglas del trapecio y Simpson para aproximar áreas]',
        items: [
          '[Contenido esperado — comparación de precisión entre métodos]',
          '[Contenido esperado — uso de particiones y control de error]'
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

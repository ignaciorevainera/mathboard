import type { Topic } from '../types/topic'

const topics: Topic[] = [
  {
    id: 'aritmetica',
    title: 'Aritmética',
    description: '[Descripción del bloque de operaciones fundamentales y proporcionalidad]',
    icon: 'tabler:calculator',
    colorVariant: 'primary',
    shortcuts: [
      { href: '/tema/aritmetica#numeros-enteros', title: 'Números enteros', variant: 'primary' },
      { href: '/tema/aritmetica#fracciones', title: 'Fracciones', variant: 'secondary' },
      { href: '/tema/aritmetica#porcentajes', title: 'Porcentajes', variant: 'accent' }
    ],
    sections: [
      {
        id: 'numeros-enteros',
        title: 'Números enteros',
        summary: '[Resumen de reglas operativas con enteros y signos]',
        items: [
          '[Contenido esperado — reglas de suma y resta con signos opuestos y ejercicios guiados]',
          '[Contenido esperado — multiplicación y división de enteros con patrones de signos]'
        ]
      },
      {
        id: 'fracciones',
        title: 'Fracciones',
        summary: '[Resumen de equivalencias, simplificación y operaciones combinadas]',
        items: [
          '[Contenido esperado — simplificación y ampliación de fracciones con ejemplos]',
          '[Contenido esperado — suma, resta y producto de fracciones con denominadores distintos]'
        ]
      },
      {
        id: 'porcentajes',
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
      { href: '/tema/algebra#expresiones', title: 'Expresiones', variant: 'secondary' },
      { href: '/tema/algebra#ecuaciones', title: 'Ecuaciones', variant: 'primary' },
      { href: '/tema/algebra#factorizacion', title: 'Factorización', variant: 'accent' }
    ],
    sections: [
      {
        id: 'expresiones',
        title: 'Expresiones algebraicas',
        summary: '[Resumen de términos, polinomios y operaciones elementales]',
        items: [
          '[Contenido esperado — reducción de términos semejantes paso a paso]',
          '[Contenido esperado — producto y división de monomios y polinomios simples]'
        ]
      },
      {
        id: 'ecuaciones',
        title: 'Ecuaciones lineales',
        summary: '[Resumen de métodos de resolución y verificación de soluciones]',
        items: [
          '[Contenido esperado — despeje de incógnitas en una variable]',
          '[Contenido esperado — traducción de enunciados a ecuaciones lineales]'
        ]
      },
      {
        id: 'factorizacion',
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
    id: 'calculo',
    title: 'Cálculo',
    description: '[Descripción del bloque de límites, derivadas e integrales introductorias]',
    icon: 'tabler:chart-line',
    colorVariant: 'accent',
    shortcuts: [
      { href: '/tema/calculo#limites', title: 'Límites', variant: 'accent' },
      { href: '/tema/calculo#derivadas', title: 'Derivadas', variant: 'secondary' },
      { href: '/tema/calculo#integrales', title: 'Integrales', variant: 'primary' }
    ],
    sections: [
      {
        id: 'limites',
        title: 'Límites',
        summary: '[Resumen de aproximación, continuidad y límites laterales]',
        items: [
          '[Contenido esperado — interpretación gráfica de límites con tablas y curvas]',
          '[Contenido esperado — indeterminaciones básicas y simplificación algebraica]'
        ]
      },
      {
        id: 'derivadas',
        title: 'Derivadas',
        summary: '[Resumen de tasa de cambio y reglas de derivación]',
        items: [
          '[Contenido esperado — regla de la potencia, suma y producto]',
          '[Contenido esperado — aplicaciones a recta tangente y optimización básica]'
        ]
      },
      {
        id: 'integrales',
        title: 'Integrales',
        summary: '[Resumen de antiderivadas y área bajo la curva]',
        items: [
          '[Contenido esperado — integrales inmediatas y constantes de integración]',
          '[Contenido esperado — interpretación geométrica y ejercicios introductorios]'
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

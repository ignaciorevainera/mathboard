import type { DocumentResource } from '../types/document'

const documents: DocumentResource[] = [
  {
    id: 'factoring-methods',
    title: 'Metodos de factoreo',
    description: 'Resumen de tecnicas y casos de factorizacion para algebra.',
    filePath: '/documents/metodos-de-factoreo.pdf',
    colorVariant: 'primary'
  },
  {
    id: 'derivatives-table',
    title: 'Tabla de derivadas',
    description: 'Referencia rápida de reglas de derivación con funciones frecuentes.',
    filePath: '/documents/tabla-derivadas.pdf',
    colorVariant: 'secondary'
  },
  {
    id: 'integrals-table',
    title: 'Tabla de integrales',
    description: 'Compendio de integrales inmediatas y formas más usadas en ejercicios.',
    filePath: '/documents/tabla-integrales.pdf',
    colorVariant: 'accent'
  },
  {
    id: 'trigonometric-identities',
    title: 'Identidades trigonométricas',
    description: 'Relaciones fundamentales y transformaciones trigonométricas clave.',
    filePath: '/documents/identidades-trigonometricas.pdf',
    colorVariant: 'accent'
  },
  {
    id: 'notable-angles',
    title: 'Angulos notables',
    description: 'Valores de seno, coseno y tangente para angulos de referencia.',
    filePath: '/documents/angulos-notables.pdf',
    colorVariant: 'primary'
  },
  {
    id: 'limits-guide',
    title: 'Guia de limites',
    description: 'Propiedades, tecnicas y casos frecuentes para resolver limites.',
    filePath: '/documents/limites.pdf',
    colorVariant: 'secondary'
  },
  {
    id: 'logarithms-exponentials',
    title: 'Logaritmos y exponenciales',
    description: 'Formulario y reglas clave para simplificar y resolver ecuaciones.',
    filePath: '/documents/logaritmos-exponenciales.pdf',
    colorVariant: 'secondary'
  }
]

export function getDocuments(): DocumentResource[] {
  return documents
}

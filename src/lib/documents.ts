import type { DocumentResource } from '../types/document'

const documents: DocumentResource[] = [
  {
    id: 'derivatives-table',
    title: 'Tabla de derivadas',
    description: 'Referencia rápida de reglas de derivación con funciones frecuentes.',
    filePath: '/documents/tabla-derivadas.pdf',
    colorVariant: 'primary'
  },
  {
    id: 'integrals-table',
    title: 'Tabla de integrales',
    description: 'Compendio de integrales inmediatas y formas más usadas en ejercicios.',
    filePath: '/documents/tabla-integrales.pdf',
    colorVariant: 'secondary'
  },
  {
    id: 'trigonometric-identities',
    title: 'Identidades trigonométricas',
    description: 'Relaciones fundamentales y transformaciones trigonométricas clave.',
    filePath: '/documents/identidades-trigonometricas.pdf',
    colorVariant: 'accent'
  }
]

export function getDocuments(): DocumentResource[] {
  return documents
}

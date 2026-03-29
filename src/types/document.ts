export interface DocumentResource {
  id: string
  title: string
  description: string
  filePath: string
  colorVariant: 'primary' | 'secondary' | 'accent' | 'neutral'
}

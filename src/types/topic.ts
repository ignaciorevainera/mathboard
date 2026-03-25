export interface TopicSection {
  id: string
  title: string
  summary: string
  items: string[]
}

export interface Topic {
  id: string
  title: string
  description: string
  icon: string
  colorVariant: 'primary' | 'secondary' | 'accent' | 'neutral'
  shortcuts: {
    href: string
    title: string
    variant: 'primary' | 'secondary' | 'accent' | 'neutral'
  }[]
  sections: TopicSection[]
}

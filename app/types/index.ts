type BadgeLabel = 'Personal' | 'Academic' | 'Professional' | 'Hobbies' | 'Others'

export type Badge = {
    label: BadgeLabel
    icon: string
}

export type Post = {
    title: string
    description: string
    date: Date
    image?: string
    badge: Badge['label']
    to?: string
    target?: string
}

export type Locale = 'pt-br' | 'en' | 'es'

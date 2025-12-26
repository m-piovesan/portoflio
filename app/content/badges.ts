import type { Badge } from '~/types'

export function createBadgeDefinitions(
  t: (key: string) => string,
): Badge[] {
  return [
    { label: 'Personal', title: t('personal'), icon: 'i-lucide-user-round' },
    { label: 'Academic', title: t('academic'), icon: 'i-lucide-graduation-cap' },
    { label: 'Professional', title: t('professional'), icon: 'i-lucide-code' },
    { label: 'Hobbies', title: t('hobbies'), icon: 'i-lucide-hand-metal' },
    { label: 'Others', title: t('others'), icon: 'i-lucide-box' },
  ]
}

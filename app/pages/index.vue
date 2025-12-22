<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui';
import type { Badge, Locale, Post } from '~/types';

const { locales, setLocale, locale } = useI18n()

const localeMap: Record<Locale, string> = {
    'pt-br': 'pt-BR',
    en: 'en-US',
    es: 'es-ES',
}

const timeline: Post[] = [
    {
        title: $t('bdayTitle'),
        description: $t('bdayDesc'),
        date: new Date('2003-11-12T10:00:00.000Z'),
        badge: 'Personal',
    },
    {
        title: 'Mudança para Curitiba',
        description:
            'saímos bem cedo de Videira, eu, meus pais e meu irmão, a viagem deu umas 5h no total. Videira e Curitiba ficam a uns 330km então é uma viagem consideravelmente cansativa, mas obviamente estava bem animado, a gente já tinha visto e alugado o apartamento uns tempos antes, então basicamente separei minhas roupas, computador e tals e foi isso;',
        date: new Date('2022-06-05T00:00:00.000Z'),
        badge: 'Personal',
    },
    {
        title: $t('ifcTitle'),
        description: $t('ifcDesc'),
        date: new Date('2019-02-27T00:00:00.000Z'),
        badge: 'Personal',
    },
    {
        title: $t('mindtechTitle'),
        description: $t('mindtechDesc'),
        date: new Date('2024-09-10T00:00:00.000Z'),
        image: 'https://nuxt.com/assets/blog/v3.16.png',
        badge: 'Professional',
    },
    {
        title: $t('ufprTitle'),
        description: $t('ufprDesc'),
        date: new Date('2022-06-07T00:00:00.000Z'),
        image: 'https://nuxt.com/assets/blog/v3.16.png',
        badge: 'Academic',
    },
    {
        title: $t('icsTitle'),
        description: $t('icsDesc'),
        date: new Date('2023-03-02T00:00:00.000Z'),
        badge: 'Academic',
    },
    {
        title: $t('bellosoftTitle'),
        description: $t('bellosoftDesc'),
        date: new Date('2024-04-02T00:00:00.000Z'),
        badge: 'Professional',
    },
    {
        title: $t('unitedTitle'),
        description: $t('unitedDesc'),
        date: new Date('2021-04-17T00:00:00.000Z'),
        badge: 'Professional',
    },
    {
        title: 'Nuxt 3.15',
        description: 'Nuxt 3.15 is out - with Vite 6, better HMR and faster performance!',
        date: new Date('2024-12-24T00:00:00.000Z'),
        image: 'https://nuxt.com/assets/blog/v3.15.png',
        badge: 'Academic',
        to: 'https://nuxt.com/blog/v3-15',
    }
]

const badgeDefinitions: Badge[] = [
    { label: 'Personal', icon: 'i-lucide-user-round' },
    { label: 'Academic', icon: 'i-lucide-graduation-cap' },
    { label: 'Professional', icon: 'i-lucide-code' },
    { label: 'Hobbies', icon: 'i-lucide-hand-metal' },
    { label: 'Others', icon: 'i-lucide-box' },
]

const selectedBadges = ref<Badge['label'][]>([])
const selectedFilter = ref<'asc' | 'desc'>('desc')

const items = computed<DropdownMenuItem[]>(() => [
    {
        label: 'Most recent first',
        icon: 'i-lucide-calendar-arrow-down',
        color: selectedFilter.value === 'desc' ? 'warning' as const : undefined,
        onSelect() {
            selectedFilter.value = 'desc'
        }
    },
    {
        label: 'Oldest first',
        icon: 'i-lucide-calendar-arrow-up',
        color: selectedFilter.value === 'asc' ? 'warning' as const : undefined,
        onSelect() {
            selectedFilter.value = 'asc'
        }
    }
])

const badges = computed<DropdownMenuItem[]>(() =>
    badgeDefinitions.map(badge => ({
        label: badge.label,
        icon: badge.icon,
        type: 'checkbox' as const,
        color: isBadgeSelected(badge.label as Badge['label']) ? 'warning' : 'neutral',
        checked: isBadgeSelected(badge.label as Badge['label']),
        onSelect(e) {
            e.preventDefault()
            toggleBadgeFilter(badge.label as Badge['label'])
        },
    }))
)

const filteredTimeline = computed(() => {
    if (selectedFilter.value === 'asc') {
        if (selectedBadges.value.length) {
            return timeline
                .filter(post => selectedBadges.value.includes(post.badge))
                .toSorted((a, b) => a.date.getTime() - b.date.getTime())
        }

        return timeline.toSorted((a, b) => a.date.getTime() - b.date.getTime())
    }

    if (selectedBadges.value.length) {
        return timeline
            .filter(post => selectedBadges.value.includes(post.badge))
            .toSorted((a, b) => b.date.getTime() - a.date.getTime())
    }

    return timeline
        .toSorted((a, b) => b.date.getTime() - a.date.getTime())
})

const formattedTimeline = computed(() => {
    return filteredTimeline.value.map(post => ({
        ...post,
        date: formatMonthYear(post.date, locale.value)
    }))
})

function toggleBadgeFilter(badgeLabel: Badge['label']) {
    if (isBadgeSelected(badgeLabel)) {
        selectedBadges.value = selectedBadges.value.filter(label => label !== badgeLabel)
    } else selectedBadges.value.push(badgeLabel)
}

function isBadgeSelected(badgeLabel: Badge['label']) {
    return selectedBadges.value.includes(badgeLabel)
}

function formatMonthYear(
    date: Date | string,
    locale: Locale
): string {
    const parsedDate =
        typeof date === 'string' ? new Date(date) : date

    const formatter = new Intl.DateTimeFormat(localeMap[locale], {
        month: 'long',
        year: 'numeric',
    })

    return formatter.format(parsedDate)
}
</script>

<template>
    <div class="h-[20vh] flex justify-around items-center gap-4 border-b border-amber-50/10">
        <div class="flex flex-col gap-1">
            <span class="text-blue-400 text-xl">Matheus Piovesan's Journey</span>
            <span class="text-sm">Software Engeneer / Developer</span>
        </div>

        <UAvatar src="https://github.com/m-piovesan.png" class="size-40 -mb-20" />

        <div class="md:flex gap-4 hidden">
            <UColorModeButton />

            <ULocaleSelect :model-value="locale" :locales="locales as any"
                @update:model-value="setLocale($event as typeof locale)" class="w-48" />
        </div>
    </div>

    <UPage class="lg:grid-cols-12!">
        <template #left>
            <UPageAside class="p-0! pr-2! lg:col-span-3!">
                <div class="flex flex-col size-full gap-6 pt-6 pl-12">
                    <div class="flex flex-row items-center justify-center size-full gap-3">
                        <UDropdownMenu :items="items" class="cursor-pointer" :content="{
                            side: 'bottom',
                            sideOffset: 20
                        }" :ui="{
                            content: 'w-48'
                        }">
                            <UButton label="Order by" icon="i-lucide-arrow-down-up" color="neutral" variant="outline" />
                        </UDropdownMenu>

                        <UDropdownMenu :items="badges" class="cursor-pointer" :content="{
                            side: 'bottom',
                            sideOffset: 8
                        }" :ui="{
                            content: 'w-48'
                        }">
                            <UButton label="Filter by" icon="i-lucide-funnel" color="neutral" variant="outline" />
                        </UDropdownMenu>
                    </div>

                    <div class="flex flex-col size-full gap-3">
                        <span class="text-secondary">$ whoami</span>
                        <p class="text-sm/snug">{{ $t('whoami') }}</p>
                    </div>

                    <USeparator size="md" :label="$t('reachme')" />

                    <div class="flex flex-col size-full gap-3">
                        <UButton icon="i-lucide-linkedin"
                            class="w-full h-20 flex justify-center items-center hover:scale-105 transition-transform"
                            color="secondary" to="https://www.linkedin.com/in/matheus-mpiovesan/" target="_blank">
                            Linkedin
                        </UButton>

                        <UButton icon="i-lucide-github"
                            class="w-full h-20 flex justify-center items-center hover:scale-105 transition-transform"
                            color="secondary" to="https://github.com/m-piovesan" target="_blank">
                            GitHub
                        </UButton>

                        <UButton icon="i-lucide-instagram"
                            class="w-full h-20 flex justify-center items-center hover:scale-105 transition-transform"
                            color="secondary" to="https://www.instagram.com/piovesann__/" target="_blank">
                            Instagram
                        </UButton>
                    </div>
                </div>

            </UPageAside>
        </template>

        <UMain class="lg:col-span-9!">
            <div class="flex flex-row items-center justify-center size-full gap-3 p-3 pt-6 xl:hidden">
                <UDropdownMenu :items="items" :content="{
                    side: 'bottom',
                    sideOffset: 20
                }" :ui="{
                    content: 'w-48'
                }">
                    <UButton label="Order by" icon="i-lucide-arrow-down-up" color="neutral" variant="outline" />
                </UDropdownMenu>

                <UDropdownMenu :items="badges" :content="{
                    side: 'bottom',
                    sideOffset: 8
                }" :ui="{
                    content: 'w-48'
                }">
                    <UButton label="Filter by" icon="i-lucide-funnel" color="neutral" variant="outline" />
                </UDropdownMenu>
            </div>

            <UChangelogVersions v-if="filteredTimeline.length" class="pt-8 whitespace-pre-line w-full">
                <UChangelogVersion v-for="post in filteredTimeline" v-bind="post" :badge="{
                    icon: badges.find(b => b.label === post.badge)?.icon, color: 'warning', variant: 'subtle'
                }" class="flex items-start cursor-default" :ui="{
                    indicator: 'sticky',
                    dotInner: 'bg-warning',
                    container: 'mx-4 max-w-full lg:max-w-[50vw] lg:ml-20 lg:mr-0',
                }" />
            </UChangelogVersions>

            <div v-else class="flex flex-col size-full justify-center items-center gap-4 py-20">
                <p class="text-center text-sm/snug text-secondary">No posts found with the selected filters, but take
                    this cool
                    pikachu instead :D</p>
                <NuxtImg src="/pikachu.gif" sizes="900px" />
            </div>
        </UMain>
    </UPage>
</template>
<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui';
import Carrousel from '~/components/carrousel.vue';
import SocialMediaButton from '~/components/social-media-button.vue';
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
        title: $t('curitibaTitle'),
        description: $t('curitibaDesc'),
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
        image: "timeline/mind.jpeg",
        to: 'https://www.linkedin.com/posts/matheus-mpiovesan_pt-br-boa-noite-rede-fecho-esta-activity-7385090039875186688-cWSL?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADUVanIBYZwx8c79yb7EwwwpYC2MlrxXFk8',
        badge: 'Professional',
        target: "_blank"
    },
    {
        title: $t('ufprTitle'),
        description: $t('ufprDesc'),
        date: new Date('2022-06-07T00:00:00.000Z'),
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
        image: "timeline/united.png",
    },
    {
        title: $t('gesTitle'),
        description: $t('gesDesc'),
        date: new Date('2025-10-21T00:00:00.000Z'),
        badge: 'Professional',
        image: "timeline/ges.png",
    },
    {
        title: $t('spotTitle'),
        description: $t('spotDesc'),
        date: new Date('2025-12-05T00:00:00.000Z'),
        badge: 'Hobbies',
        image: "timeline/spot.png",
        to: 'https://musicboard.app/piovesan',
        target: '_blank'
    }
]

const badgeDefinitions: Badge[] = [
    { label: 'Personal', title: $t('personal'), icon: 'i-lucide-user-round' },
    { label: 'Academic', title: $t('academic'), icon: 'i-lucide-graduation-cap' },
    { label: 'Professional', title: $t('professional'), icon: 'i-lucide-code' },
    { label: 'Hobbies', title: $t('hobbies'), icon: 'i-lucide-hand-metal' },
    { label: 'Others', title: $t('others'), icon: 'i-lucide-box' },
]

const selectedBadges = ref<Badge['label'][]>([])
const selectedFilter = ref<'asc' | 'desc'>('desc')
const colorMode = useColorMode()

const items = computed<DropdownMenuItem[]>(() => [
    {
        label: $t('mostRecent'),
        icon: 'i-lucide-calendar-arrow-down',
        color: selectedFilter.value === 'desc' ? 'warning' as const : undefined,
        onSelect() {
            selectedFilter.value = 'desc'
        }
    },
    {
        label: $t('oldest'),
        icon: 'i-lucide-calendar-arrow-up',
        color: selectedFilter.value === 'asc' ? 'warning' as const : undefined,
        onSelect() {
            selectedFilter.value = 'asc'
        }
    }
])

const badges = computed<DropdownMenuItem[]>(() =>
    badgeDefinitions.map(badge => ({
        label: badge.title,
        key: badge.label,
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
    <div
        class="h-64 xs:h-50 bg-secondary dark:bg-gray-950 flex justify-center xs:justify-around flex-col xs:flex-row items-center gap-4 dark:border-b dark:border-amber-50/10">
        <div class="flex flex-col gap-6 text-center items-center">
            <div class="flex flex-col gap-1 size-full">
                <span class="text-indigo-100 dark:text-blue-400 text-xl">{{ $t('headerTitle') }}</span>
                <span class="text-sm text-indigo-900 dark:text-indigo-100">{{ $t('headerDesc') }}</span>
            </div>

            <div class="flex w-60 justify-between md:hidden">
                <UColorModeButton class="cursor-pointer" />

                <ULocaleSelect :model-value="locale" class="w-48 cursor-pointer bg-transparent"
                    :locales="locales as any" @update:model-value="setLocale($event as typeof locale)" />
            </div>
        </div>

        <UAvatar :src="colorMode.value === 'light' ? '/flash.webp' : 'https://github.com/m-piovesan.png'"
            class="size-28 xs:size-40 -mb-30 xs:-mb-20" />

        <div class="md:flex gap-4 hidden">
            <UColorModeButton class="cursor-pointer" />

            <ULocaleSelect :model-value="locale" class="w-48 cursor-pointer bg-transparent" :locales="locales as any"
                @update:model-value="setLocale($event as typeof locale)" />
        </div>
    </div>

    <UPage class="lg:grid-cols-11! lg:gap-4! bg-indigo-100 dark:bg-gray-950">
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
                            <UButton :label="$t('orderBy')" icon="i-lucide-arrow-down-up" color="neutral"
                                variant="outline" />
                        </UDropdownMenu>

                        <UDropdownMenu :items="badges" class="cursor-pointer" :content="{
                            side: 'bottom',
                            sideOffset: 8
                        }" :ui="{
                            content: 'w-48'
                        }">
                            <UButton :label="$t('filterBy')" icon="i-lucide-funnel" color="neutral" variant="outline" />
                        </UDropdownMenu>
                    </div>

                    <div class="flex flex-col size-full">
                        <span class="text-indigo-900 dark:text-secondary pb-3">$ whoami</span>
                        <p class="text-sm/snug">{{ $t('whoami') }}</p>

                        <Carrousel />
                    </div>

                    <USeparator class="-mt-6" :color="colorMode.value === 'dark' ? 'neutral' : 'primary'" size="sm"
                        :label="$t('reachme')" />

                    <div class="flex flex-col size-full gap-3">
                        <SocialMediaButton link-to="https://www.linkedin.com/in/matheus-mpiovesan/"
                            icon="i-lucide-linkedin" title="Linkedin" />

                        <SocialMediaButton link-to="https://github.com/m-piovesan" icon="i-lucide-github"
                            title="GitHub" />

                        <SocialMediaButton link-to="https://www.instagram.com/piovesann__/" icon="i-lucide-instagram"
                            title="Instagram" />

                        <p class="text-sm/snug">Matheus Piovesan © 2025</p>
                    </div>
                </div>

            </UPageAside>
        </template>

        <UMain class="lg:col-span-9!">
            <div class="flex flex-col items-center justify-center size-full gap-6 p-3 pt-18 slg:hidden">
                <div class="flex flex-col size-full gap-2">
                    <span class="text-indigo-900 dark:text-secondary">$ whoami</span>
                    <p class="text-sm/snug">{{ $t('whoami') }}</p>
                </div>

                <div class="w-full">
                    <Carrousel />
                </div>

                <div class="flex flex-col xs:flex-row size-full gap-3">
                    <SocialMediaButton link-to="https://www.linkedin.com/in/matheus-mpiovesan/" icon="i-lucide-linkedin"
                        title="Linkedin" />

                    <SocialMediaButton link-to="https://github.com/m-piovesan" icon="i-lucide-github" title="GitHub" />

                    <SocialMediaButton link-to="https://www.instagram.com/piovesann__/" icon="i-lucide-instagram"
                        title="Instagram" />
                </div>

                <USeparator :color="colorMode.value === 'dark' ? 'neutral' : 'primary'" size="sm" />

                <div class="flex flex-row items-center justify-center size-full gap-3">
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
            </div>

            <UChangelogVersions v-if="filteredTimeline.length" class="pt-8 whitespace-pre-line w-full">
                <UChangelogVersion v-for="post in filteredTimeline" v-bind="post" :badge="{
                    icon: badges.find(b => b.key === post.badge)?.icon, color: 'primary', variant: 'subtle'
                }" class="flex items-start cursor-default" :ui="{
                    indicator: 'sticky',
                    container: 'mx-4 max-w-full lg:max-w-[50vw] lg:ml-20 lg:mr-0',
                }" />
            </UChangelogVersions>

            <div v-else class="flex flex-col size-full justify-center items-center gap-4 py-20">
                <p class="text-center text-sm/snug text-secondary">{{ $t('pikachu') }}</p>
                <NuxtImg src="/pikachu.gif" sizes="900px" />
            </div>
        </UMain>
    </UPage>
</template>
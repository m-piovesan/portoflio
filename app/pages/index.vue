<script setup lang="ts">
import { en, es, pt_br } from '@nuxt/ui/locale'
import type { Badge, Post } from '~/types';

const timeline: Post[] = [
    {
        title: 'Nasci :)',
        description:
            'nascido e criado em Videira-SC (Brasil), tô deixando informado aí caso algum de vocês queira me mandar um presente no meu anivesário kkkkkkk entra em contato comigo em alguma das redes que deixei aí que eu passo meu pix;',
        date: new Date('2003-11-12T00:00:00.000Z'),
        badge: 'Personal',
    },
    {
        title: 'Mudança para Curitiba',
        description:
            'saímos bem cedo de Videira, eu, meus pais e meu irmão, a viagem deu umas 5h no total. Videira e Curitiba ficam a uns 330km então é uma viagem consideravelmente cansativa, mas obviamente estava bem animado, a gente já tinha visto e alugado o apartamento uns tempos antes, então basicamente separei minhas roupas, computador e tals e foi isso;',
        date: new Date('2022-06-07T00:00:00.000Z'),
        badge: 'Personal',
    },
    {
        title: 'IFC',
        description:
            'acho relevante compartilhar um pouco sobre meus anos de EM, estudei integralmente no IFC (Instituto Federal Catarinense) Câmpus Videira, uma escola técnica federal, que foi onde tive meus primeiros contatos mais profundos com a computação, visto que eu cursei o técnico em informática. Foi uma época daora demais, infelizmente peguei o período da pandemia mas o terceirão principalmente foi legal por demais. Um salve pro professor Manfe que ensinou html e css básico pra gente, olha só onde isso me levou hoje em dia kkkkkk;',
        date: new Date('2019-02-27T00:00:00.000Z'),
        badge: 'Personal',
    },
    {
        title: 'Nuxt 3.16',
        description: 'Nuxt 3.16 is out - packed with features and performance improvements!',
        date: new Date('2024-03-07T00:00:00.000Z'),
        image: 'https://nuxt.com/assets/blog/v3.16.png',
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

const badges: Badge[] = [
    {
        label: 'Personal',
        icon: 'i-lucide-user-round',
    },
    {
        label: 'Academic',
        icon: 'i-lucide-graduation-cap',
    },
    {
        label: 'Professional',
        icon: 'i-lucide-code',
    },
    {
        label: 'Hobbies',
        icon: 'i-lucide-hand-metal',
    },
    {
        label: 'Others',
        icon: 'i-lucide-box',
    }
]

const locale = ref('en')

const selectedBadges = ref<string[]>([])
const selectedFilter = ref<'asc' | 'desc'>('desc')

function toggleBadgeFilter(badgeLabel: string) {
    if (selectedBadges.value.includes(badgeLabel)) {
        selectedBadges.value = selectedBadges.value.filter(label => label !== badgeLabel)
    } else selectedBadges.value.push(badgeLabel)
}

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

</script>

<template>
    <UHeader class="h-[20vh] relative" title="Matheus Piovesan">
        <UAvatar src="https://github.com/m-piovesan.png" class="size-40 -mb-20" />

        <template #right>
            <UColorModeButton />

            <UTooltip text="Check my GitHub">
                <UButton color="neutral" variant="ghost" to="https://github.com/m-piovesan" target="_blank"
                    icon="i-simple-icons-github" aria-label="GitHub" />
            </UTooltip>

            <ULocaleSelect v-model="locale" :locales="[en, es, pt_br]" class="w-48" />
        </template>
    </UHeader>

    <UPage>
        <template #left>
            <UPageAside>
                <div class="flex flex-col size-full justify-center gap-3 ml-4 mb-8">
                    <span class="text-secondary">order by time:</span>

                    <UBadge icon="i-lucide-calendar-arrow-up"
                        :color="selectedFilter === 'asc' ? 'warning' : 'secondary'" variant="subtle"
                        class="font-bold rounded-full cursor-pointer h-8 gap-2 hover:scale-105 transition-transform"
                        :class="{
                            'ring-2 ring-warning': selectedFilter === 'asc'
                        }" @click="selectedFilter = 'asc'">
                        Ascending
                    </UBadge>

                    <UBadge icon="i-lucide-calendar-arrow-down"
                        :color="selectedFilter === 'desc' ? 'warning' : 'secondary'" variant="subtle"
                        class="font-bold rounded-full cursor-pointer h-8 gap-2 hover:scale-105 transition-transform"
                        :class="{
                            'ring-2 ring-warning': selectedFilter === 'desc'
                        }" @click="selectedFilter = 'desc'">
                        Descending
                    </UBadge>
                </div>

                <div class="flex flex-col size-full justify-center gap-3 ml-4">
                    <span class="text-secondary">filter by:</span>

                    <UBadge v-for="badge in badges" :key="badge.label" :icon="badge.icon"
                        :color="selectedBadges.includes(badge.label) ? 'warning' : 'secondary'" variant="subtle"
                        class="font-bold rounded-full cursor-pointer h-8 gap-2 hover:scale-105 transition-transform"
                        :class="{
                            'ring-2 ring-warning': selectedBadges.includes(badge.label)
                        }" @click="toggleBadgeFilter(badge.label)">
                        {{ badge.label }}
                    </UBadge>

                </div>
            </UPageAside>
        </template>

        <UPageBody>
            <UChangelogVersions v-if="filteredTimeline.length" class="pt-8">
                <UChangelogVersion v-for="post in filteredTimeline" :key="post.title" v-bind="post" :badge="{
                    icon: badges.find(b => b.label === post.badge)?.icon, color: 'primary', variant: 'subtle'
                }" class="flex items-start cursor-default" :ui="{
                    indicator: 'sticky top-(--ui-header-height)',
                    container: 'ml-20',
                }">
                </UChangelogVersion>
            </UChangelogVersions>

            <div v-else class="flex flex-col size-full justify-center items-center gap-4 py-20">
                <p class="text-center text-sm/snug text-secondary">No posts found with the selected filters, but take
                    this cool pikachu instead :D</p>
                <NuxtImg src="/pikachu.gif" sizes="900px" />
            </div>
        </UPageBody>

        <template #right>
            <UPageAside>
                <div class="flex flex-col size-full gap-3">
                    <span class="text-secondary">$ whoami</span>
                    <p class="text-sm/snug">desenvolvedor Full-Stack com ampla experiência em tecnologias como React,
                        Vue, Typescript,
                        Svelte, React Native, Tailwind, SASS, além de familiaridade com ambientes Linux, controle de
                        versão com
                        Git e fluência completa na língua inglesa.</p>
                </div>

                <USeparator size="md" class="py-6" label="you can reach me at:" />

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
            </UPageAside>
        </template>
    </UPage>

</template>
<script setup>
import { en, es, pt_br } from '@nuxt/ui/locale'

const versions = [
    {
        title: 'Nasci',
        description:
            'Nasci mlkada',
        date: '2025-04-27T00:00:00.000Z',
        badge: 'Pessoal',
        target: '_blank',
    },
    {
        title: 'Nuxt 3.16',
        description: 'Nuxt 3.16 is out - packed with features and performance improvements!',
        date: '2024-03-07T00:00:00.000Z',
        image: 'https://nuxt.com/assets/blog/v3.16.png',
        badge: 'Profissional',
        target: '_blank',
    },
    {
        title: 'Nuxt 3.15',
        description: 'Nuxt 3.15 is out - with Vite 6, better HMR and faster performance!',
        date: '2024-12-24T00:00:00.000Z',
        image: 'https://nuxt.com/assets/blog/v3.15.png',
        badge: 'Acadêmico',
        to: 'https://nuxt.com/blog/v3-15',
        target: '_blank',
    }
]

const locale = ref('en')
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
                <div class="flex flex-col size-full justify-center gap-3 ml-4">
                    <span class="text-secondary">filter by:</span>

                    <UBadge icon="i-lucide-user-round"
                        class="font-bold rounded-full cursor-pointer h-10 gap-2 hover:scale-105 transition-transform">
                        Personal
                    </UBadge>

                    <UBadge icon="i-lucide-graduation-cap"
                        class="font-bold rounded-full cursor-pointer h-10 gap-2 hover:scale-105 transition-transform">
                        Academic
                    </UBadge>

                    <UBadge icon="i-lucide-code"
                        class="font-bold rounded-full cursor-pointer h-10 gap-2 hover:scale-105 transition-transform">
                        Professional
                    </UBadge>

                    <UBadge icon="i-lucide-hand-metal"
                        class="font-bold rounded-full cursor-pointer h-10 gap-2 hover:scale-105 transition-transform">
                        Hobbies
                    </UBadge>
                </div>
            </UPageAside>
        </template>

        <UPageBody>
            <UChangelogVersions class="pt-8">
                <UChangelogVersion v-for="version in versions" :key="version.title" v-bind="version" :badge="{
                    label:
                        version.badge, color: 'primary', variant: 'outline'
                }" class="flex items-start cursor-default" :ui="{
                    indicator: 'sticky top-(--ui-header-height)',
                    container: 'ml-20 ms-0',
                }">
                </UChangelogVersion>
            </UChangelogVersions>
        </UPageBody>

        <template #right>
            <UPageAside>
                <div class="flex flex-col size-full gap-3">
                    <span class="text-secondary">$ whoami</span>
                    <p class="text-sm/snug">Desenvolvedor Full-Stack com ampla experiência em tecnologias como React,
                        Vue, Typescript,
                        Svelte, React Native, Tailwind, SASS, além de familiaridade com ambientes Linux, controle de
                        versão com
                        Git e fluência completa na língua inglesa.</p>
                </div>

                <USeparator size="md" class="py-6" label="you can reach me at:" />

                <div class="flex flex-col size-full gap-3">
                    <UButton icon="i-lucide-linkedin"
                        class="w-full h-20 flex justify-center items-center hover:scale-105 transition-transform"
                        color="secondary">
                        Linkedin
                    </UButton>

                    <UButton icon="i-lucide-github"
                        class="w-full h-20 flex justify-center items-center hover:scale-105 transition-transform"
                        color="secondary">
                        GitHub
                    </UButton>

                    <UButton icon="i-lucide-instagram"
                        class="w-full h-20 flex justify-center items-center hover:scale-105 transition-transform"
                        color="secondary">
                        Instagram
                    </UButton>
                </div>
            </UPageAside>
        </template>
    </UPage>

</template>
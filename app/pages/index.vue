<script setup>
const versions = [
    {
        title: 'Nuxt 3.17',
        description:
            'Nuxt 3.17 is out - bringing a major reworking of the async data layer, a new built-in component, better warnings, and performance improvements!',
        date: '2025-04-27T00:00:00.000Z',
        image: 'https://nuxt.com/assets/blog/v3.17.png',
        badge: 'v3.17.0',
        to: 'https://nuxt.com/blog/nuxt-3-17',
        target: '_blank',
        authors: [
            {
                name: 'Daniel Roe',
                avatar: {
                    src: 'https://github.com/danielroe.png',
                    alt: 'Daniel Roe'
                },
                to: 'https://github.com/danielroe',
                target: '_blank'
            }
        ]
    },
    {
        title: 'Nuxt 3.16',
        description: 'Nuxt 3.16 is out - packed with features and performance improvements!',
        date: '2024-03-07T00:00:00.000Z',
        image: 'https://nuxt.com/assets/blog/v3.16.png',
        badge: 'v3.16.0',
        to: 'https://nuxt.com/blog/v3-16',
        target: '_blank',
    },
    {
        title: 'Nuxt 3.15',
        description: 'Nuxt 3.15 is out - with Vite 6, better HMR and faster performance!',
        date: '2024-12-24T00:00:00.000Z',
        image: 'https://nuxt.com/assets/blog/v3.15.png',
        badge: 'v3.15.0',
        to: 'https://nuxt.com/blog/v3-15',
        target: '_blank',
    }
]
</script>

<template>
    <UHeader class="h-[20vh]" title="Matheus Piovesan">
        <UAvatar src="https://github.com/m-piovesan.png" class="size-40 -mb-20" />

        <template #right>
            <UColorModeButton />

            <UTooltip text="Check my GitHub">
                <UButton color="neutral" variant="ghost" to="https://github.com/m-piovesan" target="_blank"
                    icon="i-simple-icons-github" aria-label="GitHub" />
            </UTooltip>
        </template>
    </UHeader>

    <UPage>
        <template #left>
            <UPageAside class="bg-purple-700">
                <span>oi</span>
                <span>tudo</span>
                <span>bem</span>
            </UPageAside>
        </template>

        <UChangelogVersions>
            <UChangelogVersion v-for="version in versions" :key="version.title" v-bind="version"
                class="flex items-start" :ui="{
                    container: 'max-w-lg me-0',
                }">
            </UChangelogVersion>
        </UChangelogVersions>

        <template #right>
            <UPageAside class="bg-amber-400">
                <span>oi</span>
                <span>tudo</span>
                <span>bem</span>
            </UPageAside>
        </template>
    </UPage>

</template>
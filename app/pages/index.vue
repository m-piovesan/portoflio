<script setup>
const versions = [
    {
        title: 'Nasci',
        description:
            'Nasci mlkada',
        date: '2025-04-27T00:00:00.000Z',
        badge: 'v3.17.0',
        target: '_blank',
    },
    {
        title: 'Nuxt 3.16',
        description: 'Nuxt 3.16 is out - packed with features and performance improvements!',
        date: '2024-03-07T00:00:00.000Z',
        image: 'https://nuxt.com/assets/blog/v3.16.png',
        badge: 'v3.16.0',
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
    <UHeader class="h-[20vh] relative" title="Matheus">
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
            <UPageAside>
                <div class="flex flex-col h-full justify-center gap-3">
                    <span> filtrar</span>
                    <UBadge icon="i-lucide-rocket" class="font-bold rounded-full">Badge</UBadge>
                    <UBadge icon="i-lucide-rocket" class="font-bold rounded-full">Badge</UBadge>
                    <UBadge icon="i-lucide-rocket" class="font-bold rounded-full">Badge</UBadge>
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
                <span>oi</span>
                <span>tudo</span>
                <span>bem</span>
            </UPageAside>
        </template>
    </UPage>

</template>
<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
    title: () => t('headerTitle') + ' | Matheus Piovesan',
    description: () => t('headerDesc'),
    ogTitle: () => t('headerTitle') + ' | Matheus Piovesan',
    ogDescription: () => t('headerDesc'),
    ogImage: 'https://github.com/m-piovesan.png',
    ogUrl: 'https://m-piovesan.vercel.app',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: () => t('headerTitle') + ' | Matheus Piovesan',
    twitterDescription: () => t('headerDesc'),
    twitterImage: 'https://github.com/m-piovesan.png',
})

useHead({
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Matheus Piovesan',
                jobTitle: 'Front-end Developer',
                knowsAbout: [
                    'React',
                    'React Native',
                    'Vue.js',
                    'TypeScript',
                    'Nuxt',
                    'Next.js',
                    'Svelte',
                    'Tailwind CSS',
                    'Styled Components',
                    'SASS',
                ],
                url: 'https://m-piovesan.vercel.app',
                sameAs: [
                    'https://github.com/m-piovesan',
                    'https://linkedin.com/in/matheus-mpiovesan',
                ],
            }),
        },
    ],
})
</script>

<template>
    <UApp>
        <NuxtPage />
    </UApp>
</template>

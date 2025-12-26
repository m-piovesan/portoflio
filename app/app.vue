<script setup lang="ts">
useSeoMeta({
    title: 'Matheus Piovesan - Dev',
    description:
        'Front-end developer especializado em React, Vue, TypeScript e design de interfaces acessíveis.',
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

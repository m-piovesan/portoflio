<script setup lang="ts">
interface Props {
    icon?: string;
    linkTo?: string;
    title: string;
}

const props = withDefaults(defineProps<Props>(), {
    icon: 'i-lucide-box',
    linkTo: '#',
});
</script>

<template>
    <UButton :icon="props.icon"
        class="w-full h-12 flex justify-center items-center relative overflow-hidden group hover:scale-105 transition-all duration-300 ease-out shadow-sm hover:shadow-md bg-secondary text-indigo-900 hover:text-indigo-100 hover:bg-indigo-900 dark:hover:bg-indigo-600 dark:bg-gray-800 dark:text-gray-200"
        :to="props.linkTo" rel="noopener" target="_blank">
        <span class="relative z-10 flex items-center gap-2">
            {{ props.title }}
        </span>

        <div
            class="absolute inset-0 bg-linear-to-r from-blue-400/20 to-indigo-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
    </UButton>
</template>
<script setup lang="ts">
interface Props {
    icon?: string;
    linkTo?: string;
    title: string;
}

const props = withDefaults(defineProps<Props>(), {
    icon: 'i-lucide-box',
});
</script>

<template>
    <UButton :icon="props.icon"
        class="w-full h-20 flex justify-center items-center hover:scale-105 light:hover:bg-indigo-900 transition-transform bg-indigo-400 dark:bg-secondary text-indigo-900 hover:text-indigo-100"
        :to="props.linkTo" rel="noopener" target="_blank">
        {{ props.title }}
    </UButton>
</template>
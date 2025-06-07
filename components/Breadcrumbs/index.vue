<script setup lang="ts">
const route = useRoute();
const breadcrumbs = computed(() => route.meta.breadcrumb as { name: string, link: string }[]);
</script>

<template>
    <nav aria-label="breadcrumb">
        <ol class="flex">
            <li v-for="(crumb, index) in breadcrumbs" :key="index"
                class="before:content-['/'] before:px-[0.25rem] first-of-type:before:hidden capitalize text-sm">
                <NuxtLink v-if="crumb?.link" :to="crumb?.link"
                    class="cursor-pointer decoration-0 hover:underline hover:decoration-1 transition">
                    {{ crumb.name }}</NuxtLink>
                <span v-else class="text-fade">{{ crumb.name }}</span>
            </li>
        </ol>
    </nav>
</template>
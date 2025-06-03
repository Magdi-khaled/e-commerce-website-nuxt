<script setup lang="ts">
const currentCollection = defineModel<number>('currentCollection');
const props = defineProps<{
    collections: [],
}>();
</script>

<template>
    <div class="my-2 flex items-center gap-6 uppercase border-b border-b-neutral-400">
        <div class="py-2 px-1 cursor-pointer hover:text-fade hover:underline hover:underline-offset-15 transition"
            :class="{
                'text-neutral-800 border-b': currentCollection === index,
                'text-neutral-500': currentCollection !== index,
            }" v-for="(item, index) in collections" :key="index" @click="currentCollection = index">
            {{ item }}
        </div>
    </div>
</template>
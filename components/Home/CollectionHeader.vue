<script setup lang="ts">
const currentCollection = defineModel<string>('currentCollection');
const props = defineProps<{
    collections: string[],
}>();
</script>

<template>
    <div class="my-2 flex items-center gap-6 uppercase border-b border-b-neutral-400">
        <div class="py-2 px-1 cursor-pointer hover:text-fade hover:underline hover:underline-offset-15 transition"
            :class="{
                'text-neutral-800 border-b': currentCollection === item,
                'text-neutral-500': currentCollection !== item,
            }" v-for="(item, index) in props.collections" :key="index" @click="currentCollection = item">
            {{ item }}
        </div>
    </div>
</template>
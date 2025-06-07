<script setup lang="ts">
const isOpen = defineModel<boolean>('isOpen');
const props = defineProps<{ category: string, isOpen: boolean }>();
</script>

<template>
    <div class="border-b border-dashed py-4 border-b-hover">
        <button @click="isOpen = !isOpen" class="cursor-pointer my-1 w-full flex justify-between items-center">
            <h1 class="capitalize font-bold">{{ props.category }}</h1>
            <Icon v-show="isOpen" name="ep:arrow-up" />
            <Icon v-show="!isOpen" name="ep:arrow-right" />
        </button>
        <div v-show="isOpen" class="my-2 grid gap-2">
            <slot />
        </div>
    </div>
</template>
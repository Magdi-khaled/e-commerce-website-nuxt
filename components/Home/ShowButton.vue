<script setup lang="ts">
const props = defineProps<{
    isOption: boolean,
    showFunction: () => {}
}>();
</script>

<template>
    <div class="w-full flex justify-center sm:text-lg text-sm">
        <button v-if="!isOption" @click="showFunction"
            class="flex flex-col items-center w-fit cursor-pointer text-hover gap-0 hover:gap-1 hover:text-fade transition-all duration-300">
            <slot />
            <!-- <p>More</p>
            <Icon name="iconamoon:arrow-down-2-bold" class="text-2xl" /> -->
        </button>
        <Icon v-else name="eos-icons:loading" class="text-3xl text-fade" />
    </div>
</template>
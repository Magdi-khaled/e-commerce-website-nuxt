<script setup lang="ts">
const props = defineProps<{
    isBeginning: boolean,
    isEnd: boolean,
    prev: string,
    next: string,
}>();
</script>

<template>
    <div class="flex items-center gap-2">
        <button :id="prev" class="cursor-pointer p-2 border-[2px] flex hover:bg-background transition"
            :class="{ 'border-neutral-400 text-neutral-400 pointer-events-none': isBeginning, 'border-fade text-fade': !isBeginning }">
            <Icon name="icon-park-outline:left" class="text-[20px]" />
        </button>
        <button :id="next" class="cursor-pointer p-2 border-[2px] flex hover:bg-background transition"
            :class="{ 'border-neutral-400 text-neutral-400 pointer-events-none': isEnd, 'border-fade text-fade': !isEnd }">
            <Icon name="icon-park-outline:right" class="text-[20px]" />
        </button>
    </div>
</template>
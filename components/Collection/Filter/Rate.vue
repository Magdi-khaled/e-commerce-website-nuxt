<script setup lang="ts">
const rateFilter = defineModel<number>('rateFilter');

const isOpen = ref(true);
const rates = [1, 2, 3, 4, 5];
</script>

<template>
    <CollectionFilterBase category="ratings" v-model:is-open="isOpen">
        <label v-for="(item, index) in rates" :key="index" :for="`rate-${index}`"
            class="w-fit relative font-medium cursor-pointer capitalize flex items-center gap-2 lg:text-[15px] text-sm">
            <input type="radio" name="rate" :id="`rate-${index}`" :value="item" v-model="rateFilter"
                class="appearance-none cursor-pointer size-5 border border-neutral-500"
                :class="{ 'bg-fade border-neutral-50 text-neutral-50': rateFilter === item }">
            {{ item }} star
            <Icon v-show="rateFilter === item" name="emojione-monotone:heavy-check-mark"
                class="absolute text-xs text-white left-[5%]" />
        </label>
    </CollectionFilterBase>
</template>
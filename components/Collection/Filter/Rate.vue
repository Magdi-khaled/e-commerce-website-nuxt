<script setup lang="ts">
const rates = [1, 2, 3, 4, 5];
const isOpen = ref(true);
const rate = ref<number>(0);
</script>

<template>
    <CollectionFilterBase category="ratings" v-model:is-open="isOpen">
        <label v-for="(item, index) in rates" :key="index" :for="`rate-${index}`"
            class="w-fit relative font-medium cursor-pointer capitalize flex items-center gap-2 lg:text-[15px] text-sm">
            <input type="radio" name="rate" :id="`rate-${index}`" :value="item" v-model="rate"
                class="appearance-none cursor-pointer size-5 border border-neutral-500 checked:bg-fade">
            {{ item }} star
            <Icon v-show="rate === item" name="emojione-monotone:heavy-check-mark"
                class="absolute text-xs text-white left-[5%]" />
        </label>
    </CollectionFilterBase>
</template>
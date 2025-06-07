<script setup lang="ts">
const categories = [
    { type: 'men', quantity: 265 },
    { type: 'women', quantity: 139 },
    { type: 'kids', quantity: 59 },
];
const isOpen = ref(true);
const category = ref('');
</script>

<template>
    <CollectionFilterBase category="category" v-model:is-open="isOpen">
        <label v-for="(item, index) in categories" :key="index" :for="`category-${index}`"
            class="w-fit relative font-medium cursor-pointer capitalize flex items-center gap-2 lg:text-[15px] text-sm">
            <input type="radio" name="category" :id="`category-${index}`" :value="item.type" v-model="category"
                class="appearance-none cursor-pointer size-5 border border-neutral-500 checked:bg-fade">
            {{ item.type }}<span class="text-hover text-sm">({{ item.quantity }})</span>
            <Icon v-show="category === item.type" name="emojione-monotone:heavy-check-mark"
                class="absolute text-xs text-white left-[3%]" />
        </label>
    </CollectionFilterBase>
</template>
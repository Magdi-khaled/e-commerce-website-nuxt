<script setup lang="ts">
const categoryFilter = defineModel<string>('categoryFilter');
const props = defineProps<{ type: string }>();
const isOpen = ref(true);
const categories = [
    { type: 'men', quantity: 265 },
    { type: 'women', quantity: 139 },
    { type: 'kids', quantity: 59 },
];
</script>

<template>
    <CollectionFilterBase category="category" v-model:is-open="isOpen">
        <label v-for="(item, index) in categories" :key="index" :for="`category-${index}`"
            class="w-fit relative font-medium cursor-pointer capitalize flex items-center gap-2 lg:text-[15px] text-sm"
            :class="{ 'opacity-50 pointer-events-none': props.type === 'dress' && item.type === 'men' }">
            <input type="radio" name="category" :id="`category-${index}`" :value="item.type" v-model="categoryFilter"
                class="appearance-none cursor-pointer size-5 border border-neutral-500"
                :class="{ 'bg-fade': categoryFilter === item.type }">
            {{ item.type }}<span class="text-hover text-sm">({{ item.quantity }})</span>
            <Icon v-show="categoryFilter === item.type" name="emojione-monotone:heavy-check-mark"
                class="absolute text-xs text-white left-[3%]" />
        </label>
    </CollectionFilterBase>
</template>
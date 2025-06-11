<script setup lang="ts">
const colorFilter = defineModel<string[]>('colorFilter', { default: () => [] });

const isOpen = ref(true);
const colors = [
    { color: 'd9d9d9', name: 'lightgray' },
    { color: '1e1e1e7d', name: 'gray' },
    { color: '1e1e1e', name: 'black' },
    { color: 'f1f1f1', name: 'white' },
    { color: 'b9c1e8', name: 'lightblue' },
    { color: 'ffe4b5', name: 'sugar' },
    { color: '800000', name: 'red' },
    { color: '800080', name: 'purple' },
    { color: '008000', name: 'green' },
    { color: 'a5d6ca', name: 'teal' },
    { color: '000080', name: 'blue' },
    { color: '008080', name: 'emerald' },
    { color: '8a2be2', name: 'lightpurple' },
    { color: 'ff8c00', name: 'orange' },
    { color: 'ffd700', name: 'yellow' },
    { color: 'e9967a', name: 'lightred' },
    { color: '2f4f4f', name: 'olive' },
    { color: 'cd5c5c', name: 'kashmir' }
];
</script>

<template>
    <CollectionFilterBase category="colors" v-model:is-open="isOpen">
        <div class="flex flex-wrap gap-2 items-center">
            <label v-for="(item, index) in colors" :key="index" :for="`color-${index}`"
                class="w-fit relative font-medium cursor-pointer capitalize flex items-center gap-2">
                <input type="checkbox" name="color" :id="`color-${index}`" :value="item.name" v-model="colorFilter"
                    class="appearance-none cursor-pointer size-7 border border-neutral-400 rounded-full checked:border-black"
                    :style="{ backgroundColor: `#${item.color}` }">
                <Icon v-show="Array.isArray(colorFilter) && colorFilter.includes(item.name)"
                    name="emojione-monotone:heavy-check-mark" class="absolute text-sm text-neutral-50 left-[25%]"
                    :class="{ 'text-neutral-600': ['d9d9d9', 'f1f1f1', 'ffe4b5', 'a5d6ca', 'ffd700'].includes(item.color) }" />
            </label>
        </div>
    </CollectionFilterBase>
</template>
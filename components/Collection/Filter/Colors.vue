<script setup lang="ts">
const colors = ['d9d9d9', '1e1e1e7d', '1e1e1e', 'f1f1f1', 'b9c1e8', 'ffe4b5', '800000', '800080', '008000',
    'a5d6ca', '000080', '008080', '8a2be2', 'ff8c00', 'ffd700', 'e9967a', '2f4f4f', 'cd5c5c'];
const isOpen = ref(true);
const colorFilter = ref<string[]>([]);
</script>

<template>
    <CollectionFilterBase category="colors" v-model:is-open="isOpen">
        <div class="flex flex-wrap gap-2 items-center">
            <label v-for="(item, index) in colors" :key="index" :for="`color-${index}`"
                class="w-fit relative font-medium cursor-pointer capitalize flex items-center gap-2">
                <input type="checkbox" name="color" :id="`color-${index}`" :value="item" v-model="colorFilter"
                    class="appearance-none cursor-pointer size-7 border border-neutral-400 rounded-full checked:border-black"
                    :style="{ backgroundColor: `#${item}` }">
                <Icon v-show="colorFilter.includes(item)" name="emojione-monotone:heavy-check-mark"
                    class="absolute text-sm text-neutral-50 left-[25%]"
                    :class="{ 'text-neutral-600': ['d9d9d9', 'f1f1f1', 'ffe4b5', 'a5d6ca', 'ffd700'].includes(item) }" />
            </label>
        </div>
    </CollectionFilterBase>
</template>
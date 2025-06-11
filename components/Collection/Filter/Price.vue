<script setup lang="ts">
const priceFilter = defineModel<number>('priceFilter');

const isOpen = ref(true);
const min = 200, max = 4000;
const tempPrice = ref(priceFilter.value || max);

const updatePrice = () => setTimeout(() => { priceFilter.value = tempPrice.value }, 300);
const percentage = computed(() => ((Number(tempPrice.value) - min) / (max - min)) * 100);
</script>

<template>
    <CollectionFilterBase category="price range" v-model:is-open="isOpen">
        <div class="relative w-full">
            <div class="flex justify-between items-center mb-2 lg:text-sm text-xs font-medium text-muted">
                <span>Min: ${{ min }}</span>
                <span>Max: ${{ max }}</span>
            </div>

            <input type="range" name="price" id="price" min="200" max="4000" step="100" v-model="tempPrice"
                @change="updatePrice" @mouseup="updatePrice" class="w-full h-2 rounded-lg appearance-none
                    bg-background cursor-pointer transition-all
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:size-4
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-fade
                    [&::-webkit-slider-thumb]:shadow
                    [&::-moz-range-thumb]:size-4
                    [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:bg-fade
                    [&::-moz-range-thumb]:shadow" />

            <div class="absolute bottom-[-45%] lg:text-sm text-xs font-medium text-fade transition-all duration-75"
                :style="{ left: `calc(${percentage}% - 1.4rem)` }">
                ${{ tempPrice }}
            </div>
        </div>
    </CollectionFilterBase>
</template>

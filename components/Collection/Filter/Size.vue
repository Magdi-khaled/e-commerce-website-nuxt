<script setup lang="ts">
const sizeFilter = defineModel<string>('sizeFilter');

const sizes = ['XS', 'S', 'M', 'L', 'XL', '2X'];
</script>

<template>
    <div class="border-b border-dashed py-4 border-b-hover">
        <h1 class="capitalize font-bold">size</h1>
        <div class="my-2 flex flex-wrap items-center gap-2">
            <p v-for="(item, index) in sizes" :key="index" @click="sizeFilter = item"
                class="lg:size-9 size-7 text-center lg:p-2 p-1 border border-hover font-medium cursor-pointer transition text-sm"
                :class="{
                    'bg-fade border-neutral-50 text-neutral-50 hover:bg-fade': sizeFilter === item,
                    'hover:bg-neutral-300 ': sizeFilter !== item
                }">
                {{ item }}
            </p>
        </div>
    </div>
</template>
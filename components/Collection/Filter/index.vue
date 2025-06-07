<script setup lang="ts">
const sizes = ['XS', 'S', 'M', 'L', 'XL', '2X'];
</script>

<template>
    <div class="my-4">
        <div class="border-b border-dashed py-4 border-b-hover">
            <h1 class="capitalize font-bold">size</h1>
            <div class="my-2 flex flex-wrap items-center gap-2">
                <p v-for="(item, index) in sizes" :key="index"
                    class="lg:size-9 size-7 text-center lg:p-2 p-1 border border-hover font-medium cursor-pointer hover:bg-neutral-200 transition text-sm">
                    {{ item }}
                </p>
            </div>
        </div>
        <CollectionFilterAvailability />
        <CollectionFilterCategory />
        <CollectionFilterColors />
        <CollectionFilterPrice />
        <CollectionFilterRate />
    </div>
</template>
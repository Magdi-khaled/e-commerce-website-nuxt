<script setup lang="ts">
import type Product from '~/types/useProduct';

const props = defineProps<{
    product: Product
}>();
const mainImage = ref(props.product.thumbnail);
const selectedImage = ref(0);
</script>

<template>
    <div class="flex sm:flex-row flex-col items-center gap-4 lg:h-[35rem] md:h-[32rem] h-full">
        <!-- thumbnail -->
        <img :src="mainImage" alt="Main Product Image" class="m-auto lg:w-[32rem] md:w-[28rem] w-[26rem]
            sm:h-full h-[25rem] border-[1px] border-neutral-300">
        <!-- images -->
        <div
            class="flex sm:flex-col flex-row justify-between sm:h-full h-auto lg:gap-4 sm:gap-2 gap-3 overflow-y-hidden overflow-x-auto sm:pb-0 pb-4">
            <img v-for="(item, index) in product.images" :key="index" :src="item" :alt="`Product Image-${index + 1}`"
                @click="mainImage = item, selectedImage = index"
                class=" sm:w-[5.625rem] w-[6rem] sm:h-[6rem] h-[7rem] cursor-pointer border-[1px] border-neutral-300 object-cover"
                :class="{ 'opacity-50 transition-all': mainImage === item && index !== selectedImage }">
        </div>
    </div>
</template>
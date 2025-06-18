<script setup lang="ts">
import type Product from '~/types/useProduct';

const props = defineProps<{
    product: Product
}>();

const selectedColor = ref(props.product.colors[0].name);
const selectedSize = ref(props.product.sizes[0]);
const selectedQuantity = ref(1);
</script>
<template>
    <div class="lg:px-12 sm:px-6 px-0 py-4 grid lg:gap-12 gap-8">
        <!-- product description -->
        <div>
            <div class="flex justify-between items-center">
                <h1 class="uppercase font-semibold tracking-widest lg:my-1 my-4">{{ product.title }}</h1>
                <button
                    class="cursor-pointer bg-neutral-50 rounded-tr-md md:hidden flex items-center p-3 hover:bg-neutral-200 transition">
                    <Icon name="mingcute:heart-line" size="20" class="-rotate-45" />
                </button>
            </div>
            <h3 class="mb-4 font-semibold">$ {{ product.price }}</h3>
            <h2 class="text-hover">MRP incl. of all taxes</h2>
            <p class="my-6">{{ product.description }}</p>
        </div>

        <!-- product order -->
        <div>
            <!-- colors -->
            <p class="font-light">Color</p>
            <div class="flex items-center gap-2 my-2">
                <label v-for="(item, index) in product.colors" :key="index" for="color"
                    class="w-fit relative font-medium cursor-pointer capitalize ">
                    <input type="radio" name="color" id="color" :value="item.name" v-model="selectedColor"
                        class="appearance-none cursor-pointer size-8 border border-neutral-400 checked:border-black"
                        :style="{ backgroundColor: `#${item.color}` }">
                    <Icon v-show="item.name === selectedColor" name="emojione-monotone:heavy-check-mark"
                        class="absolute text-lg text-neutral-50 top-[20%] left-[25%]"
                        :class="{ 'text-neutral-600': ['d9d9d9', 'f1f1f1', 'ffe4b5', 'a5d6ca', 'ffd700'].includes(item.color) }" />
                </label>
            </div>

            <!-- sizes -->
            <p class="font-light">Size</p>
            <div class="flex items-center gap-2 mt-2 mb-4">
                <p v-for="(item, index) in product.sizes" :key="index" @click="selectedSize = item"
                    class="lg:size-9 size-7 text-center lg:p-2 p-1 border border-hover font-medium cursor-pointer transition text-sm"
                    :class="{
                        'bg-fade border-neutral-50 text-neutral-50 hover:bg-fade': selectedSize === item,
                        'hover:bg-neutral-300 ': selectedSize !== item
                    }">
                    {{ item }}
                </p>
            </div>

            <!-- product quantity -->
            <p class="font-light">Quantity</p>
            <div class="grid grid-cols-3 my-2 border-[2px] border-hover w-[120px]">
                <button @click="selectedQuantity++"
                    class="cursor-pointer flex items-center justify-center w-full h-full hover:bg-hover hover:text-neutral-50 transition-all">
                    <Icon name="line-md:plus" />
                </button>
                <p class="font-semibold border-x-[2px] border-x-hover py-1 text-center"> {{ selectedQuantity }}</p>
                <button @click="selectedQuantity > 1 ? selectedQuantity-- : true"
                    class="cursor-pointer flex items-center justify-center w-full h-full hover:bg-hover hover:text-neutral-50 transition-all">
                    <Icon name="line-md:minus" />
                </button>
            </div>

            <!-- measurment guide -->
            <nuxt-link to="/collections/measurementguide"
                class="my-1 cursor-pointer text-sm text-hover underline font-light decoration-transparent hover:decoration-hover transition">
                FIND YOUR SIZE | MEASUREMENT GUIDE</nuxt-link>

            <!-- add to cart -->
            <Button
                class="sm:bg-background bg-primary sm:text-primary text-background uppercase font-medium sm:my-4 my-0 w-full py-[1rem] justify-center gap-4 sm:relative fixed bottom-0 left-0 z-50">
                add to cart
                <Icon name="solar:cart-2-linear" size="20" />
            </Button>
        </div>
    </div>
</template>
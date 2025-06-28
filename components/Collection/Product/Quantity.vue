<script setup lang="ts">
import type Order from '~/types/useOrder';

const props = defineProps<{
    isCart?: boolean
    item: Order
}>();
const selectedQuantity = defineModel<number>('selectedQuantity');

const increaseQuantity = () => selectedQuantity.value++;
const decreaseQuantity = () => selectedQuantity.value > 1 ? selectedQuantity.value-- : true;
</script>

<template>
    <div class="grid grid-cols-3 border-[2px] border-hover"
        :class="{ 'w-[120px] my-2': !isCart, 'w-[90px] text-sm': isCart }">
        <button @click="increaseQuantity"
            class="cursor-pointer flex items-center justify-center w-full h-full hover:bg-hover hover:text-neutral-50 transition-all">
            <Icon name="line-md:plus" />
        </button>
        <p class="border-x-[2px] border-x-hover py-px text-center" :class="{ 'font-semibold': !isCart }">
            {{ selectedQuantity }}</p>
        <button v-if="isCart" @click="useCartStore().removeFromCart(item)"
            class="cursor-pointer flex items-center justify-center w-full h-full hover:bg-hover hover:text-neutral-50 transition-all">
            <Icon name="line-md:minus" />
        </button>
        <button v-else @click="decreaseQuantity"
            class="cursor-pointer flex items-center justify-center w-full h-full hover:bg-hover hover:text-neutral-50 transition-all">
            <Icon name="line-md:minus" />
        </button>
    </div>
</template>
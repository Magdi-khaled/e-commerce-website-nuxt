<script setup lang="ts">
import type Order from '~/types/useOrder';

const props = defineProps<{
    item: Order,
    index?: number
}>();

const cartStore = useCartStore();
</script>

<template>
    <div class="flex items-center sm:gap-4 gap-2">
        <div class="relative">
            <div class="flex items-center gap-2">
                <nuxt-link :to="`/collections/${item.id}`" class="relative">
                    <img :src="item.thumbnail" loading="lazy" :alt="`New Week Product (${index})`" class="m-auto lg:w-[20rem] md:w-[18rem] sm:w-[14rem] w-[18rem] 
                    lg:h-[20rem] md:h-[16rem] sm:h-[14rem] h-[18rem] border-[1px] border-neutral-300 object-cover">
                </nuxt-link>
                <button
                    class="absolute right-0 lg:bottom-[21.2%] md:bottom-[25%] sm:bottom-[27%] bottom-[22.5%] p-1 border border-neutral-300 bg-white flex cursor-pointer text-xl text-hover hover:text-fade transition-all">
                    <Icon name="mingcute:heart-line" size="20" class="-rotate-45" />
                </button>
            </div>
            <div class="md:text-[14px] text-xs my-2 tracking-wide font-semibold capitalize">
                <h1 class="text-neutral-500">{{ item.type }}</h1>
                <div class="mt-1 flex justify-between h-12">
                    <h2>{{ item.title }}</h2>
                    <p>${{ item.price }}</p>
                </div>
            </div>
            <button @click="cartStore.removeItemFromCart(item)" title="Remove from Cart"
                class="absolute top-1 -right-10 cursor-pointer text-2xl text-hover hover:text-fade">
                <Icon name="heroicons:x-mark" />
            </button>
        </div>
        <!--  order data -->
        <div class="grid gap-4 items-start mb-16">
            <p class="font-semibold pl-1">{{ item.size }}</p>
            <div class="size-8 border border-neutral-400 cursor-pointer" :title="`Order color: ${item.color.name}`"
                :style="{ backgroundColor: `#${item.color.color}` }" />
            <div class="grid border-[2px] border-hover">
                <button @click="cartStore.addToCart(item)"
                    class="cursor-pointer py-[6px] flex items-center justify-center w-full h-full hover:bg-hover hover:text-neutral-50 transition-all">
                    <Icon name="line-md:plus" />
                </button>
                <p class="border-y-[2px] border-y-hover py-px text-center">
                    {{ item.orderQuantity }}</p>
                <button @click="cartStore.removeFromCart(item)"
                    class="cursor-pointer py-[6px] flex items-center justify-center w-full h-full hover:bg-hover hover:text-neutral-50 transition-all">
                    <Icon name="line-md:minus" />
                </button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type Product from '~/types/useProduct';
const open = defineModel<boolean>('open');
const items = [{
    id: 9,
    title: "k-cloth trouser",
    description:
        "Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.",
    type: "cloth trouser",
    thumbnail: "/collection/product19.webp",
    price: 199,
    available: true,
    rate: 0,
    category: "men",
    sizes: ["S", "M", "L", "XL", "2X"],
    colors: [
        { color: "008000", name: "green" },
        { color: "a5d6ca", name: "teal" },
        { color: "000080", name: "blue" },
        { color: "008080", name: "emerald" },
        { color: "8a2be2", name: "lightpurple" },
    ],
    images: [
        "/collection/product19.webp",
        "/collection/product19.webp",
        "/collection/product19.webp",
        "/collection/product19.webp",
        "/collection/product19.webp",
    ],
}] as Product[]
</script>

<template>
    <transition name="fade">
        <div v-if="open" class="fixed top-0 right-0 z-90 h-full w-11/12 sm:w-5/12 lg:w-[30%] bg-neutral-100 shadow-lg md:text-[16px] 
            text-sm flex flex-col">
            <!-- cart header -->
            <div class="md:pt-8 pt-6 px-4 md:px-8 flex justify-between border-b border-b-background pb-2">
                <h1>Shopping Cart</h1>
                <button @click="open = false" class="cursor-pointer hover:text-hover transition-all">
                    <Icon name="line-md:remove" />
                </button>
            </div>
            <!-- cart items -->
            <div class="flex-1 overflow-y-auto px-4 md:px-8 py-4 space-y-4">
                <CartItem :item="item" v-for="(item, index) in items" :key="index"
                    class="border-b border-b-background pb-2 last:border-b-0" />
            </div>
            <!-- checkout button -->
            <div>
                <Button class="py-4 w-full flex justify-between items-center">
                    checkout
                    <Icon name="mynaui:arrow-long-right" size="28" />
                </Button>
            </div>
        </div>
    </transition>
</template>

<style scoped lang="scss">
.fade {

    &-enter-from,
    &-leave-to {
        transform: translateX(0px);
    }

    &-enter-from,
    &-leave-to {
        transform: translateX(100%)
    }

    &-enter-active,
    &-leave-active {
        transition: transform 0.3s;
    }
}
</style>
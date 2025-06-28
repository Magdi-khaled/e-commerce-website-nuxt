<script setup lang="ts">
import type Order from '~/types/useOrder';
import type Product from '~/types/useProduct';

const route = useRoute();
const props = defineProps<{
    item: Product,
    index: number
}>();


const order: Order = reactive({
    id: props.item.id,
    title: props.item.title,
    type: props.item.type,
    thumbnail: props.item.thumbnail,
    price: props.item.price,
    orderQuantity: props.item.orderQuantity,
    category: props.item.category,
    size: props.item.sizes[1],
    color: props.item.colors[1],
});
const cartStore = useCartStore();
</script>

<template>
    <div class="relative">
        <nuxt-link :to="`/collections/${item.id}`" class="relative">
            <div class="relative">
                <img :src="item.thumbnail" loading="lazy" :alt="`New Week Product (${index})`" class="m-auto 2xl:w-full lg:w-[28rem] md:w-[18rem] w-[14rem] 
                border-[1px] border-neutral-300 object-cover" :class="{
                    '2xl:h-[35rem] lg:h-[28rem] md:h-[16rem] sm:h-[13rem] h-[11rem]': route.name === 'index',
                    '2xl:h-[23rem] xl:h-[20rem] md:h-[14rem] sm:h-[13rem] h-[12rem]': route.name === 'collections'
                }">
            </div>
            <div class="2xl:text-[17px] md:text-[14px] text-xs my-2 tracking-wide font-semibold capitalize">
                <h1 class="text-neutral-500">{{ item.type }}</h1>
                <div class="mt-1 flex justify-between h-12">
                    <h2>{{ item.title }}</h2>
                    <p>${{ item.price }}</p>
                </div>
            </div>
        </nuxt-link>

        <!-- add to wishlist -->
        <button
            class="absolute right-0 
                p-1 border border-neutral-300 bg-white flex cursor-pointer 2xl:text-[1.8rem] text-lg text-hover hover:text-fade transition-all"
            :class="{
                '2xl:bottom-[14.5%] lg:bottom-[16%] md:bottom-[25%] sm:bottom-[29%] bottom-[32%]': route.name === 'index',
                '2xl:bottom-[20%] xl:bottom-[21.5%] md:bottom-[28%] sm:bottom-[29%] bottom-[30.5%]': route.name === 'collections'
            }">
            <Icon name="mingcute:heart-line" class="-rotate-45" />
        </button>
        <!-- add to cart -->
        <button @click="cartStore.addToCart(order)" title="Add to Cart"
            class="cursor-pointer absolute left-[45%] 2xl:text-[1.6rem] text-lg text-fade p-1 rounded-t-md flex bg-background hover:text-neutral-50 hover:bg-fade transition duration-300"
            :class="{
                '2xl:bottom-[14.5%] lg:bottom-[16%] md:bottom-[25%] sm:bottom-[29%] bottom-[32%]': route.name === 'index',
                '2xl:bottom-[20%] xl:bottom-[21.5%] md:bottom-[28%] sm:bottom-[29%] bottom-[30%]': route.name === 'collections'
            }">
            <Icon name="line-md:plus" />
        </button>
    </div>
</template>
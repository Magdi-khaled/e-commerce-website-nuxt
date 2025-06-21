<script setup lang="ts">
const route = useRoute();
const props = defineProps<{
    item: any,
    index: number
}>();
</script>

<template>
    <div class="relative">
        <nuxt-link :to="`/collections/${item.id}`" class="relative">
            <div class="relative">
                <img :src="item.thumbnail" loading="lazy" :alt="`New Week Product (${index})`" class="m-auto lg:w-[28rem] md:w-[18rem] w-[14rem] 
                border-[1px] border-neutral-300 object-cover" :class="{
                    'lg:h-[28rem] md:h-[16rem] sm:h-[13rem] h-[11rem]': route.name === 'index',
                    'lg:h-[20rem] md:h-[14rem] sm:h-[13rem] h-[12rem]': route.name === 'collections'
                }">
            </div>
            <div class="md:text-[14px] text-xs my-2 tracking-wide font-semibold capitalize">
                <h1 class="text-neutral-500">{{ item.type }}</h1>
                <div class="mt-1 flex justify-between h-12">
                    <h2>{{ item.title }}</h2>
                    <p>${{ item.price }}</p>
                </div>
            </div>
        </nuxt-link>

        <!-- add to wishlist -->
        <button
            class="absolute right-0 lg:bottom-[21.2%] md:bottom-[28%] sm:bottom-[29%] bottom-[30.5%] p-1 border border-neutral-300 bg-white flex cursor-pointer text-xl text-hover hover:text-fade transition-all">
            <Icon name="mingcute:heart-line" size="20" class="-rotate-45" />
        </button>
        <!-- add to cart -->
        <button title="Add to Cart"
            class="cursor-pointer absolute lg:bottom-[21%] md:bottom-[28%] sm:bottom-[29%] bottom-[30%] left-[45%] sm:text-xl text-lg text-fade p-1 rounded-t-md flex bg-background hover:text-neutral-50 hover:bg-fade transition duration-300">
            <Icon name="line-md:plus" />
        </button>
    </div>
</template>
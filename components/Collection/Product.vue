<script setup lang="ts">
const props = defineProps<{
    item: any,
    index: number
}>();
const route = useRoute();
</script>

<template>
    <nuxt-link :to="`/collections/${item.id}`">
        <div class="relative">
            <img :src="item.thumbnail" loading="lazy" :alt="`New Week Product (${index})`" class="m-auto lg:w-[28rem] md:w-[18rem] w-[14rem] 
                border-[1px] border-neutral-300 object-cover" :class="{
                    'lg:h-[28rem] md:h-[16rem] sm:h-[13rem] h-[11rem]': route.name === 'index',
                    'lg:h-[20rem] md:h-[14rem] sm:h-[13rem] h-[12rem]': route.name === 'collections'
                }">
            <button title="Add to Cart"
                class="cursor-pointer absolute bottom-0 left-[45%] sm:text-xl text-sm text-fade p-1 rounded-t-md flex bg-background hover:text-neutral-50 hover:bg-fade transition duration-300">
                <Icon name="line-md:plus" />
            </button>
        </div>
        <div class="md:text-[14px] text-xs my-2 tracking-wide font-semibold">
            <h1 class="text-neutral-500">{{ item.type }}</h1>
            <div class="mt-1 flex justify-between capitalize">
                <h2>{{ item.title }}</h2>
                <p>${{ item.price }}</p>
            </div>
        </div>
    </nuxt-link>
</template>
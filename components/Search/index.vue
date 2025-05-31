<script setup>
const items = [
    { title: 'men', path: '/' },
    { title: 'women', path: '/' },
    { title: 'kids', path: '/' }
];
const focused = ref(false);
</script>

<template>
    <div class="grid gap-4">
        <div>
            <nuxt-link :to="item.path" v-for="(item, index) in items" :key="index"
                class="block w-fit uppercase tracking-widest text-fade cursor-pointer hover:underline hover:underline-offset-2 transition duration-300">
                {{ item.title }}
            </nuxt-link>
        </div>
        <div class="bg-background sm:w-[350px] w-full px-3 flex items-center gap-2 transition"
            :class="{ 'bg-neutral-400 shadow-md': focused }" @click="">
            <Icon name="mynaui:search" class="text-xl" />
            <input type="text" id="search"
                class="flex-1 py-4 sm:text-[14px] text-[14px] placeholder:text-end placeholder:tracking-widest focus:outline-none"
                placeholder="Search" @focus="focused = true" @blur="focused = false">
        </div>
    </div>
</template>
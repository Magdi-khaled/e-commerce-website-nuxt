<script setup lang="ts">
const links = [
    {
        title: 'info',
        items: [{ title: 'pricing', path: '/' }, { title: 'about', path: '/' }, { title: 'contacts', path: '/' }]
    }, {
        title: 'faq',
        items: [{ title: 'account', path: '/' }, { title: 'manage deliveries', path: '/' }, { title: 'orders', path: '/' },
        { title: 'payments', path: '/' }]
    }, {
        title: 'help',
        items: [{ title: 'customer support', path: '/' }, { title: 'delivery details', path: '/' }, { title: 'terms & conditions', path: '/' },
        { title: 'privacy policy', path: '/' }]
    }, {
        title: 'Languages',
        items: ['eng', 'esp', 'sve']
    },
]
</script>
<template>
    <footer class="bg-[#0000000b]">
        <div class="md:px-28 md:py-36 px-5 py-16 grid md:grid-cols-2 grid-cols-1">
            <div class="md:m-auto mx-0 mb-12">
                <p class="uppercase text-hover">Technologies</p>
                <div class="relative md:text-8xl text-6xl uppercase font-extrabold font-sans text-fade">
                    <p class="text-background">vr</p>
                    <p class="flex gap-2 items-start">xiv
                        <span class="md:pt-4 pt-2 font-semibold text-hover md:text-sm text-xs">Near-field communication
                        </span>
                    </p>
                    <p>qr</p>
                    <Logo
                        class="absolute md:left-[3%] left-[1%] top-[16%] border border-hover bg-background rounded-lg" />
                </div>
            </div>
            <div class="grid grid-cols-2 sm:gap-12 gap-4 justify-center">
                <div class="grid sm:gap-6 gap-2" v-for="(item, index) in links" :key="index">
                    <p
                        class="text-hover uppercase font-sans sm:text-[16px] text-sm sm:font-normal font-medium tracking-normal">
                        {{ item.title }}</p>
                    <ul class="grid gap-1 uppercase text-fade">
                        <li v-for="(link, index) in item.items" :key="index">
                            <nuxt-link :to="link?.path"
                                class="cursor-pointer hover:underline hover:underline-offset-1 transition duration-300 sm:text-[16px] text-[12px] whitespace-nowrap">
                                {{ link.title || link }}</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="py-4 text-center">
            <p class="text-hover sm:text-sm text-xs">
                VR XIV © 2019-2025 Copyright. All rights reserved
            </p>
        </div>
    </footer>
</template>
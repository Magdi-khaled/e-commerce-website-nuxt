<script setup lang="ts">
const route = useRoute();
const items = [
    { title: 'Home', path: '/' },
    { title: 'Collections', path: '/collections' },
    { title: 'New', path: 'collections' }
];
const open = ref(false);
const show = ref(false);
const newCollection = () => {
    if (!route.query.new) {
        show.value = true;
        setTimeout(() => { show.value = false; }, 600);
    }
};
</script>
<template>
    <header>
        <nav class="flex items-center justify-between w-full">
            <Loading v-if="show" />
            <ul class="flex gap-6">
                <button @click="open = true" class="cursor-pointer hover:text-fade transition duration-150">
                    <Icon name="gravity-ui:bars-descending-align-left" size="22" />
                </button>
                <li v-for="(item, index) in items" :key="index"
                    class="tracking-wider hidden md:block hover:text-fade transition duration-150">
                    <nuxt-link v-if="index !== 2" :to="item.path">
                        {{ item.title }}
                    </nuxt-link>
                    <nuxt-link v-else :to="{ name: item.path, query: { new: true } }" @click="newCollection()">
                        {{ item.title }}
                    </nuxt-link>
                </li>
            </ul>
            <NavbarSlider v-model:open="open" />
            <Logo class="md:ml-0 ml-16" />
            <div class="flex items-center justify-between gap-2 sm:gap-12">
                <button
                    class="cursor-pointer md:flex hidden items-center p-3 bg-primary text-neutral-50 rounded-full -rotate-45 hover:bg-fade transition">
                    <Icon name="mingcute:heart-line" size="20" />
                </button>
                <div class="cursor-pointer flex items-center group">
                    <p
                        class="font-light tracking-widest text-[12px] bg-primary text-neutral-50 py-[14px] px-6 rounded-full md:block hidden group-hover:bg-fade transition">
                        Cart
                    </p>
                    <div
                        class="flex items-center border-4 group-hover:border-fade group-hover:text-fade rounded-full p-2 bg-neutral-50 group-hover:bg-neutral-200 transition">
                        <Icon name="gravity-ui:shopping-bag" size="20" />
                    </div>
                </div>

                <button
                    class="cursor-pointer flex items-center p-3 bg-primary text-neutral-50 rounded-full hover:bg-fade transition">
                    <Icon name="lets-icons:user" size="20" />
                </button>
            </div>
        </nav>
    </header>
</template>
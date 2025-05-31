<script setup lang="ts">
const open = defineModel<boolean>('open');

const items = [
    { title: 'Home', path: '/' },
    { title: 'Collections', path: '/' },
    { title: 'New', path: '/' },
    { title: 'About', path: '/' },
    { title: 'Support', path: '/' },
];
</script>

<template>
    <transition name="fade">
        <div v-if="open"
            class="fixed inset-0 z-50 bg-hover h-full w-11/12 sm:w-5/12 lg:w-3/12 bg-neutral-100 px-4 md:px-8 md:py-10 py-6 shadow-lg md:text-[16px] text-sm">
            <div class="flex items-center justify-between font-bold">
                <div class="flex items-center gap-2">
                    <Logo />
                    <p>VR XIV QR</p>
                </div>
                <button @click="open = false"
                    class="flex cursor-pointer hover:text-hover transition">
                    <Icon name="heroicons:x-mark-16-solid" size="25" />
                </button>
            </div>
            <div>
                <ul class="grid my-4">
                    <li v-for="(item, index) in items" :key="index" class="tracking-wider"
                        :class="{ 'border-t': index }">
                        <nuxt-link :to="item.path"
                            class="hover:text-neutral-50 hover:bg-fade transition duration-150 py-2 px-2 w-full h-full block ">
                            {{ item.title }}
                        </nuxt-link>
                    </li>
                </ul>
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
        transform: translateX(-100%);
    }

    &-enter-active,
    &-leave-active {
        transition: transform 0.3s;
    }
}
</style>
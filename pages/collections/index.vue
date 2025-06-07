<script setup lang="ts">
definePageMeta({
    breadcrumb: [
        { name: 'home', link: '/' },
        { name: 'collections', link: '' },
    ],
});
const products = xivCollection;
const openFilter = ref(false);

const handleResize = () => openFilter.value = false;
onMounted(() => window.addEventListener('resize', handleResize));
onUnmounted(() => window.removeEventListener('resize', handleResize));
</script>

<template>
    <main class="my-6 grid grid-cols-4 lg:gap-4 gap-0">
        <div class="pl-5 md:pl-12 md:col-span-1 col-span-4 md:block hidden">
            <p class="font-bold">Filters</p>
            <CollectionFilter />
        </div>
        <div class="pl-5 md:pl-6 md:col-span-3 col-span-4 justify-between">
            <Breadcrumbs />
            <div class="overflow-hidden">
                <h1 class="uppercase font-semibold my-2 text-xl">products</h1>
                <!-- collection header -->
                <div class="grid grid-cols-5 items-center lg:gap-8 gap-4">
                    <CollectionHeader v-model:open-filter="openFilter" />
                </div>
                <!-- collection(products) -->
                <div class="flex gap-3 justify-center">
                    <CollectionFilter v-show="openFilter" class="sm:w-4/12 w-6/12 md:hidden block" />
                    <div class="my-6 pr-5 md:pr-8 grid sm:gap-5 gap-4"
                        :class="{ 'md:w-full sm:w-8/12 w-6/12 sm:grid-cols-2 grid-cols-1': openFilter, 'sm:grid-cols-3 grid-cols-2 ': !openFilter }">
                        <CollectionProduct v-for="(item, index) in products" :key="index" :index="index" :item="item" />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
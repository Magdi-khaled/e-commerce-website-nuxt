<script setup lang="ts">
definePageMeta({
    breadcrumb: [
        { name: 'home', link: '/' },
        { name: 'collections', link: '' },
    ],
});
const route = useRoute();
const storedProducts = localStorage.getItem('products');
const allProducts = ref<[]>(storedProducts ? JSON.parse(storedProducts) : xivCollection as [] || []);
const show = ref(false);
const openFilter = ref(false);
const currentPage = ref(1);
const itemsPerPage = 12;

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return allProducts.value.slice(start, end);
});
const query = ref(route.query);
watch(() => route.query, (newVal) => query.value = newVal)
const handleResize = () => openFilter.value = false;
onMounted(() => window.addEventListener('resize', handleResize));
onUnmounted(() => window.removeEventListener('resize', handleResize));
</script>

<template>
    <main class="my-6 grid grid-cols-4 lg:gap-4 gap-0">
        <Spinner v-show="show" />
        <div class="pl-5 md:pl-12 md:col-span-1 col-span-4 md:block hidden">
            <p class="font-bold">Filters</p>
            <CollectionFilter v-model:filtered-collection="allProducts" v-model:show="show" />
        </div>
        <div class="pl-5 md:pl-6 md:col-span-3 col-span-4 justify-between">
            <Breadcrumbs />
            <div class="overflow-hidden">
                <div class="flex items-center gap-2">
                    <h1 class="uppercase font-semibold my-2 text-xl">products</h1>
                    <span v-if="route.query.availability" class="capitalize text-xs border px-[2px]">
                        {{ query.availability }}</span>
                    <span v-if="route.query.category" class="capitalize text-xs border px-[2px]">
                        {{ query.category }}</span>
                    <span v-if="route.query.size" class="capitalize text-xs border px-[2px]">{{ query.size }}</span>
                </div>
                <!-- collection header -->
                <div class="grid grid-cols-5 items-center lg:gap-8 gap-4">
                    <CollectionHeader v-model:open-filter="openFilter" />
                </div>
                <!-- collection(products) -->
                <div class="flex gap-3 justify-center">
                    <CollectionFilter v-show="openFilter" class="sm:w-4/12 w-6/12 md:hidden block"
                        v-model:filtered-collection="allProducts" v-model:show="show" />
                    <div class="my-6 pr-5 md:pr-8 grid sm:gap-5 gap-4"
                        :class="{ 'md:w-full sm:w-8/12 w-6/12 sm:grid-cols-2 grid-cols-1': openFilter, 'sm:grid-cols-3 grid-cols-2 ': !openFilter }">
                        <CollectionProduct v-for="(item, index) in paginatedProducts" :key="index" :index="index"
                            :item="item" />
                    </div>
                </div>
                <div class="w-full flex justify-center">
                    <CollectionPagination v-model:current-page="currentPage" :total-items="allProducts.length"
                        :items-per-page="itemsPerPage" />
                </div>
            </div>
        </div>
    </main>
</template>
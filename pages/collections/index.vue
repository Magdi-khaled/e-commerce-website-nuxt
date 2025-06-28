<script setup lang="ts">
definePageMeta({
    breadcrumb: [
        { name: 'home', link: '/' },
        { name: 'collections', link: '' },
    ],
});
const route = useRoute();
const collectionStore = useCollectionStore();

const query = ref(route.query);
const show = ref(false);
const currentPage = ref(Number(route.query.page) || 1);
const itemsPerPage = 12;

const openFilter = ref(false);
const typeFilter = ref<string>(route.query.type as string || 'all');

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return collectionStore.collections.slice(start, end);
});
watch(() => route.query, (newVal) => query.value = newVal);

const handleResize = () => openFilter.value = false;
onMounted(async () => {
    await collectionStore.fetchCollections();
    window.addEventListener('resize', handleResize);
});
onUnmounted(() => window.removeEventListener('resize', handleResize));
</script>

<template>
    <main class="my-6 grid grid-cols-4 lg:gap-4 gap-0">
        <Loading v-if="show" />
        <div class="pl-5 md:pl-12 md:col-span-1 col-span-4 md:block hidden">
            <p class="font-bold">Filters</p>
            <CollectionFilter v-model:filtered-collection="collectionStore.collections" v-model:show="show"
                v-model:type-filter="typeFilter" v-model:current-page="currentPage" />
        </div>
        <div class="ml-5 md:ml-6 md:col-span-3 col-span-4 justify-between">
            <Breadcrumbs />
            <div class="overflow-hidden">
                <div class="flex items-center gap-2">
                    <h1 class="uppercase font-semibold my-2 text-xl">products</h1>
                    <span v-if="route.query.availability" class="capitalize text-xs border px-[2px]">
                        {{ query.availability }}</span>
                    <span v-if="route.query.category" class="capitalize text-xs border px-[2px]">
                        {{ query.category }}</span>
                    <span v-if="route.query.size" class="capitalize text-xs border px-[2px]">{{ query.size }}</span>
                    <span v-if="route.query.rate" class="flex items-center capitalize text-xs border px-[2px]">
                        rate:
                        <Icon v-for="i in Number(query.rate)" name="solar:star-bold" class="text-orange-700" />
                    </span>
                </div>
                <!-- collection header -->
                <div class="grid grid-cols-5 items-center lg:gap-8 gap-4 2xl:px-2 px-0">
                    <CollectionHeader v-model:open-filter="openFilter" v-model:type-filter="typeFilter" />
                </div>
                <!-- collection(products) -->
                <div class="flex gap-3 justify-center">
                    <CollectionFilter v-if="openFilter" class="sm:w-4/12 w-6/12 md:hidden block"
                        v-model:filtered-collection="collectionStore.collections" v-model:show="show"
                        v-model:type-filter="typeFilter" />
                    <div v-if="collectionStore.collections.length > 0"
                        class="my-6 pr-5 md:pr-8 grid 2xl:gap-8 xl:gap-5 gap-4" :class="{
                            'md:w-full sm:w-8/12 w-6/12 sm:grid-cols-2 grid-cols-1': openFilter,
                            'sm:grid-cols-3 grid-cols-2 ': !openFilter
                        }">
                        <CollectionProduct v-for="(item, index) in paginatedProducts" :key="index" :index="index"
                            :item="item" />
                    </div>
                    <div v-else
                        class="my-24 flex flex-col sm:gap-16 gap-12 sm:justify-center justify-start items-center">
                        <img src="@/assets/media/no-products.svg" alt="No Products Found" class="grayscale-[70]"
                            loading="lazy">
                        <p class="text-neutral-600 uppercase text-xs text-center px-2">
                            no products matches your filter...</p>
                    </div>
                </div>
                <div v-if="collectionStore.collections.length > 0" class="w-full flex justify-center">
                    <CollectionPagination v-model:current-page="currentPage"
                        :total-items="collectionStore.collections.length" :items-per-page="itemsPerPage"
                        v-model:show="show" />
                </div>
            </div>
        </div>
    </main>
</template>
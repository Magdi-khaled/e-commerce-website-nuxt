<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const show = defineModel<boolean>('show');
const currentPage = defineModel<number>('currentPage');
const filteredCollection = defineModel<[]>('filtered-collection');
const typeFilter = defineModel<string>('typeFilter', { default: 'all' });
const newFilter = ref<boolean>(Boolean(route.query.new));

const MAX_PRICE = 4000;

const sizeFilter = ref<string>(route.query.size as string || '');
const availFilter = ref<string>(route.query.availability as string || '');
const categoryFilter = ref<string>(route.query.category as string || '');
const colorFilter = ref<string[]>(route.query.color as string[] || []);
const priceFilter = ref<number>(Number(route.query.price) || 4000);
const rateFilter = ref<number>(Number(route.query.rate) || 0);

const clear = () => {
    sizeFilter.value = '';
    availFilter.value = '';
    categoryFilter.value = '';
    colorFilter.value = [];
    priceFilter.value = MAX_PRICE;
    rateFilter.value = 0;
    typeFilter.value = 'all';
    newFilter.value = null;
    router.push('collections');
    localStorage.clear();
};

onBeforeMount(() => {
    if (Object.keys(route.query).length > 0) {
        show.value = true;
        setTimeout(() => {
            const filtered = xivCollection?.filter((item) => {
                const matchesSize = sizeFilter.value ? item.sizes.includes(sizeFilter.value) : true;
                const matchesAvailability =
                    availFilter.value === 'available' ? item.available === true
                        : availFilter.value === 'out of stock' ? item.available === false : true;
                const matchesCategory = categoryFilter.value ? item?.category === categoryFilter.value : true;
                const matchesColor = colorFilter.value.length > 0 ? item.colors.some(c => colorFilter.value.includes(c.name)) : true;
                const matchesPrice = priceFilter.value ? item?.price <= priceFilter.value : true;
                const matchesType = typeFilter.value !== 'all' ? item?.type.split(' ')[1] === typeFilter.value : true;
                const matchesRate = rateFilter.value ? item?.rate === rateFilter.value : true;
                return matchesSize && matchesAvailability && matchesCategory && matchesType
                    && matchesColor && matchesPrice && matchesRate;
            }) || [];
            filteredCollection.value = filtered as [];
            localStorage.setItem('products', JSON.stringify(filtered));
            show.value = false;
        }, 600);
    }
});

watch([sizeFilter, availFilter, categoryFilter, colorFilter, priceFilter, typeFilter, rateFilter, currentPage, newFilter],
    async ([size, availability, category, color, price, type, rate, page, isNew], old) => {
        if (route.query.page) currentPage.value = 1;
        if (route.query.new === true) clear();

        if (type !== old[5]) {
            sizeFilter.value = '';
            availFilter.value = '';
            categoryFilter.value = '';
            colorFilter.value = [];
            priceFilter.value = MAX_PRICE;
            rateFilter.value = 0;
            newFilter.value = null;
            localStorage.clear();
        }
        show.value = true;
        setTimeout(async () => {
            const filtered = xivCollection?.filter((item) => {
                const matchesSize = size ? item.sizes.includes(size) : true;
                const matchesAvailability =
                    availability === 'available' ? item.available === true
                        : availability === 'out of stock' ? item.available === false : true;
                const matchesCategory = category ? item?.category === category : true;
                const matchesColor = color.length > 0 ? item.colors.some(c => color.includes(c.name)) : true;
                const matchesPrice = price ? item?.price <= price : true;
                const matchesType = type !== 'all' ? item?.type.split(' ')[1] === type : true;
                const matchesRate = rate ? item?.rate === rate : true;
                return matchesSize && matchesAvailability && matchesCategory && matchesType
                    && matchesColor && matchesPrice && matchesRate;
            }) || [];
            filteredCollection.value = filtered as [];
            localStorage.setItem('products', JSON.stringify(filtered));
            show.value = false;
        }, 600);

        const { buildQuery } = useHelper({
            new: isNew, page, type, size, availability, category, color, price, rate
        });
        await router.push({ path: route.fullPath.split('?')[0], query: buildQuery() });
    });
</script>

<template>
    <div class="my-4">
        <div class="w-full flex items-center justify-end">
            <button v-show="Object.keys(route.query).length > 0 && !route.query.page" @click="clear"
                title="Clear All Filters"
                class="uppercase text-xs underline text-fade flex items-center gap-1 hover:text-orange-600 cursor-pointer transition">
                clear filters
                <Icon name="streamline-plump:recycle-bin-2-remix" />
            </button>
        </div>
        <CollectionFilterSize v-model:size-filter="sizeFilter" />
        <CollectionFilterAvailability v-model:avail-filter="availFilter" />
        <CollectionFilterCategory v-model:category-filter="categoryFilter" :type="typeFilter" />
        <CollectionFilterColors v-model:color-filter="colorFilter" />
        <CollectionFilterPrice v-model:price-filter="priceFilter" />
        <CollectionFilterRate v-model:rate-filter="rateFilter" />
    </div>
</template>
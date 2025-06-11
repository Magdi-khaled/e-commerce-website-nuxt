<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const show = defineModel<boolean>('show');
const filteredCollection = defineModel<[]>('filtered-collection');
const typeFilter = defineModel<string>('typeFilter', { default: 'all' });

const sizeFilter = ref<string>(route.query.size as string || '');
const availFilter = ref<string>(route.query.availability as string || '');
const categoryFilter = ref<string>(route.query.category as string || '');
const colorFilter = ref<string[]>(route.query.color as string[] || []);
const priceFilter = ref<number>(route.query.price as number);

const clear = () => {
    sizeFilter.value = '';
    availFilter.value = '';
    categoryFilter.value = '';
    colorFilter.value = [];
    priceFilter.value = '';
    typeFilter.value = 'all';
    router.push('collections');
    localStorage.clear();
};

watch(typeFilter, (newtype) => {
    console.log('old :', typeFilter.value);
    console.log('new :', newtype);
    if (newtype !== typeFilter.value) {
        sizeFilter.value = '';
    }
});

watch([sizeFilter, availFilter, categoryFilter, colorFilter, priceFilter, typeFilter],
    async ([size, availability, category, color, price, type], old) => {
        if (type !== old[5]) {
            sizeFilter.value = '';
            availFilter.value = '';
            categoryFilter.value = '';
            colorFilter.value = [];
            priceFilter.value = '';
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
                return matchesSize && matchesAvailability && matchesCategory && matchesType && matchesColor && matchesPrice;
            }) || [];
            filteredCollection.value = filtered as [];
            localStorage.setItem('products', JSON.stringify(filtered));
            show.value = false;
        }, 1000);

        const { buildQuery } = useHelper({
            type,
            size,
            availability,
            category,
            color,
            price,
        });

        await router.push({
            path: route.fullPath.split('?')[0],
            query: buildQuery()
        });
    });
</script>

<template>
    <div class="my-4">
        <div class="w-full text-end">
            <button v-show="route.query" @click="clear" title="Clear All Filters"
                class="w-fit uppercase text-xs underline text-fade hover:text-orange-600 cursor-pointer transition">clear
            </button>
        </div>
        <CollectionFilterSize v-model:size-filter="sizeFilter" />
        <CollectionFilterAvailability v-model:avail-filter="availFilter" />
        <CollectionFilterCategory v-model:category-filter="categoryFilter" :type="typeFilter" />
        <CollectionFilterColors v-model:color-filter="colorFilter" />
        <CollectionFilterPrice v-model:price-filter="priceFilter" />
        <CollectionFilterRate />
    </div>
</template>
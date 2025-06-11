<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const filteredCollection = defineModel<[]>('filtered-collection');

const show = defineModel<boolean>('show');
const selectedSize = ref<string>(route.query.size as string || '');
const availFilter = ref<string>(route.query.availability as string || '');
const category = ref<string>(route.query.category as string || '');

const clear = () => {
    router.push('collections');
    localStorage.clear();
};

watch([selectedSize, availFilter, category], async ([size, availability, category]) => {
    show.value = true;
    setTimeout(async () => {
        const filtered = xivCollection?.filter((item) => {
            const matchesSize = size ? item.sizes.includes(size) : true;
            const matchesAvailability =
                availability === 'available'
                    ? item.available === true
                    : availability === 'out of stock'
                        ? item.available === false
                        : true;
            const matchesCategory = category
                ? item?.category === category
                : true;

            return matchesSize && matchesAvailability && matchesCategory;
        }) || [];
        filteredCollection.value = filtered as [];
        await localStorage.setItem('products', JSON.stringify(filtered));
        show.value = false;
    }, 1000);

    router.push({
        path: route.fullPath.split('?')[0],
        query: Object.fromEntries(
            Object.entries({
                ...route.query,
                size,
                availability,
                category,
            }).filter(([_, value]) => value)
        ),
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
        <CollectionFilterSize v-model:selected-size="selectedSize" />
        <CollectionFilterAvailability v-model:avail-filter="availFilter" />
        <CollectionFilterCategory v-model:category="category" />
        <CollectionFilterColors />
        <CollectionFilterPrice />
        <CollectionFilterRate />
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    totalItems: number
    itemsPerPage: number
}>();

const currentPage = defineModel<number>('currentPage');
const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage));

const getPages = computed(() => {
    const pages = [];
    const total = totalPages.value;

    if (total <= 7) {
        for (let i = 1; i <= total; i++) pages.push(i);
    } else {
        if (currentPage.value <= 4) {
            pages.push(1, 2, 3, 4, '...', total);
        } else if (currentPage.value >= total - 3) {
            pages.push(1, '...', total - 3, total - 2, total - 1, total);
        } else {
            pages.push(1, '...', currentPage.value - 1, currentPage.value, currentPage.value + 1, '...', total);
        }
    }
    return pages;
});

const goToPage = (page: number | string) => {
    if (typeof page === 'number' && page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
};
const goNext = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
};
const goPrev = () => {
    if (currentPage.value > 1) currentPage.value--;
};
</script>

<template>
    <div class="flex items-center gap-2">
        <button @click="goPrev" :disabled="currentPage === 1"
            class="cursor-pointer sm:p-2 p-1 border-[2px] flex items-center justify-center transition border-fade text-fade disabled:opacity-35 disabled:pointer-events-none">
            <Icon name="icon-park-outline:left" class="text-[20px]" />
        </button>

        <div v-for="(page, index) in getPages" :key="index"
            class="cursor-pointer sm:size-10 size-8 flex items-center justify-center transition border-fade" :class="{
                'bg-fade text-white hover:bg-fade': page === currentPage, 'hover:bg-background': page !== currentPage,
                'border-[2px]': page !== '...', 'border-none': page === '...'
            }" @click="goToPage(page)">
            <p>{{ page }}</p>
        </div>

        <button @click="goNext" :disabled="currentPage === totalPages"
            class="cursor-pointer sm:p-2 p-1 border-[2px] flex items-center justify-center transition border-fade text-fade disabled:opacity-35 disabled:pointer-events-none">
            <Icon name="icon-park-outline:right" class="text-[20px]" />
        </button>
    </div>
</template>

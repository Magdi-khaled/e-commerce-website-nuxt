<script setup lang="ts">
const route = useRoute();
const items = [
    { title: 'men', path: { name: 'collections', query: { category: 'men' } } },
    { title: 'women', path: { name: 'collections', query: { category: 'women' } } },
    { title: 'kids', path: { name: 'collections', query: { category: 'kids' } } }
];

const focused = ref(false);
const loading = ref(false);
const searchQuery = ref('');
const debouncedQuery = useDebounce(searchQuery, 1000)

watch(searchQuery, (newQuery) => newQuery ? loading.value = true : loading.value = false);

const searchResult = computed(() => {
    if (!debouncedQuery.value) return []
    loading.value = false;
    return xivCollection.filter(item =>
        item.title.toLowerCase().includes(debouncedQuery.value.toLowerCase())
    );
});
</script>

<template>
    <div>
        <div v-if="route.name === 'index'">
            <nuxt-link :to="item.path" v-for="(item, index) in items" :key="index"
                class="block w-fit uppercase tracking-widest text-fade cursor-pointer hover:underline hover:underline-offset-2 transition duration-300">
                {{ item.title }}
            </nuxt-link>
        </div>
        <div class="relative bg-background px-3 flex items-center gap-2 transition" :class="{
            'bg-neutral-400 shadow-md': focused, 'sm:w-[360px] w-full': route.name === 'index',
            'sm:w-full w-[95%]': route.name === 'collections'
        }">
            <Icon v-show="!loading" name="mynaui:search" class="text-xl" />
            <Icon v-show="loading" name="eos-icons:bubble-loading" class="text-xl" />
            <!-- search input -->
            <input type="text" id="search" name="search" v-model="searchQuery" onchange="searchResult"
                class="flex-1 py-4 sm:text-[14px] text-[13px] placeholder:text-end placeholder:tracking-widest focus:outline-none"
                placeholder="Search" @focus="focused = true" @blur="focused = false">
            <!-- Search result -->
            <ul v-if="searchResult.length" class="absolute left-0 top-[3.25rem] sm:max-h-[20rem] max-h-[16rem] w-full z-50 border border-background shadow-xs 
                bg-neutral-200 overflow-y-auto overflow-x-hidden">
                <p class="text-hover text-xs px-2 py-1 border-b border-b-neutral-300">
                    Search result "{{ searchResult.length }}" </p>
                <!-- search list -->
                <li v-for="item in searchResult" :key="item.id">
                    <nuxt-link :to="{ name: 'collections-id', params: { id: item.id } }" class="block w-full h-full sm:text-sm text-xs p-3 border-b
                        border-b-neutral-300 hover:bg-neutral-400 hover:text-white hover:shadow-md 
                        hover:shadow-orange-100 hover:scale-[102%] transition last:hover:scale-x-[102%]">
                        {{ item?.title }}
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>
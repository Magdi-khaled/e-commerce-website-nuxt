<script setup lang="ts">
const collections = ['all', 'men', 'women', 'kids'];
const currentCollection = ref(0);
// --- Swiper 1 (New Collection) ---
const isCollectionBeginning = ref<boolean>(true);
const isCollectionEnd = ref<boolean>(false);
const collectionSwiper = ref<null | any>(null);
const onCollectionSwiper = (swiper: any) => {
    collectionSwiper.value = swiper;
    updateCollectionButtonVisibility();
};
const onCollectionSlideChange = () => updateCollectionButtonVisibility();
const updateCollectionButtonVisibility = () => {
    if (collectionSwiper.value) {
        isCollectionBeginning.value = collectionSwiper.value.isBeginning;
        isCollectionEnd.value = collectionSwiper.value.isEnd;
    }
};
// --- Swiper 2 (New This Week) ---
const isWeekCollBeginning = ref<boolean>(true);
const isWeekCollEnd = ref<boolean>(false);
const weekSwiper = ref<null | any>(null);

const onWeekSwiper = (swiper: any) => {
    weekSwiper.value = swiper;
    updateThisWeekButtonVisibility();
};
const onThisWeekSlideChange = () => updateThisWeekButtonVisibility();
const updateThisWeekButtonVisibility = () => {
    if (weekSwiper.value) {
        isWeekCollBeginning.value = weekSwiper.value.isBeginning;
        isWeekCollEnd.value = weekSwiper.value.isEnd;
    }
};
// --- Show More or Less --- 
const isShowMore = ref(false);
const displayedCount = ref(3);
const displayedCollection = computed(() => xivCollection.slice(0, displayedCount.value) || []);
const showMore = () => {
    isShowMore.value = true;
    setTimeout(() => {
        isShowMore.value = false;
        displayedCount.value += 3;
    }, 1500);
};
const showLess = () => {
    isShowMore.value = true;
    setTimeout(() => {
        isShowMore.value = false;
        displayedCount.value = 3;
    }, 500);
};
</script>

<template>
    <main>
        <Search class="px-5 md:px-12" />
        <!-- main preview -->
        <div class="mb-10 pl-5 md:pl-12 grid grid-cols-3 gap-6">
            <div class="md:col-span-1 col-span-3 lg:h-[20rem] h-auto flex flex-col justify-between">
                <div>
                    <h1 class="text-fade uppercase font-bold lg:text-5xl text-4xl">
                        new <br> collection
                    </h1>
                    <p class="tracking-widest text-xl text-neutral-700">
                        Summer <br>
                        2025
                    </p>
                </div>
                <div class="mt-12 mb-4 md:hidden block">
                    <HomePreview :is-preview="true" :items="previewItems" :breakpoints="breakPointsPreview"
                        v-model:swiperRef="collectionSwiper" :onSwiper="onCollectionSwiper"
                        :onSlideChange="onCollectionSlideChange"
                        :updateButtonVisibility="updateCollectionButtonVisibility" :next="'collection-next'"
                        :prev="'collection-prev'" />
                </div>
                <div class="flex items-center gap-6">
                    <Button class="md:w-full w-7/12 whitespace-nowrap ">
                        go to shop
                        <Icon name="mynaui:arrow-long-right" size="28" />
                    </Button>
                    <HomePagination :is-beginning="isCollectionBeginning" :is-end="isCollectionEnd"
                        :next="'collection-next'" :prev="'collection-prev'" class="md:flex hidden" />
                </div>
            </div>
            <div class="col-span-2 md:block hidden">
                <HomePreview :is-preview="true" :items="previewItems" :breakpoints="breakPointsPreview"
                    v-model:swiperRef="collectionSwiper" :onSwiper="onCollectionSwiper"
                    :onSlideChange="onCollectionSlideChange" :updateButtonVisibility="updateCollectionButtonVisibility"
                    :next="'collection-next'" :prev="'collection-prev'" />
            </div>
        </div>
        <!-- new this week -->
        <div class="md:my-28 my-20">
            <div class="px-5 md:px-12 flex justify-between items-end">
                <h1 class="relative uppercase font-bold lg:text-5xl text-4xl">
                    new <br>
                    this week
                    <span class="text-fade absolute text-[16px] top-[40%]">(50)</span>
                </h1>
                <nuxt-link to="/"
                    class="sm:text-sm text-xs text-hover cursor-pointer hover:underline hover:underline-offset-2">
                    See All</nuxt-link>
            </div>
            <div class="pl-5 md:pl-12">
                <div class="my-6">
                    <HomePreview :items="newThisWeek" :breakpoints="breakPointsWeek" v-model:swiperRef="weekSwiper"
                        :onSwiper="onWeekSwiper" :onSlideChange="onThisWeekSlideChange"
                        :updateButtonVisibility="updateThisWeekButtonVisibility" :next="'week-next'"
                        :prev="'week-prev'" />
                </div>
                <div class="flex items-center justify-center">
                    <HomePagination :is-beginning="isWeekCollBeginning" :is-end="isWeekCollEnd" :next="'week-next'"
                        :prev="'week-prev'" />
                </div>
            </div>
        </div>
        <!-- xiv collection 24-25 -->
        <div class="mb-28 px-5 md:px-12">
            <div>
                <h1 class=" relative uppercase font-bold lg:text-5xl text-4xl">
                    xiv <br>
                    collections <br>
                    24-25
                </h1>
            </div>
            <HomeCollectionHeader :collections="collections" v-model:current-collection="currentCollection" />
            <div class="my-4 grid sm:grid-cols-3 grid-cols-2 sm:gap-12 gap-6">
                <HomeProduct v-for="(item, index) in displayedCollection" :key="index" :index="index" :item="item" />
            </div>
            <HomeShowButton v-if="xivCollection.length > displayedCount" :show-function="showMore"
                :is-option="isShowMore">
                <p>More</p>
                <Icon name="iconamoon:arrow-down-2-bold" class="text-2xl" />
            </HomeShowButton>
            <HomeShowButton v-else :show-function="showLess" :is-option="isShowMore">
                <Icon name="iconamoon:arrow-up-2-bold" class="text-2xl" />
                <p>Show Less</p>
            </HomeShowButton>
        </div>
    </main>
</template>
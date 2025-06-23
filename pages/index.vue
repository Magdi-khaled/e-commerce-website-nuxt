<script setup lang="ts">
const router = useRouter();
const collections: string[] = ['all', 'men', 'women', 'kids'];
const currentCollection = ref('all');
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
const homeCollection = ref(xivCollection);
const isShowMore = ref(false);
const displayedCount = ref(3);
const displayedCollection = computed(() => homeCollection.value.slice(0, displayedCount.value) || []);
const showMore = () => {
    isShowMore.value = true;
    setTimeout(() => {
        isShowMore.value = false;
        displayedCount.value += 3;
    }, 1000);
};
const showLess = () => {
    isShowMore.value = true;
    setTimeout(() => {
        isShowMore.value = false;
        displayedCount.value = 3;
    }, 600);
};
// --- Filter (XIV Collection) ---
const show = ref(false);
watch(currentCollection, (newCollection) => {
    show.value = true;
    setTimeout(() => {
        show.value = false
        if (newCollection !== 'all') {
            const filtered = xivCollection.filter(
                item => item?.category === newCollection
            );
            homeCollection.value = filtered as [];
        }
        else homeCollection.value = xivCollection;
    }, 1000);
});
</script>

<template>
    <main>
        <!-- collections search -->
        <CollectionSearch class="px-5 md:px-12 grid gap-4 mb-20" />
        <Loading v-if="show" />
        <!-- main preview -->
        <div class="mb-10 pl-5 md:pl-12 grid grid-cols-3 gap-6">
            <div class="md:col-span-1 col-span-3 2xl:h-[23rem] xl:h-[20rem] h-auto flex flex-col justify-between">
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
                    <Button @click="router.push({ name: 'collections' })" class="md:w-full w-7/12 whitespace-nowrap ">
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
                <nuxt-link :to="{ name: 'collections' }"
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
        <div class="px-5 md:px-12">
            <div>
                <h1 class=" relative uppercase font-bold lg:text-5xl text-4xl">
                    xiv <br>
                    collections <br>
                    24-25
                </h1>
            </div>
            <HomeCollectionHeader :collections="collections" v-model:current-collection="currentCollection" />
            <div class="my-4 grid sm:grid-cols-3 grid-cols-2 sm:gap-12 gap-6">
                <CollectionProduct v-for="(item, index) in displayedCollection" :key="index" :index="index"
                    :item="item" />
            </div>
            <HomeShowButton v-if="homeCollection.length > displayedCount" :show-function="showMore as () => {}"
                :is-option="isShowMore">
                <p>More</p>
                <Icon name="iconamoon:arrow-down-2-bold" class="text-2xl" />
            </HomeShowButton>
            <HomeShowButton v-else :show-function="showLess as () => {}" :is-option="isShowMore">
                <Icon name="iconamoon:arrow-up-2-bold" class="text-2xl" />
                <p>Show Less</p>
            </HomeShowButton>
        </div>
        <!-- fashion -->
        <div class="md:my-28 my-20">
            <div class="px-5 md:px-12 flex flex-col items-center">
                <h1 class="md:text-4xl text-2xl uppercase tracking-wider text-center">Our Approach to fashion design
                </h1>
                <p class="my-2 text-center text-neutral-600 md:w-7/12 sm:w-8/12 w-full sm:text-[15px] text-xs">
                    at elegant vogue , we blend creativity with craftsmanship to create fashion that transcends trends
                    and stands the test of time each design is meticulously crafted, ensuring the highest quelity
                    exqulsite finish
                </p>
            </div>
            <div class="pl-5 md:pl-12 grid sm:grid-cols-4 grid-cols-2 lg:gap-x-6 gap-x-2 overflow-hidden">
                <img v-for="(item, index) in fashion" :key="index" :src="item" :alt="`Fashion Style (${index + 1})`"
                    class="m-auto lg:w-[28rem] md:w-[18rem] w-11/12 even:w-full 2xl:h-[32rem] xl:h-[25rem] md:h-[18rem] h-[13rem]  border-[1px]
                    border-background object-cover even:sm:mt-32 even:mt-16 odd:sm:mt-12 odd:mt-6 hover:scale-[100.5%] hover:shadow-2xl transition duration-300">
            </div>
        </div>
    </main>
</template>
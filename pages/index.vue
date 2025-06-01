<script setup lang="ts">
import { ref } from 'vue';

const isBeginning = ref<boolean>(true);
const isEnd = ref<boolean>(false);
const mySwiper = ref<null | any>(null);

const onSwiper = (swiper: any) => { mySwiper.value = swiper; updateButtonVisibility(); };
const onSlideChange = () => updateButtonVisibility();
const updateButtonVisibility = () => {
    if (mySwiper) { isBeginning.value = mySwiper.value.isBeginning; isEnd.value = mySwiper.value.isEnd; }
};
</script>

<template>
    <main>
        <Search class="px-5 md:px-12" />
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
                    <HomePreview :mySwiper="mySwiper" :onSwiper="onSwiper" :onSlideChange="onSlideChange"
                        :updateButtonVisibility="updateButtonVisibility" />
                </div>
                <div class="flex items-center gap-6">
                    <Button class="md:w-full w-7/12 whitespace-nowrap ">
                        go to shop
                        <Icon name="mynaui:arrow-long-right" size="28" />
                    </Button>
                    <HomePagination :is-beginning="isBeginning" :is-end="isEnd" class="md:flex hidden" />
                </div>
            </div>
            <div class="col-span-2 md:block hidden">
                <HomePreview :mySwiper="mySwiper" :onSwiper="onSwiper" :onSlideChange="onSlideChange"
                    :updateButtonVisibility="updateButtonVisibility" />
            </div>
        </div>

    </main>
</template>
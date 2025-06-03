<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Mousewheel, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const modules = [Pagination, Navigation, Mousewheel, A11y];
const swiperRef = defineModel('swiperRef');
const props = defineProps<{
    items: any[],
    isPreview?: boolean,
    onSwiper: () => {},
    onSlideChange: () => {},
    updateButtonVisibility: () => {},
    breakpoints: any,
    prev: string,
    next: string,
}>();
</script>

<template>
    <swiper :slides-per-view="1.5" :space-between="15" :navigation="{
        prevEl: `#${prev}`,
        nextEl: `#${next}`,
    }" :modules="modules" :mousewheel="true" class="h-full w-full" :swiperRef="swiperRef" @swiper="onSwiper"
        @slideChange="onSlideChange" :breakpoints="breakpoints">
        <swiper-slide v-for="(item, index) in items" :key="index" class="cursor-grab active:cursor-grabbing">
            <div class="relative">
                <img :src="item.thumbnail" loading="lazy" :alt="`New Week Product (${index})`" class="m-auto lg:w-[20rem] md:w-[18rem] w-[14rem] 
                lg:h-[20rem] md:h-[17.5rem] sm:h-[13rem] h-[11rem] border-[1px] border-neutral-300 object-cover">
                <button v-if="!isPreview" title="Add to Cart"
                    class="cursor-pointer absolute bottom-0 left-[45%] sm:text-xl text-sm text-fade p-1 rounded-t-md flex bg-background hover:text-neutral-50 hover:bg-fade transition duration-300">
                    <Icon name="line-md:plus" />
                </button>
            </div>
            <div class="sm:text-sm text-xs my-1" :class="{ 'md:hidden block': isPreview }">
                <h1 class="text-neutral-500">{{ item.type }}</h1>
                <div class="mt-1 flex justify-between">
                    <h2>{{ item.title }}</h2>
                    <p>${{ item.price }}</p>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>
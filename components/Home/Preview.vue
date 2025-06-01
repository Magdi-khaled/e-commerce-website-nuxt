<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Mousewheel, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const modules = [Pagination, Navigation, Mousewheel, A11y];
const items = [
    '/collection/product1.webp',
    '/collection/product2.webp',
    '/collection/product3.webp',
    '/collection/product4.webp',
    '/collection/product5.webp',
    '/collection/product6.webp'
];
const props = defineProps<{
    // items: any[],
    onSwiper: () => {},
    onSlideChange: () => {},
    updateButtonVisibility: () => {},
    mySwiper: null | any
}>();
</script>

<template>
    <swiper :slides-per-view="1.5" :space-between="15" :navigation="{
        prevEl: '#prev',
        nextEl: '#next',
    }" :modules="modules" :mousewheel="true" class="mySwiper h-full w-full" @swiper="onSwiper"
        @slideChange="onSlideChange" :breakpoints="{
            1298: {
                slidesPerView: 3.5,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 2.8,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2.3,
                spaceBetween: 15,
            },
            640: {
                slidesPerView: 2.9,
                spaceBetween: 10,
            },
            468: {
                slidesPerView: 2.6,
                spaceBetween: 10,
            },
            360: {
                slidesPerView: 2.2,
                spaceBetween: 8,
            }
        }">
        <swiper-slide v-for="(item, index) in items" :key="index" class="cursor-grab active:cursor-grabbing">
            <img :src="item" loading="lazy" :alt="`Collection New Product (${index})`" class="lg:w-[20rem] md:w-[18rem] w-[14rem] 
                lg:h-[20rem] md:h-[17.5rem] sm:h-[13rem] h-[11rem] border-[2px] border-neutral-300 object-cover">
            <div class="md:hidden block text-xs my-1">
                <h1 class="text-neutral-500">Cotton T Shirt</h1>
                <div class="mt-1 flex justify-between">
                    <h2>Full Sleeve Zipper</h2>
                    <p>$199</p>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>
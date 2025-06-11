<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Grid, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
const modules = [Grid, Navigation];

const openFilter = defineModel<boolean>('openFilter');
const typeFilter = defineModel<string>('typeFilter');

const focused = ref(false);
const collections = ['all', 't-shirt', 'shirt', 'trouser', 'short', 'suit',
    'sweat-shirt', 'hoodie', 'sport', 'jacket', 'dress', 'coat'];
</script>

<template>
    <div class="lg:col-span-2 sm:col-span-3 col-span-5 bg-background sm:w-full w-[95%] px-3 flex items-center gap-2 transition"
        :class="{ 'bg-neutral-400 shadow-md': focused }" @click="">
        <Icon name="mynaui:search" class="text-xl" />
        <input type="text" id="search"
            class="flex-1 py-4 sm:text-[14px] text-[14px] placeholder:text-end placeholder:tracking-widest focus:outline-none"
            placeholder="Search" @focus="focused = true" @blur="focused = false">
    </div>
    <button @click="openFilter = !openFilter" class="cursor-pointer w-fit col-span-5 md:hidden flex items-center gap-2">
        <p class="font-semibold">Filters</p>
        <Icon name="ep:arrow-right" />
    </button>
    <Swiper :modules="modules" :slides-per-view="2.7" :grid="{ rows: 2, fill: 'row' }" :breakpoints="{
        372: {
            slidesPerView: 3.1,
            grid: { rows: 2, fill: 'row' }
        },
        420: {
            slidesPerView: 3.5,
            grid: { rows: 2, fill: 'row' }
        },
        568: {
            slidesPerView: 4.2,
            grid: { rows: 2, fill: 'row' }
        },
        655: {
            slidesPerView: 4.5,
            grid: { rows: 2, fill: 'row' }
        },
        768: {
            slidesPerView: 4.3,
            grid: { rows: 2, fill: 'row' }
        },
        1015: {
            slidesPerView: 3.1,
            grid: { rows: 2, fill: 'row' }
        },
        1115: {
            slidesPerView: 3.5,
            grid: { rows: 2, fill: 'row' }
        },
        1298: {
            slidesPerView: 4.5,
            grid: { rows: 2, fill: 'row' }
        }
    }" class="lg:col-span-3 col-span-5 w-[100%]">
        <SwiperSlide v-for="(item, index) in collections" :key="index">
            <p @click="typeFilter = item" :class="{
                'text-fade border-[2px] border-neutral-500 font-bold': typeFilter === item,
                'text-hover border border-hover': typeFilter !== item
            }"
                class="mb-1 sm:w-[8rem] w-[6.8rem] sm:py-[6px] py-[4px] text-center font-medium whitespace-nowrap uppercase sm:text-xs text-[11px] cursor-pointer hover:text-fade hover:border-fade">
                {{ item }}<span v-if="item !== 'all' && item !== 'dress'">s</span>
                <span v-if="item === 'dress'">es</span>
            </p>
        </SwiperSlide>
    </Swiper>
</template>
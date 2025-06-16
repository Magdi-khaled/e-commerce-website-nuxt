<script setup lang="ts">
const route = useRoute();

const product = computed(() => xivCollection.find(item => item.id === Number(route.params.id)));
const selectedColor = ref(product.value.colors[0].name);
const selectedSize = ref(product.value.sizes[0]);
</script>

<template>
    <main class="xl:px-40 md:px-12 px-5 my-6 grid lg:grid-cols-5 grid-cols-1 items-center gap-4">
        <div
            class="m-auto my-4 lg:col-span-3 col-span-5 flex sm:flex-row flex-col items-center gap-4 lg:h-[35rem] md:h-[32rem] h-full">
            <img :src="product.thumbnail" alt="Main Product Image" class="m-auto lg:w-[32rem] md:w-[28rem] sm:w-[25rem] w-[26rem] 
            sm:h-full h-[25rem] border-[1px] border-neutral-300">
            <div
                class="flex sm:flex-col flex-row justify-between h-full lg:gap-4 sm:gap-2 gap-3 overflow-y-hidden overflow-x-auto">
                <img v-for="(item, index) in 5" :key="index" :src="product.thumbnail" alt="Main Product Image" class="sm:w-[5.625rem] w-[6rem] sm:h-[6rem] h-[6.25rem] cursor-pointer 
                        border-[1px] border-neutral-300 object-cover"
                    :class="{ 'opacity-50': item === product.thumbnail }">
            </div>
        </div>

        <!-- product details -->
        <div class="m-auto lg:col-span-2 col-span-5 sm:border-[2px] border-0 border-background">
            <div class="w-full flex justify-end">
                <button
                    class="cursor-pointer bg-neutral-50 md:flex hidden items-center p-3 hover:bg-neutral-200 transition">
                    <Icon name="mingcute:heart-line" size="20" class="-rotate-45" />
                </button>
            </div>
            <div class="lg:px-12 sm:px-6 px-0 py-4 grid lg:gap-12 gap-8">
                <div>
                    <div class="flex justify-between items-center">
                        <h1 class="uppercase font-semibold tracking-widest lg:my-1 my-4">{{ product.title }}</h1>
                        <button
                            class="cursor-pointer bg-neutral-50 md:hidden flex items-center p-3 hover:bg-neutral-200 transition">
                            <Icon name="mingcute:heart-line" size="20" class="-rotate-45" />
                        </button>
                    </div>
                    <h3 class="mb-4">$ {{ product.price }}</h3>
                    <h2 class="text-hover">MRP incl. of all taxes</h2>
                    <p class="my-6">Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.</p>
                </div>
                <div>
                    <p class="font-light">Color</p>
                    <div class="flex items-center gap-2 my-2">
                        <label v-for="(item, index) in product.colors" :key="index" for="color"
                            class="w-fit relative font-medium cursor-pointer capitalize ">
                            <input type="radio" name="color" id="color" :value="item.name" v-model="selectedColor"
                                class="appearance-none cursor-pointer size-8 border border-neutral-400 checked:border-black"
                                :style="{ backgroundColor: `#${item.color}` }">
                            <Icon v-show="item.name === selectedColor" name="emojione-monotone:heavy-check-mark"
                                class="absolute text-lg text-neutral-50 top-[20%] left-[25%]"
                                :class="{ 'text-neutral-600': ['d9d9d9', 'f1f1f1', 'ffe4b5', 'a5d6ca', 'ffd700'].includes(item.color) }" />
                        </label>
                    </div>
                    <p class="font-light">Size</p>
                    <div class="flex items-center gap-2 my-2">
                        <p v-for="(item, index) in product.sizes" :key="index" @click="selectedSize = item"
                            class="lg:size-9 size-7 text-center lg:p-2 p-1 border border-hover font-medium cursor-pointer transition text-sm"
                            :class="{
                                'bg-fade border-neutral-50 text-neutral-50 hover:bg-fade': selectedSize === item,
                                'hover:bg-neutral-300 ': selectedSize !== item
                            }">
                            {{ item }}
                        </p>
                    </div>
                    <nuxt-link to=""
                        class="my-1 cursor-pointer text-sm text-hover underline font-light decoration-transparent hover:decoration-hover transition">FIND
                        YOUR SIZE | MEASUREMENT GUIDE</nuxt-link>
                    <Button class="uppercase font-medium my-4 w-full py-[1rem] justify-center gap-4">
                        add to cart
                        <Icon name="solar:cart-2-linear" size="20" />
                    </Button>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
const route = useRoute();
const selectedSection = ref(route.hash ? 1 : 0);

const items = xivCollection;
const show = ref(false);

watch(selectedSection, () => {
    show.value = true;
    setTimeout(() => { show.value = false }, 600);
});
watch(() => route.hash, (newVal) => newVal ? selectedSection.value = 1 : selectedSection.value = 0);
</script>

<template>
    <main class="px-5 md:px-12 py-12">
        <Loading v-if="show" />
        <div>
            <!-- shopping cart header -->
            <CartHeader v-model:selected-section="selectedSection" />
            <!-- shopping cart items -->
            <div v-if="selectedSection === 0 && !show" class="sm:flex block justify-between gap-4">
                <div
                    class="2xl:w-8/12 xl:w-7/12 lg:w-8/12 md:w-5/12 sm:w-6/12 w-full grid 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 2xl:gap-x-6 xl:gap-x-28 gap-x-10 gap-y-2 py-6 border-y border-y-background">
                    <CartItem v-for="(item, index) in items" :key="index" :item="item" />
                </div>
                <!-- <div
                    class=" w-full grid lg:grid-cols-3 grid-cols-2 xl:gap-x-28 gap-x-10 gap-y-2 py-6 border-y border-y-background">
                    <CartItem v-for="(item, index) in items" :key="index" :item="item" class="border-b pb-2" />
                </div> -->
                <CartOrderSummary class="2xl:w-3/12 xl:w-4/12 sm:w-6/12 w-full lg:my-0 my-4" />
            </div>

            <!-- favourite Items -->
            <div v-else-if="selectedSection === 1 && !show">
                <div
                    class="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-x-12 gap-x-4 gap-y-2 py-6 border-y border-y-background">
                    <div class="relative" v-for="(item, index) in xivCollection" :key="index">
                        <nuxt-link :to="`/collections/${item.id}`" class="relative">
                            <div class="relative">
                                <img :src="item.thumbnail" loading="lazy" :alt="`New Week Product (${index})`"
                                    class="m-auto lg:w-[28rem] md:w-[18rem] sm:w-[14rem] w-[16rem] 2xl:h-[25rem] xl:h-[20rem] md:h-[14rem] sm:h-[13rem] h-[12rem] border-[1px] border-neutral-300 object-cover">
                            </div>
                            <div class="md:text-[14px] text-xs my-2 tracking-wide font-semibold capitalize">
                                <h1 class="text-neutral-500">{{ item.type }}</h1>
                                <div class="mt-1 flex justify-between h-12">
                                    <h2>{{ item.title }}</h2>
                                    <p>${{ item.price }}</p>
                                </div>
                            </div>
                        </nuxt-link>

                        <!-- add to cart -->
                        <button title="Add to Cart" @click="xivCollection.splice(1, index)"
                            class="cursor-pointer absolute 2xl:bottom-[18%] xl:bottom-[21%] md:bottom-[28%] sm:bottom-[29%] bottom-[30.5%] left-[45%] sm:text-xl  2xl:text-3xl text-xl text-fade p-1 rounded-t-md flex bg-background hover:text-neutral-50 hover:bg-fade transition duration-300">
                            <Icon name="line-md:plus" />
                        </button>

                        <!-- add to wishlist -->
                        <button title="Remove from Wishlist" @click="xivCollection.splice(1, index)"
                            class="absolute right-0 2xl:bottom-[18%] xl:bottom-[21.2%] md:bottom-[28%] sm:bottom-[29%] bottom-[30.5%] p-1 border border-neutral-300 bg-white flex cursor-pointer 2xl:text-3xl text-xl text-hover hover:text-fade transition-all">
                            <Icon name="mingcute:heart-fill" class="-rotate-45" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
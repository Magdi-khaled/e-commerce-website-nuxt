<script setup lang="ts">
definePageMeta({ layout: false });
const route = useRoute();
const router = useRouter();
const show = ref(false);

const formItems = [
    { title: 'information', path: { name: 'checkout' } },
    { title: 'shipping', path: { name: 'checkout', hash: '#shipping' } },
    { title: 'payment', path: { name: 'checkout', hash: '#payment' } }];
const currentProcess = ref<number>(route.hash === '#shipping' ? 1 : route.hash === '#payment' ? 2 : 0);

watch(currentProcess, () => {
    show.value = true;
    setTimeout(() => { show.value = false; }, 600);
});
</script>

<template>
    <main class="px-5 md:px-12 py-12">
        <button @click="router.push({ name: 'cart' })"
            class="mb-14 flex items-center gap-4 uppercase cursor-pointer font-medium hover:gap-8 transition-all duration-300 text-sm hover:opacity-50">
            <Icon name="mynaui:arrow-long-left" class="text-3xl" /> back to cart
        </button>
        <h1 class="md:text-3xl text-2xl uppercase font-extrabold">checkout</h1>

        <div class="flex items-center gap-6 my-8">
            <nuxt-link :to="item.path" v-for="(item, index) in formItems" :key="index" @click="currentProcess = index"
                class="uppercase font-medium" :class="{ 'text-hover': currentProcess !== index }">
                {{ item.title }}</nuxt-link>
        </div>

        <div class="mt-12 flex justify-between">
            <form class="grid gap-4 xl:w-5/12 w-6/12">
                <!-- checkout form step 1 (information) -->
                <CheckoutInformationForm v-if="currentProcess === 0 && !route.hash"
                    v-model:current-process="currentProcess" />

                <!-- checkout form step 2 (shipping) -->
                <CheckoutShippingForm v-if="currentProcess === 1 && route.hash === '#shipping'"
                    v-model:current-process="currentProcess" />

                <!-- checkout form step 3 (payment) -->
                <CheckoutPaymentForm v-if="currentProcess === 2 && route.hash === '#payment'"
                    v-model:current-process="currentProcess" />
            </form>

            <!-- checkout orders -->
            <Checkout />
        </div>
    </main>
</template>
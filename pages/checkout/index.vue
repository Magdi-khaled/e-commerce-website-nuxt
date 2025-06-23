<script setup lang="ts">
definePageMeta({ layout: false });
const route = useRoute();
const router = useRouter();
const show = ref(false);

const formItems = ['information', 'shipping', 'payment'];
const currentProcess = ref<number>(route.hash === '#shipping' ? 1 : route.hash === '#payment' ? 2 : 0);

watch(currentProcess, () => {
    show.value = true;
    setTimeout(() => { show.value = false; }, 600);
})
</script>

<template>
    <main class="px-5 md:px-12 py-12">
        <button @click="router.push({ name: 'cart' })"
            class="mb-14 flex items-center gap-4 uppercase cursor-pointer font-medium hover:gap-8 transition-all duration-300 text-sm hover:opacity-50">
            <Icon name="mynaui:arrow-long-left" class="text-3xl" /> back to cart
        </button>
        <h1 class="md:text-3xl text-2xl uppercase font-extrabold">checkout</h1>

        <div class="flex items-center gap-6 my-8">
            <p v-for="(item, index) in formItems" :key="index" class="uppercase font-medium"
                :class="{ 'text-hover': currentProcess !== index }">{{ item }}</p>
        </div>

        <!-- checkout form step 1 (information) -->
        <CheckoutInformationForm v-model:current-process="currentProcess" />

        <!-- checkout form step 2 (shipping) -->
        <CheckoutShippingForm v-model:current-process="currentProcess" />

        <!-- checkout form step 3 (payment) -->
        <CheckoutPaymentForm v-model:current-process="currentProcess" />

    </main>
</template>
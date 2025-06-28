<script setup lang="ts">
const props = defineProps<{ currentProcess: number; }>();

const subtotal = ref<nubmer>(180)
const shipping = ref<nubmer>(0)
const total = computed(() => subtotal.value + shipping.value);

const orders: Order[] = [
  {
    id: 1,
    title: "Basic Heavy Weight T-shirt",
    type: "cotton t-shirt",
    thumbnail: "/collection/product9.webp",
    price: 199,
    quantity: 2,
    category: "men",
    size: "XL",
    color: { color: "d9d9d9", name: "lightgray" },
  }
];
</script>

<template>
  <div class="relative border border-background h-fit lg:px-10 px-5 md:pt-14 pt-10 lg:pb-10 pb-4">
    <p class="absolute top-0 right-0 px-3 py-2 bg-neutral-50 font-semibold">({{ orders.length }})</p>
    <h1 class="uppercase font-medium mb-6">your order</h1>
    <div class="grid gap-6">
      <CheckoutOrderItem v-for="(item, index) in orders" :key="index" :order="item" />
    </div>
    <div class="border-t border-t-background mt-8 pt-4 font-medium">
      <div class="flex justify-between items-center text-sm">
        <p>Subtotal</p>
        <p>${{ subtotal }}.00</p>
      </div>
      <div class="flex justify-between items-center text-sm pt-2 pb-4 border-b border-background">
        <p>Shippeng</p>
        <p class="text-hover">{{ currentProcess === 0 ? 'Calculated at next step' : `${shipping}.00` }}</p>
      </div>
      <div class="my-4 flex justify-between">
        <h2 class="uppercase text-xl font-medium">total</h2>
        <p class="text-lg">${{ total }}.00</p>
      </div>
    </div>
  </div>
</template>
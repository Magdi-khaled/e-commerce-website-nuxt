<script setup lang="ts">
const open = defineModel<boolean>('open');
const props = defineProps<{ order: Order }>();

const orderQuantity = ref(1);
</script>

<template>
    <div class="flex sm:gap-4 gap-2">
        <nuxt-link :to="`/collections/${order.id}`" @click="open = false">
            <img :src="order.thumbnail" :alt="`Cart order-${order.title}`" class="w-32 h-34 border border-background">
        </nuxt-link>
        <div class="py-px flex-1 flex flex-col justify-between capitalize md:text-sm text-xs">
            <div class="grid gap-2">
                <div class="flex justify-between items-start gap-5">
                    <p>{{ order.title }}</p>
                    <button title="Change Order"
                        class="cursor-pointer capitalize underline underline-offset-1 text-primary hover:text-fade transition-all">
                        change
                    </button>
                </div>
                <p class="text-fade font-medium">{{ order.size }}/{{ order.color.name }}</p>
            </div>
            <div class="w-full flex justify-between items-end">
                <p class="text-fade font-semibold">({{ order.quantity }})</p>
                <p>$ {{ order.price }}</p>
            </div>
        </div>
    </div>
</template>
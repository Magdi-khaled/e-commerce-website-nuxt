<script setup lang="ts">
import type Order from '~/types/useOrder';

const open = defineModel<boolean>('open');
const props = defineProps<{ item: Order }>();
</script>

<template>
    <div class="flex sm:gap-4 gap-2">
        <nuxt-link :to="`/collections/${item.id}`" @click="open = false">
            <img :src="item.thumbnail" :alt="`Cart Item-${item.title}`" class="size-32 border border-background">
        </nuxt-link>
        <div class="py-px flex-1 flex flex-col justify-between capitalize text-sm">
            <div>
                <div class="flex justify-between">
                    <p>{{ item.title }}</p>
                    <button @click="useCartStore().removeItemFromCart(item)" title="Remove Product"
                        class="cursor-pointer sm:text-lg text-sm text-red-700 hover:text-red-500 transition-all">
                        <Icon name="pajamas:remove" />
                    </button>
                </div>
                <p class="text-hover">Color: {{ item.color.name }}</p>
                <p class="text-hover">Size: {{ item.size }}</p>
            </div>
            <div class="w-full flex items-end justify-between">
                <p>$ {{ item.price }}</p>
                <CollectionProductQuantity :selected-quantity="item.orderQuantity" :item="item" :is-cart="true" />
            </div>
        </div>
    </div>
</template>
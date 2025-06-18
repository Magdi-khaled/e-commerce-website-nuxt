<script setup lang="ts">
import type Product from '~/types/useProduct';

const route = useRoute();

const product = computed(() => xivCollection.find(item => item.id === Number(route.params.id)) as Product);
</script>

<template>
    <main class="xl:px-40 md:px-12 px-5 my-6 grid lg:grid-cols-5 grid-cols-1 items-center gap-4">
        <!-- product preview -->
        <CollectionProductPreview class="m-auto my-4 lg:col-span-3 col-span-5" :product="product" />

        <!-- product details -->
        <div class="m-auto lg:col-span-2 col-span-5 sm:border-[2px] border-0 border-background">
            <div class="w-full flex justify-end">
                <button
                    class="cursor-pointer bg-neutral-50 md:flex hidden items-center p-3 hover:bg-neutral-200 transition">
                    <Icon name="mingcute:heart-line" size="20" class="-rotate-45" />
                </button>
            </div>
            <CollectionProductDescription :product="product" />
        </div>
    </main>
</template>
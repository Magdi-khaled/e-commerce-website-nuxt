<script setup lang="ts">
const selectedSection = ref(0);

const items = xivCollection;
</script>

<template>
    <div class="px-5 md:px-12 py-12">
        <div>
            <!-- shopping cart header -->
            <CartHeader v-model:selected-section="selectedSection" class="pb-6" />
            <!-- shopping cart items -->
            <div class="sm:flex block justify-between gap-4">
                <div
                    class="xl:w-7/12 lg:w-8/12 md:w-5/12 sm:w-6/12 w-full grid lg:grid-cols-2 grid-cols-1 xl:gap-x-28 gap-x-10 gap-y-2 py-6 border-y border-y-background">
                    <CartProduct v-for="(item, index) in items" :key="index" :item="item" />
                </div>
                <CartOrderSummary class="lg:w-4/12 sm:w-6/12 w-full lg:my-0 my-4" />
            </div>
        </div>
    </div>
</template>
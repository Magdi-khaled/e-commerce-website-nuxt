<script setup lang="ts">
const open = defineModel<boolean>('open');
const router = useRouter();
const cartStore = useCartStore();

const items = computed(() => cartStore.cartItems);
onMounted(() => cartStore.fetchCart());
</script>

<template>
    <transition name="fade">
        <div v-if="open" class="fixed top-0 right-0 z-90 h-full w-11/12 sm:w-5/12 lg:w-[30%] bg-neutral-100 shadow-lg md:text-[16px] 
            text-sm flex flex-col">
            <!-- cart header -->
            <div class="md:pt-10 pt-6 pb-4 px-4 md:px-8 flex justify-between border-b border-b-background">
                <nuxt-link to="/cart" @click="open = false" class="font-medium hover:text-fade transition-all">Shopping
                    Cart</nuxt-link>
                <button @click="open = false" class="cursor-pointer hover:text-hover transition-all">
                    <Icon name="line-md:remove" />
                </button>
            </div>
            <!-- cart items -->
            <div v-if="items.length" class="flex-1 overflow-y-auto px-4 md:px-8 py-4 space-y-4">
                <NavigatedCartItem :item="item" v-for="(item, index) in items" :key="index" v-model:open="open"
                    class="border-b border-b-background pb-4 last:border-b-0" />
            </div>
            <div v-else class="w-full h-[90dvh] flex flex-col items-center justify-center gap-4">
                <img src="../../assets/media/no-products.svg" alt="Empty Cart" class="grayscale w-60">
                <p class="text-sm text-center text-fade font-light px-6">There are no items in your shopping cart.</p>
            </div>
            <!-- checkout button -->
            <div>
                <Button @click="router.push({ name: 'checkout' }), open = false"
                    class="py-4 w-full flex justify-between items-center">
                    checkout
                    <Icon name="mynaui:arrow-long-right" size="28" />
                </Button>
            </div>
        </div>
    </transition>
</template>

<style scoped lang="scss">
.fade {

    &-enter-from,
    &-leave-to {
        transform: translateX(0px);
    }

    &-enter-from,
    &-leave-to {
        transform: translateX(100%)
    }

    &-enter-active,
    &-leave-active {
        transition: transform 0.3s;
    }
}
</style>
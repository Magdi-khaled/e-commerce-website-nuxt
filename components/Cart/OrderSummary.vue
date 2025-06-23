<script setup lang="ts">
const router = useRouter();

const agree = ref();
</script>

<template>
    <div class="border border-background h-fit sm:px-10 px-5 sm:pt-14 pt-10 sm:pb-10 pb-8">
        <h1 class="uppercase font-medium tracking-wider">order summary</h1>
        <div class="flex justify-between items-center text-sm pt-2 mt-4">
            <p>Subtotal</p>
            <p>$180</p>
        </div>
        <div class="flex justify-between items-center text-sm pt-2 pb-4 border-b border-background">
            <p>Shippeng</p>
            <p>$10</p>
        </div>
        <div class="my-4 flex justify-between">
            <h2 class="uppercase text-xl font-medium">total <span class="text-hover text-sm">(tax incl.)</span></h2>
            <p>$190</p>
        </div>
        <div class="mt-10 mb-4">
            <label for="terms"
                class="relative cursor-pointer flex gap-[6px] items-center font-extralight text-neutral-500">
                <input type="checkbox" name="terms" id="terms" v-model="agree"
                    class="appearance-none cursor-pointer sm:size-[1.5rem] size-[1.2rem] border border-neutral-500"
                    :class="{ 'bg-fade': agree }">
                <p class="text-xs">I agree to the Terms and Conditions</p>
                <Icon v-if="agree" name="emojione-monotone:heavy-check-mark"
                    class="absolute sm:text-sm text-xs text-white md:left-[1.5%] sm:left-[1.6%] left-[1.25%] sm:top-[20%] top-[15%]" />
            </label>
        </div>
        <Button @click="router.push({ name: 'checkout' })" class="uppercase w-full justify-center py-4">
            Checkout
        </Button>
    </div>
</template>
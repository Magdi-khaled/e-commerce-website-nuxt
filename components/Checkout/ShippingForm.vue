<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const currentProcess = defineModel<number>('currentProcess');

// --- step-2 (shipping) form ---
const country = ref<string>('');
const state = ref<string>('');
const address = ref<string>('');
const city = ref<string>('');
const postalCode = ref<string>('');
</script>

<template>
    <form v-if="currentProcess === 1 && route.hash === '#shipping'" class="mt-15 grid gap-4 xl:w-5/12 w-6/12">
        <div>
            <p class="uppercase font-medium">shipping address</p>
            <div class="my-4 grid gap-4">
                <Input id="state" name="state" placeholder="State / Region" v-model:model-value="state" />
                <Input id="address" name="address" placeholder="Address" v-model:model-value="address" />
                <div class=" grid grid-cols-2 gap-4">
                    <Input id="city" name="city" placeholder="City" v-model:model-value="city" />
                    <Input id="postalcode" name="postalcode" placeholder="Postal Code"
                        v-model:model-value="postalCode" />
                </div>
            </div>
            <div class="flex justify-between gap-5">
                <Button @click="currentProcess = 0, router.push({ name: 'checkout' })" class="w-6/12">
                    <Icon name="mynaui:arrow-long-left" size="28" />
                    back
                </Button>
                <Button @click="currentProcess = 2, router.push({ name: 'checkout', hash: '#payment' })" class="w-6/12">
                    payment
                    <Icon name="mynaui:arrow-long-right" size="28" />
                </Button>
            </div>
        </div>
    </form>
</template>
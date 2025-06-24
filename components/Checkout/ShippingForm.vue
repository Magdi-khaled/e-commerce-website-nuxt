<script setup lang="ts">
const router = useRouter();
const currentProcess = defineModel<number>('currentProcess');

// --- step-2 (shipping) form ---
const shippingOptions = ['standard', 'express', 'overnight'];
const shippingMethod = ref<string>('standard');
const instructions = ref<string>('');
const address = ref<string>('');
</script>

<template>
    <div>
        <p class="uppercase font-medium">shipping info</p>
        <div class="my-4 grid gap-4">
            <Select id="state" name="state" placeholder="Shipping Option" :options="shippingOptions"
                v-model:model-value="shippingMethod" />
            <Input id="address" name="address" placeholder="Address 2 (Optional)" v-model:model-value="address" />
            <Input id="instructions" name="instructions" type="textarea"
                placeholder="Shipping Instructions... (Optional notes)" v-model:model-value="instructions" />
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
</template>
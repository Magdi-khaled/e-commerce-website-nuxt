<script setup lang="ts">
const router = useRouter();
const currentProcess = defineModel<number>('currentProcess');

// --- step-3 (payment) form ---
const cardHolderName = ref<string>('');
const cardNumber = ref<string>('');
const cardExpiry = ref<string>('');
const cardCVC = ref<string>('');
const billingAddress = ref<string>('');
const billingZipCode = ref<string>('');
const saveCard = ref<boolean>(false);

</script>
<template>
    <div>
        <p class="uppercase font-medium">payment info</p>
        <div class="my-4 grid gap-4">
            <Input id="cardNumber" name="cardNumber" placeholder="Card Number" v-model:model-value="cardNumber" />
            <Input id="cardHolderName" name="cardHolderName" placeholder="Card Holder Name"
                v-model:model-value="cardHolderName" />
            <div class=" grid grid-cols-2 gap-4">
                <Input id="cardExpiry" name="cardExpiry" placeholder="MM/YY" v-model:model-value="cardExpiry" />
                <Input id="cardCVC" name="cardCVC" placeholder="CVV" v-model:model-value="cardCVC" />
            </div>
            <Input id="billingAddress" name="billingAddress" placeholder="Billing Address"
                v-model:model-value="billingAddress" />
            <Input id="billingZipCode" name="billingZipCode" placeholder="Billing Zip Code"
                v-model:model-value="billingZipCode" />
            <label for="saveCard"
                class="cursor-pointer 2xl:text-[16px] text-sm text-fade capitalize flex items-center gap-2">
                <input type="checkbox" name="saveCard" id="saveCard" v-model="saveCard"
                    class="appearance-none size-5 border" :class="{ 'bg-fade': saveCard }">
                save payment card
                <Icon v-show="saveCard" name="emojione-monotone:heavy-check-mark"
                    class="absolute text-[11px] text-white 2xl:left-[2.8%] left-[3.5%]" />
            </label>
        </div>
        <div class="flex justify-between gap-5">
            <Button @click="currentProcess = 1, router.push({ name: 'checkout', hash: '#shipping' })" class="w-6/12">
                <Icon name="mynaui:arrow-long-left" size="28" />
                back
            </Button>
            <Button @click="router.push({ name: 'cart' })" class="w-[48.5%]">
                checkout
                <Icon name="mynaui:arrow-long-right" size="28" />
            </Button>
        </div>
    </div>
</template>
<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const currentProcess = defineModel<number>('currentProcess');

// --- step-2 (shipping) form ---
const fname = ref<string>('');
const lname = ref<string>('');
const country = ref<string>('');
const state = ref<string>('');
const address = ref<string>('');
const city = ref<string>('');
const postalCode = ref<string>('');
</script>
<template>
    <form v-if="currentProcess === 2 && route.hash === '#payment'" class="mt-15 grid gap-4 xl:w-5/12 w-6/12">
        <div>
            <p class="uppercase font-medium">payment info</p>
            <div class="my-4 grid gap-4">
                <div class=" grid grid-cols-2 gap-4">
                    <Input id="fname" name="fname" placeholder="First Name" v-model:model-value="fname" />
                    <Input id="lname" name="lname" placeholder="Last Name" v-model:model-value="lname" />
                </div>
                <!--  -->
                <Input id="state" name="state" placeholder="State / Region" v-model:model-value="state" />
                <Input id="address" name="address" placeholder="Address" v-model:model-value="address" />
                <div class=" grid grid-cols-2 gap-4">
                    <Input id="city" name="city" placeholder="City" v-model:model-value="city" />
                    <Input id="postalcode" name="postalcode" placeholder="Postal Code"
                        v-model:model-value="postalCode" />
                </div>
            </div>
            <div class="flex justify-between gap-5">
                <Button @click="currentProcess = 0, router.push({ name: 'checkout', hash: '#shipping' })"
                    class="w-6/12">
                    <Icon name="mynaui:arrow-long-left" size="28" />
                    back
                </Button>
                <Button @click="currentProcess = 1, router.push({ name: 'cart' })" class="w-[48.5%]">
                    checkout
                    <Icon name="mynaui:arrow-long-right" size="28" />
                </Button>
            </div>
        </div>
    </form>
</template>
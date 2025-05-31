<script setup lang="ts">
const router = useRouter();
const error = useError();
</script>

<template>
    <div class="flex flex-wrap justify-center items-center h-[90dvh] w-full">
        <div>
            <div class="flex items-center sm:gap-4 gap-2 text-neutral-700">
                <Icon name="tabler:error-404" class="sm:text-[11rem] text-[8rem]" />
                <h2 class="uppercase sm:text-[1.5rem] text-[1rem] font-[cursive] font-bold">page not found</h2>
                <Icon name="tdesign:error" class="sm:text-[3rem] text-[2rem]" />
            </div>
            <p class="w-full text-center text-lg mt-[-1.5rem] mb-[1rem] font-semibold font-[cursive] text-neutral-700">
                Wrong Path: {{ error?.message.split(':')[1] }}</p>
            <div>
                <Button @click="router.push({ name: 'index' })" class="w-10/12 m-auto">
                    <p> back to home </p>
                    <Icon name="mynaui:arrow-long-right" size="28" />
                </Button>
            </div>
        </div>
    </div>
</template>
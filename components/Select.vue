<script setup lang="ts">
const selectValue = defineModel<string | number>('selectValue');

const props = defineProps<{
    options: Partial<string | number>[],
    placeholder: string
}>();
const open = defineModel<boolean>('open');
</script>

<template>
    <div @click="open = !open"
        class="relative flex justify-between cursor-pointer items-center sm:text-[14px] text-sm border-[2px] border-background px-6 py-3 focus:outline-none bg-transparent hover:bg-[#0000000c] transition-all">
        <h1 vif="selectValue" class="text-neutral-500">{{ props.placeholder }}</h1>
        <h1 class="text-neutral-500">{{ selectValue }}</h1>
        <Icon name="icon-park-outline:down" size="20" />

        <!-- options -->
        <div v-show="open"
            class="absolute top-[100%] left-0 w-full max-h-[12rem] border border-background bg-neutral-200 overflow-y-auto overflow-x-hidden">
            <p v-for="(item, index) in props.options" :key="index" class="w-full sm:text-sm text-xs px-6 py-3 border-b
                        border-b-neutral-200 hover:bg-neutral-400 hover:text-white hover:shadow-md 
                        hover:shadow-orange-100 hover:scale-[100.5%] transition-all">{{ item }}</p>
        </div>
    </div>
</template>
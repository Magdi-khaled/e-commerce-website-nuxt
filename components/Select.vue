<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const selectValue = defineModel<string | number>('selectValue');
const open = defineModel<boolean>('open');

const props = defineProps<{
    options: Partial<string | number>[];
    placeholder: string;
}>();

const selectRef = ref<HTMLElement | null>(null);

function handleClickOutside(event: MouseEvent) {
    if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
        open.value = false;
    }
}
onMounted(() => document.addEventListener('click', handleClickOutside));
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside));
</script>

<template>
    <div ref="selectRef" @click="open = !open"
        class="relative flex justify-between cursor-pointer items-center sm:text-[14px] text-sm border-[2px] border-background px-6 py-3 focus:outline-none bg-transparent hover:bg-[#0000000c] transition-all">
        <h1 v-if="!selectValue" class="text-neutral-500">{{ props.placeholder }}</h1>
        <h1 class="text-neutral-500">{{ selectValue }}</h1>
        <Icon name="icon-park-outline:down" size="20" class="text-fade ml-4" />

        <!-- options -->
        <div v-show="open"
            class="absolute top-[100%] left-0 w-full max-h-[12rem] border border-background bg-neutral-200 overflow-y-auto overflow-x-hidden">
            <p v-for="(item, index) in props.options" :key="index" @click.stop="selectValue = item; open = false" class="w-full sm:text-sm text-xs capitalize
                px-6 py-3 border-b border-b-neutral-200 hover:bg-neutral-400 hover:text-white hover:shadow-md hover:shadow-orange-100
                hover:scale-[100.5%] transition-all">
                {{ item }}
            </p>
        </div>
    </div>
</template>

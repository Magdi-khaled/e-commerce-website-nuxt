<script setup lang="ts">
const inputValue = defineModel<string | number>();
const props = defineProps({
    type: {
        type: String as PropType<'text' | 'number' | 'password' | 'email' | 'textarea'>,
        default: 'text',
        required: false
    }
});

</script>

<template>
    <input v-if="type !== 'textarea'" v-model="inputValue" :type="props.type"
        class="2xl:text-[18px] xl:text-[14px] text-sm border-[2px] border-background px-6 py-3 focus:outline-none">
    <textarea v-else v-model="inputValue" :type="props.type"
        class="2xl:text-[18px] xl:text-[14px] text-sm border-[2px] border-background px-6 py-3 focus:outline-none" />
</template>
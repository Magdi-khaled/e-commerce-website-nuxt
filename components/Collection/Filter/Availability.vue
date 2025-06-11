<script setup lang="ts">
const availFilter = defineModel<string>('availFilter');

const isOpen = ref(true);
const availability = [
  { type: 'available', quantity: 450 },
  { type: 'out of stock', quantity: 18 }];
</script>

<template>
  <CollectionFilterBase category="availability" v-model:is-open="isOpen">
    <label v-for="(item, index) in availability" :key="index" :for="`availability-${index}`"
      @click="index === 0 ? availFilter = 'available' : availFilter = 'out of stock'"
      class="w-fit relative font-medium cursor-pointer capitalize flex items-center gap-2 whitespace-nowrap lg:text-[15px] text-sm">
      <input type="radio" name="availability" :id="`availability-${index}`" :value="item.type" v-model="availFilter"
        class="appearance-none cursor-pointer size-5 border border-neutral-500"
        :class="{ 'bg-fade': availFilter === item.type }">
      {{ item.type }}<span class="text-hover text-sm">({{ item.quantity }})</span>
      <Icon v-show="availFilter === item.type" name="emojione-monotone:heavy-check-mark"
        class="absolute text-xs text-white left-[2%]" />
    </label>
  </CollectionFilterBase>
</template>
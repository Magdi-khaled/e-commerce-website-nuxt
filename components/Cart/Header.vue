<script setup lang="ts">
const router = useRouter();
const route = useRoute();
const selectedSection = defineModel<number>('selectedSection');
</script>

<template>
    <div class="flex items-center gap-6">
        <button @click="selectedSection = 0, router.push({ name: 'cart' })"
            class="cursor-pointer font-medium uppercase flex gap-2 items-center hover:text-fade pb-4"
            :class="{ 'text-hover': selectedSection !== 0, 'text-primary transition-colors': selectedSection === 0 }">
            <Icon name="gravity-ui:shopping-bag" size="20" /> shopping bag
        </button>
        <button @click="selectedSection = 1, router.push({ path: route.path, hash: '#favourites' })"
            class="cursor-pointer font-medium uppercase flex gap-2 items-center hover:text-fade pb-4"
            :class="{ 'text-hover': selectedSection !== 1, 'text-primary transition-colors': selectedSection === 1 }">
            <Icon name="mingcute:heart-line" size="20" class="-rotate-45" />
            favourites
        </button>
    </div>
</template>
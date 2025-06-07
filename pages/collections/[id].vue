<script setup>
const route = useRoute();
</script>

<template>
    <div>
        hello from product {{ route.params.id }} page
    </div>
</template>
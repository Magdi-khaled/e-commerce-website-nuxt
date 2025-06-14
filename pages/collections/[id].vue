<script setup>
const route = useRoute();
</script>

<template>
    <div class="">
        hello from product {{ route.params.id }} page
    </div>
</template>
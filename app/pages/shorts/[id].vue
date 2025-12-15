<script setup lang="ts">
const { id } = useRoute().params;
</script>

<template>
    <div class="short-detail">
        <h1>Short Detail</h1>
        <p>Short ID: {{ id }}</p>
    </div>
</template>

<style scoped>
.short-detail {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin-top: 20px;
}
</style>
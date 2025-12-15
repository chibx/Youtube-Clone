<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        /** (px) */
        height?: number;
        /** (px) */
        width?: number;
        color?: string;
    }>(),
    {
        color: "blue",
        width: 10,
        height: 10,
    },
);
</script>

<template>
    <div class="dot" :style="{ backgroundColor: color, width: width, height: height }"></div>
</template>

<style scoped>
.dot {
    border-radius: 50%;
}
</style>

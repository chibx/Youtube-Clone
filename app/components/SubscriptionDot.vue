<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        /** (px) */
        // height?: number;
        // /** (px) */
        // width?: number;
    }>(),
    {
        // width: 5,
        // height: 5,
    },
);
</script>

<template>
    <!-- <div :style="{ borderRadius: '100%', width: width + 'px', height: height + 'px' }"></div> -->
    <div :style="{ borderRadius: '100%', padding: '2.5px' }"></div>
</template>

<style scoped></style>

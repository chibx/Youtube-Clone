<script setup lang="ts">
import { MenuIcon } from "lucide-vue-next";
import YTLogo from "~/components/svg/YTLogo.vue";
</script>

<template>
    <header class="fixed top-0 w-full h-[55px] flex gap-10 items-center">
        <MenuIcon />
        <YTLogo class="h-10 w-20" />
    </header>
</template>

<style scoped>
.dark svg {
    fill: white;
}
</style>

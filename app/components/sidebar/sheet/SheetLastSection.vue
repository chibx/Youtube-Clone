<script setup lang="ts">
import { lastSectionLinks } from "~/utils/sidebar";
</script>

<template>
    <section class="my-2.5">
        <div class="flex flex-wrap gap-1.5 text-xs text-black/70 dark:text-white/70">
            <NuxtLink v-for="link in lastSectionLinks[0]" class="hover:text-black dark:hover:text-white" :to="link.url">
                {{ link.text }}</NuxtLink>
        </div>

        <div class="mt-6 mb-15 flex flex-wrap gap-1.5 text-xs text-black/70 dark:text-white/70">
            <NuxtLink v-for="link in lastSectionLinks[1]" class="hover:text-black dark:hover:text-white" :to="link.url">
                {{ link.text }}</NuxtLink>
        </div>
    </section>
</template>

<style scoped></style>

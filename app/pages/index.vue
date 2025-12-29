<script setup lang="ts">
import { } from "@/components/ui/card"
import CategorySwitcher from "~/components/homepage/CategorySwitcher.vue";
import VideoCard from "~/components/homepage/VideoCard.vue";


</script>

<template>
    <div>
        <CategorySwitcher class="mb-5" />
        <!-- <h1 class="text-2xl">Hello</h1> -->
        <div class="top-videos">
            <VideoCard />
            <VideoCard />
        </div>
    </div>
</template>

<style scoped>
.top-videos {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1rem;
    margin: 0 auto;
    width: 100%;
}
</style>

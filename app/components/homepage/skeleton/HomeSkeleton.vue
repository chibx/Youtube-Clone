<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";
import VideoCardSkeleton from "~/components/homepage/skeleton/VideoCardSkeleton.vue";
import YTShortIcon from "~/components/svg/YTShortIcon.vue";
</script>

<template>
    <div>
        <Skeleton class="mb-5" />
        <!-- <h1 class="text-2xl">Hello</h1> -->
        <div class="top-videos">
            <VideoCardSkeleton />
            <VideoCardSkeleton />
        </div>

        <section class="mt-6">
            <div class="flex items-center gap-2 ml-10">
                <!-- <YTShortIcon /> -->
                <Skeleton class="w-5 h-5" />
                <!-- <h2 class="text-2xl font-semibold">Shorts</h2> -->
                <Skeleton class="w-20 h-5" />
            </div>

            <!-- Add shorts grid here later -->

            <div class="shorts-container"></div>
        </section>
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

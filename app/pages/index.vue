<script setup lang="ts">
import CategorySwitcher from "~/components/homepage/CategorySwitcher.vue";
import VideoCard from "~/components/homepage/VideoCard.vue";
import YTShortIcon from "~/components/svg/YTShortIcon.vue";
import { randomColor } from "~/utils/colors";

</script>

<template>
    <div>
        <CategorySwitcher class="mb-5" />
        <!-- <h1 class="text-2xl">Hello</h1> -->
        <div class="top-videos">
            <VideoCard :video-id="'default'" :color="randomColor()" />
            <VideoCard :video-id="'default'" :color="randomColor()" />
        </div>

        <section class="mt-6">
            <div class="flex items-center gap-2 ml-10">
                <YTShortIcon />
                <h2 class="text-2xl font-semibold">Shorts</h2>
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

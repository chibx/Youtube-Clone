<script setup lang="ts">
import CategorySwitcher from "~/components/homepage/CategorySwitcher.vue";
import VideoCard from "~/components/homepage/VideoCard.vue";
import YTShortIcon from "~/components/svg/YTShortIcon.vue";
import { randomColor } from "~/utils/colors";
import HomeSkeleton from "~/components/homepage/skeleton/HomeSkeleton.vue";
import ShortsCard from "~/components/homepage/ShortsCard.vue";

const initialDataLoaded = ref(false)
const [parent] = useAutoAnimate()

onMounted(() => {
    setTimeout(() => {
        initialDataLoaded.value = true
    }, 2000)
})
</script>

<template>
    <div class="mb-10" ref="parent">
        <CategorySwitcher class="mb-5" />
        <!-- <h1 class="text-2xl">Hello</h1> -->
        <HomeSkeleton v-if="!initialDataLoaded" />
        <ClientOnly v-else>
            <!-- <template> -->
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

                    <div class="shorts-container mt-10">
                        <div class="flex gap-2.5">
                            <ShortsCard class="max-w-80" />
                            <ShortsCard class="max-w-80" />
                            <ShortsCard class="max-w-80" />
                            <ShortsCard class="max-w-80" />
                            <ShortsCard class="max-w-80" />
                        </div>
                    </div>
                </section>
            <!-- </template> -->
        </ClientOnly>
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

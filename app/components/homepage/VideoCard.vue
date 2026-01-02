<script setup lang="ts">
import VideoPlayer from "./VideoPlayer.vue";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import VideoDropdown from "@/components/homepage/VideoDropdown.vue";
import { EllipsisVerticalIcon } from "lucide-vue-next";

const router = useRouter()
const props = defineProps<{
    color?: string
    videoId: string
}>()

function clickVid(e: PointerEvent) {
    const el = e.target as HTMLElement;
    const videoLink = el?.closest('.video-link');
    const channelLink = el?.closest('.channel-link');
    const menuBtn = el?.closest('.menu-btn');

    if (channelLink || videoLink || menuBtn) {
        return;
    }

    // Navigate to video page
    router.push(`/watch/${props.videoId}`);
}
</script>

<template>
    <div class="video-wrapper cursor-pointer w-full p-3.5 rounded-2xl"
        :style="{ '--video-bg-color': props.color ?? '#31666f80' }" @click="clickVid">
        <div class="mt-2.5">
            <NuxtLink class="video-link" :to="`/watch/${props.videoId}`">
                <VideoPlayer />
            </NuxtLink>

            <div class="flex gap-3 mt-2.5 mb-2">
                <div>
                    <Avatar class="w-9 h-9">
                        <AvatarImage src="https://github.com/chibx.png" alt="Channel avatar" />
                    </Avatar>
                </div>

                <div class="flex flex-col gap-1">
                    <h3 class="font-bold" :title="'Why gaming laptops are expensive...'">
                        Why gaming laptops are expensive...</h3>
                    <NuxtLink to="/channel/@geeky-coder"
                        class="channel-link w-fit text-sm text-primary hover:underline underline-offset-2">Geeky Coder</NuxtLink>
                    <span class="text-sm text-muted-foreground">100K views • 2 days ago</span>
                </div>

                <div class="ml-auto mr-2.5">
                    <VideoDropdown :video-id="props.videoId">
                            <span class="menu-btn inline-flex items-center justify-center cursor-pointer p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10">
                                <EllipsisVerticalIcon class="w-5 h-5" />
                            </span>
                    </VideoDropdown>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.video-wrapper {
    /* overflow: hidden; */
    /* box-shadow: 0 4px 12px rgba(181, 181, 181, 0.15); */
    transition: background-color 0.2s ease;
}

.video-wrapper:hover {
    background-color: var(--video-bg-color);
}
</style>
<script setup lang="ts">
import { Card, CardContent } from "@/components/ui/card"
import VideoPlayer from "./VideoPlayer.vue";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { EllipsisVerticalIcon } from "lucide-vue-next";

function clickVid(e: PointerEvent){
console.log(e)
}
</script>

<template>
    <div class="video-wrapper w-full p-2.5 rounded-2xl" :style="{ '--video-bg-color': '#31666f80' }" @click="clickVid">
        <div>
            <VideoPlayer />
            <div class="flex gap-3 my-2.5">
                <Avatar>
                    <AvatarImage src="https://github.com/chibx.png" alt="Channel avatar" />
                </Avatar>
                <div class="flex flex-col gap-1">
                    <h3 class="font-bold" :title="'Why gaming laptops are expensive...'">
                        Why gaming laptops are expensive...</h3>
                    <NuxtLink href="/channel/@geeky-coder" class="w-fit text-sm text-primary hover:underline">Geeky Coder</NuxtLink>
                    <span class="text-sm text-muted-foreground">100K views • 2 days ago</span>
                </div>

                <div>
                    <span class="inline-flex items-center justify-center cursor-pointer p-2 rounded-full hover:bg-muted">
                        <EllipsisVerticalIcon class="w-5 h-5" />
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.video-wrapper {
    /* overflow: hidden; */
    box-shadow: 0 4px 12px rgba(181, 181, 181, 0.15);
    transition: background-color 0.2s ease;
}

.video-wrapper:hover {
    background-color: var(--video-bg-color);
}
</style>
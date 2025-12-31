<script setup lang="ts">
import VideoPlayer from "@/components/homepage/VideoPlayer.vue";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import VideoDropdown from "@/components/homepage/VideoDropdown.vue";
import { EllipsisVerticalIcon } from "lucide-vue-next";
import { Skeleton } from "@/components/ui/skeleton";


</script>

<template>
    <div class="w-full p-2.5 rounded-2xl">
        <div>
            <span>
                <!-- <VideoPlayer /> -->
                <Skeleton class="w-full aspect-video rounded-xl" />
            </span>
            <div class="flex gap-3 my-2.5">
                <div>
                    <!-- <Avatar>
                        <AvatarImage src="https://github.com/chibx.png" alt="Channel avatar" />
                    </Avatar> -->
                    <Skeleton class="w-9 h-9 rounded-full" />
                </div>

                <div class="w-full flex flex-col gap-1">
                    <Skeleton class="w-2/3 h-4 rounded-2xl" />
                    <Skeleton class="w-1/2 h-4 rounded-2xl" />
                    <Skeleton class="w-1/3 h-4 rounded-2xl" />
                </div>

                <div class="ml-auto mr-2.5"></div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
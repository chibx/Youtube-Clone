<script setup lang="ts">
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import AddToQueue from "@/components/svg/AddToQueue.vue";
import { BookmarkIcon, Clock, FlagIcon } from "lucide-vue-next";
import YTShareIcon from "@/components/svg/YTShareIcon.vue";
import NotInterestedIcon from "@/components/svg/NotInterestedIcon.vue";
import NoRecommendIcon from "@/components/svg/NoRecommendIcon.vue";

const props = defineProps<{
    videoId: string
}>()

function addToQueue() {
    console.log("Adding to queue...")
}

function saveToWatchLater(){

}

function saveToPlayList(){
    
}

function share(){
    
}

function setNotInterested(){

}

function unsetNotInterested(){
    
}

function removeRecommend(){

}

function report(){
    
}

/* 
Add to queue
Save to Watch later
Save to playlist
Download
Share
Not interested
Don't recommend channel
Report
*/
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <slot />
        </DropdownMenuTrigger>

        <DropdownMenuContent class="w-65 rounded-xl">
            <DropdownMenuGroup>
                <DropdownMenuItem class="rounded-none" @click="addToQueue">
                    <div class="py-2 pl-2.5 flex items-center gap-2.5">
                        <AddToQueue />
                        Add to queue
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem class="rounded-none" @click="saveToWatchLater">
                    <div class="py-2 pl-2.5 flex items-center gap-2.5">
                        <Clock />
                        Save to Watch later
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem class="rounded-none" @click="saveToPlayList">
                    <div class="py-2 pl-2.5 flex items-center gap-2.5">
                        <BookmarkIcon />
                        Save to playlist
                    </div>
                </DropdownMenuItem>
                <!-- <DropdownMenuItem>Download</DropdownMenuItem> -->
                <DropdownMenuItem class="rounded-none" @click="share">
                    <div class="py-2 pl-2.5 flex items-center gap-2.5">
                        <YTShareIcon />
                        Share
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem class="rounded-none" @click="setNotInterested">
                    <div class="py-2 pl-2.5 flex items-center gap-2.5">
                        <NotInterestedIcon />
                        Not interested
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem class="rounded-none" @click="removeRecommend">
                    <div class="py-2 pl-2.5 flex items-center gap-2.5">
                        <NoRecommendIcon />
                        Don't recommend channel
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem class="rounded-none" @click="report">
                    <div class="py-2 pl-2.5 flex items-center gap-2.5">
                        <FlagIcon />
                        Report
                    </div>
                </DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
</template>

<style scoped>
svg {
    width: 25px;
    height: 25px;
}
</style>
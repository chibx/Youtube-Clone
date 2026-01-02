<script setup lang="ts">
import { EllipsisVerticalIcon } from 'lucide-vue-next';


</script>

<template>
    <div class="shorts-card">
        <div>
            <div class="short-visual relative rounded-xl overflow-hidden max-h-120 w-full aspect-9/16">
                <div class="w-full h-full">
                    <img src="/9x16.webp" alt="" class="w-full h-full object-cover" />
                </div>
                <!-- <div></div> -->
            </div>

            <div class="flex items-center gap-2.5 mt-2.5">
                <div class="px-2.5">
                    <div class="font-bold tracking-wide text-sm min-[500px]:text-base">Why gaming laptops are expensive...</div>
                    <div class="text-sm text-muted-foreground mt-1.5">19k views</div>
                </div>

                <div>
                    <span
                        class="menu-btn inline-flex items-center justify-center cursor-pointer p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10">
                        <EllipsisVerticalIcon class="w-5 h-5" />
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
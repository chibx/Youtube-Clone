<script setup lang="ts">
import { Sheet, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { sidebarHeader } from "~/utils/sidebar"
import { Separator } from "@/components/ui/separator"
import SheetSubscriptions from "./SheetSubscriptions.vue"
import SheetForYou from "./SheetForYou.vue"
import SheetToExplore from "./SheetToExplore.vue"
import SheetMoreFromYT from "./SheetMoreFromYT.vue"
import SheetExtras from "./SheetExtras.vue"
import SheetLastSection from "./SheetLastSection.vue"

const sidebarData = {
    sidebarHeader,
}

const open = ref(true)
</script>

<template>
    <Sheet :open="open">
        <SheetContent class="max-w-80" side="left">
            <ScrollArea class="h-full">
                <SheetTitle class="sr-only">Sidebar</SheetTitle>
                <SheetDescription class="sr-only">YouTube Sidebar</SheetDescription>
                <nav class="w-full">
                    <ul class="mb-2.5">
                        <li v-for="item in sidebarData.sidebarHeader" :key="item.title" class="w-full">
                            <NuxtLink :to="item.url"
                                class="flex items-center p-2.5 py-2.5 gap-2.5 hover:bg-accent rounded-md transition-colors">
                                <component :is="item.icon" />
                                <span>{{ item.title }}</span>
                            </NuxtLink>
                        </li>
                    </ul>
                    <Separator />

                    <SheetSubscriptions />
                    <Separator />

                    <SheetForYou />
                    <Separator />

                    <SheetToExplore />
                    <Separator />

                    <SheetMoreFromYT />
                    <Separator />

                    <SheetExtras />
                    <Separator />

                    <SheetLastSection />
                </nav>
            </ScrollArea>
        </SheetContent>
    </Sheet>
</template>

<style scoped></style>
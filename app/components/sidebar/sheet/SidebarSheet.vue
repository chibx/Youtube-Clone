<script setup lang="ts">
import { Sheet, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { sidebarHeader } from "~/utils/sidebar"
import { Separator } from "@/components/ui/separator"
import SheetSubscriptions from "./SheetSubscriptions.vue"

const sidebarData = {
    sidebarHeader,
}

const open = ref(true)
</script>

<template>
    <Sheet :open="open">
        <SheetContent side="left">
            <SheetTitle class="sr-only">Sidebar</SheetTitle>
            <SheetDescription class="sr-only">YouTube Sidebar</SheetDescription>
            <nav class="w-full">
                <ul>
                    <li v-for="item in sidebarData.sidebarHeader" :key="item.title" class="w-full">
                        <NuxtLink :to="item.url" class="flex items-center p-2.5 py-5 gap-2.5 hover:bg-accent rounded-md transition-colors">
                            <component :is="item.icon" />
                            <span>{{ item.title }}</span>
                        </NuxtLink>
                    </li>
                </ul>
                <Separator />

                <SheetSubscriptions />
                <Separator />
                
            </nav>
        </SheetContent>
    </Sheet>
</template>

<style scoped>

</style>
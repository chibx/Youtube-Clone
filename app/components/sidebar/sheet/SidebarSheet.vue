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
import { MenuIcon } from "lucide-vue-next"
import YTLogo from "~/components/svg/YTLogo.vue"

const sidebarData = {
    sidebarHeader,
}

const open = computed(() => {
    return true
})

watch(open, () => {
    if (!open.value) {

    } else {

    }
})
</script>

<template>
    <Sheet :open="open" @update:open="open = $event">
        <SheetContent side="left" style="--container-sm: 20rem;">
            <SheetTitle class="sr-only">Sidebar</SheetTitle>
            <SheetDescription class="sr-only">YouTube Sidebar</SheetDescription>
            <div class="header flex items-center pl-7.5 pt-5">
                <MenuIcon />
                <YTLogo class="logo w-30" />
            </div>
            <ScrollArea class="h-full">
                <nav class="w-full pt-5">
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

<style scoped>
:deep(.sidebar-sheet) {
    --container-sm: 16rem;
}

.dark .logo {
    fill: white;
}

:deep(ul) {
    padding-inline: 20px;
}

:deep(ul) li {
    border-radius: 10px;
}
</style>
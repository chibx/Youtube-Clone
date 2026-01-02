<script setup lang="ts">
import { AntennaIcon, PlusIcon, MenuIcon, MicIcon, NotebookIcon, SearchIcon, UploadIcon, BellIcon } from "lucide-vue-next";
import YTLogo from "~/components/svg/YTLogo.vue";
import { Input as UiInput } from "@/components/ui/input";
import { Button as UiButton } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { initials } from "~/utils/utils";
import NotificationWrapper from "~/components/header/NotificationWrapper.vue";
import { useSidebar } from "@/components/ui/sidebar";
import { APP_SIDEBAR_KEY, SidebarState, WIDE_SIDEBAR_WIDTH } from "~/utils/sidebar";
import { useMediaQuery } from "@vueuse/core";
import DesktopSearch from "./DesktopSearch.vue";
import { LazyDesktopSearch } from "~/utils/lazy";



const searchText = ref("");
const name = ref("Adam Jake")
const sidebarState$1 = inject(APP_SIDEBAR_KEY)!
// const isWideForOpenSidebar = useMediaQuery(WIDE_SIDEBAR_WIDTH)

// const { toggleSidebar } = useSidebar()


function togSidebar() {
    const matches = window.matchMedia(WIDE_SIDEBAR_WIDTH).matches
    let state = unref(sidebarState$1)
    if (matches) {
        state = state ^ (1 << 1)
        state = state ^ (1 << 2)

        sidebarState$1.value = state
    } else {
        state = state | SidebarState.Sheet

        sidebarState$1.value = state
    }
}
</script>

<template>
    <header
        class="fixed z-10 dark:bg-black bg-white px-5 top-0 w-full h-(--myheader-height) flex justify-between items-center">
        <div class="flex gap-5 items-center">
            <MenuIcon tabindex="0" class="cursor-pointer outline-0" @keypress.enter="togSidebar" @click="togSidebar" />
            <YTLogo class="logo h-10 w-20" />
        </div>

        <div class="flex gap-5">
            <LazyDesktopSearch v-model:search="searchText" />

            <div
                class="cursor-pointer rounded-full p-2.5 border border-gray-300 hover:bg-gray-300/40 dark:border-none text-black dark:bg-gray-500/20">
                <MicIcon />
            </div>
        </div>

        <div class="flex gap-5">
            <ClientOnly>
                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                        <UiButton
                            class="w-25 flex items-center gap-1.5 py-5 px-5 rounded-full cursor-pointer bg-black text-white dark:bg-white dark:text-black">
                            <PlusIcon class="text-white dark:text-black!" />
                            Create
                        </UiButton>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent class="w-45 mr-5 py-2.5 rounded-xl">
                        <DropdownMenuItem as-child>
                            <NuxtLink to="#" class="cursor-pointer flex items-center gap-2.5 p-2.5 py-3">
                                <UploadIcon />
                                Upload
                            </NuxtLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem as-child>
                            <NuxtLink to="#" class="cursor-pointer flex items-center gap-2.5 p-2.5 py-3">
                                <AntennaIcon />
                                Go Live
                            </NuxtLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem as-child>
                            <NuxtLink to="#" class="cursor-pointer flex items-center gap-2.5 p-2.5 py-3">
                                <NotebookIcon />
                                Create Post
                            </NuxtLink>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <NotificationWrapper />

                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                        <Avatar class="cursor-pointer">
                            <AvatarImage src="/yt-thumb.webp" />
                            <AvatarFallback :style="{ backgroundColor: 'red', color: 'white' }">{{ initials(name) }}
                            </AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>

                    </DropdownMenuContent>
                </DropdownMenu>
            </ClientOnly>
        </div>
    </header>
</template>

<style scoped>
.dark svg {
    color: white;
}

.dark .logo {
    fill: white;
}
</style>

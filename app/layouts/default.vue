<script setup lang="ts">
import { useDark, useMediaQuery } from "@vueuse/core";
import { SidebarProvider, SidebarInset } from "~/components/ui/sidebar";
import MySidebar from "~/components/sidebar/MySidebar.vue";
import MyHeader from "~/components/header/MyHeader.vue";
import SidebarSheet from "~/components/sidebar/sheet/SidebarSheet.vue";
import { APP_SIDEBAR_KEY, SidebarState, WIDE_SIDEBAR_WIDTH } from "~/utils/sidebar";
const router = useRouter()
const isWideForOpenSidebar = useMediaQuery(WIDE_SIDEBAR_WIDTH)
// const sidebarState = reactive({
//     openBar: true,
//     closedBar: false,
// })

const sidebarState = ref(SidebarState.Small)

// provide("sidebarState", sidebarState)
provide(APP_SIDEBAR_KEY, sidebarState)

// const sidebarWidth = computed(() => {
//     return sidebarState.openBar ? "17rem" : "5rem"
// })

const sidebarWidth = computed(() => {
    return (sidebarState.value & SidebarState.Wide) != 0 ? "17rem" : "5rem"
})


watch(isWideForOpenSidebar, () => {
    let state = sidebarState.value;
    if (isWideForOpenSidebar.value) {
        if (state & SidebarState.Sheet) {
            // Off the Sidebar Sheet implementation
        }

        state = state & ~1
        state = state & ~(1 << 1)
        state = state | (1 << 2)

        sidebarState.value = state
        return
    }

    // Off the Open Sidebar Component
    state = state & ~(1 << 2)
    state = state | SidebarState.Small
    sidebarState.value = state
}, {
    immediate: true
})

// router.beforeEach(async () => {
//     console.log("Worked")
//     await delay(10000)
//     console.log("Done")
// })
</script>

<template>
    <SidebarSheet />
    <SidebarProvider :style="{ '--sidebar-width': sidebarWidth }">
        <!-- <SidebarProvider class="app-sidebar" style="--sidebar-width: var(--appside-width)"> -->
        <MyHeader />
        <MySidebar />
        <SidebarInset class="mt-(--myheader-height) overflow-x-hidden px-2.5 transition-none">
            <slot />
        </SidebarInset>
    </SidebarProvider>
</template>

<style scoped>
/* .app-sidebar {
    --appside-width: 17rem;
}

@media (width >=1250px) {
    .app-sidebar {
        --appside-width: 5rem;
    }
} */
</style>

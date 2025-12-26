<script setup lang="ts">
import { useDark, useMediaQuery } from "@vueuse/core";
import { SidebarProvider, SidebarInset } from "~/components/ui/sidebar";
import MySidebar from "~/components/MySidebar.vue";
import MyHeader from "~/components/MyHeader.vue";
const isMobile = useMediaQuery("(max-width: 768px)")
import { delay } from "~/utils/utils";
const router = useRouter()
const sidebarState = reactive({
    openBar: true,
    closedBar: false,
})

provide("sidebarState", sidebarState)
const sidebarWidth = computed(() => {
    return sidebarState.openBar ? "17rem" : "5rem"
})

// router.beforeEach(async () => {
//     console.log("Worked")
//     await delay(10000)
//     console.log("Done")
// })
</script>

<template>
    <SidebarProvider :style="{ '--sidebar-width': sidebarWidth }">
        <MyHeader />
        <MySidebar />
        <SidebarInset class="mt-(--myheader-height) overflow-x-hidden px-2.5">
            <slot />
        </SidebarInset>
    </SidebarProvider>
</template>

<style scoped>

</style>

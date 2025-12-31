<script setup lang="ts">
import { useDark, useMediaQuery } from "@vueuse/core";
import { SidebarProvider, SidebarInset } from "~/components/ui/sidebar";
import MySidebar from "~/components/MySidebar.vue";
import MyHeader from "~/components/MyHeader.vue";
import SidebarSheet from "~/components/sidebar/sheet/SidebarSheet.vue";
const router = useRouter()
const isWideForOpenSidebar = useMediaQuery("(min-width: 1250px)")
const sidebarState = reactive({
    openBar: true,
    closedBar: false,
})

// watch(isWideForOpenSidebar, () => {
//     if(isWideForOpenSidebar.value){
//         console.log("Wide for open sidebar")
//         sidebarState.openBar = true
//         sidebarState.closedBar = false
//     }
// })

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
    <SidebarSheet />
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

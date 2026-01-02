<script setup lang="ts">
import {
    Sidebar,
    useSidebar,
} from "@/components/ui/sidebar";
import { useUser } from "~/stores/user";
import OpenSidebar from "@/components/sidebar/OpenSidebar.vue";
import ClosedSidebar from "@/components/sidebar/ClosedSidebar.vue";
import { APP_SIDEBAR_KEY, SidebarState } from "~/utils/sidebar";

const user = useUser();
const sidebarState$1 = inject(APP_SIDEBAR_KEY)!
</script>

<template>
    <Sidebar collapsible="offcanvas" class="top-(--myheader-height) transition-none">
        <ClientOnly>
            <OpenSidebar v-if="sidebarState$1 & SidebarState.Wide" />
            <ClosedSidebar v-if="sidebarState$1 & SidebarState.Small" />

            <!-- <LazyOpenSidebar v-if="sidebarState$1 & SidebarState.Wide" />
            <LazyClosedSidebar v-if="sidebarState$1 & SidebarState.Small" /> -->
        </ClientOnly>
    </Sidebar>
</template>

<style scoped>
/* For browsers that support `scrollbar-*` properties */
@supports (scrollbar-color: auto) {
    .sidebar-content {
        scrollbar-color: #62626270 transparent;
        scrollbar-width: thin;
    }

    .dark .sidebar-content {
        scrollbar-color: #4d4d4d83 transparent;

    }
}

/* Otherwise, use `::-webkit-scrollbar-*` pseudo-elements */
@supports selector(::-webkit-scrollbar) {
    .sidebar-content::-webkit-scrollbar-track {
        background: #62626270;
    }

    .dark .sidebar-content::-webkit-scrollbar {
        background: #ffffffdd;
    }
}
</style>

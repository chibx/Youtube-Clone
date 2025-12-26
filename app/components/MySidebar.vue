<script setup lang="ts">
import {
    Sidebar,
    useSidebar,
} from "@/components/ui/sidebar";
import { useUser } from "~/stores/user";
import OpenSidebar from "@/components/sidebar/OpenSidebar.vue";
import ClosedSidebar from "@/components/sidebar/ClosedSidebar.vue";

const user = useUser();
const sidebarState = inject<Ref<{ openBar: boolean, closedBar: boolean }>>("sidebarState")!
</script>

<template>
    <Sidebar collapsible="offcanvas" class="top-(--myheader-height)">
        <OpenSidebar v-if="sidebarState.openBar" />
        <ClosedSidebar v-if="sidebarState.closedBar" />
    </Sidebar>
</template>

<style scoped>
/* For browsers that support `scrollbar-*` properties */
@supports (scrollbar-color: auto) {
    .sidebar-content {
        scrollbar-color: #62626270 transparent;
    }
    .dark .sidebar-content {
        scrollbar-color: #ffffffdd transparent;
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

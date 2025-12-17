<script setup lang="ts">
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
} from "@/components/ui/sidebar";
import { sidebarHeader } from "@/utils/data";
import { useUser } from "~/stores/user";
import Subscription from "@/components/sidebar/Subscription.vue";
import ForYou from "@/components/sidebar/ForYou.vue";
import ToExplore from "@/components/sidebar/ToExplore.vue";
import MoreFromYT from "@/components/sidebar/MoreFromYT.vue";
import MySidebarExtra from "@/components/sidebar/Extras.vue";
import LastSection from "@/components/sidebar/LastSection.vue";

const props = defineProps();
const user = useUser();

const sidebarData = {
    sidebarHeader,
    // toExplore: computed(() => {
    //     return expandedSections.toExplore ? toExplore : toExplore.slice(0, 3);
    // }),
    // forYou: computed(() => {
    //     return expandedSections.forYou ? forYou : forYou.slice(0, 3);
    // }),
    // moreFromYT: computed(() => {
    //     return expandedSections.moreFromYT ? moreFromYT : moreFromYT.slice(0, 3);
    // }),
};
</script>

<template>
    <Sidebar collapsible="icon" class="top-[55px]">
        <SidebarContent class="sidebar-content">
            <!-- Header: Did not use SidebarHeader because of the scroll affecting the content only -->
            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem v-for="item in sidebarData.sidebarHeader" :key="item.title">
                            <SidebarMenuButton class="p-2.5 py-5" as-child>
                                <NuxtLink :to="item.url" class="flex gap-2.5 items-center">
                                    <component :is="item.icon" />
                                    <span>{{ item.title }}</span>
                                </NuxtLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
            <SidebarSeparator />
            <!-- Subscriptions -->
            <Subscription />
            <SidebarSeparator />

            <!-- You Feed -->
            <ForYou />
            <SidebarSeparator />

            <!-- Explore -->
            <ToExplore />
            <SidebarSeparator />

            <!-- More From YouTube -->
            <MoreFromYT />
            <SidebarSeparator />

            <!-- Settings and so -->
            <MySidebarExtra />
            <SidebarSeparator />

            <!-- Footer kinda -->
            <LastSection />
        </SidebarContent>
    </Sidebar>
</template>

<style scoped>
/* For browsers that support `scrollbar-*` properties */
@supports (scrollbar-color: auto) {
    .dark .sidebar-content {
        scrollbar-color: black white;
    }
}

/* Otherwise, use `::-webkit-scrollbar-*` pseudo-elements */
@supports selector(::-webkit-scrollbar) {
    .dark .sidebar-content::-webkit-scrollbar {
        background: black;
    }
    .dark .sidebar-content::-webkit-scrollbar-thumb {
        background: white;
    }
}
</style>

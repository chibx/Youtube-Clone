<script setup lang="ts">
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { sidebarHeader } from "@/utils/data";
import { useUser } from "~/stores/user";
import Subscription from "@/components/sidebar/Subscription.vue";
import ForYou from "@/components/sidebar/ForYou.vue";
import ToExplore from "@/components/sidebar/ToExplore.vue";
import MoreFromYT from "@/components/sidebar/MoreFromYT.vue";

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
        <SidebarContent>
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
            <!-- Subscriptions -->
            <Subscription />

            <!-- You Feed -->
            <ForYou />

            <!-- Explore -->
            <ToExplore />

            <!-- More From YouTube -->
            <MoreFromYT />
        </SidebarContent>
    </Sidebar>
</template>

<style scoped></style>

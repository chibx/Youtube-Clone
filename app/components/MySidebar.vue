<script setup lang="ts">
import { Calendar, Home, HomeIcon, Inbox, PlayCircleIcon, Search, Settings } from "lucide-vue-next";
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SubscriptionDot from "@/components/SubscriptionDot.vue";
import { sidebarHeader, toExplore, forYou, moreFromYT } from "@/utils/data";
import { useUser } from "~/stores/user";
import { initials } from "~/utils/utils";

const props = defineProps();
const user = useUser();

const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
];

const sidebarData = {
    sidebarHeader,
    toExplore,
    forYou,
    moreFromYT,
};
</script>

<template>
    <Sidebar collapsible="icon" class="top-[55px]">
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem v-for="item in sidebarData.sidebarHeader" :key="item.title">
                    <SidebarMenuButton>
                        <component :is="item.icon" />
                        <span>{{ item.title }}</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
            <!-- Subscriptions -->
            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton as-child>
                                <NuxtLink to="/subscriptions"> Subscriptions </NuxtLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem v-for="sub in user.subs" :key="sub.name">
                            <SidebarMenuButton as-child>
                                <NuxtLink
                                    :to="`/channel/${sub.channelId}/`"
                                    class="flex items-center gap-2.5 overflow-hidden"
                                >
                                    <Avatar>
                                        <AvatarImage :src="sub.imageUrl" :alt="sub.name" />
                                        <AvatarFallback>{{ initials(sub.name) }}</AvatarFallback>
                                    </Avatar>

                                    <span>{{ sub.name }}</span>

                                    <SubscriptionDot class="self-end" v-if="sub.newContent" />
                                </NuxtLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>

            <!-- You Feed -->
            <SidebarGroup>
                <SidebarGroupLabel>You</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton as-child> </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton as-child> </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton as-child> </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    </Sidebar>
</template>

<style scoped></style>

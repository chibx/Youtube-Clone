<script setup lang="ts">
import {
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
} from "@/components/ui/sidebar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { HomeIcon, PlayCircleIcon, UserCircle2Icon } from "lucide-vue-next";
import SubsIcon from "@/components/svg/SubsIcon.vue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button as UiButton } from "@/components/ui/button";
import { useUser } from "~/stores/user";
import { initials } from "~/utils/utils";
import { forYou } from "~/utils/sidebar";

const user = useUser();
</script>

<template>
    <SidebarContent class="closed-sidebar">
        <SidebarMenu>
            <SidebarMenuItem aria-label="Home" class="px-1 mt-1">
                <SidebarMenuButton class="px-7 py-10" as-child>
                    <NuxtLink to="/" class="flex flex-col gap-2.5 items-center justify-center">
                        <HomeIcon />
                        <div>Home</div>
                    </NuxtLink>
                </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem aria-label="Shorts" class="px-1 mt-1">
                <SidebarMenuButton class="px-7 py-10" as-child>
                    <NuxtLink to="/shorts" class="flex flex-col gap-2.5 items-center justify-center">
                        <PlayCircleIcon />
                        <div>Shorts</div>
                    </NuxtLink>
                </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem aria-label="Subscriptions" class="px-1 mt-1">
                <HoverCard :close-delay="1000">
                    <HoverCardTrigger as-child>
                        <SidebarMenuButton class="px-7 py-10" as-child>
                            <NuxtLink to="/subscriptions" class="flex flex-col gap-2.5 items-center justify-center">
                                <SubsIcon />
                                <div>Subscriptions</div>
                            </NuxtLink>
                        </SidebarMenuButton>
                    </HoverCardTrigger>

                    <HoverCardContent side="right" as-child class="px-2.5 py-3 mt-20">
                        <!-- <Card> -->
                        <!-- <CardHeader>
                                <CardTitle>Subscriptions</CardTitle>
                            </CardHeader> -->
                        <div class="flex flex-col gap-1.5">
                            <h3 class="px-1.5 font-bold">Subscriptions</h3>
                            <Separator class="my-1.5" />
                            <!-- <CardContent> -->
                            <div class="flex flex-col gap-1.5">
                                <UiButton v-for="sub in user.subs" @click="$router.push(`/channel/${sub.channelId}`)" :key="sub.name" class="w-full cursor-pointer items-center justify-start rounded-none py-6 bg-transparent dark:hover:bg-white/20 hover:bg-gray-100 dark:text-white/80 text-black/80">
                                    <Avatar class="h-7 w-7">
                                        <AvatarImage :src="sub.imageUrl" :alt="sub.name" />
                                        <AvatarFallback>{{ initials(sub.name) }}</AvatarFallback>
                                    </Avatar>

                                    <span class="">{{ sub.name }}</span>

                                    <SubscriptionDot class="subs-dot ml-auto" v-if="sub.newContent" />
                                </UiButton>
                            </div>
                        </div>
                        <!-- </CardContent> -->
                        <!-- </Card> -->
                    </HoverCardContent>
                </HoverCard>
            </SidebarMenuItem>

            <SidebarMenuItem aria-label="You" class="px-1 mt-1">
                <HoverCard :close-delay="1000">
                    <HoverCardTrigger as-child>
                        <SidebarMenuButton class="px-7 py-10" as-child>
                            <NuxtLink to="/feed/you" class="flex flex-col gap-2.5 items-center justify-center">
                                <UserCircle2Icon />
                                <div>You</div>
                            </NuxtLink>
                        </SidebarMenuButton>
                    </HoverCardTrigger>

                    <HoverCardContent side="right" as-child class="px-2.5 py-3">
                        <!-- <Card> -->
                        <!-- <CardHeader>
                            <CardTitle>You</CardTitle>
                        </CardHeader> -->
                        <div class="flex flex-col gap-1.5">
                            <h3 class="px-1.5 font-bold">You</h3>
                            <Separator class="my-1.5" />
                            <!-- <CardContent> -->
                            <div class="flex flex-col gap-1.5">
                                <UiButton as-child v-for="item in forYou" :key="item.title" class="w-full px-5 py-5 items-center justify-start rounded-none bg-transparent dark:hover:bg-white/20 hover:bg-gray-100 dark:text-white/80 text-black/80">
                                    <NuxtLink :to="item.url" class="w-full flex items-center gap-2.5">
                                        <component :is="item.icon" />
                                        {{ item.title }}
                                    </NuxtLink>
                                </UiButton>
                            </div>
                        </div>
                        <!-- </CardContent> -->
                        <!-- </Card> -->
                    </HoverCardContent>
                </HoverCard>
            </SidebarMenuItem>
        </SidebarMenu>

    </SidebarContent>
</template>

<style scoped>
.closed-sidebar a>div {
    font-size: 11px;
}
</style>
<script setup lang="ts">
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/stores/user";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-vue-next";
import { initials } from "~/utils/utils";
import SubscriptionDot from "@/components/SubscriptionDot.vue";

const user = useUser();
const [subscriptionsParent] = useAutoAnimate();
const isSubsExpanded = ref(false);
const subscriptions = computed(() => {
    return isSubsExpanded.value ? user.subs : user.subs.slice(0, 5);
});
</script>

<template>
    <SidebarGroup>
        <SidebarGroupContent>
            <SidebarMenu ref="subscriptionsParent">
                <SidebarMenuItem class="mb-2.5">
                    <SidebarMenuButton as-child class="p-2.5 py-5 font-bold">
                        <NuxtLink to="/subscriptions" class="flex items-center gap-5">
                            Subscriptions <ChevronRightIcon />
                        </NuxtLink>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem v-for="sub in subscriptions" :key="sub.name">
                    <SidebarMenuButton as-child class="p-2.5 py-5">
                        <NuxtLink
                            :to="`/channel/${sub.channelId}/`"
                            class="w-full flex items-center gap-2.5 overflow-hidden p-2.5"
                        >
                            <Avatar class="h-7 w-7">
                                <AvatarImage :src="sub.imageUrl" :alt="sub.name" />
                                <AvatarFallback>{{ initials(sub.name) }}</AvatarFallback>
                            </Avatar>

                            <span>{{ sub.name }}</span>

                            <SubscriptionDot class="self-end" v-if="sub.newContent" />
                        </NuxtLink>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton
                        class="p-2.5 py-5 flex items-center gap-2.5 cursor-pointer"
                        @click="isSubsExpanded = !isSubsExpanded"
                    >
                        More <ChevronDownIcon :class="{ 'rotate-z-180': isSubsExpanded }" />
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroupContent>
    </SidebarGroup>
</template>

<style scoped></style>

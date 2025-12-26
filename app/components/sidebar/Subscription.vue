<script setup lang="ts">
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton"
import { randomSubscriptions, useUser } from "@/stores/user";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-vue-next";
import { delay, initials } from "~/utils/utils";
import SubscriptionDot from "@/components/SubscriptionDot.vue";

const user = useUser();
const [subscriptionsParent] = useAutoAnimate();
const { open } = useSidebar()
const isSubsExpanded = ref(false);
const subscriptions = computed(() => {
    return isSubsExpanded.value ? user.subs : user.subs.slice(0, 5);
});

onMounted(() => {
    delay(2000).then(() => {
        user.subs = randomSubscriptions();
    })
})
</script>

<template>
    <SidebarGroup>
        <SidebarGroupContent>
            <SidebarMenu ref="subscriptionsParent">
                <SidebarMenuItem v-if="open" class="mb-2.5">
                    <SidebarMenuButton as-child class="p-2.5 py-5 font-bold">
                        <NuxtLink to="/subscriptions" class="flex items-center gap-5">
                            Subscriptions
                            <ChevronRightIcon />
                        </NuxtLink>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <template v-if="user.subs.length == 0">
                    <SidebarMenuItem v-for="_ in 6">
                        <SidebarMenuButton class="w-full flex items-center gap-2.5 overflow-hidden p-3">
                            <Skeleton class="h-7 w-7 rounded-full" />
                            <Skeleton class="h-5 w-full" />
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </template>
                <template v-else>
                    <SidebarMenuItem v-for="sub in subscriptions" :key="sub.name">
                        <SidebarMenuButton as-child class="p-2.5 py-5">
                            <NuxtLink :to="`/channel/${sub.channelId}/`"
                                class="w-full flex items-center gap-2.5 overflow-hidden p-2.5">
                                <Avatar class="h-7 w-7">
                                    <AvatarImage :src="sub.imageUrl" :alt="sub.name" />
                                    <AvatarFallback>{{ initials(sub.name) }}</AvatarFallback>
                                </Avatar>

                                <span class="">{{ sub.name }}</span>

                                <SubscriptionDot class="subs-dot ml-auto" v-if="sub.newContent" />
                            </NuxtLink>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem v-if="open">
                        <SidebarMenuButton class="p-2.5 py-5 flex items-center gap-2.5 cursor-pointer"
                            @click="isSubsExpanded = !isSubsExpanded">
                            More
                            <ChevronDownIcon :class="{ 'rotate-z-180': isSubsExpanded }" />
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </template>
            </SidebarMenu>
        </SidebarGroupContent>
    </SidebarGroup>
</template>

<style scoped>
.subs-dot {
    background-color: blue;
}

.dark .subs-dot {
    background-color: #82a1ff;
}
</style>

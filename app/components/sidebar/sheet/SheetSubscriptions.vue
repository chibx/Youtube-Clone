<script setup lang="ts">
import { useSidebar } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton"
import { randomSubscriptions, useUser } from "@/stores/user";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-vue-next";
import { delay, initials } from "~/utils/utils";
import SubscriptionDot from "@/components/SubscriptionDot.vue";

const user = useUser();
const [subscriptionsParent] = useAutoAnimate();
const isSubsExpanded = ref(false);
const subscriptions = computed(() => {
    return isSubsExpanded.value ? user.subs : user.subs.slice(0, 5);
});

onMounted(() => {
    delay(2000).then(() => {
        user.subs = randomSubscriptions();
        user.isSubsLoading = false;
    })
})
</script>

<template>
    <section>
        <ul ref="subscriptionsParent" class="mb-2.5">
            <li class="mb-2.5">
                <NuxtLink to="/subscriptions" class="flex items-center gap-5 p-2.5 py-2.5 font-bold">
                    Subscriptions
                    <ChevronRightIcon />
                </NuxtLink>
            </li>
            <template v-if="user.isSubsLoading">
                <li v-for="_ in 6">
                    <div class="w-full flex items-center gap-2.5 overflow-hidden p-3">
                        <Skeleton class="h-7 w-7 rounded-full" />
                        <Skeleton class="h-5 w-full" />
                    </div>
                </li>
            </template>
            <template v-else>
                <li v-for="sub in subscriptions" :key="sub.name" class="hover:bg-accent">
                    <NuxtLink :to="`/channel/${sub.channelId}/`"
                        class="w-full flex items-center gap-2.5 overflow-hidden p-2.5 py-2.5">
                        <Avatar class="h-7 w-7">
                            <AvatarImage :src="sub.imageUrl" :alt="sub.name" />
                            <AvatarFallback>{{ initials(sub.name) }}</AvatarFallback>
                        </Avatar>

                        <span class="">{{ sub.name }}</span>

                        <SubscriptionDot class="subs-dot ml-auto" v-if="sub.newContent" />
                    </NuxtLink>
                </li>
                <li class="hover:bg-accent">
                    <button class="p-2.5 py-2.5 flex items-center gap-2.5 cursor-pointer w-full"
                        @click="isSubsExpanded = !isSubsExpanded">
                        More
                        <ChevronDownIcon :class="{ 'rotate-z-180': isSubsExpanded }" />
                    </button>
                </li>
            </template>
        </ul>
    </section>
</template>

<style scoped>
.subs-dot {
    background-color: blue;
}

.dark .subs-dot {
    background-color: #82a1ff;
}
</style>

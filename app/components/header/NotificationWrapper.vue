<script setup lang="ts">
import { Button as UiButton } from "@/components/ui/button";
import { BellIcon } from "lucide-vue-next";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent } from "~/components/ui/card"
import { Spinner } from "~/components/ui/spinner";
import Notifications from "./Notifications.vue";
import type { YTNotification } from "~/utils/types";
import { delay } from "~/utils/utils";

const isNotificationLoading = ref(true);
const notifications = ref<YTNotification[]>([])

const isNotifOpen = ref(false)

watch(isNotifOpen, async (newOpen) => {
    if (!newOpen) {
        nextTick(() => setTimeout(() => {
            notifications.value = [];
            isNotificationLoading.value = true
        }, 300))
        return
    }
    isNotificationLoading.value = true
    await delay(1000)
    const { mockNotifications } = await import("~/utils/notifications")

    notifications.value = mockNotifications(10)
    isNotificationLoading.value = false
})

</script>

<template>
    <Popover v-model:open="isNotifOpen">

        <PopoverTrigger>
            <UiButton
                class="cursor-pointer rounded-full size-10 border border-gray-300 hover:bg-gray-300/40 dark:border-none text-black bg-white dark:bg-gray-500/20">
                <BellIcon />
            </UiButton>
        </PopoverTrigger>

        <PopoverContent as-child class="w-[450px] md:w-[550px] h-[600px] p-2.5 mr-5 mt-1.5">
            <Card v-if="isNotificationLoading" class="flex items-center justify-center">
                <CardContent class="flex items-center justify-center">
                    <Spinner class="size-10" />
                </CardContent>
            </Card>
            <Notifications v-else :items="notifications" />
        </PopoverContent>
    </Popover>
</template>

<style scoped>
.dark svg {
    color: white;
}
</style>
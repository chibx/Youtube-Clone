<script setup lang="ts">
import { Button as UiButton } from "@/components/ui/button";
import { BellIcon } from "lucide-vue-next";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Card, CardContent } from "~/components/ui/card"
import { Spinner } from "~/components/ui/spinner";

const isNotificationLoading = ref(true);
</script>

<template>
    <DropdownMenu>

        <DropdownMenuTrigger>
            <UiButton
                class="cursor-pointer rounded-full size-10 border border-gray-300 hover:bg-gray-300/40 dark:border-none text-black bg-white dark:bg-gray-500/20">
                <BellIcon />
            </UiButton>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" as-child>
            <Card v-if="isNotificationLoading" class="w-[350px] min-h-[300px] flex items-center justify-center">
                <CardContent class="flex items-center justify-center">
                    <Spinner class="size-10" />
                </CardContent>
            </Card>
        </DropdownMenuContent>
    </DropdownMenu>
</template>

<style scoped>
.dark svg {
    color: white;
}
</style>
<script setup lang="ts">
import { DropdownMenuItem, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { YTNotification } from "~/utils/types";
import { ScrollArea, } from "@/components/ui/scroll-area";
import { diffDate, initials } from "~/utils/utils";

const props = defineProps<{
    items: YTNotification[]
}>()


</script>

<template>
    <Card>
        <!-- <CardHeader>Notifications</CardHeader> -->
        <CardTitle>Notifications</CardTitle>
        <Separator />
        <CardContent class="-mt-2.5 px-2.5">
            <ScrollArea class="w-full h-[520px]" as-child>
                <div class="mt-2.5 py-2" v-for="notif in items">
                    <div class="flex gap-1.5 justify-between mb-3">
                        <div class="flex items-center justify-center select-none">
                            <Avatar class="size-10">
                                <AvatarImage :src="notif.avatarImg || ''" />
                                <AvatarFallback>{{ initials(notif.avatarName || "") }}</AvatarFallback>
                            </Avatar>
                        </div>

                        <div class="flex flex-col gap-2.5">
                            <div class="max-w-[350px] text-sm font-medium">{{ notif.title }}</div>
                            <div class="text-sm text-gray-900/80 dark:text-white/80 select-none">{{ diffDate(notif.date)
                                /* "2 days
                                ago" */ }}
                            </div>
                        </div>
                        <div class="flex items-center justify-center select-none">
                            <div class="h-[50px] flex items-center aspect-video overflow-clip" :class="{
                                'dark: text- black': !!notif.picture
                            }">
                                <img :src="notif.picture" />
                            </div>
                        </div>
                    </div>

                    <Separator class="mt-1.5" />
                </div>
            </ScrollArea>
        </CardContent>
    </Card>
</template>

<style scoped></style>
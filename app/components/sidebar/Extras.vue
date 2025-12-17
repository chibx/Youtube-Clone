<script setup lang="ts">
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { FlagIcon, HelpCircleIcon, MessageSquareIcon, SettingsIcon } from "lucide-vue-next";
</script>

<template>
    <SidebarGroup>
        <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton as-child class="p-2.5 py-5">
                        <NuxtLink to="/settings" class="w-full flex items-center gap-2.5 overflow-hidden p-2.5">
                            <SettingsIcon />
                            <span>Setting</span>
                        </NuxtLink>
                    </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                    <SidebarMenuButton class="p-2.5 py-5 flex items-center gap-2.5 cursor-pointer" as-child>
                        <NuxtLink to="/reporthistory"> <FlagIcon /> Report History </NuxtLink>
                    </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                    <SidebarMenuButton class="p-2.5 py-5 flex items-center gap-2.5 cursor-pointer">
                        <HelpCircleIcon />
                        Help
                    </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                    <SidebarMenuButton class="p-2.5 py-5 flex items-center gap-2.5 cursor-pointer">
                        <MessageSquareIcon />
                        Send Feedback
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroupContent>
    </SidebarGroup>
</template>

<style scoped></style>

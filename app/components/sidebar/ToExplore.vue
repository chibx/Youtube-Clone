<script setup lang="ts">
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ChevronDownIcon } from "lucide-vue-next";
import { toExplore } from "~/utils/data";

const [toExploreParent] = useAutoAnimate();
const isExploreExpanded = ref(false);
const items = computed(() => {
    return isExploreExpanded.value ? toExplore : toExplore.slice(0, 3);
});
</script>

<template>
    <SidebarGroup>
        <SidebarGroupContent>
            <SidebarGroupLabel>Explore</SidebarGroupLabel>

            <SidebarMenu ref="toExploreParent">
                <SidebarMenuItem v-for="item in items" :key="item.title">
                    <SidebarMenuButton as-child class="p-2.5 py-5">
                        <NuxtLink :to="item.url" class="w-full flex items-center gap-2.5 overflow-hidden p-2.5">
                            <component :is="item.icon" />
                            <span>{{ item.title }}</span>
                        </NuxtLink>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton
                        class="p-2.5 py-5 flex items-center gap-2.5 cursor-pointer"
                        @click="isExploreExpanded = !isExploreExpanded"
                    >
                        More <ChevronDownIcon :class="{ 'rotate-z-180': isExploreExpanded }" />
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroupContent>
    </SidebarGroup>
</template>

<style scoped></style>

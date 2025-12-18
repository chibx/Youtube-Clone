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
import { moreFromYT } from "~/utils/sidebar";

const [moreFromYTParent] = useAutoAnimate();
const isMoreFromExpanded = ref(false);
const items = computed(() => {
    return isMoreFromExpanded.value ? moreFromYT : moreFromYT.slice(0, 3);
});
</script>

<template>
    <SidebarGroup>
        <SidebarGroupContent>
            <SidebarGroupLabel class="text-sm font-bold ml-1.5">More From YouTube</SidebarGroupLabel>

            <SidebarMenu ref="moreFromYTParent">
                <SidebarMenuItem v-for="item in items" :key="item.title">
                    <SidebarMenuButton class="p-2.5 py-5">
                        <NuxtLink :to="item.url" class="flex items-center gap-2.5 overflow-hidden">
                            <component :is="item.icon" />
                            <span>{{ item.title }}</span>
                        </NuxtLink>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton class="p-2.5 py-5 flex items-center gap-2.5 cursor-pointer"
                        @click="isMoreFromExpanded = !isMoreFromExpanded">
                        More
                        <ChevronDownIcon :class="{ 'rotate-z-180': isMoreFromExpanded }" />
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroupContent>
    </SidebarGroup>
</template>

<style scoped></style>

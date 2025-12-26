<script setup lang="ts">
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-vue-next";
import { forYou } from "~/utils/sidebar";

const [forYouParent] = useAutoAnimate();
const { open } = useSidebar()
const isForYouExpanded = ref(false);
const items = computed(() => {
    return isForYouExpanded.value ? forYou : forYou.slice(0, 3);
});
</script>

<template>
    <SidebarGroup>
        <SidebarGroupContent>
            <SidebarMenu ref="forYouParent">
                <SidebarMenuItem v-if="open">
                    <SidebarMenuButton as-child class="p-2.5 py-5 font-bold">
                        <NuxtLink to="/feed/you" class="flex items-center gap-5"> You
                            <ChevronRightIcon />
                        </NuxtLink>
                    </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem v-for="item in items" :key="item.title">
                    <SidebarMenuButton as-child class="p-2.5 py-5">
                        <NuxtLink :to="item.url" class="w-full flex items-center gap-2.5">
                            <component :is="item.icon" />
                            {{ item.title }}
                        </NuxtLink>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem v-if="open">
                    <SidebarMenuButton class="p-2.5 py-5 flex items-center gap-2.5 cursor-pointer"
                        @click="isForYouExpanded = !isForYouExpanded">
                        More
                        <ChevronDownIcon :class="{ 'rotate-z-180': isForYouExpanded }" />
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroupContent>
    </SidebarGroup>
</template>

<style scoped>
.dark svg {
    color: white;
}
</style>

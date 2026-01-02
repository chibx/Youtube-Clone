<script setup lang="ts">
import { useSidebar } from "@/components/ui/sidebar";
import { ChevronDownIcon } from "lucide-vue-next";
import { toExplore } from "~/utils/sidebar";

const [toExploreParent] = useAutoAnimate();
const isExploreExpanded = ref(false);
const items = computed(() => {
    return isExploreExpanded.value ? toExplore : toExplore.slice(0, 3);
});
</script>

<template>
    <section class="my-2.5">
        <h3 class="text-sm font-bold ml-8 mb-1">Explore</h3>

        <ul ref="toExploreParent">
            <li v-for="item in items" :key="item.title" class="hover:bg-accent">
                <NuxtLink :to="item.url" class="w-full flex items-center gap-2.5 overflow-hidden p-2.5 py-2.5">
                    <component :is="item.icon" />
                    <span>{{ item.title }}</span>
                </NuxtLink>
            </li>
            <li class="hover:bg-accent">
                <button class="p-2.5 py-2.5 flex items-center gap-2.5 cursor-pointer w-full"
                    @click="isExploreExpanded = !isExploreExpanded">
                    More
                    <ChevronDownIcon :class="{ 'rotate-z-180': isExploreExpanded }" />
                </button>
            </li>
        </ul>
    </section>
</template>

<style scoped></style>

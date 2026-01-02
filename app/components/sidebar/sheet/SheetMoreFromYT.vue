<script setup lang="ts">
import { useSidebar } from "@/components/ui/sidebar";
import { ChevronDownIcon } from "lucide-vue-next";
import { moreFromYT } from "~/utils/sidebar";

const [moreFromYTParent] = useAutoAnimate();
const isMoreFromExpanded = ref(false);
const items = computed(() => {
    return isMoreFromExpanded.value ? moreFromYT : moreFromYT.slice(0, 3);
});
</script>

<template>
    <section class="my-2.5">
        <h3 class="text-sm font-bold ml-8 mb-1">More From YouTube</h3>

        <ul ref="moreFromYTParent">
            <li v-for="item in items" :key="item.title" class="hover:bg-accent">
                <NuxtLink :to="item.url" class="flex items-center gap-2.5 overflow-hidden p-2.5 py-2.5">
                    <component :is="item.icon" />
                    <span>{{ item.title }}</span>
                </NuxtLink>
            </li>
            <li class="hover:bg-accent">
                <button class="p-2.5 py-2.5 flex items-center gap-2.5 cursor-pointer w-full"
                    @click="isMoreFromExpanded = !isMoreFromExpanded">
                    More
                    <ChevronDownIcon :class="{ 'rotate-z-180': isMoreFromExpanded }" />
                </button>
            </li>
        </ul>
    </section>
</template>

<style scoped></style>

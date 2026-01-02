<script setup lang="ts">
import { useSidebar } from "@/components/ui/sidebar";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-vue-next";
import { forYou } from "~/utils/sidebar";

const [forYouParent] = useAutoAnimate();
const isForYouExpanded = ref(false);
const items = computed(() => {
    return isForYouExpanded.value ? forYou : forYou.slice(0, 3);
});
</script>

<template>
    <section class="my-2.5">
        <ul ref="forYouParent">
            <li class="hover:bg-accent">
                <NuxtLink to="/feed/you" class="flex items-center gap-5 p-2.5 py-2.5 font-bold">
                    You
                    <ChevronRightIcon />
                </NuxtLink>
            </li>

            <li v-for="item in items" :key="item.title" class="hover:bg-accent">
                <NuxtLink :to="item.url" class="w-full flex items-center gap-2.5 p-2.5 py-2.5">
                    <component :is="item.icon" />
                    {{ item.title }}
                </NuxtLink>
            </li>
            <li class="hover:bg-accent">
                <button class="p-2.5 py-2.5 flex items-center gap-2.5 cursor-pointer w-full"
                    @click="isForYouExpanded = !isForYouExpanded">
                    More
                    <ChevronDownIcon :class="{ 'rotate-z-180': isForYouExpanded }" />
                </button>
            </li>
        </ul>
    </section>
</template>

<style scoped>
.dark svg {
    color: white;
}
</style>

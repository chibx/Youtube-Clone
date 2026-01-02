<script setup lang="ts">
import { Input as UiInput } from "@/components/ui/input";
import { Button as UiButton } from "@/components/ui/button";
import { HistoryIcon, SearchIcon } from "lucide-vue-next";

const search = defineModel<string>("search", { required: true })

watchEffect(() => {
    console.log(search.value)
})
</script>

<template>
    <div class="relative">
        <div class="flex items-center">
            <UiInput v-model.lazy="search"
                class="border border-black/20 dark:border-white/20 rounded-tl-full rounded-bl-full min-w-[300px] md:min-w-[400px] py-5 px-5"
                placeholder="Search anything..." />
            <UiButton
                class="cursor-pointer bg-white dark:bg-gray-500/30 hover:bg-white/80 border border-black/20 dark:border-white/20 flex items-center justify-center rounded-tr-full rounded-br-full py-5 px-5!">
                <SearchIcon class="text-black dark:text-white" />
            </UiButton>
        </div>

        <div class="absolute w-full rounded-2xl">
            <div class="flex items-center gap-2.5">
                <div class="icon">
                    <HistoryIcon />
                    <SearchIcon />
                </div>

                <div>
                    <span>Chelsea Premier League Victory</span>
                </div>

                <div class="flex items-center gap-2.5 ml-auto">
                    <div class="image"></div>
                    <div class="remove-sug"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
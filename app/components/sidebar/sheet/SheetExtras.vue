<script setup lang="ts">
import { FlagIcon, HelpCircleIcon, MessageSquareIcon, SettingsIcon } from "lucide-vue-next";
</script>

<template>
    <section>
        <ul>
            <li class="hover:bg-accent">
                <NuxtLink to="/settings" class="w-full flex items-center gap-2.5 overflow-hidden p-2.5 py-2.5">
                    <SettingsIcon />
                    <span>Setting</span>
                </NuxtLink>
            </li>

            <li class="hover:bg-accent">
                <NuxtLink to="/reporthistory" class="p-2.5 py-2.5 flex items-center gap-2.5 cursor-pointer w-full">
                    <FlagIcon /> Report History
                </NuxtLink>
            </li>

            <li class="hover:bg-accent">
                <button class="p-2.5 py-2.5 flex items-center gap-2.5 cursor-pointer w-full">
                    <HelpCircleIcon />
                    Help
                </button>
            </li>

            <li class="hover:bg-accent">
                <button class="p-2.5 py-2.5 flex items-center gap-2.5 cursor-pointer w-full">
                    <MessageSquareIcon />
                    Send Feedback
                </button>
            </li>
        </ul>
    </section>
</template>

<style scoped></style>

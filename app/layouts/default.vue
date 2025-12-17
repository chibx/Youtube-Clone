<script setup lang="ts">
import { useDark } from "@vueuse/core";
import { SidebarProvider, SidebarInset } from "~/components/ui/sidebar";
import MySidebar from "~/components/MySidebar.vue";
import MyHeader from "~/components/MyHeader.vue";

const isDark = useDark();
</script>

<template>
    <MyHeader />
    <SidebarProvider style="--sidebar-width: 17rem">
        <MySidebar />
        <SidebarInset class="mt-(--myheader-height)">
            <slot />
        </SidebarInset>
    </SidebarProvider>
</template>

<style scoped></style>

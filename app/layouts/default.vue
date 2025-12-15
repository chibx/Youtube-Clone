<script setup lang="ts">
import { useDark } from "@vueuse/core";
import { SidebarProvider, SidebarInset } from "~/components/ui/sidebar";
import MySidebar from "~/components/MySidebar.vue";
import MyHeader from "~/components/MyHeader.vue";

const isDark = useDark();
</script>

<template>
    <MyHeader />
    <SidebarProvider>
        <MySidebar />
        <SidebarInset>
            <slot />
        </SidebarInset>
    </SidebarProvider>
</template>

<style scoped></style>

<script setup lang="ts">
import { SidebarProvider, SidebarInset } from "~/components/ui/sidebar";
import MySidebar from "~/components/MySidebar.vue";
import MyHeader from "~/components/MyHeader.vue";
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

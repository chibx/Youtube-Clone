<script setup lang="ts">
import { SidebarProvider } from "@/components/ui/sidebar";
import SidebarInset from "./components/ui/sidebar/SidebarInset.vue";
</script>

<template>
    <div>
        <NuxtRouteAnnouncer />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

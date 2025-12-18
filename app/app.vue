<script setup lang="ts">
import 'vue-sonner/style.css'
import { Toaster } from "@/components/ui/sonner"
import { useDark } from '@vueuse/core';

const theme = useCookie("theme")

const isDark = useDark({
    storageKey: "theme",
    // initOnMounted: false,
    // listenToStorageChanges: false,
    // writeDefaults: false,
    onChanged(_, defaultHandler, mode) {
        theme.value = mode == "auto" ? "" : (mode == "light" ? "light" : "dark")
        defaultHandler(mode)
    },
});

useHead({
    htmlAttrs: {
        class: () => theme.value == "dark" ? "dark" : undefined,
    }
})

onMounted(() => {
    // setTimeout(() => {
    //     // isDark.value = false
    //     console.log(isDark.value)
    // }, 1000)
})
</script>

<template>
    <Toaster />
    <div class="bg-background">
        <NuxtRouteAnnouncer />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<style>
:root {
    --myheader-height: 60px;
}

#__nuxt {}
</style>

<script setup lang="ts">
import { delay } from '~/utils/utils'
import { Skeleton } from "@/components/ui/skeleton"
import CategorySlider from './CategorySlider.vue'
// import { Button } from "@/components/ui/button"`

const categories = ref<string[]>([])
const el = ref<HTMLElement |null>(null)
provide("el", el)

async function loadCategories() {
    try {
        await delay(1000)
        const { getCategories } = await import("@/utils/category-switcher")
        categories.value = getCategories()
    } catch { }
}

onMounted(() => {
    loadCategories()
})
</script>

<template>
    <div class="wrapper overflow-hidden select-none" ref="el">
        <Skeleton v-if="categories.length === 0" class="h-[30px] w-full" />

        <CategorySlider v-else :categories="categories" />
    </div>
</template>

<style scoped>

</style>
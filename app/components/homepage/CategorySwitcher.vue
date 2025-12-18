<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'
import { Badge } from "@/components/ui/badge"

const [emblaRef, emblaApi] = emblaCarouselVue({ loop: false })

onMounted(() => {

})
</script>

<template>
    <div class="embla" ref="emblaRef">
        <div class="embla__container">
            <Badge class="embla__slide">All</Badge>
            <Badge class="embla__slide">All</Badge>
            <Badge class="embla__slide">All</Badge>
            <Badge class="embla__slide">All</Badge>
            <Badge class="embla__slide">All</Badge>
        </div>
    </div>
</template>

<style scoped>
.embla {
    overflow: hidden;
}

.embla__container {
    display: flex;
    gap: 20px;
}

.embla__slide {
    flex: 0 0 100%;
    min-width: 0;
}
</style>
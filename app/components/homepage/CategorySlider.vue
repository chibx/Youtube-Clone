<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue';

const props = defineProps<{ categories: string[] }>()

const [emblaRef, emblaApi] = emblaCarouselVue({ loop: false })

const activeCategory = ref<string | null>("All")
const el = inject<Ref<HTMLElement | null>>("el")

function setActiveCategory(category: string) {
    activeCategory.value = category
}

</script>

<template>
    <div class="cat-slider embla mr-2.5" ref="emblaRef">
        <div class="embla__container cat-slider">
            <div class="embla__slide" v-for="category in categories" :key="category">
                <button class="categ" :class="{ 'active': category === activeCategory }"
                    @click="setActiveCategory(category)">
                    {{ category }}
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.embla {
    overflow: hidden;
}

.embla__container {
    display: flex;
    gap: 10px;
}

.cat-slider .categ {
    font-size: 14px;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: #ffffff1a;
    color: black;
    cursor: pointer;
}

.dark .cat-slider .categ {
    background-color: #ffffff1a;
    color: white;
}

.categ.active {
    background-color: black;
    color: white;
}

.dark .categ.active {
    background-color: #f1f1f1;
    color: black;
}

.embla__slide {
    flex: 0 0 auto;
    min-width: 0;
}
</style>
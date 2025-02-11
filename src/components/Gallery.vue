<template>
    <Navbar />
    <div class="gallery-card  ">
        <Carousel :value="indianCulture" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
            <template #item="slotProps">
                <div class="border border-surface-200 dark:border-surface-700 rounded m-2  p-4">
                    <div class="mb-4">
                        <div class="relative mx-auto">
                            <img :src='slotProps.data.image' :alt="slotProps.data.name" class="w-full rounded" />
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
    <Footer />
</template>
<script setup>
import { ref } from "vue"
import Navbar from "./Navbar.vue"
import Footer from "./Footer.vue"
const indianCulture = [
    { image: 'https://images.pexels.com/photos/27489411/pexels-photo-27489411.jpeg' },
    { image: 'https://images.pexels.com/photos/27489412/pexels-photo-27489412.jpeg' },
    { image: 'https://images.pexels.com/photos/27489413/pexels-photo-27489413.jpeg' },
    { image: 'https://images.pexels.com/photos/27489414/pexels-photo-27489414.jpeg' },
    { image: 'https://images.pexels.com/photos/27489416/pexels-photo-27489416.jpeg' },
]
const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
])
</script>

<template>
    <div class="experience-card container">
        <div class="experience-head ">
            <div class="experience-header">
                <p class="experience-subtitle">[WHAT'S INCLUDED]</p>
                <h2 class="experience-title">What's Covered in Your Experience</h2>
            </div>
        </div>
        <div class="experience-content  ">
            <Accordion>
                <AccordionPanel v-for="tab in tabs" :key="tab.title" :value="tab.value">
                    <AccordionHeader>{{ tab.title }}</AccordionHeader>
                    <AccordionContent>
                        <p class="m-0">{{ tab.content }}</p>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
            <div class="experience-image">
                <img width="350px" src="../assets/img/mekhalaya.jpg" alt="Experience Image" />
            </div>
        </div>
        <p></p>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const tabs = ref([
    { title: 'Indian Culture', content: "Immerse yourself in India's rich culture, a blend of timeless traditions, vibrant festivals, diverse art forms, and warm hospitality that leaves travelers enchanted.", value: '0' },
    { title: 'Indian Food', content: "Embark on a culinary journey through India, savoring aromatic spices, regional delicacies, and traditional flavors that make every meal an unforgettable experience.", value: '1' },
    { title: 'Beaches and Nature', content: "Explore India's pristine beaches, lush forests, and majestic landscapes, offering serene escapes and breathtaking views for nature lovers and peace seekers alike.", value: '2' },
    { title: 'Adventure', content: "India promises thrilling adventures, from trekking in the Himalayas and river rafting to desert safaris and wildlife explorations, catering to every adventurer's dream.", value: '3' },
    { title: 'Lodging', content: "Experience India's diverse accommodations, from luxurious heritage hotels and serene beach resorts to budget-friendly homestays, ensuring comfort and charm for every traveler.", value: '4' }
])
</script>
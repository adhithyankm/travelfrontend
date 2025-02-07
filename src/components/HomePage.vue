<template>
  <div class="home-page">
    <Navbar />
    <section class="hero">
      <div class="hero-overlay">
        <h1>Extraordinary natural and cultural charm</h1>
        <p>Exploring India is an unforgettable adventure.</p>
        <div class="search-bar flex gap-2">
          <DatePicker class="inputs custom-datepicker" placeholder="Date From:" />
          <DatePicker class="inputs custom-datepicker" placeholder="Date To:" />
          <InputNumber class="inputs" inputId="integeronly" fluid placeholder="Budget (INR)" />
          <InputNumber class="inputs" inputId="integeronly" fluid placeholder="Guest" />
          <button class="home-search-button p-component">Search</button>
        </div>
      </div>
    </section>
    <section class="grid-cards">
      <Card v-for="card in cards" :key="card.id">
        <template #title>{{ card.title }}</template>
        <template #content>
          {{ card.content }}
        </template>
      </Card>
    </section>
    <section class="tourism">
      <div class="tour-header">
        <div class="tour-head">
          <h3>Best Locations</h3>
          <h2>Indian Tourism</h2>
        </div>
        <p class="tour-caption">
          Extraordinary natural beauty, <br />
          enjoy the rich culture, and experience <br />
          the friendliness of the local people.
        </p>
      </div>
      <div class="tour-grid">
        <div v-for="(tour, index) in tours" :key="index" class="grid-item" :class="getGridClass(index)">
          <TourCard :title="tour.title" :subtitle="tour.subtitle" :image="tour.image" />
        </div>
      </div>
    </section>
    <ExperienceCard />
    <Footer />
  </div>
</template>
<script setup>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import TourCard from './TourCard.vue'
import ExperienceCard from './ExperienceCard.vue'
import k3ithvision from '../assets/img/pexels-k3ithvision-4134644.jpg'
import ladaktwo from '../assets/img/ladak(2).jpg'
import TajMahal from '../assets/img/tajindia.jpg'
import azharphoto from '../assets/img/pexels-azharphotography-8230166.jpg'
const tours = [
  {
    title: 'Karnataka Tour',
    subtitle: 'Mysore Palace, Karnataka',
    image: k3ithvision
  },
  {
    title: 'Kargil Tour',
    subtitle: 'Ladakh',
    image: ladaktwo,
  },
  {
    title: 'Uttar Pradesh',
    subtitle: 'Taj Mahal',
    image: TajMahal,
  },
  {
    title: 'Karnataka Tour',
    subtitle: 'Hampi',
    image: azharphoto,
  },
];
const cards = [
  { id: 1, title: "5M+", content: "Total Customers" },
  { id: 2, title: "06+", content: "Years Of Experience" },
  { id: 3, title: "4K", content: "Total Destinations" },
  { id: 4, title: "4.0", content: "Average Rating" },
];
const getGridClass = (index) => {
  const gridClasses = ['span-2 span-md-1', 'span-1', 'span-1', 'span-2'];
  return gridClasses[index] || 'span-1';
};
</script>
<style scoped>
.hero {
  position: relative;
  background-image: url('../assets/img/lake.jpg');
  background-size: cover;
  background-position: center;
  text-align: center;
  color: #fff;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-overlay {
  background: rgba(5, 5, 5, 0.5);
  padding: 4rem;
  border-radius: 8px;
  font-size: xx-large;
  font-weight: bold;
  text-align: center;
  max-width: 80%;
}
.search-bar {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
.search-bar .inputs {
  flex: 1;
  padding: 0.5rem;
  border-radius: 4px;
  min-width: 150px;
}
.search-bar button {
  padding: 0.5rem 1rem;
  height: 95%;
  align-self: center;
  border-radius: 4px;
  background: rgba(7, 7, 7, 0.682);
  color: white;
  border: 1px solid white;
  cursor: pointer;
}
.tour-header {
  text-align: center;
  margin: 2rem 0;
}
@media (max-width: 768px) {
  .hero-overlay {
    font-size: large;
    padding: 2rem;
    max-width: 90%;
  }
  .search-bar {
    flex-direction: column;
    align-items: center;
  }
  .search-bar .inputs {
    width: 100%;
  }
  .search-bar button {
    width: 100%;
  }
}
@media (max-width: 499px) {
  .hero-overlay {
    font-size: medium;
    padding: 1.5rem;
    max-width: 95%;
  }
}
</style>

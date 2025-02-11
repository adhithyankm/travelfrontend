<template>
  <div class="tour-card">
    <img :src="image" :alt="title" class="tour-card-image" />
    <div class="tour-card-overlay">
      <h3 class="tour-card-title">{{ title }}</h3>
      <p class="tour-card-subtitle">{{ subtitle }}</p>
    </div>
  </div>
</template>
  <script setup>
 defineProps({
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  })
  </script>

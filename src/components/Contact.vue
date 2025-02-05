<template>
  <Navbar />
  <div class="contact-card">
    <div class="contact-info">
      <div class="info-item">
        <span class="icon pi pi-phone"></span>
        <div>
          <h4>CALL US</h4>
          <p>+91-1234567890, +91-9876543210</p>
        </div>
      </div>
      <div class="info-item">
        <span class="icon pi pi-map-marker"></span>
        <div>
          <h4>LOCATION</h4>
          <p>121 Rock Street, Kochi, India</p>
        </div>
      </div>
      <div class="info-item">
        <span class="icon pi pi-clock"></span>
        <div>
          <h4>BUSINESS HOURS</h4>
          <p>Mon - Fri: 10 am - 8 pm<br>Sat, Sun: Closed</p>
        </div>
      </div>
    </div>
    <div class="contact-form">
      <h3>CONTACT US</h3>
      <form @submit.prevent="submitForm">
        <input type="text" v-model="inputValues.name" placeholder="Enter your Name" class="input" />
        <input type="email" v-model="inputValues.email" placeholder="Enter a valid email address" class="input" />
        <textarea v-model="inputValues.message" placeholder="Your message here..." class="textarea"></textarea>
        <button type="submit" class="submit-btn">SUBMIT</button>
      </form>
    </div>
  </div>
  <Footer />
</template>
<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import store from '@/storage';
import { computed, onMounted, watch } from "vue";
import { reactive, ref } from "vue";

const inputValues = reactive({
  name: '',
  email: '',
  message: ''
})
let initialRender = ref(false)
onMounted(() => {
  initialRender.value = true
  const contactForm = computed(() => store.getters.getContactForm);
  inputValues.name = contactForm.value.name
  inputValues.email = contactForm.value.email
  inputValues.message = contactForm.value.message
  initialRender.value = false
})
watch(inputValues, () => {
  if (initialRender.value) {
    return
  }
  store.dispatch('updateContactForm', { email: inputValues.email, name: inputValues.name, message: inputValues.message })
})
</script>

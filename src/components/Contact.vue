<template>
    <Navbar/>
    <div class="contact-card">
      <div class="contact-info">
        <div class="info-item">
          <span class="icon pi pi-phone"></span>
          <div>
            <h4>CALL US</h4>
            <p>+91- 1234567890, +91-9876543210</p>
          </div>
        </div>
        <div class="info-item">
          <span class="icon pi pi-map-marker"></span>
          <div>
            <h4>LOCATION</h4>
            <p>121 Rock Street,Kochi , India</p>
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
        <form>
          <input type="text" placeholder="Enter your Name" class="input" />
          <input type="email" placeholder="Enter a valid email address" class="input" />
          <textarea placeholder="Your message here..." class="textarea"></textarea>
          <button type="submit" class="submit-btn">SUBMIT</button>
        </form>
      </div>
    </div>
    <Footer/>
  </template>

  <script setup>
    import Navbar from './Navbar.vue';
    import Footer from './Footer.vue';
</script>
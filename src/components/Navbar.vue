<template>
  <nav class="navbar">
    <div class="navbar-left">
      <h1 class="brand-name">

          MyBrand
        </h1>
    </div>
    <div class="hamburger" @click="toggleMenu">
      <i class="pi pi-bars"></i>
    </div>
    <ul class="nav-links" :class="{ 'active': isMenuOpen }">
      <li> <router-link to="/"><a>Home</a></router-link></li>
      <li> <router-link to="/gallery"><a>Gallery</a></router-link></li>
      <li> <router-link to="/contact"><a>Contact</a></router-link></li>
      <li class="signin-item"> 
        <router-link to="/signin"> 
          <button class="signin-button">Log In</button>
        </router-link>
      </li>
    </ul>
    <div class="navbar-right">
      <router-link to="/login"> <button class="signin-button">Log In</button></router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
}
.brand-name {
  font-size: 1.5rem;
  font-weight: bold;

}
.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  transition: transform 0.3s ease;
}
.nav-links a {
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease;
}
.nav-links a:hover {
  color: #00bcd4;
}
.signin-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #00bcd4;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}
.signin-button:hover {
  background-color: #008c9e;
}
.hamburger {
  display: none;
  cursor: pointer;
}
.hamburger .pi {
  font-size: 24px;
  color: white;
}
@media (max-width: 768px) {
  .nav-links {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: rgba(0, 0, 0, 0.9);
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
    transform: translateY(-100%);
    width: 100%;
    display: none;
  }
  .nav-links.active {
    display: flex;
    transform: translateY(0);
  }
  .hamburger {
    display: flex;
  }
  .navbar-right {
    display: none;
  }
  .signin-item {
    display: block;
  }
}

@media (min-width: 769px) {
  .signin-item {
    display: none;
  }
}
</style>

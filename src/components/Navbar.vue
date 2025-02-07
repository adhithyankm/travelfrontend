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
      <li> <router-link to="/gallery">Gallery</router-link></li>
      <li> <router-link to="/contact">Contact</router-link></li>
      <li class="signin-user" v-if="isAuthenticated && !isLoginPage">Welcome{{ user.name }} </li>
      <li class="signin-user" v-if="isAuthenticated && !isLoginPage">
        <button class="logout-button" @click="handleLogout">Logout</button>
       </li>
      <li v-if="!isAuthenticated" class="signin-item "> 
        <router-link to="/login"> 
          <button class="login-button">Log In</button>
        </router-link>
      </li>
    </ul>
    <div class="navbar-right">
     <div v-if="isAuthenticated && !isLoginPage">
        <span > Welcome {{ user.name }} </span>
        <button class="logout-button" @click="handleLogout">Logout</button>
     </div>
     <div v-if="!isAuthenticated">
        <router-link to="/login">
           <button class="login-button">Log In</button>
        </router-link> 
     </div>
    </div>
  </nav>
</template>
<script setup>
import { computed } from 'vue'
import { ref } from 'vue'
import store from '@/storage'
import { useRoute, useRouter } from "vue-router"
const router = useRouter()
const route = useRoute()
const isMenuOpen = ref(false)
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
function handleLogout() {
  store.dispatch('logout');
  router.push('/login');
}
const isLoginPage = computed(() => route.path === "/login")
const isAuthenticated = computed(() => store.getters.isAuthenticated)
const user = computed(() => store.state.user)
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
  z-index: 1;
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
.hamburger {
  display: none;
  cursor: pointer;
}
.hamburger .pi {
  font-size: 24px;
  color: white;
}
.login-button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #00bcd4;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .logout-button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #c72817;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }
@media (max-width: 768px) {
  .nav-links {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: rgba(0, 0, 0, 0.9);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    transform: translateY(-140%);
    width: 100%;
  }
  .nav-links.active {
    display: flex;
    transform: translateY(0);
  }
  .hamburger{
    display: block !important;
    z-index: 2;
  }
  .navbar-right {
    display: none;
  }
  .signin-item {
    display: block;
  }
  .navbar-left,.brand-name {
    z-index: 1;
  }
}
@media (min-width: 769px) {
  .signin-item, .signin-user {
    display: none;
  }
  .navbar-right span {
    padding: 20px;
  }
}
</style>

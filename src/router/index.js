import Contact from '@/components/Contact.vue'
import Gallery from '@/components/Gallery.vue'
import HomePage from '@/components/HomePage.vue'
import LoginPage from '@/components/LoginPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory('#'),
  routes: [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/gallery', component: Gallery },
    { path: '/contact', component: Contact },
  ],
})

export default router

import Contact from '@/components/Contact.vue'
import Gallery from '@/components/Gallery.vue'
import HomePage from '@/components/HomePage.vue'
import LoginPage from '@/components/LoginPage.vue'
import SignIn from '@/components/SignIn.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    {path: '/signin', component: SignIn},
    { path: '/gallery', component: Gallery },
    { path: '/contact', component: Contact },
  ],
})

export default router

import Contact from '@/components/Contact.vue'
import Gallery from '@/components/Gallery.vue'
import HomePage from '@/components/HomePage.vue'
import SignInPage from '@/components/SignInPage.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
  { path: '/login', component: SignInPage },
  { path: '/gallery', component: Gallery },
  { path: '/contact', component: Contact },
  ],
})

export default router

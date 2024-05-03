import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Contact from '../pages/Contact.vue'
import GameView from '../pages/GameView.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/game/:id', component: GameView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

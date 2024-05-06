import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Contact from '../pages/Contact.vue'
import GameView from '../pages/GameView.vue'
import Error from '../pages/Error.vue'


const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/game/:id', name: 'game', component: GameView },
  { path: '/:pathMatch(.*)', component: Error }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },

})

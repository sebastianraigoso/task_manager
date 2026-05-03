import { createWebHistory, createRouter } from 'vue-router'

import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Tasks from '../views/Tasks.vue'



const routes = [
  { path: '/', component: Login },
  { path: '/register', component: Register },
  { path: '/tasks', component: Tasks },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
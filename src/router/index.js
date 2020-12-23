import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Home from '../views/Home.vue'
import Cats from '../views/Cats.vue'
import Dogs from '../views/Dogs.vue'
import Pet from '../views/Pet.vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dogs',
    name: 'Dogs',
    component: Dogs
  },
  {
    path: '/cats',
    name: 'Cats',
    component: Cats
  },
  {
    path: '/pets/:species/:id',
    name: 'Pet',
    component: Pet
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

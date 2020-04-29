import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth'
import Home from '../views/Home'
import FormEvent from '../views/FormEvent'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Auth',
    meta: { layout: 'no-navbar' },
    component: Auth
  },
  {
    path: '/home',
    name: 'Home',
    meta: { layout: 'default' },
    component: Home
  },
  {
    path: '/create',
    name: 'Create',
    meta: { layout: 'default' },
    component: FormEvent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth'
import Home from '../views/Home'
import Create from '../views/CreateEvent'
import MosaicView from '../views/MosaicView'
import ExpandedView from '../views/ExpandedView'
import Organizer from '../views/Organizer'
import Edit from '../views/FormEvent'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Auth',
  meta: {
    layout: 'no-navbar'
  },
  component: Auth
},
{
  path: '/home',
  name: 'Home',
  meta: {
    layout: 'default'
  },
  component: Home
},
{
  path: '/create',
  name: 'Create',
  meta: {
    layout: 'default'
  },
  component: Create
},
{
  path: '/events',
  name: 'Events',
  meta: {
    layout: 'default',
    appBarVisible: true
  },
  component: MosaicView
},
{
  path: '/expanded',
  name: 'Expanded',
  meta: {
    layout: 'default',
    appBarVisible: true
  },
  component: ExpandedView
},
{
  path: '/organizer',
  name: 'Organizer',
  meta: {
    layout: 'default'
  },
  component: Organizer
},
{
  path: '/edit',
  name: 'Edit',
  meta: {
    layout: 'default'
  },
  component: Edit
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

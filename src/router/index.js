import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth'
import Create from '../views/CreateEvent'
import MosaicView from '../views/MosaicView'
import ExpandedView from '../views/ExpandedView'
import Organizer from '../views/Organizer'
import Edit from '../views/EditEvent'
import UserProfile from '../views/Profile'
import OrganizerProfile from '../views/OrganizerProfile'
import Wishes from '../views/Wishes'
import Mail from '../views/Mail'
import BuyTicket from '../views/BuyTicket'




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
  path: '/create',
  name: 'Create',
  component: Create,
  beforeEnter (to, from, next) {
    if (localStorage.role !== 'ORGANIZER') {
      next({
        name: 'Events'
      })
    }
    next()
  }
},
{
  path: '/events',
  name: 'Events',
  meta: {
    appBarVisible: true
  },
  component: MosaicView
},
{
  path: '/mail',
  name: 'Mail',
  meta: {
    appBarVisible: true
  },
  component: Mail
},
{
  path: '/expanded',
  name: 'Expanded',
  meta: {
    appBarVisible: true
  },
  component: ExpandedView
},
{
  path: '/event/:eventId',
  name: 'BuyTicket',
  meta: {
    appBarVisible: true
  },
  component: BuyTicket
},
{
  path: '/organizer',
  name: 'Organizer',
  component: Organizer,
  beforeEnter (to, from, next) {
    if (localStorage.role !== 'ORGANIZER') {
      next({
        name: 'Events'
      })
    }
    next()
  }
},
{
  path: '/edit',
  name: 'Edit',
  component: Edit
},
{
  path: '/profile',
  name: 'Profile',
  component: UserProfile
},
{
  path: '/organizerprofile',
  name: 'OrganizerProfile',
  component: OrganizerProfile,
  beforeEnter (to, from, next) {
    if (localStorage.role !== 'ORGANIZER') {
      next({
        name: 'Events'
      })
    }
    next()
  }
},
{
  path: '/wishes',
  name: 'Wishes',
  component: Wishes
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

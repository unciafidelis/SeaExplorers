import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../src/views/LandingPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingPage
  },
  {
    path: '/members',
    name: 'member-list',
    component: () => import('../src/components/member/MemberComponent.vue')
  },
  {
    path: '/organizers',
    name: 'organizer-list',
    component: () => import('../src/components/organizer/OrganizerComponent.vue')
  },
  {
    path: '/events',
    name: 'event-list',
    component: () => import('../src/components/event/EventComponent.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../src/components/blog/BlogComponent.vue')
  },
  {
    path: '/registry',
    name: 'blog',
    component: () => import('../src/components/member/RegistryMemberComponent.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

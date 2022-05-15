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
    path: '/member',
    name: 'member',
    component: () => import('../src/components/member/MemberComponent.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

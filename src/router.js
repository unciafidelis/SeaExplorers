import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/signin",
    name: "registryMember",
    component: () => import("./components/RegistryMemberComponent")
  },
  {
    path: "/member/:id",
    name: "memberDetails",
    component: () => import("./components/MemberComponent")
  },
  {
    path: "/",
    name: "landingPage",
    component: () => import("./components/LandingPage")
  },

  
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/explorers",
    name: "explorers",
    component: () => import("./components/ExplorersList")
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/Explorer")
  },
  {
    path: "/add",
    name: "add-explorer",
    component: () => import("./components/AddExplorer")
  },
  {
    path: "/mcx",
    name: "missionCommanderX",
    component: () => import("./components/MissionCommanderList")
  },
  {
    path: "/addmcx",
    name: "add-missionCommanderX",
    component: () => import("./components/AddMissionCommander")
  },
  {
    path: "/mcx/:id",
    name: "missioncommander-details",
    component: () => import("./components/MissionCommander")
  }

  
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
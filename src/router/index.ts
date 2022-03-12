import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../pages/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    name: "PageNotFound",
    path: "/:pathMatch(.*)*",
    component: () => import("../pages/PageNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

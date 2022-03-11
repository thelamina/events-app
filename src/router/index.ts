import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../pages/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/About.vue"),
  },
  {
    name: "not-found",
    path: "/:pathMatch(.*)*",
    component: () => import("../pages/PageNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

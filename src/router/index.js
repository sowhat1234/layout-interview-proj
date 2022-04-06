import { createRouter, createWebHistory } from "vue-router";
import homepage from "@/views/homepage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: homepage,
    },
  ],
});

export default router;

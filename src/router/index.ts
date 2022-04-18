import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/rsvp",
      name: "rsvp",
      component: () => import("../views/RSVPView.vue")
    },
    {
      path: "/directions",
      name: "directions",
      component: () => import("../views/DirectionsView.vue")
    }
  ]
});

export default router;

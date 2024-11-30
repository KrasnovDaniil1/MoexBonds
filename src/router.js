import { createRouter, createWebHistory } from "vue-router";
import Favourites from "./views/Favourites.vue";
import Ofz from "./views/OFZ.vue";
import StableBonds from "./views/StableBonds.vue";
import Faq from "./views/FAQ.vue";

const routes = [
    { path: "/", component: Favourites },
    { path: "/ofz", component: Ofz },
    { path: "/stablebonds", component: StableBonds },
    { path: "/faq", component: Faq },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Favourites from "./views/Favourites.vue";
import Ofz from "./views/OFZ.vue";
import StableBonds from "./views/StableBonds.vue";

const routes = [
  { path: "/", component: Favourites },
  { path: "/ofz", component: Ofz },
  { path: "/stablebonds", component: StableBonds },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router)
app.mount("#app");

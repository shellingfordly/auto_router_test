import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { routes } from "vue-router/auto/routes";
import { setupLayouts } from "virtual:generated-layouts";
import { createRouter, createWebHistory } from "vue-router/auto";

const app = createApp(App);

export const router = createRouter({
  history: createWebHistory(),
  extendRoutes() {
    return setupLayouts(routes);
  },
});

app.use(router);

app.mount("#app");

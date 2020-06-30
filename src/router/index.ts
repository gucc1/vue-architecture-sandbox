import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeScreen from "../screens/HomeScreen.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: HomeScreen
  }
];

const router = new VueRouter({
  routes
});

export default router;

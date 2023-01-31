import * as VueRouter from "vue-router";

import Home from "../views/Home.vue";
import TodoApp from "../views/TodoApp.vue";
import Pokemon from "../views/Pokemon.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/todoapp", name: "Todo", component: TodoApp },
  { path: "/pokeapp", name: "Poke", component: Pokemon },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
});

export default router
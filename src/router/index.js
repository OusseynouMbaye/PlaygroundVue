import * as VueRouter from "vue-router";

import Home from "../views/Home.vue";
import TodoApp from "../views/TodoApp.vue";
import Pokemon from "../views/Pokemon.vue";
import PokemonDetails from "../views/PokemonDetails.vue"

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/todoapp", name: "Todo", component: TodoApp },
  { path: "/pokeapp", name: "Poke", component: Pokemon },
  { path: "/pokeapp/1", name: "PokemonDetail", component: PokemonDetails },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
});

export default router
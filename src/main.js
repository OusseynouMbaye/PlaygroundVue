import { createApp } from "vue";
import * as VueRouter from "vue-router";

import App from "./App.vue";
import Home from "./views/Home.vue";
import TodoApp from "./views/TodoApp.vue";
import Pokemon from "./views/Pokemon.vue";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/todoapp", name: "Todo", component: TodoApp },
    { path: "/pokeapp", name: "Poke", component: Pokemon },
  ],
});

/* add icons to the library */
library.add(fas, faTwitter, faTrashCan);

const app = createApp(App);
app.use(router);
app.component("fa", FontAwesomeIcon);

app.mount("#app");

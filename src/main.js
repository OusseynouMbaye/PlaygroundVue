import { createApp } from "vue";


import App from "./App.vue";
import router from "./router/index.js";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";



/* add icons to the library */
library.add(fas, faTwitter, faTrashCan);

const app = createApp(App);
app.use(router);
app.component("fa", FontAwesomeIcon);

app.mount("#app");

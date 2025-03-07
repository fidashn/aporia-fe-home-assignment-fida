import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import Axios from 'axios';



library.add(fas)

const app = createApp(App);

app.use(createPinia());
app
.use(router)
.config.globalProperties.$http = Axios;


app
.component("fa-icon", FontAwesomeIcon)
.mount("#app");


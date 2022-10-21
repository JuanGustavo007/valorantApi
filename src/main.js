import { createApp } from "vue";
import App from "./App.vue";
import router from "./rotas";
// import  Router  from "vue-router";

const Vue = createApp(App);
Vue.use(router);
Vue.mount("#app");

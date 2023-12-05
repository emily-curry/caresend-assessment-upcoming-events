import "buefy/dist/buefy.css";

import App from "@/App.vue";
import Buefy from "buefy";
import Vue from "vue";
import { PiniaVuePlugin, createPinia } from "pinia";

Vue.config.productionTip = false;

Vue.use(Buefy).use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
  render: (h) => h(App),
  pinia,
}).$mount("#app");

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes';
import { store } from "./store/store";

import SvgIcon from "./components/Svg-icon";



Vue.component('svg-icon', SvgIcon)

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

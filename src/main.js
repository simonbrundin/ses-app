import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes';
import { store } from "./store/store";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faStore } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import SvgIcon from "./components/Svg-icon";


library.add(faHome);
library.add(faCalendarAlt);
library.add(faStore);

Vue.component('font-awesome-icon', FontAwesomeIcon)
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

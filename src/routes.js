import Home from './Home.vue';
import Tabell from "./components/Table.vue";
import Slots from './components/Slots.vue'
import Coupons from './components/Coupons.vue'


export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/table',
    component: Tabell
  },
  {
    path: '/slots',
    component: Slots
  },
  {
    path: '/coupons',
    component: Coupons
  }
];
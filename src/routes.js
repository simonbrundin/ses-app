import Home from './Home.vue';
import Tabell from "./components/Table.vue";
import Luckor from './components/Slots.vue'

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
    component: Luckor
  }
];
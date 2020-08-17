import Home from './Home.vue';
import Tabell from "./components/Tabell.vue";
import Luckor from './components/Luckor.vue'

export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/tabell',
    component: Tabell
  },
  {
    path: '/luckor',
    component: Luckor
  }
];
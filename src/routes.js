import Home from './Home.vue';
import StandingsTable from "./components/StandingsTable.vue";
import Luckor from './components/Luckor.vue'

export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/tabell',
    component: StandingsTable
  },
  {
    path: '/luckor',
    component: Luckor
  }
];
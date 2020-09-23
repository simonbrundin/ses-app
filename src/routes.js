import Home from './Home.vue';
import Tabell from "./components/Table.vue";
import Slots from './components/Slots.vue'
import Coupons from './components/Coupons.vue'
import Coupon from './components/coupons/coupon.vue'
import Intersport from './components/coupons/InterSport.vue'
import Admin from './components/Admin.vue'
import AdminMatchGrid from './components/admin/MatchGrid.vue'
import MatchSchedule from './components/MatchSchedule.vue'


export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/admin',
    component: Admin
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
  },
  {
    path: '/coupon',
    component: Coupon
  },
  {
    path: '/schedule',
    component: MatchSchedule
  },
  {
    path: '/intersport',
    component: Intersport
  },
  {
    path: '/admin/match-grid',
    component: AdminMatchGrid
  }
];
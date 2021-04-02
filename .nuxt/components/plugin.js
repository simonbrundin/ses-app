import Vue from 'vue'
import { wrapFunctional } from './index'

const components = {
  Book: () => import('../../components/Book.vue' /* webpackChunkName: "components/book" */).then(c => wrapFunctional(c.default || c)),
  BottomMenu: () => import('../../components/BottomMenu.vue' /* webpackChunkName: "components/bottom-menu" */).then(c => wrapFunctional(c.default || c)),
  ContactInformation: () => import('../../components/ContactInformation.vue' /* webpackChunkName: "components/contact-information" */).then(c => wrapFunctional(c.default || c)),
  Coupons: () => import('../../components/Coupons.vue' /* webpackChunkName: "components/coupons" */).then(c => wrapFunctional(c.default || c)),
  Icon: () => import('../../components/Icon.vue' /* webpackChunkName: "components/icon" */).then(c => wrapFunctional(c.default || c)),
  MatchRegistration: () => import('../../components/MatchRegistration.vue' /* webpackChunkName: "components/match-registration" */).then(c => wrapFunctional(c.default || c)),
  Menu: () => import('../../components/Menu.vue' /* webpackChunkName: "components/menu" */).then(c => wrapFunctional(c.default || c)),
  NextGame: () => import('../../components/NextGame.vue' /* webpackChunkName: "components/next-game" */).then(c => wrapFunctional(c.default || c)),
  Notifications: () => import('../../components/Notifications.vue' /* webpackChunkName: "components/notifications" */).then(c => wrapFunctional(c.default || c)),
  PlayerCash: () => import('../../components/PlayerCash.vue' /* webpackChunkName: "components/player-cash" */).then(c => wrapFunctional(c.default || c)),
  SVGIcon: () => import('../../components/SVGIcon.vue' /* webpackChunkName: "components/s-v-g-icon" */).then(c => wrapFunctional(c.default || c)),
  Table: () => import('../../components/Table.vue' /* webpackChunkName: "components/table" */).then(c => wrapFunctional(c.default || c)),
  Waiting: () => import('../../components/Waiting.vue' /* webpackChunkName: "components/waiting" */).then(c => wrapFunctional(c.default || c)),
  AdminMatchGrid: () => import('../../components/admin/MatchGrid.vue' /* webpackChunkName: "components/admin-match-grid" */).then(c => wrapFunctional(c.default || c)),
  AdminMatchInfo: () => import('../../components/admin/MatchInfo.vue' /* webpackChunkName: "components/admin-match-info" */).then(c => wrapFunctional(c.default || c)),
  AdminPlayerGrid: () => import('../../components/admin/PlayerGrid.vue' /* webpackChunkName: "components/admin-player-grid" */).then(c => wrapFunctional(c.default || c)),
  AdminTodos: () => import('../../components/admin/Todos.vue' /* webpackChunkName: "components/admin-todos" */).then(c => wrapFunctional(c.default || c)),
  CouponsBiteline: () => import('../../components/coupons/Biteline.vue' /* webpackChunkName: "components/coupons-biteline" */).then(c => wrapFunctional(c.default || c)),
  CouponsCoupon: () => import('../../components/coupons/Coupon.vue' /* webpackChunkName: "components/coupons-coupon" */).then(c => wrapFunctional(c.default || c)),
  CouponsInterSport: () => import('../../components/coupons/InterSport.vue' /* webpackChunkName: "components/coupons-inter-sport" */).then(c => wrapFunctional(c.default || c)),
  NotificationsAddToCalendar: () => import('../../components/notifications/AddToCalendar.vue' /* webpackChunkName: "components/notifications-add-to-calendar" */).then(c => wrapFunctional(c.default || c)),
  NotificationsConfirmGame: () => import('../../components/notifications/ConfirmGame.vue' /* webpackChunkName: "components/notifications-confirm-game" */).then(c => wrapFunctional(c.default || c)),
  NotificationsLogin: () => import('../../components/notifications/Login.vue' /* webpackChunkName: "components/notifications-login" */).then(c => wrapFunctional(c.default || c)),
  NotificationsNavigationRow: () => import('../../components/notifications/NavigationRow.vue' /* webpackChunkName: "components/notifications-navigation-row" */).then(c => wrapFunctional(c.default || c)),
  NotificationsNotEnoughSlots: () => import('../../components/notifications/NotEnoughSlots.vue' /* webpackChunkName: "components/notifications-not-enough-slots" */).then(c => wrapFunctional(c.default || c)),
  NotificationsNotification: () => import('../../components/notifications/Notification.vue' /* webpackChunkName: "components/notifications-notification" */).then(c => wrapFunctional(c.default || c)),
  NotificationsPayment: () => import('../../components/notifications/Payment.vue' /* webpackChunkName: "components/notifications-payment" */).then(c => wrapFunctional(c.default || c)),
  NotificationsScheduleInstructions: () => import('../../components/notifications/ScheduleInstructions.vue' /* webpackChunkName: "components/notifications-schedule-instructions" */).then(c => wrapFunctional(c.default || c)),
  NotificationsWaitingForPlayers: () => import('../../components/notifications/WaitingForPlayers.vue' /* webpackChunkName: "components/notifications-waiting-for-players" */).then(c => wrapFunctional(c.default || c)),
  IconsIconCalendar: () => import('../../components/icons/IconCalendar.vue' /* webpackChunkName: "components/icons-icon-calendar" */).then(c => wrapFunctional(c.default || c)),
  IconsIconClock: () => import('../../components/icons/IconClock.vue' /* webpackChunkName: "components/icons-icon-clock" */).then(c => wrapFunctional(c.default || c)),
  IconsIconCup: () => import('../../components/icons/IconCup.vue' /* webpackChunkName: "components/icons-icon-cup" */).then(c => wrapFunctional(c.default || c)),
  IconsIconHome: () => import('../../components/icons/IconHome.vue' /* webpackChunkName: "components/icons-icon-home" */).then(c => wrapFunctional(c.default || c)),
  IconsIconStore: () => import('../../components/icons/IconStore.vue' /* webpackChunkName: "components/icons-icon-store" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}

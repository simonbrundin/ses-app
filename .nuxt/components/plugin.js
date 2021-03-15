import Vue from 'vue'

const components = {
  Book: () => import('../../components/Book.vue' /* webpackChunkName: "components/book" */).then(c => c.default || c),
  BottomMenu: () => import('../../components/BottomMenu.vue' /* webpackChunkName: "components/bottom-menu" */).then(c => c.default || c),
  ContactInformation: () => import('../../components/ContactInformation.vue' /* webpackChunkName: "components/contact-information" */).then(c => c.default || c),
  Coupons: () => import('../../components/Coupons.vue' /* webpackChunkName: "components/coupons" */).then(c => c.default || c),
  HelloWorld: () => import('../../components/HelloWorld.vue' /* webpackChunkName: "components/hello-world" */).then(c => c.default || c),
  Icon: () => import('../../components/Icon.vue' /* webpackChunkName: "components/icon" */).then(c => c.default || c),
  Login: () => import('../../components/Login.vue' /* webpackChunkName: "components/login" */).then(c => c.default || c),
  MatchRegistration: () => import('../../components/MatchRegistration.vue' /* webpackChunkName: "components/match-registration" */).then(c => c.default || c),
  Menu: () => import('../../components/Menu.vue' /* webpackChunkName: "components/menu" */).then(c => c.default || c),
  NextGame: () => import('../../components/NextGame.vue' /* webpackChunkName: "components/next-game" */).then(c => c.default || c),
  Notifications: () => import('../../components/Notifications.vue' /* webpackChunkName: "components/notifications" */).then(c => c.default || c),
  PlayerCash: () => import('../../components/PlayerCash.vue' /* webpackChunkName: "components/player-cash" */).then(c => c.default || c),
  SVGIcon: () => import('../../components/SVGIcon.vue' /* webpackChunkName: "components/svgicon" */).then(c => c.default || c),
  Table: () => import('../../components/Table.vue' /* webpackChunkName: "components/table" */).then(c => c.default || c),
  Auth: () => import('../../components/auth.vue' /* webpackChunkName: "components/auth" */).then(c => c.default || c),
  AdminTodos: () => import('../../components/admin/AdminTodos.vue' /* webpackChunkName: "components/admin-todos" */).then(c => c.default || c),
  AdminMatchGrid: () => import('../../components/admin/MatchGrid.vue' /* webpackChunkName: "components/admin-match-grid" */).then(c => c.default || c),
  AdminMatchInfo: () => import('../../components/admin/MatchInfo.vue' /* webpackChunkName: "components/admin-match-info" */).then(c => c.default || c),
  AdminPlayerGrid: () => import('../../components/admin/PlayerGrid.vue' /* webpackChunkName: "components/admin-player-grid" */).then(c => c.default || c),
  CouponsBiteline: () => import('../../components/coupons/Biteline.vue' /* webpackChunkName: "components/coupons-biteline" */).then(c => c.default || c),
  CouponsCoupon: () => import('../../components/coupons/Coupon.vue' /* webpackChunkName: "components/coupons-coupon" */).then(c => c.default || c),
  CouponsInterSport: () => import('../../components/coupons/InterSport.vue' /* webpackChunkName: "components/coupons-inter-sport" */).then(c => c.default || c),
  IconsIconCalendar: () => import('../../components/icons/IconCalendar.vue' /* webpackChunkName: "components/icons-icon-calendar" */).then(c => c.default || c),
  IconsIconClock: () => import('../../components/icons/IconClock.vue' /* webpackChunkName: "components/icons-icon-clock" */).then(c => c.default || c),
  IconsIconCup: () => import('../../components/icons/IconCup.vue' /* webpackChunkName: "components/icons-icon-cup" */).then(c => c.default || c),
  IconsIconHome: () => import('../../components/icons/IconHome.vue' /* webpackChunkName: "components/icons-icon-home" */).then(c => c.default || c),
  IconsIconStore: () => import('../../components/icons/IconStore.vue' /* webpackChunkName: "components/icons-icon-store" */).then(c => c.default || c),
  NotificationsAddToCalendar: () => import('../../components/notifications/AddToCalendar.vue' /* webpackChunkName: "components/notifications-add-to-calendar" */).then(c => c.default || c),
  NotificationsConfirmGame: () => import('../../components/notifications/ConfirmGame.vue' /* webpackChunkName: "components/notifications-confirm-game" */).then(c => c.default || c),
  NotificationsNavigationRow: () => import('../../components/notifications/NavigationRow.vue' /* webpackChunkName: "components/notifications-navigation-row" */).then(c => c.default || c),
  NotificationsNotEnoughSlots: () => import('../../components/notifications/NotEnoughSlots.vue' /* webpackChunkName: "components/notifications-not-enough-slots" */).then(c => c.default || c),
  NotificationsPayment: () => import('../../components/notifications/Payment.vue' /* webpackChunkName: "components/notifications-payment" */).then(c => c.default || c),
  NotificationsScheduleInstructions: () => import('../../components/notifications/ScheduleInstructions.vue' /* webpackChunkName: "components/notifications-schedule-instructions" */).then(c => c.default || c),
  NotificationsWaitingForPlayers: () => import('../../components/notifications/WaitingForPlayers.vue' /* webpackChunkName: "components/notifications-waiting-for-players" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}

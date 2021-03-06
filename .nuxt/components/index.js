export { default as Book } from '../../components/Book.vue'
export { default as BottomMenu } from '../../components/BottomMenu.vue'
export { default as ContactInformation } from '../../components/ContactInformation.vue'
export { default as Coupons } from '../../components/Coupons.vue'
export { default as Icon } from '../../components/Icon.vue'
export { default as MatchRegistration } from '../../components/MatchRegistration.vue'
export { default as Menu } from '../../components/Menu.vue'
export { default as NextGame } from '../../components/NextGame.vue'
export { default as Notifications } from '../../components/Notifications.vue'
export { default as PlayerCash } from '../../components/PlayerCash.vue'
export { default as SVGIcon } from '../../components/SVGIcon.vue'
export { default as Table } from '../../components/Table.vue'
export { default as Waiting } from '../../components/Waiting.vue'
export { default as AdminMatchGrid } from '../../components/admin/MatchGrid.vue'
export { default as AdminMatchInfo } from '../../components/admin/MatchInfo.vue'
export { default as AdminPlayerGrid } from '../../components/admin/PlayerGrid.vue'
export { default as AdminTodos } from '../../components/admin/Todos.vue'
export { default as CouponsBiteline } from '../../components/coupons/Biteline.vue'
export { default as CouponsCoupon } from '../../components/coupons/Coupon.vue'
export { default as CouponsInterSport } from '../../components/coupons/InterSport.vue'
export { default as IconsIconCalendar } from '../../components/icons/IconCalendar.vue'
export { default as IconsIconClock } from '../../components/icons/IconClock.vue'
export { default as IconsIconCup } from '../../components/icons/IconCup.vue'
export { default as IconsIconHome } from '../../components/icons/IconHome.vue'
export { default as IconsIconStore } from '../../components/icons/IconStore.vue'
export { default as NotificationsAddToCalendar } from '../../components/notifications/AddToCalendar.vue'
export { default as NotificationsConfirmGame } from '../../components/notifications/ConfirmGame.vue'
export { default as NotificationsLogin } from '../../components/notifications/Login.vue'
export { default as NotificationsNavigationRow } from '../../components/notifications/NavigationRow.vue'
export { default as NotificationsNotEnoughSlots } from '../../components/notifications/NotEnoughSlots.vue'
export { default as NotificationsNotification } from '../../components/notifications/Notification.vue'
export { default as NotificationsPayment } from '../../components/notifications/Payment.vue'
export { default as NotificationsScheduleInstructions } from '../../components/notifications/ScheduleInstructions.vue'
export { default as NotificationsWaitingForPlayers } from '../../components/notifications/WaitingForPlayers.vue'

export const LazyBook = import('../../components/Book.vue' /* webpackChunkName: "components/book" */).then(c => wrapFunctional(c.default || c))
export const LazyBottomMenu = import('../../components/BottomMenu.vue' /* webpackChunkName: "components/bottom-menu" */).then(c => wrapFunctional(c.default || c))
export const LazyContactInformation = import('../../components/ContactInformation.vue' /* webpackChunkName: "components/contact-information" */).then(c => wrapFunctional(c.default || c))
export const LazyCoupons = import('../../components/Coupons.vue' /* webpackChunkName: "components/coupons" */).then(c => wrapFunctional(c.default || c))
export const LazyIcon = import('../../components/Icon.vue' /* webpackChunkName: "components/icon" */).then(c => wrapFunctional(c.default || c))
export const LazyMatchRegistration = import('../../components/MatchRegistration.vue' /* webpackChunkName: "components/match-registration" */).then(c => wrapFunctional(c.default || c))
export const LazyMenu = import('../../components/Menu.vue' /* webpackChunkName: "components/menu" */).then(c => wrapFunctional(c.default || c))
export const LazyNextGame = import('../../components/NextGame.vue' /* webpackChunkName: "components/next-game" */).then(c => wrapFunctional(c.default || c))
export const LazyNotifications = import('../../components/Notifications.vue' /* webpackChunkName: "components/notifications" */).then(c => wrapFunctional(c.default || c))
export const LazyPlayerCash = import('../../components/PlayerCash.vue' /* webpackChunkName: "components/player-cash" */).then(c => wrapFunctional(c.default || c))
export const LazySVGIcon = import('../../components/SVGIcon.vue' /* webpackChunkName: "components/s-v-g-icon" */).then(c => wrapFunctional(c.default || c))
export const LazyTable = import('../../components/Table.vue' /* webpackChunkName: "components/table" */).then(c => wrapFunctional(c.default || c))
export const LazyWaiting = import('../../components/Waiting.vue' /* webpackChunkName: "components/waiting" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminMatchGrid = import('../../components/admin/MatchGrid.vue' /* webpackChunkName: "components/admin-match-grid" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminMatchInfo = import('../../components/admin/MatchInfo.vue' /* webpackChunkName: "components/admin-match-info" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminPlayerGrid = import('../../components/admin/PlayerGrid.vue' /* webpackChunkName: "components/admin-player-grid" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminTodos = import('../../components/admin/Todos.vue' /* webpackChunkName: "components/admin-todos" */).then(c => wrapFunctional(c.default || c))
export const LazyCouponsBiteline = import('../../components/coupons/Biteline.vue' /* webpackChunkName: "components/coupons-biteline" */).then(c => wrapFunctional(c.default || c))
export const LazyCouponsCoupon = import('../../components/coupons/Coupon.vue' /* webpackChunkName: "components/coupons-coupon" */).then(c => wrapFunctional(c.default || c))
export const LazyCouponsInterSport = import('../../components/coupons/InterSport.vue' /* webpackChunkName: "components/coupons-inter-sport" */).then(c => wrapFunctional(c.default || c))
export const LazyIconsIconCalendar = import('../../components/icons/IconCalendar.vue' /* webpackChunkName: "components/icons-icon-calendar" */).then(c => wrapFunctional(c.default || c))
export const LazyIconsIconClock = import('../../components/icons/IconClock.vue' /* webpackChunkName: "components/icons-icon-clock" */).then(c => wrapFunctional(c.default || c))
export const LazyIconsIconCup = import('../../components/icons/IconCup.vue' /* webpackChunkName: "components/icons-icon-cup" */).then(c => wrapFunctional(c.default || c))
export const LazyIconsIconHome = import('../../components/icons/IconHome.vue' /* webpackChunkName: "components/icons-icon-home" */).then(c => wrapFunctional(c.default || c))
export const LazyIconsIconStore = import('../../components/icons/IconStore.vue' /* webpackChunkName: "components/icons-icon-store" */).then(c => wrapFunctional(c.default || c))
export const LazyNotificationsAddToCalendar = import('../../components/notifications/AddToCalendar.vue' /* webpackChunkName: "components/notifications-add-to-calendar" */).then(c => wrapFunctional(c.default || c))
export const LazyNotificationsConfirmGame = import('../../components/notifications/ConfirmGame.vue' /* webpackChunkName: "components/notifications-confirm-game" */).then(c => wrapFunctional(c.default || c))
export const LazyNotificationsLogin = import('../../components/notifications/Login.vue' /* webpackChunkName: "components/notifications-login" */).then(c => wrapFunctional(c.default || c))
export const LazyNotificationsNavigationRow = import('../../components/notifications/NavigationRow.vue' /* webpackChunkName: "components/notifications-navigation-row" */).then(c => wrapFunctional(c.default || c))
export const LazyNotificationsNotEnoughSlots = import('../../components/notifications/NotEnoughSlots.vue' /* webpackChunkName: "components/notifications-not-enough-slots" */).then(c => wrapFunctional(c.default || c))
export const LazyNotificationsNotification = import('../../components/notifications/Notification.vue' /* webpackChunkName: "components/notifications-notification" */).then(c => wrapFunctional(c.default || c))
export const LazyNotificationsPayment = import('../../components/notifications/Payment.vue' /* webpackChunkName: "components/notifications-payment" */).then(c => wrapFunctional(c.default || c))
export const LazyNotificationsScheduleInstructions = import('../../components/notifications/ScheduleInstructions.vue' /* webpackChunkName: "components/notifications-schedule-instructions" */).then(c => wrapFunctional(c.default || c))
export const LazyNotificationsWaitingForPlayers = import('../../components/notifications/WaitingForPlayers.vue' /* webpackChunkName: "components/notifications-waiting-for-players" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
export function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

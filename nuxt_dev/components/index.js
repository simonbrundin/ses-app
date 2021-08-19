export { default as AddToHomeBtn } from '../../components/AddToHomeBtn.vue'
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

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
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

<template>
  <div id="app">
    <div
      v-if="this.$store.state.showMenuIcon"
      class="menu-icon"
      @click="showMenu"
    >
      Meny
    </div>
    <NextGame />
    <Menu v-if="this.$store.state.showHide.menu" />
    <notifications />
    <app-bottom-menu />
  </div>
</template>

<script>
import Notifications from '@/components/Notifications.vue'
import NextGame from '@/components/NextGame.vue'
import BottomMenu from '@/components/BottomMenu'
import Menu from '@/components/Menu'

import syncUserInfo from '@/services/syncUserInfo.js'

export default {
  name: 'App',
  components: {
    Menu,
    NextGame,
    notifications: Notifications,
    'app-bottom-menu': BottomMenu,
  },

  mixins: [syncUserInfo],
  data() {
    return {}
  },
  updated() {
    if (!this.$auth.isAuthenticated) {
      this.$auth.loginWithRedirect()
    } else {
      this.$auth.getTokenSilently()
    }
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect()
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      })
    },
    showMenu() {
      this.$store.state.showMenu = true
    },

    getAppVersion() {
      const forceReload = () =>
        navigator.serviceWorker
          .getRegistrations()
          .then((registrations) =>
            Promise.all(registrations.map((r) => r.unregister()))
          )
          .then(() => window.location.reload())
      const server = this.$store.state.server
      const body = JSON.stringify({
        appVersion: this.$store.appVersion,
      })
      fetch(server + '/getappversion', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body,
      })
        .then((response) => response.json())
        .then((promise) => {
          if (promise !== this.$store.state.appVersion) {
            forceReload()
          }
        })
    },
  },
}
</script>

<style lang="scss">
.menu-icon {
  color: $light;
}
</style>

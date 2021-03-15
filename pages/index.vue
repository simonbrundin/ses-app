<template>
  <div id="app">
    <nuxt-link v-if="$auth.loggedIn" to="/profile"
      ><img id="profile-image" :src="$auth.user.picture" />
      {{ $auth.user.sub }}
    </nuxt-link>
    <button v-if="!$auth.loggedIn" @click="$auth.loginWith('auth0')">
    Logga in
    </button>
    <div v-if="$store.state.showMenuIcon" class="menu-icon" @click="showMenu">
      Meny
    </div>
    <NextGame />
    <Menu v-if="$store.state.showHide.menu" />
    <notifications />
  </div>
</template>

<script>
import Notifications from '@/components/Notifications.vue';
import NextGame from '@/components/NextGame.vue';

import Menu from '@/components/Menu';

import syncUserInfo from '@/services/syncUserInfo.js';

export default {
  name: 'App',
  components: {
    Menu,
    NextGame,
    notifications: Notifications,
  },

  mixins: [syncUserInfo],
  data() {
    return {};
  },
  updated() {
    if (!this.$auth.isAuthenticated) {
      this.$auth.loginWithRedirect();
    } else {
      this.$auth.getTokenSilently();
    }
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
    showMenu() {
      this.$store.state.showMenu = true;
    },

    getAppVersion() {
      const forceReload = () =>
        navigator.serviceWorker
          .getRegistrations()
          .then((registrations) =>
            Promise.all(registrations.map((r) => r.unregister()))
          )
          .then(() => window.location.reload());
      const server = this.$store.state.server;
      const body = JSON.stringify({
        appVersion: this.$store.appVersion,
      });
      fetch(server + '/getappversion', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body,
      })
        .then((response) => response.json())
        .then((promise) => {
          if (promise !== this.$store.state.appVersion) {
            forceReload();
          }
        });
    },
  },
};
</script>

<style lang="scss">
.menu-icon {
  color: $light;
}
</style>

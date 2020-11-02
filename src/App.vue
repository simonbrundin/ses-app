<template>
  <div id="app">
    <div v-if="!$auth.loading">
      <!-- <div @hook:mounted="login"></div> -->
      <!-- show login when not authenticated -->
      <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
      <login-screen v-if="false"></login-screen>
      <!-- show logout when authenticated -->
      <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
      <!-- NEW - add a route to the profile page -->

      <!-- <router-link v-if="$auth.isAuthenticated" to="/profile"> -->
      <!-- <button>Profile</button> -->
      <!-- </router-link> -->
    </div>
    <div
      @click="showMenu"
      class="menu-icon"
      v-if="this.$store.state.showMenuIcon"
    >
      Meny
    </div>
    <Menu v-if="this.$store.state.showMenu"></Menu>
    <router-view></router-view>
    <notifications />
    <app-bottom-menu v-if="true"></app-bottom-menu>
  </div>
</template>

<script>
import Notifications from "./components/Notifications.vue";
import BottomMenu from "./components/BottomMenu";
import Menu from "./components/Menu";
import LoginScreen from "./views/LoginScreen.vue";
export default {
  name: "App",
  components: {
    Menu,
    notifications: Notifications,
    "app-bottom-menu": BottomMenu,
    "login-screen": LoginScreen,
  },
  data() {
    return {};
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
    showMenu: function () {
      this.$store.state.showMenu = true;
    },
  },
  updated: function () {
    if (!this.$auth.isAuthenticated) {
      this.$auth.loginWithRedirect();
    } else {
      this.$auth.getTokenSilently();
    }
  },
};
</script>

<style lang="scss">
.menu-icon {
  color: $light;
}
</style>

<template>
  <div id="home">
    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
      <!-- show logout when authenticated -->
      <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
    </div>
    <payment-swish></payment-swish>
    <next-game></next-game>

    <app-bottom-menu></app-bottom-menu>
    <player-cash></player-cash>
  </div>
</template>

<script>
import NextGame from "./components/NextGame.vue";
import BottomMenu from "./components/BottomMenu.vue";
import Payment from "./components/notifications/Payment.vue";
import PlayerCash from "./components/PlayerCash.vue";

export default {
  components: {
    "next-game": NextGame,
    "app-bottom-menu": BottomMenu,
    "player-cash": PlayerCash,
    "payment-swish": Payment,
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
  },
};
</script>

<style lang="scss" scope>
#home {
  margin: 10px 0 0 0;
}
</style>
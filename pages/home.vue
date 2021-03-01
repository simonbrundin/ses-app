<template>
  <div id="home">
    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div class="profile-image-container">
      <router-link to="/profile">
        <img :src="this.$auth.user.picture" id="profile-image"
      /></router-link>
    </div>
    <waiting-for-players></waiting-for-players>
    <payment-swish></payment-swish>
    <next-game></next-game>

    <app-bottom-menu></app-bottom-menu>
    <player-cash></player-cash>
  </div>
</template>

<script>
import NextGame from "../components/NextGame.vue";
import BottomMenu from "../components/BottomMenu.vue";
import Payment from "../components/notifications/Payment.vue";
import PlayerCash from "../components/PlayerCash.vue";
import WaitingForPlayers from "../components/notifications/WaitingForPlayers.vue";

export default {
  components: {
    WaitingForPlayers,
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
  // mounted: function () {
  //   this.$auth.loginWithRedirect();
  // },
};
</script>

<style lang="scss" scope>
#home {
  margin: 10px 0 0 0;
}

.profile-image-container {
  display: flex;
  justify-content: flex-end;
  padding: 10px 0 0 0;
}

#profile-image {
  width: 40px;
  border-radius: 100px;
  justify-self: end;
}
</style>

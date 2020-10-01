<template>
  <div id="home">
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
};
</script>

<style lang="scss" scope>
#home {
  margin: 10px 0 0 0;
}
</style>
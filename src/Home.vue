<template>
  <div id="home">
    <next-game></next-game>
    <payment-swish></payment-swish>
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

<style>
</style>
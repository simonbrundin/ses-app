<template>
  <div id="home">
    <next-game></next-game>
    <app-bottom-menu></app-bottom-menu>
  </div>
</template>

<script>
import NextGame from "./components/NextGame.vue";
import BottomMenu from "./components/BottomMenu.vue";
export default {
  components: {
    "next-game": NextGame,
    "app-bottom-menu": BottomMenu,
  },
};
</script>

<style>
</style>
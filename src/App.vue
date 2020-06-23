<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Notifications />
    <NextGame />
    <button>Boka match</button>
    <StandingsTable />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { Notifications } from "./components/Notifications.vue";
import NextGame from "./components/NextGame.vue";
import StandingsTable from "./components/StandingsTable.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Notifications,
    NextGame,
    StandingsTable
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

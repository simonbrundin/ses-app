<template>
  <div id="app">
    <Login />
    <Menu />
    <Notifications />
    <NextGame />
    <StandingsTable />

    <Book />
  </div>
</template>

<script>
import Notifications from "./components/Notifications.vue";
import NextGame from "./components/NextGame.vue";
import StandingsTable from "./components/StandingsTable.vue";
import Menu from "./components/Menu.vue";
import Login from "./components/Login.vue";
import Book from "./components/Book.vue";

export default {
  name: "App",
  components: {
    Notifications,
    NextGame,
    StandingsTable,
    Menu,
    Login,
    Book
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin: 20px;
}
</style>

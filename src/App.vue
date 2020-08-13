<template>
  <div id="app">
    <!-- <Login /> -->
    <Menu />
    <PlayerRegistation />
    <Notifications />
    <StandingsTable />
    <NextGame />

    <!-- <AvailabilityCalendar /> -->

    <!-- <Book /> -->
  </div>
</template>

<script>
import Notifications from "./components/Notifications.vue";
import PlayerRegistation from "./components/PlayerRegistration.vue";
import NextGame from "./components/NextGame.vue";
import StandingsTable from "./components/StandingsTable.vue";
import Menu from "./components/Menu.vue";
// import Login from "./components/Login.vue";
// import Book from "./components/Book.vue";
// import AvailabilityCalendar from "./components/AvailabilityCalendar.vue";

export default {
  name: "App",
  components: {
    PlayerRegistation,
    Notifications,
    NextGame,
    StandingsTable,
    Menu,
    // Login
    // Book
    // AvailabilityCalendar
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style>
#app {
}
</style>

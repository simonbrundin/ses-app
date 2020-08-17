<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Login /> -->
    <!-- <Menu /> -->
    <notifications />

    <!-- <AvailabilityCalendar />
    <MatchRegistration />
    <StandingsTable />
    <NextGame />-->

    <!-- <Book /> -->
  </div>
</template>

<script>
import Notifications from "./components/Notifications.vue";

/* import MatchRegistration from "./components/MatchRegistration.vue";
import NextGame from "./components/NextGame.vue";
import StandingsTable from "./components/StandingsTable.vue";
// import Login from "./components/Login.vue";
// import Book from "./components/Book.vue";
/* import AvailabilityCalendar from "./components/AvailabilityCalendar.vue"; */

export default {
  name: "App",
  components: {
    notifications: Notifications,

    /* MatchRegistration, */
    // NextGame,
    // StandingsTable,
    // // Login
    // // Book
    // AvailabilityCalendar,
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

.light {
  color: white;
}
</style>

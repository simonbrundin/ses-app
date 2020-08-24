<template>
  <div id="app">
    <router-view></router-view>
    <notifications />
    <app-bottom-menu v-if="true"></app-bottom-menu>
  </div>
</template>

<script>
import Notifications from "./components/Notifications.vue";
import BottomMenu from "./components/BottomMenu";
export default {
  name: "App",
  components: {
    notifications: Notifications,
    "app-bottom-menu": BottomMenu,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
</style>

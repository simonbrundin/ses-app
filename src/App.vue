<template>
  <div id="app">
    <router-view></router-view>
    <notifications />
  </div>
</template>

<script>
import Notifications from "./components/Notifications.vue";

export default {
  name: "App",
  components: {
    notifications: Notifications,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
#app {
  padding: 20px 10px 0;
}
</style>

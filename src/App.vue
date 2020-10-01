<template>
  <div id="app">
    <div
      @click="showMenu"
      class="menu-icon"
      v-if="this.$store.state.showMenuIcon"
    >
      Meny
    </div>
    <Menu v-if="this.$store.state.showMenu"></Menu>
    <router-view></router-view>
    <notifications />
    <app-bottom-menu v-if="true"></app-bottom-menu>
  </div>
</template>

<script>
import Notifications from "./components/Notifications.vue";
import BottomMenu from "./components/BottomMenu";
import Menu from "./components/Menu";
export default {
  name: "App",
  components: {
    Menu,
    notifications: Notifications,
    "app-bottom-menu": BottomMenu,
  },
  data() {
    return {};
  },
  methods: {
    showMenu: function () {
      this.$store.state.showMenu = true;
    },
  },
};
</script>

<style lang="scss">
.menu-icon {
  color: $light;
}
</style>

<template>
  <div id="menu" v-if="true">
    <h1 class="menu-title">Menu</h1>
    <ul @click="hideMenu">
      <router-link to="/table" class="menu-link">Tabell</router-link>
      <router-link to="/schedule" class="menu-link">Spelschema</router-link>
      <router-link to="/userslots" class="menu-link">Valda tider</router-link>
      <router-link to="/coupons" class="menu-link"> Rabatter</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    hideMenu: function () {
      this.$store.state.showMenu = false;
    },
  },
};
</script>

<style lang="scss" scoped>
#menu {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: $dark;
  z-index: 100;
}

.menu-title {
  color: white;
  text-align: center;
}

ul {
  margin: 0;
  padding: 0;
}

.menu-link {
  color: white;
  text-decoration: none;
  list-style-type: none;
}
</style>
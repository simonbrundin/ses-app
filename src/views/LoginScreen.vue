<template>
  <div id="login-screen">
    <h1>Du behöver logga in</h1>
    <button v-if="!$auth.isAuthenticated" @click="login">Logga in</button>
  </div>
</template>

<script>
export default {
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
};
</script>

<style lang="scss">
#login-screen {
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;

  left: 0;
  margin: 0;
  z-index: 100;
  background: $dark;
  color: $light;
}
</style>
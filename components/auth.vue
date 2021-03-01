<template>
  <div v-if="!$auth.loading">
    <div @hook:mounted="login"></div>
    <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
    <div @DOMNodeInserted="getAppVersion" />
    <div
      v-if="$auth.isAuthenticated"
      @DOMNodeInserted="getUserInfo"
      @click="getUserInfo"
    />

    <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
    NEW - add a route to the profile page

    <router-link v-if="$auth.isAuthenticated" to="/profile">
      <button>Profile</button>
    </router-link>

    <contact-info
      v-if="
        $auth.isAuthenticated &&
        (this.$store.state.user.firstName === '' ||
          this.$store.state.user.lastName === '' ||
          this.$store.state.user.email === '' ||
          this.$store.state.user.tel === '' ||
          this.$store.state.showContactInfo)
      "
    />
    <contact-info />
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>

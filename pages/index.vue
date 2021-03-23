<template>
  <div id="app">
    <nuxt-link v-if="$auth.loggedIn" to="/profile">
      <img id="profile-image" :src="$auth.user.picture" class="round" />
    </nuxt-link>
    <button v-else @click="$auth.loginWith('auth0')">Logga in</button>

    <div v-if="$store.state.showMenuIcon" class="menu-icon" @click="showMenu">
      Meny
    </div>
    <Waiting v-if="$store.state.upcomingGames.length === 0" />

    <NextGame v-if="false" />
    <MatchRegistration v-if="false" />

    <Menu v-if="$store.state.showHide.menu" />
  </div>
</template>

<script>
export default {
  mounted() {
    this.isUserInfoFilled();
  },
  methods: {
    isUserInfoFilled() {
      if (
        this.$store.state.user.firstname === '' ||
        this.$store.state.user.lastname === '' ||
        this.$store.state.user.email === '' ||
        this.$store.state.user.tel === ''
      ) {
        this.$store.commit('notifications/userInfo', true);
      } else {
        this.$store.commit('notifications/userInfo', false);
      }
    },
  },
};
</script>

<style lang="scss"></style>

<template>
  <div id="app">
    <nuxt-link v-if="$auth.loggedIn" to="/profile">
      <img id="profile-image" :src="$auth.user.picture" class="round" />
    </nuxt-link>
    <button v-else @click="$auth.loginWith('auth0')">Logga in</button>
    <div v-if="$store.state.showMenuIcon" class="menu-icon" @click="showMenu">
      Meny
    </div>
    <NextGame />
    <MatchRegistration />

    <Menu v-if="$store.state.showHide.menu" />
    <Notifications />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>

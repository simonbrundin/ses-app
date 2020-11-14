<template>
  <div>
    <router-link to="/">
      <svg-icon icon="home" :hasFill="true" class="icon-calendar"></svg-icon>
      <div class="menu-item-text gold" v-if="showIconTexts">Start</div>
    </router-link>
    <!-- <div class="profile-image-container">
      <router-link to="/">
        <img :src="this.$auth.user.picture" id="profile-image"
      /></router-link>
    </div> -->
    <div>
      <img :src="this.$auth.user.picture" id="profile-image" />
      <h2>{{ $auth.user.name }}</h2>
      <p>{{ $auth.user.email }}</p>
    </div>
    <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
    <div>
      <pre>{{ JSON.stringify($auth.user, null, 2) }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
};
</script>

<style lang="scss" scope>
.profile-image-container {
  display: flex;
  justify-content: flex-end;
  padding: 10px 0 0 0;
}

#profile-image {
  width: 40px;
  border-radius: 100px;
  justify-self: end;
}
</style>
<template>
  <div>
    <button @click="$auth.logout()">Logga ut</button>
    <nuxt-link v-if="$auth.loggedIn" to="admin">
      <button v-if="($auth.user.sub = 'facebook|3005022352930664')">
        Admin
      </button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>

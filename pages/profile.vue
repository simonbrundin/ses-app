<template>
  <div>
    <nuxt-link to="/">
      <button>Tillbaka</button>
    </nuxt-link>
    <button @click="$auth.logout()">Logga ut</button>
    <nuxt-link v-if="$auth.loggedIn" to="/admin">
      <button v-if="$auth.user.sub === 'facebook|3373827679383461'">
        Admin
      </button>
    </nuxt-link>
    <ContactInformation />
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

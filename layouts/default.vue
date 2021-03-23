<template>
  <div>
    <div class="container">
      <nuxt />
    </div>
    <Notifications />
    <BottomMenu />
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  mounted() {
    this.getUser();
    this.checkNotifications();
  },
  methods: {
    async getUser() {
      const userObject = await this.$axios.$get(
        process.env.BACKEND_SERVER + '/user'
      );
      this.$store.commit('user', userObject[0]);
    },
    checkNotifications() {
      if (
        this.$store.state.user.oddslots < 6 ||
        this.$store.state.user.evenslots < 6
      ) {
        this.$store.commit('notifications/slots', true);
      }
    },
    login() {
      if (!this.$auth.isAuthenticated) {
        this.$auth.loginWithRedirect();
      } else {
        this.$auth.getTokenSilently();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
}
</style>

<template>
  <div>
    <div class="container">
      <Notifications />
      <nuxt />
    </div>
    <BottomMenu />
  </div>
</template>

<script>
import Notifications from '@/components/Notifications.vue';
import BottomMenu from '@/components/BottomMenu.vue';
export default {
  components: {
    Notifications,
    BottomMenu,
  },

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
      this.$store.commit('user', userObject);
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
      if (!this.$auth.loggedIn) {
        this.$auth.loginWith('auth0');
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

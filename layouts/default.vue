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
  },
  methods: {
    async getUser() {
      const userObject = await this.$axios.$get('http://localhost:4000/user');
      this.$store.commit('user', userObject);
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

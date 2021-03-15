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
    if (!this.$auth.loggedIn) {
      this.$auth.loginWith('auth0');
    }
  },
};
</script>

<style lang="scss" scope>
.container {
  padding: 20px;
}
</style>

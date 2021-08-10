<template>
  <div>
    <div class="container">
      <nuxt />
    </div>

    <AddToHomeBtn />
    <Notifications />
    <BottomMenu />
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  created() {
    this.requestData();
  },
  mounted() {
    this.checkNotifications();
    this.login();
  },
  methods: {
    async requestData() {
      await this.getUser();
    },
    async getUser() {
      const userObject = await this.$axios.$get('/user');
      this.$store.commit('user', userObject[0]);
      if (
        this.$store.state.user.firstname === '' ||
        this.$store.state.user.lastname === '' ||
        this.$store.state.user.email === '' ||
        this.$store.state.user.tel === ''
      ) {
        this.$store.commit('notifications/userInfo', true);
      }
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
      try {
        if (!this.$auth.loggedIn) {
          this.$auth.$auth.loginWith('auth0');
        }
      } catch (error) {}
    },
    // async checkUpdate() {
    //   const workbox = await window.$workbox;
    //   if (workbox) {
    //     workbox.addEventListener('installed', (event) => {
    //       // If we don't do this we'll be displaying the notification after the initial installation, which isn't perferred.
    //       if (event.isUpdate) {
    //         // whatever logic you want to use to notify the user that they need to refresh the page.
    //       }
    //     });
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
}
</style>

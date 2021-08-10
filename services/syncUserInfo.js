export default {
  methods: {
    getUserInfo() {
      const server = this.$store.state.server;
      let userInfo = [];
      if (this.$auth.isAuthenticated) {
        const body = JSON.stringify({
          socialID: this.$auth.user.sub,
        });

        fetch(server + '/getuser', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body,
        })
          .then((response) => response.json())
          .then((promise) => {
            userInfo = promise[0];
            this.$store.commit('userInfo', userInfo);
          });
      }
    },
  },
};

<template>
  <div><button @click="login">Logga in</button></div>
</template>

<script>
export default {
  methods: {
    async login() {
      await this.$auth.loginWith('auth0');
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

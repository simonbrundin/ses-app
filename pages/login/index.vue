<template>
  <div><button @click="$auth.loginWith('auth0')">Logga in</button></div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  mounted() {
    this.$auth.loginWith('auth0');
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

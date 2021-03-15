<template>
  <div><button @click="$auth.logout()">Logga ut</button>{{ $auth.token }}</div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>

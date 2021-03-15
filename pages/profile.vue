<template>
  <div>
    <img id="profile-image" :src="$auth.user.picture" />
    <button @click="$auth.logout()">Logga ut</button>
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

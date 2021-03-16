<template>
  <div class="flex-column">
    Du måste logga in via Facebook innan du kan använda appen
    <button @click="$auth.loginWith('auth0')">Logga in</button>
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

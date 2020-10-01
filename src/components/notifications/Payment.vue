<template>
  <div id="notification-payment" v-if="false">
    <p>
      Det saknas en betalning från dig på
      <strong>{{ this.$store.state.dept }} kr</strong>
    </p>
    <button>Betala nu</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
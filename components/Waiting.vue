<template>
  <div v-if="$store.state.user.dept > 0" id="notification-payment" class="card">
    <img src="../../assets/swish.png" alt="" class="swish-img" />
    <div>Betala för senaste matchen :)</div>
    <button @click="pay">Betala nu</button>
  </div>
</template>

<script>
export default {
  methods: {
    pay() {
      this.$store.commit('user/resetDept');
    },
  },
};
</script>

<style lang="scss" scoped>
#notification-payment {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#notification-payment div {
  text-align: center;
  margin: 20px;
}

.swish-img {
  width: 150px;
  height: 198px;
  justify-self: center;
}
</style>

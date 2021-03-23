<template>
  <div id="notification-payment" class="card">
    <div>
      Just nu väntar vi på att övriga spelare i din serie ska fylla i sina
      scheman så vi kan boka tider. Du kommer få ett sms när alla fyllt i och vi
      bokat alla tider.
    </div>
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

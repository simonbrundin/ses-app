<template>
  <div id="notification-payment" class="card" v-if="true">
    <img src="../../assets/swish.png" alt="" class="swish-img" />
    <div>Betala för förra matchen :)</div>
    <button>Betala nu</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
#notification-payment {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#notification-payment div {
  text-align: center;
  margin: 20px;
}

.swish-img {
  width: 150px;
  height: 198px;
  margin: auto;
}
</style>
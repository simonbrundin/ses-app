<template>
  <div id="notification-payment" class="card" v-if="true">
    <img src="../../assets/swish.png" alt="" class="" />
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

#notification-payment img {
  width: 50%;
  margin: auto;
}
</style>
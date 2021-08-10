<template>
  <div class="light-card waiting-for-players">
    <div class="info-row">
      <div class="text-column">
        <h3 class="dark">Nu är det nära</h3>
        <p>
          Alla spelare ska fylla i tider och sedan ska de bokas. Du får ett sms
          när spelschemat är satt.
        </p>
      </div>
      <img src="../../assets/alert.png" alt="" class="icon" />
    </div>
    <!-- <button @click="dismissInstructions">Okej</button> -->
  </div>
</template>

<script>
export default {
  methods: {
    dismissInstructions() {
      this.$store.commit('NotEnoughSlots', false);
    },
  },
};
</script>

<style lang="scss" scoped>
.info-row {
  display: flex;
  flex-direction: row;
}
.text-column {
  display: flex;
  flex-direction: column;
}

.waiting-for-players {
  margin: 0 0 20px 0;
}

#waiting-for-players div {
  text-align: center;
  margin: 20px;
}

.icon {
  width: 40px;
  height: 100%;
  padding: 20px;
  @include shadow;
  border-radius: 20px;
}
</style>

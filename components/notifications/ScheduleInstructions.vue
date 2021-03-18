<template>
  <div id="notification-schedule-instructions" class="notification">
    <img src="../../assets/alert.png" alt="" class="alert-img" />

    <h1>Viktig information</h1>
    <div>
      För att spelschemat ska bli så enkelt så möjligt att sätta önskar vi att
      du fyller i så många tider som möjligt. Framför allt om du kan spela
      dagtid.
    </div>

    <ul>
      <li>Fyll i både udda och jämna veckor</li>
      <li>Minst fyra olika dagar båda veckorna</li>
      <li>Minst 2 timmar per vald dag</li>
    </ul>
    <button
      @click="
        $store.showHide.scheduleInstructions = !$store.showHide
          .scheduleInstructions
      "
    >
      Okej
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    dismissInstructions() {
      this.$store.showHide.commit('showScheduleInstructions', false);
    },
  },
};
</script>

<style lang="scss" scoped>
#notification-schedule-instructions div {
  margin: 20px;
}

#notification-schedule-instructions h1 {
  color: $dark;
}

#notification-schedule-instructions li {
  color: $dark;
  text-align: left;
}

.alert-img {
  width: 200px;

  margin: auto;
}
</style>

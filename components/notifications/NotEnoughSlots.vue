<template>
  <div id="not-enough-slots" class="card" v-if="true">
    <img src="../../assets/alert.png" alt="" class="alert-img" />
    <div><strong>Fyll i fler tider :)</strong></div>
    <ul>
      <li>Fyll i både udda och jämna veckor</li>
      <li>Minst fyra olika dagar båda veckorna</li>
      <li>Minst 2 timmar per vald dag</li>
    </ul>
    <button @click="dismissInstructions">Okej</button>
  </div>
</template>

<script>
export default {
  methods: {
    dismissInstructions: function () {
      this.$store.commit("NotEnoughSlots", false);
    },
  },
};
</script>

<style lang="scss" scope>
#not-enough-slots {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#not-enough-slots div {
  text-align: center;
  margin: 20px;
}

.alert-img {
  width: 200px;

  margin: auto;
}
</style>
<template>
  <div id="waiting-for-players" class="card" v-if="true">
    <img src="../../assets/alert.png" alt="" class="alert-img" />
    <div>
      Just nu väntar vi på att alla i din serie ska fylla i sina önsketider.
    </div>
    <div>
      Under tiden kan du bekanta dig med appen. När alla fyllt i kommer du få
      ett meddelande och ditt spelschema kommer visas
    </div>

    <!-- <button @click="dismissInstructions">Okej</button> -->
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
#waiting-for-players {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#waiting-for-players div {
  text-align: center;
  margin: 20px;
}

.alert-img {
  width: 200px;

  margin: auto;
}
</style>
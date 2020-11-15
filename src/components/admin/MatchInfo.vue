<template>
  <div id="match-info">
    <div>Match ID: {{ this.$store.state.admin.selectedMatch.ID }}</div>

    <div>
      {{ this.$store.state.admin.selectedMatch.hemma1 }} &
      {{ this.$store.state.admin.selectedMatch.hemma2 }} -
      {{ this.$store.state.admin.selectedMatch.pointshemma }}
    </div>

    <div>
      {{ this.$store.state.admin.selectedMatch.borta1 }} &
      {{ this.$store.state.admin.selectedMatch.borta2 }} -
      {{ this.$store.state.admin.selectedMatch.pointsborta }}
    </div>
    <div>
      <button @click="addPoints">+</button>
      <button @click="subtractPoints">-</button>
    </div>
    <button @click="saveMatchData">Stäng</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      server: this.$store.state.server,
    };
  },
  methods: {
    saveMatchData: function () {
      this.$store.state.admin.showMatchWindow = false;
    },
    addPoints: function () {
      if (this.$store.state.admin.selectedMatch.pointshemma === 6) {
        null;
      } else {
        this.$store.state.admin.selectedMatch.pointshemma++;
        this.$store.state.admin.selectedMatch.pointshemma++;
        switch (this.$store.state.admin.selectedMatch.pointshemma) {
          case 2:
            this.$store.state.admin.selectedMatch.pointsborta = 4;
            break;
          case 4:
            this.$store.state.admin.selectedMatch.pointsborta = 2;
            break;
          case 6:
            this.$store.state.admin.selectedMatch.pointsborta = 0;
            break;

          default:
            break;
        }
      }
    },
    subtractPoints: function () {
      if (this.$store.state.admin.selectedMatch.pointsborta === 6) {
        null;
      } else {
        this.$store.state.admin.selectedMatch.pointsborta++;
        this.$store.state.admin.selectedMatch.pointsborta++;
        this.$store.state.admin.selectedMatch.pointshemma--;
        this.$store.state.admin.selectedMatch.pointshemma--;
      }
    },
  },
};
</script>

<style lang="scss">
#match-info {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  margin: 0;
  padding: 0;
  text-align: center;
}
</style>
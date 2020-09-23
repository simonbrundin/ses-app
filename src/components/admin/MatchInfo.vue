<template>
  <div id="match-info">
    <div>Match ID: {{this.$store.state.admin.selectedMatch.id}}</div>

    <div>{{this.$store.state.admin.selectedMatch.h1}} & {{this.$store.state.admin.selectedMatch.h2}} - {{this.$store.state.admin.selectedMatch.hp}}</div>

    <div>{{this.$store.state.admin.selectedMatch.a1}} & {{this.$store.state.admin.selectedMatch.a2}} - {{this.$store.state.admin.selectedMatch.ap}}</div>
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
      if (this.$store.state.admin.selectedMatch.hp === 6) {
        null;
      } else {
        this.$store.state.admin.selectedMatch.hp++;
        this.$store.state.admin.selectedMatch.hp++;
        switch (this.$store.state.admin.selectedMatch.hp) {
          case 2:
            this.$store.state.admin.selectedMatch.ap = 4;
            break;
          case 4:
            this.$store.state.admin.selectedMatch.ap = 2;
            break;
          case 6:
            this.$store.state.admin.selectedMatch.ap = 0;
            break;

          default:
            break;
        }
      }
    },
    subtractPoints: function () {
      if (this.$store.state.admin.selectedMatch.ap === 6) {
        null;
      } else {
        this.$store.state.admin.selectedMatch.ap++;
        this.$store.state.admin.selectedMatch.ap++;
        this.$store.state.admin.selectedMatch.hp--;
        this.$store.state.admin.selectedMatch.hp--;
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
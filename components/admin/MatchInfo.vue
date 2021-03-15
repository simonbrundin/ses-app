<template>
  <div id="match-info">
    <div>Match ID: {{ $store.state.admin.selectedMatch.ID }}</div>

    <div>
      {{
        $store.state.admin.selectedMatchPlayers[
          $store.state.admin.selectedMatch.hemma1
        ].firstname
      }}
      {{
        $store.state.admin.selectedMatchPlayers[
          $store.state.admin.selectedMatch.hemma1
        ].lastname
      }}
      &
      {{
        $store.state.admin.selectedMatchPlayers[
          $store.state.admin.selectedMatch.hemma2
        ].firstname
      }}
      {{
        $store.state.admin.selectedMatchPlayers[
          $store.state.admin.selectedMatch.hemma2
        ].lastname
      }}
      -
      {{ $store.state.admin.selectedMatch.pointshemma }}
    </div>

    <div>
      {{
        $store.state.admin.selectedMatchPlayers[
          $store.state.admin.selectedMatch.borta1
        ].firstname
      }}
      {{
        $store.state.admin.selectedMatchPlayers[
          $store.state.admin.selectedMatch.borta1
        ].lastname
      }}
      &
      {{
        $store.state.admin.selectedMatchPlayers[
          $store.state.admin.selectedMatch.borta2
        ].firstname
      }}
      {{
        $store.state.admin.selectedMatchPlayers[
          $store.state.admin.selectedMatch.borta2
        ].lastname
      }}
      -
      {{ $store.state.admin.selectedMatch.pointsborta }}
    </div>
    <div>
      <button @click="changePoints">Ändra poäng</button>
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
    saveMatchData() {
      const body = JSON.stringify({
        league: this.$store.state.admin.selectedLeague,
        ID: this.$store.state.admin.selectedMatch.ID,
        pointshemma: this.$store.state.admin.selectedMatch.pointshemma,
        pointsborta: this.$store.state.admin.selectedMatch.pointsborta,
      });

      fetch(this.$store.state.server + '/updatematch', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body,
      })
        .then((response) => response.json())
        .then((promise) => {
          this.$store.state.admin.showMatchWindow = false;
        });
    },

    changePoints() {
      switch (this.$store.state.admin.selectedMatch.pointsborta) {
        case 0:
          if (this.$store.state.admin.selectedMatch.pointshemma === 6) {
            this.$store.commit('addHomePoints', 4);
            this.$store.commit('addAwayPoints', 2);
          } else {
            this.$store.commit('addHomePoints', 6);
            this.$store.commit('addAwayPoints', 0);
          }

          break;
        case 2:
          this.$store.commit('addHomePoints', 2);
          this.$store.commit('addAwayPoints', 4);
          break;
        case 4:
          this.$store.commit('addHomePoints', 0);
          this.$store.commit('addAwayPoints', 6);
          break;
        case 6:
          this.$store.commit('addHomePoints', 0);
          this.$store.commit('addAwayPoints', 0);
          break;
        default:
          break;
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

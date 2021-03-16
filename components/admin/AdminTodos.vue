<template>
  <div id="admin-todos">
    <button @click="updateTodos">Uppdatera</button>
    <h1>Att göra:</h1>
    <div v-if="playersWithoutLeague.length > 0">
      <div>
        <u>
          Lägg in dessa spelare i en serie i databasen och bocka av dem i
          sheetsarket
        </u>
      </div>
      <br />
      <div v-for="(player, index) in playersWithoutLeague" :key="index">
        {{ player }}
      </div>
      <br />
    </div>
    <div v-if="fullLeagues.length > 0">
      <div>
        <u
          >Nu har alla i serien fyllt i sina scheman. Dags att skapa spelscheman
          och boka upp tiderna. Kör creatematches och skicka en fråga till
          updatecommonslots på dessa serier
        </u>
      </div>
      <br />
      <div v-for="(serie, index) in fullLeagues" :key="index">
        {{ serie }}
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      playersWithoutLeague: [],
      fullLeagues: [],
    };
  },
  methods: {
    getPlayersWithoutLeague() {
      fetch(this.$store.state.server + '/players-without-league')
        .then((response) => response.json())
        .then((promise) => (this.playersWithoutLeague = promise));
    },
    getFullLeagues() {
      fetch(this.$store.state.server + '/full-leagues')
        .then((response) => response.json())
        .then((promise) => (this.fullLeagues = promise));
    },
    updateTodos() {
      this.getPlayersWithoutLeague();
      this.getFullLeagues();
    },
  },
};
</script>

<style lang="scss" scoped>
#admin-todos div {
  color: $app-font-color;
}
</style>

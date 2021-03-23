<template>
  <div id="admin-todos">
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
  mounted() {
    this.getPlayersWithoutLeague();
    this.getFullLeagues();
  },
  methods: {
    async getPlayersWithoutLeague() {
      const players = await this.$axios.$get(
        process.env.BACKEND_SERVER + '/admin/todos/players-without-league'
      );
      this.playersWithoutLeague = players;
    },

    async getFullLeagues() {
      const fullLeagues = await this.$axios.$get(
        process.env.BACKEND_SERVER + '/full-leagues'
      );
      this.fullLeagues = fullLeagues;
    },
  },
};
</script>

<style lang="scss" scoped>
#admin-todos div {
  color: $app-font-color;
}
</style>

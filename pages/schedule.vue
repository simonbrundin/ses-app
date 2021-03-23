<template>
  <div id="match-schedule">
    <h1 class="title light">Ditt spelschema</h1>
    <div
      v-for="(match, index) in $store.state.upcomingGames"
      :key="index"
      class="card match"
    >
      <div class="date-text">
        {{ match.bookedtime }}
        <!-- <div>Match: {{ match.id }}</div> -->
      </div>
      <button class="cancel-button">Avboka</button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getUpcomingGames();
  },
  methods: {
    async getUpcomingGames() {
      const upcomingGames = await this.$axios.$get(
        process.env.BACKEND_SERVER +
          '/upcoming-games/' +
          this.$store.state.user.city +
          '/' +
          this.$store.state.user.league
      );
      upcomingGames.forEach((game) => {
        const bookedtime = new Date(game.bookedtime);
        const month = bookedtime.getMonth();
        const date = bookedtime.getDate();
        const hours = bookedtime.getHours();
        const minutes = bookedtime.getMinutes();
        game.bookedtime = date + '/' + month + ' - ' + hours + ':' + minutes;
      });

      this.$store.commit('upcomingGames', upcomingGames);
    },
  },
};
</script>

<style lang="scss" scoped>
#match-schedule {
  margin: 0 0 72px 0;
}

.match {
  margin: 0 0 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.date-text {
  font-weight: 300;
  color: $light;
}

.cancel-button {
  text-align: right;
  font-size: 14px;
}

#match-schedule .card {
  background: $dark-grey;
}
</style>

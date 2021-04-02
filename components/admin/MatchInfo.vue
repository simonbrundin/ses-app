<template>
  <div id="match-info">
    <div>Liga: {{ $store.state.admin.selectedLeague }}</div>
    <div>Match ID: {{ $store.state.admin.selectedMatch.ID }}</div>

    <div>
      {{ hemma1 }}

      &

      {{ hemma2 }}
      -
      {{ $store.state.admin.selectedMatch.pointshemma }}
    </div>

    <div>
      {{ borta1 }}

      &
      {{ borta2 }}

      -
      {{ $store.state.admin.selectedMatch.pointsborta }}
    </div>
    <div>
      <button @click="changePoints">Ändra poäng</button>
    </div>
    <button @click="updateGameData">Stäng</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      server: this.$store.state.server,
    };
  },
  computed: {
    hemma1() {
      return (
        this.$store.state.admin.selectedMatchNames[
          this.$store.state.admin.selectedMatch.hemma1
        ].firstname +
        ' ' +
        this.$store.state.admin.selectedMatchNames[
          this.$store.state.admin.selectedMatch.hemma1
        ].lastname
      );
    },
    hemma2() {
      return (
        this.$store.state.admin.selectedMatchNames[
          this.$store.state.admin.selectedMatch.hemma2
        ].firstname +
        ' ' +
        this.$store.state.admin.selectedMatchNames[
          this.$store.state.admin.selectedMatch.hemma2
        ].lastname
      );
    },
    borta1() {
      return (
        this.$store.state.admin.selectedMatchNames[
          this.$store.state.admin.selectedMatch.borta1
        ].firstname +
        ' ' +
        this.$store.state.admin.selectedMatchNames[
          this.$store.state.admin.selectedMatch.borta1
        ].lastname
      );
    },
    borta2() {
      return (
        this.$store.state.admin.selectedMatchNames[
          this.$store.state.admin.selectedMatch.borta2
        ].firstname +
        ' ' +
        this.$store.state.admin.selectedMatchNames[
          this.$store.state.admin.selectedMatch.borta2
        ].lastname
      );
    },
  },
  mounted() {
    this.getNames();
  },
  methods: {
    async getNames() {
      const hemma1 = this.$store.state.admin.selectedMatch.hemma1;
      const hemma2 = this.$store.state.admin.selectedMatch.hemma2;
      const borta1 = this.$store.state.admin.selectedMatch.borta1;
      const borta2 = this.$store.state.admin.selectedMatch.borta2;

      const names = await this.$axios.$get(
        process.env.BACKEND_SERVER +
          '/names/' +
          hemma1 +
          '/' +
          hemma2 +
          '/' +
          borta1 +
          '/' +
          borta2
      );
      this.$store.commit('admin/selectedMatchNames', names);
    },
    async updateGameData() {
      const body = {
        pointshemma: this.$store.state.admin.selectedMatch.pointshemma,
        pointsborta: this.$store.state.admin.selectedMatch.pointsborta,
      };
      await this.$axios.$put(
        process.env.BACKEND_SERVER +
          '/admin/game/' +
          this.$store.state.admin.selectedLeague +
          '/' +
          this.$store.state.admin.selectedMatch.ID,
        body
      );
      this.$store.commit('admin/selectedMatch', {});
    },
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
      this.$store.commit('admin/selectedMatch', {});
    },

    changePoints() {
      switch (this.$store.state.admin.selectedMatch.pointsborta) {
        case 0:
          if (this.$store.state.admin.selectedMatch.pointshemma === 6) {
            this.$store.commit('admin/addHomePoints', 4);
            this.$store.commit('admin/addAwayPoints', 2);
          } else {
            this.$store.commit('admin/addHomePoints', 6);
            this.$store.commit('admin/addAwayPoints', 0);
          }

          break;
        case 2:
          this.$store.commit('admin/addHomePoints', 2);
          this.$store.commit('admin/addAwayPoints', 4);
          break;
        case 4:
          this.$store.commit('admin/addHomePoints', 0);
          this.$store.commit('admin/addAwayPoints', 6);
          break;
        case 6:
          this.$store.commit('admin/addHomePoints', 0);
          this.$store.commit('admin/addAwayPoints', 0);
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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
#match-info div {
  color: white;
}
</style>

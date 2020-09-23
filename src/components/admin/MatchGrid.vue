<template>
  <div id="match-grid">
    <div>Alla matcher</div>
    <div class="match-grid">
      <div v-for="(league, leagueIndex) in matches" :key="leagueIndex">
        <div class="league-title">{{leagueIndex +1}}</div>
        <div
          v-for="(match, weekIndex) in matches[leagueIndex]"
          :key="weekIndex"
          :id="leagueIndex + '-' + weekIndex"
          :class="matches[leagueIndex][weekIndex].status"
          class="match-dot"
          @click="showMatch(matches[leagueIndex][weekIndex].id)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      matches: [
        [
          { id: 1, status: "status-played-without-result" },
          { id: 2, status: "status-registred" },
          { id: 3, status: "" },
        ],
        [
          { id: 4, status: "status-red" },
          { id: 5, status: "status-registred" },
        ],
        [
          { id: 1, status: "status-played-without-result" },
          { id: 2, status: "status-registred" },
          { id: 3, status: "" },
          { id: 1, status: "status-played-without-result" },
          { id: 2, status: "status-registred" },
          { id: 3, status: "" },
          { id: 1, status: "status-played-without-result" },

          { id: 1, status: "status-played-without-result" },
          { id: 2, status: "status-registred" },
          { id: 3, status: "" },
          { id: 1, status: "status-played-without-result" },
          { id: 2, status: "status-registred" },
          { id: 3, status: "" },
          { id: 1, status: "status-played-without-result" },
          { id: 2, status: "status-registred" },
          { id: 3, status: "" },
        ],
        [
          { id: 4, status: "status-red" },
          { id: 5, status: "status-registred" },
        ],
        [
          { id: 1, status: "status-played-without-result" },
          { id: 2, status: "status-registred" },
          { id: 3, status: "" },
        ],
        [
          { id: 4, status: "status-red" },
          { id: 5, status: "status-registred" },
        ],
      ],
    };
  },
  methods: {
    showMatch: function (id) {
      this.$store.state.admin.showMatchWindow = true;
      this.$store.state.admin.selectedMatch.id = id;
      // Hämta matchinfo

      // fetch(this.$store.state.server + "/matchinfo/" + id, {
      //   method: "post",
      //   headers: { "Content-Type": "application/json" },
      // })
      //   .then((response) => response.json())
      //   .then((promise) => (this.$store.state.admin.selectedMatch = promise));
    },
  },
};
</script>

<style lang="scss">
.match-grid {
  display: grid;
  grid-template-columns: repeat(25, 1fr);
  grid-template-rows: repeat(33, 1fr);
  grid-column-gap: 3px;
  // grid-row-gap: 3px;
}

.match-dot {
  border: 1px solid white;
  background: $dark;
  margin-top: 3px;
  height: 2vh;
  width: 100%;
  border-radius: 100px;
}

.league-title {
  text-align: center;
}

.status-red {
  background: red;
}
.status-played-without-result {
  background: lightgreen;
}
.status-registred {
  background: green;
}
</style>
<template>
  <div id="match-grid">
    <div>Alla matcher</div>
    <button @click="updateMatchGrid">Uppdatera</button><br />
    <div class="match-grid">
      <div>
        <div><br /></div>
        <div v-for="item in 60" :key="item" class="match-number">
          {{ item }}
        </div>
      </div>
      <div v-for="(league, leagueIndex) in leagues" :key="leagueIndex">
        <div class="league-title">
          {{ league.namn.replace('matcher-timra-', '') }}
        </div>
        <!-- <div>{{ matches[0][0] }}</div> -->
        <div
          v-for="(match, weekIndex) in league.matcher"
          :key="weekIndex"
          :class="[
            match.ID,
            [
              totalPointsEquals6(match.pointshemma, match.pointsborta)
                ? ['registrerat-resultat']
                : [''],
            ],
            [
              haveCommonSlots(match.oddslots.length, match.evenslots.length)
                ? ['inga-gemensamma-luckor']
                : [''],
            ],
          ]"
          class="match-dot"
          @click="showMatch(league.namn, match.ID)"
        >
          {{ match.ID }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// [
//               haveCommonSlots(
//                 matches[leagueIndex][weekIndex].oddslots.length,
//                 matches[leagueIndex][weekIndex].evenslots.length
//               )
//                 ? ['']
//                 : ['inga-gemensamma-luckor'],
//             ],
export default {
  data() {
    return {
      leagues: [],
      selectedLeague: '',
      spelare: {},
    };
  },
  computed: {},
  methods: {
    totalPointsEquals6(hemma, borta) {
      if (hemma + borta === 6) {
        return true;
      } else {
        return false;
      }
    },
    haveCommonSlots(odd, even) {
      if (odd + even === 0) {
        return true;
      } else {
        return false;
      }
    },
    showMatch(league, matchID) {
      this.$store.commit('selectedLeague', league);
      // Hämta matchinfo
      const body = JSON.stringify({
        league,
        matchID,
      });
      fetch(this.$store.state.server + '/matchinfo/', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body,
      })
        .then((response) => response.json())
        .then((promise) => {
          this.$store.commit('selectedMatch', promise[0]);
          this.$store.state.admin.showMatchWindow = true;
        })
        .then(() => {
          const body2 = JSON.stringify({
            hemma1: this.$store.state.admin.selectedMatch.hemma1,
            hemma2: this.$store.state.admin.selectedMatch.hemma2,
            borta1: this.$store.state.admin.selectedMatch.borta1,
            borta2: this.$store.state.admin.selectedMatch.borta2,
          });
          fetch(this.$store.state.server + '/getplayersnames/', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: body2,
          })
            .then((response) => response.json())
            .then((promise) => {
              this.$store.commit('selectedMatchPlayers', promise);

              // this.$store.commit("hemma1", promise[0].hemma1);
              // this.$store.commit("hemma2", promise[0].hemma2);
              // this.$store.commit("borta1", promise[0].borta1);
              // this.$store.commit("borta2", promise[0].borta2);
              this.$store.state.admin.showMatchWindow = true;
            });
        });
    },
    updateMatchGrid() {
      this.getMatches();
      this.updateCommonSlots();
    },
    updateCommonSlots() {
      fetch(this.$store.state.server + '/updatecommonslots').then((response) =>
        response.json()
      );
    },
    getMatches() {
      const body = JSON.stringify({
        appVersion: this.$store.appVersion,
      });
      fetch(this.$store.state.server + '/allmatches', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body,
      })
        .then((response) => response.json())
        .then((promise) => {
          this.leagues = promise;
        });
    },
  },
};
</script>

<style lang="scss" scope>
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
  height: 10px;
  width: 100%;
  border-radius: 100px;
  color: white;
  text-align: center;
  font-size: 8px;
}

.match-number {
  border: 1px solid transparent;
  background: $dark;
  margin-top: 3px;
  height: 10px;
  width: 100%;
  border-radius: 100px;
  color: white;
  text-align: center;
  font-size: 8px;
}

.league-title {
  text-align: center;
  color: white;
}

.registrerat-resultat {
  background: green;
}

.inga-gemensamma-luckor {
  background: red;
}

.status-played-without-result {
  background: lightgreen;
}
.rr {
  background: green;
}
</style>

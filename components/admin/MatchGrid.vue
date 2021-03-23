<template>
  <div id="match-grid">
    <div class="match-grid">
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
              isPointsEquals6(match.pointshemma, match.pointsborta)
                ? ['registrerat-resultat']
                : [''],
            ],
            [
              isCommonSlotsMoreThanNone(
                match.oddslots.length,
                match.evenslots.length
              )
                ? ['inga-gemensamma-luckor']
                : [''],
            ],
            [isTimeBooked(match.bookedtime) ? ['booked-time'] : ['']],
          ]"
          class="match-dot"
          @click="getGame(league.namn, match.ID)"
        >
          {{ match.ID }}
        </div>
      </div>
    </div>
    <div class="registrerat-resultat">Registrerat resultat</div>
    <div class="inga-gemensamma-luckor">Inga gemensamma luckor</div>
    <div class="booked-time">Bokad</div>
    <div class="no-booked-time">Inte bokad</div>
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
  mounted() {
    this.getGames();
  },
  methods: {
    isPointsEquals6(hemma, borta) {
      if (hemma + borta === 6) {
        return true;
      } else {
        return false;
      }
    },
    isCommonSlotsMoreThanNone(odd, even) {
      if (odd + even === 0) {
        return true;
      } else {
        return false;
      }
    },
    isTimeBooked(bookedTime) {
      if (bookedTime !== null) {
        return true;
      } else {
        return false;
      }
    },
    async getGames() {
      const games = await this.$axios.$get(
        process.env.BACKEND_SERVER + '/admin/games'
      );
      this.leagues = games;
    },
    async getGame(league, matchID) {
      const game = await this.$axios.$get(
        process.env.BACKEND_SERVER + '/admin/game/' + league + '/' + matchID
      );
      this.$store.commit('admin/selectedMatch', game[0]);
      this.$store.commit('admin/selectedLeague', league);
    },
  },
};
</script>

<style lang="scss" scoped>
.match-grid {
  display: grid;
  grid-template-columns: repeat(25, 1fr);
  grid-template-rows: repeat(33, 1fr);
  grid-column-gap: 3px;
  margin-top: 20px;
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
.booked-time {
  background: lightgreen;
}
.no-booked-time {
  border: 1px solid lightgray;
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

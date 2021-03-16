export const state = () => ({
  selectedLeague: '',
  selectedMatchPlayers: {},
  selectedMatch: {},
});

export const mutations = {
  selectedMatch(state, value) {
    this.selectedMatch = value;
  },
  selectedMatchPlayers(state, value) {
    this.selectedMatchPlayers = value;
  },
  selectedLeague(state, value) {
    this.selectedLeague = value;
  },
  hemma1(state, value) {
    this.selectedMatch.hemma1 = value;
  },
  hemma2(state, value) {
    this.selectedMatch.hemma2 = value;
  },
  borta1(state, value) {
    this.selectedMatch.borta1 = value;
  },
  borta2(state, value) {
    this.selectedMatch.borta2 = value;
  },
  addHomePoints(state, value) {
    this.selectedMatch.pointshemma = value;
  },
  addAwayPoints(state, value) {
    this.selectedMatch.pointsborta = value;
  },
};

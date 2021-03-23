export const state = () => ({
  selectedLeague: '',
  selectedMatchPlayers: {},
  selectedMatch: {},
  tab: 'matches',
});

export const mutations = {
  selectedMatch(state, value) {
    state.selectedMatch = value;
  },
  selectedMatchPlayers(state, value) {
    state.selectedMatchPlayers = value;
  },
  selectedLeague(state, value) {
    state.selectedLeague = value;
  },
  tab(state, value) {
    state.tab = value;
  },
  hemma1(state, value) {
    state.selectedMatch.hemma1 = value;
  },
  hemma2(state, value) {
    state.selectedMatch.hemma2 = value;
  },
  borta1(state, value) {
    state.selectedMatch.borta1 = value;
  },
  borta2(state, value) {
    state.selectedMatch.borta2 = value;
  },
  addHomePoints(state, value) {
    state.selectedMatch.pointshemma = value;
  },
  addAwayPoints(state, value) {
    state.selectedMatch.pointsborta = value;
  },
};

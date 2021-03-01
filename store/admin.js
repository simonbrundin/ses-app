export const state = () => ({
  selectedLeague: '',
  selectedMatchPlayers: {},
  selectedMatch: {},
})

export const mutations = {
  selectedMatch(state, value) {
    state.admin.selectedMatch = value
  },
  selectedMatchPlayers(state, value) {
    state.admin.selectedMatchPlayers = value
  },
  selectedLeague(state, value) {
    state.admin.selectedLeague = value
  },
  hemma1(state, value) {
    state.admin.selectedMatch.hemma1 = value
  },
  hemma2(state, value) {
    state.admin.selectedMatch.hemma2 = value
  },
  borta1(state, value) {
    state.admin.selectedMatch.borta1 = value
  },
  borta2(state, value) {
    state.admin.selectedMatch.borta2 = value
  },
  addHomePoints(state, value) {
    state.admin.selectedMatch.pointshemma = value
  },
  addAwayPoints(state, value) {
    state.admin.selectedMatch.pointsborta = value
  },
}

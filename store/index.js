export const state = () => ({
  server: process.env.BACKEND_SERVER,
  appVersion: '1.0.0',
  user: {},
  upcomingGames: [],
});

export const mutations = {
  user(state, userObject) {
    state.user = userObject;
  },
  firstname(state, value) {
    state.user.firstname = value;
  },
  lastname(state, value) {
    state.user.lastname = value;
  },
  email(state, value) {
    state.user.email = value;
  },
  tel(state, value) {
    state.user.tel = value;
  },
  upcomingGames(state, matches) {
    state.upcomingGames = matches;
  },
  addOddSlot(state, slot) {
    state.user.oddslots.push(slot);
  },
  addEvenSlot(state, slot) {
    state.user.evenslots.push(slot);
  },
  removeOddSlot(state, slot) {
    state.user.oddslots = state.user.oddslots.filter((item) => item !== slot);
  },
  removeEvenSlot(state, slot) {
    state.user.evenslots = state.user.evenslots.filter((item) => item !== slot);
  },
};
export const actions = {
  async updateDatabaseUser({ state }) {
    await this.$axios.$put(process.env.BACKEND_SERVER + '/user', state.user);
  },
};

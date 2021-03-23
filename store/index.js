export const state = () => ({
  server: process.env.BACKEND_SERVER,
  appVersion: '1.0.0',
  user: {},
});

export const mutations = {
  user(state, userObject) {
    state.user = userObject;
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
  async updateDatabaseUser({ state }, userObject) {
    await this.$axios.$post(
      process.env.BACKEND_SERVER + '/updateuser',
      state.user
    );
  },
};

export const state = () => ({
  server: process.env.BACKEND_SERVER,
  appVersion: '1.0.0',
  user: {},
});

export const mutations = {
  user(state, userObject) {
    state.user = userObject;
  },
  increment(state) {
    state.counter++;
  },
};

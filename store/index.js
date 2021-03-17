export const state = () => ({
  server: process.env.BACKEND_SERVER,
  appVersion: '1.0.0',
});

export const mutations = {
  increment(state) {
    state.counter++;
  },
};

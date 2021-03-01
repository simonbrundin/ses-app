export const state = () => ({
  server: 'http://localhost:7777',
  appVersion: '1.0.0',
})

export const mutations = {
  increment(state) {
    state.counter++
  },
}

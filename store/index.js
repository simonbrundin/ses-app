export const state = () => ({
  server: 'https://superelitserien-server.herokuapp.com',
  appVersion: '1.0.0',
})

export const mutations = {
  increment(state) {
    state.counter++
  },
}

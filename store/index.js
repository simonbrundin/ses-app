export const state = () => ({
  server: process.env.BACKEND_SERVER_DEV,
  appVersion: '1.0.0',
  user: {},
  upcomingGames: [
    {
      bookedtime: new Date(),
      names: { hemma1: '', hemma2: '', borta1: '', borta2: '' },
    },
  ],
  playedGames: [
    {
      bookedtime: new Date(),
      names: { hemma1: '', hemma2: '', borta1: '', borta2: '' },
    },
  ],
  playedGamesWithoutResult: [
    {
      bookedtime: '',
      pointshemma: 0,
      pointsborta: 0,
      names: { hemma1: '', hemma2: '', borta1: '', borta2: '' },
    },
  ],
  nextGame: {},
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
  playedGames(state, matches) {
    state.playedGames = matches;
  },
  playedGamesWithoutResult(state, matches) {
    state.playedGamesWithoutResult = matches;
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
  namesOfNextGame(state, names) {
    state.upcomingGames[0].names = names;
  },
  addHomePoints(state, value) {
    state.playedGamesWithoutResult[0].pointshemma = value;
  },
  addAwayPoints(state, value) {
    state.playedGamesWithoutResult[0].pointsborta = value;
  },
};
export const actions = {
  async updateDatabaseUser({ state }) {
    await this.$axios.$put('/user', state.user);
  },
  async nuxtServerInit({ commit }, { req }) {
    let auth = null;
    if (req.headers.cookie) {
      // cookie found
      try {
        // check data user login with cookie
        const { data } = await this.$axios.post('/api/auths/me');
        // server return the data is cookie valid loggedIn is true
        auth = data; // set the data auth
      } catch (err) {
        // No valid cookie found
        auth = null;
      }
    }
    return auth;
    // commit('SET_AUTH', auth); // set state auth
  },
};

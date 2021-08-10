export const state = () => ({
  scheduleInstructions: false,
  slots: false,
  confirmGame: false,
  addToCalendar: false,
  showNotificationButtons: false,
  userInfo: false,
});

export const mutations = {
  slots: (state, payload) => {
    state.slots = payload;
  },
  scheduleInstructions: (state, payload) => {
    state.scheduleInstructions = payload;
  },
  confirmGame: (state, payload) => {
    state.confirmGame = payload;
  },
  addToCalendar: (state, payload) => {
    state.addToCalendar = payload;
  },
  showNotificationButtons: (state, payload) => {
    state.showNotificationButtons = payload;
  },
  userInfo: (state, payload) => {
    state.userInfo = payload;
  },
};

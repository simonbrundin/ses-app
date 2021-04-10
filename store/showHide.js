export const state = () => ({
  contactInfo: false,
  schedule: true,
  menu: false,
  menuIcon: false,
  admin: { showMatchWindow: false },
  registerResult: true,
});

export const mutations = {
  contactInfo(state, value) {
    state.showContactInfo = value;
  },
  schedule(state, value) {
    state.schedule = value;
  },
  menu(state, value) {
    state.menu = value;
  },
  menuIcon(state, value) {
    state.menuIcon = value;
  },
  admin(state, value) {
    state.admin = value;
  },
  registerResult(state, value) {
    state.registerResult = value;
  },
};

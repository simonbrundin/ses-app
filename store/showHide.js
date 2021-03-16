export const state = () => ({
  contactInfo: false,
  schedule: true,
  menu: false,
  menuIcon: false,
  admin: { showMatchWindow: false },

  notifications: {
    scheduleInstructions: true,
    notEnoughSlots: true,
    confirmGame: false,
    addToCalendar: false,
    showNotificationButtons: false,
  },
});

export const mutations = {
  showContactInfo(state, value) {
    state.showContactInfo = value;
  },
  showScheduleInstructions(state, value) {
    state.notifications.showScheduleInstructions = value;
  },
  notEnoughSlots(state, value) {
    state.notifications.notEnoughSlots = value;
  },
  showSchedule(state, value) {
    state.showSchedule = value;
  },
};

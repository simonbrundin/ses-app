export const state = () => ({
  contactInfo: false,
  schedule: true,
  menu: false,
  menuIcon: false,
  admin: { showMatchWindow: false },

  notifications: {
    scheduleInstructions: true,
    notEnoughSlots: false,
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
  NotEnoughSlots(state, value) {
    state.notifications.NotEnoughSlots = value;
  },
  showSchedule(state, value) {
    state.showSchedule = value;
  },
};

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    playerID: 10,
    dept: 0,
    notifications: {
      ConfirmGame: false,
      AddToCalendar: false,
      showNotificationButtons: false,
    }
  }
});
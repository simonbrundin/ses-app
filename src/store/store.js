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
    },
    coupons: {
      showBottomMenu: false,
      companies: {
        intersport: {
          name: "Intersport",
          logo: "intersport-standing.png",
          couponsLeft: 5,
          couponLink: "InterSport.vue",
          showCompanyCoupons: true,
          coupons: [{
            title: '15% valfri vara',
            description: 'Köp valfri vara och få 15% rabatt'
          }]
        },
        palt: {
          name: "Palt",
          logo: "palt.png",
          couponsLeft: 5,
          couponLink: "Palt.vue",
          showCompanyCoupons: false,
        },
        biteline: {
          name: "Biteline",
          logo: "biteline.png",
          couponsLeft: 12,
          couponLink: "BiteLine.vue",
          showCompanyCoupons: false,
        },
      },
    }
  }
});
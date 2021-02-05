import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
  mutations: {
    userInfo(state, userInfo) {
      // state.user.socialID = this.$auth.user.sub;
      state.user.firstName = userInfo.firstname;
      state.user.lastName = userInfo.lastname;
      state.user.email = userInfo.email;
      state.user.tel = userInfo.tel;
    },
    firstName(state, value) {
      state.user.firstName = value;
    },
    lastName(state, value) {
      state.user.lastName = value;
    },
    email(state, value) {
      state.user.email = value;
    },
    tel(state, value) {
      state.user.tel = value;
    },
    showContactInfo(state, value) {
      state.showContactInfo = value;
    },
    selectedMatch(state, value) {
      state.admin.selectedMatch = value;
    },
    selectedMatchPlayers(state, value) {
      state.admin.selectedMatchPlayers = value;
    },
    selectedLeague(state, value) {
      state.admin.selectedLeague = value;
    },
    hemma1(state, value) {
      state.admin.selectedMatch.hemma1 = value;
    },
    hemma2(state, value) {
      state.admin.selectedMatch.hemma2 = value;
    },
    borta1(state, value) {
      state.admin.selectedMatch.borta1 = value;
    },
    borta2(state, value) {
      state.admin.selectedMatch.borta2 = value;
    },
    addHomePoints(state, value) {
      state.admin.selectedMatch.pointshemma = value;
    },
    addAwayPoints(state, value) {
      state.admin.selectedMatch.pointsborta = value;
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

  },
  state: {
    // server: "https://superelitserien-server.herokuapp.com",
    server: "http://localhost:7777",
    appVersion: '1.0.0',
    user: {
      socialID: '',
      firstName: '',
      lastName: '',
      email: '',
      tel: '',
      oddslots: [],
      evenslots: [],
      dept: 0,
    }
    ,
    showContactInfo: false,
    showSchedule: true,
    showMenu: false,
    showMenuIcon: false,
    admin: {
      showMatchWindow: false,
      selectedLeague: '',
      selectedMatchPlayers: {},
      selectedMatch: {

      }
    },

    notifications: {
      showScheduleInstructions: true,
      NotEnoughSlots: false,
      ConfirmGame: false,
      AddToCalendar: false,
      showNotificationButtons: false,
    },
    coupons: {
      showBottomMenu: true,
      companies: {
        biteline: {
          name: "Biteline",
          logo: "biteline.png",
          couponsLeft: 12,
          couponLink: "BiteLine.vue",
          show: false,
          coupons: [
            {
              title: '20% på avhämtning',
              description: 'Gäller alla dagar i veckan hos Biteline'
            }
          ]
        },
        intersport: {
          name: "Intersport",
          link: '/intersport',
          logo: "intersport-standing.png",
          couponsLeft: 5,
          couponLink: "InterSport.vue",
          show: true,
          coupons: [
            {
              title: '20% på allt inom padel',
              description: 'Köp valfri vara och få 15% rabatt'
            }
          ]
        },
        bilbolaget: {
          name: "Bilbolaget",
          logo: "bilbolaget.png",
          couponsLeft: 5,
          couponLink: "Bilbolaget.vue",
          show: false,
          coupons: [
            {
              title: '50% på Deluxe Biltvätt',
              description: 'Köp valfri vara och få 15% rabatt'
            }
          ]
        },
        bestwestern: {
          name: "Best Western",
          logo: "bestwestern.png",
          couponsLeft: 5,
          couponLink: "Bestwestern.vue",
          show: false,
          coupons: [
            {
              title: '20% på alla övernattningar',
              description: 'Köp valfri vara och få 15% rabatt'
            }
          ]
        },
        palt: {
          name: "Palt",
          logo: "palt.png",
          couponsLeft: 5,
          couponLink: "Palt.vue",
          show: false,
          coupons: [
            {
              title: '20% på två eller fler plagg',
              description: 'Köp valfri vara och få 15% rabatt'
            }
          ]
        },

        jacknjones: {
          name: "Jack & Jones",
          logo: "jackjones.svg",
          couponsLeft: 5,
          couponLink: "jackjones.vue",
          show: false,
          coupons: [
            {
              title: '20% på två eller fler plagg',
              description: 'Köp valfri vara och få 15% rabatt'
            }
          ]
        },

        norrlandsfarg: {
          name: "Norrlands Färg",
          logo: "norrlandsfarg.png",
          couponsLeft: 12,
          couponLink: "BiteLine.vue",
          show: false,
          coupons: [
            {
              title: '20% på all färg',
              description: '2 för 1 mån-ons Take Away'
            }
          ]
        },
        mammaaugustas: {
          name: "Mamma Augustas Kök",
          logo: "augustaskok.png",
          couponsLeft: 12,
          couponLink: "Mammaaugustas.vue",
          show: false,
          coupons: [
            {
              title: '25% på mat & dryck',
              description: '2 för 1 mån-ons Take Away'
            }
          ]
        },
        stargym: {
          name: "Stargym",
          logo: "stargym.png",
          couponsLeft: 12,
          couponLink: "stargym.vue",
          show: false,
          coupons: [
            {
              title: '40% på årskort',
              description: 'Vid köp av årskort hos StarGym'
            }
          ]
        },
        pinchos: {
          name: "Pinchos",
          logo: "pinchos.jpg",
          couponsLeft: 12,
          couponLink: "pinchos.vue",
          show: false,
          coupons: [
            {
              title: '5:e rätten på köpet',
              description: 'Köp 4 rätter och få 5:e på köpet'
            }
          ]
        },
        totalpadel: {
          name: "Total Padel",
          logo: "totalpadels.png",
          couponsLeft: 12,
          couponLink: "totalpadel.vue",
          show: false,
          coupons: [
            {
              title: '15% på Legendracket',
              description: 'Rabatt på alla racketar från Legend'
            }
          ]
        },
        pingpong: {
          name: "Ping Pong",
          logo: "pingpong.png",
          couponsLeft: 12,
          couponLink: "pingpong.vue",
          show: false,
          coupons: [
            {
              title: '20% på all mat',
              description: 'Käka gomat hos Ping Pong och spara 20%'
            }
          ]
        },
      },
    }
  }
});
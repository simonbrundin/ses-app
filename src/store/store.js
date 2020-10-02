import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    server: "https://superelitserien-server.herokuapp.com",
    playerID: 134,
    dept: 0,
    showMenu: false,
    showMenuIcon: false,
    admin: {
      showMatchWindow: false,
      selectedMatch: {
        id: 0,
        h1: "Micke",
        h2: "Simon",
        a1: "Eva",
        a2: "Sophie",
        hp: 0,
        ap: 0,
      }
    },

    notifications: {
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
      },
    }
  }
});
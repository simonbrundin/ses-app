<template>
  <div id="app">
    <div class="top-row">
      <div class="greeting">
        <div class="date">{{ date }}</div>
        <h1>Vamos, {{ $auth.user.given_name }}!</h1>
      </div>

      <nuxt-link v-if="$auth.loggedIn" to="/profile">
        <img class="profile-image round" :src="$auth.user.picture" />
      </nuxt-link>
      <button v-else @click="$auth.loginWith('auth0')">Logga in</button>
    </div>
    <div v-if="$store.state.showMenuIcon" class="menu-icon" @click="showMenu">
      Meny
    </div>
    <Notifications-WaitingForPlayers
      v-if="$store.state.upcomingGames.length === 0"
      class="notification"
    />

    <NextGame v-if="$store.state.upcomingGames.length > 0" />
    <NextGame2 v-if="$store.state.upcomingGames.length > 0" />
    <MatchRegistration v-if="false" />
    <Table v-if="$store.state.user.league" />
    <Menu v-if="$store.state.showHide.menu" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      dat: 'sön 23 mar',
    };
  },
  computed: {
    date() {
      const today = new Date();
      const date = today.getDate();
      const month = today.getMonth();
      let swemonth = '';
      switch (month) {
        case 1:
          swemonth = 'jan';
          break;
        case 2:
          swemonth = 'feb';
          break;
        case 3:
          swemonth = 'mars';
          break;
        case 4:
          swemonth = 'apr';
          break;
        case 5:
          swemonth = 'maj';
          break;
        case 6:
          swemonth = 'juni';
          break;
        case 7:
          swemonth = 'juli';
          break;
        case 8:
          swemonth = 'aug';
          break;
        case 9:
          swemonth = 'sep';
          break;
        case 10:
          swemonth = 'okt';
          break;
        case 11:
          swemonth = 'nov';
          break;
        case 12:
          swemonth = 'dec';
          break;
        default:
          break;
      }
      const string = '' + date + ' ' + swemonth;
      return string;
    },
  },
  mounted() {
    this.isUserInfoFilled();
  },
  methods: {
    isUserInfoFilled() {
      if (
        this.$store.state.user.firstname === '' ||
        this.$store.state.user.lastname === '' ||
        this.$store.state.user.email === '' ||
        this.$store.state.user.tel === ''
      ) {
        this.$store.commit('notifications/userInfo', true);
      } else {
        this.$store.commit('notifications/userInfo', false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.top-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 10px 0;
}
.greeting {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
}
.date {
  color: $gold;
  text-transform: uppercase;
}
.notification {
  margin: 0 0 $app-padding 0;
}
.profile-image {
  height: 60px;
}
</style>

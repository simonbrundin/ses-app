<template>
  <div v-if="($auth.user.sub = 'facebook|3005022352930664')" id="admin">
    <AdminTodos></AdminTodos>
    <!-- Meny -->
    <!-- <button>Sök match</button> -->
    <button @click="showMatchGrid = !showMatchGrid">Alla matcher</button>
    <button @click="showPlayerGrid = !showMatchGrid">Alla spelare</button>
    <MatchGrid v-if="showMatchGrid"></MatchGrid>
    <MatchInfo v-if="$store.state.admin.showMatchWindow"></MatchInfo>
    <PlayerGrid v-if="showPlayerGrid"></PlayerGrid>
    <!-- <div class="league-input">
      <select name="city" v-model="city">
        <option value="timra">Timrå</option>
        <option value="stockholm">Stockholm</option>
        <option value="ornskoldsvik">Örnsköldsvik</option>
      </select>
      <button @click="league++">+</button>
      {{ league }}
      <button @click="league--">-</button>
      <button @click="getMatches">Hämta matcher</button>
    </div> -->
  </div>
</template>

<script>
import MatchInfo from '../components/admin/MatchInfo.vue';
import MatchGrid from '../components/admin/MatchGrid.vue';
import AdminTodos from '../components/admin/AdminTodos.vue';
import PlayerGrid from '../components/admin/PlayerGrid.vue';
export default {
  components: {
    MatchInfo,
    MatchGrid,
    AdminTodos,
    PlayerGrid,
  },
  layout: 'admin',
  data() {
    return {
      city: 'timra',
      league: '1',
      showMatchGrid: false,
      showPlayerGrid: false,
    };
  },
  methods: {
    getMatches() {
      const body = JSON.stringify({
        city: this.city,
        league: this.league,
      });
      fetch(this.$store.state.server, +'/matches', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body,
      })
        .then((response) => response.json())
        .then((promise) => (this.matches = promise));
    },
  },
};
</script>

<style lang="scss" scoped>
#admin {
  color: $light;
  margin-bottom: 200px;
}

#admin div {
  color: $light;
}
</style>

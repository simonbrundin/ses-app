<template>
  <div id="admin">
    <AdminTodos></AdminTodos>
    <!-- Meny -->
    <router-link to="/admin/match-grid">
      <button>Alla matcher</button>
    </router-link>
    <button>Sök match</button>
    <button>Alla spelare</button>
    <router-view></router-view>
    <MatchGrid></MatchGrid>
    <PlayerGrid></PlayerGrid>
    <div class="league-input">
      <select name="city" v-model="city">
        <option value="timra">Timrå</option>
        <option value="stockholm">Stockholm</option>
        <option value="ornskoldsvik">Örnsköldsvik</option>
      </select>
      <button @click="league++">+</button>
      {{league}}
      <button @click="league--">-</button>
      <button @click="getMatches">Hämta matcher</button>
    </div>

    <MatchInfo v-if="this.$store.state.admin.showMatchWindow"></MatchInfo>
  </div>
</template>

<script>
import MatchInfo from "../components/admin/MatchInfo.vue";
import MatchGrid from "../components/admin/MatchGrid.vue";
import AdminTodos from "../components/admin/AdminTodos.vue";
import PlayerGrid from "../components/admin/PlayerGrid.vue";
export default {
  components: {
    MatchInfo,
    MatchGrid,
    AdminTodos,
    PlayerGrid,
  },
  data() {
    return {
      city: "timra",
      league: "1",
    };
  },
  methods: {
    getMatches: function () {
      let body = JSON.stringify({
        city: this.city,
        league: this.league,
      });
      fetch(this.$store.state.server, +"/matches", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: body,
      })
        .then((response) => response.json())
        .then((promise) => (this.matches = promise));
    },
  },
};
</script>

<style lang="scss">
#admin {
  color: $light;
  margin-bottom: 200px;
}

#admin div {
  color: $light;
}
</style>
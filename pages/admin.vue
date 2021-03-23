<template>
  <div id="admin">
    <Admin-Todos />
    <!-- Meny -->
    <!-- <button>Sök match</button> -->
    <button
      :class="{ choosen: $store.state.admin.tab === 'matches' }"
      @click="$store.commit('admin/tab', 'matches')"
    >
      Alla matcher
    </button>
    <button
      :class="{ choosen: $store.state.admin.tab === 'players' }"
      @click="$store.commit('admin/tab', 'players')"
    >
      Alla spelare
    </button>
    <Admin-MatchGrid
      v-if="
        $store.state.admin.tab === 'matches' &&
        Object.keys($store.state.admin.selectedMatch).length === 0
      "
    />
    <Admin-PlayerGrid v-if="$store.state.admin.tab === 'players'" />
    <Admin-MatchInfo
      v-if="Object.keys($store.state.admin.selectedMatch).length > 0"
    />

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
export default {
  layout: 'admin',
  data() {
    return {
      city: 'timra',
      league: '1',
      showPlayerGrid: false,
    };
  },
};
</script>

<style lang="scss" scoped>
#admin {
  color: $light;
  margin-bottom: 200px;
  padding: 50px 100px;
}

#admin div {
  color: $light;
}
.choosen {
  background-color: green;
}
</style>

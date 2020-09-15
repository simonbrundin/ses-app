<template>
  <div id="admin">
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
    <div class="matches">
      <div v-for="(match, index) in matches" :key="index">{{match.hemma1}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      server: this.$store.state.server,
      city: "timra",
      league: "1",
      matches: [],
    };
  },
  methods: {
    getMatches: function () {
      let body = JSON.stringify({
        city: this.city,
        league: this.league,
      });
      fetch(this.server + "/matches", {
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
}

#admin div {
  color: $light;
}
</style>
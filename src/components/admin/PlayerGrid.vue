<template>
  <div id="player-grid">
    <div class="player-grid">
      <div v-for="(league, leagueIndex) in players" :key="leagueIndex">
        <div v-for="(player, index) in players[leagueIndex]" :key="index">{{player.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      players: [
        [
          { id: 0, name: "Micke" },
          { id: 0, name: "Micke" },
        ],
        [
          { id: 0, name: "Micke" },
          { id: 0, name: "Micke" },
        ],
      ],
    };
  },
};
</script>

<style lang="scss">
.player-grid {
  display: grid;
  grid-template-columns: repeat(25, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-column-gap: 3px;
  // grid-row-gap: 3px;
}
</style>
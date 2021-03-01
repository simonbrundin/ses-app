<template>
  <div id="table">
    <!-- Plats, Spelare, Matcher, Poäng, Medelpoäng -->
    <div class="table-top">
      <h2>Din serie</h2>
      <div class="card-container">
        <div class="rubriker">
          <span>Ranking</span>
          <span>Spelare</span>
          <span>M</span>
          <span @click="sort = false">P/M</span>
          <span @click="sort = true">P</span>
        </div>
      </div>
    </div>
    <div class="tabell">
      <div class="card-container">
        <div v-if="sort">
          <div
            v-for="(spelare, index) in sortedByPoints"
            :key="index"
            class="rad"
          >
            <span class="plats">#{{ index + 1 }}</span>
            <span class="spelare">
              {{ spelare.name }}

              <img
                :src="require(`@/assets/spelare/${spelare.id}.jpg`)"
                class="rund"
                alt
              />
            </span>
            <span class="matcher">{{ spelare.matches }}</span>
            <span class="avgpoints">{{ spelare.ppm }}</span>
            <span class="points">{{ spelare.points }}</span>
          </div>
        </div>
        <div v-if="!sort">
          <div
            v-for="(spelare, index) in sortedByAvgPoints"
            :key="index"
            class="rad"
          >
            <span class="plats">#{{ index + 1 }}</span>
            <span class="spelare">
              {{ spelare.name }}

              <img
                :src="require(`@/assets/spelare/${spelare.id}.jpg`)"
                class="rund"
                alt
              />
            </span>
            <span class="matcher">{{ spelare.matches }}</span>
            <span class="avgpoints">{{ spelare.ppm }}</span>
            <span class="points">{{ spelare.points }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sort: true,
      table: [],
    }
  },
  computed: {
    sortedByPoints() {
      let sortedTable = this.table
      sortedTable = sortedTable.sort((a, b) =>
        a.points < b.points ? -1 : a.points > b.points ? 1 : 0
      )
      sortedTable.reverse()
      return sortedTable
    },
    sortedByAvgPoints() {
      let sortedTableByAvg = this.table
      sortedTableByAvg = sortedTableByAvg.sort((a, b) =>
        a.ppm < b.ppm ? -1 : a.ppm > b.ppm ? 1 : 0
      )
      sortedTableByAvg.reverse()
      return sortedTableByAvg
    },
  },
  mounted() {
    fetch(this.$store.state.server + '/table/timra/test', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((promise) => (this.table = promise))
  },

  methods: {
    avgPoints(a, b) {
      return Math.round((a / b + Number.EPSILON) * 10) / 10
    },
    // getImgUrl(pic) {
    //   return require("../assets/spelare/" + pic + ".jpg");
    // },
  },
}
</script>

<style lang="scss" scope>
#table {
  margin: 0 0 72px 0;
}

#table h2 {
  text-align: center;
  color: $light;
}

.table-top {
  z-index: 1;
  width: calc(100vw - 2 *#{$app-padding});
  background: $dark;
  margin-left: -$app-padding;
  padding-left: $app-padding;
}
.tabell {
  margin: 0 0 0 0;
  display: flex;
  flex-direction: column;
  filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.288));
}

.tabell .card {
  padding: 0 20px 0 0;
}
.rubriker {
  padding: 10px 20px 10px 0;
  display: grid;
  grid-template-columns: 55px 5fr 1.5rem 2rem 1.5rem;
  grid-template-rows: 1fr;
  align-items: flex-start;
  text-align: left;
  margin: 0 0 5px 0;
  color: $light-grey;
  font-size: 12px;
}
.rad {
  display: grid;
  grid-template-columns: 55px 5fr 1.5rem 2rem 1.5rem;
  grid-template-rows: 1fr;
  align-items: center;

  padding: 0 20px 0 0;
  background: $dark-grey;
  margin: 0 0 8px 0;
  color: $light-grey;
  font-size: 14px;
  border-radius: calc(2px + #{$border-radius});
}

.rubriker span {
  font-weight: 700;
}

.rad span {
  padding: 12px 0;
}
#table .rubriker span:nth-child(1) {
  background: none;
  color: $light-grey;
}

#table span:nth-child(1) {
  margin: 0 8px 0 -1px;
  text-align: center;
  color: $dark-grey;
  font-weight: 700;
  padding: -10px 0;
  background: $gold;
  border-radius: $border-radius $border-radius 0 $border-radius;
}

#table span:nth-child(2) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-self: flex-start;
  padding: 0;
  width: 100%;
}

#table span:nth-child(3) {
  justify-self: flex-end;
}

#table span:nth-child(4) {
  justify-self: flex-end;
}

#table span:nth-child(5) {
  justify-self: flex-end;
}

.spelare img {
  height: 32px;
  margin-right: 0px;
}
</style>

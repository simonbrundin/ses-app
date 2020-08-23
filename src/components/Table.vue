<template>
  <div id="standings-table">
    <!-- Plats, Spelare, Matcher, Poäng, Medelpoäng -->
    <div class="tabell card">
      <div class="rubriker">
        <span></span>
        <span>Namn</span>
        <span>M</span>
        <span>P/M</span>
        <span>P</span>
      </div>
      <div v-for="(spelare, index) in table" :key="index" class="rad">
        <span class="plats">{{ index + 1 }}</span>
        <span class="spelare">{{ spelare.name }}</span>
        <span class="matcher">{{ spelare.matches }}</span>
        <span class="avgpoints">{{ avgPoints(spelare.points, spelare.matches) }}</span>
        <span class="points">{{ spelare.points }}</span>
      </div>
    </div>
    <div class="tabell dark-card">
      <div class="rubriker">
        <span></span>
        <span>Namn</span>
        <span>M</span>
        <span>P/M</span>
        <span>P</span>
      </div>
      <div v-for="(spelare, index) in table" :key="index" class="rad">
        <span class="plats">{{ index + 1 }}</span>
        <span class="spelare">{{ spelare.name }}</span>
        <span class="matcher">{{ spelare.matches }}</span>
        <span class="avgpoints">{{ avgPoints(spelare.points, spelare.matches) }}</span>
        <span class="points">{{ spelare.points }}</span>
      </div>
    </div>
    <app-bottom-menu></app-bottom-menu>
  </div>
</template>

<script>
import BottomMenu from "./BottomMenu.vue";
export default {
  components: {
    "app-bottom-menu": BottomMenu,
  },
  name: "StandingsTable",
  data() {
    return {
      table: [
        {
          id: 1,
          name: "Niklas Edin",
          matches: 5,
          points: 22,
        },
        {
          id: 2,
          name: "Fredrik Nordin",
          matches: 3,
          points: 12,
        },
        {
          id: 3,
          name: "Christian Blomberg",
          matches: 7,
          points: 24,
        },
        {
          id: 4,
          name: "Paquito",
          matches: 6,
          points: 10,
        },
      ],
    };
  },

  methods: {
    avgPoints: function (a, b) {
      return Math.round((a / b + Number.EPSILON) * 10) / 10;
    },
  },
};
</script>

<style scope>
.tabell {
  display: flex;
  flex-direction: column;
}

.rad {
  display: grid;
  grid-template-columns: 3em 5fr repeat(3, 1fr);
  grid-template-rows: 1fr;
  align-items: flex-start;
  text-align: left;
  border-bottom: 1px #1e1e1e solid;
  margin: 0 0 4px 0;
  padding: 0 0 2px 0;
}

.rubriker {
  display: grid;
  grid-template-columns: 3em 5fr repeat(3, 1fr);
  grid-template-rows: 1fr;
  align-items: flex-start;
  text-align: left;
  margin: 0 0 5px 0;
}

.rubriker span {
  font-weight: 700;
}

span:nth-child(1) {
  justify-self: flex-end;
  margin: 0 8px 0 0;
}

span:nth-child(2) {
  justify-self: flex-start;
}

span:nth-child(3) {
  justify-self: flex-end;
  padding: 0 5px 0 0;
}

span:nth-child(4) {
  justify-self: flex-end;
  padding: 0 5px 0 0;
}

span:nth-child(5) {
  justify-self: flex-end;
  padding: 0 5px 0 0;
}

.plats {
}

.spelare {
}

.matcher {
}

.avgpoints {
}

.points {
}
</style>
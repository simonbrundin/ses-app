<template>
  <div id="next-game" class="card">
    <div class="top-row">
      <div class="column">
        <h2 class="title">Nästa match</h2>

        <div class="datum">
          {{ nextGameFormatedDate }}
        </div>
      </div>
      <div>
        <div class="time-left">
          <h2>{{ timeLeft }}</h2>
          <p v-if="timeLeft !== 1">dagar</p>
          <p v-if="timeLeft === 1">dag</p>
          <div></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <div class="lag">Hemma</div>

        <div class="row">
          <div class="column">
            <img src="@/assets/spelare/183.jpg" class="spelar-bild" alt />
            <div>Christian</div>
          </div>

          <div class="column">
            <img src="@/assets/spelare/184.jpg" class="spelar-bild" alt />
            <div>Fredrik</div>
          </div>
        </div>
      </div>
      <div class="vs"></div>

      <div class="row">
        <div class="column">
          <div class="lag">Borta</div>
          <div class="row">
            <div class="column">
              <img src="@/assets/spelare/186.jpg" class="spelar-bild" alt />
              <div>Paquito</div>
            </div>
            <div class="column">
              <img src="@/assets/spelare/185.jpg" class="spelar-bild" alt />

              <div>Richard</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    nextGameFormatedDate() {
      const bookedtime = new Date(
        this.$store.state.upcomingGames[0].bookedtime
      );
      const month = bookedtime.getUTCMonth();

      const date = bookedtime.getUTCDate();
      const hours = bookedtime.getUTCHours();
      const weekday = bookedtime.getUTCDay();
      const minutes = bookedtime.getUTCMinutes();
      const formatedDate =
        this.sweWeekday(weekday) +
        ' ' +
        date +
        ' ' +
        this.sweMonth(month) +
        ' ' +
        hours +
        ':' +
        minutes;
      return formatedDate;
    },
    timeLeft() {
      const today = new Date();
      const bookedtime = new Date(
        this.$store.state.upcomingGames[0].bookedtime
      );
      const time = bookedtime.getTime() - today.getTime();
      const converted = Math.trunc(time / (1000 * 3600 * 24)) + 1;

      return converted;
    },
  },
  methods: {
    sweMonth(monthNr) {
      let swemonth = '';
      switch (monthNr) {
        case 0:
          swemonth = 'jan';
          break;
        case 1:
          swemonth = 'feb';
          break;
        case 2:
          swemonth = 'mars';
          break;
        case 3:
          swemonth = 'apr';
          break;
        case 4:
          swemonth = 'maj';
          break;
        case 5:
          swemonth = 'juni';
          break;
        case 6:
          swemonth = 'juli';
          break;
        case 7:
          swemonth = 'aug';
          break;
        case 8:
          swemonth = 'sep';
          break;
        case 9:
          swemonth = 'okt';
          break;
        case 10:
          swemonth = 'nov';
          break;
        case 11:
          swemonth = 'dec';
          break;
        default:
          break;
      }
      return swemonth;
    },
    sweWeekday(nr) {
      let swemonth = '';
      switch (nr) {
        case 1:
          swemonth = 'mån';
          break;
        case 2:
          swemonth = 'tis';
          break;
        case 3:
          swemonth = 'ons';
          break;
        case 4:
          swemonth = 'tors';
          break;
        case 5:
          swemonth = 'fre';
          break;
        case 6:
          swemonth = 'lör';
          break;
        case 7:
          swemonth = 'sön';
          break;

        default:
          break;
      }
      return swemonth;
    },
  },
};
</script>

<style lang="scss" scoped>
.time-left {
  background: $gold;
  padding: 10px 16px;
  border-radius: 0 20px;
  margin: -20px -20px 0 0;
  color: $dark-grey;
}
.time-left h2 {
  text-align: left;
  display: inline;
  color: $dark-grey;
}
.time-left p {
  display: inline;
  color: $dark-grey;
}
.time-left div {
  color: $dark-grey;
}
#next-game {
  margin: 20px 0;
  text-align: center;
}
.top-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: top;
}
div {
  color: $light;
}

.title {
  color: $light;
  margin: 0px 0 0;
  padding: 0;
  text-align: left;
}
.spelare {
  display: flex;
  flex-direction: row;
  color: $light;
}
.column {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.spelare div {
  color: $light;
}

.datum {
  margin: 0px 0 20px;
  color: $gold;
  text-transform: uppercase;
  font-size: 1.2em;
  text-align: left;
}

.lag {
  text-transform: uppercase;
}

h3 {
  margin: 0px 5px;
}

.spelar-ruta {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-size: 12px;
  font-weight: 300;
  margin: 10px 0;
}

.spelar-bild {
  width: 12vw;
  height: 12vw;
  border-radius: 100%;
  margin: 10px 10px 10px;
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.vs {
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 0px solid $light;
  margin: 0 10px;
  color: $light;
}

.vs-linje {
  height: 1px;
  background: $dark;
  width: 100%;
}

.vs-text {
  padding: 0 10px;
}

hr {
  width: 100%;
  height: 1px;
}
</style>

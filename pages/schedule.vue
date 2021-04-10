<template>
  <div id="match-schedule">
    <h1 class="title light">Ditt spelschema</h1>
    <div
      v-for="(match, index) in $store.state.upcomingGames"
      :key="index"
      class="card match"
    >
      <div class="text">
        <h2>Match {{ match.ID }}</h2>
        <div class="date-text">
          {{ formatedDate(match.bookedtime) }}
        </div>
      </div>

      <button class="cancel-button">Avboka</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    formatedDate(time) {
      const bookedtime = new Date(time);
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
#match-schedule {
  margin: 0 0 72px 0;
}
.date-text {
  margin: 0px 0 0px;
  color: $gold;
  text-transform: uppercase;
  font-size: 1.2em;
  text-align: left;
}
.match {
  margin: 0 0 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cancel-button {
  text-align: right;
  font-size: 14px;
}

#match-schedule .card {
  background: $dark-grey;
}
.title {
  margin: 0 0 20px 0;
}
.text {
  display: flex;
  flex-direction: column;
}
</style>

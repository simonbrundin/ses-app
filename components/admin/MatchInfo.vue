<template>
  <div v-if="isFetching" id="match-info">
    <div class="info">
      <h1>{{ $store.state.admin.selectedLeague }}</h1>
      <h2>Match # {{ $store.state.admin.selectedMatch.ID }}</h2>
    </div>
    <div class="players">
      <div>
        {{ hemma1 }}

        &

        {{ hemma2 }}
        -
        {{ $store.state.admin.selectedMatch.pointshemma }}
      </div>

      <div>
        {{ borta1 }}

        &
        {{ borta2 }}

        -
        {{ $store.state.admin.selectedMatch.pointsborta }}
      </div>
    </div>
    <div>
      <button @click="changePoints">Ändra poäng</button>
    </div>
    <button @click="updateGameData">Stäng</button>
    <div
      v-if="
        $store.state.admin.selectedMatch.evenslots.length === 0 &&
        $store.state.admin.selectedMatch.oddslots.length === 0
      "
      class="resolve-time"
    >
      <button @click="sendSMS">Skicka sms</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      server: this.$store.state.server,
      isFetching: true,
      borta1: 'Laddar',
      borta2: 'Laddar',
      hemma1: 'Laddar',
      hemma2: 'Laddar',
      playerToContact: {},
    };
  },
  computed: {},
  mounted() {
    this.getNames();
    this.getPlayerToContactToResolveTime();
  },
  methods: {
    async getPlayerToContactToResolveTime() {
      const player = await this.$axios.$get(
        '/admin/common-slots/' +
          this.$store.state.admin.selectedLeague +
          '/' +
          this.$store.state.admin.selectedMatch.ID
      );

      this.playerToContact = player;
    },
    async getNames() {
      const hemma1 = this.$store.state.admin.selectedMatch.hemma1;
      const hemma2 = this.$store.state.admin.selectedMatch.hemma2;
      const borta1 = this.$store.state.admin.selectedMatch.borta1;
      const borta2 = this.$store.state.admin.selectedMatch.borta2;

      const names = await this.$axios.$get(
        '/names/' + hemma1 + '/' + hemma2 + '/' + borta1 + '/' + borta2
      );
      this.$store.commit('admin/selectedMatchNames', names);
      this.updateNames();
      this.isFetching = true;
    },

    updateNames() {
      if (
        this.$store.state.admin.selectedMatchNames !== {} &&
        this.$store.state.admin.selectedMatch !== {}
      ) {
        this.hemma1 =
          this.$store.state.admin.selectedMatchNames[
            this.$store.state.admin.selectedMatch.hemma1
          ].firstname +
          ' ' +
          this.$store.state.admin.selectedMatchNames[
            this.$store.state.admin.selectedMatch.hemma1
          ].lastname;

        this.hemma2 =
          this.$store.state.admin.selectedMatchNames[
            this.$store.state.admin.selectedMatch.hemma2
          ].firstname +
          ' ' +
          this.$store.state.admin.selectedMatchNames[
            this.$store.state.admin.selectedMatch.hemma2
          ].lastname;

        this.borta1 =
          this.$store.state.admin.selectedMatchNames[
            this.$store.state.admin.selectedMatch.borta1
          ].firstname +
          ' ' +
          this.$store.state.admin.selectedMatchNames[
            this.$store.state.admin.selectedMatch.borta1
          ].lastname;

        this.borta2 =
          this.$store.state.admin.selectedMatchNames[
            this.$store.state.admin.selectedMatch.borta2
          ].firstname +
          ' ' +
          this.$store.state.admin.selectedMatchNames[
            this.$store.state.admin.selectedMatch.borta2
          ].lastname;
      } else {
        return 'Snart';
      }
    },
    async updateGameData() {
      const body = {
        pointshemma: this.$store.state.admin.selectedMatch.pointshemma,
        pointsborta: this.$store.state.admin.selectedMatch.pointsborta,
      };
      await this.$axios.$put(
        '/admin/game/' +
          this.$store.state.admin.selectedLeague +
          '/' +
          this.$store.state.admin.selectedMatch.ID,
        body
      );
      this.$store.commit('admin/selectedMatch', {});
    },
    saveMatchData() {
      const body = JSON.stringify({
        league: this.$store.state.admin.selectedLeague,
        ID: this.$store.state.admin.selectedMatch.ID,
        pointshemma: this.$store.state.admin.selectedMatch.pointshemma,
        pointsborta: this.$store.state.admin.selectedMatch.pointsborta,
      });

      fetch(this.$store.state.server + '/updatematch', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body,
      })
        .then((response) => response.json())
        .then((promise) => {
          this.$store.state.admin.showMatchWindow = false;
        });
      this.$store.commit('admin/selectedMatch', {});
    },

    changePoints() {
      switch (this.$store.state.admin.selectedMatch.pointsborta) {
        case 0:
          if (this.$store.state.admin.selectedMatch.pointshemma === 6) {
            this.$store.commit('admin/addHomePoints', 4);
            this.$store.commit('admin/addAwayPoints', 2);
          } else {
            this.$store.commit('admin/addHomePoints', 6);
            this.$store.commit('admin/addAwayPoints', 0);
          }

          break;
        case 2:
          this.$store.commit('admin/addHomePoints', 2);
          this.$store.commit('admin/addAwayPoints', 4);
          break;
        case 4:
          this.$store.commit('admin/addHomePoints', 0);
          this.$store.commit('admin/addAwayPoints', 6);
          break;
        case 6:
          this.$store.commit('admin/addHomePoints', 0);
          this.$store.commit('admin/addAwayPoints', 0);
          break;
        default:
          break;
      }
    },
    sendSMS() {
      const realDates = () => {
        const dates = [];
        const leagueStartDate = new Date(process.env.STARTDATE);
        const matchWeek = () => {
          return Math.ceil(
            (this.$store.state.admin.selectedMatch.ID / 33) * 11
          );
        };
        const weekOfYear = () => {
          const oneJan = new Date(firstDateToSuggest().getFullYear(), 0, 1);
          const numberOfDays = Math.floor(
            (firstDateToSuggest() - oneJan) / (24 * 60 * 60 * 1000)
          );
          const result = Math.ceil(
            (firstDateToSuggest().getDay() + 1 + numberOfDays) / 7
          );
          return result;
        };
        const firstDateToSuggest = () => {
          const daysToAdjust = (matchWeek() - 1) * 7;
          const date = new Date(leagueStartDate);
          date.setDate(leagueStartDate.getDate() + daysToAdjust);
          date.setHours(0);
          return date;
        };
        const isWeekOdd = () => {
          if (weekOfYear() % 2 === 1) {
            return true;
          } else {
            return false;
          }
        };
        const addOddDates = () => {
          const oddSlots = this.playerToContact.odd;

          for (let index = 0; index < oddSlots.length; index++) {
            const slot = oddSlots[index];
            const daysToAdjust = parseInt(slot.toString()[0]) - 1;
            const dateToSuggest = new Date();

            dateToSuggest.setDate(
              firstDateToSuggest().getDate() + daysToAdjust
            );
            const isNewDate = () => {
              if (oddSlots[index] === oddSlots[index - 1] || index === 0) {
                return true;
              } else {
                return false;
              }
            };

            const month = new Date(dateToSuggest).getMonth() + 1;
            const day = new Date(dateToSuggest).getDate();
            const hour = slot.toString()[1] + slot.toString()[2];
            const minutes = slot.toString()[3] + slot.toString()[4];
            const monthDay = day + '/' + month;
            const hourMinutes = hour + ':' + minutes;

            if (isNewDate()) {
              const obj = {};
              const tidArray = [hourMinutes];
              obj.datum = monthDay;
              obj.tider = tidArray;
              dates.push(obj);
            } else {
              const date = dates.findIndex((x) => x.datum === monthDay);
              dates[date].tider.push(hourMinutes);
            }

            dateToSuggest.setHours(hour);
            dateToSuggest.setMinutes(minutes);
            dateToSuggest.setSeconds(0);

            // dates.push(hour + ':' + minutes);
          }
        };
        const addEvenDates = () => {
          const evenSlots = this.playerToContact.even;

          for (let index = 0; index < evenSlots.length; index++) {
            const slot = evenSlots[index];
            const daysToAdjust = parseInt(slot.toString()[0]) - 1;
            const dateToSuggest = new Date();

            dateToSuggest.setDate(
              firstDateToSuggest().getDate() + daysToAdjust
            );
            const isNewDate = () => {
              if (evenSlots[index] === evenSlots[index - 1] || index === 0) {
                return true;
              } else {
                return false;
              }
            };

            const month = new Date(dateToSuggest).getMonth() + 1;
            const day = new Date(dateToSuggest).getDate();
            const hour = slot.toString()[1] + slot.toString()[2];
            const minutes = slot.toString()[3] + slot.toString()[4];
            const monthDay = day + '/' + month;
            const hourMinutes = hour + ':' + minutes;

            if (isNewDate()) {
              const obj = {};
              const tidArray = [hourMinutes];
              obj.datum = monthDay;
              obj.tider = tidArray;
              dates.push(obj);
            } else {
              const date = dates.findIndex((x) => x.datum === monthDay);
              dates[date].tider.push(hourMinutes);
            }

            dateToSuggest.setHours(hour);
            dateToSuggest.setMinutes(minutes);
            dateToSuggest.setSeconds(0);

            // dates.push(hour + ':' + minutes);
          }
        };
        const moveForwardOneWeek = () => {
          firstDateToSuggest().setDate(firstDateToSuggest().getDate() + 7);
        };
        if (isWeekOdd) {
          addOddDates();
          moveForwardOneWeek();
          addEvenDates();
        } else {
          addEvenDates();
          moveForwardOneWeek();
          addOddDates();
        }

        // const evenSlots = this.playerToContact.even;

        // console.log(firstDateToSuggest());
        // console.log('weekOfYear' + weekOfYear());
        // console.log(isWeekOdd());
        // console.log(matchWeek());
        return dates;
      };

      const tel = this.playerToContact.tel;

      const datumText = () => {
        let dateText = '';
        const newRow = () => {
          dateText = dateText.concat('%0A');
        };
        for (let index = 0; index < realDates().length; index++) {
          const date = realDates()[index];
          dateText = dateText.concat(date.datum);
          newRow();
          for (let index = 0; index < date.tider.length; index++) {
            const time = date.tider[index];
            dateText = dateText.concat('- ' + time);
            newRow();
          }
        }
        return dateText;
      };
      const text =
        'Hejsan! En match du ska spela saknar en gemensam tid. Skulle det vara möjligt för dig att kunna spela något av dessa datum?' +
        '%0A' +
        '%0A' +
        datumText() +
        '%0A' +
        '/SES-gänget';
      window.open('sms://' + tel + '/&body=' + text);
    },
  },
};
</script>

<style lang="scss" scoped>
#match-info {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 14px;
}
#match-info div {
  color: white;
}
.players {
  margin: 20px 0;
}
button {
  margin: 0 0 20px 0;
}
.info {
  margin: 30px 0 0 0;
}
</style>

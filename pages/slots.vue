<template>
  <div id="calendar">
    <!-- Knappar som byter spelare -->

    <div class="select-week-container">
      <div class="select-week">
        <div
          :class="{ selected: showedWeek }"
          class="odd-button"
          @click="select"
        >
          Udda veckor
        </div>
        <div
          :class="{ selected: !showedWeek }"
          class="even-button"
          @click="select"
        >
          Jämna veckor
        </div>
      </div>
      <div id="save-button">
        <button v-show="calendarVisas" @click="saveSchedule">
          <img src="~/assets/ikoner/check-icon.png" alt="" />
        </button>
      </div>
    </div>
    <!-- Udda veckor -->
    <div v-if="showedWeek" class="calendar">
      <!-- <h2 class="week-title">Udda veckor</h2> -->
      <div class="calendar-grid">
        <div class="column-times">
          <div class="empty-day"></div>
          <div
            v-for="(tid, index) in spelbaraTimmarUtanNollor"
            :key="index"
            class="time"
          >
            {{ tid }}
          </div>
        </div>
        <div class="column-lines">
          <div class="empty-day"></div>
          <div
            v-for="(tid, index) in spelbaraTimmarUtanNollor"
            :key="index"
            class="line"
          >
            <br />
          </div>
        </div>
        <div
          v-for="(dag, index) in rullandeDagar"
          :key="index"
          class="column-day"
          :class="'column-' + dag"
        >
          <div>{{ dag }}</div>

          <div
            v-for="(tid, index2) in spelbaraTimmar"
            :id="dag + tid"
            :key="index2"
            class="slot odd"
            :class="
              dag + tid && {
                marked: $store.state.user.oddslots.includes(dag + tid),
                varannan: index % 2 == 0,
              }
            "
            @click="klickadLucka"
          />
        </div>
      </div>
    </div>
    <!-- ---------------------------------------------------------------- -->
    <!-- Jämna veckor -->
    <div v-if="!showedWeek" class>
      <!-- <h2 class="week-title">Jämna veckor</h2> -->

      <div class="calendar-grid">
        <div class="column-times">
          <div class="empty-day"></div>
          <div
            v-for="(tid, index) in spelbaraTimmarUtanNollor"
            :key="index"
            class="time"
          >
            {{ tid }}
          </div>
        </div>
        <div class="column-lines">
          <div class="empty-day"></div>
          <div
            v-for="(tid, index) in spelbaraTimmarUtanNollor"
            :key="index"
            class="line"
          >
            <br />
          </div>
        </div>
        <div
          v-for="(dag, index) in rullandeDagar"
          :key="index"
          class="column-day"
          :class="'column-' + dag"
        >
          <div>{{ dag }}</div>

          <div
            v-for="(tid, index2) in spelbaraTimmar"
            :id="dag + tid"
            :key="index2"
            class="slot even"
            :class="
              dag + tid && {
                marked: $store.state.user.evenslots.includes(dag + tid),
                varannan: index % 2 == 0,
              }
            "
            @click="klickadLucka"
          />
        </div>
      </div>
    </div>
    <!-- ---------------------------------------------------------------- -->

    <!-- <router-link to="/"> -->

    <!-- </router-link> -->

    <!-- <div class="menu save-slots-menu" v-if="false">
      <router-link to="/">
        <div class="save-slots-button" @click="saveSchedule">
          <div class="save-slots-text">Spara schema</div>
          <svg-icon
            icon="cloud-upload"
            :hasFill="true"
            class="icon-calendar"
          ></svg-icon>
        </div>
      </router-link>
    </div> -->
  </div>
</template>

<script>
import syncUserInfo from '@/services/syncUserInfo.js';

export default {
  name: 'AvailabilityCalendar',

  mixins: [syncUserInfo],

  data() {
    return {
      spelare: 7,
      nextGameNr: 1,
      förnamn: '',
      showedWeek: true,
      startTid: 7,
      slutTid: 24,
      halvTimmar: false,
      fastVecka: true,
      calendarVisas: true,
      user: {
        oddSlots: [],
        evenSlots: [],
      },
    };
  },
  computed: {
    inloggad() {
      return this.$auth.user.sub.includes('facebook');
    },
    spelbaraTimmar() {
      const arrayMedTider = [];
      const repeat = this.slutTid - this.startTid;
      for (let i = 0; i < repeat; i++) {
        const tid = this.startTid + i;
        if (tid < 10) {
          arrayMedTider.push('0' + tid.toString() + '00');
          if (this.halvTimmar) {
            arrayMedTider.push('0' + tid.toString() + '30');
          }
        } else {
          arrayMedTider.push(tid.toString() + '00');
          if (this.halvTimmar) {
            arrayMedTider.push(tid.toString() + '30');
          }
        }
      }
      return arrayMedTider;
    },
    spelbaraTimmarUtanNollor() {
      const arrayMedTider = this.spelbaraTimmar;
      const arrayMedTiderUtanNollor = [];
      arrayMedTider.forEach((element) => {
        let timme = element.substring(0, 2);
        let helHalv = element.slice(2, 4);
        helHalv = helHalv.replace('00', '.00');
        helHalv = helHalv.replace('30', '.30');
        if (timme.startsWith('0')) {
          const utanNollor = timme.substr(1);
          timme = utanNollor;
        }
        const tid = timme + helHalv;
        arrayMedTiderUtanNollor.push(tid);
      });
      return arrayMedTiderUtanNollor;
    },
    rullandeDagar() {
      const idag = new Date();
      let idagVeckodagsnummer = idag.getDay();
      // let idagcalendardagsnr = idag.getDate();
      // let idagMånadsnr = idag.getMonth();
      if (this.fastVecka) {
        idagVeckodagsnummer = 0;
      }
      const veckodagar = [
        'M',
        'Ti',
        'O',
        'To',
        'F',
        'L',
        'S',
        'M',
        'Ti',
        'O',
        'To',
        'F',
        'L',
        'S',
      ];
      for (let index = 0; index < 7 - idagVeckodagsnummer; index++) {
        veckodagar.pop();
      }
      for (let index = 0; index < idagVeckodagsnummer; index++) {
        veckodagar.shift();
      }

      return veckodagar;
    },
  },
  mounted() {
    // this.getSchedule();
    // Code that will run only after the
    // entire view has been rendered
  },
  methods: {
    select(element) {
      const classList = element.target.classList;
      if (classList.contains('odd-button')) {
        this.showedWeek = true;
      } else if (classList.contains('even-button')) {
        this.showedWeek = false;
      }
    },
    klickadLucka(lucka) {
      lucka.target.classList.toggle('marked');
      if (lucka.target.classList.contains('marked')) {
        if (lucka.target.classList.contains('odd')) {
          this.$store.commit('addOddSlot', lucka.target.id);
        } else if (lucka.target.classList.contains('even')) {
          this.$store.commit('addEvenSlot', lucka.target.id);
        }
      } else if (lucka.target.classList.contains('odd')) {
        this.$store.commit('removeOddSlot', lucka.target.id);
      } else if (lucka.target.classList.contains('even')) {
        this.$store.commit('removeEvenSlot', lucka.target.id);
      }
    },
    isEnoughSlotsFilled() {
      if (
        this.$store.state.user.oddslots.length > 7 &&
        this.$store.state.user.evenslots.length > 7
      ) {
        this.$store.commit('notifications/scheduleInstructions', false);
        return false;
      } else {
        this.$store.commit('notifications/scheduleInstructions', true);
        return true;
      }
    },
    getSchedule() {
      this.user.oddSlots = this.$store.state.user.oddslots;
      this.user.evenSlots = this.$store.state.user.evenslots;
    },
    async saveSchedule() {
      if (this.isEnoughSlotsFilled()) {
        return 0;
      } else {
        // Skicka luckorna till servern

        const body = {
          oddSlots: this.$store.state.user.oddslots,
          evenSlots: this.$store.state.user.evenslots,
        };
        await this.$axios.$put('/slots', body);

        this.$router.push('/');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#calendar {
  margin: 0 0 65px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.288));
}

#calendar .full-screen {
  position: fixed;
  padding: 0;
  top: 0;
  height: calc(100vh - 20px);
  width: calc(100vw - 40px);
  background: $dark;
  left: 0;
  margin: 0;
  z-index: 200;
}

// Toggle för att välja vecka

.select-week-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.select-week {
  display: flex;
  justify-content: flex-start;
  padding: 0px;
  background: $week-toggle-bg-color;
  border-radius: $border-radius;
  font-size: 12px;
  text-transform: uppercase;
  height: 100%;
}

.select-week div {
  padding: 12px 20px;
  color: #a8a8a8;
  border-radius: $border-radius;
}

.select-week .selected {
  background: $selected-toggle-color;
  color: $dark;
  border-radius: $border-radius $border-radius 0 $border-radius;
}

// -----------------------------------------------------------------------------

.calendar-grid {
  display: grid;
  grid-template-columns: 1fr 10px repeat(7, 1fr);
  background: $slots-bg-color;
  margin: 0;
}

.time {
  height: calc((100vh - 260px) / 17);
  border-bottom: 1px solid transparent;
  color: #a8a8a8;
  position: relative;
  top: -8px;
  padding: 0 8px;
  font-size: 12px;
  font-weight: 300;
  text-align: right;
}

.time:nth-child(2) {
  visibility: hidden;
}

// .time:last-child {
//   border-bottom: 1px solid $slot-gap-color;
// }
.empty-day {
  background: $days-bg-color;
  color: white;
  padding: 10px 0 25px 8px;
  height: 1px;
}

.empty-day div {
  position: relative;
  top: 3px;
}
.empty-day svg {
  height: 16px;
  fill: $days-bg-color;
}

#calendar .icon-calendar svg {
  height: 16px;
}

// Fixar border-radius på kalender ---------------------------------------------
.calendar-grid {
  border-radius: calc(2px + #{$border-radius}) calc(2px + #{$border-radius})
    $border-radius $border-radius;
}

.column-times div:first-child {
  border-radius: $border-radius 0 0 0;
}
.column-times div:last-child {
  border-radius: 0 0 0 $border-radius;
}
.column-S div:first-child {
  border-radius: 0 $border-radius 0 0;
  // border-left: 1px solid transparent;
}
.column-S div:last-child {
  border-radius: 0 0 $border-radius 0;
}

// -----------------------------------------------------------------------------
.line {
  border-top: 1px solid $slot-gap-color;
  height: calc((100vh - 260px) / 17);
}

.line:nth-child(2) {
  border-top: 1px solid $slots-bg-color;
  height: calc((100vh - 260px) / 17);
}

.slot {
  background: $slots-bg-color;
  height: calc((100vh - 260px) / 17);
  border-top: 1px solid $slot-gap-color;
  border-left: 1px solid $slot-gap-color;
}

.slot:last-child {
}

.column-day div:first-child {
  background: $days-bg-color;
  color: #a8a8a8;
  font-weight: 300;
  padding: 10px 0;
}

.marked {
  background: $marked-slots-color;
}

#save-button {
  text-decoration: none;
  display: flex;
  justify-content: flex-end;

  padding: 0 0 0 0;
}
#save-button button {
  padding: 0;
}
#save-button button img {
  height: 24px;
  padding: 5px 8px 2px 10px;
}
#calendar a {
  text-decoration: none;
}

.save-slots-menu a {
  text-decoration: none;
}

.save-slots-button {
  display: flex;

  justify-content: center;
}

.save-slots-button .svg-container {
  margin-top: -5px;
}

.save-slots-text {
  color: $light;
  margin-right: 10px;
  text-decoration: none;
}
.week-title {
  margin: 0 0 20px 0;
}
</style>

<template>
  <div id="calendar">
    <div v-if="this.$auth.user.sub" @DOMNodeInserted="getSchedule"></div>
    <div
      class="full-screen"
      v-if="this.$store.state.notifications.showScheduleInstructions"
    >
      <ScheduleInstructions></ScheduleInstructions>
    </div>
    <div
      class="full-screen"
      v-if="this.$store.state.notifications.NotEnoughSlots"
    >
      <NotEnoughSlots></NotEnoughSlots>
    </div>

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
    </div>
    <!-- Udda veckor -->
    <div class="calendar" v-if="showedWeek">
      <!-- <h2 class="week-title">Udda veckor</h2> -->
      <div class="calendar-grid">
        <div class="column-times">
          <div class="empty-day">
            <svg-icon
              icon="time"
              :hasFill="true"
              class="icon-calendar"
            ></svg-icon>
          </div>
          <div
            v-for="(tid, index) in spelbaraTimmarUtanNollor"
            :key="index"
            class="time"
          >
            {{ tid }}
          </div>
        </div>
        <div class="column-lines">
          <div class="empty-day">
            <br />
          </div>
          <div
            v-for="(tid, index) in spelbaraTimmarUtanNollor"
            :key="index"
            class="line"
          >
            <br />
          </div>
        </div>
        <div
          class="column-day"
          v-for="(dag, index) in rullandeDagar"
          :key="index"
          :class="'column-' + dag"
        >
          <div>{{ dag }}</div>

          <div
            v-for="(tid, index) in spelbaraTimmar"
            :key="index"
            class="slot odd"
            :id="dag + tid"
            :class="
              dag + tid && {
                marked: user.oddSlots.includes(dag + tid),
                varannan: index % 2 == 0,
              }
            "
            @click="klickadLucka"
          ></div>
        </div>
      </div>
    </div>
    <!-- ---------------------------------------------------------------- -->
    <!-- Jämna veckor -->
    <div class v-if="!showedWeek">
      <!-- <h2 class="week-title">Jämna veckor</h2> -->

      <div class="calendar-grid">
        <div class="column-times">
          <div class="empty-day">
            <svg-icon
              icon="time"
              :hasFill="true"
              class="icon-calendar"
            ></svg-icon>
          </div>
          <div
            v-for="(tid, index) in spelbaraTimmarUtanNollor"
            :key="index"
            class="time"
          >
            {{ tid }}
          </div>
        </div>
        <div class="column-lines">
          <div class="empty-day">
            <br />
          </div>
          <div
            v-for="(tid, index) in spelbaraTimmarUtanNollor"
            :key="index"
            class="line"
          >
            <br />
          </div>
        </div>
        <div
          class="column-day"
          v-for="(dag, index) in rullandeDagar"
          :key="index"
          :class="'column-' + dag"
        >
          <div>{{ dag }}</div>

          <div
            v-for="(tid, index) in spelbaraTimmar"
            :key="index"
            class="slot even"
            :id="dag + tid"
            :class="
              dag + tid && {
                marked: user.evenSlots.includes(dag + tid),
                varannan: index % 2 == 0,
              }
            "
            @click="klickadLucka"
          ></div>
        </div>
      </div>
    </div>
    <!-- ---------------------------------------------------------------- -->

    <!-- <router-link to="/"> -->
    <div id="save-button">
      <button v-show="calendarVisas" @click="saveSchedule">
        Spara ändringar
      </button>
    </div>
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
import syncUserInfo from "@/services/syncUserInfo.js";
import NotEnoughSlots from "@/components/notifications/NotEnoughSlots.vue";
import ScheduleInstructions from "@/components/notifications/ScheduleInstructions.vue";
export default {
  name: "AvailabilityCalendar",
  components: {
    NotEnoughSlots,
    ScheduleInstructions,
  },

  data: () => {
    return {
      spelare: 7,
      nextGameNr: 1,
      förnamn: "",
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
    inloggad: function () {
      console.log(this.$auth.user.sub.includes("facebook"));
      return this.$auth.user.sub.includes("facebook");
    },
    spelbaraTimmar() {
      let arrayMedTider = [];
      let repeat = this.slutTid - this.startTid;
      for (let i = 0; i < repeat; i++) {
        let tid = this.startTid + i;
        if (tid < 10) {
          arrayMedTider.push("0" + tid.toString() + "00");
          if (this.halvTimmar) {
            arrayMedTider.push("0" + tid.toString() + "30");
          }
        } else {
          arrayMedTider.push(tid.toString() + "00");
          if (this.halvTimmar) {
            arrayMedTider.push(tid.toString() + "30");
          }
        }
      }
      return arrayMedTider;
    },
    spelbaraTimmarUtanNollor() {
      let arrayMedTider = this.spelbaraTimmar;
      let arrayMedTiderUtanNollor = [];
      arrayMedTider.forEach((element) => {
        let timme = element.substring(0, 2);
        let helHalv = element.slice(2, 4);
        helHalv = helHalv.replace("00", ".00");
        helHalv = helHalv.replace("30", ".30");
        if (timme.startsWith("0")) {
          let utanNollor = timme.substr(1);
          timme = utanNollor;
        }
        let tid = timme + helHalv;
        arrayMedTiderUtanNollor.push(tid);
      });
      return arrayMedTiderUtanNollor;
    },
    rullandeDagar() {
      let idag = new Date();
      let idagVeckodagsnummer = idag.getDay();
      // let idagcalendardagsnr = idag.getDate();
      // let idagMånadsnr = idag.getMonth();
      if (this.fastVecka) {
        idagVeckodagsnummer = 0;
      }
      let veckodagar = [
        "M",
        "Ti",
        "O",
        "To",
        "F",
        "L",
        "S",
        "M",
        "Ti",
        "O",
        "To",
        "F",
        "L",
        "S",
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
  methods: {
    select: function (element) {
      let classList = element.target.classList;
      if (classList.contains("odd-button")) {
        this.showedWeek = true;
      } else if (classList.contains("even-button")) {
        this.showedWeek = false;
      }
    },
    klickadLucka: function (lucka) {
      lucka.target.classList.toggle("marked");
      if (lucka.target.classList.contains("marked")) {
        if (lucka.target.classList.contains("odd")) {
          this.user.oddSlots.push(lucka.target.id);
        } else if (lucka.target.classList.contains("even")) {
          this.user.evenSlots.push(lucka.target.id);
        }
      } else {
        if (lucka.target.classList.contains("odd")) {
          this.user.oddSlots = this.user.oddSlots.filter(
            (item) => item !== lucka.target.id
          );
        } else if (lucka.target.classList.contains("even")) {
          this.user.evenSlots = this.user.evenSlots.filter(
            (item) => item !== lucka.target.id
          );
        }
      }
    },
    checkEnoughSlots: function () {
      if (this.user.oddSlots.length > 7 && this.user.evenSlots.length > 7) {
        return false;
      } else {
        this.$store.commit("NotEnoughSlots", true);
        return true;
      }
    },
    saveSchedule: function () {
      if (this.checkEnoughSlots()) {
        null;
      } else {
        // Dölj calendarn
        this.$store.commit("showSchedule", false);
        // Skicka luckorna till servern

        let body = JSON.stringify({
          spelare: this.$auth.user.sub,
          oddSlots: this.user.oddSlots,
          evenSlots: this.user.evenSlots,
        });
        console.log(body);
        fetch(this.$store.state.server + "/sparaluckor", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: body,
        });
      }
    },
    getSchedule: function () {
      this.getUserInfo();
      let body = JSON.stringify({
        spelare: this.$auth.user.sub,
      });

      // Hämta luckor

      fetch(this.$store.state.server + "/luckor", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: body,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.u !== null) {
            this.user.oddSlots = data.u;
          }

          if (data.j !== null) {
            this.user.evenSlots = data.j;
          }
          if (this.user.oddSlots.length > 7 && this.user.evenSlots.length > 7) {
            this.$store.commit("showSchedule", false);
            this.$store.commit("showScheduleInstructions", false);
          }
        });
    },
  },
  mixins: [syncUserInfo],
};
</script>

<style lang="scss" scope>
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
  justify-content: center;
  margin-bottom: 10px;
}

.select-week {
  display: flex;
  justify-content: center;
  padding: 5px;
  background: $week-toggle-bg-color;
  border-radius: $border-radius;
}

.select-week div {
  padding: 10px 20px;
  color: #a8a8a8;
  border-radius: $border-radius;
}

.select-week .selected {
  background: $selected-toggle-color;
  color: $light;
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
  padding: 10px 0 10px 8px;
}

.empty-day div {
  position: relative;
  top: 3px;
}
.empty-day svg {
  height: 16px;
  fill: $light;
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
  justify-content: space-around;
  width: 100%;
  margin: 10px 0 0 0;
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



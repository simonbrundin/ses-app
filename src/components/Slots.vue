<template>
  <div id="calendar">
    <!-- Knappar som byter spelare -->

    <!-- Udda veckor -->
    <div class="card">
      <h2 class="week-title">Udda veckor</h2>
      <div class="calendar-grid">
        <div class="column-times">
          <div class="empty-day">
            <br />
          </div>
          <div v-for="(tid, index) in spelbaraTimmarUtanNollor" :key="index" class="time">{{tid}}</div>
        </div>
        <div class="column-lines">
          <div class="empty-day">
            <br />
          </div>
          <div v-for="(tid, index) in spelbaraTimmarUtanNollor" :key="index" class="line">
            <br />
          </div>
        </div>
        <div
          class="column-day"
          v-for="(dag, index) in rullandeDagar"
          :key="index"
          :class="'column-'+ dag"
        >
          <div>{{dag}}</div>

          <div
            v-for="(tid, index) in spelbaraTimmar"
            :key="index"
            class="slot odd"
            :id="dag + tid"
            :class="dag + tid && { marked: 
          user.oddSlots.includes(dag + tid), varannan: index % 2 == 0 }"
            @click="klickadLucka"
          ></div>
        </div>
      </div>
    </div>
    <!-- ---------------------------------------------------------------- -->
    <!-- Jämna veckor -->
    <div class="card even-slots-card">
      <h2 class="week-title">Jämna veckor</h2>

      <div class="calendar-grid">
        <div class="column-times">
          <div class="empty-day">
            <br />
          </div>
          <div v-for="(tid, index) in spelbaraTimmarUtanNollor" :key="index" class="time">{{tid}}</div>
        </div>
        <div class="column-lines">
          <div class="empty-day">
            <br />
          </div>
          <div v-for="(tid, index) in spelbaraTimmarUtanNollor" :key="index" class="line">
            <br />
          </div>
        </div>
        <div
          class="column-day"
          v-for="(dag, index) in rullandeDagar"
          :key="index"
          :class="'column-'+ dag"
        >
          <div>{{dag}}</div>

          <div
            v-for="(tid, index) in spelbaraTimmar"
            :key="index"
            class="slot even"
            :id="dag + tid"
            :class="dag + tid && { marked: 
          user.evenSlots.includes(dag + tid), varannan: index % 2 == 0 }"
            @click="klickadLucka"
          ></div>
        </div>
      </div>
    </div>
    <!-- ---------------------------------------------------------------- -->
    <router-link to="/">
      <div id="save-button">
        <button v-show="calendarVisas" @click="saveSchedule">Spara ändringar</button>
      </div>
    </router-link>
    <app-bottom-menu v-if="false"></app-bottom-menu>
  </div>
</template>

<script>
import BottomMenu from "./BottomMenu.vue";
export default {
  name: "AvailabilityCalendar",
  components: {
    "app-bottom-menu": BottomMenu,
  },
  data: () => {
    return {
      spelare: 10,
      nextGameNr: 1,
      förnamn: "",
      server: "http://localhost:7777/",
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
    saveSchedule: function () {
      // Dölj calendarn
      this.calendarVisas = false;
      // Skicka luckorna till servern

      let body = JSON.stringify({
        spelare: this.$store.state.playerID,
        oddSlots: this.user.oddSlots,
        evenSlots: this.user.evenSlots,
      });

      fetch(this.server + "sparaluckor", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: body,
      });
    },
  },
  mounted() {
    let body = JSON.stringify({
      spelare: this.$store.state.playerID,
    });
    // Hämta spelarinfo
    fetch(this.server + "spelare", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: body,
    })
      .then((response) => response.json())
      .then((data) => {
        this.förnamn = data;
      });

    // Hämta luckor

    fetch(this.server + "luckor", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: body,
    })
      .then((response) => response.json())
      .then((data) => {
        this.user.oddSlots = data.u;
        this.user.evenSlots = data.j;
      });
  },
};
</script>

<style lang="scss">
#calendar {
  margin: 0 0 100px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.even-slots-card {
  margin-top: 20px;
}

.week-title {
  margin: 0 0 20px 0;
}

.calendar-grid {
  display: grid;
  grid-template-columns: 1fr 10px repeat(7, 1fr);
}

.time {
  height: 24px;
  border-bottom: 1px solid $light;
  color: #a8a8a8;
  position: relative;
  top: -8px;
  padding-right: 5px;
  font-size: 12px;
  font-weight: 300;
}

.time:nth-child(2) {
  visibility: hidden;
}

.empty-day {
  background: #f8fafd;
  color: white;
}

.line {
  border-top: 1px solid $slot-gap-color;
  height: 24px;
}

.line:nth-child(2) {
  border-top: 1px solid $light;
  height: 24px;
}

.slot {
  background: $light;
  height: 24px;
  border-top: 1px solid $slot-gap-color;
  border-left: 1px solid $slot-gap-color;
}

.slot:last-child {
  border-bottom: 1px solid $slot-gap-color;
}

.column-S .slot {
  border-right: 1px solid $slot-gap-color;
}

.column-day div:first-child {
  background: $days-bg-color;
  color: #a8a8a8;
  font-weight: 300;
}

.marked {
  background: $marked-slots-color;
}

#save-button {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 0 0 20px 0;
}
</style>



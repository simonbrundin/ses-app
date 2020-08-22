<template>
  <div id="calendar">
    <!-- Knappar som byter spelare -->

    <!-- Udda veckor -->

    <!-- <div id="udda" v-show="calendarVisas">
      <h2 class="veckorubrik">Udda veckor</h2>
      <div class="dagar">
        <div class="tider">
          <div class="tid-rubrik dag"></div>
          <div
            v-for="(tid, index) in spelbaraTimmarUtanNollor"
            :key="index"
            :class="tid"
            class="tid"
          >{{tid}}</div>
        </div>
        <div v-for="(dag, index) in rullandeDagar" :key="index" :class="dag" class="dag">
          {{dag}}
          <div
            class="lucka udda"
            :id="dag + tid"
            v-for="(tid, index) in spelbaraTimmar"
            :key="index"
            :class="dag + tid && { marked: 
          user.oddSlots.includes(dag + tid), varannan: index % 2 == 0 }"
            @click="klickadLucka"
          ></div>
        </div>
      </div>
      
    </div>-->

    <!-- Jämna veckor -->
    <!-- <div id="jämna" v-show="calendarVisas">
      <h2 class="veckorubrik">Jämna veckor</h2>
      <div class="dagar">
        <div class="tider">
          <div class="tid-rubrik dag"></div>
          <div v-for="(tid, index) in spelbaraTimmar" :key="index" :class="tid" class="tid">{{tid}}</div>
        </div>
        <div v-for="(dag, index) in rullandeDagar" :key="index" :class="dag" class="dag">
          {{dag}}
          <div
            v-for="(tid, index) in spelbaraTimmar"
            :key="index"
            :class="dag + tid && { marked: 
          user.evenSlots.includes(dag + tid), varannan: index % 2 == 0 }"
            class="lucka jämn"
            :id="dag + tid"
            @click="klickadLucka"
          ></div>
        </div>
      </div>
      <div class="schema-namn-rubrik">
        <u>{{förnamn}}s schema</u>
      </div>
    </div>-->
    <!-- ---------------------------------------------------------------- -->

    <!-- Udda veckor -->
    <h2 class="week-title">Udda veckor</h2>
    <div id="odd-grid">
      <div class="column-times">
        <div class="empty-day">
          <br />
        </div>
        <div v-for="(tid, index) in spelbaraTimmarUtanNollor" :key="index" class="time">{{tid}}</div>
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
          class="slot udda"
          :id="dag + tid"
          :class="dag + tid && { marked: 
          user.oddSlots.includes(dag + tid), varannan: index % 2 == 0 }"
          @click="klickadLucka"
        ></div>
      </div>
    </div>
    <!-- ---------------------------------------------------------------- -->
    <!-- Jämna veckor -->
    <h2 class="week-title">Jämna veckor</h2>
    <div id="odd-grid">
      <div class="column-times">
        <div class="empty-day">
          <br />
        </div>
        <div v-for="(tid, index) in spelbaraTimmarUtanNollor" :key="index" class="time">{{tid}}</div>
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
          class="slot udda"
          :id="dag + tid"
          :class="dag + tid && { marked: 
          user.evenSlots.includes(dag + tid), varannan: index % 2 == 0 }"
          @click="klickadLucka"
        ></div>
      </div>
    </div>
    <!-- ---------------------------------------------------------------- -->
    <router-link to="/">
      <div id="save-button">
        <button v-show="calendarVisas" @click="saveSchedule">Spara ändringar</button>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "AvailabilityCalendar",
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
        helHalv = helHalv.replace("00", "");
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
        if (lucka.target.classList.contains("udda")) {
          this.user.oddSlots.push(lucka.target.id);
        } else if (lucka.target.classList.contains("jämn")) {
          this.user.evenSlots.push(lucka.target.id);
        }
      } else {
        if (lucka.target.classList.contains("udda")) {
          this.user.oddSlots = this.user.oddSlots.filter(
            (item) => item !== lucka.target.id
          );
        } else if (lucka.target.classList.contains("jämn")) {
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
#odd-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}

.week-title {
  margin: 0 0 20px 0;
}

.time {
  height: 24px;
  border-bottom: 1px solid $light;
  color: #a8a8a8;
  position: relative;
  top: -10px;
}

.time:nth-child(2) {
  visibility: hidden;
}

.empty-day {
  background: #f8fafd;
  color: white;
}

.slot {
  background: $light;
  height: 24px;
  border-top: 1px solid #f4f4f4;
  border-right: 1px solid #f4f4f4;
}

.column-day div:first-child {
  background: #f8fafd;
  color: #a8a8a8;
}

.marked {
  background: $blue;
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



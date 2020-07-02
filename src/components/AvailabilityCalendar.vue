<template>
  <div>
    <button v-show="kalenderVisas" @click="kalenderVisas = false">Bekräfta tider</button>
    <button v-show="!kalenderVisas" @click="kalenderVisas = true">Visa kalender</button>
    <div id="availability-calendar" v-show="kalenderVisas">
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
            :class="dag + tid && { markerad: 
          user.luckor.includes(dag + tid) }"
            class="lucka"
            @click="klickadLucka"
          ></div>
        </div>
      </div>
      <!-- <div class="dagar">
        <div class="tid-rubrik dag"></div>
        <div v-for="(dag, index) in rullandeDagar" :key="index" :class="dag" class="dag">{{dag}}</div>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "AvailabilityCalendar",
  data: () => {
    return {
      startTid: 7,
      slutTid: 24,
      halvTimmar: false,
      fastVecka: true,
      kalenderVisas: true,
      user: {
        luckor: [
          "M1100",
          "M1130",
          "M1200",
          "M1230",
          "M1700",
          "M1730",
          "M1800",
          "M1830",
          "M1900",
          "M1930",
          "Ti1100",
          "Ti1130",
          "Ti1200",
          "Ti1230",
          "Ti1700",
          "Ti1730",
          "Ti1800",
          "Ti1830",
          "Ti1900",
          "Ti1930",
          "To1100",
          "To1130",
          "To1200",
          "To1230",
          "To1700",
          "To1730",
          "To1800",
          "To1830",
          "To1900",
          "To1930",
          "S0900",
          "S0930",
          "S1000",
          "S1030",
          "S1100",
          "S1130",
          "L0900",
          "L0930",
          "L1000",
          "L1030",
          "L1100",
          "L1130"
        ]
      }
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

    rullandeDagar() {
      let idag = new Date();
      let idagVeckodagsnummer = idag.getDay();
      // let idagKalenderdagsnr = idag.getDate();
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
        "S"
      ];
      for (let index = 0; index < 7 - idagVeckodagsnummer; index++) {
        veckodagar.pop();
      }
      for (let index = 0; index < idagVeckodagsnummer; index++) {
        veckodagar.shift();
      }

      return veckodagar;
    }
  },
  methods: {
    klickadLucka: lucka => {
      lucka.target.classList.toggle("markerad");
    }
  }
};
</script>

<style>
/* #availability-calendar {
  display: grid;
  grid-template-columns: 2fr repeat(7, 1fr);
} */

.dagar {
  display: flex;
  justify-content: space-between;
  font-size: 1em;
}
.tider {
  display: flex;
  flex-direction: column;
}
.dag {
  font-size: 1em;
}
.tid {
  height: 1em;
  margin: 0 2px 4px;
}
.tid-rubrik {
  height: 1.2em;
}
.lucka {
  background: pink;
  width: 10vw;
  height: 1em;
  margin: 4px 2px;
}
.lucka:first-child {
  margin: 0 2px 4px;
}
.markerad {
  background: green;
}
button {
  padding: 10px 20px;
  background: grey;
  border-radius: 100px;
  margin: 0 0 20px 0;
  font-size: 1em;
}
</style>
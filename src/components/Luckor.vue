<template>
  <div id="kalender">
    <router-link to="/">
      <button v-show="kalenderVisas" @click="saveSchedule" id="spara-knapp">Spara ändringar</button>
    </router-link>
    <button v-show="!kalenderVisas" @click="kalenderVisas = true">Ändra schema</button>
    <div class="light center">
      <u>{{förnamn}}s schema</u>
    </div>
    <!-- Udda veckor -->
    <div id="udda" v-show="kalenderVisas">
      <div class="light center">Udda veckor</div>
      <div class="dagar">
        <div class="tider light">
          <div class="tid-rubrik dag"></div>
          <div v-for="(tid, index) in spelbaraTimmar" :key="index" :class="tid" class="tid">{{tid}}</div>
        </div>
        <div v-for="(dag, index) in rullandeDagar" :key="index" :class="dag" class="dag">
          {{dag}}
          <div
            class="lucka udda"
            :id="dag + tid"
            v-for="(tid, index) in spelbaraTimmar"
            :key="index"
            :class="dag + tid && { markerad: 
          user.uddaLuckor.includes(dag + tid) }"
            @click="klickadLucka"
          ></div>
        </div>
      </div>
      <!-- <div class="dagar">
        <div class="tid-rubrik dag"></div>
        <div v-for="(dag, index) in rullandeDagar" :key="index" :class="dag" class="dag">{{dag}}</div>
      </div>-->
    </div>

    <!-- Jämna veckor -->
    <div id="jämna" v-show="kalenderVisas">
      <div class="light center">Jämna veckor</div>
      <div class="dagar">
        <div class="tider light">
          <div class="tid-rubrik dag"></div>
          <div v-for="(tid, index) in spelbaraTimmar" :key="index" :class="tid" class="tid">{{tid}}</div>
        </div>
        <div v-for="(dag, index) in rullandeDagar" :key="index" :class="dag" class="dag">
          {{dag}}
          <div
            v-for="(tid, index) in spelbaraTimmar"
            :key="index"
            :class="dag + tid && { markerad: 
          user.jämnaLuckor.includes(dag + tid) }"
            class="lucka jämn"
            :id="dag + tid"
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
      spelare: 5,
      nextGameNr: 1,
      förnamn: "",
      server: "http://localhost:7777/",
      startTid: 7,
      slutTid: 24,
      halvTimmar: false,
      fastVecka: true,
      kalenderVisas: true,
      user: {
        uddaLuckor: [],
        jämnaLuckor: [],
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
      lucka.target.classList.toggle("markerad");
      if (lucka.target.classList.contains("markerad")) {
        if (lucka.target.classList.contains("udda")) {
          this.user.uddaLuckor.push(lucka.target.id);
        } else if (lucka.target.classList.contains("jämn")) {
          this.user.jämnaLuckor.push(lucka.target.id);
        }
      } else {
        if (lucka.target.classList.contains("udda")) {
          this.user.uddaLuckor = this.user.uddaLuckor.filter(
            (item) => item !== lucka.target.id
          );
        } else if (lucka.target.classList.contains("jämn")) {
          this.user.jämnaLuckor = this.user.jämnaLuckor.filter(
            (item) => item !== lucka.target.id
          );
        }
      }
    },
    saveSchedule: function () {
      // Dölj kalendern
      this.kalenderVisas = false;
      // Skicka luckorna till servern

      let body = JSON.stringify({
        spelare: this.spelare,
        uddaLuckor: this.user.uddaLuckor,
        jämnaLuckor: this.user.jämnaLuckor,
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
      spelare: this.spelare,
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
        this.user.uddaLuckor = data.u;
        this.user.jämnaLuckor = data.j;
      });
  },
};
</script>

<style>
/* #availability-calendar {
  display: grid;
  grid-template-columns: 2fr repeat(7, 1fr);
} */

#spara-knapp {
  position: fixed;
  bottom: 0;
}

#kalender {
  margin: 0 0 100px 0;
  display: flex;
  flex-direction: column;
}

.dagar {
  display: flex;
  justify-content: center;
  font-size: 1em;
}
.tider {
  display: flex;
  flex-direction: column;
  margin: -10px 5px 0 0;
  text-align: right;
}
.dag {
  font-size: 1em;
  color: white;
  text-align: center;
}
.tid {
  height: 1em;
  margin: 0 0px 4px;
}
.tid-rubrik {
  height: 1.2em;
}
.lucka {
  background: white;
  width: 10vw;
  height: 1em;
  margin: 4px 2px;
}
.lucka:first-child {
  margin: 0 2px 4px;
}
.markerad {
  background: #bd996c;
}
button {
  padding: 10px 20px;
  background: grey;
  border-radius: 100px;
  margin: 0 0 20px 0;
  font-size: 1em;
}
</style>
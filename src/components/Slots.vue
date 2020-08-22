<template>
  <div id="kalender">
    <router-link to="/">
      <div class>
        <button id="spara-knapp" v-show="kalenderVisas" @click="saveSchedule">Spara ändringar</button>
      </div>
    </router-link>
    <button v-show="!kalenderVisas" @click="kalenderVisas = true">Ändra schema</button>

    <!-- Udda veckor -->

    <div id="udda" v-show="kalenderVisas">
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
            :class="dag + tid && { markerad: 
          user.uddaLuckor.includes(dag + tid), varannan: index % 2 == 0 }"
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
            :class="dag + tid && { markerad: 
          user.jämnaLuckor.includes(dag + tid), varannan: index % 2 == 0 }"
            class="lucka jämn"
            :id="dag + tid"
            @click="klickadLucka"
          ></div>
        </div>
      </div>
      <div class="schema-namn-rubrik">
        <u>{{förnamn}}s schema</u>
      </div>
    </div>
    <!-- ---------------------------------------------------------------- -->
    <div id="udda-grid">
      <div class="tid-rubrik dag"></div>
      <div v-for="(dag, index) in rullandeDagar" :key="index" :class="dag" class="dag">{{dag}}</div>
      <div v-for="(tid, index) in spelbaraTimmar" class="tid" :key="index" :class="tid">
        <div>{{spelbaraTimmarUtanNollor[index]}}</div>
        <div
          class="lucka udda"
          :id="dag + tid"
          v-for="(dag, index) in rullandeDagar"
          :key="index"
          :class="dag + tid && { markerad: 
          user.uddaLuckor.includes(dag + tid), varannan: index % 2 == 0 }"
          @click="klickadLucka"
        ></div>
      </div>
      <div></div>
    </div>
    <!-- ---------------------------------------------------------------- -->
  </div>
</template>

<script>
export default {
  name: "AvailabilityCalendar",
  data: () => {
    return {
      spelare: 7,
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
        spelare: this.$store.state.playerID,
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
        this.user.uddaLuckor = data.u;
        this.user.jämnaLuckor = data.j;
      });
  },
};
</script>

<style lang="scss">
/* #availability-calendar {
  display: grid;
  grid-template-columns: 2fr repeat(7, 1fr);
} */

#spara-knapp {
  position: fixed;
  bottom: 0;
  margin: auto;
  justify-self: center;
}

#kalender {
  margin: 0 0 100px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
}

#udda-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  margin-bottom: 500px;
}

.tider {
  display: flex;
  flex-direction: column;
  width: 12.5%;
  margin: 0;
  text-align: left;
}
.dagar {
  display: flex;
  justify-content: stretch;
  font-size: 1em;
}

.tid:nth-child(2) {
  color: #222429;
  margin: 12px 0 0 0;
  display: none;
}

.dag {
  width: 12.5%;
  color: $dark;
  text-align: center;
}
.tid {
  font-size: 10px;
  height: 6.5vw;
  margin: 0 10px 0 0;
  text-align: right;
}

.tid-rubrik {
  height: 2.35em;
}
.lucka {
  background: white;
  height: 6.5vw;
  margin: 0 0 0 0;
}
.lucka:first-child {
  margin: 0;
}
.varannan {
  background: lightgrey;
}
.markerad {
  background: $gold;
}

.schema-namn-rubrik {
  margin: 20px 0;
  font-size: 20px;
}

#udda {
  margin: 0 0 20px 0;
}

.veckorubrik {
  margin: 0 0 20px 0;
}
.parent {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 2fr repeat(11, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
</style>



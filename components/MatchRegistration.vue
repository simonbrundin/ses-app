<template>
  <div id="match-registration">
    <form action method="post">
      <div class="matchnr">
        Matchnummer
        <input type="number" />
      </div>
      <div class="spelare">
        <div class="lag">
          <select v-model="hemmaspelare1" single>
            <option
              v-for="(spelare, index) in spelare"
              :key="index"
              :value="spelare"
            >
              {{ spelare }}
            </option>
          </select>
          <select v-model="hemmaspelare2" single>
            <option
              v-for="(spelare, index) in spelare"
              :key="index"
              :value="spelare"
            >
              {{ spelare }}
            </option>
          </select>
        </div>
        <div class="lag">
          <select v-model="bortaspelare1" single>
            <option
              v-for="(spelare, index) in spelare"
              :key="index"
              :value="spelare"
            >
              {{ spelare }}
            </option>
          </select>
          <select v-model="bortaspelare2" single>
            <option
              v-for="(spelare, index) in spelare"
              :key="index"
              :value="spelare"
            >
              {{ spelare }}
            </option>
          </select>
        </div>
      </div>
    </form>

    <div class="poäng">
      <div class="poängknappar">
        <button @click="addPoints('hemma')">+</button>
        <button @click="removePoints('hemma')">-</button>
      </div>
      <div class="siffror">{{ pointshemma }} - {{ pointsborta }}</div>
      <div class="poängknappar">
        <button @click="addPoints('borta')">+</button>
        <button @click="removePoints('borta')">-</button>
      </div>
    </div>

    <div class="registreringsknapp">
      <button class="registerbutton" @click="registreraPoäng()">
        Registrera
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatchRegistration',

  data() {
    return {
      hemmaspelare1: '',
      hemmaspelare2: '',
      bortaspelare1: '',
      bortaspelare2: '',
      pointshemma: 0,
      pointsborta: 0,
      spelare: ['Simon Brundin', 'Fredrik Nordin', 'Christian Blomberg'],
    };
  },
  methods: {
    addPoints(lag) {
      switch (lag) {
        case 'hemma':
          if (this.pointshemma > 5) {
            break;
          } else {
            this.pointshemma = this.pointshemma + 2;
          }
          break;
        case 'borta':
          if (this.pointsborta > 5) {
            break;
          } else {
            this.pointsborta = this.pointsborta + 2;
          }
          break;
        default:
          break;
      }
    },
    removePoints(lag) {
      switch (lag) {
        case 'hemma':
          if (this.pointshemma === 0) {
            break;
          } else {
            this.pointshemma = this.pointshemma - 2;
          }
          break;
        case 'borta':
          if (this.pointsborta === 0) {
            break;
          } else {
            this.pointsborta = this.pointsborta - 2;
          }
          break;
        default:
          break;
      }
    },
    registreraPoäng() {
      if (this.pointshemma + this.pointsborta === 6) {
        return;
      } else {
        console.log('Poängsumman blir inte 6');
      }
      if (
        this.hemmaspelare1 !== '' &&
        this.hemmaspelare2 !== '' &&
        this.bortaspelare1 !== '' &&
        this.bortaspelare2 !== ''
      ) {
        console.log('Registrera');
      } else {
        console.log('Fyll i alla spelare');
      }
    },
  },
};
</script>

<style lang="scss" scope>
.matchnr {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
  color: white;
}

.matchnr input {
  margin: 20px 0 0 0;
  width: 50px;
}

// .spelare {
//   display: flex;
//   justify-content: center;
// }

.lag {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0;
  padding: 0;
}

.poäng {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 20px;
}
.siffror {
  color: white;
  padding: 0 20px;
}
.poängknappar {
  display: flex;
  flex-direction: column;
}

.registreringsknapp {
  display: flex;
  justify-content: center;
}
</style>

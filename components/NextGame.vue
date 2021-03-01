<template>
  <div id="next-game" class="card">
    <h2>Nästa match</h2>
    <div class="datum">Torsdag 25/6 kl. 17.30</div>

    <div class="spelar-ruta card">
      <div class="spelare">
        <div>Nordin</div>
        <img src="@/assets/spelare/183.jpg" class="spelar-bild" alt />
      </div>
      <div class="spelare">
        <img src="@/assets/spelare/184.jpg" class="spelar-bild two" alt />
        <div>Blomberg</div>
      </div>
    </div>
    <div class="vs">
      <span class="vs-linje"></span>
      <span class="vs-text">vs</span>
      <span class="vs-linje"></span>
    </div>

    <div class="spelar-ruta card">
      <div class="spelare">
        <div>Paquito</div>
        <img src="@/assets/spelare/185.jpg" class="spelar-bild" alt />
      </div>
      <div class="spelare">
        <img src="@/assets/spelare/186.jpg" class="spelar-bild two" alt />
        <div>Parment</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NextGame',
};
</script>

<style lang="scss" scope>
#next-game {
  margin: 20px 0;
  text-align: center;
}

#next-game h2 {
  color: $light;
  margin: 0px 0 0;
  padding: 0;
}

.datum {
  margin: 10px 0 20px;
  color: $light;
}

.lag {
  display: flex;
  justify-content: center;
  background: white;
  border-radius: $border-radius;

  padding: 10px 20px;
}

h3 {
  margin: 0px 5px;
}

.spelare:nth-child(1) {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  margin: 0 0 0 -10px;
}
.spelare:nth-child(2) {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
}

.spelar-ruta {
  display: flex;
  justify-content: center;
  align-items: center;
  background: $gold;
  font-size: 12px;
  font-weight: 700;
  margin: 10px 0;
}

.spelar-bild.two {
  margin: 0 10px 0;
}
#next-game.card {
  background: $dark-grey;
}

div.spelar-ruta.card {
  background: $gold;
}

.spelar-bild {
  width: 36px;
  border-radius: 100%;
  margin: 0 10px 0;
}

.vs {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 10px;
  color: $light;
}

.vs-linje {
  height: 1px;
  background: $dark;
  width: 100%;
}

.vs-text {
  padding: 0 10px;
}

hr {
  width: 100%;
  height: 1px;
}
</style>

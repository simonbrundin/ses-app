<template>
  <div id="next-game" class="card">
    <h2>Nästa match</h2>
    <div class="datum">Torsdag 25/6 kl. 17.30</div>

    <div class="spelar-ruta card">
      <img src="../../public/spelare/2.jpg" class="spelar-bild" alt />
      <div>Nordin</div>

      <img src="../../public/spelare/3.jpg" class="spelar-bild" alt />
      <div>Blomberg</div>
    </div>
    <div class="vs">
      <span class="vs-linje"></span>
      <span class="vs-text">vs</span>
      <span class="vs-linje"></span>
    </div>

    <div class="spelar-ruta card">
      <img src="../../public/spelare/4.jpg" class="spelar-bild" alt />
      <div>Nordin</div>

      <img src="../../public/spelare/134.jpg" class="spelar-bild" alt />
      <div>Edin</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NextGame",
};
</script>

<style lang="scss" scope>
#next-game {
  margin: 20px 0;
  text-align: center;
}

h2 {
  color: $dark;
}

.datum {
  margin: 20px;
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

.spelar-ruta {
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  font-weight: 700;
  margin: 10px 0;
}

.right {
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
}

.vs-linje {
  height: 1px;
  background: black;
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
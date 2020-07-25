<template>
  <div id="next-game" class="card">
    <h2>
      <div>3 dagar kvar</div>
    </h2>
    <div class="datum">Torsdag 25/6 kl. 17.30</div>
    <div class="card">
      <div class="lag lag1">
        <div class="spelare left">
          <img src="../assets/max.jpg" class="spelar-bild" alt />
          <span>Brundin</span>
        </div>

        <div class="spelare right">
          <img src="../assets/max.jpg" class="spelar-bild" alt />
          <span>Blomberg</span>
        </div>
      </div>
      <div class="vs">
        <span class="vs-linje"></span>
        <span class="vs-text">vs</span>
        <span class="vs-linje"></span>
      </div>

      <div class="lag lag2">
        <div class="spelare left">
          <img src="../assets/max.jpg" class="spelar-bild" alt />
          <span>Nordin</span>
        </div>

        <div class="spelare right">
          <img src="../assets/max.jpg" class="spelar-bild" alt />
          <span>Edin</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NextGame"
};
</script>

<style>
#next-game {
  margin: 20px 0;
  text-align: center;
}

.datum {
  margin: 20px;
}

.lag {
  display: flex;
  justify-content: center;
  background: white;
  border-radius: 16px;

  padding: 10px 20px;
}

h3 {
  margin: 0px 5px;
}

.spelare {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 12px;
  font-weight: 700;
}

.left {
  align-items: center;
  margin: 0 10px 0 0;
}

.right {
  align-items: center;
  margin: 0 0 0 10px;
}

.spelar-bild {
  width: 80px;
  border-radius: 100%;
  margin: 0 0 5px 0;
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
<template>
  <div id="next-game" class="card">
    <h2>
      <div>3 dagar kvar</div>
    </h2>
    <div class="datum">Torsdag 25/6 kl. 17.30</div>
    <div class="lag lag1">
      <div class="spelare left">
        <img src="../assets/max.jpg" class="spelar-bild" alt />
        <h3>Brundin</h3>
      </div>

      <div class="spelare right">
        <img src="../assets/max.jpg" class="spelar-bild" alt />
        <h3>Blomberg</h3>
      </div>
    </div>
    <div class="vs">
      <hr />
      <span>vs</span>
      <hr />
    </div>

    <div class="lag lag2">
      <div class="spelare left">
        <img src="../assets/max.jpg" class="spelar-bild" alt />
        <h3>Nordin</h3>
      </div>

      <div class="spelare right">
        <img src="../assets/max.jpg" class="spelar-bild" alt />
        <h3>Edin</h3>
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
  box-shadow: 0px 3px 28px 0px #08080856;
  -webkit-box-shadow: 0px 3px 28px 0px #0808085b;
  -moz-box-shadow: 0px 3px 28px 0px #08080848;
  padding: 10px 20px;
}

h3 {
  margin: 0px 5px;
}

.spelare {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
  width: 100px;
  border-radius: 100%;
}

.vs {
  display: flex;
  justify-content: center;
}

.vs span {
  padding: 0 15px;
}

hr {
  width: 100%;
  height: 1px;
}
</style>
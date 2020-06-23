<template>
  <div id="next-game">
    <h2>
      Nästa match om
      <u>3 dagar</u>
    </h2>
    <div class="datum">Torsdag 25/6 kl. 17.30</div>
    <div class="lag">
      <h3>Brundin</h3>
      <h3>-</h3>
      <h3>Blomberg</h3>
    </div>
    <div class="lag">
      <h3>Nordin</h3>
      <h3>-</h3>
      <h3>Edin</h3>
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
}
.lag {
  display: flex;
  justify-content: center;
}

h3 {
  margin: 0px 5px;
}
</style>
<template>
  <div id="player-cash">
    <div class="card">
      <h2>Spelarpott</h2>
      <div class="card">
        <div class="title">Nuvarande summa</div>
        <div>39 000 kr</div>
      </div>
      <div class="card">
        <div class="title">Totalt inspelat</div>
        <div>74 000 kr</div>
      </div>
      <h2 class="second-title">Kostnader</h2>
      <div class="card">
        <div class="title">Avslutningsfest</div>
        <div>25 000 kr</div>
      </div>
      <div class="card">
        <div class="title">Tränarrabatter med Alvaro</div>
        <div>10 000 kr</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#player-cash {
  color: $light;
  text-align: center;
  margin: 0 0 72px 0;
}

#player-cash div {
  color: $dark;
  text-align: center;
}

#player-cash .title {
  font-weight: 600;
}

#player-cash h2:first-child {
  margin: 0px 0 20px;
}

#player-cash .second-title {
  margin: 20px 0 20px;
}

h2 {
  color: $dark;
  margin: 0 0 10px 0;
}

.card {
  margin: 0 0 10px 0;
}
</style>
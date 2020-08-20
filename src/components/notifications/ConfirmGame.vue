<template>
  <div id="confirm-game" v-if="this.$store.state.notifications.ConfirmGame">
    <navigation-row></navigation-row>

    <div class="message">
      <!-- <h2 class="greeting">Hej Simon,</h2> -->
      <img class="notification-image" src="../../assets/spelare-med-band.png" alt />
      <p class="notification-description">
        Vi har hittat en tid som passar alla spelare
        <br />Fungerar tiden för dig?
      </p>

      <p class="notification-heading">Torsdag, 8 November</p>
      <div class="match-time">
        <div class="time-box hours">15</div>
        <div class="time-box mins">30</div>
      </div>
      <button>Bekräfta matchtiden</button>
      <p class="decline">Tyvärr, jag har fått förhinder</p>
    </div>
  </div>
</template>

<script>
import NavigationRow from "./NavigationRow";
export default {
  components: {
    "navigation-row": NavigationRow,
  },
};
</script>

<style lang="scss">
.match-time {
  display: flex;
  justify-content: center;
  margin: 0 0 20px 0;
}

.time-box {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 24px;
  margin: 0 3px;
  width: 70px;
  height: 70px;
  background: $light;
  z-index: auto;
  color: $dark-grey;
}
.time-box:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  border-radius: inherit;
  @include shadow;
  z-index: -1;
  transition: box-shadow 0.5s;
}
</style>
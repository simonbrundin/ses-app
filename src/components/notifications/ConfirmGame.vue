<template>
  <div id="confirm-game" v-if="this.$store.state.notifications.ConfirmGame">
    <navigation-row></navigation-row>

    <div class="message">
      <!-- <h2 class="greeting">Hej Simon,</h2> -->
      <img class="notification-image shadowfilter" src="../../assets/spelare-med-band.png" alt />
      <p class="notification-description">
        Vi har hittat en tid som passar alla spelare
        <br />Fungerar tiden för dig?
      </p>

      <p class="notification-heading">Torsdag, 8 November</p>
      <div class="match-time">
        <div class="time-box hours">15</div>
        <div class="time-box mins">30</div>
      </div>
      <button @click="confirmGame">Bekräfta matchtiden</button>
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
  methods: {
    confirmGame: function () {
      this.$store.state.notifications.ConfirmGame = false;
    },
  },
};
</script>

<style lang="scss">
#confirm-game {
  margin: 0;
}

.shadowfilter {
  -webkit-filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.5));
  filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.5));
}

.match-time {
  display: flex;
  justify-content: center;
  margin: 0 0 20px 0;
}

.time-box {
  background: $light;
  color: $grey;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: $border-radius;
  font-size: 24px;
  margin: 0 3px;
  width: 70px;
  height: 70px;
  font-weight: 300;
  z-index: auto;
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
<template>
  <div id="notifications">
    <!-- Bekräfta lediga luckor -->
    <confirm-game class="notification"></confirm-game>

    <!-- Betalning saknas -->
    <payment class="notification"></payment>
    <!-- Lägg till i kalender -->
    <div class="notification calendar" v-if=" !addedNextMatchToCalendar ">
      <p>Säkerställ att du inte missar nästa match</p>
      <button>Lägg till i min kalender</button>
    </div>
    <!-- Acceptera datum -->
    <div class="notification accept-game" v-if=" !acceptedNextMatch ">
      <p>
        Vi har hittat en ny möjlig match.
        <br />
        Fungerar det att spela {{ proposedNextGameDate }}
      </p>
      <button>Ja</button>
      <button>Nej</button>
    </div>
    <div class="dev-notification-buttons" v-if="this.$store.state.showNotificationButtons">
      <button @click="addedNextMatchToCalendar = !addedNextMatchToCalendar">Kalender</button>
      <button @click="acceptedNextMatch= !acceptedNextMatch">Acceptera</button>
      <button @click="acceptedNextMatch= !acceptedNextMatch">bekräfta</button>
      <button @click="noNotifications = false">x</button>
    </div>
    <h2 v-else @click="noNotifications = true"></h2>
  </div>
</template>

<script>
import Payment from "./notifications/Payment";
import ConfirmGame from "./notifications/ConfirmGame";
export default {
  components: {
    payment: Payment,
    "confirm-game": ConfirmGame,
  },
  data() {
    return {
      leftToPay: 0,
      addedNextMatchToCalendar: true,
      acceptedNextMatch: true,
      proposedNextGameDate: "Torsdag 12/8 16.00",
      noNotifications: true,
      daysConfirmed: 1,
    };
  },
};
</script>

<style lang="scss">
#notifications {
}

.notification {
  background: $light;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw -40px;
  padding: 36px 36px;
}

.message {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
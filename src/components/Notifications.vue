<template>
  <div id="notifications">
    <!-- Bekräfta lediga luckor -->
    <confirm-game class="notification"></confirm-game>

    <!-- Lägg till i kalender -->
    <add-to-calendar class="notification"></add-to-calendar>

    <!-- Betalning saknas -->
    <payment class="notification"></payment>
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
import AddToCalendar from "./notifications/AddToCalendar";
export default {
  components: {
    payment: Payment,
    "confirm-game": ConfirmGame,
    "add-to-calendar": AddToCalendar,
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
  position: relative;
  left: -10px;
}

.notification {
  background: $light;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 80%;
  padding: 10%;
}

.notification-image {
  width: 80%;
  margin: auto;
}

.notification-heading {
  font-size: 20px;
  font-weight: 500;
  color: $dark-grey;
}

.greeting {
  margin: 20px 0 20px 0;
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  color: $gold;
}

.message {
  color: $grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.notification-description {
  color: $grey;
  text-align: center;
  font-size: 13px;
  z-index: 2;
}

.decline {
  margin: 24px 0 0 0;
}
</style>
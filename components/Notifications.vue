<template>
  <div id="notifications">
    <!-- Betalning saknas -->
    <payment class="notification"></payment>
    <!-- Bekräfta lediga luckor -->
    <confirm-game class="notification"></confirm-game>
    <!-- Lägg till i kalender -->
    <add-to-calendar class="notification"></add-to-calendar>
    <NotEnoughSlots class="notification" />

    <!-- Acceptera datum -->
    <div v-if="!acceptedNextMatch" class="notification accept-game">
      <p>
        Vi har hittat en ny möjlig match.
        <br />
        Fungerar det att spela {{ proposedNextGameDate }}
      </p>
      <button>Ja</button>
      <button>Nej</button>
    </div>
    <div
      v-if="$store.state.showNotificationButtons"
      class="dev-notification-buttons"
    >
      <button @click="addedNextMatchToCalendar = !addedNextMatchToCalendar">
        Kalender
      </button>
      <button @click="acceptedNextMatch = !acceptedNextMatch">Acceptera</button>
      <button @click="acceptedNextMatch = !acceptedNextMatch">bekräfta</button>
      <button @click="noNotifications = false">x</button>
    </div>
    <h2 v-else @click="noNotifications = true"></h2>
  </div>
</template>

<script>
import Payment from './notifications/Payment';
import ConfirmGame from './notifications/ConfirmGame';
import AddToCalendar from './notifications/AddToCalendar';
import NotEnoughSlots from './notifications//NotEnoughSlots.vue';
export default {
  components: {
    payment: Payment,
    'confirm-game': ConfirmGame,
    'add-to-calendar': AddToCalendar,
    NotEnoughSlots,
  },
  data() {
    return {
      leftToPay: 0,
      addedNextMatchToCalendar: true,
      acceptedNextMatch: true,
      proposedNextGameDate: 'Torsdag 12/8 16.00',
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
  background: $app-bg-color;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: calc(100vw - 2 *#{$app-padding});
  padding: $app-padding;
  z-index: 100;
}

.notification-image {
  max-width: 80%;
  max-height: 230px;
  margin: auto;
}

.notification-heading {
  font-size: 20px;
  font-weight: 500;
  color: $app-font-color;
}

.greeting {
  margin: 20px 0 20px 0;
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  color: $gold;
}

.message {
  color: $app-font-color;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.notification-description {
  color: $app-font-color;
  text-align: center;
  font-size: 13px;
  z-index: 2;
}

.decline {
  margin: 24px 0 0 0;
  color: $app-font-color;
}
</style>

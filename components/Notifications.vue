<template>
  <div id="notifications">
    <Login v-if="false" class="notification" />

    <!-- <Login v-if="!$auth.loggedIn" class="notification" /> -->
    <!-- Betalning saknas -->
    <Notifications-Payment
      v-if="!$store.state.notifications.payment"
      class="fullscreen"
    />
    <!-- Bekräfta lediga luckor -->
    <Notifications-ConfirmGame
      v-if="!$store.state.notifications.confirmGame"
      class="fullscreen"
    />
    <!-- Lägg till i kalender -->
    <Notifications-AddToCalendar
      v-if="!$store.state.notifications.addToCalendar"
      class="fullscreen"
    />
    <Notifications-ScheduleInstructions
      v-if="$store.state.notifications.scheduleInstructions"
      class="fullscreen"
    />
    <ContactInformation
      v-if="$store.state.notifications.userInfo"
      class="fullscreen"
    />
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
export default {
  data() {
    return {
      leftToPay: 0,
      addedNextMatchToCalendar: true,
      acceptedNextMatch: true,
      proposedNextGameDate: 'Torsdag 12/8 16.00',
      noNotifications: true,
      daysConfirmed: 1,
      showContactInformation: false,
    };
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
#notifications {
  position: relative;
  left: -10px;
}

.notification {
  background: $light;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: calc(100vw - 2 *#{$app-padding});
  padding: $app-padding;
  margin: 0 0 $app-padding 0;
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

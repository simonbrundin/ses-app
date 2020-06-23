<template>
  <div id="notifications">
    <!-- Betalning saknas -->
    <div class="notification payment" v-if=" leftToPay > 0">
      <p>
        Det saknas en betalning från dig på
        <strong>{{ leftToPay }} kr</strong>
      </p>
      <button>Betala nu</button>
    </div>
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
    <div
      class="dev-notification-buttons"
      v-if=" leftToPay>0 || 
      !acceptedNextMatch || !addedNextMatchToCalendar || noNotifications"
    >
      <button @click="leftToPay++">+</button>
      <button @click="leftToPay--">-</button>
      <button @click="addedNextMatchToCalendar = !addedNextMatchToCalendar">Kalender</button>
      <button @click="acceptedNextMatch= !acceptedNextMatch">Acceptera</button>
      <button @click="noNotifications = false">x</button>
    </div>
    <h2 v-else @click="noNotifications = true">Bra jobbat!</h2>
  </div>
</template>

<script>
export default {
  name: "Notifications",
  data() {
    return {
      leftToPay: 0,
      addedNextMatchToCalendar: true,
      acceptedNextMatch: true,
      proposedNextGameDate: "Torsdag 12/8 16.00",
      noNotifications: false
    };
  }
};
</script>

<style>
.notification {
  background: pink;
  padding: 10px;

  border: 2px solid black;
  margin: 0 0 20px;
}
.accept-game button {
  margin: 0 5px;
}
</style>
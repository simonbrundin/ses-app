<template>
  <div id="add-to-calendar" v-if="this.$store.state.notifications.AddToCalendar">
    <navigation-row></navigation-row>
    <div class="message">
      <!-- <h2 class="greeting">Hej Simon,</h2> -->
      <img
        id="calendar-image"
        class="notification-image"
        src="../../assets/google-calendar.png"
        alt
      />

      <p class="notification-heading">Har du också teflonminne?</p>

      <!-- <p class="notification-heading">Torsdag, 8 November</p>
      <div class="match-time">
        <div class="time-box hours">15</div>
        <div class="time-box mins">30</div>
      </div>-->
      <button>Lägg till i min kalender</button>
      <p class="decline">Nej tack, jag har magiskt minne</p>
    </div>
  </div>
</template>

<script>
import NavigationRow from "./NavigationRow.vue";
export default {
  components: {
    "navigation-row": NavigationRow,
  },
};
</script>

<style lang="scss">
svg {
  width: 12px;
  fill: rgb(145, 145, 145);
}

.profile-image {
  border-radius: 18px;
  width: 45px;
  height: 45px;
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

p {
  color: $grey;
  text-align: center;
  font-size: 13px;
  z-index: 2;
}

#calendar-image {
  margin: 40px auto 40px;
}
</style>
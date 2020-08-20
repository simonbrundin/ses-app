<template>
  <div id="confirm-game" v-if="!this.$store.state.nextGame">
    <div class="navigation-row">
      <svg
        class="back-button"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      </svg>
      <img class="profile-image" src="../../assets/max.jpg" alt />
    </div>
    <div class="message">
      <!-- <h2 class="greeting">Hej Simon,</h2> -->
      <img class="match-image" src="../../assets/spelare-med-band.png" alt />
      <p>
        Vi har hittat en tid som passar alla spelare
        <br />Fungerar tiden för dig?
      </p>

      <p class="date-text">Torsdag, 8 November</p>
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
export default {};
</script>

<style lang="scss">
.navigation-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

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

.match-image {
  width: 80%;
  margin: auto;
}

.date-text {
  font-size: 20px;
  font-weight: 500;
  color: $dark-grey;
}
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

.decline {
  margin: 20px 0 0 0;
}
/* .accept-game button {
  margin: 0 5px;
} */
</style>
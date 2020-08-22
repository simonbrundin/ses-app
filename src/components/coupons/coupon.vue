<template>
  <div class="single-coupon">
    <navigation-row></navigation-row>

    <div class="card coupon">
      <img src="../../assets/coupons/biteline.png" alt class="coupon-logo" />

      <p class="coupon-number">15%</p>
      <p class="coupon-text">Valfri vara</p>
      <p class="coupon-description">Köp en valfri vara och få 15% rabatt</p>

      <button>Aktivera kupong</button>
      <p class="valid-text">Giltig till 2020-12-13</p>
    </div>
  </div>
</template>

<script>
import NavigationRow from "../notifications/NavigationRow.vue";
export default {
  components: {
    "navigation-row": NavigationRow,
  },
};
</script>

<style lang="scss">
.coupon {
  display: flex;
  flex-direction: column;
  margin: 20px 0 0;
}
.single-coupon {
  padding: 20px;
}

.coupon-logo {
  max-height: 150px;
  max-width: 80%;
  margin: 20px auto 0;
}

.coupon-number {
  font-size: 72px;
  font-weight: 700;
  color: $dark-grey;
  margin: 70px 0 70px;
  line-height: 0px;
}
.coupon-text {
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
  color: $dark-grey;
  margin: 0 0 20px;
  line-height: 0px;
}
.coupon-description {
  font-size: 14px;

  color: $dark-grey;
  margin: 30px 0 30px;
}
</style>
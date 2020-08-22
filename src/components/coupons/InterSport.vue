<template>
  <div id="intersport">
    <navigation-row></navigation-row>
    <router-link to="/coupon">
      <div>
        <div
          class="card coupon-link"
          v-for="(coupon,index) in this.$store.state.coupons.companies.intersport.coupons"
          :key="index"
        >
          <div class="coupon-row">
            <img src="../../assets/coupons/intersport-standing.png" alt />

            <div class="company-text">
              <div>{{coupon.title}}</div>
              <div>{{coupon.descriptioni}}</div>
            </div>
            <i class="im im-angle-right"></i>
          </div>
        </div>
      </div>
    </router-link>
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

<style>
</style>
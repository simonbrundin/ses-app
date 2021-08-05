<template>
  <div id="intersport">
    <!-- <navigation-row></navigation-row> -->
    <router-link to="/coupons">
      <div>
        <div
          v-for="(coupon, index) in $store.state.coupons.companies.intersport
            .coupons"
          :key="index"
          class="card coupon-link"
        >
          <div class="coupon-row">
            <img src="@/assets/coupons/intersport-standing.png" alt />

            <div class="company-text">
              <div>{{ coupon.title }}</div>
              <div>{{ coupon.description }}</div>
            </div>
            <i class="im im-angle-right"></i>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
// import NavigationRow from "../notifications/NavigationRow.vue";
export default {
  components: {
    // "navigation-row": NavigationRow,
  },
};
</script>

<style></style>

<template>
  <div>
    <div
      class="card coupon-link"
      v-for="(coupon,index) in this.$store.state.coupons.intersport.coupons"
      :key="index"
    >
      <div class="coupon-row">
        <img :src="require('../assets/coupons/'+intersport.logo)" alt />

        <div class="company-text">
          <div>{{coupon.title}}</div>
          <div>{{coupon.descriptioni}}</div>
        </div>
        <i class="im im-angle-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
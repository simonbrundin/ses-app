<template>
  <div id="coupons">
    <!-- <navigation-row></navigation-row> -->
    <div class="card-container">
      <div
        v-for="(company, index) in $store.state.coupons.companies"
        :key="index"
        class="light-card company-card"
      >
        <router-link to="coupons/Biteline">
          <div class="company-row" @click="company.show = !company.show">
            <img :src="require('../assets/coupons/' + company.logo)" alt />

            <div class="company-text">
              <div>{{ company.name }}</div>
              <div>{{ company.coupons[0].title }}</div>
            </div>
            <i class="im im-angle-right"></i>
          </div>
        </router-link>
      </div>
    </div>
    <app-bottom-menu
      v-if="$store.state.coupons.showBottomMenu"
    ></app-bottom-menu>
  </div>
</template>

<script>
// import NavigationRow from "./notifications/NavigationRow.vue";
import BottomMenu from '../components/BottomMenu.vue';
export default {
  components: {
    // "navigation-row": NavigationRow,
    'app-bottom-menu': BottomMenu,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
#coupons {
  margin: 0 0 82px 0;
}

.company-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.company-card {
  margin-top: 20px;
}

.company-card a {
  text-decoration: none;
}

.company-row img {
  display: block;
  max-width: 80px;
  width: auto;
  height: auto;
  margin: 0 16px 0 0;
}
.company-text {
  display: flex;
  flex-direction: column;
  margin-right: auto;
}

.company-text div:first-child {
  font-weight: 700;
}

.company-text div:nth-child(2) {
  font-size: 14px;
}

.company-row .im {
  color: $dark-grey;
  font-size: 16px;
}
</style>

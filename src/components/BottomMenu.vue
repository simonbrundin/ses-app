<template>
  <div id="menu">
    <router-link to="/table">
      <i class="bottom-menu-icons im im-data"></i>
      <div class="menu-item-text gold" v-if="showIconTexts">Tabell</div>
    </router-link>
    <router-link to="/coupon">
      <i class="bottom-menu-icons im im-date-o"></i>

      <div class="menu-item-text gold" v-if="showIconTexts">Boka tid</div>
    </router-link>
    <router-link to="/">
      <font-awesome-icon icon="home" :size="iconSize" :color="iconColor" />
      <div class="menu-item-text gold" v-if="showIconTexts">Start</div>
    </router-link>
    <router-link to="/coupons">
      <font-awesome-icon icon="store" :size="iconSize" :color="iconColor" />
      <div class="menu-item-text gold" v-if="showIconTexts">Kuponger</div>
    </router-link>
    <router-link to="/slots">
      <div>
        <font-awesome-icon icon="calendar-alt" :size="iconSize" :color="iconColor" />
        <div class="menu-item-text gold" v-if="showIconTexts">Luckor</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return { showIconTexts: false, iconSize: "lg", iconColor: "white" };
  },
};
</script>

<style lang="scss">
#menu {
  background: $bottom-menu-bg-color;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  margin: 10px;
  padding: 15px 20px;
  width: calc(100% - 60px);
  position: fixed;
  border-radius: 16px;

  bottom: 0;
  box-shadow: 0px 3px 78px 0px #08080856;
  -webkit-box-shadow: 0px 3px 78px 0px #0808085b;
  -moz-box-shadow: 0px 3px 78px 0px #08080848;
}

#menu a {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
}

.router-link-exact-active {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
  margin: -50px -20px -10px;
  background: $bottom-menu-active-link;
  border-radius: 10px;
}

.rund {
  border-radius: 100%;
}

.profil-bild {
  width: 32px;
}

.menu-item-text {
  // text-transform: uppercase;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.05em;
  padding: 5px 0 0;
  // font-family: ;
  text-align: center;
}

.bottom-menu-icons.im {
  color: $light;
  font-size: 22px;
}

font-awesome-icon {
  color: $light;
}
</style>
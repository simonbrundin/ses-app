<template>
  <div id="menu">
    <router-link to="/table">
      <svg-icon icon="rank" :hasFill="true" class="icon-calendar"></svg-icon>
      <div class="menu-item-text gold" v-if="showIconTexts">Tabell</div>
    </router-link>
    <router-link to="/slots">
      <svg-icon icon="calendar" :hasFill="true" class="icon-calendar"></svg-icon>
      <div class="menu-item-text gold" v-if="showIconTexts">Luckor</div>
    </router-link>

    <router-link to="/">
      <svg-icon icon="notification" :hasFill="true" class="icon-calendar"></svg-icon>
      <div class="menu-item-text gold" v-if="showIconTexts">Start</div>
    </router-link>

    <router-link to="/coupons">
      <svg-icon icon="store2" :hasFill="true" class="icon-store"></svg-icon>

      <div class="menu-item-text gold" v-if="showIconTexts">Kuponger</div>
    </router-link>
    <router-link to="/coupon">
      <svg-icon icon="ios-tennisball" :hasFill="true" class="icon-calendar"></svg-icon>
      <div class="menu-item-text gold" v-if="showIconTexts">Boka tid</div>
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
  margin: 0 0 10px 0;
  padding: 15px 20px;
  width: calc(100% - 60px);
  position: fixed;
  border-radius: 10px;

  bottom: 0;
  box-shadow: 0px 3px 78px 0px #08080856;
  -webkit-box-shadow: 0px 3px 78px 0px #0808085b;
  -moz-box-shadow: 0px 3px 78px 0px #08080848;
}

// Ikoner

.icon-store svg {
  height: 26px;
  width: 26px;
  fill: $bottom-menu-icon-color;
}

.icon-calendar svg {
  height: 24px;
  width: 24px;
  fill: $bottom-menu-icon-color;
}

// -------------------------------------------------------
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
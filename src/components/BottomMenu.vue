<template>
  <div class="menu">
    <router-link to="/table">
      <svg-icon icon="rankings" :hasFill="true" class="icon-calendar"></svg-icon>
      <div class="menu-item-text gold" v-if="showIconTexts">Tabell</div>
    </router-link>
    <router-link to="/slots">
      <svg-icon icon="calendar-linear" :hasFill="true" class="icon-calendar"></svg-icon>
      <div class="menu-item-text gold" v-if="showIconTexts">Luckor</div>
    </router-link>

    <router-link to="/">
      <svg-icon icon="home" :hasFill="true" class="icon-calendar"></svg-icon>
      <div class="menu-item-text gold" v-if="showIconTexts">Start</div>
    </router-link>

    <router-link to="/coupons">
      <svg-icon icon="store" :hasFill="true" class="icon-store"></svg-icon>

      <div class="menu-item-text gold" v-if="showIconTexts">Kuponger</div>
    </router-link>
    <router-link to="/coupon">
      <svg-icon icon="time" :hasFill="true" class="icon-calendar"></svg-icon>
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
.menu {
  background: $bottom-menu-bg-color;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  left: 0px;
  padding: 18px 0;
  width: 100vw;
  position: fixed;
  border-radius: $border-radius $border-radius 0px 0px;

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

@mixin active-1 {
  padding: 10px 20px;
  margin: -50px -20px -10px;
  background: $bottom-menu-active-link;
  border-radius: $border-radius;
}

@mixin active-2 {
  padding: 10px 20px;
  margin: -50px -20px -6px;

  border-radius: 0px;
  border-bottom: 2px solid $gold;
}
@mixin active-3 {
  padding: 10px 20px;
  margin: -50px -20px -6px;
  border-radius: 0px;
  border-style: solid;
  border-width: 2px;
  border-image: linear-gradient(to left, #946837 1%, #ebe48a 50%, #946837 100%)
    100% 0 100% 0/0px 0 2px 0 stretch;
}

@mixin active-4 {
  padding: 5px 30px;
  margin: 0px -20px 0px;
  background: $dark;
  border-radius: 100px;
}

.menu .router-link-exact-active {
  // @include active-1;
  @include active-2;
  // @include active-3;
  // @include active-4;
}

.menu .router-link-exact-active svg {
  fill: $bottom-menu-active-icon-color;
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

.icon-calendar svg {
  width: 30px;
  height: 30px;
}

.icon-store svg {
  width: 28px;
  height: 28px;
  top: -2px;
  position: relative;
}

.bottom-menu-icons.im {
  color: $light;
  font-size: 22px;
}

font-awesome-icon {
  color: $light;
}
</style>
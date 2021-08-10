<template>
  <div class="menu">
    <!-- <nuxt-link to="/table">
      <Icons-IconCup class="icon" />
      <div v-if="showIconTexts" class="menu-item-text gold">Tabell</div>
    </nuxt-link> --><nuxt-link to="/">
      <Icons-IconHome class="icon" />
      <div v-if="showIconTexts" class="menu-item-text gold">Start</div>
    </nuxt-link>
    <nuxt-link to="/slots">
      <Icons-IconCalendar class="icon" />
      <div v-if="showIconTexts" class="menu-item-text gold">Luckor</div>
    </nuxt-link>

    <nuxt-link to="/coupons">
      <Icons-IconStore class="icon" />

      <div v-if="showIconTexts" class="menu-item-text gold">Kuponger</div>
    </nuxt-link>
    <nuxt-link to="/schedule">
      <Icons-IconClock class="icon" />
      <div v-if="showIconTexts" class="menu-item-text gold">Boka tid</div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showIconTexts: false,
      iconSize: 'lg',
      iconColor: 'white',
    };
  },
  methods: {
    showGame() {
      this.$store.state.notifications.ConfirmGame = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  background: $bottom-menu-bg-color;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  left: 0px;
  width: calc(100vw);
  padding: 18px 0;
  position: fixed;
  border-radius: $border-radius;
  margin: 0 0px 0px;
  bottom: 0;
  box-shadow: 0px 3px 78px 0px #08080856;
  -webkit-box-shadow: 0px 3px 78px 0px #0808085b;
  -moz-box-shadow: 0px 3px 78px 0px #08080848;
}
@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
  .menu {
    padding: 18px 0;
  }
}

@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  .menu {
    padding: 18px 0;
  }
}

@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
  .menu {
    padding: 18px 0;
  }
}

// Ikoner

.icon {
  height: 26px;
  width: 26px;
  fill: $bottom-menu-icon-color;
}
a .icon {
  color: $bottom-menu-icon-color;
}
a.nuxt-link-exact-active .icon {
  color: $bottom-menu-active-icon-color;
}
svg.icon {
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
@mixin active-5 {
  padding: 10px 20px;
  margin: -50px -20px -6px;

  border-radius: 0px;
  border-bottom: 2px solid $gold;
}

.menu .nuxt-link-exact-active {
  // @include active-1;
  @include active-2;
  // @include active-3;
  // @include active-4;
}

.menu .nuxt-link-exact-active svg {
  fill: $bottom-menu-active-icon-color;
}

.menu svg {
  fill: $bottom-menu-active-icon-color;
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

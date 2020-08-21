<template>
  <div id="menu">
    <router-link to="/table">
      <i class="bottom-menu-icons im im-data"></i>
      <div class="menu-item-text gold">Tabell</div>
    </router-link>
    <router-link to="/table">
      <i class="bottom-menu-icons im im-date-o"></i>
      <div class="menu-item-text gold">Boka tid</div>
    </router-link>
    <router-link to="/" class="home">
      <i class="bottom-menu-icons im im-dashboard"></i>
      <div class="menu-item-text gold">Start</div>
    </router-link>
    <router-link to="/coupons">
      <i class="bottom-menu-icons im im-barcode"></i>
      <div class="menu-item-text gold">Kuponger</div>
    </router-link>
    <router-link to="/slots">
      <div>
        <i class="bottom-menu-icons im im-calendar"></i>
        <div class="menu-item-text gold">Luckor</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style lang="scss">
#menu {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  margin: 0;
  padding: 15px 20px;
  width: calc(100% - 40px);
  position: fixed;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
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

.ikon {
  width: 32px;
}

.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 25px 15px 25px;
  margin: -50px 0 -10px 0;
  background: white;
  border-radius: 100%;
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
  color: $gold;
  font-size: 36px;
}
</style>
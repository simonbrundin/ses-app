<template>
  <div id="contact-information-screen" class="full-screen">
    <!-- <p>{{ $auth.user.sub }}</p>
    <p>{{ $auth.user }}</p> -->

    <p>Förnamn</p>
    <input v-model="firstName" type="text" name="firstName" />
    <p>Efternamn</p>
    <input v-model="lastName" type="text" name="lastName" />
    <p>Email</p>
    <input v-model="email" type="text" name="email" />
    <p>Telefonnummer</p>
    <input v-model="tel" type="text" name="tel" />
    <div></div>
    <br />
    <button @click="updateInfo">Spara uppgifter</button>
    <!-- <button @click="getUserInfo">Uppdatera</button> -->
  </div>
</template>

<script>
import syncUserInfo from '@/services/syncUserInfo.js';
export default {
  mixins: [syncUserInfo],
  data() {
    return {
      dataFirstName: '',
    };
  },
  computed: {
    socialID() {
      return this.$auth.user.sub;
    },
    firstName: {
      get() {
        return this.$store.state.user.firstName;
      },
      set(value) {
        this.$store.commit('firstName', value);
      },
    },
    lastName: {
      get() {
        return this.$store.state.user.lastName;
      },
      set(value) {
        this.$store.commit('lastName', value);
      },
    },
    email: {
      get() {
        return this.$store.state.user.email;
      },
      set(value) {
        this.$store.commit('email', value);
      },
    },
    tel: {
      get() {
        return this.$store.state.user.tel;
      },
      set(value) {
        this.$store.commit('tel', value);
      },
    },
  },
  updated() {
    this.$store.commit('showContactInfo', true);
  },
  methods: {
    updateInfo() {
      if (
        this.socialID === '' ||
        this.firstName === '' ||
        this.lastName === '' ||
        this.email === '' ||
        this.tel === ''
      ) {
        alert('Fyll i alla fält');
      } else {
        // this.$store.state.server
        this.$store.state.showContactInfo = false;
        const server = 'http://localhost:7777';
        const body = JSON.stringify({
          socialID: this.socialID,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          tel: this.tel,
        });

        fetch(server + '/updateuser', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body,
        }).then((response) => response.json());
      }
    },
  },
};
</script>

<style lang="scss" scope>
#contact-information-screen {
  padding: 20px;
  background: $dark;
}
p {
  text-align: left;
  color: white;
}
</style>

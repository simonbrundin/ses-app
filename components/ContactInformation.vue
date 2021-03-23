<template>
  <div id="contact-information-screen">
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
export default {
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
        return this.$store.state.user.firstname;
      },
      set(value) {
        this.$store.commit('firstname', value);
      },
    },
    lastName: {
      get() {
        return this.$store.state.user.lastname;
      },
      set(value) {
        this.$store.commit('lastname', value);
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
  // updated() {
  //   this.$store.commit('showContactInfo', true);
  // },
  methods: {
    isEveryFieldFilled() {
      if (
        this.firstName === '' ||
        this.lastName === '' ||
        this.email === '' ||
        this.tel === ''
      ) {
        alert('Fyll i alla fält');
        return false;
      }
    },
    updateInfo() {
      if (!this.isEveryFieldFilled) {
        return false;
      }

      this.$store.dispatch('updateDatabaseUser');
      this.$store.commit('notifications/userInfo', false);
    },
  },
};
</script>

<style lang="scss" scoped>
#contact-information-screen {
  padding: 20px;
  background: $dark;
}
p {
  text-align: left;
  color: white;
}
</style>

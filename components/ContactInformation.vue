<template>
  <div id="contact-information-screen">
    <!-- <p>{{ $auth.user.sub }}</p>
    <p>{{ $auth.user }}</p> -->
    <h1 class="title">Fyll i alla fält</h1>
    <p>Förnamn</p>
    <input
      v-model="firstName"
      type="text"
      name="firstName"
      placeholder="FÖRNAMN"
    />
    <p>Efternamn</p>
    <input
      v-model="lastName"
      type="text"
      name="lastName"
      placeholder="EFTERNAMN"
    />
    <p>Email</p>
    <input v-model="email" type="text" name="email" placeholder="EMAIL" />
    <p>Telefonnummer</p>
    <input v-model="tel" type="text" name="tel" placeholder="TELEFONUMMER" />
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
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
#contact-information-screen {
  padding: 20px;
  background: $dark;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.title {
  text-transform: uppercase;
  text-align: center;
  padding: 0 0 10px;
}
p {
  font-size: 12px;
  text-transform: uppercase;
  text-align: left;
  color: white;
  visibility: hidden;
  height: 0;
  padding: 0;
  margin: 0;
}
input {
  padding: 20px 0px 20px 28px;
  border: 0px;
  border-radius: 50px;
  margin: 12px 0 0px 0;
}
#contact-information-screen button {
  margin: 10px 0 0;
  color: $dark;
  text-transform: uppercase;
}
</style>

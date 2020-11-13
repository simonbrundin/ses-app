<template>
  <div id="contact-information-screen" class="full-screen">
    <!-- <p>{{ $auth.user.sub }}</p>
    <p>{{ $auth.user }}</p> -->

    <p>Förnamn</p>
    <input type="text" v-model="firstName" name="firstName" />
    <p>Efternamn</p>
    <input type="text" v-model="lastName" name="lastName" />
    <p>Email</p>
    <input type="text" v-model="email" name="email" />
    <p>Telefonnummer</p>
    <input type="text" v-model="tel" name="tel" />
    <div></div>
    <br />
    <button @click="updateInfo">Spara uppgifter</button>
    <button @click="getUserInfo">Uppdatera</button>
  </div>
</template>

<script>
import syncUserInfo from "../mixins/syncUserInfo.js";
export default {
  data() {
    return {
      dataFirstName: "",
    };
  },
  computed: {
    socialID: function () {
      return this.$auth.user.sub;
    },
    firstName: {
      get() {
        return this.$store.state.user.firstName;
      },
      set(value) {
        this.$store.commit("firstName", value);
      },
    },
    lastName: {
      get() {
        return this.$store.state.user.lastName;
      },
      set(value) {
        this.$store.commit("lastName", value);
      },
    },
    email: {
      get() {
        return this.$store.state.user.email;
      },
      set(value) {
        this.$store.commit("email", value);
      },
    },
    tel: {
      get() {
        return this.$store.state.user.tel;
      },
      set(value) {
        this.$store.commit("tel", value);
      },
    },
  },
  methods: {
    updateInfo: function () {
      if (
        this.socialID === "" ||
        this.firstName === "" ||
        this.lastName === "" ||
        this.email === "" ||
        this.tel === ""
      ) {
        alert("Fyll i alla fält");
      } else {
        // this.$store.state.server
        this.$store.state.showContactInfo = false;
        let server = "http://localhost:7777";
        let body = JSON.stringify({
          socialID: this.socialID,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          tel: this.tel,
        });

        fetch(server + "/updateuser", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: body,
        })
          .then((response) => response.json())
          .then((promise) => {
            console.log(promise);
          });
      }
    },
  },
  mixins: [syncUserInfo],
  mounted: function () {},
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
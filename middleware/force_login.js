export default function () {
  if (!this.$auth.loggedIn) {
    this.$auth.loginWith('auth0');
  }
}

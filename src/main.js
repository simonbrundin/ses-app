import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import store from './store'
import SvgIcon from "./components/Svg-icon";
import './registerServiceWorker'
// Import the Auth0 configuration
import authConfig from '../auth_config.json'
import { setupAuth } from './auth'

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
app.component('svg-icon', SvgIcon)

// Install the authentication plugin here
function callbackRedirect(appState) {
  router.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : '/'
  );
}

setupAuth(authConfig, callbackRedirect).then((auth) => {
  app.use(auth).mount('#app')
})

window.fbAsyncInit = function () {
  FB.init({
    appId: '180977627131037',
    cookie: true,
    xfbml: true,
    version: 'v9.0'
  });

  FB.AppEvents.logPageView();

};

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

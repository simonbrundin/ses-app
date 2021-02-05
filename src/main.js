import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import store from './store'
import SvgIcon from "./components/Svg-icon";
import './registerServiceWorker'
// Import the Auth0 configuration
import { domain, clientId } from "../auth_config.json";
import { Auth0Plugin } from "./auth";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
app.component('svg-icon', SvgIcon)

// Install the authentication plugin here
app.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});
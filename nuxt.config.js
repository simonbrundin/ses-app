export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,
  router: {
    middleware: ['auth'],
    base: '/ses-app/',
  },
  // Allows page refresh to work on github pages
  generate: {
    fallback: '404.html',
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
    '@nuxtjs/dotenv',
  ],
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'power-king',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;800&family=Lato:wght@100;300;400;700;900&family=Nunito:wght@200;400;600;700;800;900&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/stylesheets/style.scss'],
  styleResources: {
    scss: ['~/assets/stylesheets/*.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
  ],

  proxy: [],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: { proxy: true },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  auth: {
    redirect: {
      login: '/login', // redirect user when not connected
      callback: '/login/callback',
    },
    watchLoggedIn: true,
    strategies: {
      auth0: {
        domain: 'simonbrundin.eu.auth0.com',
        clientId: 'SLKrpHAQjSnSN9fTK2kdIndS5hP5bMvZ',
        audience: 'http://api.superelitserien.se',
      },
      facebook: {
        endpoints: {
          userInfo:
            'https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}',
        },
        clientId: '180977627131037',
        scope: ['public_profile', 'email'],
      },
    },
  },
};

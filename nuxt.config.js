export default {
  // https://nuxtjs.org/docs/2.x/configuration-glossary/
  target: 'static',
  ssr: false,
  components: true,
  css: ['~/assets/stylesheets/style.scss'],
  router: {
    middleware: ['auth'],
  },
  // plugins: ['~/plugins/axios'],
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
    '@nuxtjs/dotenv',
  ],
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/dotenv'],
  head: {
    title: 'SuperElitSerien',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;800&family=Lato:wght@100;300;400;700;900&family=Nunito:wght@200;400;600;700;800;900&display=swap',
      },
    ],
  },
  // Får lang="scss" att fungera i components
  styleResources: {
    scss: ['~/assets/stylesheets/*.scss'],
  },
  // Allows page refresh to work on github pages
  generate: {
    fallback: '404.html',
  },
  // https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
  },
  // https://pwa.nuxtjs.org/
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  // https://dev.auth.nuxtjs.org/api/options
  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login/callback',
      home: '/',
    },
    watchLoggedIn: true,
    strategies: {
      auth0: {
        domain: process.env.AUTH0_DOMAIN,
        clientId: process.env.AUTH0_CLIENT_ID,
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

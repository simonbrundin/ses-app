export default {
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    // '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
    '@nuxtjs/dotenv',
  ],
  target: 'static',
  ssr: false,
  server: {
    port: 3000, // default: 3000
  },
  plugins: [
    { src: '~/plugins/pwa-update.js', mode: 'client' },
    // { src: '~/plugins/axios.js', mode: 'client' },
  ],
  buildDir: 'nuxt_dev',
  build: {
    publicPath: 'nuxt_generate',
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
      ],
    },
  },
  components: true,
  css: ['~/assets/stylesheets/style.scss'],
  router: {
    middleware: ['auth'],
    // base: '/',
    // trailingSlash: true,
  },

  buildModules: ['@nuxtjs/pwa', '@nuxtjs/eslint-module', '@nuxtjs/dotenv'],
  head: {
    title: 'SuperElitSerien',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Lato:wght@100;300;400;700;900&family=Roboto:wght@100;300;400;700;900&family=Poppins:wght@100;300;400;700;900&family=Nunito:wght@200;400;600;700;800;900&display=swap',
      },
    ],
  },
  // Får lang="scss" att fungera i components
  styleResources: {
    scss: ['~/assets/stylesheets/*.scss'],
  },
  // Allows page refresh to work on github pages
  generate: {
    dir: 'nuxt_generate',
    fallback: '404.html',
  },
  // https://go.nuxtjs.dev/config-axios
  axios: {
    // proxy: true,
    baseURL: process.env.BACKEND_SERVER_PROD,
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BACKEND_SERVER_PROD,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BACKEND_SERVER_DEV,
    },
  },
  pwa: {
    manifest: {
      name: 'SuperElitSerien',
      short_name: 'SES',
      lang: 'sv-SE',
      display: 'standalone',
      // start_url: '/',
    },
    // workbox: {},
  },
  auth: {
    redirect: {
      login: '/auth',
      logout: '/',
      callback: '/auth/logged-in',
      home: '/',
    },
    strategies: {
      auth0: {
        domain: process.env.AUTH0_DOMAIN,
        clientId: process.env.AUTH0_CLIENT_ID,
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

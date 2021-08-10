export default {
  server: {
    port: 3000, // default: 3000
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
    //   cert: fs.readFileSync(path.resolve(__dirname, 'server.crt')),
    // },
    // host: '0.0.0.0', // default: localhost
  }, // other configs
  // https://nuxtjs.org/docs/2.x/configuration-glossary/
  target: 'static',
  // ssr: false,
  plugins: [
    { src: '~/plugins/pwa-update.js', mode: 'client' },
    // { src: '~/plugins/https.js', mode: 'client' },
  ],
  buildDir: '/',
  build: {
    publicPath: '/',
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
    fallback: '404.html',
  },
  // https://go.nuxtjs.dev/config-axios
  // axios: {
  //   baseURL: process.env.BACKEND_SERVER_DEV,
  // },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BACKEND_SERVER_DEV,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL:
        process.env.NODE_ENV !== 'production'
          ? process.env.BACKEND_SERVER_DEV
          : process.env.BACKEND_SERVER_PROD,
    },
  },
  // https://pwa.nuxtjs.org/
  pwa: {
    manifest: {
      name: 'SuperElitSerien',
      short_name: 'SES',
      lang: 'sv-SE',
      display: 'standalone',
      // start_url: '',
    },
    // workbox: {},
  },
  // https://dev.auth.nuxtjs.org/api/options
  auth: {
    redirect: {
      login: '/login/',
      logout: '/',
      callback: '/login/callback/',
      home: '/',
    },
    watchLoggedIn: true,
    strategies: {
      auth0: {
        domain: process.env.AUTH0_DOMAIN,
        clientId: process.env.AUTH0_CLIENT_ID,
        audience: 'https://simonbrundin.eu.auth0.com/api/v2/',
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

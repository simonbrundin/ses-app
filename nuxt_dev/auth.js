import Middleware from './middleware'
import { Auth, authMiddleware, ExpiredAuthSessionError } from '~auth/runtime'

// Active schemes
import { Auth0Scheme } from '~auth/runtime'
import { Oauth2Scheme } from '~auth/runtime'

Middleware.auth = authMiddleware

export default function (ctx, inject) {
  // Options
  const options = {
  "resetOnError": false,
  "ignoreExceptions": false,
  "scopeKey": "scope",
  "rewriteRedirects": true,
  "fullPathRedirect": false,
  "watchLoggedIn": true,
  "redirect": {
    "login": "/auth",
    "logout": "/",
    "home": "/",
    "callback": "/auth/logged-in"
  },
  "vuex": {
    "namespace": "auth"
  },
  "cookie": {
    "prefix": "auth.",
    "options": {
      "path": "/"
    }
  },
  "localStorage": {
    "prefix": "auth."
  },
  "defaultStrategy": "auth0"
}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // auth0
  $auth.registerStrategy('auth0', new Auth0Scheme($auth, {
  "domain": "simonbrundin.eu.auth0.com",
  "clientId": "SLKrpHAQjSnSN9fTK2kdIndS5hP5bMvZ",
  "audience": "https://simonbrundin.eu.auth0.com/api/v2/",
  "name": "auth0",
  "endpoints": {
    "authorization": "https://simonbrundin.eu.auth0.com/authorize",
    "userInfo": "https://simonbrundin.eu.auth0.com/userinfo",
    "token": "https://simonbrundin.eu.auth0.com/oauth/token",
    "logout": "https://simonbrundin.eu.auth0.com/v2/logout"
  },
  "scope": [
    "openid",
    "profile",
    "email"
  ]
}))

  // facebook
  $auth.registerStrategy('facebook', new Oauth2Scheme($auth, {
  "endpoints": {
    "authorization": "https://facebook.com/v2.12/dialog/oauth",
    "userInfo": "https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}"
  },
  "clientId": "180977627131037",
  "scope": [
    "public_profile",
    "email",
    "public_profile",
    "email"
  ],
  "name": "facebook"
}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      // Don't console log expired auth session errors. This error is common, and expected to happen.
      // The error happens whenever the user does an ssr request (reload/initial navigation) with an expired refresh
      // token. We don't want to log this as an error.
      if (error instanceof ExpiredAuthSessionError) {
        return
      }

      console.error('[ERROR] [AUTH]', error)
    }
  })
}

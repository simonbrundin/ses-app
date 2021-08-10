import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7225d2bb = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _440b2879 = () => interopDefault(import('../pages/coupons.vue' /* webpackChunkName: "pages/coupons" */))
const _d7f82dba = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _10dd3498 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _32ec51d6 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _2cb9164a = () => interopDefault(import('../pages/schedule.vue' /* webpackChunkName: "pages/schedule" */))
const _ca517abe = () => interopDefault(import('../pages/slots.vue' /* webpackChunkName: "pages/slots" */))
const _0b5c988c = () => interopDefault(import('../pages/table.vue' /* webpackChunkName: "pages/table" */))
const _5cb4a538 = () => interopDefault(import('../pages/companies/biteline.vue' /* webpackChunkName: "pages/companies/biteline" */))
const _662b13be = () => interopDefault(import('../pages/companies/Coupon.vue' /* webpackChunkName: "pages/companies/Coupon" */))
const _2d8902e0 = () => interopDefault(import('../pages/companies/InterSport.vue' /* webpackChunkName: "pages/companies/InterSport" */))
const _287a8122 = () => interopDefault(import('../pages/login/callback.vue' /* webpackChunkName: "pages/login/callback" */))
const _40b67ebe = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _7225d2bb,
    name: "admin"
  }, {
    path: "/coupons",
    component: _440b2879,
    name: "coupons"
  }, {
    path: "/home",
    component: _d7f82dba,
    name: "home"
  }, {
    path: "/login",
    component: _10dd3498,
    name: "login"
  }, {
    path: "/profile",
    component: _32ec51d6,
    name: "profile"
  }, {
    path: "/schedule",
    component: _2cb9164a,
    name: "schedule"
  }, {
    path: "/slots",
    component: _ca517abe,
    name: "slots"
  }, {
    path: "/table",
    component: _0b5c988c,
    name: "table"
  }, {
    path: "/companies/biteline",
    component: _5cb4a538,
    name: "companies-biteline"
  }, {
    path: "/companies/Coupon",
    component: _662b13be,
    name: "companies-Coupon"
  }, {
    path: "/companies/InterSport",
    component: _2d8902e0,
    name: "companies-InterSport"
  }, {
    path: "/login/callback",
    component: _287a8122,
    name: "login-callback"
  }, {
    path: "/",
    component: _40b67ebe,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

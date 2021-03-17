import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _421f72b0 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _afef55b4 = () => interopDefault(import('../pages/coupons.vue' /* webpackChunkName: "pages/coupons" */))
const _5d5678d4 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _b82b7a76 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _4a8703c2 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _054bddce = () => interopDefault(import('../pages/schedule.vue' /* webpackChunkName: "pages/schedule" */))
const _07a1b68e = () => interopDefault(import('../pages/slots.vue' /* webpackChunkName: "pages/slots" */))
const _671c27a7 = () => interopDefault(import('../pages/table.vue' /* webpackChunkName: "pages/table" */))
const _68076622 = () => interopDefault(import('../pages/login/callback.vue' /* webpackChunkName: "pages/login/callback" */))
const _a4fe1aaa = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/ses-app/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _421f72b0,
    name: "admin"
  }, {
    path: "/coupons",
    component: _afef55b4,
    name: "coupons"
  }, {
    path: "/home",
    component: _5d5678d4,
    name: "home"
  }, {
    path: "/login",
    component: _b82b7a76,
    name: "login"
  }, {
    path: "/profile",
    component: _4a8703c2,
    name: "profile"
  }, {
    path: "/schedule",
    component: _054bddce,
    name: "schedule"
  }, {
    path: "/slots",
    component: _07a1b68e,
    name: "slots"
  }, {
    path: "/table",
    component: _671c27a7,
    name: "table"
  }, {
    path: "/login/callback",
    component: _68076622,
    name: "login-callback"
  }, {
    path: "/",
    component: _a4fe1aaa,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
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

import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b8cdbae0 = () => interopDefault(import('..\\pages\\admin.vue' /* webpackChunkName: "pages/admin" */))
const _342c51e4 = () => interopDefault(import('..\\pages\\coupons.vue' /* webpackChunkName: "pages/coupons" */))
const _50a66aa4 = () => interopDefault(import('..\\pages\\home.vue' /* webpackChunkName: "pages/home" */))
const _f8cace34 = () => interopDefault(import('..\\pages\\schedule.vue' /* webpackChunkName: "pages/schedule" */))
const _676adb14 = () => interopDefault(import('..\\pages\\slots.vue' /* webpackChunkName: "pages/slots" */))
const _2bc5038f = () => interopDefault(import('..\\pages\\table.vue' /* webpackChunkName: "pages/table" */))
const _7229ce93 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _b8cdbae0,
    name: "admin"
  }, {
    path: "/coupons",
    component: _342c51e4,
    name: "coupons"
  }, {
    path: "/home",
    component: _50a66aa4,
    name: "home"
  }, {
    path: "/schedule",
    component: _f8cace34,
    name: "schedule"
  }, {
    path: "/slots",
    component: _676adb14,
    name: "slots"
  }, {
    path: "/table",
    component: _2bc5038f,
    name: "table"
  }, {
    path: "/",
    component: _7229ce93,
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

(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{445:function(t,n,o){"use strict";o.r(n);var e={setup:function(){return{}}},l=o(2),component=Object(l.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("nuxt-link",{attrs:{to:"/"}},[o("button",[t._v("Tillbaka")])]),t._v(" "),o("button",{on:{click:function(n){return t.$auth.logout()}}},[t._v("Logga ut")]),t._v(" "),t.$auth.loggedIn?o("nuxt-link",{attrs:{to:"/admin"}},["facebook|3373827679383461"===t.$auth.user.sub?o("button",[t._v("\n      Admin\n    ")]):t._e()]):t._e(),t._v(" "),o("ContactInformation")],1)}),[],!1,null,"c4762074",null);n.default=component.exports;installComponents(component,{ContactInformation:o(196).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{446:function(e,t,n){"use strict";n.r(t);var r={name:"AddToHomeScreen",data:function(){return{deferredPrompt:null}},mounted:function(){this.captureEvent()},methods:{captureEvent:function(){var e=this;window.addEventListener("beforeinstallprompt",(function(t){t.preventDefault(),e.deferredPrompt=t}))},clickCallback:function(){var e=this;this.deferredPrompt.prompt(),this.deferredPrompt.userChoice.then((function(t){t.outcome,e.deferredPrompt=null}))}}},o=n(14),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.deferredPrompt?n("button",{ref:"addBtn",staticClass:"add-button",on:{click:e.clickCallback}},[e._v("\n    Add\n  ")]):e._e()])}),[],!1,null,null,null);t.default=component.exports}}]);
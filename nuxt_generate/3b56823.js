(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{314:function(t,o,e){var content=e(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(70).default)("1365bb9c",content,!0,{sourceMap:!1})},358:function(t,o,e){"use strict";e(314)},359:function(t,o,e){var n=e(69)(!1);n.push([t.i,'h1[data-v-3b248ffd]{font-size:1.75rem}h1[data-v-3b248ffd],h2[data-v-3b248ffd]{color:#fbfbfb;font-weight:600;margin:0}h2[data-v-3b248ffd]{font-size:1.4rem}h3[data-v-3b248ffd]{color:#fbfbfb;margin:0;font-size:1.2rem;font-weight:600}p[data-v-3b248ffd]{font-size:12px;margin-top:.5rem;margin-bottom:.5rem}.flex-column[data-v-3b248ffd]{display:flex;flex-direction:column;align-items:center;justify-content:center}.round[data-v-3b248ffd]{border-radius:100%}.full-screen[data-v-3b248ffd]{position:fixed;padding:20px;top:0;height:calc(100vh - 40px);width:calc(100vw - 40px);left:0;z-index:200}.full-screen[data-v-3b248ffd],body[data-v-3b248ffd]{background:#121719;margin:0}body[data-v-3b248ffd]{color:#272727;font-family:"Montserrat";font-weight:300;font-size:12px}div[data-v-3b248ffd]{color:#121719}.light[data-v-3b248ffd],.light div[data-v-3b248ffd]{color:#fbfbfb}.card[data-v-3b248ffd]{background:#272727;color:#2d9b82;border-radius:20px;padding:20px;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.card h2[data-v-3b248ffd]{color:#fbfbfb}.card-container[data-v-3b248ffd]{filter:drop-shadow(0 0 .75rem rgba(0,0,0,.288))}.light-card[data-v-3b248ffd]{background:#fbfbfb;color:#121719}.dark-card[data-v-3b248ffd],.light-card[data-v-3b248ffd]{border-radius:20px;padding:20px;margin:20px 0 0;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.dark-card[data-v-3b248ffd]{background:#272727}.dark-card[data-v-3b248ffd],.dark-card div[data-v-3b248ffd]{color:#fbfbfb}button[data-v-3b248ffd]{color:#121719;padding:12px 20px;background:#8eb5db;border-radius:20px;font-size:15px;font-weight:300;font-family:"Montserrat";border:0;background:#fbbf05}.menu-item-text[data-v-3b248ffd]{color:#747274;font-family:-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont}.coupon-icon[data-v-3b248ffd]{fill:#fbbf05;width:36px;height:36px}.dark[data-v-3b248ffd]{color:#272727}#notifications[data-v-3b248ffd]{position:relative;left:-10px}.notification[data-v-3b248ffd]{background:#fbfbfb;position:fixed;top:0;left:0;height:100vh;width:calc(100vw - 40px);padding:20px;margin:0 0 20px;z-index:100}.notification-image[data-v-3b248ffd]{max-width:80%;max-height:230px;margin:auto}.notification-heading[data-v-3b248ffd]{font-size:20px;font-weight:500;color:#272727}.greeting[data-v-3b248ffd]{margin:20px 0;font-size:16px;text-align:center;font-weight:500;color:#fbbf05}.message[data-v-3b248ffd]{color:#272727;display:flex;flex-direction:column;justify-content:center}.notification-description[data-v-3b248ffd]{color:#272727;text-align:center;font-size:13px;z-index:2}.decline[data-v-3b248ffd]{margin:24px 0 0;color:#272727}',""]),t.exports=n},441:function(t,o,e){"use strict";e.r(o);var n={data:function(){return{leftToPay:0,addedNextMatchToCalendar:!0,acceptedNextMatch:!0,proposedNextGameDate:"Torsdag 12/8 16.00",noNotifications:!0,daysConfirmed:1,showContactInformation:!1}},methods:{}},f=(e(358),e(35)),component=Object(f.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"notifications"}},[t._e(),t._v(" "),t.$store.state.notifications.payment?t._e():e("Notifications-Payment",{staticClass:"fullscreen"}),t._v(" "),t.$store.state.notifications.confirmGame?t._e():e("Notifications-ConfirmGame",{staticClass:"fullscreen"}),t._v(" "),t.$store.state.notifications.addToCalendar?t._e():e("Notifications-AddToCalendar",{staticClass:"fullscreen"}),t._v(" "),t.$store.state.notifications.scheduleInstructions?e("Notifications-ScheduleInstructions",{staticClass:"fullscreen"}):t._e(),t._v(" "),t.$store.state.notifications.userInfo||""===t.$store.state.user.firstname||""===t.$store.state.user.lastname||""===t.$store.state.user.email||""===t.$store.state.user.tel?e("ContactInformation",{staticClass:"notification"}):t._e(),t._v(" "),t.acceptedNextMatch?t._e():e("div",{staticClass:"notification accept-game"},[e("p",[t._v("\n      Vi har hittat en ny möjlig match.\n      "),e("br"),t._v("\n      Fungerar det att spela "+t._s(t.proposedNextGameDate)+"\n    ")]),t._v(" "),e("button",[t._v("Ja")]),t._v(" "),e("button",[t._v("Nej")])]),t._v(" "),t.$store.state.showNotificationButtons?e("div",{staticClass:"dev-notification-buttons"},[e("button",{on:{click:function(o){t.addedNextMatchToCalendar=!t.addedNextMatchToCalendar}}},[t._v("\n      Kalender\n    ")]),t._v(" "),e("button",{on:{click:function(o){t.acceptedNextMatch=!t.acceptedNextMatch}}},[t._v("Acceptera")]),t._v(" "),e("button",{on:{click:function(o){t.acceptedNextMatch=!t.acceptedNextMatch}}},[t._v("bekräfta")]),t._v(" "),e("button",{on:{click:function(o){t.noNotifications=!1}}},[t._v("x")])]):e("h2",{on:{click:function(o){t.noNotifications=!0}}})],1)}),[],!1,null,"3b248ffd",null);o.default=component.exports;installComponents(component,{ContactInformation:function(){return e.e(9).then(e.bind(null,444)).then((function(t){return t.default||t}))}})}}]);
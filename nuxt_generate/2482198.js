(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{370:function(t,e,o){var content=o(397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("dd603fa0",content,!0,{sourceMap:!1})},396:function(t,e,o){"use strict";o(370)},397:function(t,e,o){var n=o(14)(!1);n.push([t.i,'h1[data-v-2af26f59]{font-size:1.75rem}h1[data-v-2af26f59],h2[data-v-2af26f59]{color:#fbfbfb;font-weight:600;margin:0}h2[data-v-2af26f59]{font-size:1.4rem}h3[data-v-2af26f59]{color:#fbfbfb;margin:0;font-size:1.2rem;font-weight:600}p[data-v-2af26f59]{font-size:12px;margin-top:.5rem;margin-bottom:.5rem}.flex-column[data-v-2af26f59]{display:flex;flex-direction:column;align-items:center;justify-content:center}.round[data-v-2af26f59]{border-radius:100%}.full-screen[data-v-2af26f59]{position:fixed;padding:20px;top:0;height:calc(100vh - 40px);width:calc(100vw - 40px);left:0;z-index:200}.full-screen[data-v-2af26f59],body[data-v-2af26f59]{background:#121618;margin:0}body[data-v-2af26f59]{color:#272727;font-family:"Montserrat";font-weight:300;font-size:12px}div[data-v-2af26f59]{color:#121618}.light[data-v-2af26f59],.light div[data-v-2af26f59]{color:#fbfbfb}.card[data-v-2af26f59]{background:#272727;color:#2d9b82;border-radius:20px;padding:20px;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.card h2[data-v-2af26f59]{color:#fbfbfb}.card-container[data-v-2af26f59]{filter:drop-shadow(0 0 .75rem rgba(0,0,0,.288))}.light-card[data-v-2af26f59]{background:#fbfbfb;color:#121618}.dark-card[data-v-2af26f59],.light-card[data-v-2af26f59]{border-radius:20px;padding:20px;margin:20px 0 0;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.dark-card[data-v-2af26f59]{background:#272727}.dark-card[data-v-2af26f59],.dark-card div[data-v-2af26f59]{color:#fbfbfb}button[data-v-2af26f59]{color:#121618;padding:20px;background:#8eb5db;border-radius:16px;font-size:14px;font-weight:500;font-family:"Montserrat";border:0;text-transform:uppercase;background:#fbbf05}.menu-item-text[data-v-2af26f59]{color:#747274;font-family:-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont}.coupon-icon[data-v-2af26f59]{fill:#fbbf05;width:36px;height:36px}.dark[data-v-2af26f59]{color:#272727}#admin[data-v-2af26f59]{margin-bottom:200px;padding:50px 100px}#admin[data-v-2af26f59],#admin div[data-v-2af26f59]{color:#fbfbfb}.choosen[data-v-2af26f59]{background-color:green}',""]),t.exports=n},461:function(t,e,o){"use strict";o.r(e);var n=o(2),r=(o(17),{layout:"admin",auth:!1,data:function(){return{city:"timra",league:"1",showPlayerGrid:!1}},mounted:function(){},methods:{avboka:function(){var t=prompt("Playtomic Match ID");this.$store.dispatch("cancelMatchInPlaytomic",{playtomicMatchID:t})},cancelAllMatches:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Noomi2020!"===prompt("Lösenord?")){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,t.$axios.$get("/admin/all-playtomic");case 5:o=e.sent,console.log(o),n=0;case 8:if(!(n<o.length)){e.next=15;break}return r=o[n],e.next=12,t.$store.dispatch("cancelMatchInPlaytomic",{playtomicMatchID:r});case 12:n++,e.next=8;break;case 15:case"end":return e.stop()}}),e)})))()},book:function(){var t=prompt("Stad?"),e=prompt("Division?"),o=prompt("MatchID?"),time=prompt("Tid?");this.$store.dispatch("bookMatch",{city:t,league:e,matchID:o,time:time})},bookAllMatchesInLeague:function(){var t=prompt("Stad?"),e=prompt("Division?");this.$store.dispatch("bookAllMatchesInLeague",{city:t,league:e})}}}),c=(o(396),o(3)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"admin"}},[o("Admin-Todos"),t._v(" "),o("button",{class:{choosen:"matches"===t.$store.state.admin.tab},on:{click:function(e){return t.$store.commit("admin/tab","matches")}}},[t._v("\n    Alla matcher\n  ")]),t._v(" "),o("button",{class:{choosen:"players"===t.$store.state.admin.tab},on:{click:function(e){return t.$store.commit("admin/tab","players")}}},[t._v("\n    Alla spelare\n  ")]),t._v(" "),o("button",{on:{click:function(e){return t.$router.push("/")}}},[t._v("Stäng admin")]),o("button",{on:{click:function(e){return t.$store.dispatch("loginToPlaytomic")}}},[t._v("\n    Login to Syltek\n  ")]),t._v(" "),o("button",{on:{click:function(e){return t.$store.dispatch("availableCourts",{city:t.$store.state.auth.user.city,time:"2021-09-13T19:00:00"})}}},[t._v("\n    Availability")]),o("button",{on:{click:t.cancelAllMatches}},[t._v("avboka alla")]),o("button",{on:{click:t.avboka}},[t._v("avboka")]),o("button",{on:{click:t.book}},[t._v("Boka")]),t._v(" "),o("button",{on:{click:t.bookAllMatchesInLeague}},[t._v("Boka alla")]),t._v(" "),o("Admin-MatchGrid",{directives:[{name:"show",rawName:"v-show",value:"matches"===t.$store.state.admin.tab&&0===Object.keys(t.$store.state.admin.selectedMatch).length,expression:"\n      $store.state.admin.tab === 'matches' &&\n      Object.keys($store.state.admin.selectedMatch).length === 0\n    "}]}),t._v(" "),"players"===t.$store.state.admin.tab?o("Admin-PlayerGrid"):t._e(),t._v(" "),Object.keys(t.$store.state.admin.selectedMatch).length>0?o("Admin-MatchInfo"):t._e()],1)}),[],!1,null,"2af26f59",null);e.default=component.exports}}]);
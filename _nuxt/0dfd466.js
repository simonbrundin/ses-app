(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{328:function(e,t,o){var content=o(357);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(43).default)("79ba7640",content,!0,{sourceMap:!1})},356:function(e,t,o){"use strict";o(328)},357:function(e,t,o){var d=o(42)(!1);d.push([e.i,'h1[data-v-21f38aee]{font-size:1.75rem}h1[data-v-21f38aee],h2[data-v-21f38aee]{color:#fbfbfb;font-weight:600;margin:0}h2[data-v-21f38aee]{font-size:1.4rem}h3[data-v-21f38aee]{color:#fbfbfb;margin:0;font-size:1.2rem;font-weight:600}p[data-v-21f38aee]{font-size:12px;margin-top:.5rem;margin-bottom:.5rem}.flex-column[data-v-21f38aee]{display:flex;flex-direction:column;align-items:center;justify-content:center}.round[data-v-21f38aee]{border-radius:100%}.full-screen[data-v-21f38aee]{position:fixed;padding:20px;top:0;height:calc(100vh - 40px);width:calc(100vw - 40px);left:0;z-index:200}.full-screen[data-v-21f38aee],body[data-v-21f38aee]{background:#121719;margin:0}body[data-v-21f38aee]{color:#fbfbfb;font-family:"Montserrat";font-weight:300;font-size:12px}div[data-v-21f38aee]{color:#121719}.light[data-v-21f38aee],.light div[data-v-21f38aee]{color:#fbfbfb}.card[data-v-21f38aee]{background:#1e2124;color:#2d9b82;border-radius:20px;padding:20px;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.card h2[data-v-21f38aee]{color:#fbfbfb}.card-container[data-v-21f38aee]{filter:drop-shadow(0 0 .75rem rgba(0,0,0,.288))}.light-card[data-v-21f38aee]{background:#fbfbfb;color:#121719}.dark-card[data-v-21f38aee],.light-card[data-v-21f38aee]{border-radius:20px;padding:20px;margin:20px 0 0;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.dark-card[data-v-21f38aee]{background:#1e2124}.dark-card[data-v-21f38aee],.dark-card div[data-v-21f38aee]{color:#fbfbfb}button[data-v-21f38aee]{color:#fff;padding:12px 20px;background:#8eb5db;border-radius:20px;font-size:15px;font-weight:300;font-family:"Montserrat";border:0;background:#fbbf05}.menu-item-text[data-v-21f38aee]{color:#747274;font-family:-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont}.coupon-icon[data-v-21f38aee]{fill:#fbbf05;width:36px;height:36px}.dark[data-v-21f38aee]{color:#1e2124}#admin[data-v-21f38aee]{margin-bottom:200px;padding:50px 100px}#admin[data-v-21f38aee],#admin div[data-v-21f38aee]{color:#fbfbfb}.choosen[data-v-21f38aee]{background-color:green}',""]),e.exports=d},425:function(e,t,o){"use strict";o.r(t);var d={layout:"admin",data:function(){return{city:"timra",league:"1",showPlayerGrid:!1}}},r=(o(356),o(13)),component=Object(r.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"admin"}},[o("Admin-Todos"),e._v(" "),o("button",{class:{choosen:"matches"===e.$store.state.admin.tab},on:{click:function(t){return e.$store.commit("admin/tab","matches")}}},[e._v("\n    Alla matcher\n  ")]),e._v(" "),o("button",{class:{choosen:"players"===e.$store.state.admin.tab},on:{click:function(t){return e.$store.commit("admin/tab","players")}}},[e._v("\n    Alla spelare\n  ")]),e._v(" "),"matches"===e.$store.state.admin.tab&&0===Object.keys(e.$store.state.admin.selectedMatch).length?o("Admin-MatchGrid"):e._e(),e._v(" "),"players"===e.$store.state.admin.tab?o("Admin-PlayerGrid"):e._e(),e._v(" "),Object.keys(e.$store.state.admin.selectedMatch).length>0?o("Admin-MatchInfo"):e._e()],1)}),[],!1,null,"21f38aee",null);t.default=component.exports}}]);
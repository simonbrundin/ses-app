(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{354:function(t,e,d){var content=d(379);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(23).default)("cd7188a6",content,!0,{sourceMap:!1})},378:function(t,e,d){"use strict";d(354)},379:function(t,e,d){var o=d(22)(!1);o.push([t.i,'h1[data-v-ead926a4]{font-size:1.75rem}h1[data-v-ead926a4],h2[data-v-ead926a4]{color:#fbfbfb;font-weight:600;margin:0}h2[data-v-ead926a4]{font-size:1.4rem}h3[data-v-ead926a4]{color:#fbfbfb;margin:0;font-size:1.2rem;font-weight:600}p[data-v-ead926a4]{font-size:12px;margin-top:.5rem;margin-bottom:.5rem}.flex-column[data-v-ead926a4]{display:flex;flex-direction:column;align-items:center;justify-content:center}.round[data-v-ead926a4]{border-radius:100%}.full-screen[data-v-ead926a4]{position:fixed;padding:20px;top:0;height:calc(100vh - 40px);width:calc(100vw - 40px);left:0;z-index:200}.full-screen[data-v-ead926a4],body[data-v-ead926a4]{background:#121719;margin:0}body[data-v-ead926a4]{color:#272727;font-family:"Montserrat";font-weight:300;font-size:12px}div[data-v-ead926a4]{color:#121719}.light[data-v-ead926a4],.light div[data-v-ead926a4]{color:#fbfbfb}.card[data-v-ead926a4]{background:#272727;color:#2d9b82;border-radius:20px;padding:20px;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.card h2[data-v-ead926a4]{color:#fbfbfb}.card-container[data-v-ead926a4]{filter:drop-shadow(0 0 .75rem rgba(0,0,0,.288))}.light-card[data-v-ead926a4]{background:#fbfbfb;color:#121719}.dark-card[data-v-ead926a4],.light-card[data-v-ead926a4]{border-radius:20px;padding:20px;margin:20px 0 0;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.dark-card[data-v-ead926a4]{background:#272727}.dark-card[data-v-ead926a4],.dark-card div[data-v-ead926a4]{color:#fbfbfb}button[data-v-ead926a4]{color:#121719;padding:12px 20px;background:#8eb5db;border-radius:20px;font-size:15px;font-weight:300;font-family:"Montserrat";border:0;background:#fbbf05}.menu-item-text[data-v-ead926a4]{color:#747274;font-family:-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont}.coupon-icon[data-v-ead926a4]{fill:#fbbf05;width:36px;height:36px}.dark[data-v-ead926a4]{color:#272727}#admin[data-v-ead926a4]{margin-bottom:200px;padding:50px 100px}#admin[data-v-ead926a4],#admin div[data-v-ead926a4]{color:#fbfbfb}.choosen[data-v-ead926a4]{background-color:green}',""]),t.exports=o},441:function(t,e,d){"use strict";d.r(e);var o={layout:"admin",data:function(){return{city:"timra",league:"1",showPlayerGrid:!1}},mounted:function(){},methods:{}},n=(d(378),d(2)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{attrs:{id:"admin"}},[d("Admin-Todos"),t._v(" "),d("button",{class:{choosen:"matches"===t.$store.state.admin.tab},on:{click:function(e){return t.$store.commit("admin/tab","matches")}}},[t._v("\n    Alla matcher\n  ")]),t._v(" "),d("button",{class:{choosen:"players"===t.$store.state.admin.tab},on:{click:function(e){return t.$store.commit("admin/tab","players")}}},[t._v("\n    Alla spelare\n  ")]),t._v(" "),d("button",{on:{click:function(e){return t.$router.push("/")}}},[t._v("Stäng admin")]),t._v(" "),"matches"===t.$store.state.admin.tab&&0===Object.keys(t.$store.state.admin.selectedMatch).length?d("Admin-MatchGrid"):t._e(),t._v(" "),"players"===t.$store.state.admin.tab?d("Admin-PlayerGrid"):t._e(),t._v(" "),Object.keys(t.$store.state.admin.selectedMatch).length>0?d("Admin-MatchInfo"):t._e()],1)}),[],!1,null,"ead926a4",null);e.default=component.exports}}]);
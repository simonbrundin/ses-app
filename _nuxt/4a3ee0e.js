(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{316:function(e,t,r){var content=r(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(29).default)("cdf8395c",content,!0,{sourceMap:!1})},370:function(e,t,r){"use strict";r(316)},371:function(e,t,r){var d=r(28)(!1);d.push([e.i,'h1[data-v-3da0c77e]{font-size:1.75rem}h1[data-v-3da0c77e],h2[data-v-3da0c77e]{color:#fbfbfb;font-weight:600;margin:0}h2[data-v-3da0c77e]{font-size:1.4rem}h3[data-v-3da0c77e]{color:#fbfbfb;margin:0;font-size:1.2rem;font-weight:600}p[data-v-3da0c77e]{font-size:12px;margin-top:.5rem;margin-bottom:.5rem}.flex-column[data-v-3da0c77e]{display:flex;flex-direction:column;align-items:center;justify-content:center}.round[data-v-3da0c77e]{border-radius:100%}.full-screen[data-v-3da0c77e]{position:fixed;padding:20px;top:0;height:calc(100vh - 40px);width:calc(100vw - 40px);left:0;z-index:200}.full-screen[data-v-3da0c77e],body[data-v-3da0c77e]{background:#121719;margin:0}body[data-v-3da0c77e]{color:#fbfbfb;font-family:"Montserrat";font-weight:300;font-size:12px}div[data-v-3da0c77e]{color:#121719}.light[data-v-3da0c77e],.light div[data-v-3da0c77e]{color:#fbfbfb}.card[data-v-3da0c77e]{background:#1e2124;color:#2d9b82;border-radius:20px;padding:20px;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.card h2[data-v-3da0c77e]{color:#fbfbfb}.card-container[data-v-3da0c77e]{filter:drop-shadow(0 0 .75rem rgba(0,0,0,.288))}.light-card[data-v-3da0c77e]{background:#fbfbfb;color:#121719}.dark-card[data-v-3da0c77e],.light-card[data-v-3da0c77e]{border-radius:20px;padding:20px;margin:20px 0 0;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.dark-card[data-v-3da0c77e]{background:#1e2124}.dark-card[data-v-3da0c77e],.dark-card div[data-v-3da0c77e]{color:#fbfbfb}button[data-v-3da0c77e]{color:#fff;padding:12px 20px;background:#8eb5db;border-radius:20px;font-size:15px;font-weight:300;font-family:"Montserrat";border:0;background:#fbbf05}.menu-item-text[data-v-3da0c77e]{color:#747274;font-family:-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont}.coupon-icon[data-v-3da0c77e]{fill:#fbbf05;width:36px;height:36px}.dark[data-v-3da0c77e]{color:#1e2124}.match-grid[data-v-3da0c77e]{display:grid;grid-template-columns:repeat(25,1fr);grid-template-rows:repeat(33,1fr);grid-column-gap:3px;margin-top:20px}.match-dot[data-v-3da0c77e]{border:1px solid #fff;border-radius:100px}.match-dot[data-v-3da0c77e],.match-number[data-v-3da0c77e]{background:#121719;margin-top:3px;height:10px;width:100%;color:#fff;text-align:center;font-size:8px}.match-number[data-v-3da0c77e]{border:1px solid transparent;border-radius:100px}.league-title[data-v-3da0c77e]{text-align:center;color:#fff}.booked-time[data-v-3da0c77e]{background:#90ee90}.no-booked-time[data-v-3da0c77e]{border:1px solid #d3d3d3;color:#fff}.registrerat-resultat[data-v-3da0c77e]{background:green}.inga-gemensamma-luckor[data-v-3da0c77e]{background:red}.status-played-without-result[data-v-3da0c77e]{background:#90ee90}.rr[data-v-3da0c77e]{background:green}',""]),e.exports=d},411:function(e,t,r){"use strict";r.r(t);r(20);var d=r(2),o={data:function(){return{leagues:[],selectedLeague:"",spelare:{}}},mounted:function(){this.getGames()},methods:{isPointsEquals6:function(e,t){return e+t===6},isCommonSlotsMoreThanNone:function(e,t){return e+t===0},isTimeBooked:function(e){return null!==e},getGames:function(){var e=this;return Object(d.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("https://superelitserien-server.herokuapp.com/admin/games");case 2:r=t.sent,e.leagues=r;case 4:case"end":return t.stop()}}),t)})))()},getGame:function(e,t){var r=this;return Object(d.a)(regeneratorRuntime.mark((function d(){var o;return regeneratorRuntime.wrap((function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,r.$axios.$get("https://superelitserien-server.herokuapp.com/admin/game/"+e+"/"+t);case 2:o=d.sent,r.$store.commit("admin/selectedMatch",o[0]),r.$store.commit("admin/selectedLeague",e);case 5:case"end":return d.stop()}}),d)})))()}}},n=(r(370),r(8)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"match-grid"}},[r("div",{staticClass:"match-grid"},e._l(e.leagues,(function(t,d){return r("div",{key:d},[r("div",{staticClass:"league-title"},[e._v("\n        "+e._s(t.namn.replace("matcher-timra-",""))+"\n      ")]),e._v(" "),e._l(t.matcher,(function(d,o){return r("div",{key:o,staticClass:"match-dot",class:[d.ID,[e.isPointsEquals6(d.pointshemma,d.pointsborta)?["registrerat-resultat"]:[""]],[e.isCommonSlotsMoreThanNone(d.oddslots.length,d.evenslots.length)?["inga-gemensamma-luckor"]:[""]],[e.isTimeBooked(d.bookedtime)?["booked-time"]:[""]]],on:{click:function(r){return e.getGame(t.namn,d.ID)}}},[e._v("\n        "+e._s(d.ID)+"\n      ")])}))],2)})),0),e._v(" "),r("div",{staticClass:"registrerat-resultat"},[e._v("Registrerat resultat")]),e._v(" "),r("div",{staticClass:"inga-gemensamma-luckor"},[e._v("Inga gemensamma luckor")]),e._v(" "),r("div",{staticClass:"booked-time"},[e._v("Bokad")]),e._v(" "),r("div",{staticClass:"no-booked-time"},[e._v("Inte bokad")])])}),[],!1,null,"3da0c77e",null);t.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{396:function(e,t,r){var content=r(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("b6ba1128",content,!0,{sourceMap:!1})},461:function(e,t,r){"use strict";r(396)},462:function(e,t,r){var n=r(14)(!1);n.push([e.i,'h1[data-v-07ebd859]{font-size:1.75rem}h1[data-v-07ebd859],h2[data-v-07ebd859]{color:#fbfbfb;font-weight:600;margin:0}h2[data-v-07ebd859]{font-size:1.4rem}h3[data-v-07ebd859]{color:#fbfbfb;margin:0;font-size:1.2rem;font-weight:600}p[data-v-07ebd859]{font-size:12px;margin-top:.5rem;margin-bottom:.5rem}.flex-column[data-v-07ebd859]{display:flex;flex-direction:column;align-items:center;justify-content:center}.round[data-v-07ebd859]{border-radius:100%}.full-screen[data-v-07ebd859]{position:fixed;padding:20px;top:0;height:calc(100vh - 40px);width:calc(100vw - 40px);left:0;z-index:200}.full-screen[data-v-07ebd859],body[data-v-07ebd859]{background:#121618;margin:0}body[data-v-07ebd859]{color:#272727;font-family:"Montserrat";font-weight:300;font-size:12px}div[data-v-07ebd859]{color:#121618}.light[data-v-07ebd859],.light div[data-v-07ebd859]{color:#fbfbfb}.card[data-v-07ebd859]{background:#272727;color:#fff;border-radius:20px;padding:20px;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.card h2[data-v-07ebd859]{color:#fbfbfb}.card-container[data-v-07ebd859]{filter:drop-shadow(0 0 .75rem rgba(0,0,0,.288))}.light-card[data-v-07ebd859]{background:#fbfbfb;color:#121618}.dark-card[data-v-07ebd859],.light-card[data-v-07ebd859]{border-radius:20px;padding:20px;margin:20px 0 0;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.dark-card[data-v-07ebd859]{background:#272727}.dark-card[data-v-07ebd859],.dark-card div[data-v-07ebd859]{color:#fbfbfb}button[data-v-07ebd859]{color:#121618;padding:20px;background:#8eb5db;border-radius:16px;font-size:14px;font-weight:500;font-family:"Montserrat";border:0;text-transform:uppercase;background:#fbbf05}.menu-item-text[data-v-07ebd859]{color:#747274;font-family:-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont}.coupon-icon[data-v-07ebd859]{fill:#fbbf05;width:36px;height:36px}.dark[data-v-07ebd859]{color:#272727}#admin-todos div[data-v-07ebd859]{color:#fbfbfb}',""]),e.exports=n},497:function(e,t,r){"use strict";r.r(t);var n=r(2),o=(r(17),{data:function(){return{playersWithoutLeague:[],fullLeagues:[]}},mounted:function(){this.getPlayersWithoutLeague(),this.getFullLeagues()},methods:{getPlayersWithoutLeague:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/admin/todos/players-without-league");case 2:r=t.sent,e.playersWithoutLeague=r;case 4:case"end":return t.stop()}}),t)})))()},getFullLeagues:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/full-leagues");case 2:r=t.sent,e.fullLeagues=r;case 4:case"end":return t.stop()}}),t)})))()}}}),d=(r(461),r(3)),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"admin-todos"}},[r("h1",[e._v("Att göra:")]),e._v(" "),e.playersWithoutLeague.length>0?r("div",[e._m(0),e._v(" "),r("br"),e._v(" "),e._l(e.playersWithoutLeague,(function(t,n){return r("div",{key:n},[e._v("\n      "+e._s(t)+"\n    ")])})),e._v(" "),r("br")],2):e._e(),e._v(" "),e.fullLeagues.length>0?r("div",[e._m(1),e._v(" "),r("br"),e._v(" "),e._l(e.fullLeagues,(function(t,n){return r("div",{key:n},[e._v("\n      "+e._s(t)+"\n    ")])}))],2):e._e(),e._v(" "),r("br")])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("u",[e._v("\n        Lägg in dessa spelare i en serie i databasen och bocka av dem i\n        sheetsarket\n      ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("u",[e._v("Nu har alla i serien fyllt i sina scheman. Dags att skapa spelscheman\n        och boka upp tiderna. Kör creatematches och skicka en fråga till\n        updatecommonslots på dessa serier\n      ")])])}],!1,null,"07ebd859",null);t.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{339:function(t,e,r){var content=r(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("4b3fdd57",content,!0,{sourceMap:!1})},372:function(t,e,r){"use strict";r(339)},373:function(t,e,r){var n=r(14)(!1);n.push([t.i,'h1[data-v-602e032d]{font-size:1.75rem}h1[data-v-602e032d],h2[data-v-602e032d]{color:#fbfbfb;font-weight:600;margin:0}h2[data-v-602e032d]{font-size:1.4rem}h3[data-v-602e032d]{color:#fbfbfb;margin:0;font-size:1.2rem;font-weight:600}p[data-v-602e032d]{font-size:12px;margin-top:.5rem;margin-bottom:.5rem}.flex-column[data-v-602e032d]{display:flex;flex-direction:column;align-items:center;justify-content:center}.round[data-v-602e032d]{border-radius:100%}.full-screen[data-v-602e032d]{position:fixed;padding:20px;top:0;height:calc(100vh - 40px);width:calc(100vw - 40px);left:0;z-index:200}.full-screen[data-v-602e032d],body[data-v-602e032d]{background:#121618;margin:0}body[data-v-602e032d]{color:#272727;font-family:"Montserrat";font-weight:300;font-size:12px}div[data-v-602e032d]{color:#121618}.light[data-v-602e032d],.light div[data-v-602e032d]{color:#fbfbfb}.card[data-v-602e032d]{background:#272727;color:#fff;border-radius:20px;padding:20px;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.card h2[data-v-602e032d]{color:#fbfbfb}.card-container[data-v-602e032d]{filter:drop-shadow(0 0 .75rem rgba(0,0,0,.288))}.light-card[data-v-602e032d]{background:#fbfbfb;color:#121618}.dark-card[data-v-602e032d],.light-card[data-v-602e032d]{border-radius:20px;padding:20px;margin:20px 0 0;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.dark-card[data-v-602e032d]{background:#272727}.dark-card[data-v-602e032d],.dark-card div[data-v-602e032d]{color:#fbfbfb}button[data-v-602e032d]{color:#121618;padding:20px;background:#8eb5db;border-radius:16px;font-size:14px;font-weight:500;font-family:"Montserrat";border:0;text-transform:uppercase;background:#fbbf05}.menu-item-text[data-v-602e032d]{color:#747274;font-family:-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont}.coupon-icon[data-v-602e032d]{fill:#fbbf05;width:36px;height:36px}.dark[data-v-602e032d]{color:#272727}.payment div[data-v-602e032d]{display:flex;flex-direction:column;margin-bottom:20px}.payment div div[data-v-602e032d]{font-size:14px;color:#fff;margin:8px 0 0}.payment div div.price[data-v-602e032d]{color:#fbbf05;font-size:16px;margin:6px 0 0}button[data-v-602e032d]{margin-top:16px}',""]),t.exports=n},406:function(t,e,r){"use strict";r.r(e);var n=r(2),o=(r(17),r(40),r(41),r(46),{data:function(){return{test:"price_1JgablH3xLMeoLZn2iNTd2e9",live:"price_1JcUfmH3xLMeoLZnHJ6C3qI7",cheap:"price_1JgasrH3xLMeoLZn9Y3ZHQsN"}},computed:{matchesToPay:function(){var t=this;return this.$store.state.allMyGames.filter((function(e){return t.$store.state.payments.matches.some((function(t){var r=new Date,n=new Date(e.bookedtime);return t.match_id!==e.ID&&r>n}))}))}},mounted:function(){this.isSignUpFeePaid(),this.getPayedMatches()},methods:{isSignUpFeePaid:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$post("/payment/signup",{userID:t.$store.state.auth.user.ID}).then((function(t){return t.isFeePaid}));case 2:r=e.sent,t.$store.commit("signup",r);case 4:case"end":return e.stop()}}),e)})))()},getPayedMatches:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$post("/payment/matches",{userID:t.$store.state.auth.user.ID}).then((function(t){return t.payedMatches}));case 2:r=e.sent,t.$store.commit("matches",r);case 4:case"end":return e.stop()}}),e)})))()},startPayment:function(t){var e=t.priceID,r=t.type,n=t.matchID,o=t.city,d=t.league,body={priceID:e,metadata:{userID:this.$store.state.auth.user.ID,matchID:n,city:o,league:d,type:r}};this.$axios.$post("/create-checkout-session",body).then((function(t){console.log("success",t),window.location.replace(t)})).catch((function(t){console.log("decline",t),window.location.replace(t)}))}}}),d=(r(372),r(3)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"payment"},[t.$store.state.payments.signup?t._e():r("div",{staticClass:"card registration-fee"},[r("h2",[t._v("Anmälningsavgift")]),t._v(" "),r("div",{staticClass:"price"},[t._v("200 kr")]),t._v(" "),r("button",{on:{click:function(e){return t.startPayment({priceID:"price_1JcV5JH3xLMeoLZnSgIvPFep",type:"signup"})}}},[t._v("\n      Betala\n    ")])]),t._v(" "),t._l(t.matchesToPay,(function(e){return r("div",{key:e.ID,staticClass:"card subscription-fee"},[r("h2",[t._v("Betala för match "+t._s(e.ID))]),t._v(" "),r("div",{staticClass:"price"},[t._v("141 kr")]),t._v(" "),t._e(),t._v(" "),r("button",{on:{click:function(r){return t.startPayment({priceID:t.cheap,userID:t.$store.state.auth.user.ID,matchID:e.ID,city:t.$store.state.auth.user.city,league:t.$store.state.auth.user.league,type:"match"})}}},[t._v("\n      Betala nu\n    ")])])}))],2)}),[],!1,null,"602e032d",null);e.default=component.exports}}]);
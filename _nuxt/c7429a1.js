(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{352:function(e,t,r){var content=r(384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("5ed94324",content,!0,{sourceMap:!1})},383:function(e,t,r){"use strict";r(352)},384:function(e,t,r){var n=r(15)(!1);n.push([e.i,'h1[data-v-6a6e0395],h2[data-v-6a6e0395]{margin:0;font-size:1.75rem;font-weight:800}h1[data-v-6a6e0395],h2[data-v-6a6e0395],h3[data-v-6a6e0395]{color:#f7f7f7}p[data-v-6a6e0395]{font-size:16px}.round[data-v-6a6e0395]{border-radius:100%}.full-screen[data-v-6a6e0395]{position:fixed;padding:20px;top:0;height:calc(100vh - 40px);width:calc(100vw - 40px);left:0;z-index:200}.full-screen[data-v-6a6e0395],body[data-v-6a6e0395]{background:#000;margin:0}body[data-v-6a6e0395]{color:#f7f7f7;font-family:"Nunito";font-weight:300;font-size:16px}div[data-v-6a6e0395]{color:#000}.light[data-v-6a6e0395],.light div[data-v-6a6e0395]{color:#f7f7f7}.card[data-v-6a6e0395]{background:#f7f7f7;color:#2d9b82;border-radius:16px;padding:20px;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.card h2[data-v-6a6e0395]{color:#000}.card-container[data-v-6a6e0395]{filter:drop-shadow(0 0 .75rem rgba(0,0,0,.288))}.dark-card[data-v-6a6e0395]{background:#2a2a2a;border-radius:16px;padding:20px;margin:20px 0 0;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.dark-card[data-v-6a6e0395],.dark-card div[data-v-6a6e0395]{color:#f7f7f7}button[data-v-6a6e0395]{color:#fff;padding:12px 20px;background:#8eb5db;border-radius:16px;font-size:15px;font-weight:300;font-family:"Montserrat";border:0;background:#fbbf05}.menu-item-text[data-v-6a6e0395]{color:#4a4a4a;font-family:-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont}.coupon-icon[data-v-6a6e0395]{fill:#fbbf05;width:36px;height:36px}.matchnr[data-v-6a6e0395]{display:flex;align-items:center;flex-direction:column;margin:20px 0;color:#fff}.matchnr input[data-v-6a6e0395]{margin:20px 0 0;width:50px}.lag[data-v-6a6e0395]{flex-direction:column;border-radius:0;padding:0}.lag[data-v-6a6e0395],.poäng[data-v-6a6e0395]{display:flex;justify-content:center}.poäng[data-v-6a6e0395]{align-items:center;margin:20px 0}.siffror[data-v-6a6e0395]{color:#fff;padding:0 20px}.poängknappar[data-v-6a6e0395]{display:flex;flex-direction:column}.registreringsknapp[data-v-6a6e0395]{display:flex;justify-content:center}',""]),e.exports=n},423:function(e,t,r){"use strict";r.r(t);var n={name:"MatchRegistration",data:function(){return{hemmaspelare1:"",hemmaspelare2:"",bortaspelare1:"",bortaspelare2:"",pointshemma:0,pointsborta:0,spelarna:["Simon Brundin","Fredrik Nordin","Christian Blomberg"]}},methods:{addPoints:function(e){switch(e){case"hemma":if(this.pointshemma>5)break;this.pointshemma=this.pointshemma+2;break;case"borta":if(this.pointsborta>5)break;this.pointsborta=this.pointsborta+2}},removePoints:function(e){switch(e){case"hemma":if(0===this.pointshemma)break;this.pointshemma=this.pointshemma-2;break;case"borta":if(0===this.pointsborta)break;this.pointsborta=this.pointsborta-2}},"registreraPoäng":function(){this.pointshemma+this.pointsborta!==6&&(prompt("Poängsumman blir inte 6"),""!==this.hemmaspelare1&&""!==this.hemmaspelare2&&""!==this.bortaspelare1&&""!==this.bortaspelare2?prompt("Registrera"):prompt("Fyll i alla spelare"))}}},o=(r(383),r(2)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"match-registration"}},[r("form",{attrs:{action:"",method:"post"}},[e._m(0),e._v(" "),r("div",{staticClass:"spelare"},[r("div",{staticClass:"lag"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.hemmaspelare1,expression:"hemmaspelare1"}],attrs:{single:""},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.hemmaspelare1=t.target.multiple?r:r[0]}}},e._l(e.spelarna,(function(t,n){return r("option",{key:n,domProps:{value:t}},[e._v("\n            "+e._s(t)+"\n          ")])})),0),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.hemmaspelare2,expression:"hemmaspelare2"}],attrs:{single:""},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.hemmaspelare2=t.target.multiple?r:r[0]}}},e._l(e.spelarna,(function(t,n){return r("option",{key:n,domProps:{value:t}},[e._v("\n            "+e._s(t)+"\n          ")])})),0)]),e._v(" "),r("div",{staticClass:"lag"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.bortaspelare1,expression:"bortaspelare1"}],attrs:{single:""},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.bortaspelare1=t.target.multiple?r:r[0]}}},e._l(e.spelarna,(function(t,n){return r("option",{key:n,domProps:{value:t}},[e._v("\n            "+e._s(t)+"\n          ")])})),0),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.bortaspelare2,expression:"bortaspelare2"}],attrs:{single:""},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.bortaspelare2=t.target.multiple?r:r[0]}}},e._l(e.spelarna,(function(t,n){return r("option",{key:n,domProps:{value:t}},[e._v("\n            "+e._s(t)+"\n          ")])})),0)])])]),e._v(" "),r("div",{staticClass:"poäng"},[r("div",{staticClass:"poängknappar"},[r("button",{on:{click:function(t){return e.addPoints("hemma")}}},[e._v("+")]),e._v(" "),r("button",{on:{click:function(t){return e.removePoints("hemma")}}},[e._v("-")])]),e._v(" "),r("div",{staticClass:"siffror"},[e._v(e._s(e.pointshemma)+" - "+e._s(e.pointsborta))]),e._v(" "),r("div",{staticClass:"poängknappar"},[r("button",{on:{click:function(t){return e.addPoints("borta")}}},[e._v("+")]),e._v(" "),r("button",{on:{click:function(t){return e.removePoints("borta")}}},[e._v("-")])])]),e._v(" "),r("div",{staticClass:"registreringsknapp"},[r("button",{staticClass:"registerbutton",on:{click:function(t){e.registreraPoäng()}}},[e._v("\n      Registrera\n    ")])])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"matchnr"},[e._v("\n      Matchnummer\n      "),r("input",{attrs:{type:"number"}})])}],!1,null,"6a6e0395",null);t.default=component.exports}}]);
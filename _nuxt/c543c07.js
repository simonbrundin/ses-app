(window.webpackJsonp=window.webpackJsonp||[]).push([[32,19],{280:function(t,e,o){"use strict";var n=o(4),r=o(291);n({target:"String",proto:!0,forced:o(292)("sub")},{sub:function(){return r(this,"sub","","")}})},291:function(t,e,o){var n=o(17),r=/"/g;t.exports=function(t,e,o,d){var c=String(n(t)),l="<"+e;return""!==o&&(l+=" "+o+'="'+String(d).replace(r,"&quot;")+'"'),l+">"+c+"</"+e+">"}},292:function(t,e,o){var n=o(6);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},293:function(t,e,o){"use strict";o(10),o(280);e.a={methods:{getUserInfo:function(){var t=this,e=this.$store.state.server,o=[];if(this.$auth.isAuthenticated){var body=JSON.stringify({socialID:this.$auth.user.sub});fetch(e+"/getuser",{method:"post",headers:{"Content-Type":"application/json"},body:body}).then((function(t){return t.json()})).then((function(e){o=e[0],t.$store.commit("userInfo",o)}))}}}}},294:function(t,e,o){var content=o(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("74ed4336",content,!0,{sourceMap:!1})},327:function(t,e,o){"use strict";o(294)},328:function(t,e,o){var n=o(15)(!1);n.push([t.i,'h1[data-v-2654f549],h2[data-v-2654f549]{margin:0;font-size:1.75rem;font-weight:800}h1[data-v-2654f549],h2[data-v-2654f549],h3[data-v-2654f549]{color:#f7f7f7}p[data-v-2654f549]{font-size:16px}.round[data-v-2654f549]{border-radius:100%}.full-screen[data-v-2654f549]{position:fixed;padding:20px;top:0;height:calc(100vh - 40px);width:calc(100vw - 40px);left:0;z-index:200}.full-screen[data-v-2654f549],body[data-v-2654f549]{background:#000;margin:0}body[data-v-2654f549]{color:#f7f7f7;font-family:"Nunito";font-weight:300;font-size:16px}div[data-v-2654f549]{color:#000}.light[data-v-2654f549],.light div[data-v-2654f549]{color:#f7f7f7}.card[data-v-2654f549]{background:#f7f7f7;color:#2d9b82;border-radius:16px;padding:20px;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.card h2[data-v-2654f549]{color:#000}.card-container[data-v-2654f549]{filter:drop-shadow(0 0 .75rem rgba(0,0,0,.288))}.dark-card[data-v-2654f549]{background:#2a2a2a;border-radius:16px;padding:20px;margin:20px 0 0;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.dark-card[data-v-2654f549],.dark-card div[data-v-2654f549]{color:#f7f7f7}button[data-v-2654f549]{color:#fff;padding:12px 20px;background:#8eb5db;border-radius:16px;font-size:15px;font-weight:300;font-family:"Montserrat";border:0;background:#fbbf05}.menu-item-text[data-v-2654f549]{color:#4a4a4a;font-family:-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont}.coupon-icon[data-v-2654f549]{fill:#fbbf05;width:36px;height:36px}#not-enough-slots[data-v-2654f549]{display:flex;flex-direction:column;justify-content:center}#not-enough-slots div[data-v-2654f549]{text-align:center;margin:20px}#not-enough-slots h1[data-v-2654f549]{color:#000}#not-enough-slots li[data-v-2654f549]{color:#000;text-align:left}.alert-img[data-v-2654f549]{width:200px;margin:auto}',""]),t.exports=n},345:function(t,e,o){var content=o(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("1ec34188",content,!0,{sourceMap:!1})},359:function(t,e,o){"use strict";o.r(e);var n={methods:{dismissInstructions:function(){this.$store.showHide.commit("showScheduleInstructions",!1)}}},r=(o(327),o(2)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$store.showHide.scheduleInstructions?n("div",{staticClass:"card",attrs:{id:"not-enough-slots"}},[n("img",{staticClass:"alert-img",attrs:{src:o(183),alt:""}}),t._v(" "),n("h1",[t._v("Viktig information")]),t._v(" "),n("div",[t._v("\n    För att spelschemat ska bli så enkelt så möjligt att sätta önskar vi att\n    du fyller i så många tider som möjligt. Framför allt om du kan spela\n    dagtid.\n  ")]),t._v(" "),t._m(0),t._v(" "),n("button",{on:{click:function(e){t.$store.showHide.scheduleInstructions=!t.$store.showHide.scheduleInstructions}}},[t._v("\n    Okej\n  ")])]):t._e()}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[o("li",[t._v("Fyll i både udda och jämna veckor")]),t._v(" "),o("li",[t._v("Minst fyra olika dagar båda veckorna")]),t._v(" "),o("li",[t._v("Minst 2 timmar per vald dag")])])}],!1,null,"2654f549",null);e.default=component.exports},368:function(t,e,o){"use strict";o(345)},369:function(t,e,o){var n=o(15)(!1);n.push([t.i,'h1[data-v-0431e9c2],h2[data-v-0431e9c2]{margin:0;font-size:1.75rem;font-weight:800}h1[data-v-0431e9c2],h2[data-v-0431e9c2],h3[data-v-0431e9c2]{color:#f7f7f7}p[data-v-0431e9c2]{font-size:16px}.round[data-v-0431e9c2]{border-radius:100%}.full-screen[data-v-0431e9c2]{position:fixed;padding:20px;top:0;height:calc(100vh - 40px);width:calc(100vw - 40px);left:0;z-index:200}.full-screen[data-v-0431e9c2],body[data-v-0431e9c2]{background:#000;margin:0}body[data-v-0431e9c2]{color:#f7f7f7;font-family:"Nunito";font-weight:300;font-size:16px}div[data-v-0431e9c2]{color:#000}.light[data-v-0431e9c2],.light div[data-v-0431e9c2]{color:#f7f7f7}.card[data-v-0431e9c2]{background:#f7f7f7;color:#2d9b82;border-radius:16px;padding:20px;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.card h2[data-v-0431e9c2]{color:#000}.card-container[data-v-0431e9c2]{filter:drop-shadow(0 0 .75rem rgba(0,0,0,.288))}.dark-card[data-v-0431e9c2]{background:#2a2a2a;border-radius:16px;padding:20px;margin:20px 0 0;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.dark-card[data-v-0431e9c2],.dark-card div[data-v-0431e9c2]{color:#f7f7f7}button[data-v-0431e9c2]{color:#fff;padding:12px 20px;background:#8eb5db;border-radius:16px;font-size:15px;font-weight:300;font-family:"Montserrat";border:0;background:#fbbf05}.menu-item-text[data-v-0431e9c2]{color:#4a4a4a;font-family:-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont}.coupon-icon[data-v-0431e9c2]{fill:#fbbf05;width:36px;height:36px}#calendar[data-v-0431e9c2]{margin:0 0 65px;display:flex;flex-direction:column;text-align:center;filter:drop-shadow(0 0 .75rem rgba(0,0,0,.288))}#calendar .full-screen[data-v-0431e9c2]{position:fixed;padding:0;top:0;height:calc(100vh - 20px);width:calc(100vw - 40px);background:#000;left:0;margin:0;z-index:200}.select-week-container[data-v-0431e9c2]{display:flex;justify-content:center;margin-bottom:10px}.select-week[data-v-0431e9c2]{display:flex;justify-content:center;padding:5px;background:#1a1a1a;border-radius:16px}.select-week div[data-v-0431e9c2]{padding:10px 20px;color:#a8a8a8;border-radius:16px}.select-week .selected[data-v-0431e9c2]{background:#fbbf05;color:#f7f7f7}.calendar-grid[data-v-0431e9c2]{display:grid;grid-template-columns:1fr 10px repeat(7,1fr);background:#f7f7f7;margin:0}.time[data-v-0431e9c2]{height:calc(5.88235vh - 15.29412px);border-bottom:1px solid transparent;color:#a8a8a8;position:relative;top:-8px;padding:0 8px;font-size:12px;font-weight:300;text-align:right}.time[data-v-0431e9c2]:nth-child(2){visibility:hidden}.empty-day[data-v-0431e9c2]{background:#1a1a1a;color:#fff;padding:10px 0 32px 8px}.empty-day div[data-v-0431e9c2]{position:relative;top:3px}.empty-day svg[data-v-0431e9c2]{height:16px;fill:#1a1a1a}#calendar .icon-calendar svg[data-v-0431e9c2]{height:16px}.calendar-grid[data-v-0431e9c2]{border-radius:18px 18px 16px 16px}.column-times div[data-v-0431e9c2]:first-child{border-radius:16px 0 0 0}.column-times div[data-v-0431e9c2]:last-child{border-radius:0 0 0 16px}.column-S div[data-v-0431e9c2]:first-child{border-radius:0 16px 0 0}.column-S div[data-v-0431e9c2]:last-child{border-radius:0 0 16px 0}.line[data-v-0431e9c2]{border-top:1px solid #cfcfcf}.line[data-v-0431e9c2],.line[data-v-0431e9c2]:nth-child(2){height:calc(5.88235vh - 15.29412px)}.line[data-v-0431e9c2]:nth-child(2){border-top:1px solid #f7f7f7}.slot[data-v-0431e9c2]{background:#f7f7f7;height:calc(5.88235vh - 15.29412px);border-top:1px solid #cfcfcf;border-left:1px solid #cfcfcf}.column-day div[data-v-0431e9c2]:first-child{background:#1a1a1a;color:#a8a8a8;font-weight:300;padding:10px 0}.marked[data-v-0431e9c2]{background:#fbbf05}#save-button[data-v-0431e9c2]{display:flex;justify-content:space-around;width:100%;margin:10px 0 0}#calendar a[data-v-0431e9c2],#save-button[data-v-0431e9c2],.save-slots-menu a[data-v-0431e9c2]{text-decoration:none}.save-slots-button[data-v-0431e9c2]{display:flex;justify-content:center}.save-slots-button .svg-container[data-v-0431e9c2]{margin-top:-5px}.save-slots-text[data-v-0431e9c2]{color:#f7f7f7;margin-right:10px;text-decoration:none}.week-title[data-v-0431e9c2]{margin:0 0 20px}',""]),t.exports=n},412:function(t,e,o){"use strict";o.r(e);o(52),o(41),o(110),o(10),o(36),o(76),o(53),o(56),o(111),o(280),o(54);var n=o(293),r=o(165),d=o(359),c={name:"AvailabilityCalendar",components:{NotEnoughSlots:r.default,ScheduleInstructions:d.default},mixins:[n.a],data:function(){return{spelare:7,nextGameNr:1,"förnamn":"",showedWeek:!0,startTid:7,slutTid:24,halvTimmar:!1,fastVecka:!0,calendarVisas:!0,user:{oddSlots:[],evenSlots:[]}}},computed:{inloggad:function(){return this.$auth.user.sub.includes("facebook")},spelbaraTimmar:function(){for(var t=[],e=this.slutTid-this.startTid,i=0;i<e;i++){var o=this.startTid+i;o<10?(t.push("0"+o.toString()+"00"),this.halvTimmar&&t.push("0"+o.toString()+"30")):(t.push(o.toString()+"00"),this.halvTimmar&&t.push(o.toString()+"30"))}return t},spelbaraTimmarUtanNollor:function(){var t=this.spelbaraTimmar,e=[];return t.forEach((function(element){var t=element.substring(0,2),o=element.slice(2,4);if(o=(o=o.replace("00",".00")).replace("30",".30"),t.startsWith("0")){var n=t.substr(1);t=n}var r=t+o;e.push(r)})),e},rullandeDagar:function(){var t=(new Date).getDay();this.fastVecka&&(t=0);for(var e=["M","Ti","O","To","F","L","S","M","Ti","O","To","F","L","S"],o=0;o<7-t;o++)e.pop();for(var n=0;n<t;n++)e.shift();return e}},mounted:function(){this.getSchedule()},methods:{select:function(element){var t=element.target.classList;t.contains("odd-button")?this.showedWeek=!0:t.contains("even-button")&&(this.showedWeek=!1)},klickadLucka:function(t){t.target.classList.toggle("marked"),t.target.classList.contains("marked")?t.target.classList.contains("odd")?this.user.oddSlots.push(t.target.id):t.target.classList.contains("even")&&this.user.evenSlots.push(t.target.id):t.target.classList.contains("odd")?this.user.oddSlots=this.user.oddSlots.filter((function(e){return e!==t.target.id})):t.target.classList.contains("even")&&(this.user.evenSlots=this.user.evenSlots.filter((function(e){return e!==t.target.id})))},checkEnoughSlots:function(){return!(this.user.oddSlots.length>7&&this.user.evenSlots.length>7)&&(this.$store.commit("NotEnoughSlots",!0),!0)},saveSchedule:function(){if(this.checkEnoughSlots())return 0;this.$store.commit("showSchedule",!1);var body=JSON.stringify({spelare:this.$auth.user.sub,oddSlots:this.user.oddSlots,evenSlots:this.user.evenSlots});fetch(this.$store.state.server+"/sparaluckor",{method:"post",headers:{"Content-Type":"application/json"},body:body})},getSchedule:function(){var t=this;this.getUserInfo();var body=JSON.stringify({spelare:this.$auth.user.sub});fetch(this.$store.state.server+"/luckor",{method:"post",headers:{"Content-Type":"application/json"},body:body}).then((function(t){return t.json()})).then((function(data){null!==data.u&&(t.user.oddSlots=data.u),null!==data.j&&(t.user.evenSlots=data.j),t.user.oddSlots.length>7&&t.user.evenSlots.length>7&&(t.$store.commit("showHide/showSchedule",!1),t.$store.commit("showHide/showScheduleInstructions",!1))}))}}},l=(o(368),o(2)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"calendar"}},[t.$store.state.showHide.notifications.showScheduleInstructions?o("div",{staticClass:"full-screen"},[o("ScheduleInstructions")],1):t._e(),t._v(" "),t.$store.state.showHide.notifications.NotEnoughSlots?o("div",{staticClass:"full-screen"},[o("NotEnoughSlots")],1):t._e(),t._v(" "),o("div",{staticClass:"select-week-container"},[o("div",{staticClass:"select-week"},[o("div",{staticClass:"odd-button",class:{selected:t.showedWeek},on:{click:t.select}},[t._v("\n        Udda veckor\n      ")]),t._v(" "),o("div",{staticClass:"even-button",class:{selected:!t.showedWeek},on:{click:t.select}},[t._v("\n        Jämna veckor\n      ")])])]),t._v(" "),t.showedWeek?o("div",{staticClass:"calendar"},[o("div",{staticClass:"calendar-grid"},[o("div",{staticClass:"column-times"},[o("div",{staticClass:"empty-day"}),t._v(" "),t._l(t.spelbaraTimmarUtanNollor,(function(e,n){return o("div",{key:n,staticClass:"time"},[t._v("\n          "+t._s(e)+"\n        ")])}))],2),t._v(" "),o("div",{staticClass:"column-lines"},[o("div",{staticClass:"empty-day"}),t._v(" "),t._l(t.spelbaraTimmarUtanNollor,(function(t,e){return o("div",{key:e,staticClass:"line"},[o("br")])}))],2),t._v(" "),t._l(t.rullandeDagar,(function(e,n){return o("div",{key:n,staticClass:"column-day",class:"column-"+e},[o("div",[t._v(t._s(e))]),t._v(" "),t._l(t.spelbaraTimmar,(function(r,d){return o("div",{key:d,staticClass:"slot odd",class:e+r&&{marked:t.user.oddSlots.includes(e+r),varannan:n%2==0},attrs:{id:e+r},on:{click:t.klickadLucka}})}))],2)}))],2)]):t._e(),t._v(" "),t.showedWeek?t._e():o("div",{},[o("div",{staticClass:"calendar-grid"},[o("div",{staticClass:"column-times"},[o("div",{staticClass:"empty-day"}),t._v(" "),t._l(t.spelbaraTimmarUtanNollor,(function(e,n){return o("div",{key:n,staticClass:"time"},[t._v("\n          "+t._s(e)+"\n        ")])}))],2),t._v(" "),o("div",{staticClass:"column-lines"},[o("div",{staticClass:"empty-day"}),t._v(" "),t._l(t.spelbaraTimmarUtanNollor,(function(t,e){return o("div",{key:e,staticClass:"line"},[o("br")])}))],2),t._v(" "),t._l(t.rullandeDagar,(function(e,n){return o("div",{key:n,staticClass:"column-day",class:"column-"+e},[o("div",[t._v(t._s(e))]),t._v(" "),t._l(t.spelbaraTimmar,(function(r,d){return o("div",{key:d,staticClass:"slot even",class:e+r&&{marked:t.user.evenSlots.includes(e+r),varannan:n%2==0},attrs:{id:e+r},on:{click:t.klickadLucka}})}))],2)}))],2)]),t._v(" "),o("div",{attrs:{id:"save-button"}},[o("button",{directives:[{name:"show",rawName:"v-show",value:t.calendarVisas,expression:"calendarVisas"}],on:{click:t.saveSchedule}},[t._v("\n      Spara ändringar\n    ")])])])}),[],!1,null,"0431e9c2",null);e.default=component.exports}}]);
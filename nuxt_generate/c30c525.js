(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{383:function(t,e,n){var content=n(444);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("3871a54a",content,!0,{sourceMap:!1})},442:function(t,e,n){"use strict";var o=n(4),r=n(60).findIndex,c=n(94),d="findIndex",m=!0;d in[]&&Array(1).findIndex((function(){m=!1})),o({target:"Array",proto:!0,forced:m},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c(d)},443:function(t,e,n){"use strict";n(383)},444:function(t,e,n){var o=n(14)(!1);o.push([t.i,'h1[data-v-10bcb826]{font-size:1.75rem}h1[data-v-10bcb826],h2[data-v-10bcb826]{color:#fbfbfb;font-weight:600;margin:0}h2[data-v-10bcb826]{font-size:1.4rem}h3[data-v-10bcb826]{color:#fbfbfb;margin:0;font-size:1.2rem;font-weight:600}p[data-v-10bcb826]{font-size:12px;margin-top:.5rem;margin-bottom:.5rem}.flex-column[data-v-10bcb826]{display:flex;flex-direction:column;align-items:center;justify-content:center}.round[data-v-10bcb826]{border-radius:100%}.full-screen[data-v-10bcb826]{position:fixed;padding:20px;top:0;height:calc(100vh - 40px);width:calc(100vw - 40px);left:0;z-index:200}.full-screen[data-v-10bcb826],body[data-v-10bcb826]{background:#121618;margin:0}body[data-v-10bcb826]{color:#272727;font-family:"Montserrat";font-weight:300;font-size:12px}div[data-v-10bcb826]{color:#121618}.light[data-v-10bcb826],.light div[data-v-10bcb826]{color:#fbfbfb}.card[data-v-10bcb826]{background:#272727;color:#2d9b82;border-radius:20px;padding:20px;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.card h2[data-v-10bcb826]{color:#fbfbfb}.card-container[data-v-10bcb826]{filter:drop-shadow(0 0 .75rem rgba(0,0,0,.288))}.light-card[data-v-10bcb826]{background:#fbfbfb;color:#121618}.dark-card[data-v-10bcb826],.light-card[data-v-10bcb826]{border-radius:20px;padding:20px;margin:20px 0 0;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.dark-card[data-v-10bcb826]{background:#272727}.dark-card[data-v-10bcb826],.dark-card div[data-v-10bcb826]{color:#fbfbfb}button[data-v-10bcb826]{color:#121618;padding:20px;background:#8eb5db;border-radius:16px;font-size:14px;font-weight:500;font-family:"Montserrat";border:0;text-transform:uppercase;background:#fbbf05}.menu-item-text[data-v-10bcb826]{color:#747274;font-family:-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont}.coupon-icon[data-v-10bcb826]{fill:#fbbf05;width:36px;height:36px}.dark[data-v-10bcb826]{color:#272727}#match-info[data-v-10bcb826]{width:100vw;background:#000;padding:20px 0 0;text-align:center;font-size:14px}#match-info div[data-v-10bcb826]{color:#fff;font-size:20px}.players[data-v-10bcb826]{margin:20px 0}.info[data-v-10bcb826]{margin:30px 0 0}.booked-time[data-v-10bcb826]{font-size:16px}.book-button[data-v-10bcb826],.booked-time[data-v-10bcb826]{margin:20px 0 0}.change-score-button[data-v-10bcb826]{margin-top:20px}',""]),t.exports=o},482:function(t,e,n){"use strict";n.r(e);var o=n(2),r=(n(17),n(45),n(50),n(130),n(9),n(59),n(442),n(76),{data:function(){return{bookingResponse:"",server:this.$store.state.server,isBooked:!1,isFetching:!0,borta1:"Laddar",borta2:"Laddar",hemma1:"Laddar",hemma2:"Laddar",playerToContact:{},leagueStartDate:new Date("2021-09-20")}},computed:{cityName:function(){var t=this.$store.state.admin.selectedLeague.replace("matcher-","");return t.substring(0,t.indexOf("-"))},leagueName:function(){return this.$store.state.admin.selectedLeague.replace("matcher-","").split("-").pop()},mostCommonSlot:function(){return this.getMostCommonSlot()},bookableTimes:function(){for(var t=[],time=0;time<this.commonTimesAll.length;time++){var element=this.commonTimesAll[time];t.push(element)}for(var e=0;e<this.weekdayEveningTimes.length;e++){var n=this.weekdayEveningTimes[e];t.push(n)}return t},weekdayEveningTimes:function(){for(var t=[],e=0;e<4;e++){var n=new Date(this.firstDateToSuggest);n.setDate(n.getDate()+e);for(var o=[[17,0],[17,30],[18,0],[18,30],[19,0],[19,30],[20,0],[20,30]],time=0;time<o.length;time++){var r=new Date(n),c=o[time][0],d=o[time][1];r.setHours(c),r.setMinutes(d),t.push(r)}}return t},commonTimesAll:function(){var t=[];if(this.isWeekOdd){for(var e=0;e<this.$store.state.admin.selectedMatch.oddslots.length;e++){var slot=this.$store.state.admin.selectedMatch.oddslots[e],n=parseInt(slot.toString()[0])-1,o=new Date(this.firstDateToSuggest);o.setDate(o.getDate()+n);var r=slot.toString()[1]+slot.toString()[2],c=slot.toString()[3]+slot.toString()[4];o.setHours(r),o.setMinutes(c);var d=o.getDay();0===d&&t.unshift(o),6===d?t.unshift(o):t.push(o)}for(var m=0;m<this.$store.state.admin.selectedMatch.evenslots.length;m++){var h=this.$store.state.admin.selectedMatch.evenslots[m],l=parseInt(h.toString()[0])-1,f=new Date(this.firstDateToSuggest);f.setDate(f.getDate()+7),f.setDate(f.getDate()+l);var v=h.toString()[1]+h.toString()[2],$=h.toString()[3]+h.toString()[4];f.setHours(v),f.setMinutes($);var M=f.getDay();0===M&&t.unshift(f),6===M?t.unshift(f):t.push(f)}}else{for(var D=0;D<this.$store.state.admin.selectedMatch.evenslots.length;D++){var k=this.$store.state.admin.selectedMatch.evenslots[D],x=parseInt(k.toString()[0])-1,S=new Date(this.firstDateToSuggest);S.setDate(S.getDate()+x);var w=k.toString()[1]+k.toString()[2],y=k.toString()[3]+k.toString()[4];S.setHours(w),S.setMinutes(y);var _=S.getDay();0===_&&t.unshift(S),6===_?t.unshift(S):t.push(S)}for(var T=0;T<this.$store.state.admin.selectedMatch.oddslots.length;T++){var I=this.$store.state.admin.selectedMatch.oddslots[T],N=parseInt(I.toString()[0])-1,C=new Date(this.firstDateToSuggest);C.setDate(C.getDate()+7),C.setDate(C.getDate()+N);var R=I.toString()[1]+I.toString()[2],H=I.toString()[3]+I.toString()[4];C.setHours(R),C.setMinutes(H);var O=C.getDay();0===O&&t.unshift(C),6===O?t.unshift(C):t.push(C)}}return t},matchWeek:function(){var t=0;switch(this.$store.state.admin.selectedMatch.ID){case 10:t=11;break;case 11:t=10;break;case 12:t=13;break;case 13:t=12;break;case 22:t=23;break;case 23:t=22;break;case 24:t=25;break;case 25:t=24;break;default:t=this.$store.state.admin.selectedMatch.ID}return Math.ceil(t/33*11)},firstDateToSuggest:function(){var t=7*(this.matchWeek-1),e=new Date(this.leagueStartDate);return e.setDate(this.leagueStartDate.getDate()+t),e.setHours(0),e},weekOfYear:function(){var t=new Date(this.firstDateToSuggest.getFullYear(),0,1),e=Math.floor((this.firstDateToSuggest-t)/864e5);return Math.ceil((this.firstDateToSuggest.getDay()+1+e)/7)},isWeekOdd:function(){return this.weekOfYear%2==1}},mounted:function(){this.getNames(),this.getPlayerToContactToResolveTime()},methods:{getMostCommonSlot:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$store.state.admin.selectedLeague,o=t.$store.state.admin.selectedMatch.ID,e.next=4,t.$axios.get("/admin/common-slots/"+n+"/"+o).then((function(t){return t}));case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))()},bookTimeInDatabase:function(time){var t=this;time.setMinutes(time.getMinutes()-time.getTimezoneOffset());var body={league:this.$store.state.admin.selectedLeague,matchID:this.$store.state.admin.selectedMatch.ID,time:time};this.$axios.post("/admin/book-match",body).then((function(e){console.log(e),t.bookingResponse=e.data}))},book:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,time;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<t.bookableTimes.length)){e.next=12;break}return time=t.bookableTimes[n],e.next=5,t.$store.dispatch("bookMatch",{league:t.leagueName,matchID:t.$store.state.admin.selectedMatch.ID,time:time,city:t.cityName});case 5:if(!1===e.sent){e.next=9;break}return t.isBooked=!0,e.abrupt("break",12);case 9:n++,e.next=1;break;case 12:case"end":return e.stop()}}),e)})))()},getPlayerToContactToResolveTime:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/admin/common-slots/"+t.$store.state.admin.selectedLeague+"/"+t.$store.state.admin.selectedMatch.ID);case 2:n=e.sent,t.playerToContact=n;case 4:case"end":return e.stop()}}),e)})))()},getNames:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$store.state.admin.selectedMatch.hemma1,o=t.$store.state.admin.selectedMatch.hemma2,r=t.$store.state.admin.selectedMatch.borta1,c=t.$store.state.admin.selectedMatch.borta2,e.next=6,t.$axios.$get("/names/"+n+"/"+o+"/"+r+"/"+c);case 6:d=e.sent,t.$store.commit("admin/selectedMatchNames",d),t.updateNames(),t.isFetching=!0;case 10:case"end":return e.stop()}}),e)})))()},updateNames:function(){if(this.$store.state.admin.selectedMatchNames==={}||this.$store.state.admin.selectedMatch==={})return"Snart";this.hemma1=this.$store.state.admin.selectedMatchNames[this.$store.state.admin.selectedMatch.hemma1].firstname+" "+this.$store.state.admin.selectedMatchNames[this.$store.state.admin.selectedMatch.hemma1].lastname,this.hemma2=this.$store.state.admin.selectedMatchNames[this.$store.state.admin.selectedMatch.hemma2].firstname+" "+this.$store.state.admin.selectedMatchNames[this.$store.state.admin.selectedMatch.hemma2].lastname,this.borta1=this.$store.state.admin.selectedMatchNames[this.$store.state.admin.selectedMatch.borta1].firstname+" "+this.$store.state.admin.selectedMatchNames[this.$store.state.admin.selectedMatch.borta1].lastname,this.borta2=this.$store.state.admin.selectedMatchNames[this.$store.state.admin.selectedMatch.borta2].firstname+" "+this.$store.state.admin.selectedMatchNames[this.$store.state.admin.selectedMatch.borta2].lastname},updateGameData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var body;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return body={pointshemma:t.$store.state.admin.selectedMatch.pointshemma,pointsborta:t.$store.state.admin.selectedMatch.pointsborta},e.next=3,t.$axios.$put("/admin/game/"+t.$store.state.admin.selectedLeague+"/"+t.$store.state.admin.selectedMatch.ID,body);case 3:t.$store.commit("admin/selectedMatch",{});case 4:case"end":return e.stop()}}),e)})))()},saveMatchData:function(){var t=this,body=JSON.stringify({league:this.$store.state.admin.selectedLeague,ID:this.$store.state.admin.selectedMatch.ID,pointshemma:this.$store.state.admin.selectedMatch.pointshemma,pointsborta:this.$store.state.admin.selectedMatch.pointsborta});fetch(this.$store.state.server+"/updatematch",{method:"post",headers:{"Content-Type":"application/json"},body:body}).then((function(t){return t.json()})).then((function(e){t.$store.state.admin.showMatchWindow=!1})),this.$store.commit("admin/selectedMatch",{})},changePoints:function(){switch(this.$store.state.admin.selectedMatch.pointsborta){case 0:6===this.$store.state.admin.selectedMatch.pointshemma?(this.$store.commit("admin/addHomePoints",4),this.$store.commit("admin/addAwayPoints",2)):(this.$store.commit("admin/addHomePoints",6),this.$store.commit("admin/addAwayPoints",0));break;case 2:this.$store.commit("admin/addHomePoints",2),this.$store.commit("admin/addAwayPoints",4);break;case 4:this.$store.commit("admin/addHomePoints",0),this.$store.commit("admin/addAwayPoints",6);break;case 6:this.$store.commit("admin/addHomePoints",0),this.$store.commit("admin/addAwayPoints",0)}},sendSMS:function(){var t=this,e=function(){var e=[];console.log("lsd",t.leagueStartDate);var n=function(){for(var n=t.playerToContact.odd,o=function(o){var slot=n[o],r=parseInt(slot.toString()[0])-1,c=new Date(t.firstDateToSuggest);console.log("first",t.firstDateToSuggest),console.log("adjust days",r),c.setDate(+r),console.log("final",c);var d=new Date(c).getMonth()+1,m=new Date(c).getDate(),h=slot.toString()[1]+slot.toString()[2],l=slot.toString()[3]+slot.toString()[4],f=m+"/"+d,v=h+":"+l;if(n[o]===n[o-1]||0===o){var $={tider:[],datum:""},M=[v];$.datum=f,$.tider=M,e.push($)}else{var D=e.findIndex((function(t){return t.datum===f}));console.log("udda",D),D>=0&&e[D].tider.push(v)}c.setHours(h),c.setMinutes(l),c.setSeconds(0)},r=0;r<n.length;r++)o(r)},o=function(){for(var n=t.playerToContact.even,o=function(o){var slot=n[o],r=parseInt(slot.toString()[0])-1,c=new Date;c.setDate(t.firstDateToSuggest.getDate()+r);var d=new Date(c).getMonth()+1,m=new Date(c).getDate(),h=slot.toString()[1]+slot.toString()[2],l=slot.toString()[3]+slot.toString()[4],f=m+"/"+d,v=h+":"+l;if(n[o]===n[o-1]||0===o){var $={},M=[v];$.datum=f,$.tider=M,e.push($)}else{var D=e.findIndex((function(t){return t.datum===f}));D>=0&&(console.log(e),console.log("jämna",D),e[D].tider.push(v),console.log(e))}c.setHours(h),c.setMinutes(l),c.setSeconds(0)},r=0;r<n.length;r++)o(r)},r=function(){t.firstDateToSuggest.setDate(t.firstDateToSuggest.getDate()+7)};return t.isWeekOdd?(n(),r(),o()):(o(),r(),n()),e},n=this.playerToContact.tel,text="Hejsan! Match #"+this.$store.state.admin.selectedMatch.ID+" som du ska spela saknar en gemensam tid. Skulle det vara möjligt för dig att kunna spela något av dessa datum?%0A%0A"+function(){for(var t="",n=function(){t=t.concat("%0A")},o=0;o<e().length;o++){var r=e()[o];t=t.concat(r.datum),n();for(var c=0;c<r.tider.length;c++){var time=r.tider[c];t=t.concat("- "+time),n()}}return t}();window.open("sms://"+n+"/&body="+text)}}}),c=(n(443),n(3)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isFetching?n("div",{attrs:{id:"match-info"}},[n("button",{on:{click:t.updateGameData}},[t._v("Stäng")]),t._v(" "),n("div",{staticClass:"info"},[n("h1",[t._v("\n      "+t._s(t.cityName)+" "+t._s(t.leagueName)+" - #\n      "+t._s(t.$store.state.admin.selectedMatch.ID)+"\n    ")]),t._v(" "),t.$store.state.admin.selectedMatch.bookedtime?n("div",{staticClass:"booked-time"},[t._v("\n      "+t._s(t.$store.state.admin.selectedMatch.bookedtime)+"\n    ")]):n("button",{staticClass:"book-button",on:{click:t.book}},[t._v("Boka")])]),t._v(" "),n("div",{staticClass:"players"},[n("div",[t._v("\n      "+t._s(t.hemma1)+"\n\n      &\n\n      "+t._s(t.hemma2)+"\n\n      "),n("b",[t._v(" "+t._s(t.$store.state.admin.selectedMatch.pointshemma))])]),t._v(" "),n("div",[t._v("\n      "+t._s(t.borta1)+"\n\n      &\n      "+t._s(t.borta2)+"\n\n      "),n("b",[t._v(t._s(t.$store.state.admin.selectedMatch.pointsborta))])])]),t._v(" "),t.$store.state.admin.selectedMatch.pointshemma?t._e():n("div",{staticClass:"no-result-text"},[n("b",[t._v(" Inget resultat registrerat")])]),t._v(" "),n("div",[n("button",{staticClass:"change-score-button",on:{click:t.changePoints}},[t._v("\n      Ändra poäng\n    ")])]),t._v(" "),0===t.$store.state.admin.selectedMatch.evenslots.length&&0===t.$store.state.admin.selectedMatch.oddslots.length?n("div",{staticClass:"resolve-time"},[n("button",{on:{click:t.sendSMS}},[t._v("Skicka sms")])]):t._e(),t._v(" "),t._e(),t._v(" "),n("br"),t._v(" "),n("br")]):t._e()}),[],!1,null,"10bcb826",null);e.default=component.exports}}]);
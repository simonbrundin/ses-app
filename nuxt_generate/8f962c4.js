(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{375:function(t,e,n){var content=n(437);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("4c7a6b51",content,!0,{sourceMap:!1})},435:function(t,e,n){"use strict";var o=n(4),r=n(58).findIndex,c=n(94),d="findIndex",m=!0;d in[]&&Array(1).findIndex((function(){m=!1})),o({target:"Array",proto:!0,forced:m},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c(d)},436:function(t,e,n){"use strict";n(375)},437:function(t,e,n){var o=n(15)(!1);o.push([t.i,'h1[data-v-f309e3fc]{font-size:1.75rem}h1[data-v-f309e3fc],h2[data-v-f309e3fc]{color:#fbfbfb;font-weight:600;margin:0}h2[data-v-f309e3fc]{font-size:1.4rem}h3[data-v-f309e3fc]{color:#fbfbfb;margin:0;font-size:1.2rem;font-weight:600}p[data-v-f309e3fc]{font-size:12px;margin-top:.5rem;margin-bottom:.5rem}.flex-column[data-v-f309e3fc]{display:flex;flex-direction:column;align-items:center;justify-content:center}.round[data-v-f309e3fc]{border-radius:100%}.full-screen[data-v-f309e3fc]{position:fixed;padding:20px;top:0;height:calc(100vh - 40px);width:calc(100vw - 40px);left:0;z-index:200}.full-screen[data-v-f309e3fc],body[data-v-f309e3fc]{background:#121618;margin:0}body[data-v-f309e3fc]{color:#272727;font-family:"Montserrat";font-weight:300;font-size:12px}div[data-v-f309e3fc]{color:#121618}.light[data-v-f309e3fc],.light div[data-v-f309e3fc]{color:#fbfbfb}.card[data-v-f309e3fc]{background:#272727;color:#2d9b82;border-radius:20px;padding:20px;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.card h2[data-v-f309e3fc]{color:#fbfbfb}.card-container[data-v-f309e3fc]{filter:drop-shadow(0 0 .75rem rgba(0,0,0,.288))}.light-card[data-v-f309e3fc]{background:#fbfbfb;color:#121618}.dark-card[data-v-f309e3fc],.light-card[data-v-f309e3fc]{border-radius:20px;padding:20px;margin:20px 0 0;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.dark-card[data-v-f309e3fc]{background:#272727}.dark-card[data-v-f309e3fc],.dark-card div[data-v-f309e3fc]{color:#fbfbfb}button[data-v-f309e3fc]{color:#121618;padding:20px;background:#8eb5db;border-radius:16px;font-size:14px;font-weight:500;font-family:"Montserrat";border:0;text-transform:uppercase;background:#fbbf05}.menu-item-text[data-v-f309e3fc]{color:#747274;font-family:-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont}.coupon-icon[data-v-f309e3fc]{fill:#fbbf05;width:36px;height:36px}.dark[data-v-f309e3fc]{color:#272727}#match-info[data-v-f309e3fc]{width:100vw;height:100vh;position:fixed;top:0;left:0;background:#000;margin:0;padding:0;text-align:center;font-size:14px}#match-info div[data-v-f309e3fc]{color:#fff}.players[data-v-f309e3fc]{margin:20px 0}button[data-v-f309e3fc]{margin:0 0 20px}.info[data-v-f309e3fc]{margin:30px 0 0}',""]),t.exports=o},475:function(t,e,n){"use strict";n.r(e);var o=n(3),r=(n(9),n(59),n(435),n(75),n(23),{data:function(){return{server:this.$store.state.server,isFetching:!0,borta1:"Laddar",borta2:"Laddar",hemma1:"Laddar",hemma2:"Laddar",playerToContact:{}}},computed:{},mounted:function(){this.getNames(),this.getPlayerToContactToResolveTime()},methods:{getPlayerToContactToResolveTime:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/admin/common-slots/"+t.$store.state.admin.selectedLeague+"/"+t.$store.state.admin.selectedMatch.ID);case 2:n=e.sent,t.playerToContact=n;case 4:case"end":return e.stop()}}),e)})))()},getNames:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$store.state.admin.selectedMatch.hemma1,o=t.$store.state.admin.selectedMatch.hemma2,r=t.$store.state.admin.selectedMatch.borta1,c=t.$store.state.admin.selectedMatch.borta2,e.next=6,t.$axios.$get("/names/"+n+"/"+o+"/"+r+"/"+c);case 6:d=e.sent,t.$store.commit("admin/selectedMatchNames",d),t.updateNames(),t.isFetching=!0;case 10:case"end":return e.stop()}}),e)})))()},updateNames:function(){if(this.$store.state.admin.selectedMatchNames==={}||this.$store.state.admin.selectedMatch==={})return"Snart";this.hemma1=this.$store.state.admin.selectedMatchNames[this.$store.state.admin.selectedMatch.hemma1].firstname+" "+this.$store.state.admin.selectedMatchNames[this.$store.state.admin.selectedMatch.hemma1].lastname,this.hemma2=this.$store.state.admin.selectedMatchNames[this.$store.state.admin.selectedMatch.hemma2].firstname+" "+this.$store.state.admin.selectedMatchNames[this.$store.state.admin.selectedMatch.hemma2].lastname,this.borta1=this.$store.state.admin.selectedMatchNames[this.$store.state.admin.selectedMatch.borta1].firstname+" "+this.$store.state.admin.selectedMatchNames[this.$store.state.admin.selectedMatch.borta1].lastname,this.borta2=this.$store.state.admin.selectedMatchNames[this.$store.state.admin.selectedMatch.borta2].firstname+" "+this.$store.state.admin.selectedMatchNames[this.$store.state.admin.selectedMatch.borta2].lastname},updateGameData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var body;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return body={pointshemma:t.$store.state.admin.selectedMatch.pointshemma,pointsborta:t.$store.state.admin.selectedMatch.pointsborta},e.next=3,t.$axios.$put("/admin/game/"+t.$store.state.admin.selectedLeague+"/"+t.$store.state.admin.selectedMatch.ID,body);case 3:t.$store.commit("admin/selectedMatch",{});case 4:case"end":return e.stop()}}),e)})))()},saveMatchData:function(){var t=this,body=JSON.stringify({league:this.$store.state.admin.selectedLeague,ID:this.$store.state.admin.selectedMatch.ID,pointshemma:this.$store.state.admin.selectedMatch.pointshemma,pointsborta:this.$store.state.admin.selectedMatch.pointsborta});fetch(this.$store.state.server+"/updatematch",{method:"post",headers:{"Content-Type":"application/json"},body:body}).then((function(t){return t.json()})).then((function(e){t.$store.state.admin.showMatchWindow=!1})),this.$store.commit("admin/selectedMatch",{})},changePoints:function(){switch(this.$store.state.admin.selectedMatch.pointsborta){case 0:6===this.$store.state.admin.selectedMatch.pointshemma?(this.$store.commit("admin/addHomePoints",4),this.$store.commit("admin/addAwayPoints",2)):(this.$store.commit("admin/addHomePoints",6),this.$store.commit("admin/addAwayPoints",0));break;case 2:this.$store.commit("admin/addHomePoints",2),this.$store.commit("admin/addAwayPoints",4);break;case 4:this.$store.commit("admin/addHomePoints",0),this.$store.commit("admin/addAwayPoints",6);break;case 6:this.$store.commit("admin/addHomePoints",0),this.$store.commit("admin/addAwayPoints",0)}},sendSMS:function(){var t=this,e=function(){var e=[],n=new Date("2021-08-30"),o=function(){var e=7*(Math.ceil(t.$store.state.admin.selectedMatch.ID/33*11)-1),o=new Date(n);return o.setDate(n.getDate()+e),o.setHours(0),o},r=function(){for(var n=t.playerToContact.odd,r=function(t){var slot=n[t],r=parseInt(slot.toString()[0])-1,c=new Date;c.setDate(o().getDate()+r);var d=new Date(c).getMonth()+1,m=new Date(c).getDate(),f=slot.toString()[1]+slot.toString()[2],h=slot.toString()[3]+slot.toString()[4],l=m+"/"+d,v=f+":"+h;if(n[t]===n[t-1]||0===t){var $={},M=[v];$.datum=l,$.tider=M,e.push($)}else{var x=e.findIndex((function(t){return t.datum===l}));e[x].tider.push(v)}c.setHours(f),c.setMinutes(h),c.setSeconds(0)},c=0;c<n.length;c++)r(c)},c=function(){for(var n=t.playerToContact.even,r=function(t){var slot=n[t],r=parseInt(slot.toString()[0])-1,c=new Date;c.setDate(o().getDate()+r);var d=new Date(c).getMonth()+1,m=new Date(c).getDate(),f=slot.toString()[1]+slot.toString()[2],h=slot.toString()[3]+slot.toString()[4],l=m+"/"+d,v=f+":"+h;if(n[t]===n[t-1]||0===t){var $={},M=[v];$.datum=l,$.tider=M,e.push($)}else{var x=e.findIndex((function(t){return t.datum===l}));e[x].tider.push(v)}c.setHours(f),c.setMinutes(h),c.setSeconds(0)},c=0;c<n.length;c++)r(c)},d=function(){o().setDate(o().getDate()+7)};return!function(){return 1==(t=new Date(o().getFullYear(),0,1),e=Math.floor((o()-t)/864e5),Math.ceil((o().getDay()+1+e)/7)%2);var t,e}?(c(),d(),r()):(r(),d(),c()),e},n=this.playerToContact.tel,text="Hejsan! En match du ska spela saknar en gemensam tid. Skulle det vara möjligt för dig att kunna spela något av dessa datum?%0A%0A"+function(){for(var t="",n=function(){t=t.concat("%0A")},o=0;o<e().length;o++){var r=e()[o];t=t.concat(r.datum),n();for(var c=0;c<r.tider.length;c++){var time=r.tider[c];t=t.concat("- "+time),n()}}return t}()+"%0A/SES-gänget";window.open("sms://"+n+"/&body="+text)}}}),c=(n(436),n(2)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isFetching?n("div",{attrs:{id:"match-info"}},[n("div",{staticClass:"info"},[n("h1",[t._v(t._s(t.$store.state.admin.selectedLeague))]),t._v(" "),n("h2",[t._v("Match # "+t._s(t.$store.state.admin.selectedMatch.ID))])]),t._v(" "),n("div",{staticClass:"players"},[n("div",[t._v("\n      "+t._s(t.hemma1)+"\n\n      &\n\n      "+t._s(t.hemma2)+"\n      -\n      "+t._s(t.$store.state.admin.selectedMatch.pointshemma)+"\n    ")]),t._v(" "),n("div",[t._v("\n      "+t._s(t.borta1)+"\n\n      &\n      "+t._s(t.borta2)+"\n\n      -\n      "+t._s(t.$store.state.admin.selectedMatch.pointsborta)+"\n    ")])]),t._v(" "),n("div",[n("button",{on:{click:t.changePoints}},[t._v("Ändra poäng")])]),t._v(" "),n("button",{on:{click:t.updateGameData}},[t._v("Stäng")]),t._v(" "),0===t.$store.state.admin.selectedMatch.evenslots.length&&0===t.$store.state.admin.selectedMatch.oddslots.length?n("div",{staticClass:"resolve-time"},[n("button",{on:{click:t.sendSMS}},[t._v("Skicka sms")])]):t._e()]):t._e()}),[],!1,null,"f309e3fc",null);e.default=component.exports}}]);
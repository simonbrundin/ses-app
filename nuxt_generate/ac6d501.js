(window.webpackJsonp=window.webpackJsonp||[]).push([[31,11,12,13,23],{308:function(t,e,r){var map={"./184.jpg":309,"./185.jpg":310,"./348.jpg":311,"./585.jpg":312};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=308},309:function(t,e,r){t.exports=r.p+"img/184.879bd7f.jpg"},310:function(t,e,r){t.exports=r.p+"img/185.03bb87d.jpg"},311:function(t,e,r){t.exports=r.p+"img/348.cde0b12.jpg"},312:function(t,e,r){t.exports=r.p+"img/585.5a79edd.jpg"},313:function(t,e,r){"use strict";var o=r(4),n=r(73),d=r(26),c=r(18),l=r(10),f=r(7),v=r(314),m=r(129),h=r(315),x=r(316),_=r(72),k=r(317),y=[],w=y.sort,C=f((function(){y.sort(void 0)})),$=f((function(){y.sort(null)})),M=m("sort"),G=!f((function(){if(_)return _<70;if(!(h&&h>3)){if(x)return!0;if(k)return k<603;var code,t,e,r,o="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)y.push({k:t+r,v:e})}for(y.sort((function(a,b){return b.v-a.v})),r=0;r<y.length;r++)t=y[r].k.charAt(0),o.charAt(o.length-1)!==t&&(o+=t);return"DGBEFHACIJK"!==o}}));o({target:"Array",proto:!0,forced:C||!$||!M||!G},{sort:function(t){void 0!==t&&n(t);var e=d(this);if(G)return void 0===t?w.call(e):w.call(e,t);var r,o,f=[],m=c(e.length);for(o=0;o<m;o++)o in e&&f.push(e[o]);for(r=(f=v(f,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:l(e)>l(r)?1:-1}}(t))).length,o=0;o<r;)e[o]=f[o++];for(;o<m;)delete e[o++];return e}})},314:function(t,e){var r=Math.floor,o=function(t,e){var c=t.length,l=r(c/2);return c<8?n(t,e):d(o(t.slice(0,l),e),o(t.slice(l),e),e)},n=function(t,e){for(var element,r,o=t.length,i=1;i<o;){for(r=i,element=t[i];r&&e(t[r-1],element)>0;)t[r]=t[--r];r!==i++&&(t[r]=element)}return t},d=function(t,e,r){for(var o=t.length,n=e.length,d=0,c=0,l=[];d<o||c<n;)d<o&&c<n?l.push(r(t[d],e[c])<=0?t[d++]:e[c++]):l.push(d<o?t[d++]:e[c++]);return l};t.exports=o},315:function(t,e,r){var o=r(58).match(/firefox\/(\d+)/i);t.exports=!!o&&+o[1]},316:function(t,e,r){var o=r(58);t.exports=/MSIE|Trident/.test(o)},317:function(t,e,r){var o=r(58).match(/AppleWebKit\/(\d+)\./);t.exports=!!o&&+o[1]},320:function(t,e,r){var o=r(4),n=Math.ceil,d=Math.floor;o({target:"Math",stat:!0},{trunc:function(t){return(t>0?d:n)(t)}})},321:function(t,e,r){var content=r(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("0d3e658c",content,!0,{sourceMap:!1})},322:function(t,e,r){var content=r(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("6aa3493a",content,!0,{sourceMap:!1})},325:function(t,e,r){"use strict";r(321)},326:function(t,e,r){var o=r(14)(!1);o.push([t.i,'h1[data-v-3ce7da48]{font-size:1.75rem}h1[data-v-3ce7da48],h2[data-v-3ce7da48]{color:#fbfbfb;font-weight:600;margin:0}h2[data-v-3ce7da48]{font-size:1.4rem}h3[data-v-3ce7da48]{color:#fbfbfb;margin:0;font-size:1.2rem;font-weight:600}p[data-v-3ce7da48]{font-size:12px;margin-top:.5rem;margin-bottom:.5rem}.flex-column[data-v-3ce7da48]{display:flex;flex-direction:column;align-items:center;justify-content:center}.round[data-v-3ce7da48]{border-radius:100%}.full-screen[data-v-3ce7da48]{position:fixed;padding:20px;top:0;height:calc(100vh - 40px);width:calc(100vw - 40px);left:0;z-index:200}.full-screen[data-v-3ce7da48],body[data-v-3ce7da48]{background:#121618;margin:0}body[data-v-3ce7da48]{color:#272727;font-family:"Montserrat";font-weight:300;font-size:12px}div[data-v-3ce7da48]{color:#121618}.light[data-v-3ce7da48],.light div[data-v-3ce7da48]{color:#fbfbfb}.card[data-v-3ce7da48]{background:#272727;color:#2d9b82;border-radius:20px;padding:20px;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.card h2[data-v-3ce7da48]{color:#fbfbfb}.card-container[data-v-3ce7da48]{filter:drop-shadow(0 0 .75rem rgba(0,0,0,.288))}.light-card[data-v-3ce7da48]{background:#fbfbfb;color:#121618}.dark-card[data-v-3ce7da48],.light-card[data-v-3ce7da48]{border-radius:20px;padding:20px;margin:20px 0 0;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.dark-card[data-v-3ce7da48]{background:#272727}.dark-card[data-v-3ce7da48],.dark-card div[data-v-3ce7da48]{color:#fbfbfb}button[data-v-3ce7da48]{color:#121618;padding:20px;background:#8eb5db;border-radius:16px;font-size:14px;font-weight:500;font-family:"Montserrat";border:0;text-transform:uppercase;background:#fbbf05}.menu-item-text[data-v-3ce7da48]{color:#747274;font-family:-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont}.coupon-icon[data-v-3ce7da48]{fill:#fbbf05;width:36px;height:36px}.dark[data-v-3ce7da48],.time-left[data-v-3ce7da48]{color:#272727}.time-left[data-v-3ce7da48]{background:#fbbf05;padding:10px 16px;border-radius:0 20px;margin:-20px -20px 0 0}.time-left h2[data-v-3ce7da48]{text-align:left}.time-left h2[data-v-3ce7da48],.time-left p[data-v-3ce7da48]{display:inline;color:#272727}.time-left div[data-v-3ce7da48]{color:#272727}#next-game[data-v-3ce7da48]{margin:20px 0;text-align:center}.top-row[data-v-3ce7da48]{display:flex;flex-direction:row;justify-content:space-between;align-items:top}.title[data-v-3ce7da48],div[data-v-3ce7da48]{color:#fbfbfb}.title[data-v-3ce7da48]{margin:0;padding:0;text-align:left}.spelare[data-v-3ce7da48]{display:flex;flex-direction:row;color:#fbfbfb}.column[data-v-3ce7da48]{display:flex;flex-direction:column;text-align:center;align-items:center}.spelare div[data-v-3ce7da48]{color:#fbfbfb}.datum[data-v-3ce7da48]{margin:0 0 20px;color:#fbbf05;font-size:1.2em;text-align:left;align-self:flex-start}.datum[data-v-3ce7da48],.lag[data-v-3ce7da48]{text-transform:uppercase}.lag[data-v-3ce7da48]{font-weight:500}h3[data-v-3ce7da48]{margin:0 5px}.spelar-ruta[data-v-3ce7da48]{display:flex;justify-content:center;align-items:center;flex-direction:column;font-size:12px;font-weight:300;margin:10px 0}.spelar-bild[data-v-3ce7da48]{width:12vw;height:12vw;border-radius:100%;margin:10px}.row[data-v-3ce7da48]{flex-direction:row}.row[data-v-3ce7da48],.vs[data-v-3ce7da48]{display:flex;justify-content:center}.vs[data-v-3ce7da48]{align-items:center;border-right:0 solid #fbfbfb;margin:0 10px;color:#fbfbfb}.vs-linje[data-v-3ce7da48]{height:1px;background:#121618;width:100%}.vs-text[data-v-3ce7da48]{padding:0 10px}hr[data-v-3ce7da48]{width:100%;height:1px}div.court[data-v-3ce7da48]{color:#fff;font-size:1.2em;text-transform:capitalize;margin:-20px 0 20px;text-align:left;align-items:flex-start}.court .row[data-v-3ce7da48]{align-items:center}.court img[data-v-3ce7da48]{width:20px;margin-right:10px}.column.left[data-v-3ce7da48]{align-items:flex-start}',""]),t.exports=o},331:function(t,e,r){r(4)({target:"Number",stat:!0},{EPSILON:Math.pow(2,-52)})},332:function(t,e,r){"use strict";var o=r(12),n=r(5),d=r(93),c=r(21),l=r(13),f=r(50),v=r(197),m=r(74),h=r(196),x=r(7),_=r(59),k=r(75).f,y=r(40).f,w=r(20).f,C=r(333).trim,$="Number",M=n.Number,G=M.prototype,I=f(_(G))==$,j=function(t){if(m(t))throw TypeError("Cannot convert a Symbol value to a number");var e,r,o,n,d,c,l,code,f=h(t,"number");if("string"==typeof f&&f.length>2)if(43===(e=(f=C(f)).charCodeAt(0))||45===e){if(88===(r=f.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+f}for(c=(d=f.slice(2)).length,l=0;l<c;l++)if((code=d.charCodeAt(l))<48||code>n)return NaN;return parseInt(d,o)}return+f};if(d($,!M(" 0o1")||!M("0b1")||M("+0x1"))){for(var z,R=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof R&&(I?x((function(){G.valueOf.call(r)})):f(r)!=$)?v(new M(j(e)),r,R):j(e)},N=o?k(M):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),P=0;N.length>P;P++)l(M,z=N[P])&&!l(R,z)&&w(R,z,y(M,z));R.prototype=G,G.constructor=R,c(n,$,R)}},333:function(t,e,r){var o=r(19),n=r(10),d="["+r(334)+"]",c=RegExp("^"+d+d+"*"),l=RegExp(d+d+"*$"),f=function(t){return function(e){var r=n(o(e));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(l,"")),r}};t.exports={start:f(1),end:f(2),trim:f(3)}},334:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},335:function(t,e,r){"use strict";r(322)},336:function(t,e,r){var o=r(14)(!1);o.push([t.i,'h1[data-v-2a5e488c]{font-size:1.75rem}h1[data-v-2a5e488c],h2[data-v-2a5e488c]{color:#fbfbfb;font-weight:600;margin:0}h2[data-v-2a5e488c]{font-size:1.4rem}h3[data-v-2a5e488c]{color:#fbfbfb;margin:0;font-size:1.2rem;font-weight:600}p[data-v-2a5e488c]{font-size:12px;margin-top:.5rem;margin-bottom:.5rem}.flex-column[data-v-2a5e488c]{display:flex;flex-direction:column;align-items:center;justify-content:center}.round[data-v-2a5e488c]{border-radius:100%}.full-screen[data-v-2a5e488c]{position:fixed;padding:20px;top:0;height:calc(100vh - 40px);width:calc(100vw - 40px);left:0;z-index:200}.full-screen[data-v-2a5e488c],body[data-v-2a5e488c]{background:#121618;margin:0}body[data-v-2a5e488c]{color:#272727;font-family:"Montserrat";font-weight:300;font-size:12px}div[data-v-2a5e488c]{color:#121618}.light[data-v-2a5e488c],.light div[data-v-2a5e488c]{color:#fbfbfb}.card[data-v-2a5e488c]{background:#272727;color:#2d9b82;border-radius:20px;padding:20px;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.card h2[data-v-2a5e488c]{color:#fbfbfb}.card-container[data-v-2a5e488c]{filter:drop-shadow(0 0 .75rem rgba(0,0,0,.288))}.light-card[data-v-2a5e488c]{background:#fbfbfb;color:#121618}.dark-card[data-v-2a5e488c],.light-card[data-v-2a5e488c]{border-radius:20px;padding:20px;margin:20px 0 0;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.dark-card[data-v-2a5e488c]{background:#272727}.dark-card[data-v-2a5e488c],.dark-card div[data-v-2a5e488c]{color:#fbfbfb}button[data-v-2a5e488c]{color:#121618;padding:20px;background:#8eb5db;border-radius:16px;font-size:14px;font-weight:500;font-family:"Montserrat";border:0;text-transform:uppercase;background:#fbbf05}.menu-item-text[data-v-2a5e488c]{color:#747274;font-family:-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont}.coupon-icon[data-v-2a5e488c]{fill:#fbbf05;width:36px;height:36px}.dark[data-v-2a5e488c]{color:#272727}#table[data-v-2a5e488c]{margin:0 0 72px}#table h2[data-v-2a5e488c]{text-align:left}.table-top[data-v-2a5e488c]{z-index:1;margin-left:-20px;padding-left:20px}.tabell[data-v-2a5e488c]{margin:0;display:flex;flex-direction:column;filter:drop-shadow(0 0 .75rem rgba(0,0,0,.288))}.tabell .card[data-v-2a5e488c]{padding:0 20px 0 0}.division[data-v-2a5e488c]{margin:0 0 20px;color:#fbbf05;text-transform:uppercase;font-size:1.2em;text-align:left}.rubriker[data-v-2a5e488c]{padding:10px 20px 10px 0;align-items:flex-start;text-align:left;margin:0 0 5px;font-size:12px}.rad[data-v-2a5e488c],.rubriker[data-v-2a5e488c]{display:grid;grid-template-columns:55px 5fr 1.5rem 2rem 1.5rem;grid-template-rows:1fr;color:#fbfbfb}.rad[data-v-2a5e488c]{align-items:center;padding:0 20px 0 0;background:#272727;margin:0 0 8px;font-size:14px;border-radius:22px}.rubriker span[data-v-2a5e488c]{font-weight:500}.rad span[data-v-2a5e488c]{padding:12px 0}#table .rubriker span[data-v-2a5e488c]:first-child{background:none;color:#fbfbfb}#table span[data-v-2a5e488c]:first-child{margin:0 8px 0 -1px;text-align:center;color:#272727;font-weight:500;padding:-10px 0;background:#fbbf05;border-radius:20px 20px 0 20px}#table span[data-v-2a5e488c]:nth-child(2){display:flex;justify-content:space-between;align-items:center;justify-self:flex-start;padding:0;width:100%}#table span[data-v-2a5e488c]:nth-child(3),#table span[data-v-2a5e488c]:nth-child(4),#table span[data-v-2a5e488c]:nth-child(5){justify-self:flex-end}.spelare img[data-v-2a5e488c]{height:32px;margin-right:0}.spelare[data-v-2a5e488c]{font-size:12px}.your-league[data-v-2a5e488c],.your-league h2[data-v-2a5e488c]{text-transform:capitalize;color:#121618}',""]),t.exports=o},337:function(t,e,r){var content=r(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("4e5d001a",content,!0,{sourceMap:!1})},338:function(t,e,r){var content=r(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("40033d9b",content,!0,{sourceMap:!1})},339:function(t,e,r){"use strict";r.r(e);r(41),r(313),r(27),r(320);var o={data:function(){return{hemma2:"",borta1:"",borta2:""}},computed:{nextGame:function(){var t=new Date,e=this.$store.state.allMyGames.filter((function(e){return new Date(e.bookedtime)>t}));return e.sort((function(a,b){return a.bookedtime-b.bookedtime})),e[0]},nextGameFormatedDate:function(){var t=new Date(this.$store.state.upcomingGames[0].bookedtime),e=t.getMonth(),r=t.getDate(),o=("0"+t.getHours()).slice(-2),n=t.getDay(),d=("0"+t.getMinutes()).slice(-2);return this.sweWeekday(n)+" "+r+" "+this.sweMonth(e)+" "+o+":"+d},timeLeft:function(){var t=new Date,time=new Date(this.$store.state.upcomingGames[0].bookedtime).getTime()-t.getTime();return Math.trunc(time/864e5+1)}},mounted:function(){},methods:{playerImage:function(t){try{var e=r(308)("./"+t+".jpg");return console.log(e),e}catch(t){return r(195)}},sweMonth:function(t){var e="";switch(t){case 0:e="jan";break;case 1:e="feb";break;case 2:e="mars";break;case 3:e="apr";break;case 4:e="maj";break;case 5:e="juni";break;case 6:e="juli";break;case 7:e="aug";break;case 8:e="sep";break;case 9:e="okt";break;case 10:e="nov";break;case 11:e="dec"}return e},sweWeekday:function(t){var e="";switch(t){case 1:e="mån";break;case 2:e="tis";break;case 3:e="ons";break;case 4:e="tors";break;case 5:e="fre";break;case 6:e="lör";break;case 7:e="sön"}return e}}},n=(r(325),r(3)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$store.state.upcomingGames[0]?r("div",{staticClass:"card",attrs:{id:"next-game"}},[r("div",{staticClass:"top-row"},[r("div",{staticClass:"column left"},[r("h2",{staticClass:"title"},[t._v("Nästa match")]),t._v(" "),r("div",{staticClass:"datum"},[t._v("\n        "+t._s(t.nextGameFormatedDate)+"\n      ")])]),t._v(" "),r("div",[r("div",{staticClass:"time-left"},[r("h2",[t._v(t._s(t.timeLeft))]),t._v(" "),1!==t.timeLeft?r("p",[t._v("dagar")]):t._e(),t._v(" "),1===t.timeLeft?r("p",[t._v("dag")]):t._e(),t._v(" "),r("div")])])]),t._v(" "),r("div",{staticClass:"court"},[t._v("\n    "+t._s(t.$store.state.upcomingGames[0].court_name)+"\n    "),t._v("\n    KOD "+t._s(t.$store.state.upcomingGames[0].pin_code)+"\n    ")]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"column"},[r("div",{staticClass:"lag"},[t._v("Hemma")]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"column"},[r("img",{staticClass:"spelar-bild",attrs:{src:t.playerImage(t.nextGame.hemma1),alt:""}}),t._v(" "),r("div",[t._v("\n            "+t._s(t.nextGame.hemma1.firstname)+"\n            "+t._s(t.nextGame.hemma1.lastname)+"\n          ")])]),t._v(" "),r("div",{staticClass:"column"},[r("img",{staticClass:"spelar-bild",attrs:{src:t.playerImage(t.nextGame.hemma2),alt:""}}),t._v(" "),r("div",[t._v("\n            "+t._s(t.nextGame.hemma2.firstname)+"\n            "+t._s(t.nextGame.hemma2.lastname)+"\n          ")])])])]),t._v(" "),r("div",{staticClass:"vs"}),t._v(" "),r("div",{staticClass:"column"},[r("div",{staticClass:"lag"},[t._v("Borta")]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"column"},[r("img",{staticClass:"spelar-bild",attrs:{src:t.playerImage(t.nextGame.borta1),alt:""}}),t._v(" "),r("div",[t._v("\n            "+t._s(t.nextGame.borta1.firstname)+"\n            "+t._s(t.nextGame.borta1.lastname)+"\n          ")])]),t._v(" "),r("div",{staticClass:"column"},[r("img",{staticClass:"spelar-bild",attrs:{src:t.playerImage(t.$store.state.allMyGames[0].borta2),alt:""}}),t._v(" "),r("div",[t._v("\n            "+t._s(t.nextGame.borta2.firstname)+"\n            "+t._s(t.nextGame.borta2.lastname)+"\n          ")])])])])])]):t._e()}),[],!1,null,"3ce7da48",null);e.default=component.exports},340:function(t,e,r){"use strict";r.r(e);var o=r(2),n=(r(17),r(313),r(331),r(332),{data:function(){return{ip:"",sort:!0,table:[]}},computed:{sortedByPoints:function(){var t=this.table;return(t=t.sort((function(a,b){return a.points<b.points?-1:a.points>b.points?1:0}))).reverse(),t},sortedByAvgPoints:function(){var t=this.table;return(t=t.sort((function(a,b){return a.ppm<b.ppm?-1:a.ppm>b.ppm?1:0}))).reverse(),t}},mounted:function(){this.getLeagueTable()},methods:{getLeagueTable:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,table;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.user.city;case 2:return r=e.sent,e.next=5,t.$auth.user.league;case 5:return o=e.sent,e.next=8,t.$axios.$get("/table/"+r+"/"+o);case 8:table=e.sent,t.table=table;case 10:case"end":return e.stop()}}),e)})))()},getPlayerImage:function(t){try{return r(308)("./"+t+".jpg")}catch(t){return r(195)}},avgPoints:function(a,b){return Math.round(10*(a/b+Number.EPSILON))/10}}}),d=(r(335),r(3)),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card",attrs:{id:"table"}},[r("div",{staticClass:"table-top"},[r("div",{staticClass:"league-title"},[r("h2",{staticClass:"your-league"},[t._v("SES "+t._s(t.$auth.user.city))]),t._v(" "),r("div",{staticClass:"division"},[t._v("Division "+t._s(t.$store.state.auth.user.league))])]),t._v(" "),r("div",{staticClass:"card-container"},[r("div",{staticClass:"rubriker"},[r("span",[t._v("Plats")]),t._v(" "),r("span",[t._v("Spelare")]),t._v(" "),r("span",[t._v("M")]),t._v(" "),r("span",{on:{click:function(e){t.sort=!1}}},[t._v("P/M")]),t._v(" "),r("span",{on:{click:function(e){t.sort=!0}}},[t._v("P")])])])]),t._v(" "),r("div",{staticClass:"tabell"},[r("div",{staticClass:"card-container"},[t.sort?r("div",t._l(t.sortedByPoints,(function(e,o){return r("div",{key:o,staticClass:"rad"},[r("span",{staticClass:"plats"},[t._v("#"+t._s(o+1))]),t._v(" "),r("span",{staticClass:"spelare"},[t._v("\n            "+t._s(e.name)+"\n\n            "),r("img",{staticClass:"round",attrs:{src:t.getPlayerImage(e.id),alt:""}})]),t._v(" "),r("span",{staticClass:"matcher"},[t._v(t._s(e.matches))]),t._v(" "),r("span",{staticClass:"avgpoints"},[t._v(t._s(e.ppm))]),t._v(" "),r("span",{staticClass:"points"},[t._v(t._s(e.points))])])})),0):t._e(),t._v(" "),t.sort?t._e():r("div",t._l(t.sortedByAvgPoints,(function(e,o){return r("div",{key:o,staticClass:"rad"},[r("span",{staticClass:"plats"},[t._v("#"+t._s(o+1))]),t._v(" "),r("span",{staticClass:"spelare"},[t._v("\n            "+t._s(e.name)+"\n\n            "),r("img",{staticClass:"round",attrs:{src:t.getPlayerImage(e.id),alt:""}})]),t._v(" "),r("span",{staticClass:"matcher"},[t._v(t._s(e.matches))]),t._v(" "),r("span",{staticClass:"avgpoints"},[t._v(t._s(e.ppm))]),t._v(" "),r("span",{staticClass:"points"},[t._v(t._s(e.points))])])})),0)])])])}),[],!1,null,"2a5e488c",null);e.default=component.exports},365:function(t,e,r){"use strict";r(337)},366:function(t,e,r){var o=r(14)(!1);o.push([t.i,'h1[data-v-d104cd2e]{font-size:1.75rem}h1[data-v-d104cd2e],h2[data-v-d104cd2e]{color:#fbfbfb;font-weight:600;margin:0}h2[data-v-d104cd2e]{font-size:1.4rem}h3[data-v-d104cd2e]{color:#fbfbfb;margin:0;font-size:1.2rem;font-weight:600}p[data-v-d104cd2e]{font-size:12px;margin-top:.5rem;margin-bottom:.5rem}.flex-column[data-v-d104cd2e]{display:flex;flex-direction:column;align-items:center;justify-content:center}.round[data-v-d104cd2e]{border-radius:100%}.full-screen[data-v-d104cd2e]{position:fixed;padding:20px;top:0;height:calc(100vh - 40px);width:calc(100vw - 40px);left:0;z-index:200}.full-screen[data-v-d104cd2e],body[data-v-d104cd2e]{background:#121618;margin:0}body[data-v-d104cd2e]{color:#272727;font-family:"Montserrat";font-weight:300;font-size:12px}div[data-v-d104cd2e]{color:#121618}.light[data-v-d104cd2e],.light div[data-v-d104cd2e]{color:#fbfbfb}.card[data-v-d104cd2e]{background:#272727;color:#2d9b82;border-radius:20px;padding:20px;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.card h2[data-v-d104cd2e]{color:#fbfbfb}.card-container[data-v-d104cd2e]{filter:drop-shadow(0 0 .75rem rgba(0,0,0,.288))}.light-card[data-v-d104cd2e]{background:#fbfbfb;color:#121618}.dark-card[data-v-d104cd2e],.light-card[data-v-d104cd2e]{border-radius:20px;padding:20px;margin:20px 0 0;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.dark-card[data-v-d104cd2e]{background:#272727}.dark-card[data-v-d104cd2e],.dark-card div[data-v-d104cd2e]{color:#fbfbfb}button[data-v-d104cd2e]{padding:20px;background:#8eb5db;border-radius:16px;font-size:14px;font-weight:500;font-family:"Montserrat";border:0;text-transform:uppercase;background:#fbbf05}.menu-item-text[data-v-d104cd2e]{color:#747274;font-family:-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont}.coupon-icon[data-v-d104cd2e]{fill:#fbbf05;width:36px;height:36px}.dark[data-v-d104cd2e]{color:#272727}.team-score[data-v-d104cd2e]{font-size:5em;font-weight:600}.time-left[data-v-d104cd2e]{background:#fbbf05;padding:10px 16px;border-radius:0 20px;margin:-20px -20px 0 0;color:#272727}.time-left h2[data-v-d104cd2e]{text-align:left}.time-left h2[data-v-d104cd2e],.time-left p[data-v-d104cd2e]{display:inline;color:#272727}.time-left div[data-v-d104cd2e]{color:#272727}#next-game[data-v-d104cd2e]{margin:20px 0;text-align:center}button[data-v-d104cd2e]{margin:20px 0 0;color:#121618}.register-button[data-v-d104cd2e],button[data-v-d104cd2e]:first-child{margin-right:10px}.register-button[data-v-d104cd2e]{background:#121618;color:#fbfbfb}.top-row[data-v-d104cd2e]{display:flex;flex-direction:row;justify-content:space-between;align-items:top}.title[data-v-d104cd2e],div[data-v-d104cd2e]{color:#fbfbfb}.title[data-v-d104cd2e]{margin:0;padding:0;text-align:left}.spelare[data-v-d104cd2e]{display:flex;flex-direction:row;color:#fbfbfb}.column[data-v-d104cd2e]{display:flex;flex-direction:column;text-align:center}.spelare div[data-v-d104cd2e]{color:#fbfbfb}.datum[data-v-d104cd2e]{margin:0;color:#fbbf05;font-size:1.2em;text-align:left}.datum[data-v-d104cd2e],.lag[data-v-d104cd2e]{text-transform:uppercase}h3[data-v-d104cd2e]{margin:0 5px}.spelar-ruta[data-v-d104cd2e]{display:flex;justify-content:center;align-items:center;flex-direction:column;font-size:12px;font-weight:300;margin:10px 0}.spelar-bild[data-v-d104cd2e]{width:12vw;height:12vw;border-radius:100%;margin:10px}.row[data-v-d104cd2e]{flex-direction:row}.row[data-v-d104cd2e],.vs[data-v-d104cd2e]{display:flex;justify-content:center}.vs[data-v-d104cd2e]{align-items:center;border-right:0 solid #fbfbfb;margin:0 10px;color:#fbfbfb}.vs-linje[data-v-d104cd2e]{height:1px;background:#121618;width:100%}.vs-text[data-v-d104cd2e]{padding:0 10px}hr[data-v-d104cd2e]{width:100%;height:1px}',""]),t.exports=o},367:function(t,e,r){"use strict";r(338)},368:function(t,e,r){var o=r(14)(!1);o.push([t.i,'h1[data-v-532a5806]{font-size:1.75rem}h1[data-v-532a5806],h2[data-v-532a5806]{color:#fbfbfb;font-weight:600;margin:0}h2[data-v-532a5806]{font-size:1.4rem}h3[data-v-532a5806]{color:#fbfbfb;margin:0;font-size:1.2rem;font-weight:600}p[data-v-532a5806]{font-size:12px;margin-top:.5rem;margin-bottom:.5rem}.flex-column[data-v-532a5806]{display:flex;flex-direction:column;align-items:center;justify-content:center}.round[data-v-532a5806]{border-radius:100%}.full-screen[data-v-532a5806]{position:fixed;padding:20px;top:0;height:calc(100vh - 40px);width:calc(100vw - 40px);left:0;z-index:200}.full-screen[data-v-532a5806],body[data-v-532a5806]{background:#121618;margin:0}body[data-v-532a5806]{color:#272727;font-family:"Montserrat";font-weight:300;font-size:12px}div[data-v-532a5806]{color:#121618}.light[data-v-532a5806],.light div[data-v-532a5806]{color:#fbfbfb}.card[data-v-532a5806]{background:#272727;color:#2d9b82;border-radius:20px;padding:20px;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.card h2[data-v-532a5806]{color:#fbfbfb}.card-container[data-v-532a5806]{filter:drop-shadow(0 0 .75rem rgba(0,0,0,.288))}.light-card[data-v-532a5806]{background:#fbfbfb;color:#121618}.dark-card[data-v-532a5806],.light-card[data-v-532a5806]{border-radius:20px;padding:20px;margin:20px 0 0;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.dark-card[data-v-532a5806]{background:#272727}.dark-card[data-v-532a5806],.dark-card div[data-v-532a5806]{color:#fbfbfb}button[data-v-532a5806]{color:#121618;padding:20px;background:#8eb5db;border-radius:16px;font-size:14px;font-weight:500;font-family:"Montserrat";border:0;text-transform:uppercase;background:#fbbf05}.menu-item-text[data-v-532a5806]{color:#747274;font-family:-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont}.coupon-icon[data-v-532a5806]{fill:#fbbf05;width:36px;height:36px}.dark[data-v-532a5806]{color:#272727}#menu[data-v-532a5806]{position:fixed;top:0;left:0;height:100vh;width:100vw;background:#121618;z-index:100}.menu-title[data-v-532a5806]{color:#fff;text-align:center}ul[data-v-532a5806]{margin:0;padding:0}.menu-link[data-v-532a5806]{color:#fff;text-decoration:none;list-style-type:none}',""]),t.exports=o},379:function(t,e,r){var content=r(415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("078abeb1",content,!0,{sourceMap:!1})},394:function(t,e,r){"use strict";r.r(e);var o=r(2),n=(r(17),r(320),{data:function(){return{hemma1:"",hemma2:"",borta1:"",borta2:""}},computed:{nextGameFormatedDate:function(){var t=new Date(this.$store.state.playedGamesWithoutResult[0].bookedtime),e=t.getUTCMonth(),r=t.getUTCDate(),o=t.getUTCHours(),n=t.getUTCDay(),d=t.getUTCMinutes();return this.sweWeekday(n)+" "+r+" "+this.sweMonth(e)+" "+o+":"+d},timeLeft:function(){var t=new Date,time=new Date(this.$store.state.playedGamesWithoutResult[0].bookedtime).getTime()-t.getTime();return Math.trunc(time/864e5)+1}},mounted:function(){this.getGame(this.$store.state.auth.user.league,this.$store.state.playedGamesWithoutResult[0].ID),this.isResultEmpty()},methods:{playerImage:function(t){try{var e=r(308)("./"+t+".jpg");return console.log(e),e}catch(t){return r(195)}},isResultEmpty:function(){this.$store.state.playedGamesWithoutResult[0].pointshemma>0||this.$store.state.playedGamesWithoutResult[0].pointsborta>0?this.$store.commit("showHide/registerResult",!1):this.$store.commit("showHide/registerResult",!0)},updateGameData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var body,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return body={pointshemma:t.$store.state.playedGamesWithoutResult[0].pointshemma,pointsborta:t.$store.state.playedGamesWithoutResult[0].pointsborta},r="matcher-"+t.$auth.user.city+"-"+t.$auth.user.league,e.next=4,t.$axios.$put("/admin/game/"+r+"/"+t.$store.state.playedGamesWithoutResult[0].ID,body);case 4:t.$store.commit("admin/selectedMatch",{}),t.$store.commit("showHide/registerResult",!1);case 6:case"end":return e.stop()}}),e)})))()},getGame:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$post("/players-info",t.$store.state.playedGamesWithoutResult);case 2:r=e.sent,t.commit("playedGamesWithoutResult",r);case 4:case"end":return e.stop()}}),e)})))()},sweMonth:function(t){var e="";switch(t){case 0:e="jan";break;case 1:e="feb";break;case 2:e="mars";break;case 3:e="apr";break;case 4:e="maj";break;case 5:e="juni";break;case 6:e="juli";break;case 7:e="aug";break;case 8:e="sep";break;case 9:e="okt";break;case 10:e="nov";break;case 11:e="dec"}return e},sweWeekday:function(t){var e="";switch(t){case 1:e="mån";break;case 2:e="tis";break;case 3:e="ons";break;case 4:e="tors";break;case 5:e="fre";break;case 6:e="lör";break;case 7:e="sön"}return e},changePoints:function(){switch(this.$store.state.playedGamesWithoutResult[0].pointsborta){case null:case 0:this.$store.state.playedGamesWithoutResult[0].pointshemma,this.$store.commit("addHomePoints",0),this.$store.commit("addAwayPoints",6);break;case 1:this.$store.commit("addHomePoints",6),this.$store.commit("addAwayPoints",0);break;case 2:this.$store.commit("addHomePoints",5),this.$store.commit("addAwayPoints",1);break;case 3:this.$store.commit("addHomePoints",4),this.$store.commit("addAwayPoints",2);break;case 4:this.$store.commit("addHomePoints",3),this.$store.commit("addAwayPoints",3);break;case 5:this.$store.commit("addHomePoints",2),this.$store.commit("addAwayPoints",4);break;case 6:this.$store.commit("addHomePoints",1),this.$store.commit("addAwayPoints",5)}}}}),d=(r(365),r(3)),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card",attrs:{id:"next-game"}},[r("div",{staticClass:"top-row"},[r("div",{staticClass:"column"},[r("h2",{staticClass:"title"},[t._v("Registrera resultat")]),t._v(" "),r("div",{staticClass:"datum"},[t._v("\n        "+t._s(t.nextGameFormatedDate)+"\n      ")])]),t._v(" "),r("div")]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"column"},[r("div",{staticClass:"team-score"},[t._v("\n        "+t._s(t.$store.state.playedGamesWithoutResult[0].pointshemma)+"\n      ")]),t._v(" "),r("div",{staticClass:"lag"},[t._v("Hemma")]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"column"},[r("img",{staticClass:"spelar-bild",attrs:{src:t.playerImage(t.$store.state.playedGamesWithoutResult[0].hemma1)}}),t._v(" "),r("div",[t._v("\n            "+t._s(t.$store.state.namesOfPlayedGame[0])+"\n          ")])]),t._v(" "),r("div",{staticClass:"column"},[r("img",{staticClass:"spelar-bild",attrs:{src:t.playerImage(t.$store.state.playedGamesWithoutResult[0].hemma2)}}),t._v(" "),r("div",[t._v(t._s(t.$store.state.namesOfPlayedGame[1]))])])])]),t._v(" "),r("div",{staticClass:"vs"}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"column"},[r("div",{staticClass:"team-score"},[t._v("\n          "+t._s(t.$store.state.playedGamesWithoutResult[0].pointsborta)+"\n        ")]),t._v(" "),r("div",{staticClass:"lag"},[t._v("Borta")]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"column"},[r("img",{staticClass:"spelar-bild",attrs:{src:t.playerImage(t.$store.state.playedGamesWithoutResult[0].borta1)}}),t._v(" "),r("div",[t._v(t._s(t.$store.state.namesOfPlayedGame[2]))])]),t._v(" "),r("div",{staticClass:"column"},[r("img",{staticClass:"spelar-bild",attrs:{src:t.playerImage(t.$store.state.playedGamesWithoutResult[0].borta2)}}),t._v(" "),r("div",[t._v(t._s(t.$store.state.namesOfPlayedGame[3]))])])])])])]),t._v(" "),r("div",{staticClass:"row"},[r("button",{on:{click:t.changePoints}},[t._v("Ändra poäng")])]),t._v(" "),r("div",{staticClass:"row"},[t.$store.state.playedGamesWithoutResult[0].pointshemma>0||t.$store.state.playedGamesWithoutResult[0].pointsborta>0?r("button",{staticClass:"register-button",on:{click:t.updateGameData}},[t._v("\n      Registrera\n    ")]):t._e()])])}),[],!1,null,"d104cd2e",null);e.default=component.exports},395:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{}},methods:{hideMenu:function(){this.$store.state.showMenu=!1}}},n=(r(367),r(3)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"menu"}},[r("h1",{staticClass:"menu-title"},[t._v("Menu")]),t._v(" "),r("ul",{on:{click:t.hideMenu}},[r("router-link",{staticClass:"menu-link",attrs:{to:"/table"}},[t._v("Tabell")]),t._v(" "),r("router-link",{staticClass:"menu-link",attrs:{to:"/schedule"}},[t._v("Spelschema")]),t._v(" "),r("router-link",{staticClass:"menu-link",attrs:{to:"/userslots"}},[t._v("Valda tider")]),t._v(" "),r("router-link",{staticClass:"menu-link",attrs:{to:"/coupons"}},[t._v(" Rabatter")])],1)])}),[],!1,null,"532a5806",null);e.default=component.exports},414:function(t,e,r){"use strict";r(379)},415:function(t,e,r){var o=r(14)(!1);o.push([t.i,'h1[data-v-d4205562]{font-size:1.75rem}h1[data-v-d4205562],h2[data-v-d4205562]{color:#fbfbfb;font-weight:600;margin:0}h2[data-v-d4205562]{font-size:1.4rem}h3[data-v-d4205562]{color:#fbfbfb;margin:0;font-size:1.2rem;font-weight:600}p[data-v-d4205562]{font-size:12px;margin-top:.5rem;margin-bottom:.5rem}.flex-column[data-v-d4205562]{display:flex;flex-direction:column;align-items:center;justify-content:center}.round[data-v-d4205562]{border-radius:100%}.full-screen[data-v-d4205562]{position:fixed;padding:20px;top:0;height:calc(100vh - 40px);width:calc(100vw - 40px);left:0;z-index:200}.full-screen[data-v-d4205562],body[data-v-d4205562]{background:#121618;margin:0}body[data-v-d4205562]{color:#272727;font-family:"Montserrat";font-weight:300;font-size:12px}div[data-v-d4205562]{color:#121618}.light[data-v-d4205562],.light div[data-v-d4205562]{color:#fbfbfb}.card[data-v-d4205562]{background:#272727;color:#2d9b82;border-radius:20px;padding:20px;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.card h2[data-v-d4205562]{color:#fbfbfb}.card-container[data-v-d4205562]{filter:drop-shadow(0 0 .75rem rgba(0,0,0,.288))}.light-card[data-v-d4205562]{background:#fbfbfb;color:#121618}.dark-card[data-v-d4205562],.light-card[data-v-d4205562]{border-radius:20px;padding:20px;margin:20px 0 0;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.dark-card[data-v-d4205562]{background:#272727}.dark-card[data-v-d4205562],.dark-card div[data-v-d4205562]{color:#fbfbfb}button[data-v-d4205562]{color:#121618;padding:20px;background:#8eb5db;border-radius:16px;font-size:14px;font-weight:500;font-family:"Montserrat";border:0;text-transform:uppercase;background:#fbbf05}.menu-item-text[data-v-d4205562]{color:#747274;font-family:-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont}.coupon-icon[data-v-d4205562]{fill:#fbbf05;width:36px;height:36px}.dark[data-v-d4205562]{color:#272727}.top-row[data-v-d4205562]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin:0 0 20px}.greeting[data-v-d4205562]{display:flex;flex-direction:column;align-items:flex-start;margin:0}.date[data-v-d4205562]{color:#fbbf05;text-transform:uppercase}.notification[data-v-d4205562]{margin:0 0 20px}.profile-image[data-v-d4205562]{height:60px}',""]),t.exports=o},476:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{dat:"sön 23 mar"}},computed:{today:function(){var t=new Date,e=t.getDate(),r=t.getMonth();return e+" "+this.sweMonth(r+1)},isNextGameDateBeforeToday:function(){var t=new Date;console.log(t);var e=new Date(this.$store.state.playedGamesWithoutResult[0].bookedtime);return console.log(e),e<t}},mounted:function(){this.isUserInfoFilled(),null!==this.$store.state.auth.user.league&&this.$store.dispatch("getUpcomingGames"),this.$store.dispatch("getAppVersion")},methods:{sweMonth:function(t){var e="";switch(t){case 1:e="jan";break;case 2:e="feb";break;case 3:e="mars";break;case 4:e="apr";break;case 5:e="maj";break;case 6:e="juni";break;case 7:e="juli";break;case 8:e="aug";break;case 9:e="sep";break;case 10:e="okt";break;case 11:e="nov";break;case 12:e="dec"}return e},isUserInfoFilled:function(){""===this.$auth.user.firstname||""===this.$auth.user.lastname||""===this.$auth.user.email||""===this.$auth.user.tel?this.$store.commit("notifications/userInfo",!0):this.$store.commit("notifications/userInfo",!1)}}},n=(r(414),r(3)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"top-row"},[r("div",{staticClass:"greeting"},[r("div",{staticClass:"date"},[t._v(t._s(t.today))]),t._v(" "),r("h1",[t._v("Vamos, "+t._s(t.$auth.user.firstname)+"!")])]),t._v(" "),t.$auth.loggedIn?r("nuxt-link",{attrs:{to:"/profile"}},[r("img",{staticClass:"profile-image round",attrs:{src:t.$store.getters.profileImage}})]):r("button",{on:{click:function(e){return t.$auth.loginWith("local")}}},[t._v("Logga in")])],1),t._v(" "),t.$store.state.showMenuIcon?r("div",{staticClass:"menu-icon",on:{click:t.showMenu}},[t._v("\n    Meny\n  ")]):t._e(),t._v(" "),t.$store.state.auth.user.league&&t.isNextGameDateBeforeToday&&(t.$store.state.showHide.registerResult||null===t.$store.state.playedGamesWithoutResult[0].pointshemma)?r("MatchRegistration",{staticClass:"fullscreen"}):t._e(),t._v(" "),t.$auth.user.league?r("NextGame"):t._e(),t._v(" "),t.$auth.user.league?t._e():r("Notifications-WaitingForPlayers",{staticClass:"notification"}),t._v(" "),r("Notifications"),t._v(" "),t.$auth.user.league?r("Table"):t._e(),t._v(" "),t.$store.state.showHide.menu?r("Menu"):t._e()],1)}),[],!1,null,"d4205562",null);e.default=component.exports;installComponents(component,{MatchRegistration:r(394).default,NextGame:r(339).default,Notifications:r(200).default,Table:r(340).default,Menu:r(395).default})}}]);
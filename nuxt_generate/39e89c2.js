(window.webpackJsonp=window.webpackJsonp||[]).push([[39,22],{298:function(t,e,r){t.exports=r.p+"img/184.879bd7f.jpg"},299:function(t,e,r){t.exports=r.p+"img/183.5a79edd.jpg"},300:function(t,e,r){t.exports=r.p+"img/185.03bb87d.jpg"},301:function(t,e,r){var map={"./183.jpg":299,"./184.jpg":298,"./185.jpg":300,"./216.jpg":302};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=301},302:function(t,e,r){t.exports=r.p+"img/216.cde0b12.jpg"},305:function(t,e,r){var content=r(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("c2a72ccc",content,!0,{sourceMap:!1})},312:function(t,e,r){"use strict";var n=r(4),o=r(74),d=r(26),c=r(18),l=r(10),f=r(7),v=r(313),h=r(128),x=r(314),m=r(315),_=r(72),y=r(316),k=[],C=k.sort,w=f((function(){k.sort(void 0)})),I=f((function(){k.sort(null)})),N=h("sort"),E=!f((function(){if(_)return _<70;if(!(x&&x>3)){if(m)return!0;if(y)return y<603;var code,t,e,r,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)k.push({k:t+r,v:e})}for(k.sort((function(a,b){return b.v-a.v})),r=0;r<k.length;r++)t=k[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:w||!I||!N||!E},{sort:function(t){void 0!==t&&o(t);var e=d(this);if(E)return void 0===t?C.call(e):C.call(e,t);var r,n,f=[],h=c(e.length);for(n=0;n<h;n++)n in e&&f.push(e[n]);for(r=(f=v(f,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:l(e)>l(r)?1:-1}}(t))).length,n=0;n<r;)e[n]=f[n++];for(;n<h;)delete e[n++];return e}})},313:function(t,e){var r=Math.floor,n=function(t,e){var c=t.length,l=r(c/2);return c<8?o(t,e):d(n(t.slice(0,l),e),n(t.slice(l),e),e)},o=function(t,e){for(var element,r,n=t.length,i=1;i<n;){for(r=i,element=t[i];r&&e(t[r-1],element)>0;)t[r]=t[--r];r!==i++&&(t[r]=element)}return t},d=function(t,e,r){for(var n=t.length,o=e.length,d=0,c=0,l=[];d<n||c<o;)d<n&&c<o?l.push(r(t[d],e[c])<=0?t[d++]:e[c++]):l.push(d<n?t[d++]:e[c++]);return l};t.exports=n},314:function(t,e,r){var n=r(56).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},315:function(t,e,r){var n=r(56);t.exports=/MSIE|Trident/.test(n)},316:function(t,e,r){var n=r(56).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},317:function(t,e,r){r(4)({target:"Number",stat:!0},{EPSILON:Math.pow(2,-52)})},318:function(t,e,r){"use strict";var n=r(12),o=r(5),d=r(93),c=r(17),l=r(13),f=r(47),v=r(193),h=r(71),x=r(192),m=r(7),_=r(57),y=r(73).f,k=r(40).f,C=r(16).f,w=r(319).trim,I="Number",N=o.Number,E=N.prototype,A=f(_(E))==I,j=function(t){if(h(t))throw TypeError("Cannot convert a Symbol value to a number");var e,r,n,o,d,c,l,code,f=x(t,"number");if("string"==typeof f&&f.length>2)if(43===(e=(f=w(f)).charCodeAt(0))||45===e){if(88===(r=f.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(c=(d=f.slice(2)).length,l=0;l<c;l++)if((code=d.charCodeAt(l))<48||code>o)return NaN;return parseInt(d,n)}return+f};if(d(I,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var S,M=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof M&&(A?m((function(){E.valueOf.call(r)})):f(r)!=I)?v(new N(j(e)),r,M):j(e)},P=n?y(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),z=0;P.length>z;z++)l(N,S=P[z])&&!l(M,S)&&C(M,S,k(N,S));M.prototype=E,E.constructor=M,c(o,I,M)}},319:function(t,e,r){var n=r(15),o=r(10),d="["+r(320)+"]",c=RegExp("^"+d+d+"*"),l=RegExp(d+d+"*$"),f=function(t){return function(e){var r=o(n(e));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(l,"")),r}};t.exports={start:f(1),end:f(2),trim:f(3)}},320:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},321:function(t,e,r){"use strict";r(305)},322:function(t,e,r){var n=r(21)(!1);n.push([t.i,'h1[data-v-1ee54d0a]{font-size:1.75rem}h1[data-v-1ee54d0a],h2[data-v-1ee54d0a]{color:#fbfbfb;font-weight:600;margin:0}h2[data-v-1ee54d0a]{font-size:1.4rem}h3[data-v-1ee54d0a]{color:#fbfbfb;margin:0;font-size:1.2rem;font-weight:600}p[data-v-1ee54d0a]{font-size:12px;margin-top:.5rem;margin-bottom:.5rem}.flex-column[data-v-1ee54d0a]{display:flex;flex-direction:column;align-items:center;justify-content:center}.round[data-v-1ee54d0a]{border-radius:100%}.full-screen[data-v-1ee54d0a]{position:fixed;padding:20px;top:0;height:calc(100vh - 40px);width:calc(100vw - 40px);left:0;z-index:200}.full-screen[data-v-1ee54d0a],body[data-v-1ee54d0a]{background:#121618;margin:0}body[data-v-1ee54d0a]{color:#272727;font-family:"Montserrat";font-weight:300;font-size:12px}div[data-v-1ee54d0a]{color:#121618}.light[data-v-1ee54d0a],.light div[data-v-1ee54d0a]{color:#fbfbfb}.card[data-v-1ee54d0a]{background:#272727;color:#2d9b82;border-radius:20px;padding:20px;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.card h2[data-v-1ee54d0a]{color:#fbfbfb}.card-container[data-v-1ee54d0a]{filter:drop-shadow(0 0 .75rem rgba(0,0,0,.288))}.light-card[data-v-1ee54d0a]{background:#fbfbfb;color:#121618}.dark-card[data-v-1ee54d0a],.light-card[data-v-1ee54d0a]{border-radius:20px;padding:20px;margin:20px 0 0;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.dark-card[data-v-1ee54d0a]{background:#272727}.dark-card[data-v-1ee54d0a],.dark-card div[data-v-1ee54d0a]{color:#fbfbfb}button[data-v-1ee54d0a]{color:#121618;padding:12px 20px;background:#8eb5db;border-radius:20px;font-size:15px;font-weight:300;font-family:"Montserrat";border:0;background:#fbbf05}.menu-item-text[data-v-1ee54d0a]{color:#747274;font-family:-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont}.coupon-icon[data-v-1ee54d0a]{fill:#fbbf05;width:36px;height:36px}.dark[data-v-1ee54d0a]{color:#272727}#table[data-v-1ee54d0a]{margin:0 0 72px}#table h2[data-v-1ee54d0a]{text-align:left}.table-top[data-v-1ee54d0a]{z-index:1;margin-left:-20px;padding-left:20px}.tabell[data-v-1ee54d0a]{margin:0;display:flex;flex-direction:column;filter:drop-shadow(0 0 .75rem rgba(0,0,0,.288))}.tabell .card[data-v-1ee54d0a]{padding:0 20px 0 0}.division[data-v-1ee54d0a]{margin:0 0 20px;color:#fbbf05;text-transform:uppercase;font-size:1.2em;text-align:left}.rubriker[data-v-1ee54d0a]{padding:10px 20px 10px 0;align-items:flex-start;text-align:left;margin:0 0 5px;font-size:12px}.rad[data-v-1ee54d0a],.rubriker[data-v-1ee54d0a]{display:grid;grid-template-columns:55px 5fr 1.5rem 2rem 1.5rem;grid-template-rows:1fr;color:#fbfbfb}.rad[data-v-1ee54d0a]{align-items:center;padding:0 20px 0 0;background:#272727;margin:0 0 8px;font-size:14px;border-radius:22px}.rubriker span[data-v-1ee54d0a]{font-weight:500}.rad span[data-v-1ee54d0a]{padding:12px 0}#table .rubriker span[data-v-1ee54d0a]:first-child{background:none;color:#fbfbfb}#table span[data-v-1ee54d0a]:first-child{margin:0 8px 0 -1px;text-align:center;color:#272727;font-weight:500;padding:-10px 0;background:#fbbf05;border-radius:20px 20px 0 20px}#table span[data-v-1ee54d0a]:nth-child(2){display:flex;justify-content:space-between;align-items:center;justify-self:flex-start;padding:0;width:100%}#table span[data-v-1ee54d0a]:nth-child(3),#table span[data-v-1ee54d0a]:nth-child(4),#table span[data-v-1ee54d0a]:nth-child(5){justify-self:flex-end}.spelare img[data-v-1ee54d0a]{height:32px;margin-right:0}.spelare[data-v-1ee54d0a]{font-size:12px}.your-league[data-v-1ee54d0a],.your-league h2[data-v-1ee54d0a]{text-transform:capitalize;color:#121618}',""]),t.exports=n},326:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(23),r(312),r(317),r(318),{data:function(){return{ip:"",sort:!0,table:[]}},computed:{sortedByPoints:function(){var t=this.table;return(t=t.sort((function(a,b){return a.points<b.points?-1:a.points>b.points?1:0}))).reverse(),t},sortedByAvgPoints:function(){var t=this.table;return(t=t.sort((function(a,b){return a.ppm<b.ppm?-1:a.ppm>b.ppm?1:0}))).reverse(),t}},mounted:function(){this.getLeagueTable()},methods:{getLeagueTable:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,table;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.user.city;case 2:return r=e.sent,e.next=5,t.$auth.user.league;case 5:return n=e.sent,e.next=8,t.$axios.$get("/table/"+r+"/"+n);case 8:table=e.sent,t.table=table;case 10:case"end":return e.stop()}}),e)})))()},getPlayerImage:function(t){try{return r(301)("./"+t+".jpg")}catch(t){return r(190)}},avgPoints:function(a,b){return Math.round(10*(a/b+Number.EPSILON))/10}}}),d=(r(321),r(2)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card",attrs:{id:"table"}},[r("div",{staticClass:"table-top"},[r("div",{staticClass:"league-title"},[r("h2",{staticClass:"your-league"},[t._v("SES "+t._s(t.$auth.user.city))]),t._v(" "),r("div",{staticClass:"division"},[t._v("Division 7")])]),t._v(" "),r("div",{staticClass:"card-container"},[r("div",{staticClass:"rubriker"},[r("span",[t._v("Plats")]),t._v(" "),r("span",[t._v("Spelare")]),t._v(" "),r("span",[t._v("M")]),t._v(" "),r("span",{on:{click:function(e){t.sort=!1}}},[t._v("P/M")]),t._v(" "),r("span",{on:{click:function(e){t.sort=!0}}},[t._v("P")])])])]),t._v(" "),r("div",{staticClass:"tabell"},[r("div",{staticClass:"card-container"},[t.sort?r("div",t._l(t.sortedByPoints,(function(e,n){return r("div",{key:n,staticClass:"rad"},[r("span",{staticClass:"plats"},[t._v("#"+t._s(n+1))]),t._v(" "),r("span",{staticClass:"spelare"},[t._v("\n            "+t._s(e.name)+"\n\n            "),r("img",{staticClass:"round",attrs:{src:t.getPlayerImage(e.id),alt:""}})]),t._v(" "),r("span",{staticClass:"matcher"},[t._v(t._s(e.matches))]),t._v(" "),r("span",{staticClass:"avgpoints"},[t._v(t._s(e.ppm))]),t._v(" "),r("span",{staticClass:"points"},[t._v(t._s(e.points))])])})),0):t._e(),t._v(" "),t.sort?t._e():r("div",t._l(t.sortedByAvgPoints,(function(e,n){return r("div",{key:n,staticClass:"rad"},[r("span",{staticClass:"plats"},[t._v("#"+t._s(n+1))]),t._v(" "),r("span",{staticClass:"spelare"},[t._v("\n            "+t._s(e.name)+"\n\n            "),r("img",{staticClass:"round",attrs:{src:t.getPlayerImage(e.id),alt:""}})]),t._v(" "),r("span",{staticClass:"matcher"},[t._v(t._s(e.matches))]),t._v(" "),r("span",{staticClass:"avgpoints"},[t._v(t._s(e.ppm))]),t._v(" "),r("span",{staticClass:"points"},[t._v(t._s(e.points))])])})),0)])])])}),[],!1,null,"1ee54d0a",null);e.default=component.exports},451:function(t,e,r){"use strict";r.r(e);var n={setup:function(){return{}}},o=r(2),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("Table")}),[],!1,null,"47aea80a",null);e.default=component.exports;installComponents(component,{Table:r(326).default})}}]);
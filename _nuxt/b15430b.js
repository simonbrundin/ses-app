(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{355:function(t,o,e){var content=e(425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(44).default)("bbbdc550",content,!0,{sourceMap:!1})},423:function(t,o,e){t.exports=e.p+"img/spelare-med-band.db95655.png"},424:function(t,o,e){"use strict";e(355)},425:function(t,o,e){var r=e(43)(!1);r.push([t.i,'h1{font-size:1.75rem}h1,h2{color:#fbfbfb;font-weight:600;margin:0}h2{font-size:1.4rem}h3{color:#fbfbfb;margin:0;font-size:1.2rem;font-weight:600}p{font-size:12px;margin-top:.5rem;margin-bottom:.5rem}.flex-column{display:flex;flex-direction:column;align-items:center;justify-content:center}.round{border-radius:100%}.full-screen{position:fixed;padding:20px;top:0;height:calc(100vh - 40px);width:calc(100vw - 40px);left:0;z-index:200}.full-screen,body{background:#121719;margin:0}body{color:#272727;font-family:"Montserrat";font-weight:300;font-size:12px}div{color:#121719}.light,.light div{color:#fbfbfb}.card{background:#272727;color:#2d9b82;border-radius:20px;padding:20px;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.card h2{color:#fbfbfb}.card-container{filter:drop-shadow(0 0 .75rem rgba(0,0,0,.288))}.light-card{background:#fbfbfb;color:#121719}.dark-card,.light-card{border-radius:20px;padding:20px;margin:20px 0 0;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.dark-card{background:#272727}.dark-card,.dark-card div{color:#fbfbfb}button{color:#121719;padding:12px 20px;background:#8eb5db;border-radius:20px;font-size:15px;font-weight:300;font-family:"Montserrat";border:0;background:#fbbf05}.menu-item-text{color:#747274;font-family:-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont}.coupon-icon{fill:#fbbf05;width:36px;height:36px}.dark{color:#272727}#confirm-game{margin:0}.shadowfilter{filter:drop-shadow(12px 12px 7px rgba(0,0,0,.5))}.match-time{margin:0 0 20px}.match-time,.time-box{display:flex;justify-content:center}.time-box{background:#fbfbfb;color:#747274;position:relative;align-items:center;border-radius:20px;font-size:24px;margin:0 3px;width:70px;height:70px;font-weight:300;z-index:auto}#confirm-game button{width:100%}',""]),t.exports=r},457:function(t,o,e){"use strict";e.r(o);var r={components:{},methods:{confirmGame:function(){this.$store.commit("notifications/ConfirmGame",!1)}}},n=(e(424),e(10)),component=Object(n.a)(r,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return t.$store.state.notifications.ConfirmGame?r("div",{attrs:{id:"confirm-game"}},[r("NavigationRow"),t._v(" "),r("div",{staticClass:"message"},[r("img",{staticClass:"notification-image",attrs:{src:e(423),alt:""}}),t._v(" "),t._m(0),t._v(" "),r("p",{staticClass:"notification-heading"},[t._v("Torsdag, 8 November")]),t._v(" "),t._m(1),t._v(" "),r("button",{on:{click:t.confirmGame}},[t._v("Bekräfta matchtiden")]),t._v(" "),r("p",{staticClass:"decline"},[t._v("Tyvärr, jag har fått förhinder")])])],1):t._e()}),[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",{staticClass:"notification-description"},[t._v("\n      Vi har hittat en tid som passar alla spelare\n      "),e("br"),t._v("Fungerar tiden för dig?\n    ")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"card-container"},[e("div",{staticClass:"match-time"},[e("div",{staticClass:"time-box hours"},[t._v("15")]),t._v(" "),e("div",{staticClass:"time-box mins"},[t._v("30")])])])}],!1,null,null,null);o.default=component.exports}}]);
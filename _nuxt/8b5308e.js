(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{332:function(t,o,e){var content=e(392);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(32).default)("bbbdc550",content,!0,{sourceMap:!1})},390:function(t,o,e){t.exports=e.p+"img/spelare-med-band.db95655.png"},391:function(t,o,e){"use strict";e(332)},392:function(t,o,e){var n=e(31)(!1);n.push([t.i,'h1,h2{margin:0;font-size:1.75rem;font-weight:800}h1,h2,h3{color:#f7f7f7}p{font-size:16px}.flex-column{display:flex;flex-direction:column;align-items:center;justify-content:center}.round{border-radius:100%}.full-screen{position:fixed;padding:20px;top:0;height:calc(100vh - 40px);width:calc(100vw - 40px);left:0;z-index:200}.full-screen,body{background:#000;margin:0}body{color:#f7f7f7;font-family:"Nunito";font-weight:300;font-size:16px}div{color:#000}.light,.light div{color:#f7f7f7}.card{background:#f7f7f7;color:#2d9b82;border-radius:16px;padding:20px;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.card h2{color:#000}.card-container{filter:drop-shadow(0 0 .75rem rgba(0,0,0,.288))}.dark-card{background:#2a2a2a;border-radius:16px;padding:20px;margin:20px 0 0;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.dark-card,.dark-card div{color:#f7f7f7}button{color:#fff;padding:12px 20px;background:#8eb5db;border-radius:16px;font-size:15px;font-weight:300;font-family:"Montserrat";border:0;background:#fbbf05}.menu-item-text{color:#4a4a4a;font-family:-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont}.coupon-icon{fill:#fbbf05;width:36px;height:36px}#confirm-game{margin:0}.shadowfilter{filter:drop-shadow(12px 12px 7px rgba(0,0,0,.5))}.match-time{margin:0 0 20px}.match-time,.time-box{display:flex;justify-content:center}.time-box{background:#f7f7f7;color:#4a4a4a;position:relative;align-items:center;border-radius:16px;font-size:24px;margin:0 3px;width:70px;height:70px;font-weight:300;z-index:auto}#confirm-game button{width:100%}',""]),t.exports=n},421:function(t,o,e){"use strict";e.r(o);var n={components:{},methods:{confirmGame:function(){this.$store.commit("notifications/ConfirmGame",!1)}}},r=(e(391),e(3)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return t.$store.state.notifications.ConfirmGame?n("div",{attrs:{id:"confirm-game"}},[n("NavigationRow"),t._v(" "),n("div",{staticClass:"message"},[n("img",{staticClass:"notification-image",attrs:{src:e(390),alt:""}}),t._v(" "),t._m(0),t._v(" "),n("p",{staticClass:"notification-heading"},[t._v("Torsdag, 8 November")]),t._v(" "),t._m(1),t._v(" "),n("button",{on:{click:t.confirmGame}},[t._v("Bekräfta matchtiden")]),t._v(" "),n("p",{staticClass:"decline"},[t._v("Tyvärr, jag har fått förhinder")])])],1):t._e()}),[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",{staticClass:"notification-description"},[t._v("\n      Vi har hittat en tid som passar alla spelare\n      "),e("br"),t._v("Fungerar tiden för dig?\n    ")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"card-container"},[e("div",{staticClass:"match-time"},[e("div",{staticClass:"time-box hours"},[t._v("15")]),t._v(" "),e("div",{staticClass:"time-box mins"},[t._v("30")])])])}],!1,null,null,null);o.default=component.exports}}]);
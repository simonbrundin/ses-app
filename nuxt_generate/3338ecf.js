(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{352:function(t,e,o){t.exports=o.p+"img/ses-logo-genom.af5a903.png"},361:function(t,e,o){var content=o(391);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("09277586",content,!0,{sourceMap:!1})},390:function(t,e,o){"use strict";o(361)},391:function(t,e,o){var n=o(15)(!1);n.push([t.i,'h1[data-v-627628ea]{font-size:1.75rem}h1[data-v-627628ea],h2[data-v-627628ea]{color:#fbfbfb;font-weight:600;margin:0}h2[data-v-627628ea]{font-size:1.4rem}h3[data-v-627628ea]{color:#fbfbfb;margin:0;font-size:1.2rem;font-weight:600}p[data-v-627628ea]{font-size:12px;margin-top:.5rem;margin-bottom:.5rem}.flex-column[data-v-627628ea]{display:flex;flex-direction:column;align-items:center;justify-content:center}.round[data-v-627628ea]{border-radius:100%}.full-screen[data-v-627628ea]{position:fixed;padding:20px;top:0;height:calc(100vh - 40px);width:calc(100vw - 40px);left:0;z-index:200}.full-screen[data-v-627628ea],body[data-v-627628ea]{background:#121618;margin:0}body[data-v-627628ea]{color:#272727;font-family:"Montserrat";font-weight:300;font-size:12px}div[data-v-627628ea]{color:#121618}.light[data-v-627628ea],.light div[data-v-627628ea]{color:#fbfbfb}.card[data-v-627628ea]{background:#272727;color:#2d9b82;border-radius:20px;padding:20px;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.card h2[data-v-627628ea]{color:#fbfbfb}.card-container[data-v-627628ea]{filter:drop-shadow(0 0 .75rem rgba(0,0,0,.288))}.light-card[data-v-627628ea]{background:#fbfbfb;color:#121618}.dark-card[data-v-627628ea],.light-card[data-v-627628ea]{border-radius:20px;padding:20px;margin:20px 0 0;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.dark-card[data-v-627628ea]{background:#272727}.dark-card[data-v-627628ea],.dark-card div[data-v-627628ea]{color:#fbfbfb}button[data-v-627628ea]{color:#121618;padding:12px 20px;background:#8eb5db;border-radius:20px;font-size:15px;font-weight:300;font-family:"Montserrat";border:0;background:#fbbf05}.menu-item-text[data-v-627628ea]{color:#747274;font-family:-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont}.coupon-icon[data-v-627628ea]{fill:#fbbf05;width:36px;height:36px}.dark[data-v-627628ea]{color:#272727}#login[data-v-627628ea]{display:flex;flex-direction:column;align-items:center;height:100vh;padding:40px 0 0}.logo[data-v-627628ea]{width:60vw}.form[data-v-627628ea]{width:100vw;display:flex;flex-direction:column;align-items:center;margin-top:40px}.form input[data-v-627628ea]{width:calc(100vw - 120px);background:#212121;padding:20px;border:2px solid #36363e;border-radius:16px;margin:0 0 20px;font-size:12px;font-weight:500;color:#7d7d88;font-family:"Montserrat"}input[type=email][data-v-627628ea],input[type=password][data-v-627628ea]{font-size:16px}.login-button[data-v-627628ea]{background:#fff;width:calc(100vw - 80px);padding:20px;border-radius:16px;font-weight:700;color:#404040;text-transform:uppercase}.forgotten-text[data-v-627628ea],.login-button[data-v-627628ea]{font-size:14px;font-family:"Montserrat"}.forgotten-text[data-v-627628ea]{margin-top:16px;color:#7d7d88;font-weight:500}.message[data-v-627628ea]{color:#fff;font-weight:300;padding:0 20px}.message[data-v-627628ea],.register-text[data-v-627628ea]{font-family:"Montserrat";font-size:14px}.register-text[data-v-627628ea]{color:#7d7d88;margin-bottom:16px;font-weight:500}.register-click-text[data-v-627628ea]{color:#fff;text-decoration:none;font-weight:700}.bottom[data-v-627628ea]{display:flex;flex-direction:column;align-items:center;position:absolute;bottom:0;margin-bottom:24px}',""]),t.exports=n},454:function(t,e,o){"use strict";o.r(e);var n=o(3),r=(o(23),{layout:"login",data:function(){return{message:"",email:"",password:"",showForgotten:!1}},methods:{login:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$auth.loginWith("local",{data:{email:t.email,password:t.password}});case 3:t.$router.push("/"),e.next=14;break;case 6:e.prev=6,e.t0=e.catch(0),t.message=e.t0.response.data,e.t1=e.t0.response.status,e.next=400===e.t1?12:13;break;case 12:case 13:return e.abrupt("break",14);case 14:case"end":return e.stop()}}),e,null,[[0,6]])})))()},goToRegister:function(){return this.redirect("/register")}}}),d=(o(390),o(2)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"login"}},[n("img",{staticClass:"logo",attrs:{src:o(352)}}),t._v(" "),n("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{placeholder:"EMAIL",type:"email",autocomplete:"on"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{placeholder:"LÖSENORD",type:"password",autocomplete:"on"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],on:{click:t.login}})]),t._v(" "),n("div",{staticClass:"message"},[t._v("\n    "+t._s(t.message)+"\n    "),t.showForgotten?n("div",{staticClass:"message"},[t._v("\n      Senare under hösten kommer du kunna begära ett nytt lösenord via appen.\n      Just nu får du nöja dig med att slå en pling till 0738 - 34 73 17 så\n      löser vi det manuellt :)\n    ")]):t._e()]),t._v(" "),n("div",{staticClass:"bottom"},[n("div",{staticClass:"register-text"},[t._v("\n      Saknar du konto?\n      "),n("nuxt-link",{staticClass:"register-click-text",attrs:{to:"/register"}},[t._v("Registrera")])],1),t._v(" "),n("button",{staticClass:"login-button",on:{click:t.login}},[t._v("Logga in")]),t._v(" "),n("div",{staticClass:"forgotten-text",on:{click:function(e){t.showForgotten=!t.showForgotten}}},[t._v("\n      Glömt lösenord?\n    ")])])])}),[],!1,null,"627628ea",null);e.default=component.exports}}]);
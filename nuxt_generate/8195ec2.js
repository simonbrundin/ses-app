(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{347:function(t,e,n){var content=n(379);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("0acbb913",content,!0,{sourceMap:!1})},378:function(t,e,n){"use strict";n(347)},379:function(t,e,n){var r=n(52)(!1);r.push([t.i,".forgotten-text{color:#fff}",""]),t.exports=r},441:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(28),{data:function(){return{email:"",password:"",showForgotten:!1}},methods:{login:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$auth.loginWith("local",{data:{email:t.email,password:t.password}});case 3:t.$router.push("/"),e.next=13;break;case 6:e.prev=6,e.t0=e.catch(0),e.t1=e.t0.response.status,e.next=400===e.t1?11:12;break;case 11:case 12:return e.abrupt("break",13);case 13:case"end":return e.stop()}}),e,null,[[0,6]])})))()},goToRegister:function(){return this.redirect("/register")}}}),l=(n(378),n(8)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{placeholder:"EMAIL",type:"email",autocomplete:"on"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{placeholder:"LÖSENORD",type:"password",autocomplete:"on"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),n("button",{attrs:{type:"submit"}},[t._v("Logga in")])]),t._v(" "),n("nuxt-link",{attrs:{to:"/register"}},[n("button",[t._v("Registrera dig")])]),t._v(" "),n("div",{staticClass:"forgotten-text",on:{click:function(e){t.showForgotten=!t.showForgotten}}},[t._v("\n    Glömt lösenord?\n  ")]),t._v("\n  "+t._s(t.showForgotten)+"\n  "),t.showForgotten?n("div",{staticClass:"forgotten-text"},[t._v("\n    Senare under hösten kommer du kunna begära ett nytt lösenord via appen.\n    Just nu får du nöja dig med att slå en pling till 0738 - 34 73 17 så löser\n    vi det manuellt :)\n  ")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);
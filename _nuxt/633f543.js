(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{280:function(t,e,o){"use strict";var n=o(4),r=o(291);n({target:"String",proto:!0,forced:o(292)("sub")},{sub:function(){return r(this,"sub","","")}})},291:function(t,e,o){var n=o(17),r=/"/g;t.exports=function(t,e,o,f){var l=String(n(t)),c="<"+e;return""!==o&&(c+=" "+o+'="'+String(f).replace(r,"&quot;")+'"'),c+">"+l+"</"+e+">"}},292:function(t,e,o){var n=o(6);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},293:function(t,e,o){"use strict";o(10),o(280);e.a={methods:{getUserInfo:function(){var t=this,e=this.$store.state.server,o=[];if(this.$auth.isAuthenticated){var body=JSON.stringify({socialID:this.$auth.user.sub});fetch(e+"/getuser",{method:"post",headers:{"Content-Type":"application/json"},body:body}).then((function(t){return t.json()})).then((function(e){o=e[0],t.$store.commit("userInfo",o)}))}}}}},348:function(t,e,o){var content=o(375);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("6994ecf2",content,!0,{sourceMap:!1})},374:function(t,e,o){"use strict";o(348)},375:function(t,e,o){var n=o(15)(!1);n.push([t.i,'h1[data-v-537babf5],h2[data-v-537babf5]{margin:0;font-size:1.75rem;font-weight:800}h1[data-v-537babf5],h2[data-v-537babf5],h3[data-v-537babf5]{color:#f7f7f7}p[data-v-537babf5]{font-size:16px}.round[data-v-537babf5]{border-radius:100%}.full-screen[data-v-537babf5]{position:fixed;padding:20px;top:0;height:calc(100vh - 40px);width:calc(100vw - 40px);left:0;z-index:200}.full-screen[data-v-537babf5],body[data-v-537babf5]{background:#000;margin:0}body[data-v-537babf5]{color:#f7f7f7;font-family:"Nunito";font-weight:300;font-size:16px}div[data-v-537babf5]{color:#000}.light[data-v-537babf5],.light div[data-v-537babf5]{color:#f7f7f7}.card[data-v-537babf5]{background:#f7f7f7;color:#2d9b82;border-radius:16px;padding:20px;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.card h2[data-v-537babf5]{color:#000}.card-container[data-v-537babf5]{filter:drop-shadow(0 0 .75rem rgba(0,0,0,.288))}.dark-card[data-v-537babf5]{background:#2a2a2a;border-radius:16px;padding:20px;margin:20px 0 0;box-shadow:6px 6px 16px 6px rgba(0,0,0,.15)}.dark-card[data-v-537babf5],.dark-card div[data-v-537babf5]{color:#f7f7f7}button[data-v-537babf5]{color:#fff;padding:12px 20px;background:#8eb5db;border-radius:16px;font-size:15px;font-weight:300;font-family:"Montserrat";border:0;background:#fbbf05}.menu-item-text[data-v-537babf5]{color:#4a4a4a;font-family:-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont}.coupon-icon[data-v-537babf5]{fill:#fbbf05;width:36px;height:36px}#contact-information-screen[data-v-537babf5]{padding:20px;background:#000}p[data-v-537babf5]{text-align:left;color:#fff}',""]),t.exports=n},418:function(t,e,o){"use strict";o.r(e);o(10),o(280);var n={mixins:[o(293).a],data:function(){return{dataFirstName:""}},computed:{socialID:function(){return this.$auth.user.sub},firstName:{get:function(){return this.$store.state.user.firstName},set:function(t){this.$store.commit("firstName",t)}},lastName:{get:function(){return this.$store.state.user.lastName},set:function(t){this.$store.commit("lastName",t)}},email:{get:function(){return this.$store.state.user.email},set:function(t){this.$store.commit("email",t)}},tel:{get:function(){return this.$store.state.user.tel},set:function(t){this.$store.commit("tel",t)}}},updated:function(){this.$store.commit("showContactInfo",!0)},methods:{updateInfo:function(){if(""===this.socialID||""===this.firstName||""===this.lastName||""===this.email||""===this.tel)alert("Fyll i alla fält");else{this.$store.state.showContactInfo=!1;var body=JSON.stringify({socialID:this.socialID,firstName:this.firstName,lastName:this.lastName,email:this.email,tel:this.tel});fetch("http://localhost:7777/updateuser",{method:"post",headers:{"Content-Type":"application/json"},body:body}).then((function(t){return t.json()}))}}}},r=(o(374),o(2)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"full-screen",attrs:{id:"contact-information-screen"}},[o("p",[t._v("Förnamn")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],attrs:{type:"text",name:"firstName"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}}),t._v(" "),o("p",[t._v("Efternamn")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],attrs:{type:"text",name:"lastName"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}}),t._v(" "),o("p",[t._v("Email")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),o("p",[t._v("Telefonnummer")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.tel,expression:"tel"}],attrs:{type:"text",name:"tel"},domProps:{value:t.tel},on:{input:function(e){e.target.composing||(t.tel=e.target.value)}}}),t._v(" "),o("div"),t._v(" "),o("br"),t._v(" "),o("button",{on:{click:t.updateInfo}},[t._v("Spara uppgifter")])])}),[],!1,null,"537babf5",null);e.default=component.exports}}]);
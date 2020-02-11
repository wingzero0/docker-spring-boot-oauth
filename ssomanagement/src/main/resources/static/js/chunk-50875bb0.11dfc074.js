(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50875bb0"],{5899:function(e,a){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,a,t){var s=t("1d80"),r=t("5899"),o="["+r+"]",n=RegExp("^"+o+o+"*"),i=RegExp(o+o+"*$"),p=function(e){return function(a){var t=String(s(a));return 1&e&&(t=t.replace(n,"")),2&e&&(t=t.replace(i,"")),t}};e.exports={start:p(1),end:p(2),trim:p(3)}},"58d1":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("router-link",{staticClass:"ssonav",attrs:{to:{name:"appUserList"}}},[t("ArrowLeftBold",{staticClass:"icon-2x"}),e._v(e._s(e.appId)+" ")],1)],1)]),t("form",[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"username"}},[e._v("Username")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.appUser.username,expression:"appUser.username"}],staticClass:"form-control",attrs:{type:"text",id:"username"},domProps:{value:e.appUser.username},on:{input:function(a){a.target.composing||e.$set(e.appUser,"username",a.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"displayName"}},[e._v("Display Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.appUser.displayName,expression:"appUser.displayName"}],staticClass:"form-control",attrs:{type:"text",id:"displayName"},domProps:{value:e.appUser.displayName},on:{input:function(a){a.target.composing||e.$set(e.appUser,"displayName",a.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"password"}},[e._v("password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.appUser.password,expression:"appUser.password"}],staticClass:"form-control",attrs:{type:"password",id:"password"},domProps:{value:e.appUser.password},on:{input:function(a){a.target.composing||e.$set(e.appUser,"password",a.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"password"}},[e._v("password (again)")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.appUser.passwordAgain,expression:"appUser.passwordAgain"}],staticClass:"form-control",attrs:{type:"password",id:"password"},domProps:{value:e.appUser.passwordAgain},on:{input:function(a){a.target.composing||e.$set(e.appUser,"passwordAgain",a.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"email"}},[e._v("email")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.appUser.email,expression:"appUser.email"}],staticClass:"form-control",attrs:{type:"email",id:"email"},domProps:{value:e.appUser.email},on:{input:function(a){a.target.composing||e.$set(e.appUser,"email",a.target.value)}}})]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("a",{staticClass:"btn btn-primary",attrs:{href:"#",role:"button"},on:{click:e.save}},[e._v("Save")]),t("router-link",{staticClass:"btn btn-default",attrs:{role:"button",to:{name:"appUserList"}}},[e._v(" Cancel ")])],1)]),e._l(e.errors,(function(a,s){return t("div",{key:s,staticClass:"row"},[t("div",{staticClass:"col-12 text-danger"},[e._v(" "+e._s(a)+" ")])])}))],2)])},r=[],o=t("bc3a"),n=t.n(o),i=t("a111"),p=(t("f9e3"),t("e85b")),l={name:"AppRoleForm",data:function(){return{appId:null,appUser:{username:null,displayName:null,password:null,passwordAgain:null,email:null},axiosConfig:{headers:{},data:{}},errors:[]}},mounted:function(){var e=this;Object(i["a"])().then((function(a){e.axiosConfig=a,e.fetchRecord()}))},methods:{fetchRecord:function(){var e=this,a=this.$route.params.id;"new"!==a&&n.a.get("api/appUser/"+a,e.axiosConfig).then((function(a){console.log(a),e.appUser=a.data,e.appUser.password=null})).catch((function(e){console.log(e)}))},save:function(e){e.preventDefault();var a=this;a.checkForm(),a.errors.length>0||n.a.post("api/appUser",a.appUser,a.axiosConfig).then((function(e){console.log(e.data),a.$router.push({name:"appUserList"})})).catch((function(e){console.log(e)}))},checkForm:function(){this.errors=[],""!==this.appUser.username&&null!==this.appUser.username||this.errors.push("username could not empty"),""!==this.appUser.displayName&&null!==this.appUser.displayName||this.errors.push("displayName could not empty"),""!==this.appUser.email&&null!==this.appUser.email||this.errors.push("email could not empty"),null!==this.appUser.password&&""!==this.appUser.password&&this.appUser.password!==this.appUser.passwordAgain&&this.errors.push("password not match");var e=this.$route.params.id;"new"!==e||null!==this.appUser.password&&""!==this.appUser.password||this.errors.push("password cannot be empty")}},components:{ArrowLeftBold:p["a"]},watch:{$route:function(){this.appUserRole={appId:null,username:null,appRole:null},this.fetchRecord()}}},c=l,u=(t("ca4c"),t("2877")),d=Object(u["a"])(c,s,r,!1,null,null,null);a["default"]=d.exports},7156:function(e,a,t){var s=t("861d"),r=t("d2bb");e.exports=function(e,a,t){var o,n;return r&&"function"==typeof(o=a.constructor)&&o!==t&&s(n=o.prototype)&&n!==t.prototype&&r(e,n),e}},a111:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var s=t("bc3a"),r=t.n(s),o=function(){var e={headers:{},data:{}};return e.headers["Accept"]="application/json",e.headers["Content-Type"]="application/json",r.a.get("api/csrf-token",e).then((function(a){return console.log(a),e.headers[a.data.csrf_header]=a.data.csrf_token,e})).catch((function(e){return console.log(e),null}))}},a9e3:function(e,a,t){"use strict";var s=t("83ab"),r=t("da84"),o=t("94ca"),n=t("6eeb"),i=t("5135"),p=t("c6b6"),l=t("7156"),c=t("c04e"),u=t("d039"),d=t("7c73"),f=t("241c").f,m=t("06cf").f,v=t("9bf2").f,h=t("58a8").trim,g="Number",w=r[g],U=w.prototype,b=p(d(U))==g,C=function(e){var a,t,s,r,o,n,i,p,l=c(e,!1);if("string"==typeof l&&l.length>2)if(l=h(l),a=l.charCodeAt(0),43===a||45===a){if(t=l.charCodeAt(2),88===t||120===t)return NaN}else if(48===a){switch(l.charCodeAt(1)){case 66:case 98:s=2,r=49;break;case 79:case 111:s=8,r=55;break;default:return+l}for(o=l.slice(2),n=o.length,i=0;i<n;i++)if(p=o.charCodeAt(i),p<48||p>r)return NaN;return parseInt(o,s)}return+l};if(o(g,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var N,y=function(e){var a=arguments.length<1?0:e,t=this;return t instanceof y&&(b?u((function(){U.valueOf.call(t)})):p(t)!=g)?l(new w(C(a)),t,y):C(a)},_=s?f(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;_.length>A;A++)i(w,N=_[A])&&!i(y,N)&&v(y,N,m(w,N));y.prototype=U,U.constructor=y,n(r,g,y)}},ca4c:function(e,a,t){"use strict";var s=t("e322"),r=t.n(s);r.a},e322:function(e,a,t){},e85b:function(e,a,t){"use strict";var s=function(e,a){var t=a._c;return t("span",a._g({staticClass:"material-design-icon arrow-left-bold-icon",class:[a.data.class,a.data.staticClass],attrs:{"aria-hidden":a.props.decorative,"aria-label":a.props.title,role:"img"}},a.listeners),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:a.props.fillColor,width:a.props.size,height:a.props.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M20,9V15H12V19.84L4.16,12L12,4.16V9H20Z"}},[t("title",[a._v(a._s(a.props.title))])])])])},r=[],o=(t("a9e3"),{name:"ArrowLeftBoldIcon",props:{title:{type:String,default:"Arrow Left Bold icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}),n=o,i=t("2877"),p=Object(i["a"])(n,s,r,!0,null,null,null);a["a"]=p.exports}}]);
//# sourceMappingURL=chunk-50875bb0.11dfc074.js.map
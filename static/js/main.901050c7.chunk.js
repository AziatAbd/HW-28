(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{13:function(e,t,n){e.exports={auth:"AuthForm_auth__1hCMc",control:"AuthForm_control__3pJxO",actions:"AuthForm_actions__3Wyly",toggle:"AuthForm_toggle__T-oUY"}},20:function(e,t,n){e.exports={form:"ProfileForm_form__pkszn",control:"ProfileForm_control__IXe5s",action:"ProfileForm_action__3RvA0"}},22:function(e,t,n){e.exports={header:"MainNavigation_header__8XOfs",logo:"MainNavigation_logo__VxZi0"}},24:function(e,t,n){e.exports={profile:"UserProfile_profile__25eXV"}},25:function(e,t,n){e.exports={starting:"StartingPageContent_starting__36Ou-"}},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var o=n(23),c=n.n(o),s=n(7),r=(n(30),n(2)),i=n(0),a=n(22),l=n.n(a),j=n(3),u=function(){return Object(j.jsxs)("header",{className:l.a.header,children:[Object(j.jsx)(s.b,{to:"/",children:Object(j.jsx)("div",{className:l.a.logo,children:"React Auth"})}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/auth",children:"Login"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/profile",children:"Profile"})}),Object(j.jsx)("li",{children:Object(j.jsx)("button",{children:"Logout"})})]})})]})},h=function(e){return Object(j.jsxs)(i.Fragment,{children:[Object(j.jsx)(u,{}),Object(j.jsx)("main",{children:e.children})]})},d=n(20),b=n.n(d),O=function(){return Object(j.jsxs)("form",{className:b.a.form,children:[Object(j.jsxs)("div",{className:b.a.control,children:[Object(j.jsx)("label",{htmlFor:"new-password",children:"New Password"}),Object(j.jsx)("input",{type:"password",id:"new-password"})]}),Object(j.jsx)("div",{className:b.a.action,children:Object(j.jsx)("button",{children:"Change Password"})})]})},x=n(24),f=n.n(x),p=function(){return Object(j.jsxs)("section",{className:f.a.profile,children:[Object(j.jsx)("h1",{children:"Your User Profile"}),Object(j.jsx)(O,{})]})},m=n(4),g="AIzaSyCS1ZcSztk3LMnMcCS9TtodIZ4Ba9-TSo4",_=n(13),y=n.n(_),v=function(){var e=Object(i.useState)(!0),t=Object(m.a)(e,2),n=t[0],o=t[1],c=Object(i.useRef)(),s=Object(i.useRef)(),a=Object(r.l)();return Object(j.jsxs)("section",{className:y.a.auth,children:[Object(j.jsx)("h1",{children:n?"Login":"Sign Up"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=c.current.value,o=s.current.value;n?fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat(g),{method:"POST",body:JSON.stringify({email:t,password:o,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){e.ok?(console.log(e.json()),a("/profile")):e.json().then((function(e){console.log(e),alert("first go through the registration")}))})):fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat(g),{method:"POST",body:JSON.stringify({email:t,password:o,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){e.ok?(console.log(e.json()),a("/profile")):e.json().then((function(e){console.log(e),alert("this email is already in use, try logging in")}))}))},children:[Object(j.jsxs)("div",{className:y.a.control,children:[Object(j.jsx)("label",{htmlFor:"email",children:"Your Email"}),Object(j.jsx)("input",{type:"email",id:"email",required:!0,ref:c})]}),Object(j.jsxs)("div",{className:y.a.control,children:[Object(j.jsx)("label",{htmlFor:"password",children:"Your Password"}),Object(j.jsx)("input",{type:"password",id:"password",required:!0,ref:s})]}),Object(j.jsxs)("div",{className:y.a.actions,children:[Object(j.jsx)("button",{children:n?"Login":"Create Account"}),Object(j.jsx)("button",{type:"button",className:y.a.toggle,onClick:function(){o((function(e){return!e}))},children:n?"Create new account":"Login with existing account"})]})]})]})},w=function(){return Object(j.jsx)(v,{})},N=n(25),S=n.n(N),k=function(){return Object(j.jsx)("section",{className:S.a.starting,children:Object(j.jsx)("h1",{children:"Welcome on Board!"})})},P=function(){return Object(j.jsx)(k,{})};var F=function(){return Object(j.jsx)(h,{children:Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{path:"/",element:Object(j.jsx)(P,{})}),Object(j.jsx)(r.a,{path:"/auth",element:Object(j.jsx)(w,{})}),Object(j.jsx)(r.a,{path:"/profile",element:Object(j.jsx)(p,{})})]})})};c.a.render(Object(j.jsx)(s.a,{children:Object(j.jsx)(F,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.901050c7.chunk.js.map
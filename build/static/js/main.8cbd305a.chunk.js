(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{52:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(27),c=n.n(r),i=n(8),o=n.n(i),l=n(10),u=n(7),j=n(11),b=n.n(j),p=n(9),d=n(62),h=n(61),v=(n(52),n(18)),O=(n(53),n(2)),f=function(e){var t=e.classListArray,n=e.auth,s=6e5,r=Object(a.useState)(Object(O.jsx)(O.Fragment,{})),c=Object(u.a)(r,2),i=c[0],j=c[1],p=Object(a.useState)(""),d=Object(u.a)(p,2),h=d[0],f=d[1],x=Object(a.useState)(!1),g=Object(u.a)(x,2),y=(g[0],g[1]),m=Object(a.useState)(!1),w=Object(u.a)(m,2),S=w[0],I=w[1],k=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"https://api.alive.university/api/v1/join-session",null===t||void 0===t||t.forEach(function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("https://api.alive.university/api/v1/join-session",t,n);case 3:a=e.sent,console.log(a.data),!0===a.data.status?(window.open(a.data.data,"_blank"),f(t.subject_name_short),y(!0),I(!0)):console.log("".concat(t.subject_name_short," has not yet started ")),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A="";return Object(a.useEffect)((function(){j(t&&t!==[]?null===t||void 0===t?void 0:t.map((function(e,t){return Object(O.jsx)(v.a.Item,{variant:e.subject_name_short===h?"success":"",children:"".concat(null===e||void 0===e?void 0:e.subject_name_short," |  Time : ").concat(e.interval," ")},t)})):"NO CLASSES FOUND")}),[t,h]),Object(a.useEffect)((function(){setInterval((function(){S&&y(!1)}),s)}),[S]),Object(a.useEffect)((function(){return t&&(k(),A=setInterval((function(){k()}),s)),function(){console.log("Interval Disabled",A),clearInterval(A)}}),[t]),Object(O.jsx)(v.a,{children:i})},x=n(17);var g=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(""),c=Object(u.a)(r,2),i=c[0],j=c[1],v=Object(a.useState)(""),g=Object(u.a)(v,2),y=g[0],m=g[1],w=Object(a.useState)({}),S=Object(u.a)(w,2),I=S[0],k=S[1],A=Object(a.useState)([]),E=Object(u.a)(A,2),C=E[0],L=E[1],_=Object(a.useState)(!1),N=Object(u.a)(_,2),T=N[0],D=N[1],R=Object(a.useState)(!1),U=Object(u.a)(R,2),F=U[0],G=U[1],z={headers:{Authorization:"Bearer ".concat(y)}},J=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.alive.university/api/v1/login/erp",t={username:n.toLowerCase(),password:i,usertype:"STUDENT"},e.prev=2,e.next=5,b.a.post("https://api.alive.university/api/v1/login/erp",t);case 5:a=e.sent,console.log(a.data),a.data.status?G(!0):G(!1),m(a.data.token),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log("LOGIN ERROR"+e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.alive.university/api/v1/user",e.prev=1,e.next=4,b.a.get("https://api.alive.university/api/v1/user",z);case 4:t=e.sent,console.log(t.data.data),k(t.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("GET USER DATA ERROR"+e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.alive.university/api/v1/getrooms",t={org_code:(null===I||void 0===I?void 0:I.institute_name_short)||""},e.prev=2,e.next=5,b.a.post("https://api.alive.university/api/v1/getrooms",t,z);case 5:n=e.sent,console.log(n.data.data),a=n.data.data,L(a),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(2);case 13:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){return function(){}}),[]),Object(a.useEffect)((function(){return B(),function(){}}),[y]),Object(a.useEffect)((function(){return P(),function(){}}),[I,T]),Object(O.jsxs)(x.a,{children:[" ",Object(O.jsxs)("div",{style:{border:"1px solid black",padding:50},children:[Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly"},children:["   ",Object(O.jsx)("img",{src:"/logo.png",width:250})]}),Object(O.jsx)("div",{className:"Login",children:Object(O.jsxs)(p.a,{onSubmit:function(e){e.preventDefault(),J()},children:[Object(O.jsxs)(p.a.Group,{size:"lg",controlId:"email",children:[Object(O.jsx)(p.a.Label,{children:"AUID"}),Object(O.jsx)(p.a.Control,{autoFocus:!0,type:"text",value:n,onChange:function(e){return s(e.target.value)}})]}),Object(O.jsxs)(p.a.Group,{size:"lg",controlId:"password",children:[Object(O.jsx)(p.a.Label,{children:"Password"}),Object(O.jsx)(p.a.Control,{type:"password",value:i,onChange:function(e){return j(e.target.value)}})]}),Object(O.jsx)(d.a,{block:!0,size:"lg",type:"submit",disabled:!(n.length>0&&i.length>0),children:"Login"})]})}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},className:"Login",children:[Object(O.jsxs)("h3",{children:["LOGIN STATUS : ",F?"\u2714":"\u274c"]}),F&&Object(O.jsxs)(h.a,{"aria-label":"Basic example",children:[Object(O.jsx)(d.a,{variant:"light",disabled:!0,children:" Start Auto Class Join"}),Object(O.jsx)(d.a,{variant:T?"primary":"secondary",disabled:!!T,onClick:function(e){D(!0)},children:"ON"}),Object(O.jsx)(d.a,{variant:T?"secondary":"primary",disabled:!T,onClick:function(e){D(!1)},children:"OFF"})]})]}),T?Object(O.jsx)(f,{classListArray:C,auth:z}):"AutoAlive is disabled. Login and Toggle on the switch to search for classes ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)("p",{children:[Object(O.jsx)("h5",{children:"DESCRIPTION:"}),"1.Use ALIVE AUID and Password to login",Object(O.jsx)("br",{}),"2.Login and Toggle switch to ON to start AutoAlive",Object(O.jsx)("br",{}),"3.It will automatically Join Ongoing Class every 10 minutes i.e even if teacher restarts the session you ll be able to join it within 10 minutes of restart",Object(O.jsx)("br",{}),"4.Its still an apha version of the app so don't completly rely on this",Object(O.jsx)("br",{}),"5.Keep this tab running in  chrome browser ",Object(O.jsx)("br",{}),"6.Turn off auto sleep timer in your device settings ",Object(O.jsx)("br",{}),"7.You ll have to select the join audio option!! Its just a webpage after all.",Object(O.jsx)("br",{})]}),Object(O.jsx)("h3",{children:"Not Charging any thing for the service.. Any generous donation will get me a cup of coffee! \u2764"}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly"},children:["   ",Object(O.jsx)("img",{src:"/payment.jpeg",width:400})]})]})]})};c.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.8cbd305a.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),c=t.n(l),o=(t(69),t(63)),m=t(21),i=t(105),u=t(55),s=(t(23),function(e){var a=e.udaclist,t=e.deleteUdac,n=e.updateUdac;return r.a.createElement(i.a,{hover:!0,responsive:!0,bordered:!0,size:"md"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,a.length>0?a.map(function(e,a){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,a+1),r.a.createElement("td",null,e.name),r.a.createElement("td",null,r.a.createElement(u.a,{onClick:function(){return n(e.id)},variant:"light",className:"text-info",size:"sm"},"Edit (Not yet working)"),r.a.createElement(u.a,{onClick:function(){return t(e.id)},variant:"light",className:"text-danger",size:"sm"},"Delete")))}):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:3},"No udacs"))))}),d=t(112),E=function(e){return r.a.createElement("div",null,r.a.createElement(d.a,{onSubmit:function(a){a.preventDefault();var t=a.target.formUdacName.value,n=a.target.formImageLink.value;if(""!==t&&""!==n){var r={name:t,link:n};e.addUdac(r),a.target.formUdacName.value="",a.target.formImageLink.value=""}else alert("Put some values damn it!")}},r.a.createElement(d.a.Group,{controlId:"formUdacName"},r.a.createElement(d.a.Label,null,"Udac Name"),r.a.createElement(d.a.Control,{type:"text",placeholder:"Enter udac name"})),r.a.createElement(d.a.Group,{controlId:"formImageLink"},r.a.createElement(d.a.Label,null,"Image Link"),r.a.createElement(d.a.Control,{type:"text",placeholder:"Enter image link"})),r.a.createElement(u.a,{variant:"primary",type:"submit"},"Submit")))},f=t(106),p=t(29),v=function(e){var a=e.udacs,t=e.imagePreview;return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(f.a,{id:"dropdown-basic-button",title:"Please Choose Udac",onSelect:function(e){return t(e)}},a.length>0?a.map(function(e){return r.a.createElement(p.a.Item,{key:e.id,eventKey:e.id},e.name)}):r.a.createElement("p",null,"No Udacs")))},g=t(113),h=t(107),b=t(60),w=t.n(b),y=function(e){var a=e.link;return r.a.createElement("div",null,a.length>0?r.a.createElement(g.a,null,r.a.createElement(g.a.Body,null,r.a.createElement(g.a.Title,{className:"text-center"},r.a.createElement("h4",null,a[0].name))),a[0].link.includes("https")?r.a.createElement(g.a.Img,{variant:"bottom",src:a[0].link}):r.a.createElement("p",{className:"text-center text-secondary"},"Preview not available or link might not working")):r.a.createElement(h.a,{src:w.a,fluid:!0}))},N=t(108),k=t(109),x=t(56),U=t(110),L=t(111),I=t(40),S=t.n(I);t(81);S.a.initializeApp({apiKey:"AIzaSyAWPJu22l5s8wKUxWul0GvO1LEN8h2cKKQ",authDomain:"udac-lore.firebaseapp.com",databaseURL:"https://udac-lore.firebaseio.com",projectId:"udac-lore",storageBucket:"",messagingSenderId:"50825490719",appId:"1:50825490719:web:0112aed5cc3db3fd"});var j=S.a;var O=function(){var e=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)(function(){var e=j.firestore().collection("udacs").onSnapshot(function(e){var a=e.docs.map(function(e){return Object(o.a)({id:e.id},e.data())});r(a)});return function(){return e()}},[]),t}(),a=Object(n.useState)([]),t=Object(m.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)(!1),f=Object(m.a)(i,2),p=f[0],g=f[1],h=Object(n.useState)(!1),b=Object(m.a)(h,2),w=b[0],I=b[1],S=Object(n.useState)({}),O=Object(m.a)(S,2),C=O[0],P=O[1],A=function(){return g(!1)};return r.a.createElement(N.a,{className:"App"},r.a.createElement(k.a,null,r.a.createElement(x.a,{md:11},r.a.createElement("h3",{className:"text-secondary "},r.a.createElement("span",{className:"text-primary logo"},"Udac")," Lore ",w?r.a.createElement(U.a,{variant:"secondary"},"Admin"):"")),r.a.createElement(x.a,{md:1},w?r.a.createElement(u.a,{variant:"outline-secondary",onClick:function(){I(!1)},size:"sm"},"Logout"):r.a.createElement(u.a,{variant:"outline-light",onClick:function(){return g(!0)},size:"sm"},"Login"),r.a.createElement(L.a,{show:p,onHide:A},r.a.createElement(L.a.Header,{closeButton:!0},r.a.createElement(L.a.Title,null,"Login")),r.a.createElement(L.a.Body,null,r.a.createElement(d.a,{onSubmit:function(e){e.preventDefault(),P({userName:"admin",password:"!udacloreadmiN01"});var a=e.target.formUsername.value,t=e.target.formPassword.value;a.trim()===C.userName&&t.trim()===C.password?(alert("Nice! Login Success"),A(),I(!0)):alert("Wrong Password! Damn it!")}},r.a.createElement(d.a.Group,{controlId:"formUsername"},r.a.createElement(d.a.Label,null,"Username"),r.a.createElement(d.a.Control,{type:"text",placeholder:"Enter username"})),r.a.createElement(d.a.Group,{controlId:"formPassword"},r.a.createElement(d.a.Label,null,"Password"),r.a.createElement(d.a.Control,{type:"password",placeholder:"Password"})),r.a.createElement(u.a,{variant:"primary",type:"submit"},"Submit")))))),r.a.createElement("hr",null),w?r.a.createElement("div",null,r.a.createElement(k.a,null,r.a.createElement(x.a,{md:4,xs:12},r.a.createElement("div",{className:"flex-large"},r.a.createElement("h4",{className:"text-secondary"},"Add Udac here"),r.a.createElement(E,{addUdac:function(e){j.firestore().collection("udacs").add(e)}}))),r.a.createElement(x.a,{md:8,xs:12},r.a.createElement("div",{className:"flex-large"},r.a.createElement("h4",{className:"text-secondary"},"UDAC List"),r.a.createElement(s,{udaclist:e,deleteUdac:function(e){j.firestore().collection("udacs").doc(e).delete()},updateUdac:function(e){alert("not yet working damn it!")}})))),r.a.createElement("hr",null)):"",r.a.createElement(k.a,null,r.a.createElement(x.a,{xs:12,md:12},r.a.createElement("div",{className:"preview-container"},r.a.createElement("div",{className:"preview-header text-center"},r.a.createElement("h4",{className:"text-secondary "},"Learn any UDAC anytime"),r.a.createElement(v,{udacs:e,imagePreview:function(a){c(e.filter(function(e){return e.id==a}))}})),r.a.createElement("div",{className:"preview-body"},r.a.createElement(y,{link:l}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},23:function(e,a,t){},60:function(e,a,t){e.exports=t.p+"static/media/cover2.4426945d.svg"},64:function(e,a,t){e.exports=t(102)},69:function(e,a,t){}},[[64,1,2]]]);
//# sourceMappingURL=main.48ad1482.chunk.js.map
(this.webpackJsonpaddnewoptions=this.webpackJsonpaddnewoptions||[]).push([[0],{15:function(e,a,t){e.exports=t(25)},20:function(e,a,t){},25:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),o=t.n(r),c=(t(20),t(27)),m=t(26),i=t(13),s=t(30),u=t(5),E=t(29),d=t(14),b=function(e){return l.a.createElement(E.a.Row,null,l.a.createElement(E.a.Group,{as:m.a},l.a.createElement(i.a,{sm:"10"},l.a.createElement(E.a.Control,{plaintext:!0,readOnly:!0,defaultValue:e.item,name:e.item})),l.a.createElement(i.a,{sm:"2"},l.a.createElement(s.a,{variant:"outline-danger",onClick:function(){return e.removeHobbies(e.item)}},l.a.createElement(d.a,null)))))},p=function(e,a){switch(a.type){case"REMOVE_HOBBIES":return e.filter((function(e){return e!==a.payload}));case"ADD_HOBBIES":return e.concat(a.payload);case"RESET":return a.payload;default:return e}},h=t(28),y=function(e){var a=e.hobbiesShow;return l.a.createElement(c.a,{className:"mt-5"},l.a.createElement(m.a,null,l.a.createElement(i.a,null,l.a.createElement(h.a,null,a.map((function(e){var a="./image/"+e.toString().replace(/ +/g,"")+".jpg";return l.a.createElement(h.a.Item,{className:"text-center",key:e},l.a.createElement("span",{className:"showHobbies  showhobbies-item"},e),l.a.createElement("span",{className:"showHobbies  showhobbies-item"},l.a.createElement("img",{src:a,alt:"Logo"})))}))))))},f=function(e){var a=e.dataHobbies,t=Object(n.useReducer)(p,a),r=Object(u.a)(t,2),o=r[0],c=r[1],d=Object(n.useReducer)(p,[]),h=Object(u.a)(d,2),f=h[0],g=h[1],v=Object(n.useState)([]),w=Object(u.a)(v,2),S=w[0],O=w[1],B=Object(n.useState)(!0),k=Object(u.a)(B,2),H=k[0],N=k[1],R=function(e){document.getElementById("results");e.preventDefault(),O(f),C()},j=function(e){var a=e;g({type:"REMOVE_HOBBIES",payload:a}),c({type:"ADD_HOBBIES",payload:a})},C=function(){g({type:"RESET",payload:[]}),c({type:"RESET",payload:a})};return Object(n.useEffect)((function(){N(f<=0)}),[f]),l.a.createElement("div",null,l.a.createElement(E.a,{onSubmit:R},l.a.createElement(E.a.Control,{as:"select",className:"mr-sm-2",id:"inlineFormCustomSelect"},l.a.createElement("option",{value:"neutral"},"Choose..."),o.map((function(e,a){return l.a.createElement("option",{key:a,value:e},e)}))),l.a.createElement(m.a,null,l.a.createElement(i.a,{sm:4},l.a.createElement(s.a,{variant:"outline-primary",onClick:function(){var e=document.getElementById("inlineFormCustomSelect"),a=e.options[e.selectedIndex].value;c({type:"REMOVE_HOBBIES",payload:a}),"neutral"!==a&&g({type:"ADD_HOBBIES",payload:a})},className:"my-4"},"Add hobbies")),l.a.createElement(i.a,{sm:4},l.a.createElement(s.a,{disabled:H,variant:"outline-primary",onClick:C,className:"my-4"},"Reset all")),l.a.createElement(i.a,{sm:4},l.a.createElement(s.a,{disabled:H,variant:"outline-primary",onClick:R,className:"my-4"},"Submit"))),f.map((function(e){return l.a.createElement(b,{key:e,item:e,removeHobbies:j})}))),l.a.createElement("div",{className:"m-4"},l.a.createElement("h5",null,"Your Hobbies Are:"),l.a.createElement(y,{hobbiesShow:S})))},g={hobbies:["Standup comedy","Photography","Making Music","Cooking","Programming","Drawing","Bowling","Dance"]};var v=function(){return l.a.createElement(c.a,{className:"mt-4"},l.a.createElement(m.a,null,l.a.createElement("a",{href:"https://github.com/janix374/Select-option-useReducer",target:"_blank"},"Link to code")),l.a.createElement(m.a,null,l.a.createElement(i.a,null,l.a.createElement("h2",null,"Your Hobbies")),l.a.createElement(i.a,null,l.a.createElement(s.a,{className:"mb-5",variant:"outline-primary",onClick:function(){window.location.reload()}},"Refresh Page"))),l.a.createElement(m.a,null,l.a.createElement(i.a,{className:"mt-4",md:12},l.a.createElement(f,{dataHobbies:g.hobbies}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(24);o.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.79392ba7.chunk.js.map
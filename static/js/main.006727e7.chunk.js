(this.webpackJsonpwelcome=this.webpackJsonpwelcome||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(6),s=n.n(r),o=(n(12),n(7)),i=n(4),u=(n(13),n(14),n(0));var l=function(e){var t=e.array;return a.a.useEffect((function(){if(t.length>0){var n=t[t.length-1];"robot"!==n.author&&setTimeout((function(){e.updateData(n.text.split("").reverse().join(""),"robot")}),1500)}!function(){var e=document.getElementsByClassName("messagebox")[0];e.scrollTop=e.scrollHeight}()})),t.map((function(e){return Object(u.jsxs)("div",{className:"robot"===e.author?"mes left":"mes",children:[Object(u.jsx)("big",{children:e.text}),Object(u.jsx)("br",{}),Object(u.jsxs)("small",{children:[e.author,"  ",e.curtime]})]})}))};n(16);var j=function(e){var t=e.name,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],s=a[1],o=function(){e.updateData(r,t),s("")};return Object(u.jsxs)("div",{className:"messageinput",children:[Object(u.jsx)("input",{value:r,onKeyDown:function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||o()},onChange:function(e){s(e.target.value)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}),Object(u.jsx)("button",{onClick:o,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})};var d=function(e){var t=Object(c.useState)([]),n=Object(i.a)(t,2),a=n[0],r=n[1],s=function(e,t){r((function(n){return[].concat(Object(o.a)(n),[{text:e,author:t,curtime:(new Date).toLocaleTimeString()}])}))};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{className:"App-header header",children:"My messenger"}),Object(u.jsx)("div",{className:"messagebox",children:Object(u.jsx)(l,{updateData:s,array:a})}),Object(u.jsx)("div",{children:Object(u.jsx)(j,{updateData:s,name:e.name})})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(d,{name:"\u0412\u0430\u043b\u0435\u0440\u0438\u0439"})}),document.getElementById("root")),b()}],[[17,1,2]]]);
//# sourceMappingURL=main.006727e7.chunk.js.map
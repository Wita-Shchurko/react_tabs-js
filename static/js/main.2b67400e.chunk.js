(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),i=n(5),d=n(1),s=(n(10),n(11),n(12),n(4)),b=n.n(s),r=n(0),o=function(t){var e=t.tabs,n=t.selectedTabId,c=t.onTabSelected,a=e.find((function(t){return t.id===n})).id||e[0].id,i=e.find((function(t){return t.id===a})).content;return Object(r.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:e.map((function(t){return Object(r.jsx)("li",{"data-cy":"Tab",className:b()({"is-active":t.id===a}),children:Object(r.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){a!==t.id&&c(t)},children:t.title})},t.id)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:i})]})},l=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}];var j=function(){var t=Object(d.useState)(l[0].id),e=Object(i.a)(t,2),n=e[0],c=e[1],a=function(t,e){var n=e.selectedTabId;return t.find((function(t){return t.id===n}))}(l,{selectedTabId:n})||l[0];return Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)("h1",{className:"title",children:"Selected tab is ".concat(a.title)}),Object(r.jsx)(o,{tabs:l,selectedTabId:n,onTabSelected:function(t){c(t.id)}})]})};a.a.render(Object(r.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2b67400e.chunk.js.map
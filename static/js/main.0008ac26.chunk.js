(this["webpackJsonpicodeff-blog"]=this["webpackJsonpicodeff-blog"]||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),i=c(4),l=c.n(i),r=(c(10),function(){return Object(n.jsxs)("nav",{className:"navbar",children:[Object(n.jsx)("h1",{children:"icodeff Blog"}),Object(n.jsxs)("div",{className:"links",children:[Object(n.jsx)("a",{href:"/",children:"Home"}),Object(n.jsx)("a",{href:"/create",children:"Create New Blog"})]})]})}),o=c(2),j=function(e){var t=e.blogs,c=e.title;return Object(n.jsxs)("div",{className:"blog-list",children:[Object(n.jsx)("h2",{children:c}),t.map((function(e){return Object(n.jsxs)("div",{className:"blog-preview",children:[Object(n.jsx)("h2",{children:e.title}),Object(n.jsxs)("p",{children:["Written by ",e.author]})]},e.id)}))]})},a=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),c=t[0],i=t[1],l=Object(s.useState)(!0),r=Object(o.a)(l,2),a=r[0],b=r[1],h=Object(s.useState)(null),d=Object(o.a)(h,2),u=d[0],O=d[1];return Object(s.useEffect)((function(){setTimeout((function(){fetch("http://localhost:8000/blogs").then((function(e){if(console.log(e),!e.ok)throw Error("There is an error");return e.json()})).then((function(e){i(e),b(!1),O(null)})).catch((function(e){console.log(e.message),O(e.message),b(!1)}))}),1e3)}),[]),Object(n.jsxs)("div",{className:"home",children:[u&&Object(n.jsx)("div",{children:u}),a&&Object(n.jsx)("div",{children:"Loading..."}),c&&Object(n.jsx)(j,{blogs:c,title:"All Blogs"})]})};var b=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(r,{}),Object(n.jsx)("div",{className:"content",children:Object(n.jsx)(a,{})})]})};l.a.render(Object(n.jsx)(b,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.0008ac26.chunk.js.map
(this["webpackJsonpicodeff-blog"]=this["webpackJsonpicodeff-blog"]||[]).push([[0],{23:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c(16),l=c.n(s),i=(c(23),c(7)),a=function(){return Object(n.jsxs)("nav",{className:"navbar",children:[Object(n.jsx)("h1",{children:"icodeff Blog"}),Object(n.jsxs)("div",{className:"links",children:[Object(n.jsx)(i.b,{to:"/",children:"Home"}),Object(n.jsx)(i.b,{to:"/create",children:"Create New Blog"})]})]})},o=function(e){var t=e.blogs,c=e.title;return Object(n.jsxs)("div",{className:"blog-list",children:[Object(n.jsx)("h2",{children:c}),t.map((function(e){return Object(n.jsx)("div",{className:"blog-preview",children:Object(n.jsxs)(i.b,{to:"/blogs/".concat(e.id),children:[Object(n.jsx)("h2",{children:e.title}),Object(n.jsxs)("p",{children:["Written by ",e.author]})]})},e.id)}))]})},j=c(8),b=function(e){var t=Object(r.useState)(null),c=Object(j.a)(t,2),n=c[0],s=c[1],l=Object(r.useState)(!0),i=Object(j.a)(l,2),a=i[0],o=i[1],b=Object(r.useState)(null),d=Object(j.a)(b,2),h=d[0],u=d[1];return Object(r.useEffect)((function(){var t=new AbortController;return setTimeout((function(){fetch(e,{signal:t.signal}).then((function(e){if(console.log(e),!e.ok)throw Error("There is an error");return e.json()})).then((function(e){s(e),o(!1),u(null)})).catch((function(e){"AbortError"===e.name?console.log("fetch aborted"):(o(!1),u(e.message))}))}),1e3),function(){return t.abort()}}),[e]),{data:n,isPending:a,error:h}},d=function(){var e=b("http://localhost:8000/blogs"),t=e.data,c=e.isPending,r=e.error;return Object(n.jsxs)("div",{className:"home",children:[r&&Object(n.jsx)("div",{children:r}),c&&Object(n.jsx)("div",{children:"Loading..."}),t&&Object(n.jsx)(o,{blogs:t,title:"All Blogs"})]})},h=c(2),u=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),c=t[0],s=t[1],l=Object(r.useState)(""),i=Object(j.a)(l,2),a=i[0],o=i[1],b=Object(r.useState)("amby"),d=Object(j.a)(b,2),u=d[0],O=d[1],x=Object(r.useState)(!1),g=Object(j.a)(x,2),f=g[0],v=g[1],m=Object(h.f)();return Object(n.jsxs)("div",{className:"create",children:[Object(n.jsx)("h2",{children:"Create Blog"}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:c,body:a,author:u};console.log(t),v(!0),fetch("http://localhost:8000/blogs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){console.log("new blog added"),v(!1),m.push("/")}))},children:[Object(n.jsx)("label",{children:"Blog title:"}),Object(n.jsx)("input",{type:"text",name:"title",value:c,onChange:function(e){return s(e.target.value)},required:!0}),Object(n.jsx)("label",{children:"Blog title:"}),Object(n.jsx)("textarea",{name:"title",value:a,onChange:function(e){return o(e.target.value)},required:!0}),Object(n.jsx)("label",{children:"BLog Author: "}),Object(n.jsxs)("select",{value:u,onChange:function(e){return O(e.target.value)},children:[Object(n.jsx)("option",{value:"mario",children:"mario"}),Object(n.jsx)("option",{value:"amby",children:"amby"})]}),!f&&Object(n.jsx)("button",{children:"Add Blog"}),f&&Object(n.jsx)("button",{disabled:!0,children:"Adding Blog..."})]})]})},O=function(){var e=Object(h.g)().id,t=b("http://localhost:8000/blogs/"+e),c=t.data,r=t.isPending,s=t.error;return Object(n.jsxs)("div",{className:"blog-details",children:[r&&Object(n.jsx)("div",{children:"Loading..."}),s&&Object(n.jsx)("div",{children:s}),c&&Object(n.jsxs)("article",{children:[Object(n.jsx)("h2",{children:c.title}),Object(n.jsxs)("p",{children:["Written by ",c.author]}),Object(n.jsx)("div",{children:c.body})]})]})};var x=function(){return Object(n.jsx)(i.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(a,{}),Object(n.jsx)("div",{className:"content",children:Object(n.jsxs)(h.c,{children:[Object(n.jsx)(h.a,{exact:!0,path:"/",children:Object(n.jsx)(d,{})}),Object(n.jsx)(h.a,{path:"/create",children:Object(n.jsx)(u,{})}),Object(n.jsx)(h.a,{path:"/blogs/:id",children:Object(n.jsx)(O,{})})]})})]})})};l.a.render(Object(n.jsx)(x,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.131d0233.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),c=(n(0),n(93)),l={id:"use-context-menu",title:"useContextMenu"},b={unversionedId:"api/use-context-menu",id:"api/use-context-menu",isDocsHomePage:!1,title:"useContextMenu",description:"The hook returns 2 methods:",source:"@site/docs/api/useContextMenu.md",slug:"/api/use-context-menu",permalink:"/react-contexify/api/use-context-menu",editUrl:"https://github.com/fkhadra/react-contexify-doc/edit/master/docs/api/useContextMenu.md",version:"current",sidebar:"someSidebar",previous:{title:"Submenu",permalink:"/react-contexify/api/submenu"},next:{title:"contextMenu",permalink:"/react-contexify/api/context-menu"}},o=[{value:"show",id:"show",children:[]},{value:"hideAll",id:"hideall",children:[]}],i={rightToc:o};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The hook returns 2 methods:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"show")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"hideAll"))),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Param"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Descripton"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"id"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string ","|"," number"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Unique id to identify the menu. Can be overriden on each call")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"props"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Passed to the ",Object(c.b)("inlineCode",{parentName:"td"},"Item")," onClick callback. Can be overriden on each call")))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import { useContextMenu } from \'react-contexify\';\n\nconst { show, hideAll } = useContextMenu({ \n  id: "menuId",\n  props: {\n    key: "value"\n  }\n});\n')),Object(c.b)("h2",{id:"show"},"show"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Param"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Descripton"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"event"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2705"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DOM event"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The event used to display the menu")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"id"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string ","|"," number"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Unique id to identify the menu. Can be overriden on each call")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"props"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Passed to the ",Object(c.b)("inlineCode",{parentName:"td"},"Item")," onClick callback. Override props defined during initialization if any")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"position"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"{ x: number, y: number }"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Use a custom position for the ",Object(c.b)("inlineCode",{parentName:"td"},"Menu"))))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'import { useContextMenu } from \'react-contexify\';\n\nconst { show, hideAll } = useContextMenu({ \n  id: "menuId",\n  props: {\n    key: "value"\n  }\n});\n\n// basic usage\nfunction displayMenu(e: React.MouseEvent) {\n  show(e)\n}\n\n// multiple menu handling\nfunction displayMenu(e: React.MouseEvent) {\n  show(e, {\n    id: "another-menu-id"\n  })\n}\n\n// custom position\nfunction displayMenu(e: React.MouseEvent) {\n  show(e, {\n    position: {\n      x: 100,\n      y: 200\n    }\n  })\n}\n\n// pass props\nfunction displayMenu(e: React.MouseEvent) {\n  show(e, {\n    props: {\n      key: "value1",\n      foo: false\n    }\n  })\n}\n\n')),Object(c.b)("h2",{id:"hideall"},"hideAll"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { useContextMenu } from 'react-contexify';\n\nconst { show, hideAll } = useContextMenu({ \n  id: \"menuId\"\n});\n\n// hide all menus\nhideAll()\n")))}u.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,s=p["".concat(l,".").concat(m)]||p[m]||d[m]||c;return n?r.a.createElement(s,b(b({ref:t},i),{},{components:n})):r.a.createElement(s,b({ref:t},i))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=m;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var i=2;i<c;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),b=(n(0),n(93)),c={id:"menu",title:"Menu"},l={unversionedId:"api/menu",id:"api/menu",isDocsHomePage:!1,title:"Menu",description:"| Prop               | Required | Default | Type                            | Descripton                                                                                                                                           |",source:"@site/docs/api/Menu.md",slug:"/api/menu",permalink:"/react-contexify/api/menu",editUrl:"https://github.com/fkhadra/react-contexify-doc/edit/master/docs/api/Menu.md",version:"current",sidebar:"someSidebar",previous:{title:"Trigger the Menu outside of a component",permalink:"/react-contexify/trigger-the-menu-outside-of-react-compoent"},next:{title:"Item",permalink:"/react-contexify/api/item"}},i=[{value:'<a name="HTMLAttribute">HTMLAttribute</a>',id:"htmlattribute",children:[]}],o={rightToc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prop"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Descripton"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"id"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string ","|"," number"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Unique id to identify the menu")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"children"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ReactNode"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Any valid node which can be rendered")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"theme"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Theme is appended to ",Object(b.b)("ul",null,Object(b.b)("li",null,Object(b.b)("inlineCode",{parentName:"td"},"react-contexify__theme--${given theme}"))))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"animation"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"scale"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Animation appended to ",Object(b.b)("ul",null,Object(b.b)("li",null,Object(b.b)("inlineCode",{parentName:"td"},".react-contexify__will-enter--${given animation}")),Object(b.b)("li",null,Object(b.b)("inlineCode",{parentName:"td"},"react-contexify__will-leave--${given animation}"))))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"onShown"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"() => void"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Invoked after the menu appeared")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"onHidden"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"() => void"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Invoked after the menu has been hidden")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any HTML Attribute"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#HTMLAttribute"}),"HTMLAttribute")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Any valid HTML attribute")))),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import { Menu, Item, animation, theme } from "react-contexify";\n\n<Menu \n  id="anId"\n  theme={theme.dark}\n  animation={animation.fade}\n>\n  <Item>item 1</Item>\n  <Item>item 2</Item>\n  {/* etc... */}\n</Menu>\n')),Object(b.b)("h2",{id:"htmlattribute"},Object(b.b)("a",{name:"HTMLAttribute"},"HTMLAttribute")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Menu \n  id="anId"\n  data-test="item-1"\n  className="a-css-class"\n  style={{ color: "purple" }}\n>\n  <Item>item 1</Item>\n  <Item>item 2</Item>\n  {/* etc... */}\n</Menu>\n')))}u.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=u(n),O=a,d=m["".concat(c,".").concat(O)]||m[O]||p[O]||b;return n?r.a.createElement(d,l(l({ref:t},o),{},{components:n})):r.a.createElement(d,l({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=O;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<b;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);
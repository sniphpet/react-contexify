(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{143:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",function(){return p});var r=t(178),a=t.n(r),o=t(0),i=t.n(o),c=t(166),u=t(164),l=t(184),s=t(185);n.default=function(e){var n=e.components,t=a()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:u.a,layoutProps:t,components:n},i.a.createElement(c.MDXTag,{name:"h1",components:n},"MenuProvider"),i.a.createElement(l.a,{of:s.e}),i.a.createElement(c.MDXTag,{name:"pre",components:n},i.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metaString:""}},'import { MenuProvider } from "react-contexify";\n\n<MenuProvider id="foo" component="span" event="onClick">\n  <MyComponent />\n</MenuProvider>\n')))};var p={}},160:function(e,n,t){"use strict";t.d(n,"a",function(){return l}),t.d(n,"b",function(){return s});t(171);var r=t(157),a=t.n(r),o=(t(76),t(51),t(172),t(50),t(165)),i=t(158);function c(){var e=a()(["\n    @media (min-width: ","em) {\n      ",";\n    }\n  "]);return c=function(){return e},e}var u={giant:1170,desktop:992,tablet:768,phone:376},l=Object.keys(u).reduce(function(e,n){var t=u[n]/16;return e[n]=function(){return Object(i.b)(c(),t,i.b.apply(void 0,arguments))},e},{}),s={events:["onContextMenu","onClick","onDoubleClick"],themes:["none"].concat(Object.values(o.h)),animations:["none"].concat(Object.values(o.f))}},161:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return m}),t.d(n,"StaticQueryContext",function(){return d}),t.d(n,"StaticQuery",function(){return f});var r=t(0),a=t.n(r),o=t(4),i=t.n(o),c=t(159),u=t.n(c);t.d(n,"Link",function(){return u.a}),t.d(n,"withPrefix",function(){return c.withPrefix}),t.d(n,"navigate",function(){return c.navigate}),t.d(n,"push",function(){return c.push}),t.d(n,"replace",function(){return c.replace}),t.d(n,"navigateTo",function(){return c.navigateTo});var l=t(162),s=t.n(l);t.d(n,"PageRenderer",function(){return s.a});var p=t(34);t.d(n,"parsePath",function(){return p.a});var d=a.a.createContext({}),f=function(e){return a.a.createElement(d.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},162:function(e,n,t){var r;e.exports=(r=t(163))&&r.default||r},163:function(e,n,t){"use strict";t.r(n);var r=t(10),a=t.n(r),o=t(0),i=t.n(o),c=t(4),u=t.n(c),l=t(52),s=t(2),p=function(e){var n=e.location,t=s.default.getResourcesForPathnameSync(n.pathname);return i.a.createElement(l.a,a()({location:n,pageResources:t},t.json))};p.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},n.default=p},164:function(e,n,t){"use strict";var r=t(7),a=t.n(r),o=t(157),i=t.n(o),c=t(0),u=t.n(c),l=t(167),s=t(158),p=t(170),d=t.n(p),f=t(160),m=[{title:"Getting Started",menu:[{label:"Demo",link:"/"},{label:"Installation and Usage"}]},{title:"Guides",menu:[{label:"Disable an Item"},{label:"Disable a submenu"},{label:"Change the submenu arrow"},{label:"Menu Provider"},{label:"You don't need the Menu Provider"},{label:"The onClick event handler"},{label:"Le style!"}]},{title:"API Reference",prefix:"/api/",menu:[{label:"Menu"},{label:"Item"},{label:"Submenu"},{label:"Separator"},{label:"IconFont"},{label:"MenuProvider"},{label:"ContextMenu",link:"context-menu"},{label:"Theme and Animation"}]}];t(26),t(173),t(49);function b(){var e=i()(["\n  display: block;\n  top: 50%;\n  margin-top: -2px;\n  transition-duration: 0.22s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  "," ","\n  &::before, &::after {\n    ",' content: "";\n    display: block;\n  }\n  &::before {\n    top: -10px;\n    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;\n    ',";\n  }\n  &::after {\n    bottom: -10px;\n    transition: bottom 0.1s 0.25s ease-in,\n      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ",";\n  }\n"]);return b=function(){return e},e}function h(){var e=i()(["\n  width: 30px;\n  height: 4px;\n  background-color: #e1e1e1;\n  border-radius: 4px;\n  position: absolute;\n  transition-property: transform;\n  transition-duration: 0.15s;\n  transition-timing-function: ease;\n"]);return h=function(){return e},e}function v(){var e=i()(["\n  width: 30px;\n  height: 24px;\n  display: inline-block;\n  position: relative;\n"]);return v=function(){return e},e}function g(){var e=i()(["\n  padding: 15px 15px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 4px 0 0 0;\n  overflow: visible;\n  &:focus-within {\n    background-color: none;\n  }\n  &:hover {\n    opacity: 0.7;\n  }\n"]);return g=function(){return e},e}function y(){var e=i()(["\n      display: none;\n  "]);return y=function(){return e},e}function x(){var e=i()(["\n  width: 60px;\n  height: 60px;\n  background: #9b4ccb;\n  border-radius: 100%;\n  position: fixed;\n  bottom: 10px;\n  right: 15px;\n  z-index: 5;\n  ",";\n"]);return x=function(){return e},e}var w=s.c.div(x(),f.a.tablet(y())),E=s.c.button(g()),O=s.c.div(v()),k=Object(s.b)(h()),j=s.c.div(b(),function(e){return e.toggled?"\n  transform: rotate(225deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); \n  ":null},k,k,function(e){return e.toggled?"\n    top: 0;\n    opacity: 0;\n    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;\n  ":null},function(e){return e.toggled?"\n    bottom: 0;\n    transform: rotate(-90deg);\n    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n  ":null}),P=function(e){var n=e.toggled,t=e.onToggle;return u.a.createElement(w,null,u.a.createElement(E,{onClick:t},u.a.createElement(O,null,u.a.createElement(j,{toggled:n}))))},q=t(161);function C(){var e=i()(["\n  display: inline-block;\n  color: #fff;\n  transition: transform 0.3s;\n  &."," {\n    color: #bd50ff;\n  }\n  &:hover {\n    color: #bd50ff;\n    transform: scale(1.155);\n  }\n"]);return C=function(){return e},e}var M=Object(s.c)(q.Link).attrs({activeClassName:"nav-item-active"})(C(),"nav-item-active"),S=function(e){var n=e.to,t=e.children;return u.a.createElement(M,{to:n},t)};function T(){var e=i()(["\n  cursor: pointer;\n  text-transform: uppercase;\n  padding: 5px 0;\n  display: inline-block;\n  font-size: 18px;\n  color: #fff;\n  white-space: nowrap;\n  font-weight: 400;\n  line-height: 30px;\n  overflow: hidden;\n  text-align: center;\n  display: block;\n  &:hover {\n    color: #fff;\n  }\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    right: 15px;\n    height: 1px;\n    width: calc(100% - 30px);\n    background-color: hsla(0, 0%, 71%, 0.3);\n  }\n"]);return T=function(){return e},e}function _(){var e=i()(["\n  padding: 15px 0;\n  margin: 0;\n  display: block;\n  position: relative;\n  z-index: 4;\n"]);return _=function(){return e},e}var R=s.c.div(_()),D=Object(s.c)(q.Link)(T()),z=function(e){var n=e.children;return u.a.createElement(R,null,u.a.createElement(D,{to:"/",activeStyle:{color:"#fff"}},n))};function A(){var e=i()(["\n  position: relative;\n  height: calc(100vh - 50px);\n  overflow: auto;\n  width: 100%;\n  z-index: 4;\n  padding: 12px;\n  font-size: 1em;\n  & ul {\n    margin-left: 12px;\n    list-style: none;\n  }\n  & p {\n    margin: 0;\n    color: #fff;\n    font-weight: bold;\n  }\n"]);return A=function(){return e},e}function N(){var e=i()(["\n    opacity: 1;\n    width: ",";\n    pointer-events: initial;\n    border-right: 4px solid #bd50ff;\n  "]);return N=function(){return e},e}function I(){var e=i()(["\n  width: 100%;\n  opacity: ",";\n  pointer-events: ",";\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  background: #212120;\n  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),\n    0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n  transition: opacity 0.4s;\n  z-index: 4;\n  ",";\n"]);return I=function(){return e},e}var X=s.c.aside(I(),function(e){return e.isOpen?1:0},function(e){return e.isOpen?"initial":"none"},f.a.tablet(N(),function(e){return e.width})),L=s.c.div(A()),F=function(e){var n=e.isSidebarOpen,t=e.toggleSidebar,r=e.navMenu,a=e.width;return u.a.createElement(u.a.Fragment,null,u.a.createElement(X,{isOpen:n,width:a},u.a.createElement(z,null,"React-Contexify"),u.a.createElement(L,null,r.map(function(e){var n=e.prefix||"";return u.a.createElement(c.Fragment,{key:e.title},u.a.createElement("p",null,e.title),u.a.createElement("ul",null,e.menu.map(function(e){var t=e.link||e.label.toLowerCase().replace(/\'|\!/,"").replace(/\s/g,"-");return u.a.createElement("li",{key:t},u.a.createElement(S,{to:n+t},e.label))})))}))),u.a.createElement(P,{onToggle:t,toggled:n}))};t(174),t(175),t(176),t(177);function G(){var e=i()(["\n      transform: translateX(",");\n      transition: transform 0.4s;\n      margin-right: ",";\n      padding: 0 32px;\n  "]);return G=function(){return e},e}function U(){var e=i()(["\n      ",";\n    "]);return U=function(){return e},e}function Q(){var e=i()(["\n  ",";\n"]);return Q=function(){return e},e}function B(){var e=i()(["\nh1{\n  color: #b561b7;\n  font-weight: bold !important; /* wait what ?? 👌 */\n}\n\n@media (min-width: 48em) {\n  .react-live{\n    display: flex;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  }\n  .react-live-preview, .react-live > .prism-code {\n    width: 100%;\n  },\n  .react-live-preview{\n    padding: 20px 0;\n  }\n}\n"]);return B=function(){return e},e}var J=Object(s.a)(B()),$=s.c.main(Q(),function(e){return e.isSidebarOpen&&Object(s.b)(U(),f.a.tablet(G(),function(e){return e.width},function(e){return e.width}))}),H=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(n=e.call.apply(e,[this].concat(r))||this).state={isSidebarOpen:!0},n.toggleSidebar=function(){n.setState({isSidebarOpen:!n.state.isSidebarOpen})},n}a()(n,e);var t=n.prototype;return t.componentDidMount=function(){d.a.highlightAll()},t.render=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement($,{isSidebarOpen:this.state.isSidebarOpen,width:"260px"},this.props.children),u.a.createElement(F,{width:"260px",navMenu:m,isSidebarOpen:this.state.isSidebarOpen,toggleSidebar:this.toggleSidebar}),u.a.createElement(J,null),u.a.createElement(l.ToastContainer,null))},n}(c.Component);n.a=H},166:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(182);Object.defineProperty(n,"MDXTag",{enumerable:!0,get:function(){return o(r).default}});var a=t(168);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MDXProvider",{enumerable:!0,get:function(){return o(a).default}})},168:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withMDXComponents=void 0;var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a=c(t(0)),o=c(t(53)),i=c(t(4));function c(e){return e&&e.__esModule?e:{default:e}}var u=(0,o.default)({}),l=u.Provider,s=u.Consumer;n.withMDXComponents=function(e){return function(n){var t=n.components,o=function(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}(n,["components"]);return a.default.createElement(s,null,function(n){return a.default.createElement(e,r({components:t||n},o))})}};var p=function(e){var n=e.components,t=e.children;return a.default.createElement(l,{value:n},t)};p.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},n.default=p},179:function(e,n,t){"use strict";var r=t(157),a=t.n(r),o=t(158);function i(){var e=a()(["\n  margin-right: 8px;\n"]);return i=function(){return e},e}n.a=o.c.span.attrs({role:"img","aria-label":"action"})(i())},181:function(e,n,t){var r=t(27).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||t(17)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},182:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),o=t(0),i=l(o),c=l(t(183)),u=t(168);function l(e){return e&&e.__esModule?e:{default:e}}var s={inlineCode:"code",wrapper:"div"},p=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,o.Component),a(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.parentName,a=e.props,o=void 0===a?{}:a,u=e.children,l=e.components,p=void 0===l?{}:l,d=e.Layout,f=e.layoutProps,m=p[t+"."+n]||p[n]||s[n]||n;return d?((0,c.default)(this,d),i.default.createElement(d,r({components:p},f),i.default.createElement(m,o,u))):i.default.createElement(m,o,u)}}]),n}();n.default=(0,u.withMDXComponents)(p)},183:function(e,n,t){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,i=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,s=l&&l(Object);e.exports=function e(n,t,p){if("string"!=typeof t){if(s){var d=l(t);d&&d!==s&&e(n,d,p)}var f=i(t);c&&(f=f.concat(c(t)));for(var m=0;m<f.length;++m){var b=f[m];if(!(r[b]||a[b]||p&&p[b])){var h=u(t,b);try{o(n,b,h)}catch(e){}}}return n}return n}},184:function(e,n,t){"use strict";t(181),t(49);var r=t(157),a=t.n(r),o=t(0),i=t.n(o),c=t(158),u=t(179);function l(){var e=a()(["\n  font-size: ",";\n  color: transparent;\n  text-shadow: 0 0 0 ",";\n"]);return l=function(){return e},e}function s(){var e=a()(["\n  text-align: center;\n"]);return s=function(){return e},e}function p(){var e=a()(["\n  border-collapse: collapse;\n  width: 100%;\n  & td,\n  & th {\n    border: 1px solid #ddd;\n    padding: 8px;\n  }\n  & td:first-child,\n  th:first-child {\n    padding-left: 8px;\n  }\n\n  & tr:nth-child(even) {\n    background-color: #f2f2f2;\n  }\n\n  & th {\n    padding-top: 12px;\n    padding-bottom: 12px;\n    text-align: left;\n    background-color: #b561b7;\n    color: white;\n  }\n"]);return p=function(){return e},e}var d=c.c.table(p()),f=c.c.td(s()),m=Object(c.c)(u.a)(l(),function(e){return e.fontSize},function(e){return e.color});n.a=function(e){var n=e.of;return i.a.createElement(d,null,i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Name"),i.a.createElement("th",null,"Required"),i.a.createElement("th",null,"Default"),i.a.createElement("th",null,"Type"),i.a.createElement("th",null,"Description")),n.map(function(e){return i.a.createElement("tr",{key:e.name},i.a.createElement("td",null,e.name),i.a.createElement(f,null,e.required?i.a.createElement(m,{color:"green"},"✔️"):i.a.createElement(m,{color:"red",fontSize:"12px"},"❌")),i.a.createElement("td",null,e.default||""),i.a.createElement("td",null,e.type),i.a.createElement("td",null,e.description))})))}},185:function(e,n,t){"use strict";t.d(n,"d",function(){return l}),t.d(n,"b",function(){return s}),t.d(n,"c",function(){return p}),t.d(n,"f",function(){return d}),t.d(n,"e",function(){return f}),t.d(n,"a",function(){return m});var r=t(10),a=t.n(r),o={name:"id",required:!0,type:"string | number",description:"Unique id to identify the menu. Use to Trigger the corresponding menu"},i={name:"children",required:!0,type:"ReactNode",description:"Any valid node which can be rendered"},c=[{name:"className",required:!1,type:"string",description:"Append given css classes"},{name:"style",required:!1,type:"object",description:"Append given inline style"}],u={name:"disabled",required:!1,default:" false",type:"boolean | (params: { event, props }) => boolean",description:"Disable or not the `Item`. If a function is used, a boolean must be returned"},l=[a()({},o),a()({},i),{name:"theme",required:!1,type:"string",description:"Theme is appended to `react-contexify__theme--${given theme}`. Built-in theme are `light` and `dark`"},{name:"animation",required:!1,type:"string",description:"Animation is appended to `.react-contexify__will-enter--${given animation}`. Built-in animations are fade, flip, pop, zoom"}].concat(c),s=[a()({},i,{required:!1})].concat(c),p=[a()({},i),{name:"data",required:!1,type:"object",description:"Passed to the `Item` onClick callback. Accessible via `props`"},a()({},u),{name:"onClick",required:!1,type:"(params: { event, props }) => void",description:"Callback when the current `Item` is clicked. The callback give you access to the current event and also the data passed to the `Item`.`({ event, props }) => ...`"}].concat(c),d=[{name:"label",required:!0,type:"ReactNode",description:"Any valid node which can be rendered"},a()({},i),{name:"arrow",required:!1,default:"▶",type:"ReactNode",description:"Render a custom arrow"},a()({},u)].concat(c),f=[a()({},o),a()({},i),{name:"component",required:!1,default:"div",type:"ReactNode | (args?: any) => ReactNode",description:"Any valid node that can be rendered or a render props"},{name:"render",required:!1,type:"(args?: any) => ReactNode",description:"Render props"},{name:"event",required:!1,default:"onContextMenu",type:"ReactEvent",description:"Any react event"},{name:"storeRef",required:!1,default:!0,type:"boolean",description:"Store children ref"},{name:"data",required:!1,type:"object",description:"Passed to the `Item` onClick callback. Accessible via `props`"}],m=[a()({},o),{name:"event",required:!0,type:"HTMLEvent",description:"The event used to display the menu"},{name:"props",required:!1,type:"object",description:"Passed to the `Item` onClick callback. Accessible via `props`"}]}}]);
//# sourceMappingURL=component---src-pages-api-menuprovider-mdx-e46061a895a3e113dc9c.js.map
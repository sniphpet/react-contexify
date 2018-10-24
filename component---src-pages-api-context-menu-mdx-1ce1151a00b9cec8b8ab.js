(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{139:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",function(){return m});var r=t(178),a=t.n(r),i=t(0),o=t.n(i),c=t(166),u=t(164),l=t(184),d=t(185),s=t(169),p=t(180);e.default=function(n){var e=n.components,t=a()(n,["components"]);return o.a.createElement(c.MDXTag,{name:"wrapper",Layout:u.a,layoutProps:t,components:e},o.a.createElement(c.MDXTag,{name:"h1",components:e},"ContextMenu"),o.a.createElement(c.MDXTag,{name:"p",components:e},"The ",o.a.createElement(c.MDXTag,{name:"inlineCode",components:e,parentName:"p"},"contextMenu")," expose two methods: ",o.a.createElement(c.MDXTag,{name:"inlineCode",components:e,parentName:"p"},"show")," and ",o.a.createElement(c.MDXTag,{name:"inlineCode",components:e,parentName:"p"},"hide"),". "),o.a.createElement(c.MDXTag,{name:"p",components:e},"The ",o.a.createElement(c.MDXTag,{name:"inlineCode",components:e,parentName:"p"},"show")," method give you more control than the ",o.a.createElement(c.MDXTag,{name:"inlineCode",components:e,parentName:"p"},"MenuProvider"),". I even recommend that you build your own\n",o.a.createElement(c.MDXTag,{name:"inlineCode",components:e,parentName:"p"},"MenuProvider"),"."),o.a.createElement(c.MDXTag,{name:"p",components:e},"Just don't forget to call ",o.a.createElement(c.MDXTag,{name:"inlineCode",components:e,parentName:"p"},"e.preventDefault")," especially when using ",o.a.createElement(c.MDXTag,{name:"inlineCode",components:e,parentName:"p"},"onContextMenu")," event."),o.a.createElement(c.MDXTag,{name:"h2",components:e},"Show Api"),o.a.createElement(l.a,{of:d.a}),o.a.createElement(c.MDXTag,{name:"pre",components:e},o.a.createElement(c.MDXTag,{name:"code",components:e,parentName:"pre",props:{className:"language-js",metaString:""}},"import { contextMenu } from 'react-contexify';\n")),o.a.createElement(s.a,{code:p.a}))};var m={}},160:function(n,e,t){"use strict";t.d(e,"a",function(){return l}),t.d(e,"b",function(){return d});t(171);var r=t(157),a=t.n(r),i=(t(76),t(51),t(172),t(50),t(165)),o=t(158);function c(){var n=a()(["\n    @media (min-width: ","em) {\n      ",";\n    }\n  "]);return c=function(){return n},n}var u={giant:1170,desktop:992,tablet:768,phone:376},l=Object.keys(u).reduce(function(n,e){var t=u[e]/16;return n[e]=function(){return Object(o.b)(c(),t,o.b.apply(void 0,arguments))},n},{}),d={events:["onContextMenu","onClick","onDoubleClick"],themes:["none"].concat(Object.values(i.h)),animations:["none"].concat(Object.values(i.f))}},161:function(n,e,t){"use strict";t.r(e),t.d(e,"graphql",function(){return f}),t.d(e,"StaticQueryContext",function(){return p}),t.d(e,"StaticQuery",function(){return m});var r=t(0),a=t.n(r),i=t(4),o=t.n(i),c=t(159),u=t.n(c);t.d(e,"Link",function(){return u.a}),t.d(e,"withPrefix",function(){return c.withPrefix}),t.d(e,"navigate",function(){return c.navigate}),t.d(e,"push",function(){return c.push}),t.d(e,"replace",function(){return c.replace}),t.d(e,"navigateTo",function(){return c.navigateTo});var l=t(162),d=t.n(l);t.d(e,"PageRenderer",function(){return d.a});var s=t(34);t.d(e,"parsePath",function(){return s.a});var p=a.a.createContext({}),m=function(n){return a.a.createElement(p.Consumer,null,function(e){return n.data||e[n.query]&&e[n.query].data?(n.render||n.children)(n.data?n.data.data:e[n.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},162:function(n,e,t){var r;n.exports=(r=t(163))&&r.default||r},163:function(n,e,t){"use strict";t.r(e);var r=t(10),a=t.n(r),i=t(0),o=t.n(i),c=t(4),u=t.n(c),l=t(52),d=t(2),s=function(n){var e=n.location,t=d.default.getResourcesForPathnameSync(e.pathname);return o.a.createElement(l.a,a()({location:e,pageResources:t},t.json))};s.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},e.default=s},164:function(n,e,t){"use strict";var r=t(7),a=t.n(r),i=t(157),o=t.n(i),c=t(0),u=t.n(c),l=t(167),d=t(158),s=t(170),p=t.n(s),m=t(160),f=[{title:"Getting Started",menu:[{label:"Demo",link:"/"},{label:"Installation and Usage"}]},{title:"Guides",menu:[{label:"Disable an Item"},{label:"Disable a submenu"},{label:"Change the submenu arrow"},{label:"Menu Provider"},{label:"You don't need the Menu Provider"},{label:"The onClick event handler"},{label:"Le style!"}]},{title:"API Reference",prefix:"/api/",menu:[{label:"Menu"},{label:"Item"},{label:"Submenu"},{label:"Separator"},{label:"IconFont"},{label:"MenuProvider"},{label:"ContextMenu",link:"context-menu"},{label:"Theme and Animation"}]}];t(26),t(173),t(49);function h(){var n=o()(["\n  display: block;\n  top: 50%;\n  margin-top: -2px;\n  transition-duration: 0.22s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  "," ","\n  &::before, &::after {\n    ",' content: "";\n    display: block;\n  }\n  &::before {\n    top: -10px;\n    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;\n    ',";\n  }\n  &::after {\n    bottom: -10px;\n    transition: bottom 0.1s 0.25s ease-in,\n      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ",";\n  }\n"]);return h=function(){return n},n}function b(){var n=o()(["\n  width: 30px;\n  height: 4px;\n  background-color: #e1e1e1;\n  border-radius: 4px;\n  position: absolute;\n  transition-property: transform;\n  transition-duration: 0.15s;\n  transition-timing-function: ease;\n"]);return b=function(){return n},n}function v(){var n=o()(["\n  width: 30px;\n  height: 24px;\n  display: inline-block;\n  position: relative;\n"]);return v=function(){return n},n}function g(){var n=o()(["\n  padding: 15px 15px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 4px 0 0 0;\n  overflow: visible;\n  &:focus-within {\n    background-color: none;\n  }\n  &:hover {\n    opacity: 0.7;\n  }\n"]);return g=function(){return n},n}function x(){var n=o()(["\n      display: none;\n  "]);return x=function(){return n},n}function y(){var n=o()(["\n  width: 60px;\n  height: 60px;\n  background: #9b4ccb;\n  border-radius: 100%;\n  position: fixed;\n  bottom: 10px;\n  right: 15px;\n  z-index: 5;\n  ",";\n"]);return y=function(){return n},n}var M=d.c.div(y(),m.a.tablet(x())),w=d.c.button(g()),I=d.c.div(v()),k=Object(d.b)(b()),E=d.c.div(h(),function(n){return n.toggled?"\n  transform: rotate(225deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); \n  ":null},k,k,function(n){return n.toggled?"\n    top: 0;\n    opacity: 0;\n    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;\n  ":null},function(n){return n.toggled?"\n    bottom: 0;\n    transform: rotate(-90deg);\n    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n  ":null}),C=function(n){var e=n.toggled,t=n.onToggle;return u.a.createElement(M,null,u.a.createElement(w,{onClick:t},u.a.createElement(I,null,u.a.createElement(E,{toggled:e}))))},S=t(161);function q(){var n=o()(["\n  display: inline-block;\n  color: #fff;\n  transition: transform 0.3s;\n  &."," {\n    color: #bd50ff;\n  }\n  &:hover {\n    color: #bd50ff;\n    transform: scale(1.155);\n  }\n"]);return q=function(){return n},n}var T=Object(d.c)(S.Link).attrs({activeClassName:"nav-item-active"})(q(),"nav-item-active"),D=function(n){var e=n.to,t=n.children;return u.a.createElement(T,{to:e},t)};function R(){var n=o()(["\n  cursor: pointer;\n  text-transform: uppercase;\n  padding: 5px 0;\n  display: inline-block;\n  font-size: 18px;\n  color: #fff;\n  white-space: nowrap;\n  font-weight: 400;\n  line-height: 30px;\n  overflow: hidden;\n  text-align: center;\n  display: block;\n  &:hover {\n    color: #fff;\n  }\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    right: 15px;\n    height: 1px;\n    width: calc(100% - 30px);\n    background-color: hsla(0, 0%, 71%, 0.3);\n  }\n"]);return R=function(){return n},n}function A(){var n=o()(["\n  padding: 15px 0;\n  margin: 0;\n  display: block;\n  position: relative;\n  z-index: 4;\n"]);return A=function(){return n},n}var P=d.c.div(A()),O=Object(d.c)(S.Link)(R()),_=function(n){var e=n.children;return u.a.createElement(P,null,u.a.createElement(O,{to:"/",activeStyle:{color:"#fff"}},e))};function N(){var n=o()(["\n  position: relative;\n  height: calc(100vh - 50px);\n  overflow: auto;\n  width: 100%;\n  z-index: 4;\n  padding: 12px;\n  font-size: 1em;\n  & ul {\n    margin-left: 12px;\n    list-style: none;\n  }\n  & p {\n    margin: 0;\n    color: #fff;\n    font-weight: bold;\n  }\n"]);return N=function(){return n},n}function X(){var n=o()(["\n    opacity: 1;\n    width: ",";\n    pointer-events: initial;\n    border-right: 4px solid #bd50ff;\n  "]);return X=function(){return n},n}function j(){var n=o()(["\n  width: 100%;\n  opacity: ",";\n  pointer-events: ",";\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  background: #212120;\n  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),\n    0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n  transition: opacity 0.4s;\n  z-index: 4;\n  ",";\n"]);return j=function(){return n},n}var B=d.c.aside(j(),function(n){return n.isOpen?1:0},function(n){return n.isOpen?"initial":"none"},m.a.tablet(X(),function(n){return n.width})),z=d.c.div(N()),F=function(n){var e=n.isSidebarOpen,t=n.toggleSidebar,r=n.navMenu,a=n.width;return u.a.createElement(u.a.Fragment,null,u.a.createElement(B,{isOpen:e,width:a},u.a.createElement(_,null,"React-Contexify"),u.a.createElement(z,null,r.map(function(n){var e=n.prefix||"";return u.a.createElement(c.Fragment,{key:n.title},u.a.createElement("p",null,n.title),u.a.createElement("ul",null,n.menu.map(function(n){var t=n.link||n.label.toLowerCase().replace(/\'|\!/,"").replace(/\s/g,"-");return u.a.createElement("li",{key:t},u.a.createElement(D,{to:e+t},n.label))})))}))),u.a.createElement(C,{onToggle:t,toggled:e}))};t(174),t(175),t(176),t(177);function L(){var n=o()(["\n      transform: translateX(",");\n      transition: transform 0.4s;\n      margin-right: ",";\n      padding: 0 32px;\n  "]);return L=function(){return n},n}function G(){var n=o()(["\n      ",";\n    "]);return G=function(){return n},n}function U(){var n=o()(["\n  ",";\n"]);return U=function(){return n},n}function J(){var n=o()(["\nh1{\n  color: #b561b7;\n  font-weight: bold !important; /* wait what ?? 👌 */\n}\n\n@media (min-width: 48em) {\n  .react-live{\n    display: flex;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  }\n  .react-live-preview, .react-live > .prism-code {\n    width: 100%;\n  },\n  .react-live-preview{\n    padding: 20px 0;\n  }\n}\n"]);return J=function(){return n},n}var H=Object(d.a)(J()),Q=d.c.main(U(),function(n){return n.isSidebarOpen&&Object(d.b)(G(),m.a.tablet(L(),function(n){return n.width},function(n){return n.width}))}),Y=function(n){function e(){for(var e,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(e=n.call.apply(n,[this].concat(r))||this).state={isSidebarOpen:!0},e.toggleSidebar=function(){e.setState({isSidebarOpen:!e.state.isSidebarOpen})},e}a()(e,n);var t=e.prototype;return t.componentDidMount=function(){p.a.highlightAll()},t.render=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(Q,{isSidebarOpen:this.state.isSidebarOpen,width:"260px"},this.props.children),u.a.createElement(F,{width:"260px",navMenu:f,isSidebarOpen:this.state.isSidebarOpen,toggleSidebar:this.toggleSidebar}),u.a.createElement(H,null),u.a.createElement(l.ToastContainer,null))},e}(c.Component);e.a=Y},169:function(n,e,t){"use strict";var r=t(0),a=t.n(r),i=t(186),o=t(165),c={Item:o.a,Menu:o.b,theme:o.h,animation:o.f,Separator:o.d,Submenu:o.e,MenuProvider:o.c,contextMenu:o.g};e.a=function(n){var e=n.code;return a.a.createElement(i.d,{code:e,scope:c,noInline:!0},a.a.createElement(i.a,null),a.a.createElement(i.b,null),a.a.createElement(i.c,null))}},179:function(n,e,t){"use strict";var r=t(157),a=t.n(r),i=t(158);function o(){var n=a()(["\n  margin-right: 8px;\n"]);return o=function(){return n},n}e.a=i.c.span.attrs({role:"img","aria-label":"action"})(o())},180:function(n,e,t){"use strict";t.d(e,"e",function(){return r}),t.d(e,"c",function(){return a}),t.d(e,"d",function(){return i}),t.d(e,"b",function(){return o}),t.d(e,"g",function(){return c}),t.d(e,"i",function(){return u}),t.d(e,"h",function(){return l}),t.d(e,"f",function(){return d}),t.d(e,"a",function(){return s});var r="\nconst onClick = ({ event, props }) => console.log(event,props);\n\n// create your menu first\nconst MyAwesomeMenu = () => (\n    <Menu id='menu_id'>\n       <Item onClick={onClick}>Lorem</Item>\n       <Item onClick={onClick}>Ipsum</Item>\n       <Separator />\n       <Item disabled>Dolor</Item>\n       <Separator />\n       <Submenu label=\"Foobar\">\n        <Item onClick={onClick}>Foo</Item>\n        <Item onClick={onClick}>Bar</Item>\n       </Submenu>\n    </Menu>\n);\n\nconst App = () => (\n    <div>\n        <MenuProvider id=\"menu_id\" style={{ border: '1px solid purple', display: 'inline-block' }}>\n            Right click me...\n        </MenuProvider>\n        <MyAwesomeMenu />\n    </div>\n);\nrender(<App />);\n",a="\nconst isDisabled = ({ event, props }) => true;\n\nconst MyMenu = () => (\n<Menu id='menu_id'>\n  <Item>Ipsum</Item>\n  <Separator />\n  <Item disabled>I'm disabled</Item>\n  <Item disabled={isDisabled}>I'm disabled using a function</Item>\n</Menu>\n);\n\nconst App = () => (\n  <div>\n      <MenuProvider id=\"menu_id\" component=\"span\">\n          Right click me...\n      </MenuProvider>\n      <MyMenu />\n  </div>\n);\n\nrender(<App />);\n",i='\nconst isDisabled = ({ event, props }) => true;\n\nconst MyMenu = () => (\n<Menu id=\'menu_id\'>\n  <Item>Foo</Item>\n  <Separator />\n  <Submenu label="Submenu" disabled>\n    <Item>Bar</Item>\n  </Submenu>\n  <Separator />\n  <Submenu label="Still disabled" disabled={isDisabled}>\n    <Item>Baz</Item>\n  </Submenu>\n</Menu>\n);\n\nconst App = () => (\n  <div>\n      <MenuProvider id="menu_id" component="span">\n          Right click me...\n      </MenuProvider>\n      <MyMenu />\n  </div>\n);\n\nrender(<App />);\n',o='\nconst MyMenu = () => (\n<Menu id=\'menu_id\'>\n  <Item>Foo</Item>\n  <Separator />\n  <Submenu label="Unimenu" arrow="🦄">\n    <Item>Bar</Item>\n  </Submenu>\n</Menu>\n);\n\nconst App = () => (\n  <div>\n      <MenuProvider id="menu_id" component="span">\n          Right click me...\n      </MenuProvider>\n      <MyMenu />\n  </div>\n);\n\nrender(<App />);\n',c='\nconst MyMenu = () => (\n  <Menu id=\'menu_id\'>\n    <Item>Foo</Item>\n  </Menu>\n);\n\nconst CustomComponent = ({ children, ...rest  }) => (\n  <aside {...rest}>\n     <div>\n         {children}\n     </div>\n  </aside>\n);\n\nconst App = () => (\n  <>\n  {/* Html Tag */}\n  <MenuProvider id="menu_id" component="span">\n    I used a span tag\n  </MenuProvider>\n  <hr/>\n\n  {/* Component */}\n  <MenuProvider id="menu_id" component={CustomComponent}>\n    I used a component\n  </MenuProvider>\n  <hr/>\n\n  {/* Render props */}\n  <MenuProvider id="menu_id" render={({ children, ...rest  }) => ( \n    <h2 {...rest}>\n          {children}\n  </h2>)}>\n    I used a render props\n  </MenuProvider>\n\n  <MyMenu />\n</>\n);\n\nrender(<App />);\n',u="\nconst square = {\n  x: 50,\n  y: 50,\n  width: 100,\n  height: 100\n};\n\nconst menuId = 'awesome';\n\nconst MyMenu = ({ menuId, drawBox }) => (\n  <Menu id={menuId}>\n    <Item onClick={() => drawBox('blue')}>\n      <span>🔷</span>\n      Turn box to blue\n    </Item>\n    <Item onClick={() => drawBox('red')}>\n      <span>🛑</span>\n      Turn box to red\n    </Item>\n    <Item onClick={() => drawBox()}>\n      <span>🔄</span>\n      Reset\n    </Item>\n  </Menu>\n);\n\nclass Canvas extends React.Component{\n  constructor(props){\n    super(props);\n    this.drawBox = this.drawBox.bind(this);\n    this.handleContextMenu = this.handleContextMenu.bind(this);\n  }\n\n  componentDidMount() {\n    this.drawBox();\n  }\n\n  drawBox(color= 'black'){\n    const ctx = this.canvasRef.getContext('2d');\n    ctx.clearRect(square.x, square.y, square.width, square.height);\n    ctx.fillStyle = color;\n    ctx.fillRect(square.x, square.y, square.width, square.height);\n  }\n\n  // Here come the magic\n  handleContextMenu(e) {\n    // always prevent default behavior\n    e.preventDefault();\n\n    const rect = this.canvasRef.getBoundingClientRect();\n    const x = e.clientX - rect.left;\n    const y = e.clientY - rect.top;\n\n    // Some logic\n    if (\n      x >= square.x &&\n      x <= square.x + square.width &&\n      y >= square.y &&\n      y <= square.y + square.height\n    ) {\n      // Don't forget to pass the id and the event and voila!\n      contextMenu.show({\n        id: menuId,\n        event: e,\n      });\n    }\n  }\n\n  render() {\n    return (\n      <div>\n        <h2>Only the square can trigger the event</h2>\n        <canvas\n          onContextMenu={this.handleContextMenu}\n          ref={ref => this.canvasRef= ref}\n          width=\"200\"\n          height=\"200\"\n          style={{ border: '2px dashed purple' }}\n        >\n          this is a canvas\n        </canvas>\n        <MyMenu menuId={menuId} drawBox={this.drawBox} />\n      </div>\n    );\n  }\n}\n\nrender(<Canvas />)\n",l="\nconst onClick = ({ event, props }) => {\n  alert(JSON.stringify({ \n    x: event.clientX, \n    msg: props.msg \n  }, null, 2)\n    );\n}\n\nconst MyMenu = () => (\n  <Menu id='menu_id'>\n    <Item onClick={onClick}>Click Me</Item>\n  </Menu>\n  );\n\n  function handleEvent(e){\n    e.preventDefault();\n    contextMenu.show({\n      id: 'menu_id',\n      event: e,\n      props: {\n        msg: 'hello'\n      }\n    });\n  }\n  \n  const App = () => (\n    <span onContextMenu={handleEvent}>\n      Right click me...\n      <MyMenu />\n    </span>\n  );\n  render(<App />);\n",d='\n// try to use theme.light and animation.pop for instance\n\nconst MyMenu = () => (\n  <Menu id=\'menu_id\' theme={theme.dark} animation={animation.zoom}>\n    <Item>Copy</Item>\n    <Separator />\n    <Item>Paste</Item>\n    <Item>Cut</Item>\n  </Menu>\n  );\n  \n  const App = () => (\n    <div>\n        <MenuProvider id="menu_id" component="span" >\n            Right click me...\n        </MenuProvider>\n        <MyMenu />\n    </div>\n  );\n  \n  render(<App />);\n',s="\nconst menuId = 'thisIsAnId';\n\nconst MyMenu = () => (\n  <Menu id={menuId}>\n    <Item>Copy</Item>\n    <Separator />\n    <Item>Paste</Item>\n    <Item>Cut</Item>\n  </Menu>\n  );\n\n  const handleEvent = e => {\n    e.preventDefault();\n    contextMenu.show({\n      id: menuId,\n      event: e,\n      props: {\n        foo: 'bar'\n      }\n    });\n  };\n\n  const divStyle = { \n    width: '100px',\n    height: '100px',\n    border: '1px solid purple'\n  };\n  \n  const App = () => (\n    <div>\n        <div onContextMenu={handleEvent} style={divStyle}>\n            Right click me...\n        </div>\n        <MyMenu />\n    </div>\n  );\n  \n  render(<App />);\n"},181:function(n,e,t){var r=t(27).f,a=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in a||t(17)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(n){return""}}})},184:function(n,e,t){"use strict";t(181),t(49);var r=t(157),a=t.n(r),i=t(0),o=t.n(i),c=t(158),u=t(179);function l(){var n=a()(["\n  font-size: ",";\n  color: transparent;\n  text-shadow: 0 0 0 ",";\n"]);return l=function(){return n},n}function d(){var n=a()(["\n  text-align: center;\n"]);return d=function(){return n},n}function s(){var n=a()(["\n  border-collapse: collapse;\n  width: 100%;\n  & td,\n  & th {\n    border: 1px solid #ddd;\n    padding: 8px;\n  }\n  & td:first-child,\n  th:first-child {\n    padding-left: 8px;\n  }\n\n  & tr:nth-child(even) {\n    background-color: #f2f2f2;\n  }\n\n  & th {\n    padding-top: 12px;\n    padding-bottom: 12px;\n    text-align: left;\n    background-color: #b561b7;\n    color: white;\n  }\n"]);return s=function(){return n},n}var p=c.c.table(s()),m=c.c.td(d()),f=Object(c.c)(u.a)(l(),function(n){return n.fontSize},function(n){return n.color});e.a=function(n){var e=n.of;return o.a.createElement(p,null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Required"),o.a.createElement("th",null,"Default"),o.a.createElement("th",null,"Type"),o.a.createElement("th",null,"Description")),e.map(function(n){return o.a.createElement("tr",{key:n.name},o.a.createElement("td",null,n.name),o.a.createElement(m,null,n.required?o.a.createElement(f,{color:"green"},"✔️"):o.a.createElement(f,{color:"red",fontSize:"12px"},"❌")),o.a.createElement("td",null,n.default||""),o.a.createElement("td",null,n.type),o.a.createElement("td",null,n.description))})))}},185:function(n,e,t){"use strict";t.d(e,"d",function(){return l}),t.d(e,"b",function(){return d}),t.d(e,"c",function(){return s}),t.d(e,"f",function(){return p}),t.d(e,"e",function(){return m}),t.d(e,"a",function(){return f});var r=t(10),a=t.n(r),i={name:"id",required:!0,type:"string | number",description:"Unique id to identify the menu. Use to Trigger the corresponding menu"},o={name:"children",required:!0,type:"ReactNode",description:"Any valid node which can be rendered"},c=[{name:"className",required:!1,type:"string",description:"Append given css classes"},{name:"style",required:!1,type:"object",description:"Append given inline style"}],u={name:"disabled",required:!1,default:" false",type:"boolean | (params: { event, props }) => boolean",description:"Disable or not the `Item`. If a function is used, a boolean must be returned"},l=[a()({},i),a()({},o),{name:"theme",required:!1,type:"string",description:"Theme is appended to `react-contexify__theme--${given theme}`. Built-in theme are `light` and `dark`"},{name:"animation",required:!1,type:"string",description:"Animation is appended to `.react-contexify__will-enter--${given animation}`. Built-in animations are fade, flip, pop, zoom"}].concat(c),d=[a()({},o,{required:!1})].concat(c),s=[a()({},o),{name:"data",required:!1,type:"object",description:"Passed to the `Item` onClick callback. Accessible via `props`"},a()({},u),{name:"onClick",required:!1,type:"(params: { event, props }) => void",description:"Callback when the current `Item` is clicked. The callback give you access to the current event and also the data passed to the `Item`.`({ event, props }) => ...`"}].concat(c),p=[{name:"label",required:!0,type:"ReactNode",description:"Any valid node which can be rendered"},a()({},o),{name:"arrow",required:!1,default:"▶",type:"ReactNode",description:"Render a custom arrow"},a()({},u)].concat(c),m=[a()({},i),a()({},o),{name:"component",required:!1,default:"div",type:"ReactNode | (args?: any) => ReactNode",description:"Any valid node that can be rendered or a render props"},{name:"render",required:!1,type:"(args?: any) => ReactNode",description:"Render props"},{name:"event",required:!1,default:"onContextMenu",type:"ReactEvent",description:"Any react event"},{name:"storeRef",required:!1,default:!0,type:"boolean",description:"Store children ref"},{name:"data",required:!1,type:"object",description:"Passed to the `Item` onClick callback. Accessible via `props`"}],f=[a()({},i),{name:"event",required:!0,type:"HTMLEvent",description:"The event used to display the menu"},{name:"props",required:!1,type:"object",description:"Passed to the `Item` onClick callback. Accessible via `props`"}]}}]);
//# sourceMappingURL=component---src-pages-api-context-menu-mdx-1ce1151a00b9cec8b8ab.js.map
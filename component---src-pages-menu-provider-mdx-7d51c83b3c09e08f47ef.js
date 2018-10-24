(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{151:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",function(){return d});var r=t(179),i=t.n(r),o=t(0),a=t.n(o),u=t(167),c=t(165),l=t(178),s=t(181);e.default=function(n){var e=n.components,t=i()(n,["components"]);return a.a.createElement(u.MDXTag,{name:"wrapper",Layout:c.a,layoutProps:t,components:e},a.a.createElement(u.MDXTag,{name:"h1",components:e},"Menu Provider"),a.a.createElement(u.MDXTag,{name:"p",components:e},"By default the ",a.a.createElement(u.MDXTag,{name:"inlineCode",components:e,parentName:"p"},"MenuProvider")," component wrap the given children with a ",a.a.createElement(u.MDXTag,{name:"inlineCode",components:e,parentName:"p"},"div")," element. The component expose 2 useful props to override\nthis behavior. ",a.a.createElement(u.MDXTag,{name:"inlineCode",components:e,parentName:"p"},"component")," and ",a.a.createElement(u.MDXTag,{name:"inlineCode",components:e,parentName:"p"},"render")," let's see how to use them."),a.a.createElement(l.a,{code:s.g}))};var d={}},161:function(n,e,t){"use strict";t.d(e,"a",function(){return l}),t.d(e,"b",function(){return s});t(171);var r=t(158),i=t.n(r),o=(t(76),t(51),t(172),t(50),t(166)),a=t(159);function u(){var n=i()(["\n    @media (min-width: ","em) {\n      ",";\n    }\n  "]);return u=function(){return n},n}var c={giant:1170,desktop:992,tablet:768,phone:376},l=Object.keys(c).reduce(function(n,e){var t=c[e]/16;return n[e]=function(){return Object(a.b)(u(),t,a.b.apply(void 0,arguments))},n},{}),s={events:["onContextMenu","onClick","onDoubleClick"],themes:["none"].concat(Object.values(o.h)),animations:["none"].concat(Object.values(o.f))}},162:function(n,e,t){"use strict";t.r(e),t.d(e,"graphql",function(){return f}),t.d(e,"StaticQueryContext",function(){return p}),t.d(e,"StaticQuery",function(){return m});var r=t(0),i=t.n(r),o=t(4),a=t.n(o),u=t(160),c=t.n(u);t.d(e,"Link",function(){return c.a}),t.d(e,"withPrefix",function(){return u.withPrefix}),t.d(e,"navigate",function(){return u.navigate}),t.d(e,"push",function(){return u.push}),t.d(e,"replace",function(){return u.replace}),t.d(e,"navigateTo",function(){return u.navigateTo});var l=t(163),s=t.n(l);t.d(e,"PageRenderer",function(){return s.a});var d=t(34);t.d(e,"parsePath",function(){return d.a});var p=i.a.createContext({}),m=function(n){return i.a.createElement(p.Consumer,null,function(e){return n.data||e[n.query]&&e[n.query].data?(n.render||n.children)(n.data?n.data.data:e[n.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:a.a.object,query:a.a.string.isRequired,render:a.a.func,children:a.a.func}},163:function(n,e,t){var r;n.exports=(r=t(164))&&r.default||r},164:function(n,e,t){"use strict";t.r(e);var r=t(10),i=t.n(r),o=t(0),a=t.n(o),u=t(4),c=t.n(u),l=t(52),s=t(2),d=function(n){var e=n.location,t=s.default.getResourcesForPathnameSync(e.pathname);return a.a.createElement(l.a,i()({location:e,pageResources:t},t.json))};d.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},e.default=d},165:function(n,e,t){"use strict";var r=t(7),i=t.n(r),o=t(158),a=t.n(o),u=t(0),c=t.n(u),l=t(169),s=t(159),d=t(170),p=t.n(d),m=t(161),f=[{title:"Getting Started",menu:[{label:"Demo",link:"/"},{label:"Installation and Usage"},{label:"Migrate from v3"}]},{title:"Guides",menu:[{label:"Disable an Item"},{label:"Disable a submenu"},{label:"Change the submenu arrow"},{label:"Menu Provider"},{label:"You don't need the Menu Provider"},{label:"The onClick event handler"},{label:"Le style!"}]},{title:"API Reference",prefix:"/api/",menu:[{label:"Menu"},{label:"Item"},{label:"Submenu"},{label:"Separator"},{label:"IconFont"},{label:"MenuProvider"},{label:"ContextMenu",link:"context-menu"},{label:"Theme and Animation"}]}];t(26),t(173),t(49);function h(){var n=a()(["\n  display: block;\n  top: 50%;\n  margin-top: -2px;\n  transition-duration: 0.22s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  "," ","\n  &::before, &::after {\n    ",' content: "";\n    display: block;\n  }\n  &::before {\n    top: -10px;\n    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;\n    ',";\n  }\n  &::after {\n    bottom: -10px;\n    transition: bottom 0.1s 0.25s ease-in,\n      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ",";\n  }\n"]);return h=function(){return n},n}function b(){var n=a()(["\n  width: 30px;\n  height: 4px;\n  background-color: #e1e1e1;\n  border-radius: 4px;\n  position: absolute;\n  transition-property: transform;\n  transition-duration: 0.15s;\n  transition-timing-function: ease;\n"]);return b=function(){return n},n}function v(){var n=a()(["\n  width: 30px;\n  height: 24px;\n  display: inline-block;\n  position: relative;\n"]);return v=function(){return n},n}function g(){var n=a()(["\n  padding: 15px 15px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 4px 0 0 0;\n  overflow: visible;\n  &:focus-within {\n    background-color: none;\n  }\n  &:hover {\n    opacity: 0.7;\n  }\n"]);return g=function(){return n},n}function x(){var n=a()(["\n      display: none;\n  "]);return x=function(){return n},n}function M(){var n=a()(["\n  width: 60px;\n  height: 60px;\n  background: #9b4ccb;\n  border-radius: 100%;\n  position: fixed;\n  bottom: 10px;\n  right: 15px;\n  z-index: 5;\n  ",";\n"]);return M=function(){return n},n}var y=s.c.div(M(),m.a.tablet(x())),w=s.c.button(g()),I=s.c.div(v()),k=Object(s.b)(b()),C=s.c.div(h(),function(n){return n.toggled?"\n  transform: rotate(225deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); \n  ":null},k,k,function(n){return n.toggled?"\n    top: 0;\n    opacity: 0;\n    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;\n  ":null},function(n){return n.toggled?"\n    bottom: 0;\n    transform: rotate(-90deg);\n    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n  ":null}),S=function(n){var e=n.toggled,t=n.onToggle;return c.a.createElement(y,null,c.a.createElement(w,{onClick:t},c.a.createElement(I,null,c.a.createElement(C,{toggled:e}))))},E=t(162);function P(){var n=a()(["\n  display: inline-block;\n  color: #fff;\n  transition: transform 0.3s;\n  &."," {\n    color: #bd50ff;\n  }\n  &:hover {\n    color: #bd50ff;\n    transform: scale(1.155);\n  }\n"]);return P=function(){return n},n}var q=Object(s.c)(E.Link).attrs({activeClassName:"nav-item-active"})(P(),"nav-item-active"),R=function(n){var e=n.to,t=n.children;return c.a.createElement(q,{to:e},t)};function A(){var n=a()(["\n  cursor: pointer;\n  text-transform: uppercase;\n  padding: 5px 0;\n  display: inline-block;\n  font-size: 18px;\n  color: #fff;\n  white-space: nowrap;\n  font-weight: 400;\n  line-height: 30px;\n  overflow: hidden;\n  text-align: center;\n  display: block;\n  &:hover {\n    color: #fff;\n  }\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    right: 15px;\n    height: 1px;\n    width: calc(100% - 30px);\n    background-color: hsla(0, 0%, 71%, 0.3);\n  }\n"]);return A=function(){return n},n}function O(){var n=a()(["\n  padding: 15px 0;\n  margin: 0;\n  display: block;\n  position: relative;\n  z-index: 4;\n"]);return O=function(){return n},n}var D=s.c.div(O()),T=Object(s.c)(E.Link)(A()),_=function(n){var e=n.children;return c.a.createElement(D,null,c.a.createElement(T,{to:"/",activeStyle:{color:"#fff"}},e))};function B(){var n=a()(["\n  position: relative;\n  height: calc(100vh - 50px);\n  overflow: auto;\n  width: 100%;\n  z-index: 4;\n  padding: 12px;\n  font-size: 1em;\n  & ul {\n    margin-left: 12px;\n    list-style: none;\n  }\n  & p {\n    margin: 0;\n    color: #fff;\n    font-weight: bold;\n  }\n"]);return B=function(){return n},n}function z(){var n=a()(["\n    opacity: 1;\n    width: ",";\n    pointer-events: initial;\n    border-right: 4px solid #bd50ff;\n  "]);return z=function(){return n},n}function j(){var n=a()(["\n  width: 100%;\n  opacity: ",";\n  pointer-events: ",";\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  background: #212120;\n  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),\n    0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n  transition: opacity 0.4s;\n  z-index: 4;\n  ",";\n"]);return j=function(){return n},n}var F=s.c.aside(j(),function(n){return n.isOpen?1:0},function(n){return n.isOpen?"initial":"none"},m.a.tablet(z(),function(n){return n.width})),X=s.c.div(B()),L=function(n){var e=n.isSidebarOpen,t=n.toggleSidebar,r=n.navMenu,i=n.width;return c.a.createElement(c.a.Fragment,null,c.a.createElement(F,{isOpen:e,width:i},c.a.createElement(_,null,"React-Contexify"),c.a.createElement(X,null,r.map(function(n){var e=n.prefix||"";return c.a.createElement(u.Fragment,{key:n.title},c.a.createElement("p",null,n.title),c.a.createElement("ul",null,n.menu.map(function(n){var t=n.link||n.label.toLowerCase().replace(/\'|\!/,"").replace(/\s/g,"-");return c.a.createElement("li",{key:t},c.a.createElement(R,{to:e+t},n.label))})))}))),c.a.createElement(S,{onToggle:t,toggled:e}))};t(174),t(175),t(176),t(177);function G(){var n=a()(["\n      transform: translateX(",");\n      transition: transform 0.4s;\n      margin-right: ",";\n      padding: 0 32px;\n  "]);return G=function(){return n},n}function N(){var n=a()(["\n      ",";\n    "]);return N=function(){return n},n}function U(){var n=a()(["\n  ",";\n"]);return U=function(){return n},n}function J(){var n=a()(["\nh1{\n  color: #b561b7;\n  font-weight: bold !important; /* wait what ?? 👌 */\n}\n\n@media (min-width: 48em) {\n  .react-live{\n    display: flex;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  }\n  .react-live-preview, .react-live > .prism-code {\n    width: 100%;\n  },\n  .react-live-preview{\n    padding: 20px 0;\n  }\n}\n"]);return J=function(){return n},n}var Q=Object(s.a)(J()),H=s.c.main(U(),function(n){return n.isSidebarOpen&&Object(s.b)(N(),m.a.tablet(G(),function(n){return n.width},function(n){return n.width}))}),Y=function(n){function e(){for(var e,t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))||this).state={isSidebarOpen:!0},e.toggleSidebar=function(){e.setState({isSidebarOpen:!e.state.isSidebarOpen})},e}i()(e,n);var t=e.prototype;return t.componentDidMount=function(){p.a.highlightAll()},t.render=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(H,{isSidebarOpen:this.state.isSidebarOpen,width:"260px"},this.props.children),c.a.createElement(L,{width:"260px",navMenu:f,isSidebarOpen:this.state.isSidebarOpen,toggleSidebar:this.toggleSidebar}),c.a.createElement(Q,null),c.a.createElement(l.ToastContainer,null))},e}(u.Component);e.a=Y},178:function(n,e,t){"use strict";var r=t(0),i=t.n(r),o=t(187),a=t(166),u={Item:a.a,Menu:a.b,theme:a.h,animation:a.f,Separator:a.d,Submenu:a.e,MenuProvider:a.c,contextMenu:a.g};e.a=function(n){var e=n.code;return i.a.createElement(o.d,{code:e,scope:u,noInline:!0},i.a.createElement(o.a,null),i.a.createElement(o.b,null),i.a.createElement(o.c,null))}},181:function(n,e,t){"use strict";t.d(e,"e",function(){return r}),t.d(e,"c",function(){return i}),t.d(e,"d",function(){return o}),t.d(e,"b",function(){return a}),t.d(e,"g",function(){return u}),t.d(e,"i",function(){return c}),t.d(e,"h",function(){return l}),t.d(e,"f",function(){return s}),t.d(e,"a",function(){return d});var r="\nconst onClick = ({ event, props }) => console.log(event,props);\n\n// create your menu first\nconst MyAwesomeMenu = () => (\n    <Menu id='menu_id'>\n       <Item onClick={onClick}>Lorem</Item>\n       <Item onClick={onClick}>Ipsum</Item>\n       <Separator />\n       <Item disabled>Dolor</Item>\n       <Separator />\n       <Submenu label=\"Foobar\">\n        <Item onClick={onClick}>Foo</Item>\n        <Item onClick={onClick}>Bar</Item>\n       </Submenu>\n    </Menu>\n);\n\nconst App = () => (\n    <div>\n        <MenuProvider id=\"menu_id\" style={{ border: '1px solid purple', display: 'inline-block' }}>\n            Right click me...\n        </MenuProvider>\n        <MyAwesomeMenu />\n    </div>\n);\nrender(<App />);\n",i="\nconst isDisabled = ({ event, props }) => true;\n\nconst MyMenu = () => (\n<Menu id='menu_id'>\n  <Item>Ipsum</Item>\n  <Separator />\n  <Item disabled>I'm disabled</Item>\n  <Item disabled={isDisabled}>I'm disabled using a function</Item>\n</Menu>\n);\n\nconst App = () => (\n  <div>\n      <MenuProvider id=\"menu_id\" component=\"span\">\n          Right click me...\n      </MenuProvider>\n      <MyMenu />\n  </div>\n);\n\nrender(<App />);\n",o='\nconst isDisabled = ({ event, props }) => true;\n\nconst MyMenu = () => (\n<Menu id=\'menu_id\'>\n  <Item>Foo</Item>\n  <Separator />\n  <Submenu label="Submenu" disabled>\n    <Item>Bar</Item>\n  </Submenu>\n  <Separator />\n  <Submenu label="Still disabled" disabled={isDisabled}>\n    <Item>Baz</Item>\n  </Submenu>\n</Menu>\n);\n\nconst App = () => (\n  <div>\n      <MenuProvider id="menu_id" component="span">\n          Right click me...\n      </MenuProvider>\n      <MyMenu />\n  </div>\n);\n\nrender(<App />);\n',a='\nconst MyMenu = () => (\n<Menu id=\'menu_id\'>\n  <Item>Foo</Item>\n  <Separator />\n  <Submenu label="Unimenu" arrow="🦄">\n    <Item>Bar</Item>\n  </Submenu>\n</Menu>\n);\n\nconst App = () => (\n  <div>\n      <MenuProvider id="menu_id" component="span">\n          Right click me...\n      </MenuProvider>\n      <MyMenu />\n  </div>\n);\n\nrender(<App />);\n',u='\nconst MyMenu = () => (\n  <Menu id=\'menu_id\'>\n    <Item>Foo</Item>\n  </Menu>\n);\n\nconst CustomComponent = ({ children, ...rest  }) => (\n  <aside {...rest}>\n     <div>\n         {children}\n     </div>\n  </aside>\n);\n\nconst App = () => (\n  <>\n  {/* Html Tag */}\n  <MenuProvider id="menu_id" component="span">\n    I used a span tag\n  </MenuProvider>\n  <hr/>\n\n  {/* Component */}\n  <MenuProvider id="menu_id" component={CustomComponent}>\n    I used a component\n  </MenuProvider>\n  <hr/>\n\n  {/* Render props */}\n  <MenuProvider id="menu_id" render={({ children, ...rest  }) => ( \n    <h2 {...rest}>\n          {children}\n  </h2>)}>\n    I used a render props\n  </MenuProvider>\n\n  <MyMenu />\n</>\n);\n\nrender(<App />);\n',c="\nconst square = {\n  x: 50,\n  y: 50,\n  width: 100,\n  height: 100\n};\n\nconst menuId = 'awesome';\n\nconst MyMenu = ({ menuId, drawBox }) => (\n  <Menu id={menuId}>\n    <Item onClick={() => drawBox('blue')}>\n      <span>🔷</span>\n      Turn box to blue\n    </Item>\n    <Item onClick={() => drawBox('red')}>\n      <span>🛑</span>\n      Turn box to red\n    </Item>\n    <Item onClick={() => drawBox()}>\n      <span>🔄</span>\n      Reset\n    </Item>\n  </Menu>\n);\n\nclass Canvas extends React.Component{\n  constructor(props){\n    super(props);\n    this.drawBox = this.drawBox.bind(this);\n    this.handleContextMenu = this.handleContextMenu.bind(this);\n  }\n\n  componentDidMount() {\n    this.drawBox();\n  }\n\n  drawBox(color= 'black'){\n    const ctx = this.canvasRef.getContext('2d');\n    ctx.clearRect(square.x, square.y, square.width, square.height);\n    ctx.fillStyle = color;\n    ctx.fillRect(square.x, square.y, square.width, square.height);\n  }\n\n  // Here come the magic\n  handleContextMenu(e) {\n    // always prevent default behavior\n    e.preventDefault();\n\n    const rect = this.canvasRef.getBoundingClientRect();\n    const x = e.clientX - rect.left;\n    const y = e.clientY - rect.top;\n\n    // Some logic\n    if (\n      x >= square.x &&\n      x <= square.x + square.width &&\n      y >= square.y &&\n      y <= square.y + square.height\n    ) {\n      // Don't forget to pass the id and the event and voila!\n      contextMenu.show({\n        id: menuId,\n        event: e,\n      });\n    }\n  }\n\n  render() {\n    return (\n      <div>\n        <h2>Only the square can trigger the event</h2>\n        <canvas\n          onContextMenu={this.handleContextMenu}\n          ref={ref => this.canvasRef= ref}\n          width=\"200\"\n          height=\"200\"\n          style={{ border: '2px dashed purple' }}\n        >\n          this is a canvas\n        </canvas>\n        <MyMenu menuId={menuId} drawBox={this.drawBox} />\n      </div>\n    );\n  }\n}\n\nrender(<Canvas />)\n",l="\nconst onClick = ({ event, props }) => {\n  alert(JSON.stringify({ \n    x: event.clientX, \n    msg: props.msg \n  }, null, 2)\n    );\n}\n\nconst MyMenu = () => (\n  <Menu id='menu_id'>\n    <Item onClick={onClick}>Click Me</Item>\n  </Menu>\n  );\n\n  function handleEvent(e){\n    e.preventDefault();\n    contextMenu.show({\n      id: 'menu_id',\n      event: e,\n      props: {\n        msg: 'hello'\n      }\n    });\n  }\n  \n  const App = () => (\n    <span onContextMenu={handleEvent}>\n      Right click me...\n      <MyMenu />\n    </span>\n  );\n  render(<App />);\n",s='\n// try to use theme.light and animation.pop for instance\n\nconst MyMenu = () => (\n  <Menu id=\'menu_id\' theme={theme.dark} animation={animation.zoom}>\n    <Item>Copy</Item>\n    <Separator />\n    <Item>Paste</Item>\n    <Item>Cut</Item>\n  </Menu>\n  );\n  \n  const App = () => (\n    <div>\n        <MenuProvider id="menu_id" component="span" >\n            Right click me...\n        </MenuProvider>\n        <MyMenu />\n    </div>\n  );\n  \n  render(<App />);\n',d="\nconst menuId = 'thisIsAnId';\n\nconst MyMenu = () => (\n  <Menu id={menuId}>\n    <Item>Copy</Item>\n    <Separator />\n    <Item>Paste</Item>\n    <Item>Cut</Item>\n  </Menu>\n  );\n\n  const handleEvent = e => {\n    e.preventDefault();\n    contextMenu.show({\n      id: menuId,\n      event: e,\n      props: {\n        foo: 'bar'\n      }\n    });\n  };\n\n  const divStyle = { \n    width: '100px',\n    height: '100px',\n    border: '1px solid purple'\n  };\n  \n  const App = () => (\n    <div>\n        <div onContextMenu={handleEvent} style={divStyle}>\n            Right click me...\n        </div>\n        <MyMenu />\n    </div>\n  );\n  \n  render(<App />);\n"}}]);
//# sourceMappingURL=component---src-pages-menu-provider-mdx-7d51c83b3c09e08f47ef.js.map
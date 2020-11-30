(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{104:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(97),i=t(94),c=t(47),l=t.n(c);const s=37,u=39;n.a=function(e){const{block:n,children:t,defaultValue:c,values:m,groupId:d,className:p}=e,{tabGroupChoices:b,setTabGroupChoices:h}=Object(o.a)(),[f,y]=Object(a.useState)(c),[v,g]=Object(a.useState)(!1);if(null!=d){const e=b[d];null!=e&&e!==f&&m.some((n=>n.value===e))&&y(e)}const O=e=>{y(e),null!=d&&h(d,e)},I=[],j=e=>{e.metaKey||e.altKey||e.ctrlKey||g(!0)},k=()=>{g(!1)};return Object(a.useEffect)((()=>(window.addEventListener("keydown",j),window.addEventListener("mousedown",k),()=>{window.removeEventListener("keydown",j),window.removeEventListener("mousedown",k)})),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},p)},m.map((({value:e,label:n})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===e}),style:v?{}:{outline:"none"},key:e,ref:e=>I.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case u:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case s:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(I,e.target,e),j(e)},onFocus:()=>O(e),onClick:()=>{O(e),g(!1)},onPointerDown:()=>g(!1)},n)))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter((e=>e.props.value===f))[0]))}},105:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){return r.a.createElement("div",null,e.children)}},72:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return d}));var a=t(2),r=t(6),o=(t(0),t(93)),i=t(104),c=t(105),l={id:"handle-item-click",title:"Handle Item click"},s={unversionedId:"handle-item-click",id:"handle-item-click",isDocsHomePage:!1,title:"Handle Item click",description:"Handling Item click/touch is at the core of react-contexify. When an Item is clicked, the callback gives you access to the following parameters:",source:"@site/docs/handle-item-click.md",slug:"/handle-item-click",permalink:"/react-contexify/handle-item-click",editUrl:"https://github.com/fkhadra/react-contexify-doc/edit/master/docs/handle-item-click.md",version:"current",sidebar:"someSidebar",previous:{title:"Migrate from previous version",permalink:"/react-contexify/migrate"},next:{title:"Item can render anything",permalink:"/react-contexify/render-anything"}},u=[],m={rightToc:u};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Handling ",Object(o.b)("inlineCode",{parentName:"p"},"Item")," click/touch is at the core of react-contexify. When an ",Object(o.b)("inlineCode",{parentName:"p"},"Item")," is clicked, the callback gives you access to the following parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"event")," The event that occurred on the Item node"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"props")," The props passed when you called ",Object(o.b)("inlineCode",{parentName:"li"},"show(e, {props: yourProps})")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"data")," The data defined on the ",Object(o.b)("inlineCode",{parentName:"li"},"Item")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"triggerEvent")," The event that triggered the context menu")),Object(o.b)("p",null,"This gives you a lot of power to implement your logic. The trade-off is that we have now multiple ways to handle the interaction with our Menu. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"you could use one handler per ",Object(o.b)("inlineCode",{parentName:"li"},"Item")),Object(o.b)("li",{parentName:"ul"},"a single function to handle all ",Object(o.b)("inlineCode",{parentName:"li"},"Items")),Object(o.b)("li",{parentName:"ul"},"identify an ",Object(o.b)("inlineCode",{parentName:"li"},"Item")," using the ",Object(o.b)("inlineCode",{parentName:"li"},"data")," props"),Object(o.b)("li",{parentName:"ul"},"identity an ",Object(o.b)("inlineCode",{parentName:"li"},"Item")," using the ",Object(o.b)("inlineCode",{parentName:"li"},"id")," attribute")),Object(o.b)("p",null,'You may ask yourself, "Which solution should I use?". Well, it depends. Now before you hate me let me explain myself \ud83e\udd23.'),Object(o.b)("p",null,"Choose the approach that matches your needs and the easier to understand for you and your team. I tried my best to make every developer happy and confident, hence the flexibility.  "),Object(o.b)("p",null,"I'll describe the one I've used in the demo. Pay attention to the comments."),Object(o.b)(i.a,{groupId:"lang",defaultValue:"js",values:[{label:"Javascript",value:"js"},{label:"Typescript",value:"ts"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import { useContextMenu, Menu, Item, Separator } from "react-contexify";\n\n// I really used that emoji for my menu id \ud83e\udd23\nconst MENU_ID = "\ud83d\udca9";\n\nexport function Demo() {\n  const { show } = useContextMenu({\n    id: MENU_ID,\n  });\n\n  function displayMenu(e) {\n    // pass the item id so the `onClick` on the `Item` has access to it\n    show(e, { props: { id: Number(e.currentTarget.id) } });\n  }\n\n  function handleItemClick({ event, props, data, triggerEvent }) {\n    // \u26a0\ufe0f data and triggerEvent are not used. I\'ve just added them so we have the full list of parameters\n\n    // I use the id attribute defined on the `Item` to identify which one is it\n    // this feel natural to my brain\n    switch (event.currentTarget.id) {\n      case "remove":\n        // logic to remove the row\n        console.log(props.id); // contain to item.id passed by `show`\n        break;\n      case "share":\n        // logic to share\n        break;\n      case "email":\n        //logic to send email\n        break;\n      case "sponsor":\n        //logic to open sponsor page\n        break;\n    }\n  }\n\n  return (\n    <div>\n      <ul>\n        {items.map((item) => (\n          <li id={`${item.id}`} key={item.id} onContextMenu={displayMenu}>\n            {/* render content of my list item */}\n          </li>\n        ))}\n      </ul>\n      <Menu id={MENU_ID}>\n        <Item id="remove" onClick={handleItemClick}>\n          Remove row\n        </Item>\n        <Separator />\n        <Item id="share" onClick={handleItemClick}>\n          Share\n        </Item>\n        <Item\n          id="email"\n          onClick={handleItemClick}\n          className={styles.itemContent}\n        >\n          Send email\n        </Item>\n        <Item id="sponsor" onClick={handleItemClick}>\n          Sponsor my work\n        </Item>\n      </Menu>\n    </div>\n  );\n}\n'))),Object(o.b)(c.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'import {\n  useContextMenu,\n  Menu,\n  Item,\n  Separator,\n  ItemParams,\n} from "react-contexify";\n\n// I really used that emoji for my menu id \ud83e\udd23\nconst MENU_ID = "\ud83d\udca9";\n\n// Define an interface for the props that I\'ll pass to the Item\ninterface ItemProps {\n  id: number;\n}\n\n// Defined just for documentation purpose\ntype ItemData = any;\n\nexport function Demo() {\n  const { show } = useContextMenu({\n    id: MENU_ID,\n  });\n\n  function displayMenu(e: React.MouseEvent) {\n    // pass the item id so the `onClick` on the `Item` has access to it\n    show(e, { props: { id: Number(e.currentTarget.id) } });\n  }\n\n  function handleItemClick({\n    event,\n    props,\n    data,\n    triggerEvent,\n  }: ItemParams<ItemProps, ItemData>) {\n    // \u26a0\ufe0f data and triggerEvent are not used. I\'ve just added them so we have the full list of parameters\n\n    // I use the id attribute defined on the `Item` to identify which one is it\n    // this feel natural to my brain\n    switch (event.currentTarget.id) {\n      case "remove":\n        // logic to remove the row\n        console.log(props.id); // contain to item.id passed by `show`\n        break;\n      case "share":\n        // logic to share\n        break;\n      case "email":\n        //logic to send email\n        break;\n      case "sponsor":\n        //logic to open sponsor page\n        break;\n    }\n  }\n\n  return (\n    <div>\n      <ul>\n        {items.map((item) => (\n          <li id={`${item.id}`} key={item.id} onContextMenu={displayMenu}>\n            {/* render content of my list item */}\n          </li>\n        ))}\n      </ul>\n      <Menu id={MENU_ID}>\n        <Item id="remove" onClick={handleItemClick}>\n          Remove row\n        </Item>\n        <Separator />\n        <Item id="share" onClick={handleItemClick}>\n          Share\n        </Item>\n        <Item\n          id="email"\n          onClick={handleItemClick}\n          className={styles.itemContent}\n        >\n          Send email\n        </Item>\n        <Item id="sponsor" onClick={handleItemClick}>\n          Sponsor my work\n        </Item>\n      </Menu>\n    </div>\n  );\n}\n\n')))))}d.isMDXComponent=!0},93:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(t),p=a,b=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return t?r.a.createElement(b,c(c({ref:n},s),{},{components:t})):r.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},94:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},97:function(e,n,t){"use strict";var a=t(0),r=t(98);n.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},98:function(e,n,t){"use strict";var a=t(0);const r=Object(a.createContext)(void 0);n.a=r}}]);
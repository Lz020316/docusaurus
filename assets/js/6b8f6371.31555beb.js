"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[7659],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,d=c["".concat(p,".").concat(m)]||c[m]||h[m]||l;return a?n.createElement(d,o(o({ref:t},i),{},{components:a})):n.createElement(d,o({ref:t},i))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),s=a(16550),p=a(91980),u=a(67392),i=a(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function h(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,p._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=h(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[p,u]=d({queryString:a,groupId:n}),[c,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,i.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),y=(()=>{const e=p??c;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var y=a(72389);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:s,selectValue:p,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),h=e=>{const t=e.currentTarget,a=i.indexOf(t),n=u[a].value;n!==s&&(c(t),p(n))},m=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>i.push(e),onKeyDown:m,onClick:h},o,{className:(0,l.Z)("tabs__item",w.tabItem,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",w.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function v(e){const t=(0,y.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},32415:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),l=a(74866),o=a(85162);const s={title:"Deploy in WhatsApp"},p=void 0,u={unversionedId:"howto/deploy-whatsapp",id:"howto/deploy-whatsapp",title:"Deploy in WhatsApp",description:"WhatsApp  is the most popular IM platform, so this how to guide focuses on deploying the bot in WhatsApp locally. You will learn how to deploy the bot in WhatsApp locally and integrate bot from the list of examples present in the starter templete.",source:"@site/docs/howto/deploy-whatsapp.mdx",sourceDirName:"howto",slug:"/howto/deploy-whatsapp",permalink:"/docs/howto/deploy-whatsapp",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/howto/deploy-whatsapp.mdx",tags:[],version:"current",lastUpdatedBy:"Abhishek Jaiswal",lastUpdatedAt:1634708335,formattedLastUpdatedAt:"Oct 20, 2021",frontMatter:{title:"Deploy in WhatsApp"},sidebar:"docs",previous:{title:"Deploy in WeChat4U",permalink:"/docs/howto/deploy-wechat4u"},next:{title:"Deploy in Lark",permalink:"/docs/howto/deploy-lark"}},i={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Integrating a Bot to WhatsApp",id:"integrating-a-bot-to-whatsapp",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"References",id:"references",level:2},{value:"Blogs",id:"blogs",level:2}],h={toc:c},m="wrapper";function d(e){let{components:t,...s}=e;return(0,r.kt)(m,(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"WhatsApp  is the most popular IM platform, so this how to guide focuses on deploying the bot in WhatsApp locally. You will learn how to deploy the bot in WhatsApp locally and integrate bot from the list of examples present in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"starter templete"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deploy in WhatsApp",src:a(8619).Z,width:"1130",height:"336"})),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Your system must have ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/"},"Node.js")," installed (version >= 16)."),(0,r.kt)("li",{parentName:"ol"},"Your system must have ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty"},"Wechaty")," (version >= 0.40).")),(0,r.kt)("h2",{id:"deployment"},"Deployment"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-whatsapp"),":"),(0,r.kt)(l.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-whatsapp\nexport WECHATY_PUPPET=wechaty-puppet-whatsapp\nnpm start\n"))),(0,r.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-whatsapp\nexport WECHATY_PUPPET=wechaty-puppet-whatsapp\nnpm start\n"))),(0,r.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-whatsapp\nset WECHATY_PUPPET=wechaty-puppet-whatsapp\nnpm start\n")))),(0,r.kt)("h2",{id:"integrating-a-bot-to-whatsapp"},"Integrating a Bot to WhatsApp"),(0,r.kt)("p",null,"Let's take up an example on how to integrate bot from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"starter templete")," to WhatsApp."),(0,r.kt)("p",null,"The steps are similar for all other bots as well."),(0,r.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Offical Wechaty package: ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty"},"package/wechaty"),"."),(0,r.kt)("li",{parentName:"ol"},"QRCode terminal edition: ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/qrcode-terminal"},"package/qrcode-terminal"),".")),(0,r.kt)("p",null,"You can follow up the steps mentioned below:"),(0,r.kt)("ol",null,(0,r.kt)("li",null," Initialize the project by creating a new folder `my-bot`."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir my-bot\ncd my-bot\n")),(0,r.kt)("li",null," Install the dependencies using the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty\nnpm install qrcode-terminal\n")),(0,r.kt)("li",null," Add the dependencies for using the bot with WhatsApp."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-whatsapp\n")),(0,r.kt)("li",null," Create a new folder `src` and add a file `my-bot.js`. Add your custom functions to the code snippet below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Contact,\n  Message,\n  ScanStatus,\n  Wechaty,\n  log,\n} from 'wechaty'\n\nimport qrTerm  from 'qrcode-terminal'\n\nconsole.log(welcome)\nconst bot = new Wechaty()\n\n/*\n *Your function goes here\n */\n")),(0,r.kt)("li",null," After you are done with the file, you can run the bot using the following commands:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-whatsapp\nnode src/my-bot.js\n")),(0,r.kt)("p",null,"Scan it using your WhatsApp and you are ready to play with the bot!"),(0,r.kt)("p",null,"You can deploy the bot with popular container solutions as well such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/howto/heroku"},"Heroku")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/howto/docker"},"Docker"))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Find out some more information about WhatsApp puppet from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-whatsapp"},"wechaty-puppet-whatsapp"),"."),(0,r.kt)("li",{parentName:"ul"},"Get the starter template from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started"},"wechaty-getting-started"),"."),(0,r.kt)("li",{parentName:"ul"},"Find out about other puppet as well from ",(0,r.kt)("a",{parentName:"li",href:"https://wechaty.js.org/docs/puppet-providers/"},"docs/puppet-providers"),".")),(0,r.kt)("h2",{id:"blogs"},"Blogs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/02/15/publishment-of-wechaty-whatsapp-puppet"},"wechaty-puppet-whatsapp"))))}d.isMDXComponent=!0},8619:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deploy-whatsapp-b373068e9cbc1252f451b77a488e80d4.webp"}}]);
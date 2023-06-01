"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[9756],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},i=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),c=s(a),d=n,h=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return a?r.createElement(h,u(u({ref:t},i),{},{components:a})):r.createElement(h,u({ref:t},i))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,u=new Array(l);u[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:n,u[1]=p;for(var s=2;s<l;s++)u[s]=a[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function u(e){let{children:t,hidden:a,className:u}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,u),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>k});var r=a(87462),n=a(67294),l=a(86010),u=a(12466),p=a(16550),o=a(91980),s=a(67392),i=a(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,p.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[u,p]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[o,s]=h({queryString:a,groupId:r}),[c,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,i.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),f=(()=>{const e=o??c;return d({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{f&&p(f)}),[f]);return{selectedValue:u,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);p(e),s(e),b(e)}),[s,b,l]),tabValues:l}}var f=a(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:p,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,u.o5)(),m=e=>{const t=e.currentTarget,a=i.indexOf(t),r=s[a].value;r!==p&&(c(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:u}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:p===t?0:-1,"aria-selected":p===t,key:t,ref:e=>i.push(e),onKeyDown:d,onClick:m},u,{className:(0,l.Z)("tabs__item",y.tabItem,u?.className,{"tabs__item--active":p===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",y.tabList)},n.createElement(g,(0,r.Z)({},e,t)),n.createElement(v,(0,r.Z)({},e,t)))}function k(e){const t=(0,f.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},97915:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),l=a(74866),u=a(85162);const p={title:"Puppet Provider: XP",sidebar_label:"XP"},o=void 0,s={unversionedId:"puppet-providers/xp",id:"puppet-providers/xp",title:"Puppet Provider: XP",description:"Wechaty Puppet XP",source:"@site/docs/puppet-providers/xp.mdx",sourceDirName:"puppet-providers",slug:"/puppet-providers/xp",permalink:"/docs/puppet-providers/xp",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/puppet-providers/xp.mdx",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1636562680,formattedLastUpdatedAt:"Nov 10, 2021",frontMatter:{title:"Puppet Provider: XP",sidebar_label:"XP"},sidebar:"docs",previous:{title:"WeChat4U",permalink:"/docs/puppet-providers/wechat4u"},next:{title:"Oicq",permalink:"/docs/puppet-providers/oicq"}},i={},c=[{value:"Features",id:"features",level:2},{value:"Usage",id:"usage",level:2},{value:"Blogs",id:"blogs",level:2},{value:"Maintainers",id:"maintainers",level:2}],m={toc:c},d="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"xp"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-XP-blueviolet",alt:"Wechaty Puppet XP"}))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://wechaty.js.org/assets/2021/07-puppet-laozhang-wechat-bot/wechat_bot.webp",alt:"Wechaty Puppet XP"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/wechaty-puppet-xp"},(0,n.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/wechaty-puppet-xp.svg",alt:"NPM Version"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-xp?activeTab=versions"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-puppet-xp/next.svg",alt:"npm (tag)"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Repo: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-xp"},"https://github.com/wechaty/wechaty-puppet-xp")),(0,n.kt)("li",{parentName:"ul"},"Support & Feedback: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-xp/issues"},"https://github.com/wechaty/wechaty-puppet-xp/issues"))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("p",null,"Under construction ... Alpha stage."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Support Windows WeChat"),(0,n.kt)("li",{parentName:"ul"},"Hook/Call powered by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/huan/sidecar"},"Sidecar"))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Requires ",(0,n.kt)("a",{parentName:"li",href:"http://dl.softmgr.qq.com/original/im/WeChatSetup_3.3.0.115.exe"},"Windows WeChat 3.3.0.115"))),(0,n.kt)(l.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"linux",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-xp\nexport WECHATY_PUPPET=wechaty-puppet-xp\nnpm start\n"))),(0,n.kt)(u.Z,{value:"mac",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-xp\nexport WECHATY_PUPPET=wechaty-puppet-xp\nnpm start\n"))),(0,n.kt)(u.Z,{value:"windows",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-xp\nset WECHATY_PUPPET=wechaty-puppet-xp\nnpm start\n")))),(0,n.kt)("h2",{id:"blogs"},"Blogs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/07/05/puppet-laozhang-wechat-bot/"},"\u559c\u8baf\uff1a\u4f7f\u7528Windows\u5fae\u4fe1\u684c\u9762\u7248\u534f\u8bae\u767b\u5f55\uff0cwechaty\u514d\u8d39\u7248\u534f\u8bae\u5373\u5c06\u767b\u573a, @atorber, Jul 05, 2021")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/07/13/wechaty-puppet-xp-start-up/"},"\u5168\u65b0\u7684Windows puppet\u9879\u76eewechaty-puppet-xp\u542f\u52a8, @atorber, Jul 13, 2021")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/07/05/code-like-poetry-bot-like-song/"},"code\u5982\u8bd7\uff0cbot\u5982\u6b4c\uff0c\u7531Wechaty\u5f15\u53d1\u7684\u4e00\u4e2a\u5c0f\u767d\u5192\u9669\u4e4b\u65c5, @\u8001\u5f20\u5b66\u6280\u672f, Jul 05, 2021"))),(0,n.kt)("h2",{id:"maintainers"},"Maintainers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/atorber/"},"@atorber")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/cixingguangming55555/"},"@cixingguangming55555"))))}h.isMDXComponent=!0}}]);
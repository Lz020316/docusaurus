"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[5531],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),h=n,d=c["".concat(s,".").concat(h)]||c[h]||m[h]||o;return a?r.createElement(d,i(i({ref:t},p),{},{components:a})):r.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>k});var r=a(87462),n=a(67294),o=a(86010),i=a(12466),l=a(16550),s=a(91980),u=a(67392),p=a(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=m(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=d({queryString:a,groupId:r}),[c,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,p.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),f=(()=>{const e=s??c;return h({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var f=a(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),r=u[a].value;r!==l&&(c(t),s(r))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:m},i,{className:(0,o.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},n.createElement(b,(0,r.Z)({},e,t)),n.createElement(w,(0,r.Z)({},e,t)))}function k(e){const t=(0,f.Z)();return n.createElement(v,(0,r.Z)({key:String(t)},e))}},47851:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),o=a(74866),i=a(85162);const l={title:"Puppet Provider: Gitter",sidebar_label:"Gitter"},s=void 0,u={unversionedId:"puppet-providers/gitter",id:"puppet-providers/gitter",title:"Puppet Provider: Gitter",description:"Wechaty Puppet Gitter",source:"@site/docs/puppet-providers/gitter.md",sourceDirName:"puppet-providers",slug:"/puppet-providers/gitter",permalink:"/docs/puppet-providers/gitter",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/puppet-providers/gitter.md",tags:[],version:"current",lastUpdatedBy:"Soumi Bardhan",lastUpdatedAt:1627120521,formattedLastUpdatedAt:"Jul 24, 2021",frontMatter:{title:"Puppet Provider: Gitter",sidebar_label:"Gitter"},sidebar:"docs",previous:{title:"Official Account",permalink:"/docs/puppet-providers/official-account"},next:{title:"Lark",permalink:"/docs/puppet-providers/lark"}},p={},c=[{value:"Features",id:"features",level:2},{value:"Usage",id:"usage",level:2},{value:"Use Case",id:"use-case",level:2},{value:"Upload Image with Gitter API",id:"upload-image-with-gitter-api",level:2},{value:"Raw API Call",id:"raw-api-call",level:3},{value:"Roadmap",id:"roadmap",level:2},{value:"Important Links",id:"important-links",level:2},{value:"Blogs",id:"blogs",level:2},{value:"Maintainers",id:"maintainers",level:2}],m={toc:c},h="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"gitter"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-Gitter-blueviolet",alt:"Wechaty Puppet Gitter"}))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/wechaty/wechaty-puppet-gitter/HEAD/docs/images/wechaty-puppet-gitter.png",alt:"Wechaty Puppet Gitter"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/wechaty-puppet-gitter"},(0,n.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/wechaty-puppet-gitter.svg",alt:"NPM Version"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-gitter?activeTab=versions"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-puppet-gitter/next.svg",alt:"npm (tag)"}))),(0,n.kt)("p",null,"Gitter support for wechaty makes it easy to build a chatbot on Gitter.im, and sync the room between the Gitter.im and WeChat! This will be useful to you if you want to connect your Gitter room to WeChat room and sync messages between them."),(0,n.kt)("p",null,"To support Gitter.im, the core component is the NPM module wechaty-puppet-gitter, which brings the power of Gitter.im to Wechaty."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Send & receive messages"),(0,n.kt)("li",{parentName:"ol"},"Message type support: TEXT & IMAGE")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(o.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-gitter\nexport WECHATY_PUPPET=wechaty-puppet-gitter\nnpm start\n"))),(0,n.kt)(i.Z,{value:"mac",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-gitter\nexport WECHATY_PUPPET=wechaty-puppet-gitter\nnpm start\n"))),(0,n.kt)(i.Z,{value:"windows",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-gitter\nset WECHATY_PUPPET=wechaty-puppet-gitter\nnpm start\n")))),(0,n.kt)("p",null,"To get to know the details about how it works, please feel free to read the source code of our chatbot, it has been open-sourced ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wechaty/friday/"},"here"),", and here are some entries that good to start with:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wechaty/friday/blob/c73f0647f7a03c5e10ee5745fc4bc2d818456e85/src/bots/gitter/bot.ts#L14-L21"},"Create a Wechaty instance with Gitter Puppet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wechaty/friday/blob/c73f0647f7a03c5e10ee5745fc4bc2d818456e85/src/friday/bot.ts#L23-L26"},"Create a Wechaty instance with Donut Puppet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wechaty/friday/blob/c73f0647f7a03c5e10ee5745fc4bc2d818456e85/src/cross-puppet.ts#L38-L81"},"Sync Gitter Room and WeChat Room Messages"))),(0,n.kt)("h2",{id:"use-case"},"Use Case"),(0,n.kt)("p",null,"You may have a Gitter room wechaty/wechaty, with a SideCar on the wechaty website wechaty.js.org. At the same time, most of wechaty developers are based on WeChat, so you may want to sync the messages between them. With wechaty-puppet-gitter, you can do so easily. This is what happens :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The gitter room wechaty/wechaty will receive all messages that developers send to WeChat room (There are 10+ WeChat rooms, because WeChat do not permit more than 500 users in one room and there are thousands of developers already), forwarded by the Gitter bot: Mike.BO"),(0,n.kt)("li",{parentName:"ul"},"The rooms on WeChat will receive all the messages that developers send to the Gitter room too, forwarded by the WeChat bot: Friday.BOT."),(0,n.kt)("li",{parentName:"ul"},"In order to sync two rooms, we need to create two Wechaty instances, one is using Gitter Puppet and the other is using Donut Puppet(PC Windows Protocol for WeChat).")),(0,n.kt)("h2",{id:"upload-image-with-gitter-api"},"Upload Image with Gitter API"),(0,n.kt)("p",null,"Lets understand how to send an image to the gitter.im room via API."),(0,n.kt)("h3",{id:"raw-api-call"},"Raw API Call"),(0,n.kt)("p",null,"To send an image message to your Gitter room, three API calls are required:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Generate signature: Call api.gitter.im and get a key to use with transloadit service."),(0,n.kt)("li",{parentName:"ol"},"Get transloadit server: Call api2.transloadit.com with the key from step 1, then get a host domain name for using with step 3."),(0,n.kt)("li",{parentName:"ol"},"Upload file: Call the server domain name from step 2, and send the image file to it.")),(0,n.kt)("p",null,"Here\u2019s the demo source code for sending an image message to a Gitter room with Wechaty:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const { Wechaty, FileBox } from 'wechaty'\n\nconst wechaty = new Wechaty({\n  puppet: 'wechaty-puppet-gitter',\n  puppetOptions: { token: 'your_gitter_token' },\n})\n\nasync function main () {\n  await wechaty.start()\n  const room = wechaty.Room.find({ topic: 'gitter/developers' })\n  if (room) {\n    const image = FileBox.fromUrl('https://raw.githubusercontent.com/wechaty/wechaty-puppet-gitter/master/docs/images/wechaty-puppet-gitter.png')\n    await room.say(image)\n  }\n}\n\nmain().catch(console.error)\n")),(0,n.kt)("h2",{id:"roadmap"},"Roadmap"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add ",(0,n.kt)("inlineCode",{parentName:"li"},"roomList")," support"),(0,n.kt)("li",{parentName:"ul"},"Add ",(0,n.kt)("inlineCode",{parentName:"li"},"roomMembers")," support")),(0,n.kt)("h2",{id:"important-links"},"Important Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Repo: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-gitter"},"https://github.com/wechaty/wechaty-puppet-gitter")),(0,n.kt)("li",{parentName:"ul"},"Support & Feedback: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-gitter/issues"},"https://github.com/wechaty/wechaty-puppet-gitter/issues"))),(0,n.kt)("h2",{id:"blogs"},"Blogs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/08/23/wechaty-puppet-gitter/"},"Gitter.im is supported by Wechaty now, Huan, Aug 23, 2020"))),(0,n.kt)("h2",{id:"maintainers"},"Maintainers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/huan"},"@huan"))))}d.isMDXComponent=!0}}]);
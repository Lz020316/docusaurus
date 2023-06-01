"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[4381],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),k=n,d=c["".concat(p,".").concat(k)]||c[k]||m[k]||a;return r?o.createElement(d,i(i({ref:t},u),{},{components:r})):o.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}k.displayName="MDXCreateElement"},81713:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={title:"Puppet Service: WXWork",sidebar_label:"WXWork"},i=void 0,s={unversionedId:"puppet-services/wxwork",id:"puppet-services/wxwork",title:"Puppet Service: WXWork",description:"Wechaty Puppet Service WXWork",source:"@site/docs/puppet-services/wxwork.md",sourceDirName:"puppet-services",slug:"/puppet-services/wxwork",permalink:"/docs/puppet-services/wxwork",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/puppet-services/wxwork.md",tags:[],version:"current",lastUpdatedBy:"NickWang",lastUpdatedAt:1672111665,formattedLastUpdatedAt:"Dec 27, 2022",frontMatter:{title:"Puppet Service: WXWork",sidebar_label:"WXWork"},sidebar:"docs",previous:{title:"WorkPro",permalink:"/docs/puppet-services/workpro"},next:{title:"PadLocal",permalink:"/docs/puppet-services/padlocal"}},p={},l=[{value:"Updates on 2022-12-24",id:"updates-on-2022-12-24",level:2},{value:"Github repository",id:"github-repository",level:2},{value:"How to buy",id:"how-to-buy",level:2},{value:"Known Issues",id:"known-issues",level:2},{value:"Questions",id:"questions",level:2},{value:"History",id:"history",level:2},{value:"Contact",id:"contact",level:2},{value:"More Info",id:"more-info",level:2},{value:"Blogs",id:"blogs",level:2}],u={toc:l},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/puppet-services/wxwork"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Service-WXWork-blue",alt:"Wechaty Puppet Service WXWork"}))),(0,n.kt)("h2",{id:"updates-on-2022-12-24"},"Updates on 2022-12-24"),(0,n.kt)("p",null,"WxWork is deprecated and will not receive any updates. Please switch to our latest service: ",(0,n.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/puppet-services/workpro"},"WorkPro"),"."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-wxwork")," is a ",(0,n.kt)("strong",{parentName:"p"},"WeCom"),"(original WeChat Work) solution. Currently it supports the following features:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Send / Receive Text, Image, Video, File, UrlLink, MiniProgram messages"),(0,n.kt)("li",{parentName:"ul"},"Get Corporation and Individual contacts"),(0,n.kt)("li",{parentName:"ul"},"Get All kinds of rooms with room members"),(0,n.kt)("li",{parentName:"ul"},"Modify alias, phone, corporation and description on a contact"),(0,n.kt)("li",{parentName:"ul"},"Add / Remove members to / from room"),(0,n.kt)("li",{parentName:"ul"},"Modify room topic"),(0,n.kt)("li",{parentName:"ul"},"Room events (join, leave, topic)")),(0,n.kt)("h2",{id:"github-repository"},"Github repository"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Repo: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/juzibot/wxwork-tester"},"https://github.com/juzibot/wxwork-tester")),(0,n.kt)("li",{parentName:"ul"},"Provider: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/juzibot"},"@juzibot"))),(0,n.kt)("h2",{id:"how-to-buy"},"How to buy"),(0,n.kt)("p",null,"Register via WeCom at ",(0,n.kt)("a",{parentName:"p",href:"https://qiwei.juzibot.com/user/login?isWechaty=true"},"jukebox")," and buy the token! Also you can get a SCRM system for free!"),(0,n.kt)("h2",{id:"known-issues"},"Known Issues"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Change company of the account will cause unknown bug to wxwork. See ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/wechaty/puppet-services/issues/100#issuecomment-803709545"},"wechaty/puppet-services#100"))),(0,n.kt)("h2",{id:"questions"},"Questions"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/wechaty/puppet-supports/issues/new?assignees=su-chang%2Chcfw007&labels=workpro&template=workpro.md&title=WXWork%3A+"},"Submit an issue here.")),(0,n.kt)("h2",{id:"history"},"History"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/issues/2057"},"Alpha Announcement: WeCom Puppets wechaty-puppet-wxwork is going to ready for testing! #2057")),(0,n.kt)("li",{parentName:"ol"},"Beta Announcement"),(0,n.kt)("li",{parentName:"ol"},"Release Announcement")),(0,n.kt)("h2",{id:"contact"},"Contact"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Wechat: juzibot")),(0,n.kt)("h2",{id:"more-info"},"More Info"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Support & Feedback: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/juzibot/wxwork-tester/issues"},"https://github.com/juzibot/wxwork-tester/issues"))),(0,n.kt)("h2",{id:"blogs"},"Blogs"),(0,n.kt)("p",null,"Check out blogs with the ",(0,n.kt)("inlineCode",{parentName:"p"},"wxwork")," tag at ",(0,n.kt)("a",{parentName:"p",href:"https://wechaty.js.org/tags.html#wxwork"},"https://wechaty.js.org/tags.html#wxwork")))}m.isMDXComponent=!0}}]);
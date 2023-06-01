"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[9155],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>u});var o=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var m=o.createContext({}),p=function(t){var e=o.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=p(t.components);return o.createElement(m.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},v=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,m=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=p(n),v=i,u=s["".concat(m,".").concat(v)]||s[v]||d[v]||a;return n?o.createElement(u,r(r({ref:e},c),{},{components:n})):o.createElement(u,r({ref:e},c))}));function u(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,r=new Array(a);r[0]=v;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=t,l[s]="string"==typeof t?t:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}v.displayName="MDXCreateElement"},93230:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const a={title:"Room Invitation"},r=void 0,l={unversionedId:"api/room-invitation",id:"api/room-invitation",title:"Room Invitation",description:"Room Invitation",source:"@site/docs/api/room-invitation.md",sourceDirName:"api",slug:"/api/room-invitation",permalink:"/zh/docs/api/room-invitation",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/api/room-invitation.md",tags:[],version:"current",lastUpdatedBy:"Shraddha",lastUpdatedAt:1631203479,formattedLastUpdatedAt:"2021\u5e749\u67089\u65e5",frontMatter:{title:"Room Invitation"},sidebar:"docs",previous:{title:"Room",permalink:"/zh/docs/api/room"},next:{title:"Friendship",permalink:"/zh/docs/api/friendship"}},m={},p=[{value:"Room Invitation",id:"room-invitation",level:2},{value:"roomInvitation.accept() \u21d2 <code>Promise &lt;void&gt;</code>",id:"roominvitationaccept--promise-void",level:3},{value:"Example",id:"example",level:4},{value:"roomInvitation.inviter() \u21d2 <code>Promise &lt;Contact&gt;</code>",id:"roominvitationinviter--promise-contact",level:3},{value:"Example",id:"example-1",level:4},{value:"roomInvitation.topic() \u21d2 <code>Promise &lt;string&gt;</code>",id:"roominvitationtopic--promise-string",level:3},{value:"Example",id:"example-2",level:4},{value:"roomInvitation.date() \u21d2 <code>Promise &lt;Date&gt;</code>",id:"roominvitationdate--promise-date",level:3},{value:"roomInvitation.age() \u21d2 <code>Promise &lt;number&gt;</code>",id:"roominvitationage--promise-number",level:3}],c={toc:p},s="wrapper";function d(t){let{components:e,...n}=t;return(0,i.kt)(s,(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"room-invitation"},"Room Invitation"),(0,i.kt)("p",null,"Room Invitation is a global class that accepts room invitation. This section describes the methods of the Room Invitation class."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Instance Methods"),(0,i.kt)("th",{parentName:"tr",align:null},"Return type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"accept","(",")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Promise"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"inviter","(",")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Promise"),"(Contact)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"topic","(",")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Promise")," (String)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"date","(",")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Promise")," (Date)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"age","(",")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Promise")," (Number)")))),(0,i.kt)("h3",{id:"roominvitationaccept--promise-void"},"roomInvitation.accept","(",")"," \u21d2 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Promise <void>")),(0,i.kt)("p",null,"This method accepts the room invitation. See the following example:"),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot.on('room-invite', async roomInvitation => {\n  try {\n    console.log(`received room-invite event.`)\n    await roomInvitation.accept()\n  } catch (e) {\n    console.error(e)\n  }\n}\n.start()\n")),(0,i.kt)("h3",{id:"roominvitationinviter--promise-contact"},"roomInvitation.inviter","(",")"," \u21d2 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Promise <Contact>")),(0,i.kt)("p",null,"This method gets the inviter from the room invitation. Check the following example:"),(0,i.kt)("h4",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot.on('room-invite', async roomInvitation => {\n  const inviter = await roomInvitation.inviter()\n  const name = inviter.name()\n  console.log(`received room invitation event from ${name}`)\n}\n.start()\n")),(0,i.kt)("h3",{id:"roominvitationtopic--promise-string"},"roomInvitation.topic","(",")"," \u21d2 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Promise <string>")),(0,i.kt)("p",null,"The method gets the room topic from room invitation as shown in the below example:"),(0,i.kt)("h4",{id:"example-2"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot.on('room-invite', async roomInvitation => {\n  const topic = await roomInvitation.topic()\n  console.log(`received room invitation event from room ${topic}`)\n}\n.start()\n")),(0,i.kt)("h3",{id:"roominvitationdate--promise-date"},"roomInvitation.date","(",")"," \u21d2 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Promise <Date>")),(0,i.kt)("p",null,"The method gets the invitation date and time."),(0,i.kt)("h3",{id:"roominvitationage--promise-number"},"roomInvitation.age","(",")"," \u21d2 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Promise <number>")),(0,i.kt)("p",null,"The method returns the roopm invitation age in seconds.\nFor example, the invitation is sent at time ",(0,i.kt)("inlineCode",{parentName:"p"},"8:43:01"),", and when we received it in Wechaty, the time is ",(0,i.kt)("inlineCode",{parentName:"p"},"8:43:15"),", then the age","(",")"," will return ",(0,i.kt)("inlineCode",{parentName:"p"},"8:43:15 - 8:43:01 = 14 (seconds)")))}d.isMDXComponent=!0}}]);
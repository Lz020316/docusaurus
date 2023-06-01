"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[3837],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var c=n.createContext({}),p=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,o=t.originalType,c=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=p(a),u=l,k=s["".concat(c,".").concat(u)]||s[u]||m[u]||o;return a?n.createElement(k,r(r({ref:e},d),{},{components:a})):n.createElement(k,r({ref:e},d))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=a.length,r=new Array(o);r[0]=u;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[s]="string"==typeof t?t:l,r[1]=i;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},17929:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const o={title:"Contact Class"},r=void 0,i={unversionedId:"api/contact",id:"api/contact",title:"Contact Class",description:"All wechat contacts(friend) will be encapsulated as a Contact.",source:"@site/docs/api/contact.md",sourceDirName:"api",slug:"/api/contact",permalink:"/docs/api/contact",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/api/contact.md",tags:[],version:"current",lastUpdatedBy:"Shraddha",lastUpdatedAt:1631525611,formattedLastUpdatedAt:"Sep 13, 2021",frontMatter:{title:"Contact Class"},sidebar:"docs",previous:{title:"Message",permalink:"/docs/api/message"},next:{title:"Room",permalink:"/docs/api/room"}},c={},p=[{value:"Classes",id:"classes",level:2},{value:"Contact",id:"contact",level:2},{value:"Properties",id:"properties",level:3},{value:"Global Class <code>Contact</code>",id:"global-class-contact",level:2},{value:"Instance Methods",id:"instance-methods",level:3},{value:"Static Methods",id:"static-methods",level:3},{value:"contact.say(textOrContactOrFileOrUrlLinkOrMiniProgram) \u21d2 <code>Promise &lt;void&gt;</code>",id:"contactsaytextorcontactorfileorurllinkorminiprogram--promise-void",level:3},{value:"Example",id:"example",level:3},{value:"contact.name() \u21d2 <code>string</code>",id:"contactname--string",level:3},{value:"Example",id:"example-1",level:3},{value:"contact.alias(newAlias) \u21d2 <code>Promise &lt;null | string | void&gt;</code>",id:"contactaliasnewalias--promise-null--string--void",level:3},{value:"Example ( GET the alias for a contact, return {(Promise&lt;string | null&gt;)})",id:"example--get-the-alias-for-a-contact-return-promisestring--null",level:3},{value:"Example (SET the alias for a contact)",id:"example-set-the-alias-for-a-contact",level:3},{value:"Example (DELETE the alias for a contact)",id:"example-delete-the-alias-for-a-contact",level:3},{value:"Contact.friend() \u21d2 <code>boolean</code> | <code>null</code>",id:"contactfriend--boolean--null",level:3},{value:"Example",id:"example-2",level:3},{value:"Contact.type() \u21d2 <code>ContactType.Unknown</code> | <code>ContactType.Personal</code> | <code>ContactType.Official</code>",id:"contacttype--contacttypeunknown--contacttypepersonal--contacttypeofficial",level:3},{value:"Example",id:"example-3",level:3},{value:"contact.gender() \u21d2 <code>ContactGender.Unknown</code> | <code>ContactGender.Male</code> | <code>ContactGender.Female</code>",id:"contactgender--contactgenderunknown--contactgendermale--contactgenderfemale",level:3},{value:"Example",id:"example-4",level:3},{value:"Contact.province() \u21d2 <code>string</code> | <code>null</code>",id:"contactprovince--string--null",level:3},{value:"Example",id:"example-5",level:3},{value:"Contact.city() \u21d2 <code>string</code> | <code>null</code>",id:"contactcity--string--null",level:3},{value:"Example",id:"example-6",level:3},{value:"Contact.avatar() \u21d2 <code>Promise &lt;FileBox&gt;</code>",id:"contactavatar--promise-filebox",level:3},{value:"Example",id:"example-7",level:3},{value:"Contact.sync() \u21d2 <code>Promise &lt;void&gt;</code>",id:"contactsync--promise-void",level:3},{value:"Example",id:"example-8",level:3},{value:"Contact.self() \u21d2 <code>boolean</code>",id:"contactself--boolean",level:3},{value:"Example",id:"example-9",level:3},{value:"Static Methods",id:"static-methods-1",level:2},{value:"Contact.find(query) \u21d2 <code>Promise &lt;Contact | null&gt;</code>",id:"contactfindquery--promise-contact--null",level:3},{value:"Example",id:"example-10",level:4},{value:"Contact.findAll([queryArg]) \u21d2 <code>Promise &lt;Contact []&gt;</code>",id:"contactfindallqueryarg--promise-contact-",level:3},{value:"Definition",id:"definition",level:4},{value:"Example",id:"example-11",level:4},{value:"Typedefs",id:"typedefs",level:2},{value:"ContactQueryFilter",id:"contactqueryfilter",level:3},{value:"Properties",id:"properties-1",level:3}],d={toc:p},s="wrapper";function m(t){let{components:e,...a}=t;return(0,l.kt)(s,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"All wechat contacts(friend) will be encapsulated as a Contact."),(0,l.kt)("h2",{id:"classes"},"Classes"),(0,l.kt)("p",null,"All wechat contacts","(","friend",")"," will be encapsulated as a Contact.\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/contact-bot.ts"},"Examples/Contact-Bot")),(0,l.kt)("h2",{id:"contact"},"Contact"),(0,l.kt)("p",null,"All wechat contacts","(","friend",")"," will be encapsulated as a Contact."),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"id"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Get Contact id. This function is depending on the Puppet Implementation, see ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table"},"puppet-compatible-table"))))),(0,l.kt)("h2",{id:"global-class-contact"},"Global Class ",(0,l.kt)("inlineCode",{parentName:"h2"},"Contact")),(0,l.kt)("h3",{id:"instance-methods"},"Instance Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Instance Methods"),(0,l.kt)("th",{parentName:"tr",align:null},"Return type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"say(text Or Contact Or File Or Url)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Promise"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name()"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"alias(newAlias)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Promise"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"friend()"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean or null"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type()"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ContactType.Unknown or ContactType.Personal or ContactType.Official"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gender()"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ContactGender.Unknown or ContactGender.Male or ContactGender.Female"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"province()"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String or null"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"city()"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String or null"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"avatar()"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Promise"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sync()"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Promise"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"self()"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean"))))),(0,l.kt)("h3",{id:"static-methods"},"Static Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Static Methods"),(0,l.kt)("th",{parentName:"tr",align:null},"Return Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"find(query)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Promise <Contact \\| null>"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"findAll(Query Arguements)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Promise <Contact []>"))))),(0,l.kt)("h3",{id:"contactsaytextorcontactorfileorurllinkorminiprogram--promise-void"},"contact.say","(","textOrContactOrFileOrUrlLinkOrMiniProgram",")"," \u21d2 ",(0,l.kt)("inlineCode",{parentName:"h3"},"Promise <void>")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Tips: This function is depending on the Puppet Implementation, see ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table"},"puppet-compatible-table"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"textOrContactOrFileOrUrlLinkOrMiniProgram"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("a",{parentName:"td",href:"/docs/api/contact#Contact"},(0,l.kt)("inlineCode",{parentName:"a"},"Contact"))," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"FileBox")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"UrlLink")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"MiniProgram")),(0,l.kt)("td",{parentName:"tr",align:"left"},"send text, Contact, file or UrlLink to contact.   You can use ",(0,l.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/file-box"},"FileBox")," to send file")))),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { FileBox }  from 'file-box'\nimport {\n  Wechaty,\n  UrlLink,\n  MiniProgram,\n}  from 'wechaty'\n\nconst bot = new Wechaty()\nawait bot.start()\nconst contact = await bot.Contact.find({name: 'lijiarui'})  // change 'lijiarui' to any of your contact name in wechat\n\n// 1. send text to contact\n\nawait contact.say('welcome to wechaty!')\n\n// 2. send media file to contact\n\nimport { FileBox }  from 'file-box'\nconst fileBox1 = FileBox.fromUrl('https://wechaty.github.io/wechaty/images/bot-qr-code.png')\nconst fileBox2 = FileBox.fromFile('/tmp/text.txt')\nawait contact.say(fileBox1)\nawait contact.say(fileBox2)\n\n// 3. send contact card to contact\n\nconst contactCard = bot.Contact.load('contactId')\nawait contact.say(contactCard)\n\n// 4. send url link to contact\n\nconst urlLink = new UrlLink({\n  description : 'WeChat Bot SDK for Individual Account, Powered by TypeScript, Docker, and Love',\n  thumbnailUrl: 'https://avatars0.githubusercontent.com/u/25162437?s=200&v=4',\n  title       : 'Welcome to Wechaty',\n  url         : 'https://github.com/wechaty/wechaty',\n})\nawait contact.say(urlLink)\n\n// 5. send MiniProgram (only supported by `wechaty-puppet-macpro`)\n\nconst miniProgram = new MiniProgram ({\n  appid              : 'gh_0aa444a25adc',\n  title              : '\u6211\u6b63\u5728\u4f7f\u7528Authing\u8ba4\u8bc1\u8eab\u4efd\uff0c\u4f60\u4e5f\u6765\u8bd5\u8bd5\u5427',\n  pagePath           : 'routes/explore.html',\n  description        : '\u8eab\u4efd\u7ba1\u5bb6',\n  thumbUrl           : '30590201000452305002010002041092541302033d0af802040b30feb602045df0c2c5042b777875706c6f61645f31373533353339353230344063686174726f6f6d3131355f313537363035393538390204010400030201000400',\n  thumbKey           : '42f8609e62817ae45cf7d8fefb532e83',\n});\n\nawait contact.say(miniProgram);\n")),(0,l.kt)("h3",{id:"contactname--string"},"contact.name","(",")"," \u21d2 ",(0,l.kt)("inlineCode",{parentName:"h3"},"string")),(0,l.kt)("p",null,"The method gets the name from a contact.Check the below illustation for implementation."),(0,l.kt)("h3",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const name = contact.name()\n")),(0,l.kt)("h3",{id:"contactaliasnewalias--promise-null--string--void"},"contact.alias","(","newAlias",")"," \u21d2 ",(0,l.kt)("inlineCode",{parentName:"h3"},"Promise <null | string | void>")),(0,l.kt)("p",null,"The method gets or sets or deletes the alias for a contact.Tests show it will failed if set alias too frequently","(","60 times in one minute",")","."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"newAlias"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"none")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"null"))))),(0,l.kt)("h3",{id:"example--get-the-alias-for-a-contact-return-promisestring--null"},"Example ","("," GET the alias for a contact, return {","(","Promise","<","string ","|"," null",">",")","}",")"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const alias = await contact.alias()\nif (alias === null) {\n  console.log('You have not yet set any alias for contact ' + contact.name())\n} else {\n  console.log('You have already set an alias for contact ' + contact.name() + ':' + alias)\n}\n")),(0,l.kt)("h3",{id:"example-set-the-alias-for-a-contact"},"Example ","(","SET the alias for a contact",")"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"try {\n  await contact.alias('lijiarui')\n  console.log(`change ${contact.name()}'s alias successfully!`)\n} catch (e) {\n  console.log(`failed to change ${contact.name()} alias!`)\n}\n")),(0,l.kt)("h3",{id:"example-delete-the-alias-for-a-contact"},"Example ","(","DELETE the alias for a contact",")"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"try {\n  const oldAlias = await contact.alias(null)\n  console.log(`delete ${contact.name()}'s alias successfully!`)\n  console.log(`old alias is ${oldAlias}`)\n} catch (e) {\n  console.log(`failed to delete ${contact.name()}'s alias!`)\n}\n")),(0,l.kt)("h3",{id:"contactfriend--boolean--null"},"Contact.friend","(",")"," \u21d2 ",(0,l.kt)("inlineCode",{parentName:"h3"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"h3"},"null")),(0,l.kt)("p",null,"The method checks if contact is friend.It returns ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," for friend of the bot and  ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," for not friend of the bot, ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," for unknown."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Tips: This function is depending on the Puppet Implementation, see ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table"},"puppet-compatible-table"))),(0,l.kt)("h3",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const isFriend = contact.friend()\n")),(0,l.kt)("h3",{id:"contacttype--contacttypeunknown--contacttypepersonal--contacttypeofficial"},"Contact.type","(",")"," \u21d2 ",(0,l.kt)("inlineCode",{parentName:"h3"},"ContactType.Unknown")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"h3"},"ContactType.Personal")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"h3"},"ContactType.Official")),(0,l.kt)("p",null,"This method returns the type of the Contact.Check the example below for implementation."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Tips: ContactType is enum here.")),(0,l.kt)("h3",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nawait bot.start()\nconst isOfficial = contact.type() === bot.Contact.Type.Official\n")),(0,l.kt)("h3",{id:"contactgender--contactgenderunknown--contactgendermale--contactgenderfemale"},"contact.gender","(",")"," \u21d2 ",(0,l.kt)("inlineCode",{parentName:"h3"},"ContactGender.Unknown")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"h3"},"ContactGender.Male")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"h3"},"ContactGender.Female")),(0,l.kt)("p",null,"The method gets the Contact gender.Check the below example for implementation."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Tips: ContactGender is enum here.")),(0,l.kt)("h3",{id:"example-4"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const gender = contact.gender() === bot.Contact.Gender.Male\n")),(0,l.kt)("h3",{id:"contactprovince--string--null"},"Contact.province","(",")"," \u21d2 ",(0,l.kt)("inlineCode",{parentName:"h3"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"h3"},"null")),(0,l.kt)("p",null,"This method gets the region 'province' from a contact.Check the below example for implementation."),(0,l.kt)("h3",{id:"example-5"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const province = contact.province()\n")),(0,l.kt)("h3",{id:"contactcity--string--null"},"Contact.city","(",")"," \u21d2 ",(0,l.kt)("inlineCode",{parentName:"h3"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"h3"},"null")),(0,l.kt)("p",null,"This method gets the region 'city' from a contact.Check the below example for implementation."),(0,l.kt)("h3",{id:"example-6"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const city = contact.city()\n")),(0,l.kt)("h3",{id:"contactavatar--promise-filebox"},"Contact.avatar","(",")"," \u21d2 ",(0,l.kt)("inlineCode",{parentName:"h3"},"Promise <FileBox>")),(0,l.kt)("p",null,"This method gets avatar picture from file stream.Check the below example for implementation."),(0,l.kt)("h3",{id:"example-7"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// Save avatar to local file like `1-name.jpg`\n\nconst file = await contact.avatar()\nconst name = file.name\nawait file.toFile(name, true)\nconsole.log(`Contact: ${contact.name()} with avatar file: ${name}`)\n")),(0,l.kt)("h3",{id:"contactsync--promise-void"},"Contact.sync","(",")"," \u21d2 ",(0,l.kt)("inlineCode",{parentName:"h3"},"Promise <void>")),(0,l.kt)("p",null,"The method force reload of data for Contact, Sync data from lowlevel API again.Check the below example for implementation."),(0,l.kt)("h3",{id:"example-8"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"await contact.sync()\n")),(0,l.kt)("h3",{id:"contactself--boolean"},"Contact.self","(",")"," \u21d2 ",(0,l.kt)("inlineCode",{parentName:"h3"},"boolean")),(0,l.kt)("p",null,"The method checks if contact is self.It returns ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")," - True for contact is self, False for contact is others.Check the below example for implementation."),(0,l.kt)("h3",{id:"example-9"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const isSelf = contact.self()\n")),(0,l.kt)("h2",{id:"static-methods-1"},"Static Methods"),(0,l.kt)("h3",{id:"contactfindquery--promise-contact--null"},"Contact.find","(","query",")"," \u21d2 ",(0,l.kt)("inlineCode",{parentName:"h3"},"Promise <Contact | null>")),(0,l.kt)("p",null,"The method finds the contact by name or alias, if the result more than one, return the first one.Try to find a contact by filter: {name: string ","|"," RegExp} / {alias: string ","|"," RegExp}.The returns ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise.")," - If it can find the contact,or return ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"query"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/contact#ContactQueryFilter"},(0,l.kt)("inlineCode",{parentName:"a"},"ContactQueryFilter")))))),(0,l.kt)("h4",{id:"example-10"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'const bot = new Wechaty()\nawait bot.start()\nconst contactFindByName = await bot.Contact.find({ name:"ruirui"} )\nconst contactFindByAlias = await bot.Contact.find({ alias:"lijiarui"} )\n')),(0,l.kt)("h3",{id:"contactfindallqueryarg--promise-contact-"},"Contact.findAll","(","[","queryArg","]",")"," \u21d2 ",(0,l.kt)("inlineCode",{parentName:"h3"},"Promise <Contact []>")),(0,l.kt)("p",null,"This method finds contact by ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"alias"),".If  you use Contact.findAll","(",")"," get the contact list of the bot. Include the contacts from bot's rooms."),(0,l.kt)("h4",{id:"definition"},"Definition"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name"),"   the name-string set by user-self, should be called name"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"alias"),"  the name-string set by bot for others, should be called alias")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"queryArg"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/contact#ContactQueryFilter"},(0,l.kt)("inlineCode",{parentName:"a"},"ContactQueryFilter")))))),(0,l.kt)("h4",{id:"example-11"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nawait bot.start()\nconst contactList = await bot.Contact.findAll()                      // get the contact list of the bot\nconst contactList = await bot.Contact.findAll({ name: 'ruirui' })    // find all of the contacts whose name is 'ruirui'\nconst contactList = await bot.Contact.findAll({ alias: 'lijiarui' }) // find all of the contacts whose alias is 'lijiarui'\n")),(0,l.kt)("h2",{id:"typedefs"},"Typedefs"),(0,l.kt)("h3",{id:"contactqueryfilter"},"ContactQueryFilter"),(0,l.kt)("p",null,"It is a  global ",(0,l.kt)("inlineCode",{parentName:"p"},"typedef")," used to search contacts."),(0,l.kt)("h3",{id:"properties-1"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"name"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The name-string set by user-self, should be called name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"alias"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The name-string set by bot for others, should be called alias ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/wechaty/wechaty/issues/365"},"More Detail"))))))}m.isMDXComponent=!0}}]);
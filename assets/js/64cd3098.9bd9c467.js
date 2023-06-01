"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[8500],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>g});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),m=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=m(e.components);return n.createElement(u.Provider,{value:a},e.children)},i="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),i=m(t),d=o,g=i["".concat(u,".").concat(d)]||i[d]||p[d]||l;return t?n.createElement(g,r(r({ref:a},c),{},{components:t})):n.createElement(g,r({ref:a},c))}));function g(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=d;var s={};for(var u in a)hasOwnProperty.call(a,u)&&(s[u]=a[u]);s.originalType=e,s[i]="string"==typeof e?e:o,r[1]=s;for(var m=2;m<l;m++)r[m]=t[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(67294),o=t(86010);const l={tabItem:"tabItem_Ymn6"};function r(e){let{children:a,hidden:t,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(l.tabItem,r),hidden:t},a)}},74866:(e,a,t)=>{t.d(a,{Z:()=>T});var n=t(87462),o=t(67294),l=t(86010),r=t(12466),s=t(16550),u=t(91980),m=t(67392),c=t(50012);function i(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:o}}=e;return{value:a,label:t,attributes:n,default:o}}))}function p(e){const{values:a,children:t}=e;return(0,o.useMemo)((()=>{const e=a??i(t);return function(e){const a=(0,m.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function d(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function g(e){let{queryString:a=!1,groupId:t}=e;const n=(0,s.k6)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,u._X)(l),(0,o.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(n.location.search);a.set(l,e),n.replace({...n.location,search:a.toString()})}),[l,n])]}function y(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,l=p(e),[r,s]=(0,o.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:l}))),[u,m]=g({queryString:t,groupId:n}),[i,y]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,l]=(0,c.Nk)(t);return[n,(0,o.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:n}),h=(()=>{const e=u??i;return d({value:e,tabValues:l})?e:null})();(0,o.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),m(e),y(e)}),[m,y,l]),tabValues:l}}var h=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:a,block:t,selectedValue:s,selectValue:u,tabValues:m}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,r.o5)(),p=e=>{const a=e.currentTarget,t=c.indexOf(a),n=m[t].value;n!==s&&(i(a),u(n))},d=e=>{let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}a?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},a)},m.map((e=>{let{value:a,label:t,attributes:r}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,key:a,ref:e=>c.push(e),onKeyDown:d,onClick:p},r,{className:(0,l.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":s===a})}),t??a)})))}function k(e){let{lazy:a,children:t,selectedValue:n}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},l.map(((e,a)=>(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function b(e){const a=y(e);return o.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},o.createElement(v,(0,n.Z)({},e,a)),o.createElement(k,(0,n.Z)({},e,a)))}function T(e){const a=(0,h.Z)();return o.createElement(b,(0,n.Z)({key:String(a)},e))}},62490:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>m,toc:()=>i});var n=t(87462),o=(t(67294),t(3905)),l=t(74866),r=t(85162);const s={slug:"/howto/degraded/degraded-room-md",title:"Managing rooms"},u=void 0,m={unversionedId:"howto/degraded/degraded-room",id:"howto/degraded/degraded-room",title:"Managing rooms",description:'Managing room is one of the important features in Wechaty. The word "room" here refers to Wechat rooms (also called groups).',source:"@site/docs/howto/degraded/degraded-room.md",sourceDirName:"howto/degraded",slug:"/howto/degraded/degraded-room-md",permalink:"/docs/howto/degraded/degraded-room-md",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/howto/degraded/degraded-room.md",tags:[],version:"current",lastUpdatedBy:"Yuan Gao",lastUpdatedAt:1672114905,formattedLastUpdatedAt:"Dec 27, 2022",frontMatter:{slug:"/howto/degraded/degraded-room-md",title:"Managing rooms"}},c={},i=[{value:"Creating New Room",id:"creating-new-room",level:2},{value:"Adding contact to room",id:"adding-contact-to-room",level:2},{value:"Remove contact from room",id:"remove-contact-from-room",level:2},{value:"Changing topic of the room",id:"changing-topic-of-the-room",level:2},{value:"Mention(@) others in the room",id:"mention-others-in-the-room",level:2},{value:"Moniting room events",id:"moniting-room-events",level:2}],p={toc:i},d="wrapper";function g(e){let{components:a,...t}=e;return(0,o.kt)(d,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Managing room is one of the important features in Wechaty. The word "room" here refers to Wechat rooms (also called groups).\nYou can instruct the bot to create a new room, change the topic (or name) of the room, add a contact to a specific room, remove a contact from a room, and mention(@) someone in the room.'),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"A Room can be identified by either groupId or room topic (room name)")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"creating-new-room"},"Creating New Room"),(0,o.kt)(l.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from __future__ import annotations\nfrom typing import List\n\nfrom wechaty import (\n    Wechaty,\n    Contact,\n    Room,\n    Message\n)\n\n\nclass MyBot(Wechaty):\n    async def on_ready(self, _):\n        \"\"\"creating room\"\"\"\n        # 1. filter friend\n        friends: List[Contact] = await self.Contact.find_all()\n        # find my python-wechaty related friends\n        friends = [friend for friend in friends if friend.alias().startswith('python-wechaty')]\n\n        # 2. create room and invite them\n        room: Room = await self.Room.create(friends, topic='Python\u2764Wechaty')\n        if room:\n            room.say('hello, python-wechaty is ready for you.')\n"))),(0,o.kt)(r.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,o.kt)("h2",{id:"adding-contact-to-room"},"Adding contact to room"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"add")," accepts 'Contact' as an argument. You can get the Contact by using ",(0,o.kt)("inlineCode",{parentName:"p"},"msg.talker()"),"."),(0,o.kt)(l.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Contact,\n  Wechaty,\n  log,\n  Room,\n} from 'wechaty'\n\n//helper function\nasync function putInRoom(person: Contact, room: Room) {\n  //Add a log\n  log.info(\"Bot\", 'putInRoom(\"%s\", \"%s\")', contact.name(), await room.topic());\n\n  try {\n    //Try put the person into the room\n    await room.add(person);\n  } catch (e) {\n    //any error will be here\n    log.error(\"Bot\", \"putInRoom() exception: \" + e.stack);\n  }\n}\n\n//in the main code\n//If the secrete code is ding\nif (msg.text() === 'ding') {\n  //get the Person/Contact\n  const from = msg.talker();\n\n  //find the targetRoom from the bot's room list\n  //Option1: by group id\n  //set the targetRoomId\n  const tagetRoomId = '12345678910@chatroom'\n  const targetRoom = await bot.Room.find({id: tagetRoomId})\n  //Option2: by group name\n  // const tagetRoomTopic =  'testGroup'\n  // const targetRoom = await bot.Room.find({topic:tagetRoomTopic})\n  if (targetRoom instanceof Room) {\n    await putInRoom(from, targetRoom);\n  } else {\n    log.info('Cannot find room, unable to put the person into the room')\n  }\n}\n"))),(0,o.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'from __future__ import annotations\nfrom typing import List\n\nfrom wechaty import (\n    Wechaty,\n    Contact,\n    Room,\n    Message\n)\n\n\nclass MyBot(Wechaty):\n\n    async def on_message(self, msg: Message):\n        """add friend to room if they send `python-wechaty` keyword to be"""\n\n        # invite someone to the room by keyword<python-wechaty>\n        if msg.text() == \'python-wechaty\':\n            talker: Contact = await msg.talker()\n            room: Room = await msg.room()\n            mention_self: bool = await msg.mention_self()\n            python_wechaty_room: Room = await self.Room.find(query=\'id-of-your-room\')\n            if room:\n                if mention_self:\n                    await python_wechaty_room.add(talker)\n            else:\n                await python_wechaty_room.add(talker)\n'))),(0,o.kt)(r.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,o.kt)("h2",{id:"remove-contact-from-room"},"Remove contact from room"),(0,o.kt)(l.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from __future__ import annotations\nfrom typing import List\n\nfrom wechaty import (\n    Wechaty,\n    Contact,\n    Room,\n    Message\n)\n\n\nclass MyBot(Wechaty):\n\n    async def on_message(self, msg: Message):\n        room: Room = await msg.room()\n        if room:\n            # func<is_dangerous_words> is to detect whether the content is dangerous\n            if is_dangerous_words(msg.text()):\n                talker: Contact = await msg.talker()\n                room.delete(talker)\n"))),(0,o.kt)(r.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,o.kt)("h2",{id:"changing-topic-of-the-room"},"Changing topic of the room"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"topic")," accepts a ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," as an argument.\nYou can find the ",(0,o.kt)("inlineCode",{parentName:"p"},"Room")," by either room name (a ",(0,o.kt)("inlineCode",{parentName:"p"},"String"),") or room id (format '12345678910@chatroom')"),(0,o.kt)(l.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Wechaty,\n  log,\n  Room,\n} from 'wechaty'\n//helper function\nasync function changeRoomTopic(room: Room) {\n  log.info(\"Bot\", 'changing room topic for group', await room.topic());\n  const newName =\"newName\"\n  try {\n    await room.topic(newName);\n    \n  } catch (e) {\n    log.error(\"Bot\", \"changeRoomTopic() exception: \" + e.stack);\n  }\n\n  //Option1: by group id\n  //set the targetRoomId\n  const tagetRoomId = '12345678910@chatroom'\n  const targetRoom = await bot.Room.find({id: tagetRoomId})\n  //Option2: by group name\n  // const tagetRoomTopic = 'ceshiqun'\n  // const targetRoom = await bot.Room.find({topic:tagetRoomTopic})\n  if (targetRoom instanceof Room) {\n    await changeRoomTopic(targetRoom);\n  } else {\n    log.info('cannot find room, unable to changeRoomTopic')\n  }\n  \n}\n\n"))),(0,o.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from __future__ import annotations\nfrom typing import List\n\nfrom wechaty import (\n    Wechaty,\n    Room,\n    Message\n)\n\n\nclass MyBot(Wechaty):\n\n    async def on_message(self, msg: Message):\n        \"\"\"change room topic by token\"\"\"\n        room: Room = await msg.room()\n        if not room:\n            return\n\n        text: str = await msg.text()\n        talker: Contact = await msg.talker()\n        keyword = 'new-topic:'\n        if talker.alias() == 'admin' and text.startswith(keyword):\n            new_topic: str = text[len(keyword):]\n            old_topic: str = await room.topic()\n            await room.say(f'ok, I will change old_topic<{old_topic}> to new_topic<{new_topic}>')\n            \n            # change the topic of room\n            await room.topic(new_topic)\n"))),(0,o.kt)(r.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,o.kt)("h2",{id:"mention-others-in-the-room"},"Mention(@) others in the room"),(0,o.kt)(l.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"await room.say`Hello, ${contact}`\n"))),(0,o.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await room.say`Hello, ${contact}`\n"))),(0,o.kt)(r.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"# TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(r.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,o.kt)("h2",{id:"moniting-room-events"},"Moniting room events"),(0,o.kt)("p",null,"TBW ..."))}g.isMDXComponent=!0}}]);
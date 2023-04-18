"use strict";(self.webpackChunk_discijs_docs=self.webpackChunk_discijs_docs||[]).push([[90],{7522:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(9901);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4873:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7364),a=(r(9901),r(7522));const o={sidebar_position:0},i="Introduction",s={unversionedId:"Home/Intro",id:"Home/Intro",title:"Introduction",description:"DisciJs",source:"@site/docs/Home/Intro.md",sourceDirName:"Home",slug:"/Home/Intro",permalink:"/docs/next/Home/Intro",draft:!1,editUrl:"https://github.com/typicalninja493/disci/docs/Home/Intro.md",tags:[],version:"current",lastUpdatedAt:1681822090,formattedLastUpdatedAt:"Apr 18, 2023",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Installing",permalink:"/docs/next/Home/Installing"}},l={},c=[{value:"Advantages",id:"advantages",level:3},{value:"Disadvantages",id:"disadvantages",level:3},{value:"Requirements/supported",id:"requirementssupported",level:2},{value:"Before you begin...",id:"before-you-begin",level:2},{value:"Javascript resources",id:"javascript-resources",level:4},{value:"Nodej.js Resources",id:"nodejjs-resources",level:4}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/disci"},(0,a.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/disci.png",alt:"DisciJs"}))),(0,a.kt)("p",null,"A simple and easy to use module for creating discord bots.This packages uses discord's ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/interactions/receiving-and-responding#receiving-an-interaction"},"Http interactions")," instead of the normal Discord Gateway."),(0,a.kt)("h3",{id:"advantages"},"Advantages"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Support Serverless - You can run these bots on serverless platforms, which are cheaper than usual hosting methods.Many services also includes generous free tiers.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"No Sharding - No sharding is required for http interaction bots.Load balancing as for a Normal webserver is possible (not tested) but not needed.Specially for serverless platforms")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Documented"))),(0,a.kt)("h3",{id:"disadvantages"},"Disadvantages"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"No realtime events - Since the bot only receive's data based on your application, no realtime event is possible without a gateway.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Serverless platform limitations"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Many more ",(0,a.kt)("inlineCode",{parentName:"p"},"Advantages")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Disadvantages"))),(0,a.kt)("h2",{id:"requirementssupported"},"Requirements/supported"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Node.js Backend - Tested using a fastify webserver"),(0,a.kt)("li",{parentName:"ul"},"Serverless platflorm (not tested throughly/old tests for now)")),(0,a.kt)("h2",{id:"before-you-begin"},"Before you begin..."),(0,a.kt)("p",null,"To create a bot You must have a decent grasp in concepts of javascript and node.js.\nIf you dont know JS (or Node.js) but would like to learn it, Below links will help you get started."),(0,a.kt)("h4",{id:"javascript-resources"},"Javascript resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},"MDN's JavaScript documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://javascript.info/"},"JavaScript.info, Modern Javascript tutorial")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.codecademy.com/learn/introduction-to-javascript"},"Codecademy's Javascript course"))),(0,a.kt)("h4",{id:"nodejjs-resources"},"Nodej.js Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodeschool.io/"},"NodeSchool's Guide for Node.js and Javascript"))),(0,a.kt)("p",null,"Take your pick.Once you are confident with the language come back here and build a ",(0,a.kt)("strong",{parentName:"p"},"AWESOME BOT")," : )"))}d.isMDXComponent=!0}}]);
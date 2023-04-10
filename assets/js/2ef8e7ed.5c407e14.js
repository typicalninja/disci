"use strict";(self.webpackChunk_discijs_docs=self.webpackChunk_discijs_docs||[]).push([[176],{7522:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(9901);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6602:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(7364),i=(r(9901),r(7522));const a={id:"IRequest",title:"Interface: IRequest",sidebar_label:"IRequest",sidebar_position:0,custom_edit_url:null},s=void 0,o={unversionedId:"api/interfaces/IRequest",id:"api/interfaces/IRequest",title:"Interface: IRequest",description:"Common Request type containing required parts for our scripts",source:"@site/docs/api/interfaces/IRequest.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/IRequest",permalink:"/docs/api/interfaces/IRequest",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1681151998,formattedLastUpdatedAt:"Apr 10, 2023",sidebarPosition:0,frontMatter:{id:"IRequest",title:"Interface: IRequest",sidebar_label:"IRequest",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"IHandlerOptions",permalink:"/docs/api/interfaces/IHandlerOptions"},next:{title:"IResponse",permalink:"/docs/api/interfaces/IResponse"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"body",id:"body",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"headers",id:"headers",level:3},{value:"Defined in",id:"defined-in-1",level:4}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Common Request type containing required parts for our scripts"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"body"},"body"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"body"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Body of the Request"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/utils/request.ts#L14"},"packages/disci/src/utils/request.ts:14")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"headers"},"headers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"headers"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("p",null,"Headers of the Request\nUsed for validation"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/utils/request.ts#L20"},"packages/disci/src/utils/request.ts:20")))}u.isMDXComponent=!0}}]);
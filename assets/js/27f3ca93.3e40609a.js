"use strict";(self.webpackChunk_discijs_docs=self.webpackChunk_discijs_docs||[]).push([[678],{7522:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>u});var i=a(9901);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=i.createContext({}),p=function(e){var t=i.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},o=function(e){var t=p(e.components);return i.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),c=p(a),k=r,u=c["".concat(d,".").concat(k)]||c[k]||m[k]||l;return a?i.createElement(u,n(n({ref:t},o),{},{components:a})):i.createElement(u,n({ref:t},o))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,n=new Array(l);n[0]=k;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:r,n[1]=s;for(var p=2;p<l;p++)n[p]=a[p];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}k.displayName="MDXCreateElement"},4542:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var i=a(7364),r=(a(9901),a(7522));const l={id:"UserFlagsBitField",title:"Class: UserFlagsBitField",sidebar_label:"UserFlagsBitField",sidebar_position:0,custom_edit_url:null},n=void 0,s={unversionedId:"api/classes/UserFlagsBitField",id:"api/classes/UserFlagsBitField",title:"Class: UserFlagsBitField",description:"Utility structure to help with bitfield creation and manipulation",source:"@site/docs/api/classes/UserFlagsBitField.md",sourceDirName:"api/classes",slug:"/api/classes/UserFlagsBitField",permalink:"/docs/api/classes/UserFlagsBitField",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1681151998,formattedLastUpdatedAt:"Apr 10, 2023",sidebarPosition:0,frontMatter:{id:"UserFlagsBitField",title:"Class: UserFlagsBitField",sidebar_label:"UserFlagsBitField",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Rest",permalink:"/docs/api/classes/Rest"},next:{title:"VerificationStratergy.NativeVerificationStratergy",permalink:"/docs/api/classes/VerificationStratergy.NativeVerificationStratergy"}},d={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"bitfield",id:"bitfield",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"Flags",id:"flags",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"None",id:"none",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"Methods",id:"methods",level:2},{value:"add",id:"add",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"equals",id:"equals",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"has",id:"has",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"remove",id:"remove",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"resolve",id:"resolve",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-8",level:4}],o={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,i.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Utility structure to help with bitfield creation and manipulation"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/BitField"},(0,r.kt)("inlineCode",{parentName:"a"},"BitField"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"UserFlagsBitField"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new UserFlagsBitField"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"baseBits?"),")"),(0,r.kt)("p",null,"Create a new Bitfield Instance"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"baseBits")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/modules#bitfieldresolvable"},(0,r.kt)("inlineCode",{parentName:"a"},"BitFieldResolvable"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BitField.None")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Base bits to institate the class with")))),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/BitField"},"BitField"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/BitField#constructor"},"constructor")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/Bitfield.ts#L17"},"packages/disci/src/structures/Bitfield.ts:17")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"bitfield"},"bitfield"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"bitfield"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"bigint")),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/BitField"},"BitField"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/BitField#bitfield"},"bitfield")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/Bitfield.ts#L12"},"packages/disci/src/structures/Bitfield.ts:12")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"flags"},"Flags"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"Flags"),": typeof ",(0,r.kt)("inlineCode",{parentName:"p"},"UserFlags")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"UserFlags")),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/BitField"},"BitField"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/BitField#flags"},"Flags")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/Bitfield.ts#L96"},"packages/disci/src/structures/Bitfield.ts:96")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"none"},"None"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"None"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"bigint")),(0,r.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/BitField"},"BitField"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/BitField#none"},"None")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/Bitfield.ts#L11"},"packages/disci/src/structures/Bitfield.ts:11")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"add"},"add"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"add"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"bits"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/BitField"},(0,r.kt)("inlineCode",{parentName:"a"},"BitField"))),(0,r.kt)("p",null,"Adds bits to the bitfield"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bits")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/modules#bitfieldresolvable"},(0,r.kt)("inlineCode",{parentName:"a"},"BitFieldResolvable")),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"New bits to add")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/BitField"},(0,r.kt)("inlineCode",{parentName:"a"},"BitField"))),(0,r.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/BitField"},"BitField"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/BitField#add"},"add")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/Bitfield.ts#L26"},"packages/disci/src/structures/Bitfield.ts:26")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"equals"},"equals"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"equals"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"bit"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bit")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/modules#bitfieldresolvable"},(0,r.kt)("inlineCode",{parentName:"a"},"BitFieldResolvable")))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/BitField"},"BitField"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/BitField#equals"},"equals")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/Bitfield.ts#L59"},"packages/disci/src/structures/Bitfield.ts:59")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"has"},"has"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"has"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"bits"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"checks if all bits are present in the bitfield"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bits")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/modules#bitfieldresolvable"},(0,r.kt)("inlineCode",{parentName:"a"},"BitFieldResolvable"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"bits to check")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/BitField"},"BitField"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/BitField#has"},"has")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/Bitfield.ts#L54"},"packages/disci/src/structures/Bitfield.ts:54")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"remove"},"remove"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"remove"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"bits"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/BitField"},(0,r.kt)("inlineCode",{parentName:"a"},"BitField"))),(0,r.kt)("p",null,"Removes bits from the bitfield"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bits")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/modules#bitfieldresolvable"},(0,r.kt)("inlineCode",{parentName:"a"},"BitFieldResolvable")),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bits to remove")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/BitField"},(0,r.kt)("inlineCode",{parentName:"a"},"BitField"))),(0,r.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/BitField"},"BitField"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/BitField#remove"},"remove")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/Bitfield.ts#L40"},"packages/disci/src/structures/Bitfield.ts:40")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"resolve"},"resolve"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"resolve"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"bit"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"bigint")),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bit")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/modules#bitfieldresolvable"},(0,r.kt)("inlineCode",{parentName:"a"},"BitFieldResolvable")))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bigint")),(0,r.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/BitField"},"BitField"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/BitField#resolve"},"resolve")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/Bitfield.ts#L63"},"packages/disci/src/structures/Bitfield.ts:63")))}m.isMDXComponent=!0}}]);
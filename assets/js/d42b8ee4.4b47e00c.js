"use strict";(self.webpackChunk_discijs_docs=self.webpackChunk_discijs_docs||[]).push([[178],{7522:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(9901);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:a,o[1]=u;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},482:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(9901),a=r(4517);const l={tabItem:"tabItem_PJig"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:r},t)}},1652:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7364),a=r(9901),l=r(4517),o=r(5632),u=r(6577),s=r(9599);const i={tabList:"tabList_H6Vn",tabItem:"tabItem_s9OS"};function c(e){let{className:t,block:r,selectedValue:u,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const t=e.currentTarget,r=p.indexOf(t),n=c[r].value;n!==u&&(d(t),s(n))},f=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>p.push(e),onKeyDown:f,onClick:m},o,{className:(0,l.Z)("tabs__item",i.tabItem,o?.className,{"tabs__item--active":u===t})}),r??t)})))}function p(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function d(e){const t=(0,u.Y)(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",i.tabList)},a.createElement(c,(0,n.Z)({},e,t)),a.createElement(p,(0,n.Z)({},e,t)))}function m(e){const t=(0,s.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},6577:(e,t,r)=>{r.d(t,{Y:()=>d});var n=r(9901),a=r(6172),l=r(4537),o=r(2222),u=r(8800);function s(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function i(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??s(r);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function c(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const o=(0,a.k6)(),u=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(u),(0,n.useCallback)((e=>{if(!u)return;const t=new URLSearchParams(o.location.search);t.set(u,e),o.replace({...o.location,search:t.toString()})}),[u,o])]}function d(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=i(e),[o,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[d,m]=p({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),g=(()=>{const e=d??f;return c({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),m(e),b(e)}),[m,b,l]),tabValues:l}}},7655:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=r(7364),a=(r(9901),r(7522)),l=r(1652),o=r(482),u=r(997);const s={},i="Installing",c={unversionedId:"Home/Installing",id:"Home/Installing",title:"Installing",description:"Currently this package is released to npm under tag @dev",source:"@site/docs/Home/Installing.mdx",sourceDirName:"Home",slug:"/Home/Installing",permalink:"/docs/next/Home/Installing",draft:!1,editUrl:"https://github.com/typicalninja493/disci/docs/Home/Installing.mdx",tags:[],version:"current",lastUpdatedAt:1681822090,formattedLastUpdatedAt:"Apr 18, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/next/Home/Intro"},next:{title:"Introduction",permalink:"/docs/next/Webserver Guide/Intro"}},p={},d=[],m={toc:d},f="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installing"},"Installing"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Currently this package is released to npm under tag @dev")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/disci/"},"Npm Page"))),(0,a.kt)("p",null,"Run the relevant command for your package manager of choice"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm i disci\n")),(0,a.kt)(l.Z,{groupId:"packageManager",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"npm",label:"Npm",default:!0,mdxType:"TabItem"},(0,a.kt)(u.Z,{className:"language-bash",mdxType:"CodeBlock"},"npm i disci@dev")),(0,a.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)(u.Z,{className:"language-bash",mdxType:"CodeBlock"},"yarn add disci@dev")),(0,a.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,a.kt)(u.Z,{className:"language-bash",mdxType:"CodeBlock"},"pnpm add disci@dev"))))}b.isMDXComponent=!0}}]);
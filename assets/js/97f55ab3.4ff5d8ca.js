"use strict";(self.webpackChunkkakarot=self.webpackChunkkakarot||[]).push([[91],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,k=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7971:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},l="System operations",s={unversionedId:"kakarot/instructions/system_operations",id:"kakarot/instructions/system_operations",title:"System operations",description:"Internal",source:"@site/docs/kakarot/instructions/system_operations.md",sourceDirName:"kakarot/instructions",slug:"/kakarot/instructions/system_operations",permalink:"/kinto-un/docs/kakarot/instructions/system_operations",draft:!1,editUrl:"https://github.com/sayajin-labs/kakarot/docs/kakarot/instructions/system_operations.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Stop and arithmetic operations",permalink:"/kinto-un/docs/kakarot/instructions/stop_and_arithmetic_operations"},next:{title:"Library",permalink:"/kinto-un/docs/kakarot/library"}},o={},c=[{value:"Internal",id:"internal",level:2},{value:"<code>get_create_address</code>",id:"get_create_address",level:3},{value:"Implicit arguments",id:"implicit-arguments",level:4},{value:"Explicit arguments",id:"explicit-arguments",level:4},{value:"Returns",id:"returns",level:4},{value:"<code>get_create2_address</code>",id:"get_create2_address",level:3},{value:"Implicit arguments",id:"implicit-arguments-1",level:4},{value:"Explicit arguments",id:"explicit-arguments-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"<code>_finalize_loop</code>",id:"_finalize_loop",level:3},{value:"Implicit arguments",id:"implicit-arguments-2",level:4},{value:"Explicit arguments",id:"explicit-arguments-2",level:4},{value:"Returns",id:"returns-2",level:4}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system-operations"},"System operations"),(0,a.kt)("h2",{id:"internal"},"Internal"),(0,a.kt)("h3",{id:"get_create_address"},(0,a.kt)("inlineCode",{parentName:"h3"},"get_create_address")),(0,a.kt)("h4",{id:"implicit-arguments"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,a.kt)("h4",{id:"explicit-arguments"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"sender_address (felt)  \nsalt (felt)  \n")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"evm_contract_address (felt)  \n")),(0,a.kt)("h3",{id:"get_create2_address"},(0,a.kt)("inlineCode",{parentName:"h3"},"get_create2_address")),(0,a.kt)("h4",{id:"implicit-arguments-1"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,a.kt)("h4",{id:"explicit-arguments-1"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"sender_address (felt)  \nbytecode_len (felt)  \nbytecode (felt*)  \nsalt (Uint256)  \n")),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"evm_contract_address (felt)  \n")),(0,a.kt)("h3",{id:"_finalize_loop"},(0,a.kt)("inlineCode",{parentName:"h3"},"_finalize_loop")),(0,a.kt)("h4",{id:"implicit-arguments-2"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,a.kt)("h4",{id:"explicit-arguments-2"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"destroy_contracts_len (felt)  \ndestroy_contracts (felt*)  \n")),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"felt*  \n")))}u.isMDXComponent=!0}}]);
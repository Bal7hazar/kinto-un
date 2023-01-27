"use strict";(self.webpackChunkkakarot=self.webpackChunkkakarot||[]).push([[192],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=o(n),m=r,k=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={},i="Kakarot",s={unversionedId:"kakarot/kakarot",id:"kakarot/kakarot",title:"Kakarot",description:"Constructor",source:"@site/docs/kakarot/kakarot.md",sourceDirName:"kakarot",slug:"/kakarot/",permalink:"/kinto-un/docs/kakarot/",draft:!1,editUrl:"https://github.com/sayajin-labs/kakarot/docs/kakarot/kakarot.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Contract account",permalink:"/kinto-un/docs/kakarot/accounts/contract/contract_account"}},c={},o=[{value:"Constructor",id:"constructor",level:2},{value:"<code>constructor</code>",id:"constructor-1",level:3},{value:"Implicit arguments",id:"implicit-arguments",level:4},{value:"Explicit arguments",id:"explicit-arguments",level:4},{value:"View",id:"view",level:2},{value:"<code>execute</code>",id:"execute",level:3},{value:"Implicit arguments",id:"implicit-arguments-1",level:4},{value:"Explicit arguments",id:"explicit-arguments-1",level:4},{value:"Returns",id:"returns",level:4},{value:"<code>get_account_registry</code>",id:"get_account_registry",level:3},{value:"Implicit arguments",id:"implicit-arguments-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"<code>get_blockhash_registry</code>",id:"get_blockhash_registry",level:3},{value:"Implicit arguments",id:"implicit-arguments-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"External",id:"external",level:2},{value:"<code>execute_at_address</code>",id:"execute_at_address",level:3},{value:"Implicit arguments",id:"implicit-arguments-4",level:4},{value:"Explicit arguments",id:"explicit-arguments-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"<code>set_account_registry</code>",id:"set_account_registry",level:3},{value:"Implicit arguments",id:"implicit-arguments-5",level:4},{value:"Explicit arguments",id:"explicit-arguments-3",level:4},{value:"<code>set_blockhash_registry</code>",id:"set_blockhash_registry",level:3},{value:"Implicit arguments",id:"implicit-arguments-6",level:4},{value:"Explicit arguments",id:"explicit-arguments-4",level:4},{value:"<code>set_native_token</code>",id:"set_native_token",level:3},{value:"Implicit arguments",id:"implicit-arguments-7",level:4},{value:"Explicit arguments",id:"explicit-arguments-5",level:4},{value:"<code>deploy</code>",id:"deploy",level:3},{value:"Implicit arguments",id:"implicit-arguments-8",level:4},{value:"Explicit arguments",id:"explicit-arguments-6",level:4},{value:"Returns",id:"returns-4",level:4}],u={toc:o};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kakarot"},"Kakarot"),(0,r.kt)("h2",{id:"constructor"},"Constructor"),(0,r.kt)("h3",{id:"constructor-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"constructor")),(0,r.kt)("h4",{id:"implicit-arguments"},"Implicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,r.kt)("h4",{id:"explicit-arguments"},"Explicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"owner (felt)  \nnative_token_address_ (felt)  \nevm_contract_class_hash (felt)  \n")),(0,r.kt)("h2",{id:"view"},"View"),(0,r.kt)("h3",{id:"execute"},(0,r.kt)("inlineCode",{parentName:"h3"},"execute")),(0,r.kt)("p",null,"Execute EVM bytecode."),(0,r.kt)("h4",{id:"implicit-arguments-1"},"Implicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,r.kt)("h4",{id:"explicit-arguments-1"},"Explicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"value (felt): The deposited value by the instruction/transaction responsible for this execution  \nbytecode_len (felt): The bytecode length  \nbytecode (felt*): The bytecode to be executed  \ncalldata_len (felt): The calldata length  \ncalldata (felt*): The calldata which can be referenced by the bytecode  \n")),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"stack_accesses_len (felt)  \nstack_accesses (felt*)  \nstack_len (felt)  \nmemory_accesses_len (felt)  \nmemory_accesses (felt*)  \nmemory_bytes_len (felt)  \ngas_used (felt)  \n")),(0,r.kt)("h3",{id:"get_account_registry"},(0,r.kt)("inlineCode",{parentName:"h3"},"get_account_registry")),(0,r.kt)("p",null,"Get the account registry used by kakarot"),(0,r.kt)("h4",{id:"implicit-arguments-2"},"Implicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"address (felt)  \n")),(0,r.kt)("h3",{id:"get_blockhash_registry"},(0,r.kt)("inlineCode",{parentName:"h3"},"get_blockhash_registry")),(0,r.kt)("p",null,"Get the blockhash registry used by kakarot"),(0,r.kt)("h4",{id:"implicit-arguments-3"},"Implicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"address (felt)  \n")),(0,r.kt)("h2",{id:"external"},"External"),(0,r.kt)("h3",{id:"execute_at_address"},(0,r.kt)("inlineCode",{parentName:"h3"},"execute_at_address")),(0,r.kt)("p",null,"execute bytecode of a given contract account"),(0,r.kt)("h4",{id:"implicit-arguments-4"},"Implicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,r.kt)("h4",{id:"explicit-arguments-2"},"Explicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"address (felt): The address of the contract whose bytecode will be executed  \nvalue (felt): The deposited value by the instruction/transaction responsible for this execution  \ngas_limit (felt): Max gas the transaction can use  \ncalldata_len (felt): The calldata length  \ncalldata (felt*): The calldata which contains the entry point and method parameters  \n")),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"stack_accesses_len (felt)  \nstack_accesses (felt*)  \nstack_len (felt)  \nmemory_accesses_len (felt)  \nmemory_accesses (felt*)  \nmemory_bytes_len (felt)  \nevm_contract_address (felt)  \nstarknet_contract_address (felt)  \nreturn_data_len (felt)  \nreturn_data (felt*)  \ngas_used (felt)  \n")),(0,r.kt)("h3",{id:"set_account_registry"},(0,r.kt)("inlineCode",{parentName:"h3"},"set_account_registry")),(0,r.kt)("p",null,"Set the account registry used by kakarot"),(0,r.kt)("h4",{id:"implicit-arguments-5"},"Implicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,r.kt)("h4",{id:"explicit-arguments-3"},"Explicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"registry_address_ (felt): The address of the new account registry contract  \n")),(0,r.kt)("h3",{id:"set_blockhash_registry"},(0,r.kt)("inlineCode",{parentName:"h3"},"set_blockhash_registry")),(0,r.kt)("p",null,"Set the blockhash registry used by kakarot"),(0,r.kt)("h4",{id:"implicit-arguments-6"},"Implicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,r.kt)("h4",{id:"explicit-arguments-4"},"Explicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"blockhash_registry_address_ (felt): The address of the new blockhash registry contract  \n")),(0,r.kt)("h3",{id:"set_native_token"},(0,r.kt)("inlineCode",{parentName:"h3"},"set_native_token")),(0,r.kt)("p",null,"Set the native token used by kakarot"),(0,r.kt)("h4",{id:"implicit-arguments-7"},"Implicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,r.kt)("h4",{id:"explicit-arguments-5"},"Explicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"native_token_address_ (felt): The address of the native token  \n")),(0,r.kt)("h3",{id:"deploy"},(0,r.kt)("inlineCode",{parentName:"h3"},"deploy")),(0,r.kt)("p",null,"Deploy a new contract account and execute constructor"),(0,r.kt)("h4",{id:"implicit-arguments-8"},"Implicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,r.kt)("h4",{id:"explicit-arguments-6"},"Explicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"bytecode_len (felt)  \nbytecode (felt*)  \n")),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"evm_contract_address (felt)  \nstarknet_contract_address (felt)  \n")))}p.isMDXComponent=!0}}]);
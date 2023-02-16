"use strict";(self.webpackChunkkakarot=self.webpackChunkkakarot||[]).push([[216],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=o(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={},i="Library",c={unversionedId:"kakarot/library",id:"kakarot/library",title:"Library",description:"Internal",source:"@site/docs/kakarot/library.md",sourceDirName:"kakarot",slug:"/kakarot/library",permalink:"/kinto-un/docs/kakarot/library",draft:!1,editUrl:"https://github.com/sayajin-labs/kakarot/docs/kakarot/library.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"System operations",permalink:"/kinto-un/docs/kakarot/instructions/system_operations"},next:{title:"Memory",permalink:"/kinto-un/docs/kakarot/memory"}},s={},o=[{value:"Internal",id:"internal",level:2},{value:"<code>constructor</code>",id:"constructor",level:3},{value:"Implicit arguments",id:"implicit-arguments",level:4},{value:"Explicit arguments",id:"explicit-arguments",level:4},{value:"<code>execute_at_address</code>",id:"execute_at_address",level:3},{value:"Implicit arguments",id:"implicit-arguments-1",level:4},{value:"Explicit arguments",id:"explicit-arguments-1",level:4},{value:"Returns",id:"returns",level:4},{value:"<code>set_blockhash_registry</code>",id:"set_blockhash_registry",level:3},{value:"Implicit arguments",id:"implicit-arguments-2",level:4},{value:"Explicit arguments",id:"explicit-arguments-2",level:4},{value:"<code>get_blockhash_registry</code>",id:"get_blockhash_registry",level:3},{value:"Implicit arguments",id:"implicit-arguments-3",level:4},{value:"Explicit arguments",id:"explicit-arguments-3",level:4},{value:"Returns",id:"returns-1",level:4},{value:"<code>set_native_token</code>",id:"set_native_token",level:3},{value:"Implicit arguments",id:"implicit-arguments-4",level:4},{value:"Explicit arguments",id:"explicit-arguments-4",level:4},{value:"<code>deploy_contract_account</code>",id:"deploy_contract_account",level:3},{value:"Implicit arguments",id:"implicit-arguments-5",level:4},{value:"Explicit arguments",id:"explicit-arguments-5",level:4},{value:"Returns",id:"returns-2",level:4},{value:"<code>deploy_externally_owned_account</code>",id:"deploy_externally_owned_account",level:3},{value:"Implicit arguments",id:"implicit-arguments-6",level:4},{value:"Explicit arguments",id:"explicit-arguments-6",level:4},{value:"Returns",id:"returns-3",level:4}],p={toc:o};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"library"},"Library"),(0,r.kt)("h2",{id:"internal"},"Internal"),(0,r.kt)("h3",{id:"constructor"},(0,r.kt)("inlineCode",{parentName:"h3"},"constructor")),(0,r.kt)("p",null,"The constructor of the contract"),(0,r.kt)("h4",{id:"implicit-arguments"},"Implicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,r.kt)("h4",{id:"explicit-arguments"},"Explicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"owner (felt): The address of the owner of the contract  \nnative_token_address_: The ERC20 contract used to emulate ETH  \ncontract_account_class_hash_: The clash hash of the contract account  \nexternally_owned_account_class_hash_  \naccount_proxy_class_hash_  \n")),(0,r.kt)("h3",{id:"execute_at_address"},(0,r.kt)("inlineCode",{parentName:"h3"},"execute_at_address")),(0,r.kt)("p",null,"execute bytecode of a given EVM contract"),(0,r.kt)("h4",{id:"implicit-arguments-1"},"Implicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,r.kt)("h4",{id:"explicit-arguments-1"},"Explicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"address (felt): The address of the contract whose bytecode will be executed  \ncalldata_len (felt)  \ncalldata (felt*): The calldata which contains the entry point and method parameters  \nvalue (felt)  \ngas_limit (felt): Max gas the transaction can use  \n")),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"ExecutionContext  \n")),(0,r.kt)("h3",{id:"set_blockhash_registry"},(0,r.kt)("inlineCode",{parentName:"h3"},"set_blockhash_registry")),(0,r.kt)("p",null,"Set the blockhash registry used by kakarot"),(0,r.kt)("h4",{id:"implicit-arguments-2"},"Implicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,r.kt)("h4",{id:"explicit-arguments-2"},"Explicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"blockhash_registry_address_ (felt): The address of the new blockhash registry contract  \n")),(0,r.kt)("h3",{id:"get_blockhash_registry"},(0,r.kt)("inlineCode",{parentName:"h3"},"get_blockhash_registry")),(0,r.kt)("p",null,"Get the blockhash registry used by kakarot"),(0,r.kt)("h4",{id:"implicit-arguments-3"},"Implicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,r.kt)("h4",{id:"explicit-arguments-3"},"Explicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"address (felt): The address of the current blockhash registry contract  \n")),(0,r.kt)("h3",{id:"set_native_token"},(0,r.kt)("inlineCode",{parentName:"h3"},"set_native_token")),(0,r.kt)("p",null,"Set the native token used by kakarot"),(0,r.kt)("h4",{id:"implicit-arguments-4"},"Implicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,r.kt)("h4",{id:"explicit-arguments-4"},"Explicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"native_token_address_ (felt): The address of the native token  \n")),(0,r.kt)("h3",{id:"deploy_contract_account"},(0,r.kt)("inlineCode",{parentName:"h3"},"deploy_contract_account")),(0,r.kt)("p",null,"deploy contract account"),(0,r.kt)("h4",{id:"implicit-arguments-5"},"Implicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,r.kt)("h4",{id:"explicit-arguments-5"},"Explicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"bytecode_len (felt): : the deploy bytecode length  \nbytecode (felt*): : the deploy bytecode  \n")),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"evm_contract_address (felt): The evm address that is mapped to the newly deployed starknet contract address  \nstarknet_contract_address (felt): The newly deployed starknet contract address  \n")),(0,r.kt)("h3",{id:"deploy_externally_owned_account"},(0,r.kt)("inlineCode",{parentName:"h3"},"deploy_externally_owned_account")),(0,r.kt)("p",null,"Deploy a new externally owned account"),(0,r.kt)("h4",{id:"implicit-arguments-6"},"Implicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,r.kt)("h4",{id:"explicit-arguments-6"},"Explicit arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"evm_address (felt)  \n")),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"starknet_contract_address (felt): The newly deployed starknet contract address  \n")))}u.isMDXComponent=!0}}]);
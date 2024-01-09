"use strict";(self.webpackChunkspec_untp_website=self.webpackChunkspec_untp_website||[]).push([[2106],{5318:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>y});var a=i(7378);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(i),y=n,f=u["".concat(s,".").concat(y)]||u[y]||d[y]||r;return i?a.createElement(f,o(o({ref:t},p),{},{components:i})):a.createElement(f,o({ref:t},p))}));function y(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<r;l++)o[l]=i[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},5611:(e,t,i)=>{i.d(t,{ZP:()=>o});var a=i(5773),n=(i(7378),i(5318));const r={toc:[]};function o(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},r,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses.")))}o.isMDXComponent=!0},3778:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=i(5773),n=(i(7378),i(5318)),r=i(5611);const o={sidebar_position:40,title:"Confidentiality"},c=void 0,s={unversionedId:"specification/Confidentiality",id:"specification/Confidentiality",title:"Confidentiality",description:"There is a balance between the demands of transparency (more supply chain visibility means it's harder to hide greenwshing) and confidentiality (share too much data and you risk expososing commercial secrets). A key UNTP principle is that every supply chain actor should be able to choose their own balance between transparency and confidentiality. To achieve this, UNTP defines six data confidentiality patterns with different degrees of data protection so that they can be appropriately combined to meet the confidentiality goals of each party. This includes the ability to selectively redact data from credentials received from upstream suppliers before passing them on to downstream buyers - without affecting the cryptographic integrity of the data.",source:"@site/docs/specification/Confidentiality.md",sourceDirName:"specification",slug:"/specification/Confidentiality",permalink:"/spec-untp/docs/specification/Confidentiality",draft:!1,editUrl:"https://github.com/uncefact/spec-untp/edit/main/website/docs/specification/Confidentiality.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,title:"Confidentiality"},sidebar:"tutorialSidebar",previous:{title:"Trust Graphs",permalink:"/spec-untp/docs/specification/TrustGraphs"},next:{title:"Anti-Counterfeiting",permalink:"/spec-untp/docs/specification/Counterfeiting"}},l={},p=[{value:"Discoverable Public Data",id:"discoverable-public-data",level:2},{value:"Public Data with GUID key",id:"public-data-with-guid-key",level:2},{value:"Encrypted Data with Shared Key",id:"encrypted-data-with-shared-key",level:2},{value:"Encrypted Data with Requestable Key",id:"encrypted-data-with-requestable-key",level:2},{value:"Selective Redaction",id:"selective-redaction",level:2},{value:"Private Data",id:"private-data",level:2},{value:"Usage Patterns",id:"usage-patterns",level:2}],d={toc:p};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(r.ZP,{mdxType:"Disclaimer"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"There is a balance between the demands of transparency (more supply chain visibility means it's harder to hide greenwshing) and confidentiality (share too much data and you risk expososing commercial secrets). A key UNTP principle is that every supply chain actor should be able to choose their own balance between transparency and confidentiality. To achieve this, UNTP defines six data confidentiality patterns with different degrees of data protection so that they can be appropriately combined to meet the confidentiality goals of each party. This includes the ability to selectively redact data from credentials received from upstream suppliers before passing them on to downstream buyers - without affecting the cryptographic integrity of the data. "),(0,n.kt)("h2",{id:"discoverable-public-data"},"Discoverable Public Data"),(0,n.kt)("h2",{id:"public-data-with-guid-key"},"Public Data with GUID key"),(0,n.kt)("h2",{id:"encrypted-data-with-shared-key"},"Encrypted Data with Shared Key"),(0,n.kt)("h2",{id:"encrypted-data-with-requestable-key"},"Encrypted Data with Requestable Key"),(0,n.kt)("h2",{id:"selective-redaction"},"Selective Redaction"),(0,n.kt)("h2",{id:"private-data"},"Private Data"),(0,n.kt)("h2",{id:"usage-patterns"},"Usage Patterns"))}u.isMDXComponent=!0}}]);
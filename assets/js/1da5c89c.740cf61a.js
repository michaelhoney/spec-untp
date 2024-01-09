"use strict";(self.webpackChunkspec_untp_website=self.webpackChunkspec_untp_website||[]).push([[1075],{5318:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var i=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=i.createContext({}),d=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(r),f=a,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||n;return r?i.createElement(m,o(o({ref:t},l),{},{components:r})):i.createElement(m,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<n;d++)o[d]=r[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5611:(e,t,r)=>{r.d(t,{ZP:()=>o});var i=r(5773),a=(r(7378),r(5318));const n={toc:[]};function o(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},n,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses.")))}o.isMDXComponent=!0},3130:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=r(5773),a=(r(7378),r(5318)),n=r(5611);const o={sidebar_position:30,title:"Data Carriers"},s=void 0,c={unversionedId:"specification/DataCarriers",id:"specification/DataCarriers",title:"Data Carriers",description:"Overview",source:"@site/docs/specification/DataCarriers.md",sourceDirName:"specification",slug:"/specification/DataCarriers",permalink:"/spec-untp/docs/specification/DataCarriers",draft:!1,editUrl:"https://github.com/uncefact/spec-untp/edit/main/website/docs/specification/DataCarriers.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Data Carriers"},sidebar:"tutorialSidebar",previous:{title:"Verifiable Credentials",permalink:"/spec-untp/docs/specification/VerifiableCredentials"},next:{title:"Trust Anchors",permalink:"/spec-untp/docs/specification/TrustAnchors"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"Digital Link Resolvers",id:"digital-link-resolvers",level:2},{value:"Link Vocabulary",id:"link-vocabulary",level:2},{value:"1D Barcodes",id:"1d-barcodes",level:2},{value:"2d Matrix Codes",id:"2d-matrix-codes",level:2},{value:"QR Codes",id:"qr-codes",level:2},{value:"RFID Codes",id:"rfid-codes",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(n.ZP,{mdxType:"Disclaimer"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Digital data needs to be linked to the physical product it describes and should be discoverable through the identifiers printed on that product serial or batch number. For high volume goods and easy / reliable discovery, these identifiers are already typically represented as barcodes, matrix codes, QR codes, or RFID encoded data. UNTP supports the use of these existing data carriers. A basic UNTP principle is that if you have a product then you should be able to find ESG data about that product even when the identifier is not a web link. Therefore, the UNTP defines a generalised protocol (based on ",(0,a.kt)("a",{parentName:"p",href:"https://www.gs1.org/standards/gs1-digital-link"},"GS1 digital link"),") to allow any identifier scheme (GS1 or otherwise) to be consistently resolvable so that product passports and other data can always be accessed from the identifier of the product. The UNTP also defines a specific QR based data carrier format for use on paper/PDF versions of conformity credentials or other trade documents that provides secure access to credentials in a way that is both human and machine readable.  This provides a simple but powerful mechanism to facilitate uptake of digital solutions alongside existing paper/PDF based frameworks."),(0,a.kt)("h2",{id:"digital-link-resolvers"},"Digital Link Resolvers"),(0,a.kt)("h2",{id:"link-vocabulary"},"Link Vocabulary"),(0,a.kt)("h2",{id:"1d-barcodes"},"1D Barcodes"),(0,a.kt)("h2",{id:"2d-matrix-codes"},"2d Matrix Codes"),(0,a.kt)("h2",{id:"qr-codes"},"QR Codes"),(0,a.kt)("h2",{id:"rfid-codes"},"RFID Codes"))}u.isMDXComponent=!0}}]);
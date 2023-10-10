"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[752],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(r),g=o,d=c["".concat(u,".").concat(g)]||c[g]||b[g]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},17026:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"How to report bugs",keywords:["nacos","submit","reporting bugs"],description:"How to report bugs"},i="Reporting bugs",s={unversionedId:"v2/contribution/how-to-reporting-bugs",id:"version-1.X/v2/contribution/how-to-reporting-bugs",title:"How to report bugs",description:"How to report bugs",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.X/v2/contribution/how-to-reporting-bugs.md",sourceDirName:"v2/contribution",slug:"/v2/contribution/how-to-reporting-bugs",permalink:"/en/docs/1.X/v2/contribution/how-to-reporting-bugs",draft:!1,tags:[],version:"1.X",frontMatter:{title:"How to report bugs",keywords:["nacos","submit","reporting bugs"],description:"How to report bugs"},sidebar:"docs",previous:{title:"Pull request template",permalink:"/en/docs/1.X/v2/contribution/pull-request"},next:{title:"Community",permalink:"/en/docs/1.X/v2/community/"}},u={},p=[],l={toc:p},c="wrapper";function b(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reporting-bugs"},"Reporting bugs"),(0,o.kt)("p",null,"If any part of the Nacos project has bugs or documentation mistakes, please let us know by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/issues/new"},"opening an issue"),". We treat bugs and mistakes very seriously and believe no issue is too small, anyOne is implement. Before creating a bug report, please check that an issue reporting the same problem does not already exist."),(0,o.kt)("p",null,"To make the bug report accurate and easy to understand, please try to create bug reports that are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Specific. Include as much details as possible: which version, what environment, what configuration, etc. If the bug is related to running the Nacos server, please attach the Nacos log (the starting log with Nacos configuration is especially important).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Reproducible. Include the steps to reproduce the problem. We understand some issues might be hard to reproduce, please includes the steps that might lead to the problem. If possible, please attach the affected Nacos data dir and stack strace to the bug report.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Unique. Do not duplicate existing bug report."))),(0,o.kt)("p",null,"It may be worthwhile to read ",(0,o.kt)("a",{parentName:"p",href:"http://fantasai.inkedblade.net/style/talks/filing-good-bugs/"},"Elika Etemad\u2019s article on filing good bug reports")," before creating a bug report."),(0,o.kt)("p",null,"We might ask for further information to locate a bug. A duplicated bug report will be closed."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/issues/new"},"nacos-issue")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://fantasai.inkedblade.net/style/talks/filing-good-bugs/"},"filing-good-bugs")),(0,o.kt)("h1",{id:"reporting-security-bugs"},"Reporting security bugs"),(0,o.kt)("p",null,"If you find any security problem in the Nacos project, please let us know through ",(0,o.kt)("a",{parentName:"p",href:"https://security.alibaba.com"},"ASRC (Alibaba Security Response Center)"),"."))}b.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[1719],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},45107:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"Nacos roadmap",keywords:["Nacos","roadmap"],description:"Nacos roadmap"},i="Nacos roadmap",l={unversionedId:"archive/roadmap",id:"version-2.X/archive/roadmap",title:"Nacos roadmap",description:"Nacos roadmap",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.X/archive/roadmap.md",sourceDirName:"archive",slug:"/archive/roadmap",permalink:"/en/docs/archive/roadmap",draft:!1,tags:[],version:"2.X",frontMatter:{title:"Nacos roadmap",keywords:["Nacos","roadmap"],description:"Nacos roadmap"}},c={},s=[{value:"Nacos 1.0",id:"nacos-10",level:2},{value:"Nacos 2.0",id:"nacos-20",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nacos-roadmap"},"Nacos roadmap"),(0,r.kt)("p",null,"We plan to make Nacos available for production from Nacos 0.8.0. Prior to this release, we recommend that you use it only in development and test environments.\nOur current plan is to strive to make Nacos production ready in the 6-8 months. The plan might be adjusted due to various factors, including the priority adjustment according to the voice of the community, but the overall plan is that it should not take longer than one year."),(0,r.kt)("p",null,"Below are the main roadmaps and plans for the next year."),(0,r.kt)("h2",{id:"nacos-10"},"Nacos 1.0"),(0,r.kt)("p",null,"Main goals:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Build a simple and easy to use, service related set of tools, including the service discovery, configuration management, service metadata storage, push, consistency and metadata management etc;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Seamless integration with and support for open-source ecosystems including ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/spring-cloud-alibaba"},"Spring Cloud"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes"},"Kubernetes"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/dubbo"},"Dubbo")," etc., while at the same time developing a variety of excellent features for large-scale production."))),(0,r.kt)("p",null,"The following is a rough version plan:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"0.1 Basic Nacos server and simple OpenAPI and Java SDK;"),(0,r.kt)("li",{parentName:"ul"},"0.2 - 0.3 Seamless support for Kubernetes, Service Mesh and Spring Cloud service discovery and configuration management;"),(0,r.kt)("li",{parentName:"ul"},"0.4 - 0.5 Build an easy-to-use Web UI/User Console;"),(0,r.kt)("li",{parentName:"ul"},"0.6 - 0.7 High availability, ease of use, monitoring and alert etc;"),(0,r.kt)("li",{parentName:"ul"},"0.8 Production ready;"),(0,r.kt)("li",{parentName:"ul"},"0.9 Large scale performance tuning and benchmark;"),(0,r.kt)("li",{parentName:"ul"},"1.0 GA for large scale production.")),(0,r.kt)("h2",{id:"nacos-20"},"Nacos 2.0"),(0,r.kt)("p",null,"Mainly focus on the unified service management, service sharing and service management system of the open service platform construction, mainly includes two aspects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dubbo 4.0 + Nacos 2.0: An Open-Service Platform")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.yuque.com/lark/0/2018/png/15914/1531319724777-d19b0304-535c-4af9-bee1-f358b6e55d91.png",alt:"Screen Shot 2018-07-11 at 22.32.17.png | left"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kubernetes + Spring Cloud: Unified Service Management")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.yuque.com/lark/0/2018/png/15914/1531319755930-0040e67e-ca05-47b9-9cd0-07ffd7452eae.png",alt:"Screen Shot 2018-07-11 at 22.35.30.png | left"})))}m.isMDXComponent=!0}}]);
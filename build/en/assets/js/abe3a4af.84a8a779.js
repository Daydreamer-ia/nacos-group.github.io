"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[2874],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},75645:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={title:"What is Nacos",keywords:["nacos"],description:"What is Nacos"},i="What is Nacos",s={unversionedId:"v2/what-is-nacos",id:"version-2.X/v2/what-is-nacos",title:"What is Nacos",description:"What is Nacos",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.X/v2/what-is-nacos.md",sourceDirName:"v2",slug:"/v2/what-is-nacos",permalink:"/en/docs/v2/what-is-nacos",draft:!1,tags:[],version:"2.X",frontMatter:{title:"What is Nacos",keywords:["nacos"],description:"What is Nacos"},sidebar:"docs",next:{title:"Nacos Concepts",permalink:"/en/docs/v2/concepts"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"What is Nacos\uff1f",id:"what-is-nacos-1",level:2},{value:"Nacos Map",id:"nacos-map",level:2},{value:"Nacos landscape",id:"nacos-landscape",level:2},{value:"What\u2019s next",id:"whats-next",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-nacos"},"What is Nacos"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Document optimizing...")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Welcome to Nacos!"),(0,r.kt)("p",null,"Nacos /n\u0251:k\u0259\u028as/  is the acronym for 'Dynamic Naming and Configuration Service'\uff0can easy-to-use dynamic service discovery, configuration and service management platform for building cloud native applications\u3002"),(0,r.kt)("p",null,"Nacos is committed to help you discover, configure, and manage your microservices. It provides a set of simple and useful features enabling you to realize dynamic service discovery, service configuration, service metadata and traffic management. "),(0,r.kt)("p",null,"Nacos makes it easier and faster to construct, deliver and manage your microservices platform. It is the infrastructure that supports a service-centered modern application architecture with a microservices or cloud-native approach."),(0,r.kt)("h2",{id:"what-is-nacos-1"},"What is Nacos\uff1f"),(0,r.kt)("p",null,"Service is a first-class citizen in Nacos. Nacos supports discovering, configuring, and managing almost all types of services:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Kubernetes Service")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://grpc.io/docs/guides/concepts.html#service-definition"},"gRPC")," & ",(0,r.kt)("a",{parentName:"p",href:"https://dubbo.apache.org"},"Dubbo RPC Service")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-cloud"},"Spring Cloud RESTful Service")),(0,r.kt)("p",null,"Key features of Nacos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Service Discovery And Service Health Check")),(0,r.kt)("p",{parentName:"li"},"  Nacos supports both DNS-based and RPC-based (Dubbo/gRPC) service discovery. After a service provider registers a service with ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/v2/guide/user/sdk"},"native"),", ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/v2/guide/user/open-api"},"OpenAPI"),", or ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/v2/guide/user/other-language"},"a dedicated agent"),", a consumer can discover the service with either ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/v2/what-is-nacos"},"DNS_TODO")," or ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/v2/guide/user/open-api"},"HTTP"),"."),(0,r.kt)("p",{parentName:"li"},"  Nacos provides real-time health check to prevent services from sending requests to unhealthy hosts or service instances. Nacos supports both transport layer (PING or TCP) health check and application layer (such as HTTP, Redis, MySQL, and user-defined protocol) health check. For the health check of complex clouds and network topologies(such as VPC, Edge Service etc), Nacos provides both agent mode and server mode health check. Nacos also provide a unity service health dashboard to help you manage the availability and traffic of services.",(0,r.kt)("br",{parentName:"p"}),"\n","")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Dynamic configuration management")),(0,r.kt)("p",{parentName:"li"},"  Dynamic configuration service allows you to manage the configuration of all applications and services in a centralized, externalized and dynamic manner across all environments."),(0,r.kt)("p",{parentName:"li"},"  Dynamic configuration eliminates the need to redeploy applications and services when configurations are updated."),(0,r.kt)("p",{parentName:"li"},"  Centralized management of configuration makes it more convenient for you to achieve stateless services and elastic expansion of service instances on-demand."),(0,r.kt)("p",{parentName:"li"},"  Nacos provides an easy-to-use UI (",(0,r.kt)("a",{parentName:"p",href:"http://console.nacos.io/nacos/index.html"},"DEMO"),") to help you manage all of your application or services's configurations. It provides some out-of-box features including configuration version tracking, canary/beta release, configuration rollback, and client configuration update status tracking to ensure the safety and control the risk of configuration change. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Dynamic DNS service")),(0,r.kt)("p",{parentName:"li"},"  Dynamic DNS service which supports weighted routing makes it easier for you to implement mid-tier load balancing, flexible routing policies, traffic control, and simple DNS resolution services in your production environment within your data center. Dynamic DNS service makes it easier for you to implement DNS-based Service discovery. "),(0,r.kt)("p",{parentName:"li"},"  Nacos provides some simple ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/v2/what-is-nacos"},"DNS APIs TODO")," for you to manage your DNS domain names and IPs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Service governance and metadata management")),(0,r.kt)("p",{parentName:"li"},"  Nacos allows you to manage all of your services and metadata from the perspective of a microservices platform builder. This includes managing service description, life cycle, service static dependencies analysis, service health status, service traffic management\uff0crouting and security rules, service SLA, and first line metrics."))),(0,r.kt)("h2",{id:"nacos-map"},"Nacos Map"),(0,r.kt)("p",null,"A picture to understand Nacos, the following structure will be described in detail."),(0,r.kt)("p",null,"// TODO this picture need to translate."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"nacos_map",src:a(26506).Z,width:"1880",height:"1198"})," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Large picture of characteristics: To introduce the characteristics of the problem domain we want to solve from the functional characteristics and non-functional characteristics."),(0,r.kt)("li",{parentName:"ul"},"Larger architecture: Get a quick entry into the Nacos world with a clear architecture"),(0,r.kt)("li",{parentName:"ul"},"Business picture: Business scenarios that can be supported with current features, and best practices"),(0,r.kt)("li",{parentName:"ul"},"Big picture of the ecology: systematically sorting out the relationship between Nacos and mainstream technology ecology"),(0,r.kt)("li",{parentName:"ul"},"Big picture of advantage: showcase Nacos core competitiveness"),(0,r.kt)("li",{parentName:"ul"},"Strategic picture: Nacos's macro advantage from strategic to tactical level")),(0,r.kt)("h2",{id:"nacos-landscape"},"Nacos landscape"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/11189/1533045871534-e64b8031-008c-4dfc-b6e8-12a597a003fb.png",alt:"nacos_landscape.png"})),(0,r.kt)("p",null,"As the figure above shows, Nacos seamlessly supports open source ecologies including "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/en/docs/v2/ecology/use-nacos-with-spring-cloud"},"Spring Cloud")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/en/docs/v2/ecology/use-nacos-with-dubbo"},"Apache Dubbo and Dubbo Mesh")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/en/docs/v2/quickstart/quick-start-kubernetes"},"Kubernetes and CNCF"))),(0,r.kt)("p",null,"Use Nacos to simplify your solutions in service discovery, configuration management, and service governance and management. With Nacos, microservices management in open source system is easy."),(0,r.kt)("p",null,"For more information about how to use Nacos with other open source projects, see the following:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/v2/ecology/use-nacos-with-spring-cloud"},"Use Nacos with Spring Cloud")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/v2/quickstart/quick-start-kubernetes"},"Use Nacos with Kubernetes")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/v2/ecology/use-nacos-with-dubbo"},"Use Nacos with Dubbo")),(0,r.kt)("h2",{id:"whats-next"},"What\u2019s next"),(0,r.kt)("p",null,"Continue with ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/v2/quickstart/quick-start"},"quick start")," to get started with Nacos."))}d.isMDXComponent=!0},26506:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nacosMap-3c656c929f7f9c46ba81eb46125c51d8.jpg"}}]);
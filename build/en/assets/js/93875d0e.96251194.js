"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[2502],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"Nacos 2.0.0 compatibility",keywords:["Nacos","2.0.0"],description:"Nacos 2.0.0 compatibility"},i=void 0,l={unversionedId:"v2/upgrading/2.0.0-compatibility",id:"version-2.X/v2/upgrading/2.0.0-compatibility",title:"Nacos 2.0.0 compatibility",description:"Nacos 2.0.0 compatibility",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.X/v2/upgrading/2.0.0-compatibility.md",sourceDirName:"v2/upgrading",slug:"/v2/upgrading/2.0.0-compatibility",permalink:"/en/docs/v2/upgrading/2.0.0-compatibility",draft:!1,tags:[],version:"2.X",frontMatter:{title:"Nacos 2.0.0 compatibility",keywords:["Nacos","2.0.0"],description:"Nacos 2.0.0 compatibility"},sidebar:"docs",previous:{title:"Kubernetes Nacos",permalink:"/en/docs/v2/quickstart/quick-start-kubernetes"},next:{title:"Nacos 2.0 \u5347\u7ea7\u6587\u6863",permalink:"/en/docs/v2/upgrading/2.0.0-upgrading"}},s={},c=[{value:"Benchmark for Nacos 2.0.0",id:"benchmark-for-nacos-200",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Features completion and adaptation for the old client",id:"features-completion-and-adaptation-for-the-old-client",level:2},{value:"Configuration Management",id:"configuration-management",level:3},{value:"JAVA SDK",id:"java-sdk",level:4},{value:"Other SDK",id:"other-sdk",level:4},{value:"openAPI",id:"openapi",level:4},{value:"Service Discovery",id:"service-discovery",level:3},{value:"JAVA SDK",id:"java-sdk-1",level:4},{value:"Other SDK",id:"other-sdk-1",level:4},{value:"openAPI",id:"openapi-1",level:4},{value:"Console",id:"console",level:3},{value:"Ecological compatibility",id:"ecological-compatibility",level:2},{value:"Spring Cloud Alibaba",id:"spring-cloud-alibaba",level:3},{value:"Dubbo",id:"dubbo",level:3},{value:"Nacos Spring Boot",id:"nacos-spring-boot",level:3},{value:"Usage",id:"usage",level:2},{value:"SDK and Console",id:"sdk-and-console",level:3},{value:"Server",id:"server",level:3},{value:"FAQ",id:"faq",level:2},{value:"Whether support the old client?",id:"whether-support-the-old-client",level:3},{value:"Error <code>code:503,msg:server is DOWN now, please try again later!</code> during using.",id:"error-code503msgserver-is-down-now-please-try-again-later-during-using",level:3},{value:"<code>com.alibaba.nacos.consistency.entity</code> can&#39;t be found in source codes",id:"comalibabanacosconsistencyentity-cant-be-found-in-source-codes",level:3},{value:"Error <code>Connection is unregistered.</code> or <code>Client not connected, current status:STARTING</code> during startup client.",id:"error-connection-is-unregistered-or-client-not-connected-current-statusstarting-during-startup-client",level:3},{value:"Nacos2.0 adds ports 9848 and 9849 for GRPC communication. Do I need to configure additional settings in application.properties?",id:"nacos20-adds-ports-9848-and-9849-for-grpc-communication-do-i-need-to-configure-additional-settings-in-applicationproperties",level:3},{value:"To be added...",id:"to-be-added",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Document optimizing...")),(0,o.kt)("h1",{id:"nacos20-code-storage-location"},"Nacos2.0 code storage location"),(0,o.kt)("p",null,"The Nacos code is currently stored in the feature_support_grpc_core branch. You need to switch to this branch and start again. The startup method is the same as Nacos 1.x, and Welcome to contribute."),(0,o.kt)("h1",{id:"nacos-200-compatibility"},"Nacos 2.0.0 compatibility"),(0,o.kt)("p",null,"After discussion and development in the community, the core features of Nacos 2.0.0 based on the long connection have been developed completely."),(0,o.kt)("p",null,"2.0.0 has released and welcome to use."),(0,o.kt)("p",null,"2.0.0 support to smoothly upgrade and downgrade with Nacos1.X server, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/v2/upgrading/2.0.0-upgrading"},"Nacos2.0 upgrade document")," for details."),(0,o.kt)("h2",{id:"benchmark-for-nacos-200"},"Benchmark for Nacos 2.0.0"),(0,o.kt)("p",null,"Detail see: ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/v2/guide/admin/nacos2-naming-benchmark"},"Nacos2.0 Naming Benchmark")," and ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/v2/guide/admin/nacos2-config-benchmark"},"Nacos2.0 Config Benchmark")," ."),(0,o.kt)("h2",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"Compared with 1.X, Nacos2.0 adds gRPC communication mode, so there are 2 ports need to be added. The new ports are generated with a certain offset based on the configured main port (server.port)."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"port"),(0,o.kt)("th",{parentName:"tr",align:null},"offset from main port"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9848"),(0,o.kt)("td",{parentName:"tr",align:null},"1000"),(0,o.kt)("td",{parentName:"tr",align:null},"The client gRPC requests the server port, which is used by the client to initiate a connection and request to the server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9849"),(0,o.kt)("td",{parentName:"tr",align:null},"1001"),(0,o.kt)("td",{parentName:"tr",align:null},"Server-side gRPC requests server-side port, used for synchronization between services, etc.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"When using VIP/nginx requests, you need to configure it as TCP forwarding, instead of http2 forwarding, otherwise the connection will be disconnected by nginx.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"nacos2_port_exposure.png",src:n(54957).Z,width:"2000",height:"1125"})," "),(0,o.kt)("p",null,"The client has the same offset logic. The users configures the main port (default 8848) as in the use of 1.X, and calculates the corresponding gRPC port (default 9848) through the same offset."),(0,o.kt)("p",null,"Therefore, if there is a port forwarding or firewall between the client and the server, the port forwarding configuration and firewall configuration need to be adjusted accordingly."),(0,o.kt)("p",null,"Other detail refer to ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/v2/guide/admin/deployment"},"Deployment Guide")," and replace the version to 2.1.1."),(0,o.kt)("h2",{id:"compatibility"},"Compatibility"),(0,o.kt)("p",null,"The server of Nacos2.0 is fully compatible with 1.X clients. The Nacos2.0 client is not compatible with the Nacos1.X server because it uses gRPC. Please do not use the client of version 2.0 or higher to connect to the Nacos1.X server."),(0,o.kt)("h2",{id:"features-completion-and-adaptation-for-the-old-client"},"Features completion and adaptation for the old client"),(0,o.kt)("h3",{id:"configuration-management"},"Configuration Management"),(0,o.kt)("h4",{id:"java-sdk"},"JAVA SDK"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Completely compatible with all interfaces of 1.X client;"),(0,o.kt)("li",{parentName:"ul"},"Completely implement all interfaces of 2.X client.")),(0,o.kt)("h4",{id:"other-sdk"},"Other SDK"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Completely compatible")),(0,o.kt)("h4",{id:"openapi"},"openAPI"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fully compatible with all openAPIs related to the configuration management.")),(0,o.kt)("h3",{id:"service-discovery"},"Service Discovery"),(0,o.kt)("h4",{id:"java-sdk-1"},"JAVA SDK"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Completely compatible with all interfaces of 1.X client;"),(0,o.kt)("li",{parentName:"ul"},"Completely implement all interfaces of 2.X client.")),(0,o.kt)("h4",{id:"other-sdk-1"},"Other SDK"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Completely compatible")),(0,o.kt)("h4",{id:"openapi-1"},"openAPI"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Register instance (Supported)"),(0,o.kt)("li",{parentName:"ul"},"Deregister instance (Supported)"),(0,o.kt)("li",{parentName:"ul"},"Modify instance (Supported)"),(0,o.kt)("li",{parentName:"ul"},"Query instances (Supported)"),(0,o.kt)("li",{parentName:"ul"},"Query instance detail (Supported)"),(0,o.kt)("li",{parentName:"ul"},"Send instance beat (Supported)"),(0,o.kt)("li",{parentName:"ul"},"Create service (Supported)"),(0,o.kt)("li",{parentName:"ul"},"Delete service (Supported)"),(0,o.kt)("li",{parentName:"ul"},"Update service (Supported)"),(0,o.kt)("li",{parentName:"ul"},"Query service (Supported)"),(0,o.kt)("li",{parentName:"ul"},"Query service list (Supported)"),(0,o.kt)("li",{parentName:"ul"},"Query system switches (Supported)"),(0,o.kt)("li",{parentName:"ul"},"Update system switch (Supported)"),(0,o.kt)("li",{parentName:"ul"},"Query system metrics (Supported)"),(0,o.kt)("li",{parentName:"ul"},"Query server list (Supported)"),(0,o.kt)("li",{parentName:"ul"},"Query the leader of current cluster (Deprecated)"),(0,o.kt)("li",{parentName:"ul"},"Update instance health status (Supported)"),(0,o.kt)("li",{parentName:"ul"},"Batch update instance metadata(Supported)"),(0,o.kt)("li",{parentName:"ul"},"Batch delete instance metadata(Supported)")),(0,o.kt)("h3",{id:"console"},"Console"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Completely compatible with ",(0,o.kt)("inlineCode",{parentName:"li"},"Config Management")),(0,o.kt)("li",{parentName:"ul"},"Completely compatible with ",(0,o.kt)("inlineCode",{parentName:"li"},"Authority Control")),(0,o.kt)("li",{parentName:"ul"},"Completely compatible with ",(0,o.kt)("inlineCode",{parentName:"li"},"Namespace")),(0,o.kt)("li",{parentName:"ul"},"Completely compatible with ",(0,o.kt)("inlineCode",{parentName:"li"},"Cluster Managerment")),(0,o.kt)("li",{parentName:"ul"},"Completely compatible with ",(0,o.kt)("inlineCode",{parentName:"li"},"Service Managerment"))),(0,o.kt)("h2",{id:"ecological-compatibility"},"Ecological compatibility"),(0,o.kt)("h3",{id:"spring-cloud-alibaba"},"Spring Cloud Alibaba"),(0,o.kt)("p",null,"Use Nacos 2.0 connection features by specifying nacos-client version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    <dependency>\n        <groupId>com.alibaba.cloud</groupId>\n        <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>\n        <version>2.1.5.RELEASE</version>\n        <exclusions>\n            <exclusion>\n                <groupId>com.alibaba.nacos</groupId>\n                <artifactId>nacos-client</artifactId>\n            </exclusion>\n        </exclusions>\n    </dependency>\n    <dependency>\n        <groupId>com.alibaba.cloud</groupId>\n        <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>\n        <version>2.1.5.RELEASE</version>\n        <exclusions>\n            <exclusion>\n                <groupId>com.alibaba.nacos</groupId>\n                <artifactId>nacos-client</artifactId>\n            </exclusion>\n        </exclusions>\n    </dependency>\n    <dependency>\n        <groupId>com.alibaba.nacos</groupId>\n        <artifactId>nacos-client</artifactId>\n        <version>2.1.1</version>\n    </dependency>\n")),(0,o.kt)("h3",{id:"dubbo"},"Dubbo"),(0,o.kt)("p",null,"The Nacos2.0 version of the client is re-adapted to Dubbo2.7.X. And the Dubbo community is making changes to the new version, no longer relying on reflection, please see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/dubbo/issues/7291"},"Dubbo#7291"),"."),(0,o.kt)("h3",{id:"nacos-spring-boot"},"Nacos Spring Boot"),(0,o.kt)("p",null,"Nacos spring boot had released a new version to adapt to the 2.0.0 client, please upgrade to newest version."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"sdk-and-console"},"SDK and Console"),(0,o.kt)("p",null,"The usage of Nacos 2.0.0 version is exactly the same as that of Nacos 1.X version. For the client interface, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/v2/guide/user/sdk"},"JAVA SDK"),"."),(0,o.kt)("h3",{id:"server"},"Server"),(0,o.kt)("p",null,"The usage of the Nacos 2.0.0 server is not much different from the old version. Here only to describe the new configuration parameters in the new version."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"nacos.naming.clean.empty-service.interval"),(0,o.kt)("td",{parentName:"tr",align:null},"60000(ms)"),(0,o.kt)("td",{parentName:"tr",align:null},"The interval time of Nacos auto clean empty service. This parameter will replace ",(0,o.kt)("inlineCode",{parentName:"td"},"nacos.naming.empty-service.clean.period-time-ms")," in old version.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"nacos.naming.clean.empty-service.expired-time"),(0,o.kt)("td",{parentName:"tr",align:null},"60000(ms)"),(0,o.kt)("td",{parentName:"tr",align:null},"The expired time for Nacos judge whether an empty service is expired. When an empty service has no updated for setting time, it will be removed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"nacos.naming.clean.expired-metadata.interval"),(0,o.kt)("td",{parentName:"tr",align:null},"5000(ms)"),(0,o.kt)("td",{parentName:"tr",align:null},"The interval time of Nacos auto clean expired metadata.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"nacos.naming.clean.expired-metadata.expired-time"),(0,o.kt)("td",{parentName:"tr",align:null},"60000(ms)"),(0,o.kt)("td",{parentName:"tr",align:null},"The expired time for Nacos judge whether a metadata is expired. When services or instances removed and after setting time, the metadata of removed services or instances will be deleted.")))),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"whether-support-the-old-client"},"Whether support the old client?"),(0,o.kt)("p",null,"Configuration Management can support all clients after 1.0, and Service Management can support all client after 1.2."),(0,o.kt)("p",null,"So recommending use Nacos client after 1.2.0."),(0,o.kt)("p",null,"But Nacos 1.X client can't use new connection features, so recommending to use 2.0.0 client strongly."),(0,o.kt)("h3",{id:"error-code503msgserver-is-down-now-please-try-again-later-during-using"},"Error ",(0,o.kt)("inlineCode",{parentName:"h3"},"code:503,msg:server is DOWN now, please try again later!")," during using."),(0,o.kt)("p",null,"After version 1.4, Nacos use SOFA-Jraft to replace old raft implementation by nacos-self. Jraft will election leader with raft protocol and save the cluster metadata. If cluster restart with ip changed, it might cause Jraft can election leader successfully so that nacos can't start up."),(0,o.kt)("p",null,"The solution is removed the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," directory under nacos directory and restart."),(0,o.kt)("p",null,"Or use ",(0,o.kt)("inlineCode",{parentName:"p"},"-Dnacos.server.ip=${domain}")," jvm parameters to start nacos and set domain list in ",(0,o.kt)("inlineCode",{parentName:"p"},"nacos/conf/cluster.conf")," to avoid the ip change effect."),(0,o.kt)("h3",{id:"comalibabanacosconsistencyentity-cant-be-found-in-source-codes"},(0,o.kt)("inlineCode",{parentName:"h3"},"com.alibaba.nacos.consistency.entity")," can't be found in source codes"),(0,o.kt)("p",null,"This package will be auto-generated by ",(0,o.kt)("inlineCode",{parentName:"p"},"protobuf"),", so if you want to read source code or do some develop, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"mvn compile")," to generate them. If you are using IDEA, you can also use IDEA's protobuf plugin."),(0,o.kt)("h3",{id:"error-connection-is-unregistered-or-client-not-connected-current-statusstarting-during-startup-client"},"Error ",(0,o.kt)("inlineCode",{parentName:"h3"},"Connection is unregistered.")," or ",(0,o.kt)("inlineCode",{parentName:"h3"},"Client not connected, current status:STARTING")," during startup client."),(0,o.kt)("p",null,"The reason is that the client gRPC cannot establish a connection with the server. Please use ",(0,o.kt)("inlineCode",{parentName:"p"},"telnet ${nacos.server.address}:${nacos.server.grpc.port}")," to test the network and to check the server port is correct."),(0,o.kt)("p",null,"If there is no problem with the server, check whether the configuration is wrong. The configured ports of the server and client should be the same."),(0,o.kt)("p",null,"If there is no problem with the configuration, check whether there is a firewall or VIP port forwarding problem. The gRPC ports of Nacos2.0 are calculated by the offset of the main port, so the port forwarding also needs to meet the offset."),(0,o.kt)("h3",{id:"nacos20-adds-ports-9848-and-9849-for-grpc-communication-do-i-need-to-configure-additional-settings-in-applicationproperties"},"Nacos2.0 adds ports 9848 and 9849 for GRPC communication. Do I need to configure additional settings in application.properties?"),(0,o.kt)("p",null,"No, these two ports are calculated by 8848 + 1000 and 8848 + 1001 in Nacos2.0 internally. No additional configuration by the user is required in the configuration file. But if you are using docker or there is a port forwarding method to start, you need to configure these two ports."),(0,o.kt)("p",null,"###I want to start nacos2.0, and uses nginx proxy, how to deal with the port 9848, should it be exposed through nginx?"),(0,o.kt)("p",null,"If there is a firewall or nginx port forwarding problem, you need to configure the corresponding port exposure. For example, in nginx, on the basis of the already exposed 8848(x), an additional 9848(x+1000) needs to be exposed."),(0,o.kt)("h3",{id:"to-be-added"},"To be added..."))}u.isMDXComponent=!0},54957:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nacos2_port_exposure-63f18a02b66c0cf15d993e2cfc9ef805.png"}}]);
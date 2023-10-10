"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[8865],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),s=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=s(a),d=r,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(k,l(l({ref:e},p),{},{components:a})):n.createElement(k,l({ref:e},p))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[u]="string"==typeof t?t:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},89448:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"Install the HA Nacos cluster in Rainbond with one-click",keywords:["nacos","kubernetes","rainbond","cloudnative"],description:"Current documentation describes how to install a high availability Nacos cluster with one click through Rainbond, a cloud native application management platform."},l="Rainbond Nacos",i={permalink:"/en/blog/use-nacos-with-rainbond",source:"@site/i18n/en/docusaurus-plugin-content-blog/use-nacos-with-rainbond.md",title:"Install the HA Nacos cluster in Rainbond with one-click",description:"Current documentation describes how to install a high availability Nacos cluster with one click through Rainbond, a cloud native application management platform.",date:"2023-10-10T08:15:08.000Z",formattedDate:"October 10, 2023",tags:[],readingTime:3.25,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Install the HA Nacos cluster in Rainbond with one-click",keywords:["nacos","kubernetes","rainbond","cloudnative"],description:"Current documentation describes how to install a high availability Nacos cluster with one click through Rainbond, a cloud native application management platform."},prevItem:{title:"up-to-2w-star",permalink:"/en/blog/up-to-2w-star"},nextItem:{title:"xiaomi-scale",permalink:"/en/blog/xiaomi-scale"}},c={authorsImageUrls:[]},s=[{value:"Combination of Rainbond and Nacos",id:"combination-of-rainbond-and-nacos",level:2},{value:"About application template",id:"about-application-template",level:2}],p={toc:s},u="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Current documentation describes how to install a high availability ",(0,r.kt)("a",{parentName:"p",href:"https://nacos.io"},"Nacos")," cluster with one-click through ",(0,r.kt)("a",{parentName:"p",href:"https://www.rainbond.com/?channel=nacos"},"Rainbond"),", a cloud native application management platform. This approach is suitable for users who are less familiar with Kubernetes, containerization and other complex technologies, and lowers the barrier to deploying Nacos in Kubernetes."),(0,r.kt)("h1",{id:"background"},"Background"),(0,r.kt)("h2",{id:"combination-of-rainbond-and-nacos"},"Combination of Rainbond and Nacos"),(0,r.kt)("p",null,"Rainbond is an easy to use open source cloud native application management platform. With the help of it, users can complete the deployment, operation and maintenance of microservices in a graphical interface. With the help of Kubernetes and containerization technology, automatic operation and maintenance capabilities such as fault self-healing and elastic expansion can be endowed to users' applications."),(0,r.kt)("p",null,"Rainbond has a built-in native Service Mesh microservice framework, and also has a good integration experience with other microservice frameworks such as Spring Cloud and Dubbo. Therefore, a large number of Rainbond users may also be users of the Nacos microservices registry. Instead of worrying about how to deploy a Nacos cluster, the Rainbond team made Nacos a one-click application template for free download and installation by open source users. This installation method greatly reduces the deployment burden of users using Nacos clusters. Currently, versions 1.4.2 and 2.0.4 are supported."),(0,r.kt)("h2",{id:"about-application-template"},"About application template"),(0,r.kt)("p",null,"Application template is package manager for Rainbond cloud native application management platform. Users can install applications into Rainbond with one-click. No matter how complex the application is, the application template abstracts it into an package, which is installed with docker images of all the components, configuration information, and relationships between all the components."),(0,r.kt)("h1",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Deployed Rainbond cloud native application management platform,",(0,r.kt)("a",{parentName:"p",href:"https://www.rainbond.com/docs/quick-start/quick-install/?channel=nacos"},"Quick Start")," Can run in a PC within a container.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Internet connection."))),(0,r.kt)("h1",{id:"quick-start"},"Quick Start"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Access the built-in open source app store"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"App Store")," on the left, switch to the ",(0,r.kt)("strong",{parentName:"p"},"Open Source App Store"),", and search ",(0,r.kt)("strong",{parentName:"p"},"nacos")," to find the Nacos-cluster application.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nacos-cluster/nacos-cluster-1.png",alt:"nacos-1"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"One-click install"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Install")," on the right of nacos-Cluster to enter the installation page. After filling in simple information, click ",(0,r.kt)("strong",{parentName:"p"},"OK")," to start the installation, and the page automatically jumps to the topology view.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nacos-cluster/nacos-cluster-2.png",alt:"nacos-2"})),(0,r.kt)("p",null,"Parameters\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Options"),(0,r.kt)("th",{parentName:"tr",align:null},"Instructions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u56e2\u961f\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"User-defined workspace isolated by namespace")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u96c6\u7fa4\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"Select which K8s cluster Nacos will be deployed to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u5e94\u7528"),(0,r.kt)("td",{parentName:"tr",align:null},"Select the application to which Nacos will be deployed, which contains several associated components")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u7248\u672c"),(0,r.kt)("td",{parentName:"tr",align:null},"Select the version of Nacos, the useable versions are 1.4.2 and 2.0.4")))),(0,r.kt)("p",null,"After a few minutes, the Nacos cluster is installed and up and running."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nacos-cluster/nacos-cluster-3.png",alt:"nacos-3"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Testing"))),(0,r.kt)("p",null,"Other microservice components that need to perform service registration can connect to the Nacos cluster using ",(0,r.kt)("inlineCode",{parentName:"p"},"${NACOS_HOST}:${NACOS_PORT}")," after built ",(0,r.kt)("a",{parentName:"p",href:"https://www.rainbond.com/docs/use-manual/user-manual/component-connection/regist_and_discover"},"dependencies")," to Nacos."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Service registration")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "http://${NACOS_HOST}:${NACOS_PORT}/nacos/v1/ns/instance?serviceName=nacos.naming.serviceName&ip=20.18.7.10&port=8080"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Service discovery")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://${NACOS_HOST}:${NACOS_PORT}/nacos/v1/ns/instance/list?serviceName=nacos.naming.serviceName"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Publish config")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "http://${NACOS_HOST}:${NACOS_PORT}/nacos/v1/cs/configs?dataId=nacos.cfg.dataId&group=test&content=helloWorld"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Get config")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://${NACOS_HOST}:${NACOS_PORT}/nacos/v1/cs/configs?dataId=nacos.cfg.dataId&group=test"\n')))),(0,r.kt)("h1",{id:"advanced"},"Advanced"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The one-click installation of the Nacos cluster contains three instances, and the self-organizing and electing of the cluster is done automatically by initContailer.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nacos-cluster/nacos-cluster-4.png",alt:"nacos-4"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mysql is integrated as the data source by default. You can switch to other external data sources by configuring the following environment variables in the ",(0,r.kt)("strong",{parentName:"li"},"Nacos-server-2.0.4")," component's environment configuration.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Necessary"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MYSQL_SERVICE_HOST")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Database address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MYSQL_SERVICE_PORT")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Database port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MYSQL_SERVICE_USER")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Database username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MYSQL_SERVICE_PASSWORD")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Database password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MYSQL_SERVICE_DB_NAME")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Database name")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Nacos-server-2.0.4")," data persistence directory is generated by default.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nacos-cluster/nacos-cluster-5.png",alt:"nacos-5"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"By default, the health check mechanism of ",(0,r.kt)("strong",{parentName:"li"},"Nacos-server-2.0.4")," is configured to ensure that instances are automatically offline when faults occur and online after recovery.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nacos-cluster/nacos-cluster-6.png",alt:"nacos-6"})))}m.isMDXComponent=!0}}]);